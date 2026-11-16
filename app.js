/* Английский для чайников — движок курса. Интерфейс и анимации — как в «Казахском для чайников».
   Данные уроков: data1.js … data3.js (window.EN.lessons). Прогресс: localStorage, ключи en_v1_*. */
(function () {
  "use strict";
  var EN = window.EN, LDC = window.LDC;
  var LESSONS = EN.lessons.slice().sort(function (a, b) { return a.id - b.id; });
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
  var prog = Object.assign({ done: 0, passed: {}, xp: 0, streak: 0, lastDay: 0, resume: {}, blocksDone: {} }, load(K.prog, {}) || {});
  var srs = load(K.srs, {}) || {};
  var settings = Object.assign({ accent: "uk", rate: 0.9 }, load(K.set, {}) || {});
  var miss = load(K.miss, {}) || {};
  function saveAll() {
    var n = 0; while (n < TOTAL && prog.passed[n + 1]) n++;
    prog.done = n;
    save(K.prog, prog); save(K.srs, srs); save(K.set, settings); save(K.miss, miss);
    hud();
  }
  function isOpen(id) { return id === 1 || !!prog.passed[id - 1] || !!prog.passed[id]; }
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
  touchStreak = function () { var was = prog.lastDay; _touch(); if (was !== prog.lastDay) setTimeout(heartFx, 200); };

  // ---------- меню: разделы-аккордеоны, как в казахском ----------
  var MENU = [
    ["Учёба", [["map", "Карта уровней"], ["practice", "Тренировка и ошибки"], ["cards", "Карточки слов"]]],
    ["Справочник", [["words", "Словарь"], ["grammar", "Грамматика"], ["sounds", "Звуки и IPA"], ["listen", "Аудирование"]]]
  ];
  var SERVICE = [["profile", "Профиль и настройки"], ["about", "О курсе"]];
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
  var ROUTES = { map: viewMap, words: viewWords, cards: viewCards, grammar: viewGrammar, sounds: viewSounds, listen: viewListen, practice: viewPractice, profile: viewProfile, about: viewAbout };
  function route() {
    var hs = location.hash.slice(1) || "map";
    if (synth) synth.cancel();
    var m = /^level-(\d+)$/.exec(hs);
    app.innerHTML = "";
    if (m) {
      var id = +m[1];
      if (!LESSONS[id - 1]) { location.replace("#map"); return; }
      if (!isOpen(id)) { toast("Уровень " + id + " откроется, когда вы пройдёте уровень " + (id - 1) + "."); location.replace("#map"); return; }
      if (!S || S.kind !== "level" || S.id !== id) S = levelSession(id);
      markMenu("map"); renderSession();
    } else if (hs === "train" && S && S.kind === "train") {
      renderSession();
    } else {
      if (hs !== "train") S = null;
      var fn = ROUTES[hs] || viewMap;
      markMenu(ROUTES[hs] ? hs : "map");
      var v = el("section", "view"); app.appendChild(v);
      fn(v);
      if (!ROUTES[hs]) history.replaceState(null, "", "#map");
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
  function viewMap(v) {
    var nx = nextLevel(), allDone = prog.done >= TOTAL, name = (LDC.profile().name || "").trim();
    var head = el("div", "city-head"); pageHead(head, "Карта мира", "Цель курса — уровень A2: понимать простую речь, рассказывать о себе, спрашивать дорогу, говорить о прошлом и планах."); v.appendChild(head);
    var hero = card(null, "hero-card");
    var pot = el("div"); pot.innerHTML = LDC.teapotSVG("en", "Чайник с британским флагом"); pot.firstChild.classList.add("mascot"); hero.appendChild(pot.firstChild);
    var txt = el("div");
    var L0 = LESSONS[nx - 1];
    txt.appendChild(el("h3", null, allDone ? "Well done" + (name ? ", " + name : "") + "!" : prog.done === 0 && !Object.keys(prog.resume).length ? "Hello" + (name ? ", " + name : "") + "!" : "Welcome back" + (name ? ", " + name : "") + "!"));
    txt.appendChild(el("p", null, allDone ? "Все 30 уровней пройдены. Повторяйте карточки и тренируйтесь — так слова не забудутся." :
      prog.done === 0 && !Object.keys(prog.resume).length ? "Я — чайник-путешественник. Пройдём английский с нуля: 30 уровней в 5 мирах. В каждом уровне — слова, звуки, грамматика, аудирование, практика и босс-тест." :
      "Следующий уровень: " + nx + ". " + L0.en + " — " + L0.ru + "."));
    var r = el("div", "row");
    r.appendChild(aBtn("#level-" + nx, allDone ? "► Повторить уровень 30" : prog.done || prog.resume[nx] ? "► Продолжить" : "► Начать", "primary"));
    r.appendChild(aBtn("#cards", "Карточки"));
    txt.appendChild(r); hero.appendChild(txt); v.appendChild(hero);
    var l = levelOf(prog.xp), pc = card("Мой прогресс");
    pc.appendChild(el("p", null, "Уровни: " + prog.done + " из " + TOTAL)); pc.appendChild(meter(prog.done / TOTAL * 100));
    pc.appendChild(statGrid([[prog.xp + " XP", "уровень игрока " + l.lv], [totalStars() + " ★", "звёзд из " + TOTAL * 3], [learnedWords().length, "слов в карточках"], [liveStreak() + " дн.", "серия подряд"]]));
    pc.appendChild(el("p", "notice-small", "До уровня игрока " + (l.lv + 1) + " осталось " + (100 - l.into) + " XP."));
    v.appendChild(pc);
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
    // 1. Слова: знакомство по 5 слов → сразу практика
    var wsteps = [{ k: "info", kicker: "Уровень " + L.id + " · цель", title: L.en + " — " + L.ru, html: "<p>" + L.goal + "</p><p class='muted'>Сначала 10 новых слов. Слушайте каждое в британском и американском варианте, смотрите транскрипцию. После каждых пяти слов — практика.</p>" }];
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
    D.q.forEach(function (q) { var o = q[1].split("|"), right = o[q[2]], sh = shuffle(o); lsteps.push({ k: "choice", kicker: "Вопрос по диалогу", q: q[0], opts: sh, a: sh.indexOf(right), replay: D.l, why: q[3] || "" }); });
    lsteps.push({ k: "dialog", kicker: "Текст диалога", title: D.t, lines: D.l, hideText: false });
    B.push({ id: "listen", steps: lsteps });
    // 5. Практика: свои предложения + повторение старых слов
    var psteps = sentenceTasks(L);
    if (id > 1) psteps = psteps.concat(reviewTasks(L, 4));
    B.push({ id: "practice", steps: shuffle(psteps) });
    // 6. Босс-тест: без подсказок, 80% для прохождения
    var boss = [];
    pick(ws, 4).forEach(function (w, i) { boss.push(i % 2 ? { k: "type", kicker: "Напишите по-английски", q: w.ru, answers: [w.en], wkey: w.en } : choiceFromWords(w, "en", wordPool(L), { kicker: "Послушайте и выберите", q: "", listen: w.en })); });
    pick(G.tasks, 4).forEach(function (t) { var x = gramTask(t, L); if (x) boss.push(x); });
    pick(L.s, 2).forEach(function (s) { boss.push({ k: "build", kicker: "Соберите предложение", ru: s[1], en: s[0] }); });
    boss.forEach(function (b) { b.boss = true; });
    B.push({ id: "boss", steps: [{ k: "info", kicker: "Финал уровня", title: "Босс-тест", html: "<p>" + boss.length + " заданий без подсказок. Нужно <b>80%</b> правильных ответов с первой попытки. Ошибки не возвращаются — после теста увидите разбор.</p><p class='muted'>1★ — от 80%, 2★ — от 90%, 3★ — без ошибок.</p>" }].concat(shuffle(boss)) });

    var startBlock = Math.min(prog.resume[id] || 0, B.length - 1);
    return { kind: "level", id: id, L: L, blocks: B, bi: startBlock, pos: 0, queue: B[startBlock].steps.slice(), first: {}, retried: {}, ok: 0, total: 0, bossOk: 0, bossTotal: 0, mistakes: [] };
  }
  function trainSession(title, steps, back) {
    return { kind: "train", title: title, blocks: [{ id: "train", steps: steps }], bi: 0, pos: 0, queue: steps.slice(), first: {}, retried: {}, ok: 0, total: 0, mistakes: [], back: back || "#practice" };
  }


  // ======================================================================
  // УРОК: экран как в казахском (полоса, блок, нижняя панель)
  // ======================================================================
  var BLOCK_NAMES = { words: "Слова", sounds: "Звуки", grammar: "Грамматика", listen: "Аудирование", practice: "Практика", boss: "Босс-тест" };
  function stepId(st) { return st.uid || (st.uid = Math.random().toString(36).slice(2)); }
  function pickOne(a) { return a[Math.floor(Math.random() * a.length)]; }
  function isEn(t) { return /^[\x00-\x7f’]+$/.test(t); }

  function renderSession() {
    var blk = S.blocks[S.bi], step = S.queue[S.pos];
    var view = el("section", "view sess");
    var top = el("div", "sess-top");
    var x = el("button", "icon-btn", "✕"); x.type = "button"; x.setAttribute("aria-label", "Выйти");
    x.addEventListener("click", function () { var to = S.kind === "level" ? "#map" : S.back; S = null; location.hash = to; });
    var bar = el("div", "sess-bar"), fill = el("div"); fill.style.width = Math.round(overallPct() * 100) + "%"; bar.appendChild(fill);
    top.appendChild(x); top.appendChild(bar);
    top.appendChild(el("span", "sess-count", Math.min(S.pos + 1, S.queue.length) + " / " + S.queue.length));
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
    function result(ok, right, why) {
      var id = stepId(st);
      if (!(id in S.first)) {
        S.first[id] = ok;
        if (st.boss) { S.bossTotal++; if (ok) S.bossOk++; } else { S.total++; if (ok) S.ok++; }
        if (st.wkey) srsTouch(st.wkey, ok);
        if (!ok) { var mk = st.wkey ? "w:" + st.wkey : st.gkey ? "g:" + st.gkey : null; if (mk) miss[mk] = (miss[mk] || 0) + 1; S.mistakes.push({ q: st.listen ? "На слух" : st.q || st.ru || "", right: right }); }
        else if (st.wkey && miss["w:" + st.wkey]) miss["w:" + st.wkey] = Math.max(0, miss["w:" + st.wkey] - 1);
      }
      if (!ok && !st.boss && !S.retried[id]) { S.retried[id] = 1; S.queue.push(st); }
      fb.className = "fb " + (ok ? "ok" : "bad");
      fb.innerHTML = (ok ? pickOne(["Верно!", "Отлично!", "Так держать!", "Great!"]) : "Неверно." + (right ? " Правильно: <b>" + esc(right) + "</b>" : "")) +
        (why ? "<span class='why'>" + why + "</span>" : "") + (!ok && !st.boss ? "<span class='why'>Задание вернётся в конце блока.</span>" : "");
      setAct("Дальше", true, next); act.focus();
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
    var id = S.id;
    touchStreak();
    if (blk.id !== "boss") {
      var key = id + ":" + blk.id;
      if (!prog.blocksDone[key]) { prog.blocksDone[key] = 1; addXp(10); }
      prog.resume[id] = S.bi + 1; saveAll();
      S.bi++; S.pos = 0; S.queue = S.blocks[S.bi].steps.slice();
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
  var IVL = [0, 1, 2, 4, 7, 15, 30, 60];
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

  // ---------- старт ----------
  (function () { var n = 0; while (n < TOTAL && prog.passed[n + 1]) n++; prog.done = n; })();
  hud();
  route();
  if (LDC.arrive) LDC.arrive();
  window.__EN = { cur: function () { return S && S.queue[S.pos]; }, LESSONS: LESSONS, ALLW: ALLW, norm: norm, checkTyped: checkTyped, levelSession: levelSession, gramTask: gramTask };
})();
