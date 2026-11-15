/* Английский для чайников — движок курса.
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
    return h("button", { class: "btn sm teal", type: "button", "aria-label": "Послушать: " + text, onclick: function (e) { e.preventDefault(); speak(text, acc); } }, [label || "▶ " + (acc ? acc.toUpperCase() : "Слушать")]);
  }

  // распознавание речи (Chrome/Edge). Если его нет — кнопка не показывается.
  var SR = window.SpeechRecognition || window.webkitSpeechRecognition || null;
  function micBtn(target, out) {
    if (!SR) return null;
    var b = h("button", { class: "btn sm ghost", type: "button" }, ["🎙 Скажи"]);
    b.addEventListener("click", function () {
      var r; try { r = new SR(); } catch (e) { out.textContent = "Микрофон недоступен."; return; }
      r.lang = settings.accent === "us" ? "en-US" : "en-GB"; r.interimResults = false; r.maxAlternatives = 3;
      b.disabled = true; out.textContent = "Слушаю… скажите: " + target;
      r.onresult = function (e) {
        var best = 0, heard = "";
        for (var i = 0; i < e.results[0].length; i++) { var t = e.results[0][i].transcript, s = similar(t, target); if (s > best) { best = s; heard = t; } }
        var pct = Math.round(best * 100);
        out.innerHTML = "Услышано: <b>" + esc(heard) + "</b> · совпадение " + pct + "% — " + (pct >= 85 ? "отлично!" : pct >= 60 ? "почти, послушайте ещё раз и повторите." : "попробуйте медленнее.");
      };
      r.onerror = function (e) { out.textContent = e.error === "not-allowed" ? "Разрешите доступ к микрофону в браузере." : "Не получилось распознать. Попробуйте ещё раз."; };
      r.onend = function () { b.disabled = false; };
      try { r.start(); } catch (e) { b.disabled = false; }
    });
    return b;
  }

  // ---------- мелочи интерфейса ----------
  var toastT = 0;
  function toast(msg) {
    var t = $("#toast"); if (!t) { t = h("div", { id: "toast", class: "warn", role: "status", style: "position:fixed;left:50%;bottom:20px;transform:translateX(-50%);z-index:70;max-width:90vw" }); document.body.appendChild(t); }
    t.textContent = msg; t.hidden = false; clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 3500);
  }
  function sparkle(from) {
    if (!from || !from.getBoundingClientRect) return;
    var r = from.getBoundingClientRect(), cols = ["#ffd447", "#3fe0c5", "#ff5d73", "#a77bff", "#70e46b"];
    for (var i = 0; i < 14; i++) {
      var s = h("span", { class: "sparkle" });
      s.style.left = (r.left + r.width / 2) + "px"; s.style.top = (r.top + r.height / 2) + "px"; s.style.background = cols[i % cols.length];
      var a = Math.random() * Math.PI * 2, d = 30 + Math.random() * 50;
      s.style.setProperty("--dx", Math.round(Math.cos(a) * d) + "px"); s.style.setProperty("--dy", Math.round(Math.sin(a) * d) + "px");
      document.body.appendChild(s); setTimeout(function (x) { return function () { x.remove(); }; }(s), 900);
    }
  }
  function hud() {
    var l = levelOf(prog.xp);
    $("#hudLvl").textContent = "LV " + l.lv;
    $("#hudXp").style.width = l.into + "%";
    $("#hudStreak").textContent = liveStreak();
  }
  $("#logoPot").innerHTML = LDC.teapotSVG("en", "Чайник с британским флагом");

  // меню
  var menuBtn = $("#menuBtn"), drawer = $("#drawer"), scrim = $("#scrim");
  function setMenu(o) { drawer.classList.toggle("open", o); scrim.hidden = !o; menuBtn.setAttribute("aria-expanded", String(o)); menuBtn.setAttribute("aria-label", o ? "Закрыть меню" : "Открыть меню"); }
  menuBtn.addEventListener("click", function () { setMenu(!drawer.classList.contains("open")); });
  scrim.addEventListener("click", function () { setMenu(false); });
  drawer.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });

  // ---------- маршрутизация ----------
  var S = null; // активная сессия
  var ROUTES = { map: viewMap, words: viewWords, cards: viewCards, grammar: viewGrammar, sounds: viewSounds, listen: viewListen, practice: viewPractice, profile: viewProfile, about: viewAbout };
  function route() {
    var hs = location.hash.slice(1) || "map";
    if (synth) synth.cancel();
    var m = /^level-(\d+)$/.exec(hs);
    document.querySelectorAll(".drawer a").forEach(function (a) { if (a.getAttribute("href") === "#" + hs) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current"); });
    app.innerHTML = "";
    if (m) {
      var id = +m[1];
      if (!LESSONS[id - 1]) { location.replace("#map"); return; }
      if (!isOpen(id)) { toast("Уровень " + id + " откроется, когда вы пройдёте уровень " + (id - 1) + "."); location.replace("#map"); return; }
      if (!S || S.kind !== "level" || S.id !== id) S = levelSession(id);
      renderSession();
    } else if (hs === "train" && S && S.kind === "train") {
      renderSession();
    } else {
      if (hs !== "train") S = null;
      (ROUTES[hs] || viewMap)();
      if (!ROUTES[hs] && hs !== "train") history.replaceState(null, "", "#map");
    }
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  // ======================================================================
  // КАРТА
  // ======================================================================
  var SCENERY = {
    1: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%23000' d='M2 6h3v1H2zM1 7h5v3H1zM3 10h1v2H3zM14 4h1v1h-1zM12 5h5v1h-5zM11 6h7v2h-7zM12 8h5v4h-5z'/%3E%3Cpath fill='%23ffd447' d='M14 9h1v1h-1z'/%3E%3C/svg%3E",
    2: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%23000' d='M5 1h1v1H5zM4 2h3v2H4zM3 4h5v2H3zM2 6h7v2H2zM5 8h1v4H5zM17 3h1v1h-1zM16 4h3v2h-3zM15 6h5v2h-5zM17 8h1v4h-1z'/%3E%3C/svg%3E",
    3: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%23000' d='M1 3h5v9H1zM8 1h4v11H8zM14 5h6v7h-6z'/%3E%3Cpath fill='%23ffd447' d='M2 5h1v1H2zM4 5h1v1H4zM9 3h1v1H9zM9 6h1v1H9zM15 7h1v1h-1zM18 7h1v1h-1z'/%3E%3C/svg%3E",
    4: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%23000' d='M6 1h1v7H6zM7 2h3v4H7zM2 8h10v1H2zM3 9h8v1H3zM0 11h24v1H0zM16 10h2v1h-2zM20 10h2v1h-2z'/%3E%3C/svg%3E",
    5: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12' shape-rendering='crispEdges'%3E%3Cpath fill='%23000' d='M2 3h1v1H2zM4 3h1v1H4zM6 3h1v1H6zM2 4h5v8H2zM9 6h7v6H9zM9 5h1v1H9zM11 5h1v1h-1zM13 5h1v1h-1zM15 5h1v1h-1zM18 3h1v1h-1zM20 3h1v1h-1zM18 4h3v8h-3z'/%3E%3Cpath fill='%23ffd447' d='M11 9h3v3h-3z'/%3E%3C/svg%3E"
  };
  function viewMap() {
    var nx = nextLevel(), allDone = prog.done >= TOTAL, name = (LDC.profile().name || "").trim();
    var hero = h("section", { class: "pbox light" }, [
      h("div", { class: "hero" }, [
        h("span", { html: LDC.teapotSVG("en", "Чайник-путешественник") }),
        h("div", {}, [
          h("p", { class: "speech typing", html: allDone
            ? "<b>Well done" + (name ? ", " + esc(name) : "") + "!</b> Все 30 уровней пройдены. Повторяйте карточки и тренируйтесь — так слова не забудутся."
            : prog.done === 0 && !Object.keys(prog.resume).length
              ? "<b>Hello" + (name ? ", " + esc(name) : "") + "!</b> Я — чайник-путешественник. Пройдём английский с нуля: 30 уровней, 5 миров. В каждом уровне — слова, звуки, грамматика, аудирование, практика и босс-тест."
              : "<b>Welcome back" + (name ? ", " + esc(name) : "") + "!</b> Следующий уровень: <b>" + nx + ". " + esc(LESSONS[nx - 1].en) + "</b> — " + esc(LESSONS[nx - 1].ru) + "." }),
          h("div", { class: "row" }, [
            h("a", { class: "btn big", href: "#level-" + nx }, [allDone ? "► Повторить уровень 30" : prog.done || prog.resume[nx] ? "► Продолжить" : "► Начать игру"]),
            h("a", { class: "btn ghost", href: "#cards" }, ["🃏 Карточки"])
          ])
        ])
      ])
    ]);
    hero.querySelector(".hero > span").firstChild.classList.add("sprite");
    var l = levelOf(prog.xp);
    var player = h("section", { class: "pbox" }, [
      h("h2", { class: "h2" }, ["Карточка игрока"]),
      h("div", { class: "player" }, [
        cell(l.lv, "уровень игрока"), cell(prog.done + "/" + TOTAL, "уровней пройдено"), cell(totalStars() + "★", "звёзд из " + TOTAL * 3), cell(learnedWords().length, "слов в карточках")
      ]),
      h("div", { class: "bar", role: "progressbar", "aria-label": "Опыт до следующего уровня", "aria-valuemin": "0", "aria-valuemax": "100", "aria-valuenow": String(l.into) }, [h("span", { style: "width:" + l.into + "%" })]),
      h("p", { class: "note" }, ["XP: " + prog.xp + " · до уровня " + (l.lv + 1) + " осталось " + (100 - l.into) + " XP · серия: " + liveStreak() + " дн."])
    ]);
    function cell(b, s) { return h("div", { class: "cell" }, [h("b", { text: String(b) }), h("span", { text: s })]); }
    app.appendChild(h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Карта мира"]), h("p", { class: "lead" }, ["Цель курса — уровень A2: понимать простую речь, рассказывать о себе, спрашивать дорогу, говорить о прошлом и планах."]), hero, player]));
    var v = app.firstChild;
    EN.worlds.forEach(function (W, wi) {
      var ls = LESSONS.filter(function (L) { return L.world === wi + 1; });
      var path = h("div", { class: "path" });
      ls.forEach(function (L) {
        var st = prog.passed[L.id] ? "done" : isOpen(L.id) ? "open" : "locked";
        if (st === "open" && L.id !== nx) st = "done-ish";
        var stars = prog.passed[L.id] || 0;
        var node = h(st === "locked" ? "div" : "a", { class: "node " + (st === "done-ish" ? "done" : st), href: st === "locked" ? null : "#level-" + L.id, "aria-label": "Уровень " + L.id + ": " + L.en + (st === "locked" ? " (закрыт)" : prog.passed[L.id] ? " (пройден, звёзд: " + stars + ")" : "") }, [
          h("span", { class: "tile" }, [st === "locked" ? "🔒" : String(L.id)]),
          h("span", { class: "label" }, [L.en]),
          h("span", { class: "stars", "aria-hidden": "true" }, [prog.passed[L.id] ? "★★★".slice(0, stars) + "☆☆☆".slice(stars) : prog.resume[L.id] ? "в пути…" : ""])
        ]);
        path.appendChild(node);
      });
      var world = h("section", { class: "world w" + (wi + 1) }, [
        h("div", { class: "world-head" }, [h("span", { class: "num" }, ["МИР " + (wi + 1)]), h("h2", {}, [W.name])]),
        h("p", { class: "world-sub" }, [W.sub]),
        path,
        h("div", { class: "scenery", style: "background-image:url(\"" + SCENERY[wi + 1] + "\")", "aria-hidden": "true" })
      ]);
      v.appendChild(world);
    });
  }

  // ======================================================================
  // СЕССИИ: уровень и тренировка
  // ======================================================================
  var BLOCK_NAMES = { words: "Слова", sounds: "Звуки", grammar: "Грамматика", listen: "Аудирование", practice: "Практика", boss: "Босс" };

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
      else if (t === 2) out.push(choiceFromWords(w, "en", pool, { kicker: "Послушайте и выберите слово", q: "🔊", listen: w.en }));
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
      return { k: "type", kicker: "Диктант: напишите, что услышали", q: "🔊", listen: s[0], answers: [s[0]].concat(s[2] ? s[2].split("|") : []), why: s[0] + " — " + s[1] };
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
      ssteps.push({ k: "choice", kicker: "Какое слово прозвучало?", q: "🔊", listen: target, opts: opts, a: opts.indexOf(target), why: pr[0] + " и " + pr[1] + " различаются одним звуком: " + P.ipa + "." });
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
    pick(ws, 4).forEach(function (w, i) { boss.push(i % 2 ? { k: "type", kicker: "Напишите по-английски", q: w.ru, answers: [w.en], wkey: w.en } : choiceFromWords(w, "en", wordPool(L), { kicker: "Послушайте и выберите", q: "🔊", listen: w.en })); });
    pick(G.tasks, 4).forEach(function (t) { var x = gramTask(t, L); if (x) boss.push(x); });
    pick(L.s, 2).forEach(function (s) { boss.push({ k: "build", kicker: "Соберите предложение", ru: s[1], en: s[0] }); });
    boss.forEach(function (b) { b.boss = true; });
    B.push({ id: "boss", steps: [{ k: "info", kicker: "Финал уровня", title: "⚔ Босс-тест", html: "<p>" + boss.length + " заданий без подсказок. Нужно <b>80%</b> правильных ответов с первой попытки. Ошибки не возвращаются — после теста увидите разбор.</p><p class='muted'>1★ — от 80%, 2★ — от 90%, 3★ — без ошибок.</p>" }].concat(shuffle(boss)) });

    var startBlock = Math.min(prog.resume[id] || 0, B.length - 1);
    return { kind: "level", id: id, L: L, blocks: B, bi: startBlock, pos: 0, queue: B[startBlock].steps.slice(), first: {}, retried: {}, ok: 0, total: 0, bossOk: 0, bossTotal: 0, mistakes: [] };
  }
  function trainSession(title, steps, back) {
    return { kind: "train", title: title, blocks: [{ id: "train", steps: steps }], bi: 0, pos: 0, queue: steps.slice(), first: {}, retried: {}, ok: 0, total: 0, mistakes: [], back: back || "#practice" };
  }
  function startTrain(title, steps, back) {
    if (!steps.length) { toast("Пока нечего тренировать: пройдите хотя бы первый уровень."); return; }
    S = trainSession(title, steps, back);
    if (location.hash === "#train") route(); else location.hash = "#train";
  }

  function renderSession() {
    var blk = S.blocks[S.bi], step = S.queue[S.pos];
    var view = h("div", { class: "view sess" });
    var top = h("div", { class: "sess-top" }, [
      h("button", { class: "btn sm red x", type: "button", "aria-label": "Выйти", onclick: function () { var to = S.kind === "level" ? "#map" : S.back; S = null; location.hash = to; } }, ["✕"]),
      h("div", { class: "hp", "aria-hidden": "true" }, [h("span", { style: "width:" + Math.round(overallPct() * 100) + "%" })]),
      h("span", { class: "sess-count" }, [S.kind === "level" ? "LV " + S.id : "TRAIN"])
    ]);
    view.appendChild(top);
    if (S.kind === "level") {
      var bl = h("div", { class: "blocks", "aria-label": "Блоки уровня" });
      S.blocks.forEach(function (b, i) { bl.appendChild(h("span", { class: i < S.bi ? "ok" : i === S.bi ? "on" : "" }, [(i < S.bi ? "✓ " : "") + BLOCK_NAMES[b.id]])); });
      view.appendChild(bl);
    } else view.appendChild(h("p", { class: "q-kicker" }, [S.title]));
    var box = h("section", { class: "pbox" });
    view.appendChild(box);
    var fb = h("div", { class: "feedback" }, [h("div", { class: "fb", "aria-live": "polite" }), h("button", { class: "btn green", type: "button", disabled: true }, ["Проверить"])]);
    view.appendChild(fb);
    app.innerHTML = ""; app.appendChild(view);
    if (!step) { finishBlock(); return; }
    renderStep(step, box, fb);
  }
  function overallPct() {
    var n = S.blocks.length, inBlock = S.queue.length ? S.pos / S.queue.length : 1;
    return (S.bi + inBlock) / n;
  }
  function stepId(st) { return st.uid || (st.uid = Math.random().toString(36).slice(2)); }

  function renderStep(st, box, fb) {
    var fbText = fb.firstChild, act = fb.lastChild;
    var graded = st.k === "choice" || st.k === "type" || st.k === "build" || st.k === "match";
    function setAct(label, enabled, fn, cls) { act.textContent = label; act.disabled = !enabled; act.className = "btn " + (cls || "green"); act.onclick = fn; }
    function next() { S.pos++; renderSession(); }
    function result(ok, right, why) {
      var id = stepId(st);
      if (!(id in S.first)) {
        S.first[id] = ok;
        if (st.boss) { S.bossTotal++; if (ok) S.bossOk++; }
        else { S.total++; if (ok) S.ok++; }
        if (st.wkey) srsTouch(st.wkey, ok);
        if (!ok) { var mk = st.wkey ? "w:" + st.wkey : st.gkey ? "g:" + st.gkey : null; if (mk) miss[mk] = (miss[mk] || 0) + 1; S.mistakes.push({ q: st.q || st.ru || "", right: right }); }
        else if (st.wkey && miss["w:" + st.wkey]) miss["w:" + st.wkey] = Math.max(0, miss["w:" + st.wkey] - 1);
      }
      if (!ok && !st.boss && !S.retried[id]) { S.retried[id] = 1; S.queue.push(st); }
      fb.className = "feedback " + (ok ? "ok" : "bad");
      fbText.innerHTML = "<b>" + (ok ? pickOne(["Верно!", "Отлично!", "Так держать!", "Nice!", "Great!"]) : "Не совсем.") + "</b>" +
        (!ok && right ? "<div class='why'>Правильно: <b>" + esc(right) + "</b></div>" : "") +
        (why ? "<div class='why'>" + why + "</div>" : "") + (!ok && !st.boss ? "<div class='why'>Это задание вернётся в конце блока.</div>" : "");
      if (ok) sparkle(act);
      setAct("Дальше ►", true, next, ok ? "green" : "red");
      act.focus();
    }
    var kick = st.kicker ? h("p", { class: "q-kicker" }, [st.kicker]) : null;
    if (kick) box.appendChild(kick);

    if (st.k === "info") {
      box.classList.add("light");
      box.appendChild(h("h2", { class: "q-title" }, [st.title || ""]));
      box.appendChild(h("div", { class: "rule", html: st.html }));
      box.querySelectorAll("[data-say]").forEach(function (b) { b.addEventListener("click", function () { speak(b.getAttribute("data-say"), b.getAttribute("data-acc") || null); }); });
      if (st.say && st.say.length) { var r = h("div", { class: "row" }); st.say.slice(0, 6).forEach(function (w) { r.appendChild(playBtn(w, null, "▶ " + w)); }); box.appendChild(r); }
      setAct("Понятно ►", true, next);
    } else if (st.k === "word") {
      var w = st.w;
      box.appendChild(h("p", { class: "q-kicker" }, ["Новое слово"]));
      box.appendChild(h("div", { class: "q-big", lang: "en" }, [w.en]));
      box.appendChild(h("div", { class: "ipa-row" }, [
        h("span", {}, [h("span", { class: "acc" }, ["UK"]), h("span", { class: "ipa", text: w.uk })]),
        h("span", {}, [h("span", { class: "acc" }, ["US"]), h("span", { class: "ipa", text: w.us })])
      ]));
      box.appendChild(h("p", { class: "q-title" }, [w.ru]));
      var out = h("p", { class: "note", "aria-live": "polite" });
      box.appendChild(h("div", { class: "row" }, [playBtn(w.en, "uk", "▶ UK"), playBtn(w.en, "us", "▶ US"), micBtn(w.en, out)]));
      box.appendChild(out);
      box.appendChild(h("div", { class: "ex" }, [h("div", { class: "en", lang: "en" }, [w.ex + " "]), h("div", { class: "ru" }, [w.exru]), h("div", { class: "row" }, [playBtn(w.ex, null, "▶ Пример")])]));
      setTimeout(function () { speak(w.en); }, 250);
      srsAdd(w.en);
      setAct("Дальше ►", true, next);
    } else if (st.k === "choice") {
      box.appendChild(h("div", { class: st.listen ? "q-title" : "q-big", lang: st.listen || /^[\x00-\x7f]+$/.test(st.q) ? "en" : "ru" }, [st.listen ? "" : st.q]));
      if (st.listen) { box.appendChild(h("div", { class: "row" }, [playBtn(st.listen, null, "▶ Послушать"), playBtn(st.listen, null, "🐢 Медленно")])); box.lastChild.lastChild.onclick = function () { speak(st.listen, null, 0.6); }; setTimeout(function () { speak(st.listen); }, 300); }
      if (st.audio) box.appendChild(h("div", { class: "row" }, [playBtn(st.audio)]));
      if (st.replay) box.appendChild(h("div", { class: "row" }, [h("button", { class: "btn sm teal", type: "button", onclick: function () { speakLines(st.replay); } }, ["▶ Диалог ещё раз"])]));
      var grid = h("div", { class: "opts" }), btns = [];
      st.opts.forEach(function (o, i) {
        var b = h("button", { class: "opt", type: "button", lang: /^[\x00-\x7f]+$/.test(o) ? "en" : "ru" }, [o]);
        b.addEventListener("click", function () {
          btns.forEach(function (x) { x.disabled = true; });
          var ok = i === st.a; b.classList.add(ok ? "right" : "wrong"); if (!ok) btns[st.a].classList.add("right");
          if (ok && /^[\x00-\x7f]+$/.test(o) && o.length < 60) speak(o);
          result(ok, st.opts[st.a], st.why);
        });
        btns.push(b); grid.appendChild(b);
      });
      box.appendChild(grid);
      setAct("Выберите ответ", false);
    } else if (st.k === "type") {
      box.appendChild(h("div", { class: st.listen ? "q-title" : "q-big", style: st.listen ? "" : "font-size:clamp(22px,5vw,32px)" }, [st.listen ? "" : st.q]));
      if (st.listen) { box.appendChild(h("div", { class: "row" }, [playBtn(st.listen, null, "▶ Послушать"), h("button", { class: "btn sm teal", type: "button", onclick: function () { speak(st.listen, null, 0.6); } }, ["🐢 Медленно"])])); setTimeout(function () { speak(st.listen); }, 300); }
      var inp = h("input", { class: "inp", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", lang: "en", "aria-label": "Ваш ответ по-английски", placeholder: "Пишите по-английски…" });
      box.appendChild(inp);
      if (!st.boss && st.answers[0].split(" ").length === 1) box.appendChild(h("p", { class: "note" }, ["Подсказка: " + st.answers[0].length + " букв, начинается на «" + st.answers[0][0] + "»"]));
      var check = function () {
        if (!inp.value.trim()) return;
        inp.disabled = true;
        var r = checkTyped(inp.value, st.answers);
        result(r.ok, st.answers[0], (r.typo ? "Есть опечатка, но засчитано. " : "") + (st.why || ""));
        if (r.ok) speak(st.answers[0]);
      };
      inp.addEventListener("input", function () { act.disabled = !inp.value.trim(); });
      inp.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); if (!inp.disabled) check(); } });
      setAct("Проверить", false, check);
      setTimeout(function () { inp.focus(); }, 50);
    } else if (st.k === "build") {
      box.appendChild(h("div", { class: "q-title" }, [st.ru]));
      var toks = st.en.replace(/[.,!?]/g, "").split(/\s+/).filter(Boolean);
      var ans = h("div", { class: "tiles", "aria-label": "Ваш ответ" }), bank = h("div", { class: "tiles bank" }), chosen = [];
      shuffle(toks.map(function (t, i) { return { t: t, i: i }; })).forEach(function (o) {
        var b = h("button", { class: "tile-w", type: "button", lang: "en" }, [o.t]);
        b.addEventListener("click", function () {
          if (b.classList.contains("used")) return;
          b.classList.add("used");
          var c = h("button", { class: "tile-w", type: "button", lang: "en" }, [o.t]);
          c.addEventListener("click", function () { if (act.textContent !== "Проверить") return; c.remove(); b.classList.remove("used"); chosen.splice(chosen.indexOf(o), 1); act.disabled = chosen.length !== toks.length; });
          ans.appendChild(c); chosen.push(o); act.disabled = chosen.length !== toks.length;
        });
        bank.appendChild(b);
      });
      box.appendChild(ans); box.appendChild(bank);
      setAct("Проверить", false, function () {
        var said = chosen.map(function (o) { return o.t; }).join(" ");
        var ok = norm(said) === norm(st.en);
        ans.querySelectorAll("button").forEach(function (b) { b.disabled = true; }); bank.querySelectorAll("button").forEach(function (b) { b.disabled = true; });
        speak(st.en);
        result(ok, st.en, st.why);
      });
    } else if (st.k === "match") {
      var pairs = st.pairs, left = shuffle(pairs), right = shuffle(pairs), sel = null, left2 = 0, errs = 0;
      var m = h("div", { class: "match" }), colL = h("div", { style: "display:grid;gap:10px" }), colR = h("div", { style: "display:grid;gap:10px" });
      function mk(p, side) {
        var b = h("button", { class: "opt", type: "button", lang: side === 0 ? "en" : "ru" }, [p[side]]);
        b.addEventListener("click", function () {
          if (b.classList.contains("gone")) return;
          if (side === 0) speak(p[0]);
          if (!sel || sel.side === side) { if (sel) sel.b.classList.remove("sel"); sel = { b: b, p: p, side: side }; b.classList.add("sel"); return; }
          if (sel.p === p) { sel.b.classList.remove("sel"); sel.b.classList.add("gone"); b.classList.add("gone"); sel.b.disabled = b.disabled = true; sel = null; left2++; if (left2 === pairs.length) result(errs <= 1, null, errs ? "Ошибок при сопоставлении: " + errs + "." : ""); }
          else { errs++; b.classList.add("wrong"); var s0 = sel.b; setTimeout(function () { b.classList.remove("wrong"); s0.classList.remove("sel"); }, 350); sel = null; }
        });
        return b;
      }
      left.forEach(function (p) { colL.appendChild(mk(p, 0)); }); right.forEach(function (p) { colR.appendChild(mk(p, 1)); });
      m.appendChild(colL); m.appendChild(colR); box.appendChild(m);
      setAct("Найдите все пары", false);
    } else if (st.k === "dialog") {
      box.classList.add("light");
      box.appendChild(h("h2", { class: "q-title" }, [st.title]));
      if (st.hideText) {
        box.appendChild(h("p", {}, ["Послушайте диалог без текста. Можно включать сколько угодно раз. Потом будут вопросы, а в конце — текст с переводом."]));
        box.appendChild(h("div", { class: "row" }, [
          h("button", { class: "btn teal", type: "button", onclick: function () { speakLines(st.lines); } }, ["▶ Слушать диалог"]),
          h("button", { class: "btn ghost", type: "button", onclick: function () { var r0 = settings.rate; settings.rate = 0.65; speakLines(st.lines); settings.rate = r0; } }, ["🐢 Медленно"])
        ]));
        setTimeout(function () { speakLines(st.lines); }, 300);
        setAct("К вопросам ►", true, next);
      } else {
        var dl = h("div", { class: "dlg" });
        st.lines.forEach(function (l) {
          dl.appendChild(h("div", { class: "line " + (l[0] === "B" ? "b" : "a") }, [
            h("span", { class: "who" }, [l[0]]),
            h("div", {}, [h("div", { lang: "en", style: "font-weight:600" }, [l[1]]), h("div", { class: "ru" }, [l[2]])]),
            h("button", { class: "btn sm teal", type: "button", "aria-label": "Послушать реплику", onclick: function () { speak(l[1]); } }, ["▶"])
          ]));
        });
        box.appendChild(dl);
        box.appendChild(h("div", { class: "row" }, [h("button", { class: "btn teal", type: "button", onclick: function () { speakLines(st.lines); } }, ["▶ Весь диалог"])]));
        setAct("Дальше ►", true, next);
      }
    } else if (st.k === "drill") {
      box.appendChild(h("h2", { class: "q-title" }, [st.title]));
      box.appendChild(h("p", { class: "muted" }, ["Нажмите на слово, послушайте и повторите вслух 2–3 раза. Если браузер поддерживает микрофон, можно проверить себя кнопкой «🎙 Скажи»."]));
      st.words.forEach(function (wd) {
        var out = h("span", { class: "note" });
        box.appendChild(h("div", { class: "row", style: "margin-bottom:6px" }, [playBtn(wd, "uk", "▶ UK"), playBtn(wd, "us", "▶ US"), h("b", { lang: "en", style: "min-width:120px" }, [wd]), micBtn(wd, out), out]));
      });
      setAct("Дальше ►", true, next);
    }
    if (!graded) fb.className = "feedback";
  }
  function pickOne(a) { return a[Math.floor(Math.random() * a.length)]; }
  // Enter = главная кнопка
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Enter" || !S) return;
    var t = e.target; if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "BUTTON" || t.tagName === "A")) return;
    var b = $(".feedback .btn"); if (b && !b.disabled) { e.preventDefault(); b.click(); }
  });

  function finishBlock() {
    var blk = S.blocks[S.bi];
    if (S.kind === "train") { renderTrainFinish(); return; }
    var id = S.id;
    touchStreak();
    var key = id + ":" + blk.id;
    if (blk.id !== "boss") {
      if (!prog.blocksDone[key]) { prog.blocksDone[key] = 1; addXp(10); }
      prog.resume[id] = S.bi + 1;
      saveAll();
      S.bi++; S.pos = 0; S.queue = S.blocks[S.bi].steps.slice();
      renderSession();
      return;
    }
    // босс
    var acc = S.bossTotal ? S.bossOk / S.bossTotal : 0, pass = acc >= 0.8;
    var stars = !pass ? 0 : acc >= 0.999 ? 3 : acc >= 0.9 ? 2 : 1;
    var gained = 0;
    if (pass) {
      var before = prog.passed[id] || 0;
      if (!before) { gained += 50; }
      if (stars > before) { gained += (stars - before) * 10; prog.passed[id] = stars; }
      delete prog.resume[id];
    } else prog.resume[id] = S.blocks.length - 1;
    addXp(gained);
    saveAll();
    renderLevelFinish(acc, pass, stars, gained);
  }
  function renderLevelFinish(acc, pass, stars, gained) {
    var id = S.id, L = S.L, pct = Math.round(acc * 100);
    var box = h("section", { class: "pbox finish" }, [
      h("h1", { class: "h1" }, [pass ? "LEVEL CLEAR!" : "GAME OVER?"]),
      h("p", { class: "q-title" }, [pass ? "Уровень " + id + " «" + L.en + "» пройден!" : "Босс-тест: " + pct + "%. Нужно 80% — " + (pct >= 60 ? "почти получилось!" : "повторите правило и попробуйте ещё раз.")]),
      h("div", { class: "big-stars", "aria-label": "Звёзд: " + stars, html: "★★★".slice(0, stars) + "<span class='off'>" + "★★★".slice(stars) + "</span>" }),
      h("div", {}, [h("span", { class: "reward" }, ["Босс: " + pct + "%"]), gained ? h("span", { class: "reward" }, ["+" + gained + " XP"]) : null]),
      S.mistakes.length ? mistakesList(S.mistakes) : null,
      h("div", { class: "row", style: "justify-content:center;margin-top:14px" }, pass ? [
        id < TOTAL ? h("a", { class: "btn big", href: "#level-" + (id + 1), onclick: function () { S = null; } }, ["► Уровень " + (id + 1)]) : h("a", { class: "btn big", href: "#map", onclick: function () { S = null; } }, ["🏆 На карту"]),
        h("a", { class: "btn ghost", href: "#map", onclick: function () { S = null; } }, ["Карта"])
      ] : [
        h("button", { class: "btn big red", type: "button", onclick: function () { S = levelSession(id); renderSession(); } }, ["⚔ Ещё раз"]),
        h("a", { class: "btn ghost", href: "#grammar", onclick: function () { S = null; } }, ["Повторить правило"])
      ])
    ]);
    app.innerHTML = ""; app.appendChild(h("div", { class: "view sess" }, [box]));
    if (pass) confetti();
  }
  function mistakesList(ms) {
    var seen = {}, list = ms.filter(function (m) { var k = m.q + "|" + m.right; if (seen[k]) return false; seen[k] = 1; return true; }).slice(0, 8);
    return h("div", { class: "pbox light", style: "text-align:left;margin-top:16px" }, [h("h3", { class: "h2", style: "color:#1a9c88" }, ["Разбор ошибок"])].concat(list.map(function (m) {
      return h("p", {}, [h("span", { class: "muted" }, [m.q === "🔊" ? "На слух" : m.q]), " → ", h("b", { lang: "en" }, [m.right || "—"])]);
    })));
  }
  function renderTrainFinish() {
    var acc = S.total ? S.ok / S.total : 1, gained = Math.round(S.ok * 2);
    addXp(gained); touchStreak(); saveAll();
    var box = h("section", { class: "pbox finish" }, [
      h("h1", { class: "h1" }, ["ТРЕНИРОВКА ОКОНЧЕНА"]),
      h("div", {}, [h("span", { class: "reward" }, ["Точность: " + Math.round(acc * 100) + "%"]), h("span", { class: "reward" }, ["+" + gained + " XP"])]),
      S.mistakes.length ? mistakesList(S.mistakes) : null,
      h("div", { class: "row", style: "justify-content:center;margin-top:14px" }, [h("a", { class: "btn big", href: S.back }, ["Готово"])])
    ]);
    app.innerHTML = ""; app.appendChild(h("div", { class: "view sess" }, [box]));
  }
  function confetti() {
    var cols = ["#ffd447", "#3fe0c5", "#ff5d73", "#a77bff", "#70e46b"];
    for (var i = 0; i < 40; i++) {
      var s = h("span", { class: "sparkle" });
      s.style.left = (10 + Math.random() * 80) + "vw"; s.style.top = "-10px"; s.style.background = cols[i % cols.length];
      s.style.setProperty("--dx", Math.round(Math.random() * 60 - 30) + "px"); s.style.setProperty("--dy", (60 + Math.random() * 40) + "vh");
      s.style.animationDuration = (1 + Math.random()) + "s";
      document.body.appendChild(s); setTimeout(function (x) { return function () { x.remove(); }; }(s), 2100);
    }
  }

  // ---------- интервальное повторение ----------
  var IVL = [0, 1, 2, 4, 7, 15, 30];
  function srsAdd(en) { if (!srs[en]) { srs[en] = { b: 0, due: today() }; save(K.srs, srs); } }
  function srsTouch(en, ok) {
    var s = srs[en] || { b: 0, due: today() };
    s.b = ok ? Math.min(s.b + 1, IVL.length - 1) : 0;
    s.due = today() + IVL[s.b];
    srs[en] = s;
  }

  // ======================================================================
  // СЛОВАРЬ
  // ======================================================================
  function viewWords() {
    var v = h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Словарь"]), h("p", { class: "lead" }, ["Все слова курса с транскрипцией IPA (британский и американский вариант), переводом и примером. Нажмите ▶, чтобы послушать."])]);
    var q = h("input", { class: "inp", type: "search", placeholder: "Поиск по-английски или по-русски", "aria-label": "Поиск слова" });
    var sel = h("select", { class: "inp", "aria-label": "Тема" }, [h("option", { value: "" }, ["Все уровни и темы"])].concat(LESSONS.map(function (L) { return h("option", { value: String(L.id) }, [L.id + ". " + L.topic]); })));
    var cnt = h("p", { class: "count" }), list = h("div", { class: "grid2" });
    v.appendChild(h("div", { class: "toolbar" }, [q, sel])); v.appendChild(cnt); v.appendChild(list);
    function draw() {
      var s = q.value.trim().toLowerCase(), f = sel.value;
      var res = ALLW.filter(function (w) { return (!f || String(w.lesson) === f) && (!s || w.en.toLowerCase().indexOf(s) >= 0 || w.ru.toLowerCase().indexOf(s) >= 0); });
      cnt.textContent = "Найдено: " + res.length;
      list.innerHTML = "";
      res.slice(0, 300).forEach(function (w) {
        list.appendChild(h("div", { class: "pbox wcard" }, [
          h("div", {}, [h("div", { class: "w", lang: "en" }, [w.en]), h("div", {}, [h("span", { class: "chip" }, ["UK"]), h("span", { class: "ipa", text: w.uk + " " }), w.us !== w.uk ? h("span", { class: "chip" }, ["US"]) : null, w.us !== w.uk ? h("span", { class: "ipa", text: w.us }) : null]), h("div", { class: "t" }, [w.ru])]),
          h("div", { class: "acts" }, [playBtn(w.en, "uk", "UK"), playBtn(w.en, "us", "US")]),
          h("div", { class: "exs" }, [h("span", { class: "chip gold" }, ["LV " + w.lesson]), h("span", { lang: "en" }, [w.ex]), " — ", h("span", { class: "muted" }, [w.exru])])
        ]));
      });
    }
    q.addEventListener("input", draw); sel.addEventListener("change", draw); draw();
    app.appendChild(v);
  }

  // ======================================================================
  // КАРТОЧКИ
  // ======================================================================
  var CS = null;
  function viewCards() {
    var v = h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Карточки слов"]), h("p", { class: "lead" }, ["Интервальное повторение: слова, которые вы помните, возвращаются реже, забытые — чаще. В колоду попадают слова пройденных блоков «Слова»."])]);
    app.appendChild(v);
    var d = today(), known = learnedWords(), due = known.filter(function (w) { return srs[w.en].due <= d; });
    if (!known.length) { v.appendChild(h("section", { class: "pbox" }, [h("p", {}, ["Колода пока пуста. Пройдите блок «Слова» на первом уровне — и слова появятся здесь."]), h("a", { class: "btn", href: "#level-" + nextLevel() }, ["► К уровню " + nextLevel()])])); return; }
    var boxes = [0, 0, 0]; known.forEach(function (w) { var b = srs[w.en].b; boxes[b <= 1 ? 0 : b <= 3 ? 1 : 2]++; });
    v.appendChild(h("section", { class: "pbox" }, [h("div", { class: "player" }, [
      c2(known.length, "слов в колоде"), c2(due.length, "к повторению сегодня"), c2(boxes[0], "новые и трудные"), c2(boxes[2], "хорошо знаю")
    ])]));
    function c2(b, s) { return h("div", { class: "cell" }, [h("b", { text: String(b) }), h("span", { text: s })]); }
    var dirSel = h("select", { class: "inp", "aria-label": "Направление" }, [h("option", { value: "en" }, ["Английский → перевод"]), h("option", { value: "ru" }, ["Перевод → английский"])]);
    v.appendChild(h("div", { class: "toolbar" }, [dirSel,
      h("button", { class: "btn", type: "button", onclick: function () { startCards(due.length ? due : pick(known, 10), dirSel.value); } }, [due.length ? "► Повторить (" + Math.min(due.length, 20) + ")" : "► Повторить 10 случайных"])
    ]));
    var stage = h("div", { id: "cardStage" }); v.appendChild(stage);
  }
  function startCards(ws, dir) {
    CS = { list: shuffle(ws).slice(0, 20), i: 0, dir: dir, flip: false, ok: 0 };
    drawCard();
  }
  function drawCard() {
    var st = $("#cardStage"); if (!st) return; st.innerHTML = "";
    if (CS.i >= CS.list.length) { saveAll(); st.appendChild(h("section", { class: "pbox finish" }, [h("h2", { class: "h2" }, ["Колода пройдена!"]), h("p", {}, ["Запомнено: " + CS.ok + " из " + CS.list.length]), h("button", { class: "btn", type: "button", onclick: viewCardsAgain }, ["К колоде"])])); return; }
    var w = CS.list[CS.i], front = CS.dir === "en";
    var card = h("section", { class: "pbox light flash", role: "button", tabindex: "0", "aria-label": "Перевернуть карточку" });
    function face() {
      card.innerHTML = "";
      if (!CS.flip) {
        card.appendChild(h("div", {}, [h("p", { class: "note" }, ["Карточка " + (CS.i + 1) + " из " + CS.list.length + " · нажмите, чтобы перевернуть"]), h("div", { class: "q-big", style: "color:#1c1a33;text-shadow:none", lang: front ? "en" : "ru" }, [front ? w.en : w.ru])]));
        if (front) speak(w.en);
      } else {
        card.appendChild(h("div", {}, [h("div", { class: "q-big", style: "color:#1c1a33;text-shadow:none", lang: "en" }, [w.en]), h("p", {}, [h("span", { class: "ipa", style: "color:#1a9c88", text: w.uk + (w.us !== w.uk ? "  ·  US " + w.us : "") })]), h("p", { class: "q-title" }, [w.ru]), h("p", { class: "muted", lang: "en" }, [w.ex]), h("p", { class: "muted" }, [w.exru])]));
        speak(w.en);
      }
    }
    face();
    var flip = function () { if (!CS.flip) { CS.flip = true; face(); acts.hidden = false; } };
    card.addEventListener("click", flip); card.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });
    var acts = h("div", { class: "row", style: "justify-content:center" }, [
      h("button", { class: "btn red", type: "button", onclick: function () { grade(0); } }, ["Не помню"]),
      h("button", { class: "btn ghost", type: "button", onclick: function () { grade(1); } }, ["Трудно"]),
      h("button", { class: "btn green", type: "button", onclick: function () { grade(2); } }, ["Помню"])
    ]);
    acts.hidden = true;
    function grade(g) {
      var s = srs[w.en] || { b: 0, due: today() };
      if (g === 0) { s.b = 0; s.due = today(); CS.list.push(w); }
      else if (g === 1) { s.due = today() + 1; }
      else { s.b = Math.min(s.b + 1, IVL.length - 1); s.due = today() + IVL[s.b]; CS.ok++; }
      srs[w.en] = s; CS.i++; CS.flip = false; save(K.srs, srs); drawCard();
    }
    st.appendChild(card); st.appendChild(acts);
  }
  function viewCardsAgain() { app.innerHTML = ""; viewCards(); }

  // ======================================================================
  // ГРАММАТИКА
  // ======================================================================
  function viewGrammar() {
    var v = h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Грамматика"]), h("p", { class: "lead" }, ["Все правила курса по порядку. Каждое объясняет не только «как», но и «почему». Под каждым правилом — кнопка тренировки."])]);
    LESSONS.forEach(function (L) {
      var det = h("details", { class: "pbox light" }, [
        h("summary", { style: "cursor:pointer;font-family:var(--px);font-size:19px" }, [L.id + ". " + L.g.t]),
        h("div", { class: "rule", html: L.g.html }),
        h("div", { class: "row" }, [h("button", { class: "btn teal", type: "button", onclick: function () { startTrain("Грамматика: " + L.g.t, shuffle(L.g.tasks.map(function (t) { return gramTask(t, L); }).filter(Boolean)), "#grammar"); } }, ["⚔ Потренировать (" + L.g.tasks.length + ")"])])
      ]);
      det.querySelectorAll("[data-say]").forEach(function (b) { b.addEventListener("click", function () { speak(b.getAttribute("data-say")); }); });
      v.appendChild(det);
    });
    app.appendChild(v);
  }

  // ======================================================================
  // ЗВУКИ И IPA
  // ======================================================================
  function viewSounds() {
    var v = h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Звуки и IPA"]), h("p", { class: "lead" }, ["IPA — международный фонетический алфавит. Транскрипция показывает, как слово звучит: в английском написание и произношение часто расходятся. Нажмите на звук, чтобы услышать слово-пример."])]);
    var acc = h("div", { class: "row", style: "margin:0 4px 14px" }, [h("span", { class: "muted" }, ["Произношение примеров:"]),
      h("button", { class: "btn sm " + (settings.accent === "uk" ? "" : "ghost"), type: "button", onclick: function () { settings.accent = "uk"; saveAll(); app.innerHTML = ""; viewSounds(); } }, ["🇬🇧 UK"]),
      h("button", { class: "btn sm " + (settings.accent === "us" ? "" : "ghost"), type: "button", onclick: function () { settings.accent = "us"; saveAll(); app.innerHTML = ""; viewSounds(); } }, ["🇺🇸 US"])]);
    v.appendChild(acc);
    EN.sounds.forEach(function (grp) {
      v.appendChild(h("h2", { class: "h2" }, [grp.t]));
      if (grp.note) v.appendChild(h("p", { class: "note" }, [grp.note]));
      var g = h("div", { class: "sound-grid" });
      grp.items.forEach(function (it) {
        g.appendChild(h("button", { class: "pbox sound", type: "button", "aria-label": "Звук " + it[0] + ", пример " + it[1], onclick: function () { speak(it[1]); } }, [
          h("span", { class: "s ipa" }, [it[0]]), h("span", { class: "k", lang: "en" }, ["▶ " + it[1]]), h("span", { class: "r" }, [it[2]])
        ]));
      });
      v.appendChild(g);
    });
    EN.soundTopics.forEach(function (t) {
      var sec = h("section", { class: "pbox light" }, [h("h2", { class: "h2", style: "color:#1a9c88" }, [t.t]), h("div", { class: "rule", html: t.html })]);
      sec.querySelectorAll("[data-say]").forEach(function (b) { b.addEventListener("click", function () { speak(b.getAttribute("data-say"), b.getAttribute("data-acc") || null); }); });
      v.appendChild(sec);
    });
    app.appendChild(v);
  }

  // ======================================================================
  // АУДИРОВАНИЕ
  // ======================================================================
  function viewListen() {
    var v = h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Аудирование"]), h("p", { class: "lead" }, ["Все диалоги курса. Сначала слушайте без текста и отвечайте на вопросы, потом откройте текст и перевод."])]);
    if (!synth) v.appendChild(h("p", { class: "warn" }, ["В этом браузере нет озвучки. Откройте сайт в Chrome, Edge или Safari."]));
    LESSONS.forEach(function (L) {
      v.appendChild(h("section", { class: "pbox" }, [
        h("p", { class: "q-kicker" }, ["Уровень " + L.id + " · " + L.topic]),
        h("h2", { class: "h2" }, [L.d.t]),
        h("div", { class: "row" }, [
          h("button", { class: "btn teal", type: "button", onclick: function () { speakLines(L.d.l); } }, ["▶ Слушать"]),
          h("button", { class: "btn", type: "button", onclick: function () {
            var st = [{ k: "dialog", kicker: "Аудирование", title: L.d.t, lines: L.d.l, hideText: true }];
            L.d.q.forEach(function (q) { var o = q[1].split("|"), right = o[q[2]], sh = shuffle(o); st.push({ k: "choice", kicker: "Вопрос по диалогу", q: q[0], opts: sh, a: sh.indexOf(right), replay: L.d.l, why: q[3] || "" }); });
            st.push({ k: "dialog", kicker: "Текст диалога", title: L.d.t, lines: L.d.l, hideText: false });
            startTrain("Аудирование: " + L.d.t, st, "#listen");
          } }, ["🎧 С вопросами (" + L.d.q.length + ")"])
        ])
      ]));
    });
    app.appendChild(v);
  }

  // ======================================================================
  // ТРЕНИРОВКА
  // ======================================================================
  function viewPractice() {
    var v = h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Тренировка"]), h("p", { class: "lead" }, ["Повторяйте изученное: смешанные задания, работа над ошибками и предложения из пройденных уровней. Тренировка не влияет на звёзды, но даёт XP."])]);
    var passedL = LESSONS.filter(function (L) { return prog.passed[L.id] || prog.blocksDone[L.id + ":words"]; });
    if (!passedL.length) { v.appendChild(h("section", { class: "pbox" }, [h("p", {}, ["Здесь пока пусто: начните первый уровень, и задания для повторения появятся."]), h("a", { class: "btn", href: "#level-1" }, ["► Уровень 1"])])); app.appendChild(v); return; }
    var maxL = passedL[passedL.length - 1];
    var ws = ALLW.filter(function (w) { return srs[w.en]; });
    var missW = ALLW.filter(function (w) { return miss["w:" + w.en] > 0; }).sort(function (a, b) { return miss["w:" + b.en] - miss["w:" + a.en]; });
    var missG = [];
    LESSONS.forEach(function (L) { L.g.tasks.forEach(function (t) { var x = gramTask(t, L); if (x && miss["g:" + x.gkey] > 0) missG.push(x); }); });
    function card(title, text, n, fn) { return h("section", { class: "pbox" }, [h("h2", { class: "h2" }, [title]), h("p", {}, [text]), h("button", { class: "btn", type: "button", disabled: !n, onclick: fn }, [n ? "► Начать" : "Пока нет заданий"])]); }
    v.appendChild(h("div", { class: "grid2" }, [
      card("⚔ Смешанная", "12 заданий: слова, грамматика и предложения из пройденного.", ws.length, function () {
        var steps = wordTasks(pick(ws, 6), maxL);
        passedL.forEach(function (L) { L.g.tasks.forEach(function (t) { steps.push(gramTask(t, L)); }); });
        var sents = []; passedL.forEach(function (L) { sents = sents.concat(sentenceTasks(L)); });
        steps = wordTasks(pick(ws, 6), maxL).concat(pick(steps.slice(6), 4), pick(sents, 2));
        startTrain("Смешанная тренировка", shuffle(steps));
      }),
      card("🩹 Работа над ошибками", "Слова и правила, в которых вы ошибались. Правильный ответ уменьшает счётчик ошибки.", missW.length + missG.length, function () {
        startTrain("Работа над ошибками", shuffle(wordTasks(missW.slice(0, 8), maxL).concat(pick(missG, 6))));
      }),
      card("🔊 На слух", "Слушайте слова и фразы и выбирайте или записывайте услышанное.", ws.length, function () {
        var steps = pick(ws, 8).map(function (w) { return choiceFromWords(w, "en", ws.length >= 4 ? ws : ALLW, { kicker: "Послушайте и выберите", q: "🔊", listen: w.en }); });
        var sents = []; passedL.forEach(function (L) { L.s.forEach(function (s) { sents.push({ k: "type", kicker: "Диктант", q: "🔊", listen: s[0], answers: [s[0]].concat(s[2] ? s[2].split("|") : []), why: s[0] + " — " + s[1] }); }); });
        startTrain("На слух", shuffle(steps.concat(pick(sents, 3))));
      }),
      card("🧱 Предложения", "Составление и перевод предложений из пройденных уровней.", passedL.length, function () {
        var sents = []; passedL.forEach(function (L) { sents = sents.concat(sentenceTasks(L)); });
        startTrain("Предложения", pick(sents, 8));
      })
    ]));
    app.appendChild(v);
  }

  // ======================================================================
  // ПРОФИЛЬ
  // ======================================================================
  function viewProfile() {
    var p = LDC.profile();
    var v = h("div", { class: "view" }, [h("h1", { class: "h1" }, ["Профиль и настройки"])]);
    var name = h("input", { class: "inp", type: "text", maxlength: "40", value: p.name || "", placeholder: "Например: Айдар", id: "pfName" });
    var accSel = h("select", { class: "inp", id: "pfAcc" }, [h("option", { value: "uk" }, ["🇬🇧 Британский (UK)"]), h("option", { value: "us" }, ["🇺🇸 Американский (US)"])]);
    accSel.value = settings.accent;
    var rate = h("input", { type: "range", min: "0.6", max: "1.2", step: "0.05", value: String(settings.rate), id: "pfRate", style: "width:100%" });
    var rateLbl = h("span", { class: "chip" }, [String(settings.rate)]);
    rate.addEventListener("input", function () { rateLbl.textContent = rate.value; });
    var out = h("p", { class: "note", "aria-live": "polite" });
    var vn = h("p", { class: "note" });
    function voiceNote() { loadVoices(); vn.textContent = !synth ? "Озвучки в этом браузере нет." : (hasEnVoice("uk") ? "Британский голос: есть. " : "Британского голоса нет — будет использован другой английский. ") + (hasEnVoice("us") ? "Американский голос: есть." : "Американского голоса нет."); }
    voiceNote(); setTimeout(voiceNote, 800);
    v.appendChild(h("section", { class: "pbox" }, [
      h("h2", { class: "h2" }, ["Игрок"]),
      h("label", { for: "pfName" }, ["Имя (общее для всей платформы)"]), name,
      h("label", { for: "pfAcc" }, ["Произношение по умолчанию"]), accSel, vn,
      h("label", { for: "pfRate" }, ["Скорость озвучки "]), rateLbl, rate,
      h("div", { class: "row", style: "margin-top:10px" }, [
        h("button", { class: "btn", type: "button", onclick: function () { LDC.setProfile({ name: name.value.trim() }); settings.accent = accSel.value; settings.rate = +rate.value; saveAll(); out.textContent = "Сохранено."; } }, ["Сохранить"]),
        h("button", { class: "btn teal", type: "button", onclick: function () { var r0 = settings.rate; settings.rate = +rate.value; speak("Hello! Nice to meet you.", accSel.value); settings.rate = r0; } }, ["▶ Проверить голос"])
      ]), out
    ]));
    // резервная копия
    var code = h("textarea", { class: "inp", rows: "4", readonly: true, "aria-label": "Код резервной копии" });
    var imp = h("textarea", { class: "inp", rows: "3", placeholder: "Вставьте код резервной копии", "aria-label": "Вставить код" });
    var out2 = h("p", { class: "note", "aria-live": "polite" });
    v.appendChild(h("section", { class: "pbox" }, [
      h("h2", { class: "h2" }, ["Резервная копия"]),
      h("p", { class: "muted" }, ["Прогресс хранится только в этом браузере, отдельно от казахского курса. Чтобы перенести его на другое устройство, скопируйте код и вставьте его там."]),
      h("div", { class: "row" }, [h("button", { class: "btn", type: "button", onclick: function () {
        code.value = btoa(unescape(encodeURIComponent(JSON.stringify({ v: 1, prog: prog, srs: srs, settings: settings, miss: miss }))));
        code.select();
        if (navigator.clipboard) navigator.clipboard.writeText(code.value).then(function () { out2.textContent = "Код скопирован."; }, function () { out2.textContent = "Скопируйте код вручную."; });
      } }, ["Создать код"])]), code,
      imp,
      h("div", { class: "row" }, [h("button", { class: "btn teal", type: "button", onclick: function () {
        try {
          var d = JSON.parse(decodeURIComponent(escape(atob(imp.value.trim()))));
          if (!d || d.v !== 1 || !d.prog) throw 0;
          prog = Object.assign({ done: 0, passed: {}, xp: 0, streak: 0, lastDay: 0, resume: {}, blocksDone: {} }, d.prog); srs = d.srs || {}; settings = Object.assign(settings, d.settings || {}); miss = d.miss || {};
          saveAll(); out2.textContent = "Прогресс восстановлен.";
        } catch (e) { out2.textContent = "Код не подошёл. Проверьте, что он скопирован целиком."; }
      } }, ["Восстановить"])]), out2
    ]));
    // сброс — с подтверждением внутри страницы
    var resetBox = h("div", {});
    var resetBtn = h("button", { class: "btn red", type: "button", onclick: function () {
      resetBox.innerHTML = "";
      resetBox.appendChild(h("p", { class: "warn" }, ["Удалить весь прогресс английского курса? Казахский курс не затронется."]));
      resetBox.appendChild(h("div", { class: "row" }, [
        h("button", { class: "btn red", type: "button", onclick: function () { prog = { done: 0, passed: {}, xp: 0, streak: 0, lastDay: 0, resume: {}, blocksDone: {} }; srs = {}; miss = {}; saveAll(); resetBox.innerHTML = ""; resetBox.appendChild(h("p", { class: "note" }, ["Прогресс сброшен."])); } }, ["Да, сбросить"]),
        h("button", { class: "btn ghost", type: "button", onclick: function () { resetBox.innerHTML = ""; } }, ["Отмена"])
      ]));
    } }, ["Сбросить прогресс"]);
    v.appendChild(h("section", { class: "pbox" }, [h("h2", { class: "h2" }, ["Сброс"]), resetBtn, resetBox]));
    app.appendChild(v);
  }

  // ======================================================================
  // О КУРСЕ
  // ======================================================================
  function viewAbout() {
    app.appendChild(h("div", { class: "view" }, [h("h1", { class: "h1" }, ["О курсе"]), h("section", { class: "pbox light" }, [h("div", { class: "rule", html: EN.about })])]));
  }

  // ---------- старт ----------
  hud();
  route();
  if (LDC.arrive) LDC.arrive();
  // для автотестов
  window.__EN = { cur: function () { return S && S.queue[S.pos]; }, LESSONS: LESSONS, ALLW: ALLW, norm: norm, checkTyped: checkTyped, levelSession: levelSession, gramTask: gramTask };
})();
