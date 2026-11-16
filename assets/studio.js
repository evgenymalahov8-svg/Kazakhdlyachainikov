/* Студия озвучки «Языки для чайников» — общая для всех курсов.
   Диктор записывает фразы в браузере. Записи хранятся на устройстве (IndexedDB) и сразу звучат в курсе.
   «Скачать архив» даёт папку audio/ с файлами и manifest.json (вместе с тем, что уже лежит на сайте).
   Режим «Запись подряд»: крупный текст, автостоп по тишине, автопереход к следующей фразе, горячие клавиши. */
(function () {
  function norm(t) { return String(t).trim().toLowerCase().replace(/[.!?…]+$/, ""); }
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function esc(x) { return String(x == null ? "" : x).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; }); }
  function bt(txt, cls, fn) { var b = el("button", "btn " + (cls || ""), txt); b.type = "button"; if (fn) b.addEventListener("click", fn); return b; }

  // ---------- хранилище ----------
  function db(name) {
    return new Promise(function (res, rej) {
      if (!window.indexedDB) return rej(new Error("no idb"));
      var r = indexedDB.open(name, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore("clips"); };
      r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
    });
  }
  function op(name, mode, fn) { return db(name).then(function (d) { return new Promise(function (res, rej) { var t = d.transaction("clips", mode); fn(t.objectStore("clips")); t.oncomplete = function () { res(); }; t.onerror = function () { rej(t.error); }; }); }); }
  function loadAll(name) {
    return db(name).then(function (d) { return new Promise(function (res) {
      var out = {}, c = d.transaction("clips", "readonly").objectStore("clips").openCursor();
      c.onsuccess = function () { var cur = c.result; if (cur) { out[cur.key] = cur.value; cur.continue(); } else res(out); };
      c.onerror = function () { res(out); };
    }); }).catch(function () { return {}; });
  }

  // ---------- ZIP без сжатия ----------
  var CRC = (function () { var t = []; for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(u8) { var c = 0xFFFFFFFF; for (var i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(files) {
    var enc = new TextEncoder(), parts = [], central = [], off = 0;
    files.forEach(function (f) {
      var name = enc.encode(f.name), d = f.data, crc = crc32(d);
      var h = new DataView(new ArrayBuffer(30)); h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true);
      h.setUint32(14, crc, true); h.setUint32(18, d.length, true); h.setUint32(22, d.length, true); h.setUint16(26, name.length, true);
      parts.push(new Uint8Array(h.buffer), name, d);
      var c = new DataView(new ArrayBuffer(46)); c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true);
      c.setUint32(16, crc, true); c.setUint32(20, d.length, true); c.setUint32(24, d.length, true); c.setUint16(28, name.length, true); c.setUint32(42, off, true);
      central.push(new Uint8Array(c.buffer), name); off += 30 + name.length + d.length;
    });
    var cs = central.reduce(function (a, x) { return a + x.length; }, 0), e = new DataView(new ArrayBuffer(22));
    e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, cs, true); e.setUint32(16, off, true);
    return new Blob(parts.concat(central, [new Uint8Array(e.buffer)]), { type: "application/zip" });
  }
  function fname(prefix, k, type) {
    var h = 2166136261; for (var i = 0; i < k.length; i++) { h ^= k.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    var ext = /mp4|m4a|aac/.test(type) ? "m4a" : /ogg/.test(type) ? "ogg" : /mpeg|mp3/.test(type) ? "mp3" : "webm";
    return prefix + "_" + h.toString(16) + "." + ext;
  }
  function pickMime() {
    if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return "";
    return ["audio/mp4;codecs=mp4a.40.2", "audio/mp4", "audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"].filter(function (m) { return MediaRecorder.isTypeSupported(m); })[0] || "";
  }

  // ---------- запись с индикатором громкости и автостопом по тишине ----------
  var SHARED = { stream: null };
  function getStream() {
    if (SHARED.stream && SHARED.stream.getAudioTracks().some(function (t) { return t.readyState === "live"; })) return Promise.resolve(SHARED.stream);
    return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } }).then(function (st) { SHARED.stream = st; return st; });
  }
  function releaseMic() { if (SHARED.stream) { SHARED.stream.getTracks().forEach(function (t) { t.stop(); }); SHARED.stream = null; } }
  window.addEventListener("hashchange", releaseMic); window.addEventListener("pagehide", releaseMic);
  function Recorder(onLevel) {
    var self = this;
    self.start = function (opts) {
      return getStream().then(function (stream) {
        var mime = pickMime(), mr = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream), chunks = [];
        self.mr = mr;
        var AC = window.AudioContext || window.webkitAudioContext, spoke = false, heard = 0, quietSince = 0, t0 = Date.now(), raf, ctx = null;
        if (AC) {
          try {
            ctx = new AC(); if (ctx.state === "suspended" && ctx.resume) ctx.resume();
            var an = ctx.createAnalyser(); an.fftSize = 512; ctx.createMediaStreamSource(stream).connect(an);
            var buf = new Uint8Array(an.fftSize);
            var tick = function () {
              an.getByteTimeDomainData(buf); var s2 = 0; for (var i = 0; i < buf.length; i++) { var v = (buf[i] - 128) / 128; s2 += v * v; }
              var rms = Math.sqrt(s2 / buf.length); if (rms > heard) heard = rms; onLevel && onLevel(Math.min(1, rms * 6));
              var now = Date.now();
              if (rms > 0.04) { spoke = true; quietSince = 0; } else if (spoke && !quietSince) quietSince = now;
              if (opts.autoStop && spoke && quietSince && now - quietSince > 900 && mr.state === "recording") { mr.stop(); return; }
              if (now - t0 > 15000 && mr.state === "recording") { mr.stop(); return; }
              raf = requestAnimationFrame(tick);
            };
            raf = requestAnimationFrame(tick);
          } catch (e) { ctx = null; }
        }
        return new Promise(function (res) {
          mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          mr.onstop = function () {
            cancelAnimationFrame(raf); try { ctx && ctx.close(); } catch (e) {}
            onLevel && onLevel(0);
            // если анализатор ничего не слышал (так бывает в Safari), не считаем запись пустой
            res({ blob: new Blob(chunks, { type: mr.mimeType || mime || "audio/mp4" }), spoke: spoke || heard < 0.002 });
          };
          mr.start(1000);
        });
      });
    };
    self.stop = function () { if (self.mr && self.mr.state === "recording") self.mr.stop(); };
    self.busy = function () { return !!(self.mr && self.mr.state === "recording"); };
  }

  function render(box, cfg) {
    box.innerHTML = "";
    var h = el("h1", "h-pixel"); h.appendChild(el("span", "gold", "Студия озвучки")); box.appendChild(h);
    if (cfg.guide !== false) { var gl = el("p", "studio-guide", "<a class='btn small' href='" + (cfg.guide || "../dictor/index.html") + "' target='_blank' rel='noopener'>Инструкция для дикторов</a>"); box.appendChild(gl); }
    box.appendChild(el("p", "muted", "Здесь диктор записывает " + cfg.langName + " слова и фразы курса. Записи сразу звучат на этом устройстве вместо синтезатора, а после загрузки на GitHub — у всех."));
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      box.appendChild(el("p", "notice", "Этот браузер не умеет записывать звук. Откройте страницу в Chrome, Edge, Яндекс Браузере или Safari и разрешите микрофон.")); return;
    }
    var acc = cfg.accents ? (localStorage.getItem(cfg.db + "_acc") || cfg.accents[0][0]) : "";
    function key(t) { return (acc ? acc + "|" : "") + norm(t); }
    var REC = {}, SITE = {}, groups = cfg.groups(), all = [], seen = {};
    groups.forEach(function (g) { g.items = g.items.filter(function (it) { var n = norm(it.t); if (!n || seen[n]) return false; seen[n] = 1; all.push(it); return true; }); });

    var top = el("div", "card studio-top");
    var stat = el("p", "pl-rec"); top.appendChild(stat);
    var row1 = el("div", "row studio-ctl");
    if (cfg.accents) {
      var accSel = el("select", "pg-field"); accSel.setAttribute("aria-label", "Акцент диктора");
      cfg.accents.forEach(function (a) { var o = el("option", null, "Акцент диктора: " + esc(a[1])); o.value = a[0]; if (a[0] === acc) o.selected = true; accSel.appendChild(o); });
      accSel.addEventListener("change", function () { acc = accSel.value; try { localStorage.setItem(cfg.db + "_acc", acc); } catch (e) {} draw(); });
      row1.appendChild(accSel);
    }
    var grpSel = el("select", "pg-field"); grpSel.setAttribute("aria-label", "Что записывать");
    grpSel.appendChild(Object.assign(el("option", null, "Все разделы"), { value: "-1" }));
    groups.forEach(function (g, i) { var o = el("option", null, esc(g.name)); o.value = String(i); grpSel.appendChild(o); });
    var fSel = el("select", "pg-field"); fSel.setAttribute("aria-label", "Показать");
    [["todo", "Только незаписанные"], ["all", "Все фразы"], ["done", "Только записанные"]].forEach(function (o) { var x = el("option", null, o[1]); x.value = o[0]; fSel.appendChild(x); });
    row1.appendChild(grpSel); row1.appendChild(fSel); top.appendChild(row1);
    var row2 = el("div", "row studio-ctl");
    var conv = bt("● Запись подряд", "primary", function () { conveyor(); });
    var dl = bt("Скачать архив записей", "", function () { download(false); });
    row2.appendChild(conv); row2.appendChild(dl);
    var canShare = false; try { canShare = !!(navigator.canShare && window.File && navigator.canShare({ files: [new File(["x"], "a.zip", { type: "application/zip" })] })); } catch (e) {}
    var sh = null; if (canShare) { sh = bt("Отправить архив (Telegram, почта…)", "primary", function () { download(true); }); row2.appendChild(sh); }
    top.appendChild(row2);
    top.appendChild(el("p", "notice-small", "Совет: поделите работу — каждый диктор выбирает свой раздел в списке «Все разделы» и записывает только его. Фразы, которые уже есть на сайте, отмечены и в «незаписанные» не попадают."));
    box.appendChild(top);
    var list = el("div", "studio-list"); box.appendChild(list);
    var help = el("div", "card");
    help.innerHTML = "<h3>Как записывать быстрее</h3><ul class='pl-list'><li><b>«Запись подряд»</b>: фраза крупно на экране, запись останавливается сама, когда вы замолчали, и сразу открывается следующая. Руки свободны — удобно с телефона на подставке.</li><li>Клавиши: <b>Пробел</b> — запись / стоп, <b>→</b> — дальше, <b>←</b> — назад, <b>P</b> — прослушать, <b>R</b> — перезаписать.</li><li>Тихая комната, микрофон в 20–30 см. Говорите естественно, в обычном темпе, без «дикторской» интонации.</li><li><b>С телефона</b> (Safari, Яндекс, Chrome): разрешите микрофон, когда браузер спросит. Записывайте в «Запись подряд» — кнопки крупные, экран не гаснет. Чтобы сохранить работу, нажмите <b>«Отправить архив»</b> и выберите Telegram или почту.</li><li>Записи хранятся только в этом браузере, пока вы не отправите или не скачаете архив. На iPhone данные сайта могут стереться, если не заходить неделю, — отправляйте архив после каждой сессии.</li></ul>" +
      "<h3>Как выложить для всех</h3><ol class='pl-list'><li>«Скачать архив записей» → распакуйте → внутри папка <b>audio</b> (в ней уже и старые записи с сайта).</li><li>На github.com откройте папку курса (<b>" + esc(cfg.folder) + "</b>) → <b>Add file → Upload files</b> → перетащите папку <b>audio</b> целиком с компьютера.</li><li>Или пришлите архивы в чат: я объединю записи нескольких дикторов, переведу в mp3 и подключу.</li></ol>";
    box.appendChild(help);

    function isDone(it) { return !!(REC[key(it.t)] || SITE[key(it.t)]); }
    function counts() { var n = all.filter(isDone).length; stat.innerHTML = "Записано <b>" + n + "</b> из <b>" + all.length + "</b>" + (cfg.accents ? " · акцент: " + esc((cfg.accents.filter(function (a) { return a[0] === acc; })[0] || [])[1] || "") : ""); }
    function playBlob(b, cb) { try { var a = new Audio(URL.createObjectURL(b)); a.onended = cb || null; a.play().catch(function () { cb && cb(); }); } catch (e) { cb && cb(); } }
    function playItem(it, cb) { var r = REC[key(it.t)]; if (r) return playBlob(r.blob, cb); var s = SITE[key(it.t)]; if (s) { var a = new Audio(cfg.dir + s); a.onended = cb || null; a.play().catch(function () { cb && cb(); }); return; } cb && cb(); }
    function save(it, blob) {
      var k = key(it.t), v = { blob: blob, type: blob.type, text: it.t, acc: acc, date: Date.now() };
      return op(cfg.db, "readwrite", function (s) { s.put(v, k); }).then(function () {
        REC[k] = v; cfg.setLocal(k, blob); counts(); unsaved++;
        if (unsaved >= 25) { unsaved = 0; remind(); }
      }).catch(function () { REC[k] = v; cfg.setLocal(k, blob); counts(); warnStore(); });
    }
    function remove(it) { var k = key(it.t); return op(cfg.db, "readwrite", function (s) { s.delete(k); }).then(function () { delete REC[k]; cfg.setLocal(k, null); counts(); }); }
    var rec = new Recorder(), unsaved = 0;
    try { navigator.storage && navigator.storage.persist && navigator.storage.persist(); } catch (e) {}
    function warnStore() { if (box.querySelector(".studio-warn")) return; var w = el("p", "notice studio-warn", "Браузер не даёт сохранить записи на устройстве (так бывает в приватном режиме). Записи живут, пока открыта страница, — скачайте или отправьте архив до закрытия."); top.appendChild(w); }
    function remind() { var w = el("p", "notice", "Уже 25 новых записей. Сохраните их: «Отправить архив» или «Скачать архив». На iPhone браузер может стереть данные сайта, если не заходить на него неделю."); top.appendChild(w); setTimeout(function () { w.remove(); }, 12000); }
    function row(it) {
      var r = el("div", "studio-row" + (isDone(it) ? " done" : ""));
      r.appendChild(el("div", "studio-txt", "<b lang='" + cfg.lang + "'>" + esc(it.t) + "</b>" + (it.hint ? "<i>" + esc(it.hint) + "</i>" : "") + (it.ru ? "<span>" + esc(it.ru) + "</span>" : "") + (SITE[key(it.t)] && !REC[key(it.t)] ? "<em>уже на сайте</em>" : "")));
      var b = el("div", "studio-btns");
      var tts = bt("Синтезатор", "small", function () { cfg.tts(it.t, tts, acc); }); b.appendChild(tts);
      var rb = bt("● Запись", "small primary"); b.appendChild(rb);
      var pl = bt("▶ Запись", "small", function () { playItem(it); }); pl.disabled = !isDone(it); b.appendChild(pl);
      var rm = bt("✕", "small", function () { remove(it).then(function () { r.classList.toggle("done", isDone(it)); rm.disabled = !REC[key(it.t)]; pl.disabled = !isDone(it); }); }); rm.title = "Удалить запись"; rm.disabled = !REC[key(it.t)]; b.appendChild(rm);
      rb.addEventListener("click", function () {
        if (rec.busy()) { rec.stop(); return; }
        rb.textContent = "■ Стоп"; rb.classList.add("rec-on");
        rec.start({ autoStop: false }).then(function (o) {
          rb.textContent = "● Запись"; rb.classList.remove("rec-on");
          if (o.blob.size < 1500 || !o.spoke) { alert("Запись получилась пустой — попробуйте ещё раз ближе к микрофону."); return; }
          save(it, o.blob).then(function () { r.classList.add("done"); pl.disabled = rm.disabled = false; playBlob(o.blob); });
        }).catch(function () { rb.textContent = "● Запись"; rb.classList.remove("rec-on"); alert("Нет доступа к микрофону. Разрешите микрофон для этого сайта в настройках браузера."); });
      });
      r.appendChild(b); return r;
    }
    function visible() {
      var gi = +grpSel.value, mode = fSel.value, out = [];
      groups.forEach(function (g, i) { if (gi >= 0 && i !== gi) return; out.push({ g: g, items: g.items.filter(function (it) { return mode === "all" || (mode === "done" ? isDone(it) : !isDone(it)); }) }); });
      return out;
    }
    function draw() {
      list.innerHTML = ""; var shown = 0;
      visible().forEach(function (v) {
        if (!v.items.length) return;
        var det = el("details", "card studio-grp"); if (!shown) det.open = true;
        det.appendChild(el("summary", null, "<b>" + esc(v.g.name) + "</b> · " + v.g.items.filter(isDone).length + " / " + v.g.items.length));
        v.items.forEach(function (it) { det.appendChild(row(it)); }); list.appendChild(det); shown++;
      });
      if (!shown) list.appendChild(el("p", "notice", fSel.value === "todo" ? "В этом разделе всё записано! Скачайте архив." : "Пока пусто."));
      counts();
    }
    grpSel.addEventListener("change", draw); fSel.addEventListener("change", draw);

    // ---------- «Запись подряд» ----------
    function conveyor() {
      var queue = []; visible().forEach(function (v) { queue = queue.concat(v.items); });
      if (fSel.value === "all" || fSel.value === "done") queue = queue.filter(function (it) { return !isDone(it); }).length ? queue : queue;
      if (!queue.length) { alert("Нечего записывать: в выбранном разделе всё готово."); return; }
      var i = 0, auto = true, next = true;
      var ov = el("div", "studio-ov"), pane = el("div", "studio-pane"), lock = null;
      try { navigator.wakeLock && navigator.wakeLock.request("screen").then(function (l) { lock = l; }).catch(function () {}); } catch (e) {}
      ov.appendChild(pane); document.body.appendChild(ov); document.body.style.overflow = "hidden";
      var meter = el("div", "studio-meter"), fill = el("i"); meter.appendChild(fill);
      function close() { rec.stop(); try { lock && lock.release(); } catch (e) {} document.removeEventListener("keydown", keys); ov.remove(); document.body.style.overflow = ""; draw(); }
      function show() {
        var it = queue[i]; pane.innerHTML = "";
        var hd = el("div", "studio-ov-top"); hd.appendChild(el("span", null, (i + 1) + " / " + queue.length + (isDone(it) ? " · записано ✓" : ""))); hd.appendChild(bt("✕ Закрыть", "small", close)); pane.appendChild(hd);
        pane.appendChild(el("div", "studio-big", "<b lang='" + cfg.lang + "'>" + esc(it.t) + "</b>" + (it.hint ? "<i>" + esc(it.hint) + "</i>" : "") + (it.ru ? "<span>" + esc(it.ru) + "</span>" : "")));
        pane.appendChild(meter);
        var c = el("div", "row studio-ov-btns");
        var rb = bt(rec.busy() ? "■ Стоп" : "● Записать", "primary studio-rec", toggle); c.appendChild(rb);
        c.appendChild(bt("▶", "", function () { playItem(it); }));
        c.appendChild(bt("Синтезатор", "", function () { cfg.tts(it.t, null, acc); }));
        c.appendChild(bt("← Назад", "", function () { if (i > 0) { i--; show(); } }));
        c.appendChild(bt("Дальше →", "", function () { go(); }));
        pane.appendChild(c);
        var o = el("div", "row studio-ov-opts");
        var a1 = el("label", null, "<input type='checkbox'" + (auto ? " checked" : "") + "> автостоп по тишине"); a1.firstChild.addEventListener("change", function (e) { auto = e.target.checked; }); o.appendChild(a1);
        var a2 = el("label", null, "<input type='checkbox'" + (next ? " checked" : "") + "> сразу следующая фраза"); a2.firstChild.addEventListener("change", function (e) { next = e.target.checked; }); o.appendChild(a2);
        pane.appendChild(o);
        pane.appendChild(el("p", "notice-small studio-keys", "Пробел — запись / стоп · → дальше · ← назад · P — прослушать · R — перезаписать"));
      }
      function go() { if (i < queue.length - 1) { i++; show(); } else { pane.innerHTML = ""; pane.appendChild(el("div", "studio-big", "<b>Готово!</b><span>Все фразы этого раздела записаны. Можно скачать архив.</span>")); pane.appendChild(bt("Закрыть", "primary", close)); } }
      function toggle() {
        if (rec.busy()) { rec.stop(); return; }
        var it = queue[i]; var b = pane.querySelector(".studio-rec"); if (b) { b.textContent = "■ Стоп"; b.classList.add("rec-on"); }
        rec.start({ autoStop: auto }).then(function (o) {
          if (o.blob.size < 1500 || !o.spoke) { show(); var p = el("p", "notice", "Не услышали голос — попробуйте ещё раз ближе к микрофону."); pane.appendChild(p); return; }
          save(it, o.blob).then(function () {
            if (next) { playBlob(o.blob); go(); }
            else { show(); playBlob(o.blob); }
          });
        }).catch(function () { show(); alert("Нет доступа к микрофону. Разрешите микрофон для этого сайта в настройках браузера."); });
      }
      rec = new Recorder(function (lv) { fill.style.width = Math.round(lv * 100) + "%"; });
      function keys(e) {
        if (e.target && /input|select|textarea/i.test(e.target.tagName)) return;
        if (e.code === "Space") { e.preventDefault(); toggle(); }
        else if (e.key === "ArrowRight") { e.preventDefault(); go(); }
        else if (e.key === "ArrowLeft") { e.preventDefault(); if (i > 0) { i--; show(); } }
        else if (/^[pз]$/i.test(e.key)) playItem(queue[i]);
        else if (/^[rк]$/i.test(e.key)) { if (!rec.busy()) toggle(); }
        else if (e.key === "Escape") close();
      }
      document.addEventListener("keydown", keys);
      show();
    }

    function download(share) {
      var keys = Object.keys(REC); if (!keys.length && !Object.keys(SITE).length) { alert("Пока нет записей."); return; }
      dl.disabled = true; dl.textContent = "Собираю архив…"; if (sh) sh.disabled = true;
      var manifest = Object.assign({}, SITE), files = [], listTxt = [];
      Promise.all(keys.map(function (k) { return new Response(REC[k].blob).arrayBuffer().then(function (buf) { var n = fname(cfg.prefix, k, REC[k].type); manifest[k] = n; files.push({ name: "audio/" + n, data: new Uint8Array(buf) }); listTxt.push(n + "\t" + REC[k].text + (REC[k].acc ? "\t" + REC[k].acc : "")); }); }))
        .then(function () {
          files.push({ name: "audio/manifest.json", data: new TextEncoder().encode(JSON.stringify(manifest, null, 1)) });
          files.push({ name: "audio/список.txt", data: new TextEncoder().encode("Новые записи этого архива (старые с сайта остаются на сайте):\n" + listTxt.join("\n")) });
          var blob = zip(files), name = cfg.prefix + "-audio-" + new Date().toISOString().slice(0, 10) + ".zip";
          if (share) {
            var f = new File([blob], name, { type: "application/zip" });
            return navigator.share({ files: [f], title: "Записи диктора", text: "Архив записей для «Языки для чайников»" }).catch(function () {});
          }
          var url = URL.createObjectURL(blob), a = document.createElement("a"); a.href = url; a.download = name; document.body.appendChild(a); a.click(); a.remove();
          setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
        }).then(function () { dl.disabled = false; dl.textContent = "Скачать архив записей"; if (sh) sh.disabled = false; });
    }
    Promise.all([loadAll(cfg.db), fetch(cfg.dir + "manifest.json", { cache: "no-cache" }).then(function (r) { return r.ok ? r.json() : {}; }).catch(function () { return {}; })])
      .then(function (x) { REC = x[0]; SITE = x[1] || {}; draw(); });
  }

  window.LDCStudio = { render: render, loadAll: loadAll, norm: norm };
  // совместимость со старым именем в казахском курсе
  window.KZStudio = { loadAll: function () { return loadAll("ldc_kz_rec"); }, norm: norm, render: function (box, api) { render(box, { db: "ldc_kz_rec", prefix: "kk", lang: "kk", langName: "казахские", folder: "kazakh", dir: "audio/", groups: function () { return api.groups().map(function (g) { return { name: g.name, items: g.items.map(function (it) { return { t: it.kk, ru: it.ru, hint: it.hint }; }) }; }); }, tts: function (t, b) { api.tts(t, b); }, setLocal: api.setLocal }); } };
})();

