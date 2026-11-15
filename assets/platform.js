/* «Языки для чайников» — общие компоненты платформы.
   Здесь: реестр языков, пиксельные чайники с флагами, анимация-портал,
   общий профиль и чтение прогресса курсов.
   Чтобы добавить язык: допишите объект в LANGS (и флаг в FLAGS), а курс положите в папку path. */
(function () {
  "use strict";

  // ---------- Реестр языков ----------
  // status: "open" — курс есть; "soon" — карточка «скоро».
  var LANGS = [
    { id: "kz", name: "Казахский", course: "Казахский для чайников", path: "kazakh/", status: "open",
      hello: "Сәлем!", note: "30 дней с нуля, словарь, сленг, ситуации",
      progress: { key: "kz_v3_progress", field: "done", total: 30 }, theme: "#6fc6f2" },
    { id: "en", name: "Английский", course: "Английский для чайников", path: "english/", status: "open",
      hello: "Hello!", note: "30 уровней с нуля, IPA, британский и американский",
      progress: { key: "en_v1_progress", field: "done", total: 30 }, theme: "#1b1f4b" },
    { id: "de", name: "Немецкий", course: "Немецкий для чайников", path: "", status: "soon", hello: "Hallo!", theme: "#ffce00" },
    { id: "fr", name: "Французский", course: "Французский для чайников", path: "", status: "soon", hello: "Salut !", theme: "#0055a4" },
    { id: "ja", name: "Японский", course: "Японский для чайников", path: "", status: "soon", hello: "こんにちは", theme: "#bc002d" }
  ];

  // ---------- Флаги (функция цвета для пикселя x,y в поле w×h) ----------
  var FLAGS = {
    kz: function (x, y, w, h) {
      var cx = w / 2 + 0.5, cy = h / 2 - 0.5, dx = x - cx, dy = y - cy;
      if (x === 1 && y % 2 === 0) return "#fec50c";
      if (dx * dx + dy * dy <= 3.2) return "#fec50c";
      return "#00afca";
    },
    en: function (x, y, w, h) {
      var mx = Math.floor(w / 2), my = Math.floor(h / 2);
      if (y === my || x === mx - 1 || x === mx) return "#c8102e";
      if (y === my - 1 || y === my + 1 || x === mx - 2 || x === mx + 1) return "#ffffff";
      var d1 = Math.abs(y - x * (h - 1) / (w - 1)), d2 = Math.abs(y - (w - 1 - x) * (h - 1) / (w - 1));
      if (d1 < 0.5 || d2 < 0.5) return "#c8102e";
      if (d1 < 1.1 || d2 < 1.1) return "#ffffff";
      return "#012169";
    },
    de: function (x, y, w, h) { var b = Math.floor(y * 3 / h); return ["#111111", "#dd0000", "#ffce00"][b]; },
    fr: function (x, y, w, h) { var b = Math.floor(x * 3 / w); return ["#0055a4", "#ffffff", "#ef4135"][b]; },
    ja: function (x, y, w, h) { var dx = x - (w - 1) / 2, dy = y - (h - 1) / 2; return dx * dx + dy * dy <= 5 ? "#bc002d" : "#ffffff"; }
  };

  // ---------- Пиксельный чайник 24×18 ----------
  // Корпус — эллипс; внутри него флаг; глаза и ротик поверх.
  var TW = 24, TH = 18;
  function teapotGrid(langId) {
    var g = [], x, y, flag = FLAGS[langId] || FLAGS.kz;
    for (y = 0; y < TH; y++) { g.push([]); for (x = 0; x < TW; x++) g[y].push(null); }
    var bx0 = 5, bx1 = 18, by0 = 5, by1 = 15; // корпус
    var cx = (bx0 + bx1) / 2, cy = (by0 + by1) / 2, rx = (bx1 - bx0) / 2 + 0.5, ry = (by1 - by0) / 2 + 0.5;
    var inBody = function (x, y) { var a = (x - cx) / rx, b = (y - cy) / ry; return a * a + b * b <= 1; };
    for (y = by0; y <= by1; y++) for (x = bx0; x <= bx1; x++) if (inBody(x, y)) g[y][x] = "o";
    // контур: пиксели корпуса у края
    var fx0 = 99, fx1 = -1, fy0 = 99, fy1 = -1;
    for (y = by0; y <= by1; y++) for (x = bx0; x <= bx1; x++) {
      if (!g[y][x]) continue;
      var edge = !inBody(x - 1, y) || !inBody(x + 1, y) || !inBody(x, y - 1) || !inBody(x, y + 1);
      if (!edge) { g[y][x] = "f"; fx0 = Math.min(fx0, x); fx1 = Math.max(fx1, x); fy0 = Math.min(fy0, y); fy1 = Math.max(fy1, y); }
    }
    var fw = fx1 - fx0 + 1, fh = fy1 - fy0 + 1;
    for (y = fy0; y <= fy1; y++) for (x = fx0; x <= fx1; x++) if (g[y][x] === "f") g[y][x] = flag(x - fx0, y - fy0, fw, fh);
    for (y = 0; y < TH; y++) for (x = 0; x < TW; x++) if (g[y][x] === "o") g[y][x] = "#111111";
    // крышка и шишечка
    for (x = 10; x <= 13; x++) g[1][x] = "#111111";
    for (x = 8; x <= 15; x++) { g[2][x] = "#111111"; g[3][x] = "#111111"; }
    g[0][11] = g[0][12] = "#111111";
    for (x = 9; x <= 14; x++) g[3][x] = x === 9 || x === 14 ? "#111111" : "#f0479a";
    // ручка слева
    [[4, 7], [3, 7], [2, 7], [2, 8], [1, 8], [1, 9], [1, 10], [1, 11], [2, 11], [2, 12], [3, 12], [4, 12], [3, 8], [2, 9], [2, 10], [3, 11]].forEach(function (p) { if (!g[p[1]][p[0]]) g[p[1]][p[0]] = "#111111"; });
    [[2, 9], [2, 10]].forEach(function (p) { g[p[1]][p[0]] = null; });
    // носик справа
    [[19, 10], [19, 11], [20, 9], [20, 10], [21, 8], [21, 9], [22, 6], [22, 7], [22, 8], [23, 6]].forEach(function (p) { g[p[1]][p[0]] = "#111111"; });
    // лицо
    var ey = Math.round(cy) - 1;
    [[9, ey], [14, ey]].forEach(function (p) { g[p[1]][p[0]] = "#ffffff"; g[p[1] + 1][p[0]] = "#111111"; });
    g[ey + 3][11] = g[ey + 3][12] = "#f0479a";
    // донышко
    for (x = 8; x <= 15; x++) g[16][x] = "#111111";
    for (x = 9; x <= 14; x++) g[17][x] = "rgba(0,0,0,.25)";
    return g;
  }
  function teapotSVG(langId, label) {
    var g = teapotGrid(langId), parts = [];
    for (var y = 0; y < TH; y++) {
      var x = 0;
      while (x < TW) {
        var c = g[y][x];
        if (!c) { x++; continue; }
        var s = x; while (x < TW && g[y][x] === c) x++;
        parts.push('<rect x="' + s + '" y="' + y + '" width="' + (x - s) + '" height="1" fill="' + c + '"/>');
      }
    }
    return '<svg class="tp-svg" viewBox="0 0 ' + TW + " " + TH + '" shape-rendering="crispEdges" role="img" aria-label="' + (label || "Пиксельный чайник") + '">' + parts.join("") + "</svg>";
  }

  // ---------- Хранилище ----------
  function load(key, fb) { try { var r = localStorage.getItem(key); return r ? JSON.parse(r) : fb; } catch (e) { return fb; } }
  function save(key, v) { try { localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }

  // Общий профиль платформы. Имя из казахского курса подхватывается, если общего ещё нет.
  var PROFILE_KEY = "ldc_profile";
  function profile() {
    var p = load(PROFILE_KEY, null);
    if (!p) { var kz = load("kz_v3_profile", null); p = { name: (kz && kz.name) || "" }; }
    return p;
  }
  function setProfile(p) { save(PROFILE_KEY, p); }

  function progressOf(lang) {
    if (!lang.progress) return null;
    var v = load(lang.progress.key, null), done = v && typeof v[lang.progress.field] === "number" ? v[lang.progress.field] : 0;
    return { done: Math.max(0, Math.min(done, lang.progress.total)), total: lang.progress.total };
  }

  // ---------- Портал ----------
  var reduce = false;
  try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
  function hexRgb(h) { h = h.replace("#", ""); if (h.length === 3) h = h.replace(/./g, "$&$&"); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  var PAL = ["#f0479a", "#ffe45c", "#3dbe4a", "#6f8cff", "#6fc6f2", "#ff8a3d", "#b46bff", "#ffffff"];
  var PALRGB = PAL.slice(0, 7).map(hexRgb);

  function portal(fromEl, url, opts) {
    opts = opts || {};
    var going = false;
    function go() {
      if (going) return; going = true;
      try { sessionStorage.setItem("ldc_arrive", JSON.stringify({ color: opts.color || "#111", t: Date.now() })); } catch (e) {}
      window.location.href = url;
    }
    if (reduce) { fade(opts.color, go); return; }

    var rect = fromEl.getBoundingClientRect();
    var W = window.innerWidth, H = window.innerHeight;
    var cxp = rect.left + rect.width / 2, cyp = rect.top + rect.height / 2;

    // 1–2. Реакция и свечение
    fromEl.classList.add("tp-hit");
    var layer = document.createElement("div");
    layer.className = "portal-layer";
    layer.setAttribute("role", "presentation");
    var cv = document.createElement("canvas");
    cv.className = "portal-canvas";
    var PX = W < 600 ? 5 : 6; // размер «пикселя» в CSS-пикселях
    var cw = Math.ceil(W / PX), ch = Math.ceil(H / PX);
    cv.width = cw; cv.height = ch;
    layer.appendChild(cv);
    // летящий чайник
    var ghost = fromEl.querySelector(".tp-svg");
    var clone = ghost ? ghost.cloneNode(true) : null;
    if (clone) {
      clone.classList.add("portal-pot");
      clone.style.left = rect.left + "px"; clone.style.top = rect.top + "px";
      clone.style.width = rect.width + "px"; clone.style.height = rect.height + "px";
      layer.appendChild(clone);
    }
    var skip = document.createElement("button");
    skip.type = "button"; skip.className = "portal-skip"; skip.textContent = "Пропустить ►";
    skip.addEventListener("click", function (e) { e.stopPropagation(); finish(); });
    layer.appendChild(skip);
    document.body.appendChild(layer);
    var onKey = function (e) { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") finish(); };
    document.addEventListener("keydown", onKey);

    var ctx = cv.getContext("2d");
    var SINK = hexRgb(opts.color || "#111111"), WHITE = [255, 255, 255];
    var cx = cxp / PX, cy = cyp / PX, maxR = Math.hypot(Math.max(cx, cw - cx), Math.max(cy, ch - cy)) + 4;
    var N = W < 600 ? 260 : 420, parts = [];
    for (var i = 0; i < N; i++) parts.push({ a: Math.random() * Math.PI * 2, r: 6 + Math.random() * maxR * 0.9, s: 0.5 + Math.random(), c: PAL[i % PAL.length], z: Math.random() < 0.2 ? 2 : 1 });

    var T0 = performance.now(), DUR = 2300, raf = 0, done = false;
    function ease(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
    function frame(now) {
      var t = Math.min(1, (now - T0) / DUR);
      ctx.clearRect(0, 0, cw, ch);
      // свечение (0–0.25)
      var glow = Math.min(1, t / 0.2);
      // воронка: кольца спирали, расширяются (0.15–0.75)
      var open = ease(Math.max(0, Math.min(1, (t - 0.12) / 0.6)));
      var holeR = 3 + open * maxR;
      // пиксельная спиральная воронка: считается попиксельно на маленьком холсте
      var sink = ease(Math.max(0, Math.min(1, (t - 0.62) / 0.38)));
      var img = ctx.createImageData(cw, ch), d = img.data, dim = Math.round(255 * (0.15 + 0.55 * open));
      var sinkR = 1 + sink * maxR * 1.05, spin = now / 140, hr2 = holeR * holeR, sr2 = sinkR * sinkR;
      for (var yy = 0; yy < ch; yy++) {
        var dy = yy - cy;
        for (var xx = 0; xx < cw; xx++) {
          var dx = xx - cx, r2 = dx * dx + dy * dy, o = (yy * cw + xx) * 4, col;
          if (r2 <= sr2) col = SINK;
          else if (r2 <= hr2) {
            var r = Math.sqrt(r2), band = Math.floor(Math.log(r + 1) * 5.5 + Math.atan2(dy, dx) * 7 / (2 * Math.PI) - spin);
            col = PALRGB[((band % PALRGB.length) + PALRGB.length) % PALRGB.length];
            if (r > holeR - 2) col = WHITE;
          } else { d[o] = 10; d[o + 1] = 8; d[o + 2] = 30; d[o + 3] = dim; continue; }
          d[o] = col[0]; d[o + 1] = col[1]; d[o + 2] = col[2]; d[o + 3] = 255;
        }
      }
      ctx.putImageData(img, 0, 0);
      // частицы: закручиваются к центру
      for (var j = 0; j < parts.length; j++) {
        var p = parts[j];
        p.a += 0.05 * p.s + open * 0.08;
        p.r -= (0.25 + open * 1.6) * p.s;
        if (p.r < 2) { p.r = maxR * (0.6 + Math.random() * 0.4); }
        var px = Math.round(cx + Math.cos(p.a) * p.r), py = Math.round(cy + Math.sin(p.a) * p.r * 0.92);
        ctx.fillStyle = p.c;
        ctx.globalAlpha = Math.min(1, glow * (1 - sink * 0.9));
        ctx.fillRect(px, py, p.z, p.z);
      }
      ctx.globalAlpha = 1;
      // чайник: свечение, затем втягивание с вращением (0.25–0.7)
      if (clone) {
        var pull = ease(Math.max(0, Math.min(1, (t - 0.22) / 0.48)));
        var sc = 1 - pull * 0.95, rot = pull * 540;
        clone.style.transform = "translate(" + (0) + "px," + (0) + "px) rotate(" + rot + "deg) scale(" + sc + ")";
        clone.style.opacity = String(1 - Math.max(0, pull - 0.85) / 0.15);
        clone.style.filter = "drop-shadow(0 0 " + Math.round(4 + glow * 14) + "px #fff) drop-shadow(0 0 " + Math.round(glow * 22) + "px #ffe45c)";
      }
      if (t < 1) raf = requestAnimationFrame(frame); else finish();
    }
    function finish() {
      if (done) return; done = true;
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      layer.classList.add("portal-full");
      layer.style.background = opts.color || "#111";
      go();
    }
    raf = requestAnimationFrame(frame);
  }

  function fade(color, cb) {
    var d = document.createElement("div");
    d.className = "portal-layer portal-fade";
    d.style.background = color || "#111";
    document.body.appendChild(d);
    setTimeout(cb, 260);
  }

  // Появление на странице курса: пиксельное «растворение» портала.
  function arrive() {
    var info = null;
    try { info = JSON.parse(sessionStorage.getItem("ldc_arrive") || "null"); sessionStorage.removeItem("ldc_arrive"); } catch (e) {}
    if (!info || Date.now() - info.t > 15000) return;
    var W = window.innerWidth, H = window.innerHeight, PX = W < 600 ? 5 : 6;
    var cv = document.createElement("canvas");
    cv.className = "portal-canvas portal-arrive";
    var cw = Math.ceil(W / PX), ch = Math.ceil(H / PX);
    cv.width = cw; cv.height = ch;
    document.body.appendChild(cv);
    var ctx = cv.getContext("2d");
    if (reduce) { setTimeout(function () { cv.remove(); }, 50); return; }
    // блоки исчезают от центра наружу
    var B = 4, cols = Math.ceil(cw / B), rows = Math.ceil(ch / B), cells = [];
    var cx = cols / 2, cy = rows / 2, md = Math.hypot(cx, cy);
    for (var y = 0; y < rows; y++) for (var x = 0; x < cols; x++) cells.push({ x: x, y: y, d: Math.hypot(x - cx, y - cy) / md + Math.random() * 0.25 });
    var T0 = performance.now(), DUR = 700;
    function frame(now) {
      var t = (now - T0) / DUR;
      ctx.clearRect(0, 0, cw, ch);
      for (var i = 0; i < cells.length; i++) {
        var c = cells[i];
        if (c.d * 0.8 > t) { ctx.fillStyle = info.color; ctx.fillRect(c.x * B, c.y * B, B, B); }
        else if (c.d * 0.8 > t - 0.08) { ctx.fillStyle = PAL[i % PAL.length]; ctx.fillRect(c.x * B, c.y * B, B, B); }
      }
      if (t < 1.3) requestAnimationFrame(frame); else cv.remove();
    }
    requestAnimationFrame(frame);
  }

  window.LDC = { LANGS: LANGS, FLAGS: FLAGS, teapotSVG: teapotSVG, portal: portal, arrive: arrive, profile: profile, setProfile: setProfile, progressOf: progressOf, load: load, save: save };
})();
