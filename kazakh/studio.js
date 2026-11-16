/* Студия озвучки казахского курса.
   Диктор записывает фразы прямо в браузере; записи хранятся на этом устройстве (IndexedDB)
   и сразу звучат в курсе вместо синтезатора. «Скачать архив» даёт папку audio/ с manifest.json —
   её кладут в kazakh/audio/ на GitHub, и записи слышат все. */
(function () {
  var DB = "ldc_kz_rec", ST = "clips";
  function norm(t) { return String(t).trim().toLowerCase().replace(/[.!?…]+$/, ""); }
  function open() {
    return new Promise(function (res, rej) {
      if (!window.indexedDB) return rej(new Error("no idb"));
      var r = indexedDB.open(DB, 1);
      r.onupgradeneeded = function () { r.result.createObjectStore(ST); };
      r.onsuccess = function () { res(r.result); }; r.onerror = function () { rej(r.error); };
    });
  }
  function tx(mode, fn) { return open().then(function (db) { return new Promise(function (res, rej) { var t = db.transaction(ST, mode), s = t.objectStore(ST), out = fn(s); t.oncomplete = function () { res(out && out.result !== undefined ? out.result : out); }; t.onerror = function () { rej(t.error); }; }); }); }
  function put(k, v) { return tx("readwrite", function (s) { s.put(v, k); }); }
  function del(k) { return tx("readwrite", function (s) { s.delete(k); }); }
  function loadAll() {
    return open().then(function (db) {
      return new Promise(function (res) {
        var out = {}, t = db.transaction(ST, "readonly"), c = t.objectStore(ST).openCursor();
        c.onsuccess = function () { var cur = c.result; if (cur) { out[cur.key] = cur.value; cur.continue(); } else res(out); };
        c.onerror = function () { res(out); };
      });
    }).catch(function () { return {}; });
  }
  // ---- ZIP без сжатия ----
  var CRC = (function () { var t = []; for (var n = 0; n < 256; n++) { var c = n; for (var k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
  function crc32(u8) { var c = 0xFFFFFFFF; for (var i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 255] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
  function zip(files) {
    var enc = new TextEncoder(), parts = [], central = [], off = 0;
    files.forEach(function (f) {
      var name = enc.encode(f.name), d = f.data, crc = crc32(d);
      var h = new DataView(new ArrayBuffer(30)); h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true);
      h.setUint32(14, crc, true); h.setUint32(18, d.length, true); h.setUint32(22, d.length, true); h.setUint16(26, name.length, true);
      parts.push(new Uint8Array(h.buffer), name, d);
      var c = new DataView(new ArrayBuffer(46)); c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true);
      c.setUint32(16, crc, true); c.setUint32(20, d.length, true); c.setUint32(24, d.length, true); c.setUint16(28, name.length, true); c.setUint32(42, off, true);
      central.push(new Uint8Array(c.buffer), name);
      off += 30 + name.length + d.length;
    });
    var csize = central.reduce(function (a, x) { return a + x.length; }, 0);
    var e = new DataView(new ArrayBuffer(22)); e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, csize, true); e.setUint32(16, off, true);
    return new Blob(parts.concat(central, [new Uint8Array(e.buffer)]), { type: "application/zip" });
  }
  function fname(k, type) {
    var h = 2166136261; for (var i = 0; i < k.length; i++) { h ^= k.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    var ext = /mp4|m4a|aac/.test(type) ? "m4a" : /ogg/.test(type) ? "ogg" : /mpeg|mp3/.test(type) ? "mp3" : "webm";
    return "kk_" + h.toString(16) + "." + ext;
  }
  function pickMime() {
    if (!window.MediaRecorder || !MediaRecorder.isTypeSupported) return "";
    return ["audio/mp4;codecs=mp4a.40.2", "audio/mp4", "audio/webm;codecs=opus", "audio/webm", "audio/ogg;codecs=opus"].filter(function (m) { return MediaRecorder.isTypeSupported(m); })[0] || "";
  }

  function render(box, api) {
    var T = api.T;
    function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
    function esc(x) { return String(x).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;" }[c]; }); }
    box.innerHTML = "";
    var h = document.createElement("h1"); h.className = "h-pixel"; h.innerHTML = "<span class='gold'>Студия озвучки</span>"; box.appendChild(h);
    box.appendChild(el("p", "muted", "Здесь диктор записывает казахские слова и фразы курса. Записи сразу звучат на этом устройстве вместо синтезатора. Чтобы их услышали все, скачайте архив и загрузите папку на GitHub (инструкция внизу)."));
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia || !window.MediaRecorder) {
      box.appendChild(el("p", "notice", "Этот браузер не умеет записывать звук. Откройте страницу в Chrome, Edge, Яндекс Браузере или Safari 14.5+ и разрешите микрофон.")); return;
    }
    var groups = api.groups(), all = [], seen = {};
    groups.forEach(function (g) { g.items = g.items.filter(function (it) { var k = norm(it.kk); if (!k || seen[k]) return false; seen[k] = 1; it.k = k; all.push(it); return true; }); });
    var REC = {}, stat = el("p", "pl-rec"), tools = el("div", "row");
    box.appendChild(stat); box.appendChild(tools);
    var filter = document.createElement("select"); filter.className = "pg-field"; filter.setAttribute("aria-label", "Показать");
    [["todo", "Только незаписанные"], ["all", "Все фразы"], ["done", "Только записанные"]].forEach(function (o) { var x = document.createElement("option"); x.value = o[0]; x.textContent = o[1]; filter.appendChild(x); });
    tools.appendChild(filter);
    var dl = el("button", "btn primary", "Скачать архив записей"); dl.type = "button"; tools.appendChild(dl);
    var list = el("div", "studio-list"); box.appendChild(list);
    var help = el("div", "card");
    help.innerHTML = "<h3>Как записывать</h3><ul class='pl-list'><li>Тихая комната, телефон или микрофон в 20–30 см ото рта.</li><li>Нажмите <b>● Запись</b>, сделайте паузу полсекунды, чётко и естественно произнесите фразу, нажмите <b>■ Стоп</b>.</li><li>Прослушайте. Не понравилось — запишите снова, старая запись заменится.</li><li>Записи хранятся только в этом браузере: не очищайте данные сайта, пока не скачаете архив.</li></ul>" +
      "<h3>Как выложить для всех</h3><ol class='pl-list'><li>Нажмите «Скачать архив записей» и распакуйте его — внутри папка <b>audio</b>.</li><li>На github.com в репозитории откройте папку <b>kazakh</b> → <b>Add file → Upload files</b> и перетащите папку <b>audio</b> целиком (с компьютера).</li><li>Через пару минут записи зазвучат на сайте у всех. Или пришлите архив в чат — я подключу и переведу в mp3 сама.</li></ol>";
    box.appendChild(help);
    var cur = null;
    function counts() { var n = all.filter(function (it) { return REC[it.k]; }).length; stat.innerHTML = "Записано <b>" + n + "</b> из <b>" + all.length + "</b>" + (n ? "" : ". Начните с первого дня."); }
    function play(blob) { try { var a = new Audio(URL.createObjectURL(blob)); a.play(); } catch (e) {} }
    function row(it) {
      var r = el("div", "studio-row" + (REC[it.k] ? " done" : ""));
      r.appendChild(el("div", "studio-txt", "<b lang='kk'>" + esc(it.kk) + "</b>" + (it.ru ? "<span>" + esc(it.ru) + "</span>" : "")));
      var b = el("div", "studio-btns");
      var tts = el("button", "btn small", "Синтезатор"); tts.type = "button"; tts.addEventListener("click", function () { api.tts(it.kk, tts); }); b.appendChild(tts);
      var rec = el("button", "btn small primary", "● Запись"); rec.type = "button"; b.appendChild(rec);
      var pl = el("button", "btn small", "▶ Запись"); pl.type = "button"; pl.disabled = !REC[it.k]; pl.addEventListener("click", function () { if (REC[it.k]) play(REC[it.k].blob); }); b.appendChild(pl);
      var rm = el("button", "btn small", "✕"); rm.type = "button"; rm.title = "Удалить запись"; rm.disabled = !REC[it.k];
      rm.addEventListener("click", function () { del(it.k).then(function () { delete REC[it.k]; api.setLocal(it.k, null); r.classList.remove("done"); pl.disabled = rm.disabled = true; counts(); }); });
      b.appendChild(rm);
      rec.addEventListener("click", function () {
        if (cur && cur.btn === rec) { cur.mr.stop(); return; }
        if (cur) { cur.mr.stop(); }
        navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } }).then(function (stream) {
          var mime = pickMime(), mr = mime ? new MediaRecorder(stream, { mimeType: mime }) : new MediaRecorder(stream), chunks = [];
          mr.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
          mr.onstop = function () {
            stream.getTracks().forEach(function (t) { t.stop(); });
            rec.textContent = "● Запись"; rec.classList.remove("rec-on"); cur = null;
            var blob = new Blob(chunks, { type: mr.mimeType || mime || "audio/webm" });
            if (blob.size < 1500) { alert("Запись слишком короткая — попробуйте ещё раз."); return; }
            var v = { blob: blob, type: blob.type, text: it.kk, date: Date.now() };
            put(it.k, v).then(function () { REC[it.k] = v; api.setLocal(it.k, blob); r.classList.add("done"); pl.disabled = rm.disabled = false; counts(); play(blob); });
          };
          mr.start(); cur = { mr: mr, btn: rec }; rec.textContent = "■ Стоп"; rec.classList.add("rec-on");
        }).catch(function () { alert("Нет доступа к микрофону. Разрешите микрофон для этого сайта в настройках браузера."); });
      });
      r.appendChild(b); return r;
    }
    function draw() {
      list.innerHTML = "";
      var mode = filter.value, shown = 0;
      groups.forEach(function (g) {
        var items = g.items.filter(function (it) { return mode === "all" || (mode === "done" ? REC[it.k] : !REC[it.k]); });
        if (!items.length) return;
        var det = document.createElement("details"); det.className = "card studio-grp"; if (!shown) det.open = true;
        var su = document.createElement("summary"); su.innerHTML = "<b>" + esc(g.name) + "</b> · " + g.items.filter(function (it) { return REC[it.k]; }).length + " / " + g.items.length; det.appendChild(su);
        items.forEach(function (it) { det.appendChild(row(it)); }); list.appendChild(det); shown++;
      });
      if (!shown) list.appendChild(el("p", "notice", mode === "todo" ? "Всё записано! Скачайте архив." : "Пока пусто."));
      counts();
    }
    filter.addEventListener("change", draw);
    dl.addEventListener("click", function () {
      var keys = Object.keys(REC); if (!keys.length) { alert("Пока нет записей."); return; }
      dl.disabled = true; dl.textContent = "Собираю архив…";
      var manifest = {}, files = [];
      Promise.all(keys.map(function (k) { return new Response(REC[k].blob).arrayBuffer().then(function (buf) { var n = fname(k, REC[k].type); manifest[k] = n; files.push({ name: "audio/" + n, data: new Uint8Array(buf) }); }); })).then(function () {
        files.push({ name: "audio/manifest.json", data: new TextEncoder().encode(JSON.stringify(manifest, null, 1)) });
        files.push({ name: "audio/список.txt", data: new TextEncoder().encode(keys.map(function (k) { return manifest[k] + "\t" + REC[k].text; }).join("\n")) });
        var a = document.createElement("a"); a.href = URL.createObjectURL(zip(files)); a.download = "kazakh-audio.zip"; document.body.appendChild(a); a.click(); a.remove();
        dl.disabled = false; dl.textContent = "Скачать архив записей";
      });
    });
    loadAll().then(function (m) { REC = m; draw(); });
  }
  window.KZStudio = { render: render, loadAll: loadAll, norm: norm };
})();
