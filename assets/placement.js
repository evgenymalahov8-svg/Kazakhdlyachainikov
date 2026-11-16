/* Входной тест «Языки для чайников»: общий движок для всех курсов.
   Вопрос банка: [навык v|g|r|l, этап, вариант 0|1, вопрос (HTML), "верный|неверный|…", тема, текст для озвучки (для l)].
   Тест адаптивный: этапы от простого к сложному, при слабом результате тест останавливается.
   Итог — по навыкам, без «точного общего уровня» (устная речь не проверяется). */
(function () {
  var SK = { v: "Словарный запас", g: "Грамматика", r: "Чтение", l: "Аудирование" };
  var ORDER = ["v", "g", "r", "l"];
  function el(t, c, h) { var e = document.createElement(t); if (c) e.className = c; if (h != null) e.innerHTML = h; return e; }
  function btn(txt, cls, fn) { var b = el("button", "btn " + (cls || ""), txt); b.type = "button"; if (fn) b.addEventListener("click", fn); return b; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function load(k) { try { return JSON.parse(localStorage.getItem(k)) || null; } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }

  function mount(box, cfg) {
    var KEY = cfg.storeKey, data = load(KEY) || { attempts: [] }, S = null;
    var last = data.attempts[data.attempts.length - 1];
    function top() { box.innerHTML = ""; box.scrollIntoView && window.scrollTo(0, 0); }
    function head(t, lead) { var h = el("h1", "h-pixel"); h.appendChild(el("span", "gold", t)); box.appendChild(h); if (lead) box.appendChild(el("p", "muted", lead)); }

    function intro() {
      top(); head("Входной тест", "Узнайте, с какого урока начать. 15–20 минут: словарь, грамматика, чтение и аудирование. Задания идут от простого к сложному — если станет трудно, тест закончится сам.");
      var c = el("div", "card pl-card");
      c.appendChild(el("p", null, "<b>Как это устроено</b>"));
      c.appendChild(el("ul", "pl-list", "<li>Не угадывайте: если не знаете ответ, нажмите «Не знаю».</li><li>Новичку не нужно проходить весь тест — он остановится на вашем уровне.</li><li>В конце — уровень по каждому навыку, сильные стороны, пробелы и урок, с которого лучше начать.</li><li>Устную речь тест не проверяет, поэтому общий уровень — только ориентир.</li>" + (cfg.ttsNote ? "<li>" + cfg.ttsNote + "</li>" : "")));
      var r = el("div", "row pl-row");
      r.appendChild(btn(last ? "► Повторная проверка (другие задания)" : "► Начать тест", "primary", start));
      r.appendChild(btn("Я совсем с нуля — к уроку 1", "", function () { data.zero = true; save(KEY, data); cfg.goLesson(1); }));
      c.appendChild(r); box.appendChild(c);
      if (last) { box.appendChild(el("h2", "pl-h2", "Последний результат")); box.appendChild(resultCard(last, data.attempts[data.attempts.length - 2])); }
    }

    function start() {
      var form = data.attempts.length % 2;
      S = { form: form, stage: 0, items: [], pos: 0, ans: [] };
      loadStage(); step();
    }
    function loadStage() {
      var pool = cfg.bank.filter(function (q) { return q[1] === S.stage && q[2] === S.form; });
      if (!pool.length) pool = cfg.bank.filter(function (q) { return q[1] === S.stage; });
      S.items = []; ORDER.forEach(function (s) { S.items = S.items.concat(shuffle(pool.filter(function (q) { return q[0] === s; }))); });
      S.pos = 0;
    }
    function step() {
      if (S.pos >= S.items.length) return endStage();
      top();
      var q = S.items[S.pos], st = cfg.stages[S.stage];
      var hd = el("div", "pl-top");
      hd.appendChild(btn("✕", "small pl-x", function () { if (confirm("Выйти из теста? Ответы этой попытки не сохранятся.")) intro(); }));
      var bar = el("div", "pl-bar"), fill = el("i"); fill.style.width = Math.round(S.pos / S.items.length * 100) + "%"; bar.appendChild(fill); hd.appendChild(bar);
      hd.appendChild(el("span", "pl-count", "Этап " + (S.stage + 1) + " из " + cfg.stages.length));
      box.appendChild(hd);
      var c = el("div", "card pl-card");
      c.appendChild(el("p", "pl-skill", SK[q[0]] + " · " + st.name));
      if (q[0] === "l") {
        c.appendChild(el("p", "pl-q", "Послушайте и выберите, что прозвучало."));
        var pb = btn("▶ Послушать", "small", function () { cfg.speak(q[6], pb); }); c.appendChild(pb);
        setTimeout(function () { cfg.speak(q[6]); }, 350);
        if (q[3]) c.appendChild(el("p", "pl-q", q[3]));
      } else c.appendChild(el("div", "pl-q", q[3]));
      var opts = q[4].split("|"), right = opts[0], g = el("div", "pl-opts");
      shuffle(opts).forEach(function (o) { g.appendChild(btn(o, "pl-opt", function () { answer(o === right ? 1 : 0); })); });
      c.appendChild(g);
      c.appendChild(btn("Не знаю", "small pl-dk", function () { answer(-1); }));
      box.appendChild(c);
    }
    function answer(v) { var q = S.items[S.pos]; S.ans.push({ s: q[0], st: S.stage, ok: v === 1 ? 1 : 0, dk: v === -1 ? 1 : 0, t: q[5] }); S.pos++; step(); }
    function stageScore(st) { var a = S.ans.filter(function (x) { return x.st === st; }); return a.length ? a.filter(function (x) { return x.ok; }).length / a.length : 0; }
    function endStage() {
      var sc = stageScore(S.stage);
      if (sc >= 0.6 && S.stage < cfg.stages.length - 1) {
        S.stage++; loadStage();
        top(); var c = el("div", "card pl-card pl-mid");
        c.appendChild(el("h2", null, "Этап " + S.stage + " пройден"));
        c.appendChild(el("p", null, "Дальше задания сложнее: «" + cfg.stages[S.stage].name + "». Можно остановиться и посмотреть результат."));
        var r = el("div", "row pl-row"); r.appendChild(btn("► Дальше", "primary", step)); r.appendChild(btn("Закончить и посмотреть результат", "", finish)); c.appendChild(r); box.appendChild(c);
        return;
      }
      finish();
    }
    function finish() {
      var stages = cfg.stages, res = { date: Date.now(), form: S.form, skills: {}, passed: 0, gaps: [], dk: 0 };
      for (var i = 0; i < stages.length; i++) { var a = S.ans.filter(function (x) { return x.st === i; }); if (a.length && stageScore(i) >= 0.7) res.passed = i + 1; else break; }
      ORDER.forEach(function (s) {
        var lv = 0;
        for (var i = 0; i < stages.length; i++) {
          var a = S.ans.filter(function (x) { return x.st === i && x.s === s; });
          if (!a.length || a.filter(function (x) { return x.ok; }).length / a.length < 0.5) break; lv = i + 1;
        }
        res.skills[s] = lv;
      });
      var seen = {}; S.ans.forEach(function (x) { if (!x.ok && !seen[x.t]) { seen[x.t] = 1; res.gaps.push(x.t); } if (x.dk) res.dk++; });
      res.rec = res.passed >= stages.length ? stages[stages.length - 1].to + 1 : stages[res.passed].from;
      res.rec = Math.min(res.rec, cfg.total);
      data.attempts.push(res); save(KEY, data); last = res;
      top(); head("Ваш результат", "Это ориентир, а не сертификат: тест не проверяет устную речь.");
      box.appendChild(resultCard(res, data.attempts[data.attempts.length - 2], true));
    }
    function lvName(n) { return n === 0 ? cfg.zeroLabel : cfg.stages[n - 1].label; }
    function resultCard(res, prev, actions) {
      var c = el("div", "card pl-card");
      var t = el("table", "pl-table"); t.innerHTML = "<tr><th>Навык</th><th>Уровень</th>" + (prev ? "<th>Было</th>" : "") + "</tr>";
      ORDER.forEach(function (s) { t.innerHTML += "<tr><td>" + SK[s] + "</td><td><b>" + lvName(res.skills[s]) + "</b></td>" + (prev ? "<td>" + lvName(prev.skills[s]) + "</td>" : "") + "</tr>"; });
      c.appendChild(t);
      var vals = ORDER.map(function (s) { return res.skills[s]; }), mx = Math.max.apply(null, vals), mn = Math.min.apply(null, vals);
      c.appendChild(el("p", null, "<b>Примерный уровень по тесту:</b> " + lvName(res.passed) + (mx !== mn ? " (навыки различаются)" : "") + "."));
      if (mx > 0) c.appendChild(el("p", null, "<b>Сильные стороны:</b> " + ORDER.filter(function (s) { return res.skills[s] === mx; }).map(function (s) { return SK[s].toLowerCase(); }).join(", ") + "."));
      if (mx !== mn || mx === 0) c.appendChild(el("p", null, "<b>Над чем поработать:</b> " + ORDER.filter(function (s) { return res.skills[s] === mn; }).map(function (s) { return SK[s].toLowerCase(); }).join(", ") + "."));
      if (res.gaps.length) c.appendChild(el("p", "notice-small", "Темы с ошибками: " + res.gaps.slice(0, 8).join(", ") + "."));
      if (res.dk) c.appendChild(el("p", "notice-small", "Ответов «Не знаю»: " + res.dk + ". Это честнее, чем угадывать, — так рекомендация точнее."));
      var rec = res.rec;
      c.appendChild(el("p", "pl-rec", rec <= 1 ? "Рекомендуем начать с <b>урока 1</b>." : "Рекомендуем начать с <b>урока " + rec + "</b>" + (mn < res.passed ? ", а слабый навык подтянуть повторением ранних уроков" : "") + "."));
      if (actions) {
        var r = el("div", "row pl-row");
        if (rec > cfg.done() + 1) { r.appendChild(btn("► Проверить базу и начать с урока " + rec, "primary", function () { skipCheck(rec); })); r.appendChild(btn("Начать с урока 1", "", function () { cfg.goLesson(1); })); }
        else r.appendChild(btn("► К уроку " + Math.max(cfg.done() + 1, 1), "primary", function () { cfg.goLesson(Math.max(cfg.done() + 1, 1)); }));
        r.appendChild(btn("Пройти ещё раз позже", "", intro));
        c.appendChild(r);
      }
      return c;
    }

    // Короткая проверка ключевых навыков пропускаемых уроков
    function skipCheck(rec) {
      var items = cfg.skipItems(rec), k = 0, ok = 0, miss = [];
      function show() {
        top();
        if (k >= items.length) {
          var pass = ok / items.length >= 0.75, c = el("div", "card pl-card");
          head("Проверка базы", null);
          c.appendChild(el("p", null, "Верно: <b>" + ok + " из " + items.length + "</b>."));
          if (pass) {
            c.appendChild(el("p", null, "База на месте. Уроки 1–" + (rec - 1) + " отмечены как пройденные, их можно открыть и повторить в любой момент."));
            var r = el("div", "row pl-row"); r.appendChild(btn("► Начать урок " + rec, "primary", function () { cfg.skipTo(rec); cfg.goLesson(rec); })); c.appendChild(r);
          } else {
            var back = cfg.stages.filter(function (s) { return s.to < rec; }).map(function (s) { return s.from; }).pop() || 1;
            c.appendChild(el("p", null, "Есть пробелы в базе" + (miss.length ? ": " + miss.slice(0, 6).join(", ") : "") + ". Лучше не пропускать эти уроки."));
            var r2 = el("div", "row pl-row");
            if (back > 1 && back < rec) r2.appendChild(btn("► Начать с урока " + back, "primary", function () { cfg.skipTo(back); cfg.goLesson(back); }));
            r2.appendChild(btn((back > 1 && back < rec) ? "Начать с урока 1" : "► Начать с урока 1", back > 1 && back < rec ? "" : "primary", function () { cfg.goLesson(1); }));
            c.appendChild(r2);
          }
          box.appendChild(c); return;
        }
        var q = items[k], c2 = el("div", "card pl-card");
        var hd = el("div", "pl-top"), bar = el("div", "pl-bar"), f = el("i"); f.style.width = Math.round(k / items.length * 100) + "%"; bar.appendChild(f); hd.appendChild(bar); hd.appendChild(el("span", "pl-count", "Проверка базы " + (k + 1) + "/" + items.length)); box.appendChild(hd);
        c2.appendChild(el("p", "pl-skill", "Ключевое из уроков 1–" + (rec - 1)));
        c2.appendChild(el("div", "pl-q", q.q));
        var g = el("div", "pl-opts");
        shuffle(q.o).forEach(function (o) { g.appendChild(btn(o, "pl-opt", function () { if (o === q.o[0]) ok++; else miss.push(q.t); k++; show(); })); });
        c2.appendChild(g); c2.appendChild(btn("Не знаю", "small pl-dk", function () { miss.push(q.t); k++; show(); }));
        box.appendChild(c2);
      }
      show();
    }
    intro();
  }
  window.LDCPlace = { mount: mount, shuffle: shuffle };
})();
