/* Английский для чайников — движок курса. Интерфейс и анимации — как в «Казахском для чайников».
   Данные уроков: data1.js … data3.js (window.EN.lessons). Прогресс: localStorage, ключи en_v1_*. */
(function () {
  "use strict";
  var EN = window.EN, LDC = window.LDC;
  var LESSONS = EN.lessons.slice().sort(function (a, b) { return a.id - b.id; });
  LESSONS.forEach(function (L) { var x = EN.v2 && EN.v2[L.id]; if (x) { L.task = x.task; L.can = x.can; L.speak = x.speak; L.writeTask = x.write; } });
  var TOTAL = LESSONS.length;
  var app = document.getElementById("app");

  // ---------- утилиты ----------
  function $(s, r) { return (r || document).querySelector(s); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function h(tag, attrs, kids) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      var v = attrs[k];
      if (v == null || v === false) continue;
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else if (k === "text") n.textContent = v;
      else if (k.slice(0, 2) === "on") n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    (kids || []).forEach(function (c) { if (c != null) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function shuffle(a) { var b = a.slice(); for (var i = b.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = b[i]; b[i] = b[j]; b[j] = t; } return b; }
  function pick(a, n) { return shuffle(a).slice(0, n); }
  function today() { var d = new Date(); return Math.floor((d.getTime() - d.getTimezoneOffset() * 60000) / 86400000); }
  var load = LDC.load, save = LDC.save;

  // ---------- состояние ----------
  var K = { prog: "en_v1_progress", srs: "en_v1_srs", set: "en_v1_settings", miss: "en_v1_miss" };
  var prog = Object.assign({ done: 0, passed: {}, xp: 0, streak: 0, lastDay: 0, resume: {}, blocksDone: {}, hw: {}, best: 0 }, load(K.prog, {}) || {});
  var srs = load(K.srs, {}) || {};
  var settings = Object.assign({ accent: "uk", rate: 0.9 }, load(K.set, {}) || {});
  var miss = load(K.miss, {}) || {};
  function saveAll() {
    var n = 0; while (n < TOTAL && prog.passed[n + 1]) n++;
    prog.done = n;
    save(K.prog, prog); save(K.srs, srs); save(K.set, settings); save(K.miss, miss);
    hud();
  }
  function CHECK() { return !!(window.LDCCheck && LDCCheck.on()); }
  function isOpen(id) { return id === 1 || CHECK() || !!prog.passed[id - 1] || !!prog.passed[id]; }
  function nextLevel() { for (var i = 1; i <= TOTAL; i++) if (!prog.passed[i]) return i; return TOTAL; }
  function levelOf(xp) { return { lv: Math.floor(xp / 100) + 1, into: xp % 100 }; }
  function addXp(n) { prog.xp += n; }
  function touchStreak() {
    var d = today();
    if (prog.lastDay === d) return;
    prog.streak = prog.lastDay === d - 1 ? prog.streak + 1 : 1;
    prog.lastDay = d;
  }
  function liveStreak() { var d = today(); return prog.lastDay === d || prog.lastDay === d - 1 ? prog.streak : 0; }
  function totalStars() { var s = 0; for (var k in prog.passed) s += prog.passed[k] || 0; return s; }

  // ---------- слова ----------
  // w: [en, ipaUK, ipaUS, ru, exEn, exRu]
  var ALLW = [];
  LESSONS.forEach(function (L) { L.w.forEach(function (w) { ALLW.push({ en: w[0], uk: w[1], us: w[2] || w[1], ru: w[3], ex: w[4], exru: w[5], lesson: L.id }); }); });
  var WMAP = {}; ALLW.forEach(function (w) { if (!WMAP[w.en]) WMAP[w.en] = w; });
  function wordsOf(L) { return L.w.map(function (w) { return WMAP[w[0]].lesson === L.id ? WMAP[w[0]] : { en: w[0], uk: w[1], us: w[2] || w[1], ru: w[3], ex: w[4], exru: w[5], lesson: L.id }; }); }
  function ru1(w) { return w.ru.split(/[;,]/)[0].trim(); }
  function learnedWords() { return ALLW.filter(function (w) { return srs[w.en]; }); }

  // ---------- проверка ответов ----------
  var CONTR = [["i'm", "i am"], ["you're", "you are"], ["we're", "we are"], ["they're", "they are"], ["he's", "he is"], ["she's", "she is"], ["it's", "it is"],
    ["isn't", "is not"], ["aren't", "are not"], ["wasn't", "was not"], ["weren't", "were not"], ["don't", "do not"], ["doesn't", "does not"], ["didn't", "did not"],
    ["can't", "can not"], ["cannot", "can not"], ["won't", "will not"], ["i'll", "i will"], ["you'll", "you will"], ["we'll", "we will"], ["they'll", "they will"],
    ["he'll", "he will"], ["she'll", "she will"], ["haven't", "have not"], ["hasn't", "has not"], ["i've", "i have"], ["you've", "you have"], ["we've", "we have"], ["they've", "they have"],
    ["what's", "what is"], ["where's", "where is"], ["who's", "who is"], ["that's", "that is"], ["there's", "there is"], ["mustn't", "must not"], ["shouldn't", "should not"], ["couldn't", "could not"], ["i'd", "i would"]];
  function norm(s) {
    s = " " + String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/[.,!?;:"«»()\-–—]/g, " ").replace(/\s+/g, " ").trim() + " ";
    CONTR.forEach(function (c) { s = s.split(" " + c[0] + " ").join(" " + c[1] + " "); });
    return s.replace(/\s+/g, " ").trim();
  }
  function lev(a, b) {
    var m = a.length, n = b.length, prev = [], cur, i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) { cur = [i]; for (j = 1; j <= n; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur; }
    return prev[n];
  }
  function similar(a, b) { a = norm(a); b = norm(b); var mx = Math.max(a.length, b.length) || 1; return 1 - lev(a, b) / mx; }
  function checkTyped(input, answers) {
    var n = norm(input); if (!n) return { ok: false };
    for (var i = 0; i < answers.length; i++) if (norm(answers[i]) === n) return { ok: true };
    for (i = 0; i < answers.length; i++) { var a = norm(answers[i]); if (a.length > 5 && lev(a, n) === 1) return { ok: true, typo: answers[i] }; }
    return { ok: false };
  }

  // ---------- озвучка ----------
  var synth = window.speechSynthesis || null, voices = [];
  function loadVoices() { if (synth) voices = synth.getVoices() || []; }
  if (synth) { loadVoices(); if (synth.addEventListener) synth.addEventListener("voiceschanged", loadVoices); else synth.onvoiceschanged = loadVoices; }
  function voiceFor(acc) {
    var want = acc === "us" ? "en-us" : "en-gb";
    var list = voices.filter(function (v) { return String(v.lang).toLowerCase().replace("_", "-") === want; });
    if (!list.length) list = voices.filter(function (v) { return /^en/i.test(v.lang); });
    list.sort(function (a, b) { return score(b) - score(a); });
    return list[0] || null;
    function score(v) { return (/google|natural|neural|premium|enhanced/i.test(v.name) ? 2 : 0) + (v.localService ? 0 : 1); }
  }
  function hasEnVoice(acc) { loadVoices(); var v = voiceFor(acc); return !!v && (acc === "us" ? /en[-_]us/i.test(v.lang) : /en[-_]gb/i.test(v.lang)); }
  function speak(text, acc, rate) {
    if (!synth) { toast("В этом браузере нет озвучки. Откройте сайт в Chrome, Edge или Safari."); return; }
    loadVoices();
    synth.cancel();
    var u = new SpeechSynthesisUtterance(text);
    var v = voiceFor(acc || settings.accent);
    u.lang = (acc || settings.accent) === "us" ? "en-US" : "en-GB";
    if (v) u.voice = v;
    u.rate = rate || settings.rate;
    synth.speak(u);
  }
  function speakLines(lines, acc) {
    if (!synth) { toast("В этом браузере нет озвучки."); return; }
    synth.cancel(); loadVoices();
    var vs = [voiceFor(acc || settings.accent)];
    lines.forEach(function (l, i) {
      var u = new SpeechSynthesisUtterance(l[1]);
      u.lang = (acc || settings.accent) === "us" ? "en-US" : "en-GB";
      if (vs[0]) u.voice = vs[0];
      u.rate = settings.rate; u.pitch = l[0] === "B" ? 0.85 : 1.15;
      synth.speak(u);
    });
  }
  function playBtn(text, acc, label) {
    return h("button", { class: "btn small", type: "button", "aria-label": "Послушать: " + text, onclick: function (e) { e.preventDefault(); e.stopPropagation(); speak(text, acc); } }, [label || "▶ " + (acc ? acc.toUpperCase() : "Послушать")]);
  }

  // распознавание речи (Chrome/Edge). Если его нет — кнопка не показывается.
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  function micBtn(target, out) {
    if (!SR) return null;
    var b = h("button", { class: "btn small mic", type: "button" }, ["Повторить вслух"]);
    b.addEventListener("click", function () {
      var r; try { r = new SR(); } catch (e) { out.textContent = "Микрофон недоступен."; return; }
      r.lang = settings.accent === "us" ? "en-US" : "en-GB"; r.interimResults = false; r.maxAlternatives = 3;
      b.disabled = true; b.classList.add("listening"); out.textContent = "Слушаю… скажите: " + target;
      r.onresult = function (e) {
        var best = 0, heard = "";
        for (var i = 0; i < e.results[0].length; i++) { var t = e.results[0][i].transcript, s = similar(t, target); if (s > best) { best = s; heard = t; } }
        var pct = Math.round(best * 100);
        out.innerHTML = "Услышано: <b>" + esc(heard) + "</b> · совпадение " + pct + "% — " + (pct >= 85 ? "отлично!" : pct >= 60 ? "почти, послушайте ещё раз и повторите." : "попробуйте медленнее.");
      };
      r.onerror = function (e) { out.textContent = e.error === "not-allowed" ? "Разрешите доступ к микрофону в браузере." : "Не получилось распознать. Попробуйте ещё раз."; };
      r.onend = function () { b.disabled = false; b.classList.remove("listening"); };
      try { r.start(); } catch (e) { b.disabled = false; }
    });
    return b;
  }

  // ---------- интерфейс: те же компоненты, что в казахском курсе ----------
  function el(tag, cls, text) { var n = document.createElement(tag); if (cls) n.className = cls; if (text != null) n.textContent = text; return n; }
  function card(title, cls) { var c = el("div", "card" + (cls ? " " + cls : "")); if (title) c.appendChild(el("h3", null, title)); return c; }
  function btn(text, cls, fn) { var b = el("button", "btn" + (cls ? " " + cls : ""), text); b.type = "button"; if (fn) b.addEventListener("click", fn); return b; }
  function aBtn(href, text, cls) { var a = el("a", "btn" + (cls ? " " + cls : ""), text); a.setAttribute("href", href); return a; }
  function tileBtn(title, sub, fn, cls) { var b = el("button", "tile" + (cls ? " " + cls : "")); b.type = "button"; b.appendChild(el("b", null, title)); if (sub) b.appendChild(el("small", null, sub)); if (fn) b.addEventListener("click", fn); else b.disabled = true; return b; }
  function pageHead(box, title, lead) { var hh = el("h1", "h-pixel"); hh.appendChild(el("span", "gold", title)); box.appendChild(hh); if (lead) box.appendChild(el("p", "muted", lead)); }
  function statGrid(items) { var g = el("div", "stats"); items.forEach(function (it) { var d = el("div"); d.appendChild(el("b", null, String(it[0]))); d.appendChild(el("span", null, it[1])); g.appendChild(d); }); return g; }
  function meter(pct, cls) { var m = el("div", "meter" + (cls ? " " + cls : "")); var i = el("div"); i.style.width = Math.max(0, Math.min(100, pct)) + "%"; m.appendChild(i); return m; }
  function toast(msg, ms) { var t = el("div", "toast", msg); t.setAttribute("role", "status"); document.body.appendChild(t); setTimeout(function () { t.remove(); }, ms || 4000); }
  var reduceMotion = function () { try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } };
  // конфетти — как в казахском
  function confetti() {
    var colors = ["#ff5d9e", "#5fcf5c", "#ffd23f", "#6cc3ff"];
    for (var i = 0; i < 36; i++) {
      var p = el("div", "pix");
      p.style.left = Math.round(Math.random() * 100) + "vw";
      p.style.background = colors[i % colors.length];
      p.style.animationDelay = (Math.random() * 0.4).toFixed(2) + "s";
      document.body.appendChild(p);
      setTimeout(function (x) { return function () { x.remove(); }; }(p), 2600);
    }
  }
  // пиксельное сердце серии — собирается из квадратиков, как в казахском
  var HEART = ["011000110", "111101111", "111111111", "111111111", "011111110", "001111100", "000111000", "000010000"];
  function heartFx() {
    if (reduceMotion()) return;
    var box = el("div", "hfx"); box.setAttribute("aria-hidden", "true");
    var hh = el("div", "hfx-heart"); hh.style.width = "144px"; hh.style.height = "128px";
    HEART.forEach(function (r, y) { r.split("").forEach(function (c, x) {
      if (c !== "1") return;
      var i = el("i"); i.style.left = x * 16 + "px"; i.style.top = y * 16 + "px";
      var a = Math.random() * Math.PI * 2, d = 60 + Math.random() * 100;
      i.style.setProperty("--dx", Math.round(Math.cos(a) * d) + "px"); i.style.setProperty("--dy", Math.round(Math.sin(a) * d + 30) + "px"); i.style.setProperty("--dl", (Math.random() * 0.14).toFixed(2) + "s");
      hh.appendChild(i);
    }); });
    hh.appendChild(el("div", "hfx-flash"));
    box.appendChild(hh); document.body.appendChild(box);
    setTimeout(function () { box.classList.add("build"); }, 30);
    setTimeout(function () { box.remove(); }, 1250);
  }
  function hud() {
    $("#hudXp").textContent = prog.xp;
    $("#hudStreak").textContent = liveStreak();
    $("#hudHeart").className = "heart " + (prog.lastDay === today() ? "on" : "off");
  }
  // серия: при первой активности дня сердце «собирается»
  var _touch = touchStreak;
  touchStreak = function () { var was = prog.lastDay; _touch(); prog.best = Math.max(prog.best || 0, prog.streak); if (was !== prog.lastDay) setTimeout(heartFx, 200); };

  // ---------- меню: разделы-аккордеоны, как в казахском ----------
  var MENU = [
    ["Главная", [["home", "Обзор и приветствие"], ["test", "Входной тест"], ["progress", "Мой прогресс"], ["materials", "Полезные материалы"]]],
    ["Основной курс", [["map", "Карта уровней 1–40"], ["next", "Продолжение 31–180 (до B1)"], ["grammar", "Грамматика"], ["hw", "Домашние задания"], ["listen", "Аудирование"]]],
    ["Словарь", [["words", "Все слова"], ["cards", "Карточки для запоминания"], ["speech", "Разговорная речь и сленг"], ["formal", "Официальный английский"], ["sounds", "Звуки и IPA"]]],
    ["Практика", [["practice", "Тренировка и ошибки"]]],
    ["Дополнительные курсы", [["b2", "Углублённый курс B2"], ["ielts", "Подготовка к IELTS"]]]
  ];
  var SERVICE = [["support", "Поддержка · Support"], ["profile", "Профиль и данные"], ["about", "О курсе"]];
  var HP_MAX = 5;
  var HEART_SVG = '<svg viewBox="0 0 9 8" shape-rendering="crispEdges"><path d="' + HEART.map(function (r, y) { return r.split("").map(function (c, x) { return c === "1" ? "M" + x + " " + y + "h1v1h-1z" : ""; }).join(""); }).join("") + '"/></svg>';
  var menuSecs = [], menuLinks = [];
  var menuBtn = $("#menuBtn"), drawer = $("#drawer"), scrim = $("#scrim");
  function setMenu(o) { drawer.classList.toggle("open", o); scrim.hidden = !o; menuBtn.setAttribute("aria-expanded", String(o)); menuBtn.setAttribute("aria-label", o ? "Закрыть меню" : "Открыть меню"); }
  function renderMenu() {
    var box = $("#menuBox"); box.innerHTML = ""; menuSecs = []; menuLinks = [];
    var link = function (hsh, text) { var a = el("a", null, text); a.setAttribute("href", "#" + hsh); a.addEventListener("click", function () { setMenu(false); }); menuLinks.push(a); return a; };
    MENU.forEach(function (sec, i) {
      var wrap = el("div", "acc-sec"), b = el("button", "acc");
      b.type = "button"; b.setAttribute("aria-expanded", "false"); b.setAttribute("aria-controls", "esub" + i);
      b.appendChild(el("span", null, sec[0])); var ar = el("span", "arr", "▼"); ar.setAttribute("aria-hidden", "true"); b.appendChild(ar);
      var ul = el("ul", "sub"); ul.id = "esub" + i;
      sec[1].forEach(function (it) { var li = el("li"); li.appendChild(link(it[0], it[1])); ul.appendChild(li); });
      b.addEventListener("click", function () { toggleSec(i); });
      wrap.appendChild(b); wrap.appendChild(ul); box.appendChild(wrap);
      menuSecs.push({ b: b, hs: sec[1].map(function (x) { return x[0]; }) });
    });
    var svc = el("div", "svc"); SERVICE.forEach(function (it) { svc.appendChild(link(it[0], it[1])); }); box.appendChild(svc);
  }
  function toggleSec(i, open) { menuSecs.forEach(function (s, j) { var on = j === i ? (open == null ? s.b.getAttribute("aria-expanded") !== "true" : open) : false; s.b.setAttribute("aria-expanded", String(on)); }); }
  function markMenu(name) {
    var found = false;
    menuLinks.forEach(function (a) { if (a.getAttribute("href") === "#" + name && !found) { a.setAttribute("aria-current", "page"); found = true; } else a.removeAttribute("aria-current"); });
    var idx = -1; menuSecs.forEach(function (s, j) { if (s.hs.indexOf(name) >= 0) idx = j; });
    if (idx >= 0) toggleSec(idx, true);
  }
  renderMenu();
  menuBtn.addEventListener("click", function () { setMenu(!drawer.classList.contains("open")); });
  scrim.addEventListener("click", function () { setMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && drawer.classList.contains("open")) setMenu(false); });

  // ---------- маршрутизация ----------
  var S = null;
  var ROUTES = { home: viewHome, test: viewTest, map: viewMap, materials: viewMaterials, dicts: function (v) { viewRes(v, "dicts"); }, media: function (v) { viewRes(v, "media"); }, sites: function (v) { viewRes(v, "sites"); }, progress: viewProgress, next: viewNext, b2: viewB2, hw: viewHw, words: viewWords, cards: viewCards, speech: viewSpeech, formal: viewFormal, grammar: viewGrammar, sounds: viewSounds, listen: viewListen, practice: viewPractice, ielts: viewIelts, support: viewSupport, profile: viewProfile, about: viewAbout };
  function route() {
    var hs = location.hash.slice(1) || "home";
    if (synth) synth.cancel();
    var m = /^level-(\d+)$/.exec(hs);
    app.innerHTML = "";
    if (m) {
      var id = +m[1];
      if (!LESSONS[id - 1]) { location.replace("#map"); return; }
      if (!isOpen(id)) { toast("Уровень " + id + " откроется, когда вы пройдёте уровень " + (id - 1) + "."); location.replace("#map"); return; }
      if (!S || S.kind !== "level" || S.id !== id) S = levelSession(id);
      markMenu("map"); renderSession();
    } else if (hs === "train" && S && (S.kind === "train" || S.kind === "hw")) {
      renderSession();
    } else {
      if (hs !== "train") S = null; else if (!S) { location.replace("#map"); return; }
      var fn = ROUTES[hs] || viewHome;
      markMenu(ROUTES[hs] ? hs : "home");
      var v = el("section", "view"); app.appendChild(v);
      fn(v);
      if (!ROUTES[hs]) history.replaceState(null, "", "#home");
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  // ======================================================================
  // КАРТА: миры как недели казахского курса
  // ======================================================================
  var SCENERY = {
    1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%232b2466' fill-opacity='.35' d='M2 6h3v1H2zM1 7h5v3H1zM3 10h1v2H3zM14 4h1v1h-1zM12 5h5v1h-5zM11 6h7v2h-7zM12 8h5v4h-5z'/%3E%3Cpath fill='%23ffd23f' d='M14 9h1v1h-1z'/%3E%3C/svg%3E",
    2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%232e8f2c' fill-opacity='.55' d='M5 1h1v1H5zM4 2h3v2H4zM3 4h5v2H3zM2 6h7v2H2zM5 8h1v4H5zM17 3h1v1h-1zM16 4h3v2h-3zM15 6h5v2h-5zM17 8h1v4h-1z'/%3E%3C/svg%3E",
    3: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%232b2466' fill-opacity='.3' d='M1 3h5v9H1zM8 1h4v11H8zM14 5h6v7h-6z'/%3E%3Cpath fill='%23ffd23f' d='M2 5h1v1H2zM4 5h1v1H4zM9 3h1v1H9zM9 6h1v1H9zM15 7h1v1h-1zM18 7h1v1h-1z'/%3E%3C/svg%3E",
    4: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%232b2466' fill-opacity='.35' d='M6 1h1v7H6zM7 2h3v4H7zM2 8h10v1H2zM3 9h8v1H3z'/%3E%3Cpath fill='%232266b8' fill-opacity='.4' d='M0 11h24v1H0zM16 10h2v1h-2zM20 10h2v1h-2z'/%3E%3C/svg%3E",
    5: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%232b2466' fill-opacity='.3' d='M2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM2 4h5v8H2zM9 6h7v6H9zM9 5h1v1H9zM11 5h1v1h-1zM13 5h1v1h-1zM15 5h1v1h-1zM18 3h1v1h-1zM20 3h1v1h-1zM18 4h3v8h-3z'/%3E%3Cpath fill='%23ffd23f' d='M11 9h3v3h-3z'/%3E%3C/svg%3E"
  };
  SCENERY[6] = SCENERY[3]; SCENERY[7] = SCENERY[2];
  function viewHome(v) {
    var nx = nextLevel(), allDone = prog.done >= TOTAL, name = (LDC.profile().name || "").trim();
    var head = el("div", "city-head"); pageHead(head, "Главная", "Ваша учебная панель: продолжить урок, прогресс, серия, очки и быстрые ссылки. Все уровни — на странице «Карта уровней»."); v.appendChild(head);
    var hero = card(null, "hero-card");
    var pot = el("div"); pot.innerHTML = LDC.teapotSVG("en", "Чайник с британским флагом"); pot.firstChild.classList.add("mascot"); hero.appendChild(pot.firstChild);
    var txt = el("div");
    var L0 = LESSONS[nx - 1];
    txt.appendChild(el("h3", null, allDone ? "Well done" + (name ? ", " + name : "") + "!" : prog.done === 0 && !Object.keys(prog.resume).length ? "Hello" + (name ? ", " + name : "") + "!" : "Welcome back" + (name ? ", " + name : "") + "!"));
    txt.appendChild(el("p", null, allDone ? "Все " + TOTAL + " уровней пройдены. Повторяйте карточки и тренируйтесь — так слова не забудутся." :
      prog.done === 0 && !Object.keys(prog.resume).length ? "Я — чайник-путешественник. Пройдём английский с нуля: 30 уровней основного курса в 5 мирах, а потом продолжение до B1. В каждом уровне — слова, звуки, грамматика, аудирование, практика и босс-тест." :
      "Следующий уровень: " + nx + ". " + L0.en + " — " + L0.ru + "."));
    var r = el("div", "row");
    r.appendChild(aBtn("#level-" + nx, allDone ? "► Повторить уровень " + TOTAL : prog.done || prog.resume[nx] ? "► Продолжить" : "► Начать", "primary"));
    r.appendChild(aBtn("#cards", "Карточки"));
    txt.appendChild(r); hero.appendChild(txt); v.appendChild(hero);
    var g = el("div", "dash-grid"), l = levelOf(prog.xp);
    var c1 = card("Продолжить обучение");
    if (!allDone) {
      c1.appendChild(el("p", "dash-day", "Уровень " + nx + " из " + TOTAL));
      c1.appendChild(el("p", null, L0.en + " — " + L0.ru));
      var r1 = el("div", "row"); r1.appendChild(aBtn("#level-" + nx, prog.done || prog.resume[nx] ? "► Продолжить" : "► Начать", "primary"));
      if (prog.done && !((prog.hw || {})[prog.done] >= 60)) r1.appendChild(aBtn("#hw", "ДЗ к уровню " + prog.done, "small"));
      if (!prog.done) r1.appendChild(aBtn("#test", "Входной тест", "small"));
      c1.appendChild(r1);
    } else { c1.appendChild(el("p", "dash-day", "Все уровни пройдены")); var r2 = el("div", "row"); r2.appendChild(aBtn("#next", "Что дальше", "primary")); c1.appendChild(r2); }
    g.appendChild(c1);
    var c2 = card("Мой прогресс");
    c2.appendChild(el("p", null, "Уровни: " + prog.done + " из " + TOTAL)); c2.appendChild(meter(prog.done / TOTAL * 100));
    c2.appendChild(el("p", "notice-small", "Домашние задания: " + Object.keys(prog.hw || {}).filter(function (k) { return prog.hw[k] >= 60; }).length + " · звёзды: " + totalStars() + " / " + TOTAL * 3 + " · слов в карточках: " + learnedWords().length));
    var r3 = el("div", "row"); r3.appendChild(aBtn("#progress", "Подробнее", "small")); c2.appendChild(r3);
    g.appendChild(c2);
    var c3 = card("Серия"), sb = el("div", "streak-big"), stk = liveStreak();
    sb.appendChild(heartsRow(stk > 0 ? 1 : 0, 1)); sb.appendChild(el("span", null, stk + " дн. подряд")); c3.appendChild(sb);
    c3.appendChild(el("p", "notice-small", "Сколько дней подряд вы занимаетесь. Серия растёт, когда вы проходите блок уровня, тренировку, ДЗ или карточки." + (prog.best ? " Лучшая серия: " + prog.best + " дн." : "")));
    g.appendChild(c3);
    var c4 = card("Поинты (XP)");
    c4.appendChild(el("p", "dash-day", prog.xp + " XP · уровень " + l.lv)); c4.appendChild(meter(l.into, "xp"));
    c4.appendChild(el("p", "notice-small", "Награда за выполненные задания: блок уровня, босс-тест, ДЗ, тренировка. От серии не зависят и не сгорают. До уровня " + (l.lv + 1) + " — " + (100 - l.into) + " XP."));
    g.appendChild(c4);
    var c5 = card("Быстрый доступ"), q = el("div", "qlinks");
    [["#map", "Карта уровней"], ["#words", "Словарь"], ["#cards", "Карточки"], ["#practice", "Практика"], ["#grammar", "Грамматика"], ["#hw", "ДЗ"]].forEach(function (x) { q.appendChild(aBtn(x[0], x[1], "small")); });
    c5.appendChild(q); g.appendChild(c5);
    var c6 = card("Полезные материалы", "wide"), q2 = el("div", "qlinks");
    [["#dicts", "Онлайн-словари"], ["#media", "Видео и аудирование"], ["#speech", "Разговорная речь и сленг"], ["#formal", "Официальный английский"], ["#sites", "Учебные сайты"], ["#ielts", "IELTS"]].forEach(function (x) { q2.appendChild(aBtn(x[0], x[1], "small")); });
    c6.appendChild(q2); g.appendChild(c6);
    v.appendChild(g);
  }
  function viewMap(v) {
    var nx = nextLevel();
    var head = el("div", "city-head"); pageHead(head, "Карта уровней", "Уровни 1–30 — основной курс до A2. Дальше — продолжение до B1: модули 1–2 (уровни 31–50) уже открыты, остальные появятся по очереди."); v.appendChild(head);
    EN.worlds.forEach(function (W, wi) {
      var ls = LESSONS.filter(function (L) { return L.world === wi + 1; });
      var u = card(null, "unit w" + (wi + 1)); u.style.setProperty("--scn", "url(\"" + SCENERY[wi + 1] + "\")");
      u.appendChild(el("span", "wk-num", "Мир " + (wi + 1) + " · уровни " + ls[0].id + "–" + ls[ls.length - 1].id));
      u.appendChild(el("h3", null, W.name));
      u.appendChild(el("p", "wk-sub", W.sub.replace(/^Уровни [0-9–-]+:\s*/, "")));
      var grid = el("div", "nodes");
      ls.forEach(function (L) {
        var passed = !!prog.passed[L.id], open = isOpen(L.id), st = passed ? "done" : !open ? "locked" : L.id === nx ? "current" : "open";
        var b = el("button", "node " + st); b.type = "button";
        b.setAttribute("aria-label", "Уровень " + L.id + ": " + L.en + (st === "locked" ? " (закрыт)" : passed ? " (пройден, звёзд: " + prog.passed[L.id] + ")" : ""));
        b.appendChild(el("span", "sq", passed ? "✓" : String(L.id)));
        b.appendChild(el("span", "lbl", L.en));
        if (passed) b.appendChild(el("span", "stars", "★★★".slice(0, prog.passed[L.id]) + "☆☆☆".slice(prog.passed[L.id])));
        else if (st !== "locked" && prog.resume[L.id]) b.appendChild(el("span", "node-badge", "начат"));
        b.addEventListener("click", function () { if (st === "locked") toast("Уровень " + L.id + " откроется после уровня " + (L.id - 1) + "."); else location.hash = "#level-" + L.id; });
        grid.appendChild(b);
      });
      u.appendChild(grid); v.appendChild(u);
    });
  }
  function choiceFromWords(w, dir, pool, extra) {
    var key = dir === "ru" ? "ru" : "en";
    var correct = dir === "ru" ? ru1(w) : w.en;
    var others = shuffle(pool.filter(function (x) { return x.en !== w.en && ru1(x) !== ru1(w); })).map(function (x) { return dir === "ru" ? ru1(x) : x.en; });
    var opts = [correct]; others.forEach(function (o) { if (opts.length < 4 && opts.indexOf(o) < 0) opts.push(o); });
    opts = shuffle(opts);
    return Object.assign({ k: "choice", opts: opts, a: opts.indexOf(correct), wkey: w.en }, extra || {});
  }
  function wordPool(L) { var p = ALLW.filter(function (x) { return x.lesson <= L.id; }); return p.length >= 8 ? p : ALLW.slice(0, 40); }
  function wordTasks(ws, L, n) {
    var pool = wordPool(L), out = [];
    ws.forEach(function (w, i) {
      var t = i % 4;
      if (t === 0) out.push(choiceFromWords(w, "ru", pool, { kicker: "Что значит слово?", q: w.en, audio: w.en }));
      else if (t === 1) out.push(choiceFromWords(w, "en", pool, { kicker: "Выберите перевод", q: w.ru }));
      else if (t === 2) out.push(choiceFromWords(w, "en", pool, { kicker: "Послушайте и выберите слово", q: "", listen: w.en }));
      else out.push({ k: "type", kicker: "Напишите по-английски", q: w.ru, answers: [w.en], wkey: w.en, why: w.en + " " + w.uk + " — " + w.ru });
    });
    return n ? out.slice(0, n) : out;
  }
  function gramTask(t, L) {
    // [c, prompt, "a|b|c", idx, why] · [t, ru, "ans1|ans2", why] · [b, en, ru, why]
    if (t[0] === "c") { var o = t[2].split("|"), right = o[t[3]], sh = shuffle(o); return { k: "choice", kicker: "Выберите вариант", q: t[1], opts: sh, a: sh.indexOf(right), why: t[4], gkey: L.id + ":" + t[1] }; }
    if (t[0] === "t") return { k: "type", kicker: "Переведите на английский", q: t[1], answers: t[2].split("|"), why: t[3], gkey: L.id + ":" + t[1] };
    if (t[0] === "b") return { k: "build", kicker: "Соберите предложение", ru: t[2], en: t[1], why: t[3], gkey: L.id + ":" + t[1] };
    return null;
  }
  function sentenceTasks(L) {
    return L.s.map(function (s, i) {
      if (i % 3 === 0) return { k: "build", kicker: "Соберите предложение", ru: s[1], en: s[0] };
      if (i % 3 === 1) return { k: "type", kicker: "Переведите на английский", q: s[1], answers: [s[0]].concat(s[2] ? s[2].split("|") : []), why: "Образец: " + s[0] };
      return { k: "type", kicker: "Диктант: напишите, что услышали", q: "", listen: s[0], answers: [s[0]].concat(s[2] ? s[2].split("|") : []), why: s[0] + " — " + s[1] };
    });
  }
  function reviewTasks(L, n) {
    var d = today();
    var due = ALLW.filter(function (w) { return w.lesson < L.id && srs[w.en] && srs[w.en].due <= d; });
    if (due.length < n) due = due.concat(pick(ALLW.filter(function (w) { return w.lesson < L.id && due.indexOf(w) < 0; }), n - due.length));
    return wordTasks(pick(due, n), L).map(function (t) { t.kicker = "Повторение: " + t.kicker.toLowerCase(); return t; });
  }

  function levelSession(id) {
    var L = LESSONS[id - 1], ws = wordsOf(L), g1 = ws.slice(0, 5), g2 = ws.slice(5);
    var B = [];
    // 0. Разминка: повторение прошлых слов (интервалы 1-3-7-14 дней) и грамматики уровней id-1, id-3, id-7, id-14
    if (id > 1) {
      var rsteps = [{ k: "info", kicker: "Разминка · 5 минут", title: "Сначала вспомним прошлое", html: "<p>Слова и правила из прошлых уровней возвращаются через 1, 3, 7 и 14 дней. Ошибочные — раньше, уверенные — реже. Отвечайте без подсказок.</p>" }];
      rsteps = rsteps.concat(reviewTasks(L, 5));
      [1, 3, 7, 14].forEach(function (d) { var P0 = LESSONS[id - 1 - d]; if (P0) { var t = gramTask(pick(P0.g.tasks, 1)[0], P0); if (t) { t.kicker = "Повторение · уровень " + P0.id; rsteps.push(t); } } });
      var PV = LESSONS[id - 2]; if (PV && PV.speak) { var sq = pick(PV.speak, 1)[0]; rsteps.push({ k: "aloud", soft: true, kicker: "Повторение вслух · уровень " + PV.id, q: sq[0], ru: sq[1], sample: sq[2] }); }
      B.push({ id: "review", steps: rsteps });
    }
    // 1. Слова: знакомство по 5 слов → сразу практика
    var wsteps = [{ k: "info", kicker: "Уровень " + L.id + " · " + (L.task ? "новые слова" : "цель"), title: L.task ? "Слова из диалога" : L.en + " — " + L.ru, html: (L.task ? "<p>Вы уже слышали эти слова в диалоге. Теперь разберём каждое.</p>" : "<p>" + L.goal + "</p>") + "<p class='muted'>10 слов: слушайте каждое в британском и американском варианте, смотрите транскрипцию. После каждых пяти слов — практика.</p>" }];
    [g1, g2].forEach(function (g) {
      g.forEach(function (w) { wsteps.push({ k: "word", w: w }); });
      if (g.length >= 3) wsteps.push({ k: "match", kicker: "Соедините пары", pairs: g.map(function (w) { return [w.en, ru1(w)]; }) });
      wsteps = wsteps.concat(wordTasks(shuffle(g), L));
    });
    B.push({ id: "words", steps: wsteps });
    // 2. Звуки
    var P = L.p, ssteps = [{ k: "info", kicker: "Произношение · " + P.ipa, title: P.t, html: P.html + (P.ukus ? "<div class='why-box'><b>🇬🇧 и 🇺🇸:</b> " + P.ukus + "</div>" : ""), say: P.drill }];
    (P.pairs || []).forEach(function (pr) {
      var target = pr[Math.floor(Math.random() * 2)], opts = shuffle(pr);
      ssteps.push({ k: "choice", kicker: "Какое слово прозвучало?", q: "", listen: target, opts: opts, a: opts.indexOf(target), why: pr[0] + " и " + pr[1] + " различаются одним звуком: " + P.ipa + "." });
    });
    if (P.drill && P.drill.length) ssteps.push({ k: "drill", kicker: "Повторяйте вслух", title: "Слушайте и повторяйте", words: P.drill });
    B.push({ id: "sounds", steps: ssteps });
    // 3. Грамматика: правило → задания с объяснением «почему»
    var G = L.g, gsteps = [{ k: "info", kicker: "Грамматика", title: G.t, html: G.html }];
    G.tasks.forEach(function (t) { var x = gramTask(t, L); if (x) gsteps.push(x); });
    B.push({ id: "grammar", steps: gsteps });
    // 4. Аудирование: сначала на слух, потом вопросы, потом текст
    var D = L.d, lsteps = [{ k: "dialog", kicker: "Аудирование", title: D.t, lines: D.l, hideText: true }];
    if (L.task) lsteps.unshift({ k: "info", kicker: "Уровень " + L.id + " · задача урока", title: L.task, html: "<p>К концу уровня вы сделаете это сами, без подсказок.</p><ul>" + L.can.map(function (c) { return "<li>" + c + "</li>"; }).join("") + "</ul><p class='muted'>Сначала послушайте живой диалог — правила будут потом. Удобно заниматься тремя подходами по 30 минут: 1) разминка, диалог и слова; 2) звуки и грамматика; 3) практика, задача урока и босс-тест.</p>" });
    D.q.forEach(function (q) { var o = q[1].split("|"), right = o[q[2]], sh = shuffle(o); lsteps.push({ k: "choice", kicker: "Вопрос по диалогу", q: q[0], opts: sh, a: sh.indexOf(right), replay: D.l, why: q[3] || "" }); });
    lsteps.push({ k: "dialog", kicker: "Текст диалога", title: D.t, lines: D.l, hideText: false });
    if (L.task) B.splice(id > 1 ? 1 : 0, 0, { id: "listen", steps: lsteps }); else B.push({ id: "listen", steps: lsteps });
    // 5. Практика: свои предложения + повторение старых слов
    var psteps = sentenceTasks(L);
    psteps = L.task ? psteps.sort(function (x, y) { var o = { choice: 0, match: 0, build: 1, type: 2 }; return (o[x.k] || 0) - (o[y.k] || 0); }) : shuffle(psteps);
    if (L.speak) L.speak.forEach(function (q) { psteps.push({ k: "aloud", soft: true, kicker: "Ответьте вслух", q: q[0], ru: q[1], sample: q[2] }); });
    // Задача урока: применить самостоятельно
    psteps.push({ k: "write", soft: true, kicker: "Задача урока", title: L.writeTask || L.goal, words: L.w.map(function (w) { return w[0]; }), minW: 15, minUse: 2, model: L.d.l.map(function (x) { return x[1]; }).slice(0, 4).join(" ") });
    B.push({ id: "practice", steps: psteps });
    // 6. Босс-тест: без подсказок, 80% для прохождения
    var boss = [];
    pick(ws, 4).forEach(function (w, i) { boss.push(i % 2 ? { k: "type", kicker: "Напишите по-английски", q: w.ru, answers: [w.en], wkey: w.en } : choiceFromWords(w, "en", wordPool(L), { kicker: "Послушайте и выберите", q: "", listen: w.en })); });
    pick(G.tasks, 4).forEach(function (t) { var x = gramTask(t, L); if (x) boss.push(x); });
    pick(L.s, 2).forEach(function (s) { boss.push({ k: "build", kicker: "Соберите предложение", ru: s[1], en: s[0] }); });
    if (id % 5 === 0) for (var mi = id - 4; mi < id; mi++) { var ML = LESSONS[mi - 1], mt = gramTask(pick(ML.g.tasks, 1)[0], ML); if (mt) { mt.kicker = "Смешанная проверка · уровень " + mi; boss.push(mt); } }
    boss.forEach(function (b) { b.boss = true; });
    B.push({ id: "boss", steps: [{ k: "info", kicker: "Финал уровня", title: "Босс-тест", html: "<p>" + boss.length + " заданий без подсказок. Нужно <b>80%</b> правильных ответов с первой попытки. Ошибки не возвращаются — после теста увидите разбор.</p><p class='muted'>1★ — от 80%, 2★ — от 90%, 3★ — без ошибок.</p>" }].concat(shuffle(boss)) });

    var startBlock = Math.min(prog.resume[id] || 0, B.length - 1);
    return { kind: "level", id: id, L: L, blocks: B, bi: startBlock, pos: 0, queue: B[startBlock].steps.slice(), first: {}, retried: {}, ok: 0, total: 0, bossOk: 0, bossTotal: 0, mistakes: [], hp: HP_MAX };
  }
  function trainSession(title, steps, back) {
    return { kind: "train", title: title, blocks: [{ id: "train", steps: steps }], bi: 0, pos: 0, queue: steps.slice(), first: {}, retried: {}, ok: 0, total: 0, mistakes: [], back: back || "#practice" };
  }


  // ======================================================================
  // УРОК: экран как в казахском (полоса, блок, нижняя панель)
  // ======================================================================
  var BLOCK_NAMES = { review: "Разминка", words: "Слова", sounds: "Звуки", grammar: "Грамматика", listen: "Аудирование", practice: "Практика", boss: "Босс-тест" };
  function stepId(st) { return st.uid || (st.uid = Math.random().toString(36).slice(2)); }
  function pickOne(a) { return a[Math.floor(Math.random() * a.length)]; }
  function isEn(t) { return /^[\x00-\x7f’]+$/.test(t); }

  function renderSession() {
    var blk = S.blocks[S.bi], step = S.queue[S.pos];
    var view = el("section", "view sess");
    var top = el("div", "sess-top");
    var x = el("button", "icon-btn", "✕"); x.type = "button"; x.setAttribute("aria-label", "Выйти");
    x.addEventListener("click", function () { var to = S.kind === "level" ? "#map" : S.back || "#map"; S = null; location.hash = to; });
    var bar = el("div", "sess-bar"), fill = el("div"); fill.style.width = Math.round(overallPct() * 100) + "%"; bar.appendChild(fill);
    top.appendChild(x); top.appendChild(bar);
    top.appendChild(el("span", "sess-count", Math.min(S.pos + 1, S.queue.length) + " / " + S.queue.length));
    if (S.kind === "level") top.appendChild(heartsRow(S.hp, HP_MAX));
    view.appendChild(top);
    var body = el("div", "sess-body");
    body.appendChild(el("span", "blk", S.kind === "level" ? "Уровень " + S.id + " · блок " + (S.bi + 1) + " из " + S.blocks.length + " · " + BLOCK_NAMES[blk.id] : S.title));
    view.appendChild(body);
    var foot = el("div", "sess-foot"), fb = el("div", "fb"); fb.setAttribute("aria-live", "polite");
    var act = btn("Проверить", "primary"); act.disabled = true;
    foot.appendChild(fb); foot.appendChild(act); view.appendChild(foot);
    app.innerHTML = ""; app.appendChild(view);
    if (!step) { finishBlock(); return; }
    renderStep(step, body, fb, act);
  }
  function overallPct() { var inBlock = S.queue.length ? S.pos / S.queue.length : 1; return (S.bi + inBlock) / S.blocks.length; }

  function renderStep(st, body, fb, act) {
    function setAct(label, enabled, fn) { act.textContent = label; act.disabled = !enabled; act.onclick = fn || null; }
    function next() { S.pos++; renderSession(); }
    function result(ok, right, why, partial) {
      S.scored = S.scored || {}; S.score = S.score || 0;
      var id = stepId(st);
      if (!(id in S.first)) {
        S.first[id] = ok;
        if (st.boss) { S.bossTotal++; if (ok) S.bossOk++; } else { S.total++; if (ok) S.ok++; }
        if (st.wkey) srsTouch(st.wkey, ok);
        if (!ok) { var mk = st.wkey ? "w:" + st.wkey : st.gkey ? "g:" + st.gkey : null; if (mk) miss[mk] = (miss[mk] || 0) + 1; S.mistakes.push({ q: st.listen ? "На слух" : st.q || st.ru || "", right: right }); }
        else if (st.wkey && miss["w:" + st.wkey]) miss["w:" + st.wkey] = Math.max(0, miss["w:" + st.wkey] - 1);
      }
      if (!(id in S.scored) && st.pts) { S.scored[id] = 1; S.score += partial != null ? partial : ok ? st.pts : 0; }
      if (!ok && !st.boss && !st.hw && !st.soft && !S.retried[id]) {
        S.retried[id] = 1;
        var again = st;
        if (st.wkey && st.k !== "type" && WMAP[st.wkey]) again = { k: "type", kicker: "Ещё раз, без вариантов: напишите по-английски", q: ru1(WMAP[st.wkey]), answers: [st.wkey], wkey: st.wkey };
        S.queue.splice(Math.min(S.pos + 3, S.queue.length), 0, again);
      }
      var hpOut = false;
      if (!ok && S.kind === "level" && !st.soft) { S.hp = Math.max(0, S.hp - 1); hpOut = S.hp === 0; var hr = $(".sess-top .hp"); if (hr) hr.replaceWith(heartsRow(S.hp, HP_MAX)); }
      fb.className = "fb " + (ok ? "ok" : "bad");
      fb.innerHTML = (ok ? pickOne(["Верно!", "Отлично!", "Так держать!", "Great!"]) : "Неверно." + (right ? " Правильно: <b>" + esc(right) + "</b>" : "")) +
        (why ? "<span class='why'>" + why + "</span>" : "") + (!ok && !st.boss && !st.hw ? "<span class='why'>Похожее задание вернётся через пару вопросов.</span>" : "");
      setAct("Дальше", true, next);
      if (hpOut) {
        fb.innerHTML += "<span class='why'><b>ХП закончились.</b> " + (st.boss ? "Босс-тест не пройден — попробуйте ещё раз." : "Блок начнётся заново с полными сердцами.") + "</span>";
        setAct(st.boss ? "К результатам" : "Начать блок заново", true, function () {
          if (st.boss) { var bossN = S.blocks[S.bi].steps.filter(function (x) { return x.boss; }).length; S.bossTotal = bossN; prog.resume[S.id] = S.blocks.length - 1; saveAll(); renderLevelFinish(S.bossOk / bossN, false, 0, 0); }
          else { S = levelSession(S.id); renderSession(); }
        });
      }
      act.focus();
    }
    if (st.kicker) body.appendChild(el("p", "q-label", st.kicker));

    if (st.k === "info") {
      body.appendChild(el("h2", null, st.title || ""));
      var c = card(null, "yellow rule"); c.innerHTML = st.html; body.appendChild(c);
      c.querySelectorAll("[data-say]").forEach(function (b) { b.className = "btn small"; b.textContent = b.textContent.replace(/^▶\s*/, "▶ "); b.addEventListener("click", function () { speak(b.getAttribute("data-say"), b.getAttribute("data-acc") || null); }); });
      if (st.say && st.say.length) { var r = el("div", "row"); st.say.slice(0, 6).forEach(function (w) { r.appendChild(playBtn(w, null, "▶ " + w)); }); body.appendChild(r); }
      setAct("Понятно", true, next);
    } else if (st.k === "word") {
      var w = st.w;
      body.appendChild(el("div", "big-word", w.en)).setAttribute("lang", "en");
      var il = el("div", "ipa-line");
      il.appendChild(el("span", "tag", "UK")); il.appendChild(el("span", "ipa", w.uk));
      il.appendChild(el("span", "tag", "US")); il.appendChild(el("span", "ipa", w.us));
      body.appendChild(il);
      body.appendChild(el("p", null, w.ru)).style.fontWeight = "800";
      var out = el("p", "notice-small"); out.setAttribute("aria-live", "polite");
      var r2 = el("div", "row"); r2.appendChild(playBtn(w.en, "uk", "▶ UK")); r2.appendChild(playBtn(w.en, "us", "▶ US")); var mb = micBtn(w.en, out); if (mb) r2.appendChild(mb);
      body.appendChild(r2); body.appendChild(out);
      var ex = el("div", "brk"); ex.appendChild(el("b", null, "Пример")); var en1 = el("div", null, w.ex); en1.setAttribute("lang", "en"); en1.style.fontWeight = "700"; ex.appendChild(en1); ex.appendChild(el("div", "tr", w.exru));
      var r3 = el("div", "row"); r3.appendChild(playBtn(w.ex, null, "▶ Пример")); ex.appendChild(r3);
      body.appendChild(ex);
      setTimeout(function () { speak(w.en); }, 250);
      srsAdd(w.en);
      setAct("Дальше", true, next);
    } else if (st.k === "choice") {
      if (st.listen) {
        body.appendChild(el("h2", null, "Послушайте"));
        var rl = el("div", "row"); rl.appendChild(playBtn(st.listen, null, "▶ Послушать")); rl.appendChild(btn("Медленнее", "small", function () { speak(st.listen, null, 0.6); })); body.appendChild(rl);
        setTimeout(function () { speak(st.listen); }, 300);
      } else { var hq = el(st.q.length <= 24 ? "div" : "h2", st.q.length <= 24 ? "big-word" : null, st.q); if (isEn(st.q)) hq.setAttribute("lang", "en"); body.appendChild(hq); }
      if (st.audio) { var ra = el("div", "row"); ra.appendChild(playBtn(st.audio)); body.appendChild(ra); }
      if (st.replay) { var rr = el("div", "row"); rr.appendChild(btn("▶ Диалог ещё раз", "small", function () { speakLines(st.replay); })); body.appendChild(rr); }
      var grid = el("div", "opts-grid"), btns = [];
      st.opts.forEach(function (o, i) {
        var b = el("button", "opt", o); b.type = "button"; if (isEn(o)) b.setAttribute("lang", "en");
        b.addEventListener("click", function () {
          btns.forEach(function (z) { z.disabled = true; });
          var ok = i === st.a; b.classList.add(ok ? "right" : "wrong"); if (!ok) btns[st.a].classList.add("right");
          if (ok && isEn(o) && o.length < 60) speak(o);
          result(ok, st.opts[st.a], st.why);
        });
        btns.push(b); grid.appendChild(b);
      });
      body.appendChild(grid);
      setAct("Выберите ответ", false);
    } else if (st.k === "type") {
      if (st.listen) {
        body.appendChild(el("h2", null, "Послушайте и напишите"));
        var rt = el("div", "row"); rt.appendChild(playBtn(st.listen, null, "▶ Послушать")); rt.appendChild(btn("Медленнее", "small", function () { speak(st.listen, null, 0.6); })); body.appendChild(rt);
        setTimeout(function () { speak(st.listen); }, 300);
      } else body.appendChild(el("h2", null, st.q));
      var inp = el("input", "sess-input"); inp.type = "text"; inp.autocomplete = "off"; inp.setAttribute("autocapitalize", "off"); inp.spellcheck = false; inp.lang = "en"; inp.placeholder = "Пишите по-английски…"; inp.setAttribute("aria-label", "Ваш ответ по-английски");
      body.appendChild(inp);
      if (!st.boss && st.answers[0].split(" ").length === 1) body.appendChild(el("p", "notice-small", "Подсказка: " + st.answers[0].length + " букв, начинается на «" + st.answers[0][0] + "»"));
      var check = function () {
        if (!inp.value.trim() || inp.disabled) return;
        inp.disabled = true;
        var rs = checkTyped(inp.value, st.answers);
        result(rs.ok, st.answers[0], (rs.typo ? "Есть опечатка, но засчитано. " : "") + (st.why || ""));
        if (rs.ok) speak(st.answers[0]);
      };
      inp.addEventListener("input", function () { if (act.textContent === "Проверить") act.disabled = !inp.value.trim(); });
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); check(); } });
      setAct("Проверить", false, check);
      setTimeout(function () { inp.focus(); }, 50);
    } else if (st.k === "build") {
      body.appendChild(el("h2", null, st.ru));
      var toks = st.en.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);
      var ans = el("div", "chips"), bank = el("div", "chips bank"), chosen = [];
      ans.setAttribute("aria-label", "Ваш ответ");
      shuffle(toks.map(function (t, i) { return { t: t, i: i }; })).forEach(function (o) {
        var b = el("button", "chip", o.t); b.type = "button"; b.lang = "en";
        b.addEventListener("click", function () {
          if (b.classList.contains("used") || act.textContent !== "Проверить") return;
          b.classList.add("used");
          var c2 = el("button", "chip ghost", o.t); c2.type = "button"; c2.lang = "en";
          c2.addEventListener("click", function () { if (act.textContent !== "Проверить") return; c2.remove(); b.classList.remove("used"); chosen.splice(chosen.indexOf(o), 1); act.disabled = chosen.length !== toks.length; });
          ans.appendChild(c2); chosen.push(o); act.disabled = chosen.length !== toks.length;
        });
        bank.appendChild(b);
      });
      body.appendChild(ans); body.appendChild(bank);
      setAct("Проверить", false, function () {
        var said = chosen.map(function (o) { return o.t; }).join(" "), ok = norm(said) === norm(st.en);
        ans.querySelectorAll("button").forEach(function (b) { b.disabled = true; }); bank.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
        ans.style.animation = ok ? "pop .35s steps(3) 1" : "shake .35s steps(4) 1";
        speak(st.en); result(ok, st.en, st.why);
      });
    } else if (st.k === "match") {
      var pairs = st.pairs, sel = null, done = 0, errs = 0;
      var mc = el("div", "match-cols"), colL = el("div"), colR = el("div");
      var mk = function (p, side) {
        var b = el("button", "opt", p[side]); b.type = "button"; b.lang = side === 0 ? "en" : "ru";
        b.addEventListener("click", function () {
          if (b.disabled) return;
          if (side === 0) speak(p[0]);
          if (!sel || sel.side === side) { if (sel) sel.b.classList.remove("sel"); sel = { b: b, p: p, side: side }; b.classList.add("sel"); return; }
          if (sel.p === p) {
            [sel.b, b].forEach(function (z) { z.classList.remove("sel"); z.classList.add("right"); z.disabled = true; setTimeout(function () { z.classList.remove("right"); z.classList.add("gone"); }, 380); });
            sel = null; done++; if (done === pairs.length) result(errs <= 1, null, errs ? "Ошибок при сопоставлении: " + errs + "." : "");
          } else { errs++; var s0 = sel.b; b.classList.add("wrong"); s0.classList.add("wrong"); setTimeout(function () { b.classList.remove("wrong"); s0.classList.remove("wrong", "sel"); }, 380); sel = null; }
        });
        return b;
      };
      shuffle(pairs).forEach(function (p) { colL.appendChild(mk(p, 0)); }); shuffle(pairs).forEach(function (p) { colR.appendChild(mk(p, 1)); });
      mc.appendChild(colL); mc.appendChild(colR); body.appendChild(mc);
      setAct("Найдите все пары", false);
    } else if (st.k === "dialog") {
      body.appendChild(el("h2", null, st.title));
      if (st.hideText) {
        body.appendChild(el("p", null, "Послушайте диалог без текста. Включайте сколько угодно раз. Потом будут вопросы, а в конце — текст с переводом."));
        var rd = el("div", "row");
        rd.appendChild(btn("▶ Слушать диалог", "primary", function () { speakLines(st.lines); }));
        rd.appendChild(btn("Медленнее", "", function () { var r0 = settings.rate; settings.rate = 0.65; speakLines(st.lines); settings.rate = r0; }));
        body.appendChild(rd);
        setTimeout(function () { speakLines(st.lines); }, 300);
        setAct("К вопросам", true, next);
      } else {
        var dl = el("div", "dlg");
        st.lines.forEach(function (ln) {
          var row = el("div", "line " + (ln[0] === "B" ? "b" : "a"));
          row.appendChild(el("span", "who", ln[0]));
          var t = el("div"); var e1 = el("div", null, ln[1]); e1.lang = "en"; e1.style.fontWeight = "700"; t.appendChild(e1); t.appendChild(el("div", "ru", ln[2])); row.appendChild(t);
          row.appendChild(playBtn(ln[1], null, "▶"));
          dl.appendChild(row);
        });
        body.appendChild(dl);
        var rw = el("div", "row"); rw.appendChild(btn("▶ Весь диалог", "small", function () { speakLines(st.lines); })); body.appendChild(rw);
        setAct("Дальше", true, next);
      }
    } else if (st.k === "write") {
      body.appendChild(el("h2", null, st.title));
      body.appendChild(el("p", "notice-small", "Минимум " + st.minW + " слов и хотя бы " + st.minUse + " слова урока. Слова урока подсвечиваются, когда вы их используете."));
      var wc = el("div", "chips"); var wchips = st.words.map(function (w) { var c = el("span", "chip", w); c.lang = "en"; wc.appendChild(c); return c; }); body.appendChild(wc);
      var ta = el("textarea", "sess-input"); ta.rows = 6; ta.lang = "en"; ta.spellcheck = false; ta.placeholder = "Пишите по-английски…"; ta.setAttribute("aria-label", "Ваш текст"); body.appendChild(ta);
      var cnt = el("p", "notice-small"); body.appendChild(cnt);
      var stat = function () {
        var text = ta.value.toLowerCase(), words = (ta.value.match(/[A-Za-z']+/g) || []).length, used = 0;
        st.words.forEach(function (w, i) { var on = new RegExp("(^|[^a-z])" + w.toLowerCase().replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "([^a-z]|$)").test(text); wchips[i].classList.toggle("ghost", on); if (on) used++; });
        cnt.textContent = "Слов: " + words + " / " + st.minW + " · слов урока: " + used + " / " + st.minUse;
        return { words: words, used: used };
      };
      ta.addEventListener("input", function () { var r0 = stat(); if (act.textContent === "Проверить") act.disabled = r0.words < 3; });
      stat();
      setAct("Проверить", false, function () {
        var r1 = stat(); ta.disabled = true;
        var part = st.pts * (Math.min(1, r1.words / st.minW) * 0.5 + Math.min(1, r1.used / st.minUse) * 0.5);
        var ok = r1.words >= st.minW && r1.used >= st.minUse;
        result(ok, null, (ok ? "Требования выполнены. " : "Не хватает: " + (r1.words < st.minW ? "слов (" + r1.words + "/" + st.minW + ") " : "") + (r1.used < st.minUse ? "слов урока (" + r1.used + "/" + st.minUse + ")" : "") + ". ") + "Пример: <i lang='en'>" + esc(st.model) + "</i>", Math.round(part * 10) / 10);
      });
    } else if (st.k === "aloud") {
      var qh = el("h2", null, esc(st.q)); qh.lang = "en"; body.appendChild(qh);
      body.appendChild(el("p", "muted", st.ru + ". Послушайте вопрос и ответьте вслух полным предложением. Потом сравните с примером."));
      var ar = el("div", "row"); ar.appendChild(playBtn(st.q, "uk", "Вопрос")); body.appendChild(ar);
      setTimeout(function () { speak(st.q); }, 300);
      var smp = el("div", "why-box"); smp.hidden = true; smp.innerHTML = "<b>Пример ответа:</b> <span lang='en'>" + esc(st.sample) + "</span>"; body.appendChild(smp);
      setAct("Я ответил(а) — показать пример", true, function () {
        smp.hidden = false; smp.appendChild(playBtn(st.sample, "uk", "Послушать"));
        var self = el("div", "row"); body.appendChild(el("p", "notice-small", "Оцените себя честно: получилось ответить целым предложением?"));
        self.appendChild(btn("Получилось", "primary small", function () { self.remove(); result(true, null, "Отлично. Такие ответы — главная цель уровня."); }));
        self.appendChild(btn("Ещё потренируюсь", "small", function () { self.remove(); result(false, null, "Повторите пример вслух 2–3 раза. Вопрос вернётся в разминке следующего уровня."); }));
        body.appendChild(self); setAct("Оцените себя", false);
      });
    } else if (st.k === "drill") {
      body.appendChild(el("h2", null, st.title));
      body.appendChild(el("p", "muted", "Нажмите на слово, послушайте и повторите вслух 2–3 раза. Если браузер умеет распознавать речь, проверьте себя кнопкой «Повторить вслух»."));
      st.words.forEach(function (wd) {
        var o2 = el("span", "notice-small"), row = el("div", "wrow"), m2 = el("div", "wmain"), a2 = el("div", "wact");
        var bw = el("b", null, wd); bw.lang = "en"; m2.appendChild(bw); m2.appendChild(el("div")).appendChild(o2);
        a2.appendChild(playBtn(wd, "uk", "UK")); a2.appendChild(playBtn(wd, "us", "US")); var mm = micBtn(wd, o2); if (mm) a2.appendChild(mm);
        row.appendChild(m2); row.appendChild(a2); body.appendChild(row);
      });
      setAct("Дальше", true, next);
    }
  }
  // Enter = главная кнопка
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" || !S) return;
    var t = e.target; if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "BUTTON" || t.tagName === "A")) return;
    var b = $(".sess-foot .btn"); if (b && !b.disabled) { e.preventDefault(); b.click(); }
  });

  function finishBlock() {
    var blk = S.blocks[S.bi];
    if (S.kind === "train") { renderTrainFinish(); return; }
    if (S.kind === "hw") { renderHwFinish(); return; }
    var id = S.id;
    touchStreak();
    if (blk.id !== "boss") {
      var key = id + ":" + blk.id;
      if (!prog.blocksDone[key]) { prog.blocksDone[key] = 1; addXp(10); }
      prog.resume[id] = S.bi + 1; saveAll();
      S.bi++; S.pos = 0; S.queue = S.blocks[S.bi].steps.slice(); S.hp = HP_MAX;
      renderSession(); return;
    }
    var acc = S.bossTotal ? S.bossOk / S.bossTotal : 0, pass = acc >= 0.8;
    var stars = !pass ? 0 : acc >= 0.999 ? 3 : acc >= 0.9 ? 2 : 1, gained = 0;
    if (pass) {
      var before = prog.passed[id] || 0;
      if (!before) gained += 50;
      if (stars > before) { gained += (stars - before) * 10; prog.passed[id] = stars; }
      delete prog.resume[id];
    } else prog.resume[id] = S.blocks.length - 1;
    addXp(gained); saveAll();
    renderLevelFinish(acc, pass, stars, gained);
  }
  function finishShell() { var v = el("section", "view sess"); app.innerHTML = ""; app.appendChild(v); return v; }
  function renderLevelFinish(acc, pass, stars, gained) {
    var id = S.id, L = S.L, pct = Math.round(acc * 100), v = finishShell();
    var c = card(null, "finish");
    c.appendChild(el("h2", null, pass ? "Уровень пройден!" : "Почти получилось"));
    c.appendChild(el("p", null, pass ? "Уровень " + id + " «" + L.en + "» пройден." : "Босс-тест: " + pct + "%. Нужно 80% — " + (pct >= 60 ? "ещё чуть-чуть!" : "повторите правило и попробуйте ещё раз.")));
    var sb = el("div", "stars-big"); sb.setAttribute("aria-label", "Звёзд: " + stars); sb.innerHTML = "★★★".slice(0, stars) + "<span class='off'>" + "★★★".slice(stars) + "</span>"; c.appendChild(sb);
    c.appendChild(el("span", "stat", "Босс: " + pct + "%")); if (gained) c.appendChild(el("span", "stat", "+" + gained + " XP"));
    var r = el("div", "row"); r.style.justifyContent = "center";
    if (pass) {
      r.appendChild(id < TOTAL ? aBtn("#level-" + (id + 1), "► Уровень " + (id + 1), "primary") : aBtn("#map", "► На карту", "primary"));
      r.appendChild(aBtn("#map", "Карта"));
    } else {
      r.appendChild(btn("► Ещё раз", "primary", function () { S = levelSession(id); renderSession(); }));
      r.appendChild(aBtn("#grammar", "Повторить правило"));
    }
    c.appendChild(r); v.appendChild(c);
    if (S.mistakes.length) v.appendChild(mistakesCard(S.mistakes));
    r.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { S = null; }); });
    if (pass) confetti();
  }
  function mistakesCard(ms) {
    var seen = {}, c = card("Разбор ошибок");
    ms.filter(function (m) { var k = m.q + "|" + m.right; if (seen[k]) return false; seen[k] = 1; return true; }).slice(0, 8).forEach(function (m) {
      var p = el("p"); p.appendChild(el("span", "muted", m.q)); p.appendChild(document.createTextNode(" → ")); var b = el("b", null, m.right || "—"); b.lang = "en"; p.appendChild(b); c.appendChild(p);
    });
    return c;
  }
  function renderTrainFinish() {
    var acc = S.total ? S.ok / S.total : 1, gained = Math.round(S.ok * 2);
    addXp(gained); touchStreak(); saveAll();
    var v = finishShell(), c = card(null, "finish");
    c.appendChild(el("h2", null, "Тренировка окончена"));
    c.appendChild(el("span", "stat", "Точность: " + Math.round(acc * 100) + "%")); c.appendChild(el("span", "stat", "+" + gained + " XP"));
    var r = el("div", "row"); r.style.justifyContent = "center"; r.appendChild(aBtn(S.back, "Готово", "primary")); c.appendChild(r);
    v.appendChild(c);
    if (S.mistakes.length) v.appendChild(mistakesCard(S.mistakes));
    if (acc >= 0.8) confetti();
  }

  // ---------- интервальное повторение (оценки как в казахском) ----------
  var IVL = [0, 1, 3, 7, 14, 30, 60];
  function srsAdd(en) { if (!srs[en]) { srs[en] = { b: 0, due: today() }; save(K.srs, srs); } }
  function srsTouch(en, ok) { var s = srs[en] || { b: 0, due: today() }; s.b = ok ? Math.min(s.b + 1, IVL.length - 1) : 0; s.due = today() + IVL[s.b]; srs[en] = s; }
  function srsGrade(en, g) {
    var s = srs[en] || { b: 0, due: today() };
    if (g === 0) { s.b = 0; s.due = today(); }
    else if (g === 1) { s.due = today() + 1; }
    else if (g === 2) { s.b = Math.min(s.b + 1, IVL.length - 1); s.due = today() + IVL[s.b]; }
    else { s.b = Math.min(s.b + 2, IVL.length - 1); s.due = today() + IVL[s.b]; }
    srs[en] = s; save(K.srs, srs);
  }

  // ======================================================================
  // СЛОВАРЬ
  // ======================================================================
  function viewWords(v) {
    pageHead(v, "Словарь", "Все слова курса с транскрипцией IPA (британский и американский вариант), переводом и примером.");
    var row = el("div", "pg-row");
    var q = el("input", "pg-field"); q.type = "search"; q.placeholder = "Поиск по-английски или по-русски"; q.setAttribute("aria-label", "Поиск слова");
    var sel = el("select"); sel.setAttribute("aria-label", "Тема"); sel.appendChild(el("option", null, "Все уровни и темы")).value = "";
    LESSONS.forEach(function (L) { var o = el("option", null, L.id + ". " + L.topic); o.value = String(L.id); sel.appendChild(o); });
    row.appendChild(q); row.appendChild(sel); v.appendChild(row);
    var cnt = el("p", "notice-small"), list = el("div"); v.appendChild(cnt); v.appendChild(list);
    function draw() {
      var s = q.value.trim().toLowerCase(), f = sel.value;
      var res = ALLW.filter(function (w) { return (!f || String(w.lesson) === f) && (!s || w.en.toLowerCase().indexOf(s) >= 0 || w.ru.toLowerCase().indexOf(s) >= 0); });
      cnt.textContent = "Найдено: " + res.length; list.innerHTML = "";
      res.slice(0, 300).forEach(function (w) {
        var r = el("div", "wrow"), m = el("div", "wmain"), a = el("div", "wact");
        var b = el("b", null, w.en); b.lang = "en"; m.appendChild(b);
        var il = el("div", "ipa-line"); il.appendChild(el("span", "ipa", "UK " + w.uk)); if (w.us !== w.uk) il.appendChild(el("span", "ipa", "US " + w.us)); m.appendChild(il);
        m.appendChild(el("div", null, w.ru));
        var ex = el("div", "notice-small", w.ex + " — " + w.exru); m.appendChild(ex);
        m.appendChild(el("span", "tag", "Уровень " + w.lesson));
        a.appendChild(playBtn(w.en, "uk", "UK")); a.appendChild(playBtn(w.en, "us", "US"));
        r.appendChild(m); r.appendChild(a); list.appendChild(r);
      });
    }
    q.addEventListener("input", draw); sel.addEventListener("change", draw); draw();
  }

  // ======================================================================
  // КАРТОЧКИ: переворот и свайпы, как в казахском
  // ======================================================================
  var CS = null, cardDeck = "learned", cardDir = "er";
  function viewCards(v) {
    if (CS) { renderCS(v); return; }
    pageHead(v, "Карточки для запоминания", "Интервальное повторение: забытые карточки возвращаются скоро, лёгкие — реже. Карточку можно перевернуть нажатием и смахнуть в сторону оценки.");
    var d = today(), known = learnedWords(), due = known.filter(function (w) { return srs[w.en].due <= d; });
    v.appendChild(statGrid([[known.length, "слов в колоде"], [due.length, "повторить сегодня"], [known.filter(function (w) { return srs[w.en].b <= 1; }).length, "новые и трудные"], [known.filter(function (w) { return srs[w.en].b >= 4; }).length, "хорошо знаю"]]));
    var c = card("Новая сессия"), row = el("div", "pg-row");
    var dk = el("select"); dk.setAttribute("aria-label", "Колода");
    [["learned", "Слова пройденных блоков"], ["all", "Все слова курса"]].concat(EN.worlds.map(function (W, i) { return ["w" + (i + 1), "Мир " + (i + 1) + ": " + W.name]; })).forEach(function (o) { var op = el("option", null, o[1]); op.value = o[0]; dk.appendChild(op); });
    dk.value = cardDeck;
    var dr = el("select"); dr.setAttribute("aria-label", "Направление");
    [["er", "английский → перевод"], ["re", "перевод → английский"]].forEach(function (o) { var op = el("option", null, o[1]); op.value = o[0]; dr.appendChild(op); });
    dr.value = cardDir;
    row.appendChild(dk); row.appendChild(dr); c.appendChild(row);
    var r = el("div", "row");
    r.appendChild(btn("► Начать", "primary", function () {
      cardDeck = dk.value; cardDir = dr.value;
      var pool = cardDeck === "learned" ? known : cardDeck === "all" ? ALLW : ALLW.filter(function (w) { return "w" + LESSONS[w.lesson - 1].world === cardDeck; });
      var dd = pool.filter(function (w) { return srs[w.en] && srs[w.en].due <= d; }), fresh = pool.filter(function (w) { return !srs[w.en]; }).slice(0, 10);
      var queue = dd.concat(fresh);
      if (!queue.length) queue = pick(pool, 10);
      if (!queue.length) { toast("В этой колоде пока нет слов. Пройдите блок «Слова» первого уровня."); return; }
      CS = { queue: shuffle(queue).slice(0, 30), dir: cardDir, n: 0, again: {} };
      app.innerHTML = ""; var vv = el("section", "view"); app.appendChild(vv); renderCS(vv);
    }));
    if (!known.length) c.appendChild(el("p", "notice-small", "Колода «Слова пройденных блоков» пока пуста: она наполняется на уровнях. Можно выбрать «Все слова курса» или мир."));
    c.appendChild(r); v.appendChild(c);
  }
  function renderCS(box) {
    box.innerHTML = "";
    pageHead(box, "Карточки");
    if (!CS.queue.length) {
      var c = card(CS.n ? "Сессия окончена" : "Пока нечего повторять");
      c.appendChild(el("p", null, "Повторено карточек: " + CS.n + "."));
      if (CS.n >= 10) { addXp(5); touchStreak(); saveAll(); c.appendChild(el("p", null, "+5 XP")); }
      var r = el("div", "row");
      r.appendChild(btn("К колодам", "primary", function () { CS = null; app.innerHTML = ""; var vv = el("section", "view"); app.appendChild(vv); viewCards(vv); }));
      r.appendChild(aBtn("#words", "К словарю"));
      c.appendChild(r); box.appendChild(c); if (CS.n >= 10) confetti(); return;
    }
    var w = CS.queue[0], er = CS.dir === "er";
    box.appendChild(el("p", "notice-small", "Осталось: " + CS.queue.length + " · повторено: " + CS.n));
    var GL = ["Не помню", "Трудно", "Хорошо", "Легко"];
    var fl = el("div", "flip enter"); fl.tabIndex = 0; fl.setAttribute("role", "button"); fl.setAttribute("aria-label", "Карточка: нажмите, чтобы перевернуть");
    var inner = el("div", "flip-in");
    var noFlip = function (b) { b.addEventListener("click", function (ev) { ev.stopPropagation(); }); b.addEventListener("pointerdown", function (ev) { ev.stopPropagation(); }); return b; };
    var f = el("div", "face front");
    f.appendChild(el("span", "tag", er ? "вспомните перевод" : "вспомните по-английски"));
    var fr = el("div", "fc-front", er ? w.en : w.ru); if (er) fr.lang = "en"; f.appendChild(fr);
    if (er) { var r1 = el("div", "row"); r1.appendChild(noFlip(playBtn(w.en))); f.appendChild(r1); setTimeout(function () { speak(w.en); }, 200); }
    f.appendChild(el("p", "notice-small", "Нажмите на карточку, чтобы увидеть ответ"));
    var bk = el("div", "face back");
    bk.appendChild(el("p", "notice-small", er ? w.en : w.ru));
    var fb2 = el("div", "fc-front", er ? w.ru : w.en); if (!er) fb2.lang = "en"; bk.appendChild(fb2);
    bk.appendChild(el("p", "ipa", "UK " + w.uk + (w.us !== w.uk ? " · US " + w.us : "")));
    bk.appendChild(el("p", "notice-small", w.ex + " — " + w.exru));
    if (!er) { var r2 = el("div", "row"); r2.appendChild(noFlip(playBtn(w.en))); bk.appendChild(r2); }
    inner.appendChild(f); inner.appendChild(bk);
    var stamp = el("div", "stamp"); stamp.setAttribute("aria-hidden", "true");
    fl.appendChild(inner); fl.appendChild(stamp); box.appendChild(fl);
    var help = el("p", "notice-small swipe-help", "Свайп: ← не помню · ↓ трудно · → хорошо · ↑ легко. Или кнопки ниже."); help.hidden = true; box.appendChild(help);
    var gr = el("div", "grades"); gr.hidden = true;
    var flipped = false, done = false;
    var flip = function () { if (flipped) return; flipped = true; fl.classList.add("on"); fl.style.touchAction = "none"; gr.hidden = false; help.hidden = false; if (!er) speak(w.en); };
    var doGrade = function (g) {
      if (done) return; done = true;
      var to = ["translate(-130vw, 0) rotate(-24deg)", "translate(0, 70vh) rotate(4deg)", "translate(130vw, 0) rotate(24deg)", "translate(0, -80vh) rotate(-4deg)"][g];
      stamp.textContent = GL[g]; stamp.className = "stamp s" + g;
      fl.style.transition = "transform .28s ease-in, opacity .28s ease-in"; fl.style.transform = to; fl.style.opacity = "0";
      setTimeout(function () {
        var ww = CS.queue.shift(); srsGrade(ww.en, g); CS.n++;
        if (g === 0 && !CS.again[ww.en]) { CS.again[ww.en] = 1; CS.queue.push(ww); }
        renderCS(box); var nf = box.querySelector(".flip"); if (nf) { try { nf.focus({ preventScroll: true }); } catch (x) {} }
      }, reduceMotion() ? 0 : 280);
    };
    var pickG = function (dx, dy, th) { return Math.abs(dx) >= Math.abs(dy) ? (dx > th ? 2 : dx < -th ? 0 : null) : (dy < -th ? 3 : dy > th ? 1 : null); };
    var sx = 0, sy = 0, drag = false, moved = false;
    fl.addEventListener("pointerdown", function (ev) { if (!flipped || done) return; drag = true; moved = false; sx = ev.clientX; sy = ev.clientY; fl.classList.add("drag"); try { fl.setPointerCapture(ev.pointerId); } catch (x) {} });
    fl.addEventListener("pointermove", function (ev) {
      if (!drag) return; var dx = ev.clientX - sx, dy = ev.clientY - sy;
      if (Math.abs(dx) + Math.abs(dy) > 8) moved = true;
      fl.style.transform = "translate(" + dx + "px, " + dy + "px) rotate(" + (dx / 18).toFixed(1) + "deg)";
      var g = pickG(dx, dy, 60); stamp.textContent = g == null ? "" : GL[g]; stamp.className = "stamp" + (g == null ? "" : " s" + g);
    });
    var end = function (ev) { if (!drag) return; drag = false; fl.classList.remove("drag"); var g = ev && ev.type === "pointerup" ? pickG(ev.clientX - sx, ev.clientY - sy, 90) : null; if (g == null) { fl.style.transform = ""; stamp.textContent = ""; stamp.className = "stamp"; } else doGrade(g); };
    fl.addEventListener("pointerup", end); fl.addEventListener("pointercancel", end);
    fl.addEventListener("click", function () { if (moved) { moved = false; return; } flip(); });
    fl.addEventListener("keydown", function (ev) {
      if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); flip(); return; }
      var m = { ArrowLeft: 0, ArrowDown: 1, ArrowRight: 2, ArrowUp: 3 };
      if (flipped && ev.key in m) { ev.preventDefault(); doGrade(m[ev.key]); }
    });
    ["← " + GL[0], "↓ " + GL[1], "→ " + GL[2], "↑ " + GL[3]].forEach(function (t, g) { gr.appendChild(btn(t, "g" + g, function () { doGrade(g); })); });
    box.appendChild(gr);
    var rx = el("div", "row"); rx.appendChild(btn("Закончить сессию", "small", function () { CS.queue = []; renderCS(box); })); box.appendChild(rx);
  }

  // ======================================================================
  // ГРАММАТИКА, ЗВУКИ, АУДИРОВАНИЕ
  // ======================================================================
  function bindSay(root) { root.querySelectorAll("[data-say]").forEach(function (b) { b.className = "btn small"; b.addEventListener("click", function () { speak(b.getAttribute("data-say"), b.getAttribute("data-acc") || null); }); }); }
  function viewGrammar(v) {
    pageHead(v, "Грамматика", "Все правила курса по порядку. Каждое объясняет не только «как», но и «почему». Под каждым правилом — тренировка.");
    LESSONS.forEach(function (L) {
      var c = card("Уровень " + L.id + " · " + L.g.t);
      var det = el("details"); var sm = el("summary", "notice-small", "Открыть правило"); sm.style.cursor = "pointer"; sm.style.fontWeight = "800"; det.appendChild(sm);
      var rule = el("div", "rule"); rule.innerHTML = L.g.html; det.appendChild(rule); bindSay(rule);
      c.appendChild(det);
      var r = el("div", "row"); r.appendChild(btn("► Закрепить: " + L.g.tasks.length + " заданий", "primary", function () { startTrain("Грамматика: " + L.g.t, shuffle(L.g.tasks.map(function (t) { return gramTask(t, L); }).filter(Boolean)), "#grammar"); }));
      c.appendChild(r); v.appendChild(c);
    });
  }
  function viewSounds(v) {
    pageHead(v, "Звуки и IPA", "IPA — международный фонетический алфавит. Транскрипция показывает, как слово звучит: в английском написание и произношение часто расходятся. Нажмите на звук, чтобы услышать слово-пример.");
    var r = el("div", "row"); r.appendChild(el("span", "q-label", "Произношение примеров:"));
    [["uk", "UK — британский"], ["us", "US — американский"]].forEach(function (o) { r.appendChild(btn(o[1], settings.accent === o[0] ? "primary small" : "small", function () { settings.accent = o[0]; saveAll(); app.innerHTML = ""; var vv = el("section", "view"); app.appendChild(vv); viewSounds(vv); })); });
    v.appendChild(r);
    EN.sounds.forEach(function (grp) {
      var c = card(grp.t); if (grp.note) c.appendChild(el("p", "notice-small", grp.note));
      var g = el("div", "sound-grid");
      grp.items.forEach(function (it) { var t = tileBtn("", null, function () { speak(it[1]); }); t.innerHTML = ""; t.appendChild(el("span", "ipa", it[0])); var b = el("b", null, "▶ " + it[1]); b.lang = "en"; t.appendChild(b); t.appendChild(el("small", null, it[2])); t.setAttribute("aria-label", "Звук " + it[0] + ", пример " + it[1]); g.appendChild(t); });
      c.appendChild(g); v.appendChild(c);
    });
    EN.soundTopics.forEach(function (t) { var c = card(t.t), rl = el("div", "rule"); rl.innerHTML = t.html; bindSay(rl); c.appendChild(rl); v.appendChild(c); });
  }
  function listenSteps(L) {
    var st = [{ k: "dialog", kicker: "Аудирование", title: L.d.t, lines: L.d.l, hideText: true }];
    L.d.q.forEach(function (q) { var o = q[1].split("|"), right = o[q[2]], sh = shuffle(o); st.push({ k: "choice", kicker: "Вопрос по диалогу", q: q[0], opts: sh, a: sh.indexOf(right), replay: L.d.l, why: q[3] || "" }); });
    st.push({ k: "dialog", kicker: "Текст диалога", title: L.d.t, lines: L.d.l, hideText: false });
    return st;
  }
  function viewListen(v) {
    pageHead(v, "Аудирование", "Все диалоги курса. Сначала слушайте без текста и отвечайте на вопросы, потом откройте текст и перевод.");
    if (!synth) v.appendChild(el("p", "notice", "В этом браузере нет озвучки. Откройте сайт в Chrome, Edge или Safari."));
    var t = el("div", "tiles");
    LESSONS.forEach(function (L) { t.appendChild(tileBtn("Уровень " + L.id + ": " + L.d.t, L.topic + " · вопросов: " + L.d.q.length, function () { startTrain("Аудирование: " + L.d.t, listenSteps(L), "#listen"); })); });
    v.appendChild(t);
  }

  // ======================================================================
  // ТРЕНИРОВКА
  // ======================================================================
  function startTrain(title, steps, back) {
    if (!steps.length) { toast("Пока нечего тренировать: пройдите хотя бы первый уровень."); return; }
    S = trainSession(title, steps, back);
    if (location.hash === "#train") route(); else location.hash = "#train";
  }
  function viewPractice(v) {
    pageHead(v, "Тренировка", "Повторяйте изученное: смешанные задания, работа над ошибками, задания на слух и предложения. Тренировка не влияет на звёзды, но даёт XP.");
    var passedL = LESSONS.filter(function (L) { return prog.passed[L.id] || prog.blocksDone[L.id + ":words"]; });
    if (!passedL.length) { var c = card("Пока пусто"); c.appendChild(el("p", null, "Начните первый уровень — и задания для повторения появятся здесь.")); var r = el("div", "row"); r.appendChild(aBtn("#level-1", "► Уровень 1", "primary")); c.appendChild(r); v.appendChild(c); return; }
    var maxL = passedL[passedL.length - 1];
    var ws = ALLW.filter(function (w) { return srs[w.en]; });
    var missW = ALLW.filter(function (w) { return miss["w:" + w.en] > 0; }).sort(function (a, b) { return miss["w:" + b.en] - miss["w:" + a.en]; });
    var missG = []; LESSONS.forEach(function (L) { L.g.tasks.forEach(function (t) { var x = gramTask(t, L); if (x && miss["g:" + x.gkey] > 0) missG.push(x); }); });
    var sents = []; passedL.forEach(function (L) { sents = sents.concat(sentenceTasks(L)); });
    var t = el("div", "tiles");
    t.appendChild(tileBtn("Смешанная", "12 заданий: слова, грамматика и предложения из пройденного", ws.length ? function () {
      var gt = []; passedL.forEach(function (L) { L.g.tasks.forEach(function (x) { gt.push(gramTask(x, L)); }); });
      startTrain("Смешанная тренировка", shuffle(wordTasks(pick(ws, 6), maxL).concat(pick(gt, 4), pick(sents, 2))));
    } : null));
    t.appendChild(tileBtn("Работа над ошибками", missW.length + missG.length ? "Слова и правила, где были ошибки: " + (missW.length + missG.length) : "Ошибок пока нет", missW.length + missG.length ? function () { startTrain("Работа над ошибками", shuffle(wordTasks(missW.slice(0, 8), maxL).concat(pick(missG, 6)))); } : null));
    t.appendChild(tileBtn("На слух", "Слова и фразы: выбрать или записать услышанное", ws.length ? function () {
      var steps = pick(ws, 8).map(function (w) { return choiceFromWords(w, "en", ws.length >= 4 ? ws : ALLW, { kicker: "Послушайте и выберите", q: "", listen: w.en }); });
      var dict = []; passedL.forEach(function (L) { L.s.forEach(function (s) { dict.push({ k: "type", kicker: "Диктант", q: "", listen: s[0], answers: [s[0]].concat(s[2] ? s[2].split("|") : []), why: s[0] + " — " + s[1] }); }); });
      startTrain("На слух", shuffle(steps.concat(pick(dict, 3))));
    } : null));
    t.appendChild(tileBtn("Предложения", "Составление и перевод предложений из пройденных уровней", function () { startTrain("Предложения", pick(sents, 8)); }));
    v.appendChild(t);
  }

  // ======================================================================
  // ПРОФИЛЬ И О КУРСЕ
  // ======================================================================
  function viewProfile(v) {
    pageHead(v, "Профиль и настройки");
    if (window.LDCCheck) LDCCheck.card(v);
    var p = LDC.profile(), c = card("Настройки");
    var f1 = el("div", "field"); f1.appendChild(el("label", null, "Имя (общее для всей платформы)")).setAttribute("for", "pfName");
    var name = el("input", "pg-field"); name.id = "pfName"; name.maxLength = 40; name.value = p.name || ""; name.placeholder = "Например: Айдар"; f1.appendChild(name); c.appendChild(f1);
    var f2 = el("div", "field"); f2.appendChild(el("label", null, "Произношение по умолчанию")).setAttribute("for", "pfAcc");
    var acc = el("select", "pg-field"); acc.id = "pfAcc"; [["uk", "Британский (UK)"], ["us", "Американский (US)"]].forEach(function (o) { var op = el("option", null, o[1]); op.value = o[0]; acc.appendChild(op); }); acc.value = settings.accent; f2.appendChild(acc); c.appendChild(f2);
    var vn = el("p", "notice-small"); c.appendChild(vn);
    var vNote = function () { loadVoices(); vn.textContent = !synth ? "Озвучки в этом браузере нет." : (hasEnVoice("uk") ? "Британский голос: есть. " : "Британского голоса нет — прозвучит другой английский. ") + (hasEnVoice("us") ? "Американский голос: есть." : "Американского голоса нет."); };
    vNote(); setTimeout(vNote, 800);
    var f3 = el("div", "field"); f3.appendChild(el("label", null, "Скорость озвучки")).setAttribute("for", "pfRate");
    var rate = el("input"); rate.type = "range"; rate.min = "0.6"; rate.max = "1.2"; rate.step = "0.05"; rate.value = String(settings.rate); rate.id = "pfRate"; f3.appendChild(rate); c.appendChild(f3);
    var out = el("p", "notice-small"); out.setAttribute("aria-live", "polite");
    var r = el("div", "row");
    r.appendChild(btn("Сохранить", "primary", function () { LDC.setProfile({ name: name.value.trim() }); settings.accent = acc.value; settings.rate = +rate.value; saveAll(); out.textContent = "Сохранено."; }));
    r.appendChild(btn("▶ Проверить голос", "", function () { var r0 = settings.rate; settings.rate = +rate.value; speak("Hello! Nice to meet you.", acc.value); settings.rate = r0; }));
    c.appendChild(r); c.appendChild(out); v.appendChild(c);
    var b = card("Резервная копия прогресса");
    b.appendChild(el("p", null, "Прогресс хранится только в этом браузере, отдельно от казахского курса. Скопируйте код и сохраните его в заметках: на другом устройстве вставьте код и нажмите «Загрузить»."));
    var ta = el("textarea", "pg-field"); ta.rows = 4; ta.setAttribute("aria-label", "Код прогресса"); b.appendChild(ta);
    var out2 = el("p", "notice-small"), ask = el("div");
    var r2 = el("div", "row");
    r2.appendChild(btn("Создать код", "", function () { ta.value = btoa(unescape(encodeURIComponent(JSON.stringify({ v: 1, prog: prog, srs: srs, settings: settings, miss: miss })))); ta.select(); out2.textContent = "Код готов: выделите и скопируйте его."; }));
    r2.appendChild(btn("Загрузить", "primary", function () {
      var d; try { d = JSON.parse(decodeURIComponent(escape(atob(ta.value.trim())))); } catch (e) { d = null; }
      if (!d || d.v !== 1 || !d.prog) { out2.textContent = "Код не подходит. Проверьте, что он скопирован целиком."; return; }
      ask.innerHTML = ""; ask.appendChild(el("p", null, "Заменить текущий прогресс данными из кода?"));
      var ra = el("div", "row");
      ra.appendChild(btn("Да, заменить", "primary", function () { prog = Object.assign({ done: 0, passed: {}, xp: 0, streak: 0, lastDay: 0, resume: {}, blocksDone: {} }, d.prog); srs = d.srs || {}; settings = Object.assign(settings, d.settings || {}); miss = d.miss || {}; saveAll(); ask.innerHTML = ""; out2.textContent = "Прогресс восстановлен."; }));
      ra.appendChild(btn("Отмена", "", function () { ask.innerHTML = ""; }));
      ask.appendChild(ra);
    }));
    b.appendChild(r2); b.appendChild(ask); b.appendChild(out2); v.appendChild(b);
    var z = card("Сброс"), zb = el("div");
    z.appendChild(btn("Сбросить прогресс", "", function () {
      zb.innerHTML = ""; zb.appendChild(el("p", null, "Удалить весь прогресс английского курса? Казахский курс не затронется."));
      var rz = el("div", "row");
      rz.appendChild(btn("Да, сбросить", "primary", function () { prog = { done: 0, passed: {}, xp: 0, streak: 0, lastDay: 0, resume: {}, blocksDone: {} }; srs = {}; miss = {}; saveAll(); zb.innerHTML = ""; zb.appendChild(el("p", "notice-small", "Прогресс сброшен.")); }));
      rz.appendChild(btn("Отмена", "", function () { zb.innerHTML = ""; }));
      zb.appendChild(rz);
    }));
    z.appendChild(zb); v.appendChild(z);
  }
  function viewAbout(v) { pageHead(v, "О курсе"); var c = card(null, "rule"); c.innerHTML = EN.about; v.appendChild(c); }

  // ======================================================================
  // МОЙ ПРОГРЕСС: поинты (XP), уровень, серия, ХП — как в казахском
  // ======================================================================
  var XP_RULES = [["Блок уровня (один раз)", "10"], ["Прохождение уровня", "50"], ["Каждая звезда за босс-тест", "10"], ["Домашнее задание от 60 баллов (один раз)", "20"], ["Верный ответ в тренировке", "2"], ["Сессия карточек от 10 слов", "5"]];
  function heartsRow(n, max) { var s = el("span", "hp"); s.setAttribute("aria-label", "ХП: " + n + " из " + max); for (var i = 0; i < max; i++) { var h = el("span", "heart " + (i < n ? "on" : "off")); h.innerHTML = HEART_SVG; s.appendChild(h); } return s; }
  function viewProgress(v) {
    pageHead(v, "Мой прогресс");
    var hwN = Object.keys(prog.hw || {}).filter(function (k) { return prog.hw[k] >= 60; }).length;
    v.appendChild(statGrid([[prog.done + " / " + TOTAL, "уровней пройдено"], [totalStars() + " ★", "звёзд из " + TOTAL * 3], [hwN, "ДЗ от 60 баллов"], [learnedWords().length, "слов в карточках"]]));
    var c1 = card("Английский с нуля — 30 уровней");
    c1.appendChild(meter(prog.done / TOTAL * 100));
    c1.appendChild(el("p", null, prog.done < TOTAL ? "Следующий уровень: " + (prog.done + 1) + " — " + LESSONS[prog.done].en + " (" + LESSONS[prog.done].ru + ")" : "Все " + TOTAL + " уровней пройдены."));
    c1.appendChild(el("p", "notice-small", "Продолжение 31–180 пока в разработке, его прогресс будет отдельным."));
    var r1 = el("div", "row"); r1.appendChild(aBtn("#level-" + nextLevel(), "► Продолжить", "primary")); r1.appendChild(aBtn("#next", "Продолжение 31–180")); c1.appendChild(r1);
    v.appendChild(c1);
    var c2 = card("Серия: дни подряд");
    c2.appendChild(statGrid([[liveStreak(), "дней подряд сейчас"], [prog.best || liveStreak(), "лучшая серия"]]));
    c2.appendChild(el("p", null, "Серия показывает, сколько дней подряд вы занимаетесь. За один день она растёт на один, сколько бы заданий вы ни сделали."));
    c2.appendChild(el("p", "notice-small", "День засчитывается, когда вы прошли блок уровня, домашнее задание, тренировку или сессию карточек. Если пропустить день, серия начнётся заново, а XP и пройденные уровни сохранятся."));
    v.appendChild(c2);
    var l = levelOf(prog.xp), c3 = card("Поинты (XP): награда за задания");
    c3.appendChild(statGrid([[prog.xp, "XP"], [l.lv, "уровень игрока"]]));
    c3.appendChild(meter(l.into, "xp"));
    c3.appendChild(el("p", null, "Поинты даются за выполненные задания. Они не сгорают и не зависят от серии. Каждые 100 XP — новый уровень игрока."));
    var tb = el("table", "plain"), hd = el("tr"); ["За что", "XP"].forEach(function (x) { hd.appendChild(el("th", null, x)); }); tb.appendChild(hd);
    XP_RULES.forEach(function (r) { var tr = el("tr"); tr.appendChild(el("td", null, r[0])); tr.appendChild(el("td", null, r[1])); tb.appendChild(tr); });
    c3.appendChild(tb); v.appendChild(c3);
    var c4 = card("ХП: сердца в уроке");
    c4.appendChild(heartsRow(HP_MAX, HP_MAX));
    c4.appendChild(el("p", null, "В каждом блоке уровня у вас " + HP_MAX + " сердец (ХП). Ошибка снимает одно сердце. Если сердца закончились, блок начинается заново с полными ХП, а пройденные блоки сохраняются."));
    c4.appendChild(el("p", "notice-small", "В тренировках, карточках и домашних заданиях ХП не тратятся: там можно спокойно ошибаться."));
    v.appendChild(c4);
    var can = card("Что я умею");
    can.appendChild(el("p", "notice-small", "Умение засчитывается, когда пройден босс-тест уровня и выполнена задача урока. Прохождение страницы ещё не значит, что тема освоена — повторение вернёт слабые места."));
    var ul = el("ul", "can-list");
    LESSONS.forEach(function (L) { (L.can || [L.goal]).forEach(function (c) { ul.appendChild(el("li", prog.passed[L.id] ? "on" : "", (prog.passed[L.id] ? "✓ " : "○ ") + esc(c))); }); });
    can.appendChild(ul); v.appendChild(can);
  }

  // ======================================================================
  // ПРОДОЛЖЕНИЕ 31–180 — как в казахском
  // ======================================================================
  function programView(v, data, start, perMod, title, lead, note) {
    pageHead(v, title, lead);
    var s = el("div", "soon-box"); s.appendChild(el("p", null, note)); v.appendChild(s);
    var n = start;
    data.forEach(function (m, mi) {
      var c = el("div", "card prog-mod"); var from = n, to = n + m[4].length - 1, ready = perMod === 10 && to <= TOTAL;
      var hd = el("button", "prog-head"); hd.type = "button"; hd.setAttribute("aria-expanded", "false");
      hd.innerHTML = "<span class='wk-num'>Модуль " + (mi + 1) + " · " + (perMod === 10 ? "уровни " : "уроки ") + from + "–" + to + "</span><b>" + esc(m[0]) + "</b><span class='cefr'>" + (ready ? "открыт" : m[1]) + "</span>";
      c.appendChild(hd);
      var body = el("div", "prog-body"); body.hidden = true;
      var p1 = el("p"); p1.innerHTML = "<b>Вы сможете:</b> " + esc(m[2]); body.appendChild(p1);
      var p2 = el("p"); p2.innerHTML = "<b>Грамматика:</b> " + esc(m[3]); body.appendChild(p2);
      var ol = el("ol", "prog-days"); ol.start = from;
      m[4].forEach(function (t) { ol.appendChild(el("li", null, t)); });
      body.appendChild(ol);
      if (ready) { c.classList.add("ready"); var rr = el("div", "row"); rr.appendChild(aBtn("#level-" + from, "► Уровень " + from, "primary")); rr.appendChild(aBtn("#map", "На карту")); body.appendChild(rr); }
      c.appendChild(body);
      hd.addEventListener("click", function () { body.hidden = !body.hidden; hd.setAttribute("aria-expanded", String(!body.hidden)); c.classList.toggle("open", !body.hidden); });
      v.appendChild(c); n = to + 1;
    });
  }
  var RES = {
    dicts: ["Онлайн-словари", "Где проверять значение, произношение и примеры. Все сайты бесплатные.", [
      ["Cambridge Dictionary", "https://dictionary.cambridge.org/", "Простые определения, британское и американское произношение, перевод на русский."],
      ["Oxford Learner's Dictionaries", "https://www.oxfordlearnersdictionaries.com/", "Словарь для изучающих: уровни слов (A1–C1), примеры, аудио."],
      ["Longman Dictionary", "https://www.ldoceonline.com/", "Понятные толкования и много примеров из живой речи."],
      ["Reverso Context", "https://context.reverso.net/", "Как слово переводится в реальных предложениях."],
      ["YouGlish", "https://youglish.com/", "Как слово произносят носители: отрывки из тысяч видео."]]],
    media: ["Видео и аудирование", "Слушайте понемногу каждый день. Начинайте с субтитров, потом без них.", [
      ["BBC Learning English", "https://www.bbc.co.uk/learningenglish/", "Короткие видео и подкасты для учащихся: грамматика, новости, произношение."],
      ["VOA Learning English", "https://learningenglish.voanews.com/", "Новости медленным и понятным английским, с текстом."],
      ["British Council LearnEnglish", "https://learnenglish.britishcouncil.org/", "Аудио и видео по уровням с заданиями."],
      ["TED", "https://www.ted.com/", "Выступления с субтитрами на английском и русском — для уровня B1 и выше."]]],
    sites: ["Учебные сайты", "Дополнительная практика к курсу.", [
      ["British Council LearnEnglish", "https://learnenglish.britishcouncil.org/", "Грамматика и словарь по уровням, упражнения с проверкой."],
      ["Cambridge English — бесплатные материалы", "https://www.cambridgeenglish.org/learning-english/", "Игры, тесты уровня и задания экзаменационного формата."],
      ["IELTS — официальный сайт", "https://ielts.org/", "Формат экзамена и официальные пробные задания."],
      ["Wikipedia: Simple English", "https://simple.wikipedia.org/", "Статьи простым английским — удобно для чтения."]]]
  };
  function viewRes(v, key) {
    var R = RES[key]; pageHead(v, R[0], R[1]);
    R[2].forEach(function (x) {
      var c = card(x[0]); c.appendChild(el("p", null, x[2]));
      var a = el("a", "btn small", "Открыть сайт ↗"); a.href = x[1]; a.target = "_blank"; a.rel = "noopener"; c.appendChild(a); v.appendChild(c);
    });
    v.appendChild(el("p", "notice-small", "Ссылки ведут на внешние сайты; курс с ними не связан."));
    var r = el("div", "row"); r.appendChild(aBtn("#materials", "Все материалы")); r.appendChild(aBtn("#home", "На главную")); v.appendChild(r);
  }
  function viewMaterials(v) {
    pageHead(v, "Полезные материалы", "Короткая подборка. Основная программа — на «Карте уровней».");
    var t = el("div", "tiles");
    [["#dicts", "Онлайн-словари", "проверить слово и произношение"], ["#media", "Видео и аудирование", "BBC, VOA, TED"], ["#speech", "Разговорная речь и сленг", "в курсе"], ["#formal", "Официальный английский", "в курсе"], ["#sites", "Учебные сайты", "дополнительная практика"], ["#ielts", "Подготовка к IELTS", "в курсе"]].forEach(function (x) {
      var b = tileBtn(x[1], x[2], function () { location.hash = x[0]; }); t.appendChild(b);
    });
    v.appendChild(t);
  }
  function viewTest(v) {
    LDCPlace.mount(v, {
      storeKey: "en_v1_place", bank: PLACE_EN.bank, stages: PLACE_EN.stages, zeroLabel: PLACE_EN.zeroLabel, total: TOTAL,
      speak: function (t) { speak(t); },
      done: function () { return prog.done; },
      goLesson: function (n) { location.hash = "#level-" + n; },
      skipTo: function (n) { for (var i = 1; i < n; i++) if (!prog.passed[i]) prog.passed[i] = 1; var k = 0; while (k < TOTAL && prog.passed[k + 1]) k++; prog.done = k; prog.placed = n; saveAll(); hud(); },
      skipItems: function (n) {
        var pool = ALLW.filter(function (w) { return w.lesson < n && w.en.indexOf(" ") < 0; });
        return shuffle(pool).slice(0, 8).map(function (w) {
          var others = shuffle(pool.filter(function (x) { return ru1(x) !== ru1(w); })).slice(0, 3).map(ru1);
          return { q: "Что значит <b lang='en'>" + esc(w.en) + "</b>? <span class='notice-small'>(уровень " + w.lesson + ")</span>", o: [ru1(w)].concat(others), t: w.en };
        });
      }
    });
  }
  function viewNext(v) {
    programView(v, EN.b1, 31, 10, "Продолжение — 31–180 до уровня B1",
      "150 уровней, 15 модулей по 10 уровней. Цель — уровень B1: свободно говорить на знакомые темы, понимать основное в фильмах и новостях, писать письма и короткие эссе.",
      "Модули 1–2 (уровни 31–50) уже открыты: они на карте сразу после уровня 30. Остальные модули пишутся и будут открываться по очереди. Нажмите на модуль, чтобы увидеть темы по дням.");
    var r = el("div", "row"); r.appendChild(aBtn("#map", "К курсу из 30 уровней", "primary")); r.appendChild(aBtn("#b2", "Дальше: курс B2")); v.appendChild(r);
  }
  function viewB2(v) {
    programView(v, EN.b2, 1, 5, "Углублённый курс B2",
      "Дополнительный курс после B1: 9 модулей, 45 уроков, примерно 90 дней. Сложная грамматика, академический и деловой английский, идиомы, подготовка к IELTS 6.0–6.5.",
      "Курс в разработке. Начинать его стоит после итогового экзамена B1 (уровень 180). Нажмите на модуль, чтобы увидеть уроки.");
    var r = el("div", "row"); r.appendChild(aBtn("#next", "Программа 31–180", "primary")); r.appendChild(aBtn("#ielts", "Подготовка к IELTS")); v.appendChild(r);
  }

  // ======================================================================
  // ДОМАШНИЕ ЗАДАНИЯ — после уровня, самое сложное: всё пишется самому
  // ======================================================================
  function hwSession(id) {
    var L = LESSONS[id - 1], ws = wordsOf(L), steps = [];
    pick(ws, 5).forEach(function (w) { steps.push({ k: "type", hw: true, kicker: "ДЗ · лексика: напишите по-английски", q: w.ru, answers: [w.en], wkey: w.en, pts: 6, why: w.en + " " + w.uk }); });
    var gt = L.g.tasks.filter(function (t) { return t[0] === "t"; }).map(function (t) { return { k: "type", hw: true, kicker: "ДЗ · грамматика: переведите", q: t[1], answers: t[2].split("|"), why: t[3], pts: 6 }; });
    var gc = L.g.tasks.filter(function (t) { return t[0] === "c" && t[1].indexOf("___") >= 0; }).map(function (t) { var o = t[2].split("|"); return { k: "type", hw: true, kicker: "ДЗ · грамматика: впишите пропущенное", q: t[1], answers: [t[1].replace("___", o[t[3]])], why: t[4], pts: 6, gapWord: o[t[3]] }; });
    steps = steps.concat(pick(gt, 2), pick(gc, 5 - Math.min(2, gt.length)));
    var tr = L.s.map(function (s) { return { k: "type", hw: true, kicker: "ДЗ · перевод предложения", q: s[1], answers: [s[0]].concat(s[2] ? s[2].split("|") : []), why: "Образец: " + s[0], pts: 20 / L.s.length }; });
    steps = steps.concat(tr);
    var minW = Math.min(60, 15 + id);
    steps.push({ k: "write", hw: true, kicker: "ДЗ · письмо", title: "Напишите 3–5 предложений на тему «" + L.topic + "»", words: ws.map(function (w) { return w.en; }), minW: minW, minUse: 3, pts: 20, model: pick(ws, 3).map(function (w) { return w.ex; }).join(" ") });
    var total = steps.reduce(function (a, s) { return a + s.pts; }, 0);
    return { kind: "hw", id: id, L: L, title: "Домашнее задание · уровень " + id, blocks: [{ id: "hw", steps: steps }], bi: 0, pos: 0, queue: steps.slice(), first: {}, retried: {}, ok: 0, total: 0, mistakes: [], score: 0, maxScore: total, back: "#hw" };
  }
  function viewHw(v) {
    pageHead(v, "Домашние задания", "Самое сложное задание уровня: вариантов ответа нет, всё пишется по-английски. Открывается после прохождения уровня.");
    var tb = el("table", "plain"), hd = el("tr"); ["Блок", "Баллы"].forEach(function (x) { hd.appendChild(el("th", null, x)); }); tb.appendChild(hd);
    [["Лексика: 5 слов урока написать по-английски", "30"], ["Грамматика: 5 заданий по правилу уровня", "30"], ["Перевод предложений", "20"], ["Письмо: 3–5 предложений со словами урока", "20"]].forEach(function (r) { var t = el("tr"); t.appendChild(el("td", null, r[0])); t.appendChild(el("td", null, r[1])); tb.appendChild(t); });
    v.appendChild(tb);
    v.appendChild(el("p", "notice-small", "80–100 — хорошо, 60–79 — повторить материал, 0–59 — переделать задание."));
    var t = el("div", "tiles");
    LESSONS.forEach(function (L) {
      var sc = (prog.hw || {})[L.id];
      if (prog.passed[L.id] || CHECK()) t.appendChild(tileBtn("Уровень " + L.id + ": " + L.en, sc != null ? "Лучший результат: " + sc + " / 100" : "Открыто", function () { S = hwSession(L.id); location.hash = "#train"; if (location.hash === "#train") route(); }, sc >= 80 ? "passed" : ""));
      else t.appendChild(tileBtn("Уровень " + L.id + ": " + L.en, "Закрыто: пройдите уровень и босс-тест", null, "locked"));
    });
    v.appendChild(t);
  }
  function renderHwFinish() {
    var id = S.id, sc = Math.round(S.score / S.maxScore * 100), v = finishShell();
    prog.hw = prog.hw || {};
    var first = !prog.hwXp || !prog.hwXp[id];
    if (prog.hw[id] == null || sc > prog.hw[id]) prog.hw[id] = sc;
    var gained = 0;
    if (sc >= 60 && first) { prog.hwXp = prog.hwXp || {}; prog.hwXp[id] = 1; gained = 20; addXp(20); }
    touchStreak(); saveAll();
    var c = card(null, "finish");
    c.appendChild(el("h2", null, sc >= 80 ? "Отличное ДЗ!" : sc >= 60 ? "ДЗ засчитано" : "Нужно переделать"));
    c.appendChild(el("span", "stat", sc + " / 100")); if (gained) c.appendChild(el("span", "stat", "+" + gained + " XP"));
    c.appendChild(el("p", null, sc >= 80 ? "Материал уровня усвоен." : sc >= 60 ? "Повторите правило и слова уровня — и попробуйте снова на 80+." : "Повторите уровень и попробуйте ещё раз."));
    var r = el("div", "row"); r.style.justifyContent = "center";
    r.appendChild(aBtn("#hw", "К заданиям", "primary")); r.appendChild(btn("Ещё раз", "", function () { S = hwSession(id); renderSession(); }));
    c.appendChild(r); v.appendChild(c);
    if (S.mistakes.length) v.appendChild(mistakesCard(S.mistakes));
    if (sc >= 80) confetti();
  }

  // ======================================================================
  // РАЗГОВОРНАЯ РЕЧЬ И СЛЕНГ · ОФИЦИАЛЬНЫЙ АНГЛИЙСКИЙ
  // ======================================================================
  var ACC_NAME = { uk: "Британия", us: "США" };
  function viewSpeech(v) {
    pageHead(v, "Разговорная речь и сленг", "Так говорят друзья, коллеги и в сериалах. В письме и на экзамене это не используют — для этого есть раздел «Официальный английский».");
    var s = el("div", "soon-box"); s.appendChild(el("p", null, "Сленг уместен только с друзьями и знакомыми. С преподавателем, начальником и незнакомыми людьми лучше говорить нейтрально.")); v.appendChild(s);
    var r = el("div", "row"); r.appendChild(btn("► Тренировка: что значит фраза? (8)", "primary", function () {
      var pool = EN.slang, steps = pick(pool, 8).map(function (p) { var opts = shuffle([p[1]].concat(pick(pool.filter(function (x) { return x !== p; }), 3).map(function (x) { return x[1]; }))); return { k: "choice", kicker: "Что значит фраза?", q: p[0], audio: p[0], opts: opts, a: opts.indexOf(p[1]), why: "Пример: " + p[2] }; });
      startTrain("Сленг и разговорная речь", steps, "#speech");
    })); v.appendChild(r);
    var c = card("Фразы");
    EN.slang.forEach(function (p) {
      var row = el("div", "wrow"), m = el("div", "wmain"), a = el("div", "wact");
      var b = el("b", null, p[0]); b.lang = "en"; m.appendChild(b); m.appendChild(el("div", null, p[1]));
      var ex = el("div", "notice-small", p[2]); ex.lang = "en"; m.appendChild(ex);
      if (p[3]) m.appendChild(el("span", "tag", ACC_NAME[p[3]]));
      a.appendChild(playBtn(p[0], p[3] || null, "▶")); row.appendChild(m); row.appendChild(a); c.appendChild(row);
    });
    v.appendChild(c);
    var r2 = el("div", "row"); r2.appendChild(aBtn("#formal", "Официальный английский →")); v.appendChild(r2);
  }
  function viewFormal(v) {
    pageHead(v, "Официальный английский", "Как говорить и писать вежливо: письма, учёба, работа, официальные просьбы.");
    var c0 = card("Три правила вежливости"); var rl = el("div", "rule"); rl.innerHTML = EN.formalNote; c0.appendChild(rl); v.appendChild(c0);
    var r = el("div", "row"); r.appendChild(btn("► Тренировка: выберите официальный вариант (8)", "primary", function () {
      var steps = pick(EN.registerPairs, 8).map(function (p) { var wrong = pick(EN.registerPairs.filter(function (x) { return x !== p; }), 1)[0][0]; var opts = shuffle([p[1], p[0], wrong]); return { k: "choice", kicker: "Выберите официальный (вежливый) вариант", q: p[2].split(" — ")[0], opts: opts, a: opts.indexOf(p[1]), why: "Разговорно: " + p[0] + " → официально: " + p[1] }; });
      startTrain("Официальный английский", steps, "#formal");
    })); v.appendChild(r);
    var c1 = card("Разговорно → официально");
    var tb = el("table", "plain"), hd = el("tr"); ["Разговорно", "Официально", "Перевод"].forEach(function (x) { hd.appendChild(el("th", null, x)); }); tb.appendChild(hd);
    EN.registerPairs.forEach(function (p) { var t = el("tr"); var a = el("td", null, p[0]); a.lang = "en"; var b = el("td"); var bb = el("b", null, p[1]); bb.lang = "en"; b.appendChild(bb); b.appendChild(document.createElement("br")); b.appendChild(playBtn(p[1], null, "▶")); t.appendChild(a); t.appendChild(b); t.appendChild(el("td", null, p[2])); tb.appendChild(t); });
    c1.appendChild(tb); v.appendChild(c1);
    var c2 = card("Фразы для писем и e-mail");
    EN.formalPhrases.forEach(function (p) { var row = el("div", "wrow"), m = el("div", "wmain"), a = el("div", "wact"); var b = el("b", null, p[0]); b.lang = "en"; m.appendChild(b); m.appendChild(el("div", "notice-small", p[1])); a.appendChild(playBtn(p[0], null, "▶")); row.appendChild(m); row.appendChild(a); c2.appendChild(row); });
    v.appendChild(c2);
    var r2 = el("div", "row"); r2.appendChild(aBtn("#speech", "← Разговорная речь и сленг")); v.appendChild(r2);
  }

  // ======================================================================
  // ПОДГОТОВКА К IELTS
  // ======================================================================
  function viewIelts(v) {
    var I = EN.ielts;
    pageHead(v, "Подготовка к IELTS", "Формат экзамена, баллы, советы, связки для эссе и устной части, тренировка.");
    var c0 = card("Что такое IELTS"); var r0 = el("div", "rule"); r0.innerHTML = I.intro; c0.appendChild(r0); v.appendChild(c0);
    var c1 = card("Четыре части экзамена");
    var tb = el("table", "plain"), hd = el("tr"); ["Часть", "Время", "Что внутри"].forEach(function (x) { hd.appendChild(el("th", null, x)); }); tb.appendChild(hd);
    I.format.forEach(function (r) { var t = el("tr"); r.forEach(function (x) { t.appendChild(el("td", null, x)); }); tb.appendChild(t); });
    c1.appendChild(tb); v.appendChild(c1);
    var c2 = card("Баллы (band)");
    var tb2 = el("table", "plain"); I.bands.forEach(function (r) { var t = el("tr"); t.appendChild(el("td", null, r[0])); t.appendChild(el("td", null, r[1])); tb2.appendChild(t); }); c2.appendChild(tb2); v.appendChild(c2);
    var c3 = card("Советы по частям");
    I.tips.forEach(function (t) { var b = el("div", "brk"); b.appendChild(el("b", null, t[0])); b.appendChild(document.createTextNode(t[1])); c3.appendChild(b); });
    v.appendChild(c3);
    var c4 = card("Связки для эссе и Speaking");
    I.linking.forEach(function (p) { var row = el("div", "wrow"), m = el("div", "wmain"), a = el("div", "wact"); var b = el("b", null, p[0]); b.lang = "en"; m.appendChild(b); m.appendChild(el("div", "notice-small", p[1] + " · " + p[2])); a.appendChild(playBtn(p[0].replace(/…/g, ""), null, "▶")); row.appendChild(m); row.appendChild(a); c4.appendChild(row); });
    v.appendChild(c4);
    var c5 = card("Speaking Part 1: вопросы и образцы ответов");
    c5.appendChild(el("p", "notice-small", "Послушайте вопрос, ответьте вслух 2–3 предложениями, потом сравните с образцом."));
    I.speaking.forEach(function (q) {
      var b = el("div", "brk"); var qq = el("div", null, q[0]); qq.lang = "en"; qq.style.fontWeight = "800"; b.appendChild(qq);
      var out = el("p", "notice-small"); var r = el("div", "row"); r.appendChild(playBtn(q[0], null, "▶ Вопрос"));
      var mb = micBtn(q[1], out); if (mb) r.appendChild(mb);
      var ans = el("p", "tr", q[1]); ans.lang = "en"; ans.hidden = true;
      r.appendChild(btn("Образец ответа", "small", function () { ans.hidden = !ans.hidden; if (!ans.hidden) speak(q[1]); }));
      b.appendChild(r); b.appendChild(ans); b.appendChild(out); c5.appendChild(b);
    });
    v.appendChild(c5);
    var c6 = card("Writing Task 2"); var r6 = el("div", "rule"); r6.innerHTML = I.essay; c6.appendChild(r6); v.appendChild(c6);
    var r = el("div", "row"); r.appendChild(btn("► Тест: формат IELTS и связки (" + I.quiz.length + ")", "primary", function () {
      startTrain("IELTS: формат и связки", shuffle(I.quiz.map(function (q) { var o = q[1].split("|"), right = o[q[2]], sh = shuffle(o); return { k: "choice", kicker: "IELTS", q: q[0], opts: sh, a: sh.indexOf(right), why: q[3] }; })), "#ielts");
    })); v.appendChild(r);
  }

  // ======================================================================
  // ПОДДЕРЖКА: чат-помощник на русском и английском
  // ======================================================================
  var FAQ = [
    { k: ["прогресс", "сохран", "пропал", "progress", "save", "lost"], ru: "Прогресс хранится в этом браузере. Чтобы не потерять его, откройте «Профиль и настройки» → «Создать код» и сохраните код в заметках.", en: "Your progress is stored in this browser. To keep it safe, open “Profile and settings” → “Make a code” and save the code in your notes." },
    { k: ["телефон", "устройств", "перенес", "phone", "device", "transfer"], ru: "На старом устройстве создайте код в «Профиле», на новом вставьте его и нажмите «Загрузить».", en: "Make a code in “Profile” on your old device, then paste it on the new one and press “Load”." },
    { k: ["звук", "озвуч", "голос", "sound", "audio", "voice", "hear"], ru: "Озвучка идёт через голос браузера. Лучше всего — Chrome, Edge или Safari. Британский или американский голос выбирается в «Профиле».", en: "Audio uses your browser's voice. Chrome, Edge or Safari work best. Choose a British or American voice in “Profile”." },
    { k: ["микрофон", "произнош", "вслух", "microphone", "mic", "pronunciation", "speak"], ru: "Кнопка «Повторить вслух» работает там, где браузер распознаёт речь (Chrome, Edge). Разрешите доступ к микрофону.", en: "The “Say it aloud” button works where the browser supports speech recognition (Chrome, Edge). Allow microphone access." },
    { k: ["хп", "сердц", "жизн", "hp", "heart", "lives"], ru: "В каждом блоке уровня 5 сердец (ХП). Ошибка снимает одно. Когда они кончаются, блок начинается заново.", en: "Each lesson block gives you 5 hearts (HP). A mistake costs one. When they run out, the block starts again." },
    { k: ["xp", "очк", "поинт", "уровень игрока", "points", "level"], ru: "XP даются за блоки, уровни, звёзды, ДЗ, тренировки и карточки. Каждые 100 XP — новый уровень игрока. Подробно — в «Моём прогрессе».", en: "You get XP for blocks, levels, stars, homework, practice and flashcards. Every 100 XP is a new player level. See “My progress”." },
    { k: ["дз", "домашн", "homework"], ru: "Домашнее задание открывается после прохождения уровня. Там всё пишется самому: слова, грамматика, перевод и короткое письмо. 80+ — отлично.", en: "Homework opens after you pass a level. You type everything yourself: words, grammar, translation and a short text. 80+ is great." },
    { k: ["ielts", "айлс", "экзамен", "exam"], ru: "Раздел «Подготовка к IELTS» объясняет формат, баллы и даёт связки, вопросы Speaking и тест. Для самого экзамена обычно нужен уровень B1–C1.", en: "The “IELTS preparation” section explains the format and bands and gives linking words, Speaking questions and a quiz. The exam itself usually needs B1–C1." },
    { k: ["31", "180", "продолж", "дальше", "continue", "advanced"], ru: "Продолжение 31–180 в разработке. Пока можно повторять уровни, делать ДЗ и готовиться к IELTS.", en: "Levels 31–180 are in development. For now you can review levels, do homework and prepare for IELTS." },
    { k: ["бесплат", "цена", "плат", "free", "price", "pay"], ru: "Сайт бесплатный и некоммерческий: только для развлекательных и познавательных целей.", en: "The site is free and non-commercial: for fun and learning only." },
    { k: ["оператор", "человек", "живой", "operator", "human", "telegram", "телеграм"], ru: "Живой оператор отвечает в Telegram: @tnunr0. Кнопка «Написать оператору» — вверху этой страницы.", en: "A live operator answers on Telegram: @tnunr0. Use the button at the top of this page." },
    { k: ["ошибк", "опечат", "mistake", "typo", "error"], ru: "Если нашли ошибку в уроке, запомните номер уровня и слово. и напишите оператору в Telegram: @tnunr0.", en: "If you find a mistake in a lesson, note the level number and the word. and message the operator on Telegram: @tnunr0." }
  ];
  function viewSupport(v) {
    pageHead(v, "Поддержка · Support", "Чат-помощник отвечает на частые вопросы на русском и на английском. Пишите на любом из языков.");
    var s = el("div", "soon-box op-box"); s.innerHTML = "<p><b>Живой оператор · Live operator</b></p><p>Помощник ниже отвечает сам. Если нужен человек, напишите оператору в Telegram — ответ придёт туда, а не на сайт. Need a person? Message the operator on Telegram.</p><p><a class='btn primary small' href='https://t.me/tnunr0' target='_blank' rel='noopener'>Написать оператору · @tnunr0</a></p>"; v.appendChild(s);
    var c = card(null), log = el("div", "chat-log"); log.setAttribute("role", "log"); log.setAttribute("aria-live", "polite");
    var chips = el("div", "chat-chips"), form = el("form", "chat-form"), inp = el("input", "pg-field"); inp.placeholder = "Напишите вопрос… / Type your question…"; inp.setAttribute("aria-label", "Вопрос");
    var send = btn("►", "primary"); send.type = "submit"; form.appendChild(inp); form.appendChild(send);
    c.appendChild(log); c.appendChild(chips); c.appendChild(form); v.appendChild(c);
    function add(who, text) { var d = el("div", "msg " + who, text); log.appendChild(d); log.scrollTop = log.scrollHeight; }
    function answer(q) {
      var t = q.toLowerCase().replace(/ё/g, "е"), lat = !/[а-я]/.test(t), best = null, sc = 0;
      FAQ.forEach(function (f) { var n = 0; f.k.forEach(function (k) { if (t.indexOf(k) >= 0) n++; }); if (n > sc) { sc = n; best = f; } });
      if (/^(привет|здравств|сәлем|салем|hello|hi|hey)\b/.test(t)) return lat ? "Hello! Ask me about progress, audio, the microphone, HP, XP, homework or IELTS." : "Привет! Спросите про прогресс, озвучку, микрофон, ХП, XP, домашние задания или IELTS.";
      if (best) return lat ? best.en : best.ru;
      return lat ? "Sorry, I don't know the answer to that yet. Try asking in a different way or tap a question below." : "Не нашёл ответа на этот вопрос. Спросите по-другому или выберите вопрос из подсказок ниже.";
    }
    function ask(q) { add("me", q); setTimeout(function () { add("bot", answer(q)); }, 300); }
    ["Как сохранить прогресс?", "Что такое ХП?", "How do I get XP?", "No sound", "IELTS"].forEach(function (q) { var b = el("button", "chip-q", q); b.type = "button"; b.addEventListener("click", function () { ask(q); }); chips.appendChild(b); });
    form.addEventListener("submit", function (e) { e.preventDefault(); var q = inp.value.trim(); if (!q) return; inp.value = ""; ask(q); });
    add("bot", "Сәлем! Hello! Я помощник курса «Английский для чайников». I'm the course helper — ask in Russian or English.");
  }

  // ---------- старт ----------
  (function () { var n = 0; while (n < TOTAL && prog.passed[n + 1]) n++; prog.done = n; })();
  hud();
  route();
  if (LDC.arrive) LDC.arrive();
  window.__EN = { cur: function () { return S && S.queue[S.pos]; }, LESSONS: LESSONS, ALLW: ALLW, norm: norm, checkTyped: checkTyped, levelSession: levelSession, gramTask: gramTask };
})();