/* стили студии (одинаковые для всех курсов) */
(function () {
  var css = ".studio-ctl{display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin:6px 0}.studio-ctl .pg-field{width:auto;min-width:0;max-width:100%;margin:0}" +
    ".studio-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:8px 12px;padding:10px 0;border-bottom:1px dashed rgba(0,0,0,.2)}" +
    ".studio-row.done .studio-txt b::after{content:' ✓';color:#1f8a3b}.studio-txt{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1 1 220px}" +
    ".studio-txt b{font-size:18px}.studio-txt i,.studio-big i{font-style:normal;font-size:13px;opacity:.7}.studio-txt span{font-size:14px;opacity:.75}.studio-txt em{font-style:normal;font-size:12px;color:#1f8a3b;font-weight:700}" +
    ".studio-btns{display:flex;flex-wrap:wrap;gap:6px}.studio-grp summary{cursor:pointer;padding:4px 0;font-size:16px}.studio-list{margin:14px 0}" +
    ".btn.rec-on{background:#d62828!important;color:#fff!important;animation:recpulse 1s steps(2) infinite}@keyframes recpulse{50%{opacity:.65}}" +
    ".studio-ov{position:fixed;top:0;right:0;bottom:0;left:0;z-index:90;background:rgba(0,0,0,.55);display:flex;align-items:center;justify-content:center;padding:14px}" +
    ".studio-pane{background:#fff;color:#111;border:4px solid #111;box-shadow:8px 8px 0 #111;width:min(720px,100%);max-height:100%;overflow:auto;padding:18px}" +
    ".studio-ov-top{display:flex;justify-content:space-between;align-items:center;gap:10px;font-weight:700;margin-bottom:10px}" +
    ".studio-big{display:flex;flex-direction:column;gap:8px;text-align:center;padding:24px 8px}.studio-big b{font-size:clamp(26px,6vw,44px);line-height:1.2}.studio-big span{font-size:18px;opacity:.75}" +
    ".studio-meter{height:12px;border:3px solid #111;margin:6px 0 14px;background:#f2f2f2}.studio-meter i{display:block;height:100%;width:0;background:#1f8a3b;transition:width .08s}" +
    ".studio-ov-btns{display:flex;flex-wrap:wrap;gap:8px;justify-content:center}.studio-ov-btns .studio-rec{font-size:16px;padding:14px 22px}.studio-ov-opts{display:flex;flex-wrap:wrap;gap:8px 18px;justify-content:center;margin:12px 0 4px;font-size:14px}" +
    "@media (hover:none){.studio-keys{display:none}}" + "@media (max-width:560px){.studio-ov{padding:0;align-items:stretch}.studio-pane{border-width:0;box-shadow:none;min-height:100%;padding:14px 12px calc(14px + env(safe-area-inset-bottom))}.studio-ov-btns .btn{flex:1 1 40%}.studio-ov-btns .studio-rec{flex:1 1 100%;font-size:18px;padding:20px}.studio-btns .btn{flex:1 1 auto}}" +
    ".studio-ov-opts input{-webkit-appearance:checkbox;appearance:auto;width:18px;height:18px;vertical-align:middle;margin-right:6px}";
  var s = document.createElement("style"); s.textContent = css; (document.head || document.documentElement).appendChild(s);
})();
