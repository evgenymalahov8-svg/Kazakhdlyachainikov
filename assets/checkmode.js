/* Режим проверки: все уроки, ДЗ и тесты открыты без прохождения по порядку.
   Включается переключателем в профиле или ссылкой с ?check=1 (выключить — ?check=0). Прогресс при этом не портится. */
(function () {
  var KEY = "ldc_open_all";
  function get() { try { return localStorage.getItem(KEY) === "1"; } catch (e) { return false; } }
  function set(v) { try { if (v) localStorage.setItem(KEY, "1"); else localStorage.removeItem(KEY); } catch (e) {} }
  try {
    var m = /[?&]check=([01])/.exec(location.search);
    if (m) { set(m[1] === "1"); history.replaceState(null, "", location.pathname + location.hash); }
  } catch (e) {}
  function banner() {
    if (!get() || document.getElementById("ldcCheck")) return;
    var b = document.createElement("div"); b.id = "ldcCheck"; b.className = "ldc-check";
    b.innerHTML = "<span><b>Режим проверки:</b> все уроки открыты</span>";
    var x = document.createElement("button"); x.type = "button"; x.textContent = "Выключить";
    x.addEventListener("click", function () { set(false); location.reload(); });
    b.appendChild(x); document.body.insertBefore(b, document.body.firstChild);
  }
  function card(box, cls) {
    var c = document.createElement("div"); c.className = cls || "card";
    var on = get();
    c.innerHTML = "<h3>Режим проверки</h3><p class='muted'>Открывает все дни и уровни, домашние задания и тесты в обоих курсах — удобно, чтобы проверить материалы. Ваш прогресс не меняется: пройденным считается только то, что вы прошли по порядку.</p>";
    var row = document.createElement("div"); row.className = "row";
    var btn = document.createElement("button"); btn.type = "button"; btn.className = "btn " + (on ? "" : "primary");
    btn.textContent = on ? "Выключить режим проверки" : "Открыть все уроки";
    btn.addEventListener("click", function () { set(!get()); location.reload(); });
    row.appendChild(btn); c.appendChild(row);
    c.appendChild(Object.assign(document.createElement("p"), { className: "notice-small", textContent: on ? "Сейчас включён: все уроки открыты." : "Сейчас выключен." }));
    box.appendChild(c); return c;
  }
  window.LDCCheck = { on: get, set: set, card: card };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", banner); else banner();
  var st = document.createElement("style");
  st.textContent = ".ldc-check{position:sticky;top:0;z-index:40;display:flex;flex-wrap:wrap;gap:8px 14px;align-items:center;justify-content:center;padding:7px 12px;background:#ffd23f;color:#111;border-bottom:3px solid #111;font:600 14px/1.3 system-ui,sans-serif}.ldc-check button{font:700 13px system-ui,sans-serif;background:#111;color:#fff;border:0;padding:5px 10px;cursor:pointer}";
  (document.head || document.documentElement).appendChild(st);
})();
