/* Английский для чайников — данные курса, часть 2: уровни 11–20. Формат — см. data1.js. */
(function (EN) {
  var say = EN.say, A = EN.lessons;

  A.push({ id: 11, world: 2, en: "Do you like music?", ru: "Present Simple: вопросы и отрицания", topic: "Хобби",
    goal: "Рассказать о хобби, спросить «Ты любишь…?» и ответить, используя do / does.",
    w: [
      ["like", "laɪk", "", "нравиться, любить", "I like music.", "Я люблю музыку."],
      ["music", "ˈmjuːzɪk", "", "музыка", "What music do you like?", "Какую музыку ты любишь?"],
      ["read", "riːd", "", "читать", "I read every evening.", "Я читаю каждый вечер."],
      ["play", "pleɪ", "", "играть", "Do you play football?", "Ты играешь в футбол?"],
      ["football", "ˈfʊtbɔːl", "", "футбол (в США — soccer)", "He plays football on Sundays.", "Он играет в футбол по воскресеньям."],
      ["film", "fɪlm", "", "фильм (в США чаще movie)", "This film is very funny.", "Этот фильм очень смешной."],
      ["swim", "swɪm", "", "плавать", "I swim every Saturday.", "Я плаваю каждую субботу."],
      ["dance", "dɑːns", "dæns", "танцевать; танец", "She doesn't dance.", "Она не танцует."],
      ["draw", "drɔː", "", "рисовать (карандашом)", "My sister draws very well.", "Моя сестра очень хорошо рисует."],
      ["free time", "ˌfriː ˈtaɪm", "", "свободное время", "What do you do in your free time?", "Что ты делаешь в свободное время?"]
    ],
    p: { t: "Интонация вопросов «да/нет»", ipa: "↗",
      html: "<p>В вопросах, на которые отвечают «да» или «нет», голос <b>поднимается</b> в конце: <i>Do you like music↗?</i> В коротком ответе — опускается: <i>Yes, I do↘.</i></p>" +
        "<div class='why'><b>Почему важно:</b> в английском вопрос показывают и порядком слов, и интонацией. Ровный тон звучит как утверждение или как незаинтересованность.</div>" +
        "<p>" + say("Do you like music?") + " " + say("Does she play football?") + " " + say("Yes, I do.") + "</p>",
      ukus: "интонация похожая. Различаются слова: британский <b>football</b> — американский <b>soccer</b>, <b>film</b> — <b>movie</b>. dance: UK /dɑːns/, US /dæns/. " + say("dance", "uk") + " " + say("dance", "us"),
      pairs: [], drill: ["Do you like music?", "Does she dance?", "Yes, I do.", "No, he doesn't."] },
    g: { t: "do / does: вопросы и «не»",
      html: "<p>В Present Simple для вопросов и отрицаний нужен <b>вспомогательный глагол</b> do / does. Основной глагол остаётся в словарной форме.</p>" +
        "<table><tr><th></th><th>I, you, we, they</th><th>he, she, it</th></tr><tr><td>Вопрос</td><td><b>Do</b> you like tea?</td><td><b>Does</b> she like tea?</td></tr><tr><td>Отрицание</td><td>I <b>don't</b> like tea.</td><td>She <b>doesn't</b> like tea.</td></tr><tr><td>Краткий ответ</td><td>Yes, I do. / No, I don't.</td><td>Yes, she does. / No, she doesn't.</td></tr></table>" +
        "<div class='why'><b>Почему «Does she like», а не «Does she likes»?</b> Окончание -s показывает «он/она» только один раз. Когда появляется <b>does</b> (do + es), -s уже «забрал» помощник, и основной глагол возвращается к словарной форме.</div>" +
        "<div class='why'><b>Почему нельзя «Like you music?»</b> Переставлять местами можно только вспомогательные глаголы (am/is/are, can, do). Обычный глагол сам на первое место не встаёт, поэтому ему нужен помощник do.</div>" +
        "<p class='brk'>don't = do not, doesn't = does not.</p>",
      tasks: [
        ["c", "___ you like music?", "Do|Does|Are", 0, "you → <b>do</b>."],
        ["c", "___ your sister play football?", "Does|Do|Is", 0, "your sister = she → <b>does</b>."],
        ["c", "She doesn't ___ fish.", "like|likes|liking", 0, "После doesn't — словарная форма: -s уже в does."],
        ["c", "— Do they dance? — Yes, they ___.", "do|does|are", 0, "they → <b>do</b>."],
        ["c", "I ___ like horror films.", "don't|doesn't|not", 0, "I → <b>don't</b>."],
        ["c", "Does he ___ English?", "speak|speaks|speaking", 0, "После does — <b>speak</b> без -s."],
        ["c", "What ___ you do in your free time?", "do|are|does", 0, "Вопросительное слово + <b>do</b> + you + глагол."],
        ["t", "Ты любишь читать?", "Do you like reading?|Do you like to read?", "Do you like + reading / to read."],
        ["t", "Он не играет в футбол.", "He doesn't play football.|He does not play football.|He doesn't play soccer.|He does not play soccer.", "he → doesn't + play."],
        ["b", "What do you do in your free time?", "Что ты делаешь в свободное время?", "What + do + you + do."]
      ] },
    d: { t: "Свободное время",
      l: [["A", "What do you do in your free time?", "Что ты делаешь в свободное время?"], ["B", "I read books and I play computer games.", "Читаю книги и играю в компьютерные игры."], ["A", "Do you like sport?", "Ты любишь спорт?"],
        ["B", "Yes, I do. I swim every Saturday. And you?", "Да. Я плаваю каждую субботу. А ты?"], ["A", "I don't like swimming. I dance.", "Я не люблю плавать. Я танцую."], ["B", "Does your brother dance too?", "Твой брат тоже танцует?"], ["A", "No, he doesn't. He plays football.", "Нет. Он играет в футбол."]],
      q: [["Что B делает в свободное время?", "Читает и играет в компьютерные игры|Танцует|Готовит", 0, ""], ["Когда B плавает?", "По субботам|Каждый день|По воскресеньям", 0, "I swim every Saturday."], ["Чем занимается брат A?", "Футболом|Танцами|Плаванием", 0, "He plays football."]] },
    s: [["Do you like music?", "Ты любишь музыку?"], ["She doesn't like football.", "Она не любит футбол.", "She does not like football.|She doesn't like soccer.|She does not like soccer."], ["Does he play the guitar?", "Он играет на гитаре?"]]
  });

  A.push({ id: 12, world: 2, en: "What time is it?", ru: "Время и наречия частоты", topic: "Время и дни",
    goal: "Называть время и дни недели, говорить, как часто что-то делаете: always, usually, never.",
    w: [
      ["Monday", "ˈmʌndeɪ", "", "понедельник", "I have English on Monday.", "У меня английский в понедельник."],
      ["Friday", "ˈfraɪdeɪ", "", "пятница", "See you on Friday!", "Увидимся в пятницу!"],
      ["weekend", "ˌwiːkˈend", "ˈwiːkend", "выходные", "What do you do at the weekend?", "Что ты делаешь на выходных?"],
      ["morning", "ˈmɔːnɪŋ", "ˈmɔːrnɪŋ", "утро", "I drink coffee in the morning.", "Утром я пью кофе."],
      ["evening", "ˈiːvnɪŋ", "", "вечер", "We watch TV in the evening.", "Вечером мы смотрим телевизор."],
      ["o'clock", "əˈklɒk", "əˈklɑːk", "ровно (о часах)", "It's three o'clock.", "Сейчас ровно три."],
      ["half", "hɑːf", "hæf", "половина", "It's half past seven.", "Половина восьмого."],
      ["always", "ˈɔːlweɪz", "", "всегда", "She always smiles.", "Она всегда улыбается."],
      ["usually", "ˈjuːʒuəli", "", "обычно", "I usually walk to work.", "Я обычно хожу на работу пешком."],
      ["never", "ˈnevə", "ˈnevər", "никогда", "He is never late.", "Он никогда не опаздывает."]
    ],
    p: { t: "Звуки /ɒ/ и /ɔː/", ipa: "/ɒ/ /ɔː/",
      html: "<p><b>/ɒ/</b> — короткое «о» с округлёнными губами и широко открытым ртом: <b>clock, hot, shop</b>. <b>/ɔː/</b> — долгое глубокое «о»: <b>short, door, always, morning</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>shot</b> (выстрел) — <b>short</b> (короткий), <b>pot</b> (кастрюля) — <b>port</b> (порт). Различаются только долготой.</div>",
      ukus: "звука /ɒ/ в американском нет: clock там звучит как «клак» /klɑːk/, hot — как «хат». " + say("clock", "uk") + " " + say("clock", "us"),
      pairs: [["shot", "short"], ["pot", "port"], ["cod", "cord"]], drill: ["clock", "o'clock", "morning", "always", "short", "hot"] },
    g: { t: "Который час и как часто",
      html: "<h3>Время</h3><table><tr><th>Время</th><th>Британский вариант</th><th>Универсально</th></tr><tr><td>7:00</td><td>seven o'clock</td><td>seven</td></tr><tr><td>7:15</td><td>quarter past seven</td><td>seven fifteen</td></tr><tr><td>7:30</td><td>half past seven</td><td>seven thirty</td></tr><tr><td>7:45</td><td>quarter to eight</td><td>seven forty-five</td></tr></table>" +
        "<p>Вопрос: <b>What time is it?</b> / <b>What's the time?</b> Ответ: <b>It's</b> half past seven. Во сколько: <b>at</b> seven, <b>on</b> Monday.</p>" +
        "<div class='why'><b>Почему «half past seven» — это 7:30, а не 6:30?</b> По-русски «половина восьмого» — «половина пути к восьми». По-английски «половина после семи» — считают от прошедшего часа.</div>" +
        "<h3>Как часто: always, usually, often, sometimes, never</h3><p>Эти слова стоят <b>перед</b> обычным глаголом, но <b>после</b> am/is/are:</p><p>I <b>usually</b> get up at seven. — She <b>is</b> <b>never</b> late.</p>" +
        "<div class='why'><b>Почему по-разному?</b> Наречие «прилипает» к смысловому глаголу. В «She is never late» смысл несёт прилагательное late, а is — служебное слово, поэтому never идёт после него.</div>" +
        "<p class='brk'>never уже означает «не»: I never drink coffee. Двойное отрицание «I don't never» — ошибка.</p>",
      tasks: [
        ["c", "I ___ get up at six.", "always|am always|always am", 0, "Перед обычным глаголом: I <b>always</b> get up."],
        ["c", "She ___ late.", "is never|never is|never", 0, "После to be: she <b>is never</b> late."],
        ["c", "We go to the cinema ___ Friday.", "on|in|at", 0, "Дни недели — с <b>on</b>."],
        ["c", "The lesson starts ___ nine o'clock.", "at|on|in", 0, "Точное время — <b>at</b>."],
        ["c", "7:30 =", "half past seven|half seven past|half past eight", 0, "half past seven — «половина после семи»."],
        ["c", "Он обычно пьёт кофе. He ___ coffee.", "usually drinks|drinks usually|usually drink", 0, "usually перед глаголом, а у he глагол с -s."],
        ["c", "I ___ eat meat. (= никогда не ем)", "never|don't never|not never", 0, "never само означает «не»."],
        ["t", "Который час?", "What time is it?|What's the time?|What is the time?", "What time is it?"],
        ["t", "Я никогда не опаздываю.", "I am never late.|I'm never late.", "I am + never + late."],
        ["b", "We usually have dinner at seven.", "Мы обычно ужинаем в семь.", "usually перед have."]
      ] },
    d: { t: "Расписание",
      l: [["A", "What time is it?", "Который час?"], ["B", "It's half past eight.", "Половина девятого."], ["A", "Oh no! My lesson starts at nine.", "О нет! Мой урок начинается в девять."], ["B", "Do you have lessons every day?", "У тебя уроки каждый день?"],
        ["A", "No, only on Monday and Friday. At the weekend I usually sleep a lot.", "Нет, только в понедельник и пятницу. На выходных я обычно много сплю."], ["B", "Lucky you! I never sleep late.", "Везёт! Я никогда не сплю долго."]],
      q: [["Который час?", "8:30|9:00|7:30", 0, "half past eight"], ["Когда начинается урок?", "В девять|В восемь|В половине девятого", 0, "at nine"], ["По каким дням уроки у A?", "Понедельник и пятница|Каждый день|Выходные", 0, "only on Monday and Friday"]] },
    s: [["What time is it?", "Который час?", "What's the time?|What is the time?"], ["I always get up at seven.", "Я всегда встаю в семь.", "I always get up at 7."], ["She is never late.", "Она никогда не опаздывает.", "She's never late."]]
  });

  // ===================== МИР 3 =====================
  A.push({ id: 13, world: 3, en: "There is a sofa", ru: "There is / there are и предлоги места", topic: "Дом и комнаты",
    goal: "Описать квартиру: что где находится и что в ней есть.",
    w: [
      ["kitchen", "ˈkɪtʃɪn", "", "кухня", "We eat in the kitchen.", "Мы едим на кухне."],
      ["bathroom", "ˈbɑːθruːm", "ˈbæθruːm", "ванная", "The bathroom is small.", "Ванная маленькая."],
      ["bedroom", "ˈbedruːm", "", "спальня", "There are two bedrooms.", "Здесь две спальни."],
      ["house", "haʊs", "", "дом (здание)", "They live in a big house.", "Они живут в большом доме."],
      ["garden", "ˈɡɑːdn", "ˈɡɑːrdn", "сад, двор", "There is a garden behind the house.", "За домом есть сад."],
      ["sofa", "ˈsəʊfə", "ˈsoʊfə", "диван", "The cat is on the sofa.", "Кошка на диване."],
      ["fridge", "frɪdʒ", "", "холодильник", "The milk is in the fridge.", "Молоко в холодильнике."],
      ["on", "ɒn", "ɑːn", "на (поверхности)", "The book is on the table.", "Книга на столе."],
      ["under", "ˈʌndə", "ˈʌndər", "под", "The bag is under the chair.", "Сумка под стулом."],
      ["near", "nɪə", "nɪr", "рядом с, около", "We live near the park.", "Мы живём рядом с парком."]
    ],
    p: { t: "Дифтонги /aʊ/ и /əʊ/", ipa: "/aʊ/ /əʊ/",
      html: "<p><b>/aʊ/</b> — «ау»: <b>house, now, town, how</b>. <b>/əʊ/</b> — «эу» с округлением губ в конце: <b>know, tone, sofa, go</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>now</b> (сейчас) — <b>know</b> (знать), <b>town</b> (город) — <b>tone</b> (тон).</div>",
      ukus: "британское /əʊ/ в американском звучит как /oʊ/ — ближе к «оу»: sofa UK /ˈsəʊfə/, US /ˈsoʊfə/. " + say("sofa", "uk") + " " + say("sofa", "us"),
      pairs: [["now", "know"], ["town", "tone"], ["found", "phoned"]], drill: ["house", "now", "how", "sofa", "go", "home"] },
    g: { t: "There is / there are + in, on, under, near",
      html: "<p>Чтобы сказать, что где-то <b>есть</b> что-то, говорят <b>There is</b> (одно) / <b>There are</b> (много):</p>" +
        "<p><b>There is</b> a sofa in the room. — В комнате есть диван.<br><b>There are</b> two bedrooms. — Есть две спальни.</p>" +
        "<div class='why'><b>Почему «there»?</b> Английское предложение должно начинаться с подлежащего. Когда новый предмет только «вводится» в разговор, на место подлежащего ставят пустое слово <b>there</b>. Сравните: <b>The sofa is</b> in the room (известный диван, где он) и <b>There is a sofa</b> in the room (сообщаем, что диван есть).</div>" +
        "<table><tr><th></th><th>Одно</th><th>Много</th></tr><tr><td>+</td><td>There is (There's) a fridge.</td><td>There are chairs.</td></tr><tr><td>−</td><td>There isn't a garden.</td><td>There aren't any chairs.</td></tr><tr><td>?</td><td>Is there a garden?</td><td>Are there any chairs?</td></tr></table>" +
        "<h3>Где?</h3><p><b>in</b> — в, <b>on</b> — на, <b>under</b> — под, <b>near</b> — рядом, <b>next to</b> — вплотную рядом, <b>between</b> — между, <b>behind</b> — за, <b>in front of</b> — перед.</p>" +
        "<p class='brk'>any — «сколько-нибудь», используется в вопросах и отрицаниях с множественным числом. Подробнее — на уровне 15.</p>",
      tasks: [
        ["c", "___ a sofa in the living room.", "There is|There are|It is", 0, "Один диван, сообщаем, что он есть → <b>There is</b>."],
        ["c", "___ two bedrooms in my flat.", "There are|There is|They are", 0, "Две спальни → <b>There are</b>."],
        ["c", "___ there a fridge in the kitchen?", "Is|Are|Does", 0, "Вопрос: <b>Is there</b> + одно."],
        ["c", "The cat is ___ the table. (под)", "under|on|in", 0, "под → <b>under</b>."],
        ["c", "The milk is ___ the fridge.", "in|on|under", 0, "внутри → <b>in</b>."],
        ["c", "There aren't ___ chairs.", "any|a|one", 0, "Отрицание + множественное → <b>any</b>."],
        ["t", "На кухне есть холодильник.", "There is a fridge in the kitchen.|There's a fridge in the kitchen.", "There is + a fridge + in the kitchen."],
        ["t", "Книга на столе.", "The book is on the table.", "Известная книга → The book is…"],
        ["b", "There are three rooms in our house.", "В нашем доме три комнаты.", "There are + число."]
      ] },
    d: { t: "Смотрим квартиру",
      l: [["A", "Tell me about the flat.", "Расскажите о квартире."], ["B", "There are two bedrooms, a kitchen and a bathroom.", "Две спальни, кухня и ванная."], ["A", "Is there a garden?", "Есть сад?"],
        ["B", "No, there isn't. But there is a big balcony.", "Нет. Но есть большой балкон."], ["A", "Is there a fridge in the kitchen?", "На кухне есть холодильник?"], ["B", "Yes, there is. And there's a sofa in the living room.", "Да. А в гостиной есть диван."]],
      q: [["Сколько спален?", "Две|Одна|Три", 0, ""], ["Есть ли сад?", "Нет, но есть балкон|Да|Не сказано", 0, "No, there isn't. But there is a big balcony."], ["Где диван?", "В гостиной|На кухне|В спальне", 0, "in the living room"]] },
    s: [["There is a sofa in my room.", "В моей комнате есть диван.", "There's a sofa in my room."], ["The keys are on the table.", "Ключи на столе."], ["Are there any chairs in the kitchen?", "На кухне есть стулья?"]]
  });

  A.push({ id: 14, world: 3, en: "In May, on Monday", ru: "Предлоги времени at / on / in", topic: "Месяцы и времена года",
    goal: "Назвать месяц, время года и дату, правильно выбрать at, on или in.",
    w: [
      ["January", "ˈdʒænjuəri", "ˈdʒænjueri", "январь", "It's very cold in January.", "В январе очень холодно."],
      ["May", "meɪ", "", "май", "My birthday is in May.", "Мой день рождения в мае."],
      ["July", "dʒuˈlaɪ", "", "июль", "We go to the sea in July.", "В июле мы едем на море."],
      ["December", "dɪˈsembə", "dɪˈsembər", "декабрь", "It snows in December.", "В декабре идёт снег."],
      ["spring", "sprɪŋ", "", "весна", "The trees are green in spring.", "Весной деревья зелёные."],
      ["summer", "ˈsʌmə", "ˈsʌmər", "лето", "In summer we go to the mountains.", "Летом мы ездим в горы."],
      ["autumn", "ˈɔːtəm", "ˈɔːt̬əm", "осень (в США — fall)", "I love autumn.", "Я люблю осень."],
      ["winter", "ˈwɪntə", "ˈwɪntər", "зима", "It's cold in winter.", "Зимой холодно."],
      ["birthday", "ˈbɜːθdeɪ", "ˈbɝːθdeɪ", "день рождения", "Happy birthday!", "С днём рождения!"],
      ["holiday", "ˈhɒlədeɪ", "ˈhɑːlədeɪ", "праздник; отпуск, каникулы (UK)", "We are on holiday.", "Мы в отпуске."]
    ],
    p: { t: "Ударение в двусложных словах", ipa: "ˈ",
      html: "<p>Большинство двусложных <b>существительных и прилагательных</b> имеют ударение на <b>первом</b> слоге: <b>ˈsum</b>mer, <b>ˈwin</b>ter, <b>ˈbirth</b>day, <b>ˈhap</b>py. Многие двусложные <b>глаголы</b> — на <b>втором</b>: be<b>ˈgin</b>, for<b>ˈget</b>, re<b>ˈpeat</b>.</p>" +
        "<div class='why'><b>Исключения запоминайте по транскрипции:</b> Ju<b>ˈly</b>, ho<b>ˈtel</b>. Знак ˈ стоит прямо перед ударным слогом.</div>",
      ukus: "разные слова: британское <b>autumn</b> — американское <b>fall</b>, <b>holiday</b> — <b>vacation</b>. Даты: в Британии 25 December (25/12), в США December 25 (12/25).",
      pairs: [], drill: ["summer", "winter", "July", "December", "begin", "birthday"] },
    g: { t: "at, on, in со временем",
      html: "<table><tr><th>Предлог</th><th>Когда</th><th>Примеры</th></tr>" +
        "<tr><td><b>at</b></td><td>точка: время на часах, праздник-момент</td><td>at 5 o'clock, at noon, at night, at the weekend (UK)</td></tr>" +
        "<tr><td><b>on</b></td><td>день, дата</td><td>on Monday, on 5 May, on my birthday, on the weekend (US)</td></tr>" +
        "<tr><td><b>in</b></td><td>длинный период</td><td>in May, in summer, in 2025, in the morning</td></tr></table>" +
        "<div class='why'><b>Как запомнить?</b> От маленького к большому: <b>at</b> — точка на часах, <b>on</b> — день (как лист календаря, на котором что-то написано), <b>in</b> — «внутри» длинного периода: месяца, сезона, года.</div>" +
        "<p>Даты читают так: <b>on the fifth of May</b> (UK) или <b>on May fifth</b> (US). В датах используются порядковые числа: first, second, third, fourth, fifth…</p>" +
        "<p class='brk'>Без предлога: <b>this</b> Monday, <b>next</b> week, <b>last</b> summer, <b>every</b> day, tomorrow, yesterday.</p>",
      tasks: [
        ["c", "My birthday is ___ July.", "in|on|at", 0, "Месяц → <b>in</b>."],
        ["c", "See you ___ Monday!", "on|in|at", 0, "День недели → <b>on</b>."],
        ["c", "The film starts ___ 8 p.m.", "at|on|in", 0, "Время на часах → <b>at</b>."],
        ["c", "It's cold ___ winter.", "in|on|at", 0, "Время года → <b>in</b>."],
        ["c", "We met ___ 1 May.", "on|in|at", 0, "Дата → <b>on</b>."],
        ["c", "I read ___ the evening.", "in|at|on", 0, "Часть дня → <b>in</b> the evening (но at night)."],
        ["c", "See you ___ week!", "next|in next|on next", 0, "С next, last, this, every предлог не нужен."],
        ["t", "Мой день рождения в мае.", "My birthday is in May.", "in + месяц."],
        ["t", "Увидимся в пятницу.", "See you on Friday.", "on + день."],
        ["b", "In summer we go to the mountains.", "Летом мы ездим в горы.", "in + время года."]
      ] },
    d: { t: "Когда твой день рождения?",
      l: [["A", "When is your birthday?", "Когда у тебя день рождения?"], ["B", "It's on the tenth of December.", "Десятого декабря."], ["A", "In winter! Do you like winter?", "Зимой! Ты любишь зиму?"],
        ["B", "Yes, I love snow. And when is your birthday?", "Да, я люблю снег. А когда твой день рождения?"], ["A", "In July. I have a party every summer.", "В июле. Я каждое лето устраиваю вечеринку."], ["B", "Great! See you in July!", "Отлично! Увидимся в июле!"]],
      q: [["Когда день рождения B?", "10 декабря|10 июля|1 декабря", 0, "on the tenth of December"], ["Что B любит зимой?", "Снег|Праздники|Каток", 0, "I love snow."], ["Что A делает каждое лето?", "Устраивает вечеринку|Ездит на море|Работает", 0, "I have a party every summer."]] },
    s: [["My birthday is in May.", "Мой день рождения в мае."], ["See you on Monday.", "Увидимся в понедельник.", "See you on Monday!"], ["The lesson starts at nine.", "Урок начинается в девять.", "The lesson starts at 9."]]
  });

  A.push({ id: 15, world: 3, en: "Some milk, any eggs?", ru: "Исчисляемые и неисчисляемые; some / any; much / many", topic: "Еда",
    goal: "Составить список покупок, спросить «есть ли…?» и «сколько?».",
    w: [
      ["bread", "bred", "", "хлеб", "We need some bread.", "Нам нужно немного хлеба."],
      ["milk", "mɪlk", "", "молоко", "There is some milk in the fridge.", "В холодильнике есть молоко."],
      ["water", "ˈwɔːtə", "ˈwɑːt̬ər", "вода", "Can I have some water?", "Можно мне воды?"],
      ["rice", "raɪs", "", "рис", "The rice is ready.", "Рис готов."],
      ["meat", "miːt", "", "мясо", "I don't eat meat.", "Я не ем мясо."],
      ["cheese", "tʃiːz", "", "сыр", "Is there any cheese?", "Есть сыр?"],
      ["sugar", "ˈʃʊɡə", "ˈʃʊɡər", "сахар", "No sugar, please.", "Без сахара, пожалуйста."],
      ["tomato", "təˈmɑːtəʊ", "təˈmeɪt̬oʊ", "помидор", "We need four tomatoes.", "Нам нужно четыре помидора."],
      ["potato", "pəˈteɪtəʊ", "pəˈteɪt̬oʊ", "картофель", "I like potatoes.", "Я люблю картошку."],
      ["some", "sʌm", "", "немного, несколько", "Would you like some tea?", "Хочешь чаю?"]
    ],
    p: { t: "Короткий /ʊ/ и долгий /uː/", ipa: "/ʊ/ /uː/",
      html: "<p><b>/ʊ/</b> — короткое расслабленное «у», губы почти не вытянуты: <b>good, book, sugar, look</b>. <b>/uː/</b> — долгое «у» с вытянутыми губами: <b>food, two, soup, pool</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>full</b> (полный) — <b>fool</b> (дурак), <b>pull</b> (тянуть) — <b>pool</b> (бассейн).</div>",
      ukus: "знаменитое различие: tomato — UK /təˈmɑːtəʊ/ («томАтоу»), US /təˈmeɪt̬oʊ/ («томЭйдоу»). " + say("tomato", "uk") + " " + say("tomato", "us"),
      pairs: [["full", "fool"], ["pull", "pool"], ["look", "Luke"]], drill: ["sugar", "good", "book", "food", "soup", "two"] },
    g: { t: "Можно ли посчитать? some, any, much, many",
      html: "<p><b>Исчисляемые</b> существительные можно посчитать поштучно: an apple — two apples. <b>Неисчисляемые</b> — это вещества и массы: milk, water, rice, sugar, bread, money. Их можно измерить, но не пересчитать.</p>" +
        "<div class='why'><b>Что из этого следует?</b> У неисчисляемых нет a/an и нет множественного числа, а глагол с ними в единственном числе: The rice <b>is</b> ready. Чтобы посчитать, нужна «упаковка»: a glass of water, a loaf of bread, two kilos of rice.</div>" +
        "<table><tr><th></th><th>Исчисляемые</th><th>Неисчисляемые</th></tr><tr><td>утверждение</td><td>some eggs</td><td>some milk</td></tr><tr><td>вопрос и отрицание</td><td>any eggs?</td><td>any milk?</td></tr><tr><td>сколько?</td><td>How <b>many</b>?</td><td>How <b>much</b>?</td></tr><tr><td>много</td><td>many / a lot of eggs</td><td>much / a lot of milk</td></tr></table>" +
        "<div class='why'><b>Почему «Would you like some tea?» с some?</b> Это предложение, а не настоящий вопрос: мы ждём ответа «да». В предложениях и просьбах ставят <b>some</b>.</div>" +
        "<p class='brk'>Bread — неисчисляемое! «Хлеб» по-английски не «a bread», а some bread или a loaf of bread.</p>",
      tasks: [
        ["c", "I need ___ milk.", "some|a|many", 0, "Неисчисляемое в утверждении → <b>some</b>."],
        ["c", "There aren't ___ eggs.", "any|some|much", 0, "Отрицание → <b>any</b>."],
        ["c", "How ___ water do you drink?", "much|many|lot", 0, "water — неисчисляемое → <b>much</b>."],
        ["c", "How ___ apples are there?", "many|much|lot", 0, "apples — исчисляемое → <b>many</b>."],
        ["c", "The rice ___ ready.", "is|are|am", 0, "Неисчисляемое → глагол в ед. числе: <b>is</b>."],
        ["c", "Would you like ___ tea?", "some|any|many", 0, "Предложение-угощение → <b>some</b>."],
        ["c", "Can I have ___ bread, please?", "some|a|an", 0, "bread — неисчисляемое, a/an нельзя."],
        ["t", "Мне нужен хлеб.", "I need bread.|I need some bread.", "bread без a."],
        ["t", "У нас нет сахара.", "We don't have any sugar.|We haven't got any sugar.|We have no sugar.|We do not have any sugar.", "Отрицание + any."],
        ["b", "There is some cheese in the fridge.", "В холодильнике есть немного сыра.", "There is + some + неисчисляемое."]
      ] },
    d: { t: "Список покупок",
      l: [["A", "What do we need from the shop?", "Что нам нужно купить в магазине?"], ["B", "We need some bread and milk.", "Нам нужны хлеб и молоко."], ["A", "Is there any cheese?", "Сыр есть?"],
        ["B", "No, there isn't any cheese. And we need some tomatoes.", "Нет, сыра нет. И нужны помидоры."], ["A", "How many?", "Сколько?"], ["B", "Four or five. And a lot of water. It's hot today!", "Четыре или пять. И много воды. Сегодня жарко!"]],
      q: [["Что нужно купить?", "Хлеб и молоко|Мясо и рис|Сахар", 0, ""], ["Есть ли дома сыр?", "Нет|Да|Немного", 0, "there isn't any cheese"], ["Сколько помидоров?", "Четыре или пять|Два|Десять", 0, ""]] },
    s: [["I need some bread.", "Мне нужно немного хлеба.", "I need bread."], ["There isn't any milk.", "Молока нет.", "There is not any milk.|There's no milk.|There is no milk."], ["How many eggs do you need?", "Сколько яиц тебе нужно?"]]
  });

  A.push({ id: 16, world: 3, en: "I can swim", ru: "Модальный глагол can", topic: "Умения и спорт",
    goal: "Рассказать, что вы умеете и не умеете, вежливо попросить о помощи.",
    w: [
      ["can", "kæn", "", "мочь, уметь", "I can swim.", "Я умею плавать."],
      ["sing", "sɪŋ", "", "петь", "She can sing very well.", "Она очень хорошо поёт."],
      ["ride", "raɪd", "", "ездить (верхом, на велосипеде)", "Can you ride a horse?", "Ты умеешь ездить верхом?"],
      ["bike", "baɪk", "", "велосипед", "I go to work by bike.", "Я езжу на работу на велосипеде."],
      ["run", "rʌn", "", "бегать", "He runs every morning.", "Он бегает каждое утро."],
      ["speak", "spiːk", "", "говорить (на языке)", "I can speak three languages.", "Я говорю на трёх языках."],
      ["help", "help", "", "помогать; помощь", "Can you help me?", "Ты можешь мне помочь?"],
      ["drive", "draɪv", "", "водить (машину)", "My mother can't drive.", "Моя мама не умеет водить."],
      ["well", "wel", "", "хорошо (как?)", "You speak English well.", "Ты хорошо говоришь по-английски."],
      ["fast", "fɑːst", "fæst", "быстро; быстрый", "Cheetahs run very fast.", "Гепарды бегают очень быстро."]
    ],
    p: { t: "can или can't? Слабые формы", ipa: "/kən/ /kɑːnt/",
      html: "<p>В середине фразы <b>can</b> безударное и звучит коротко: <b>/kən/</b> — «I c'n swim». <b>can't</b> всегда ударное и с долгим звуком: <b>/kɑːnt/</b>.</p>" +
        "<div class='why'><b>Как различить на слух?</b> Если «кэн» почти не слышно, а ударение падает на глагол (I c'n <b>SWIM</b>) — это <b>can</b>. Если громкое долгое «кааант» — это <b>can't</b>. В кратком ответе «Yes, I <b>can</b>» — полная форма /kæn/.</div>" +
        "<p>" + say("I can swim.") + " " + say("I can't swim.") + "</p>",
      ukus: "здесь варианты сильно отличаются: can't — UK /kɑːnt/ («кант» с долгим а), US /kænt/ («кэнт»). Американцы различают can / can't в основном ударением и звуком t. " + say("can't", "uk") + " " + say("can't", "us"),
      pairs: [["can", "can't"]], drill: ["I can swim.", "I can't swim.", "Can you help me?", "Yes, I can."] },
    g: { t: "can: умею, могу, можно",
      html: "<p><b>can</b> + словарная форма глагола: I <b>can swim</b>. Значения: «умею» (способность), «могу» (возможность), «можно?» (просьба, разрешение).</p>" +
        "<table><tr><th></th><th>Пример</th></tr><tr><td>+</td><td>She <b>can</b> drive.</td></tr><tr><td>−</td><td>She <b>can't</b> (cannot) drive.</td></tr><tr><td>?</td><td><b>Can</b> she drive? — Yes, she can. / No, she can't.</td></tr><tr><td>просьба</td><td><b>Can</b> you help me? <b>Can</b> I have some water?</td></tr></table>" +
        "<div class='why'><b>Почему «she can», а не «she cans»?</b> can — <b>модальный</b> глагол. Модальные не меняются по лицам, не бывают с <b>to</b> после себя («can to swim» — ошибка) и сами образуют вопрос и отрицание, без do.</div>" +
        "<p class='brk'>cannot пишется слитно. Вежливее, чем Can you…?, звучит <b>Could you…?</b> — «Не могли бы вы…?»</p>",
      tasks: [
        ["c", "She ___ swim.", "can|cans|can to", 0, "Модальный глагол не меняется: <b>she can</b>."],
        ["c", "I can ___ the guitar.", "play|to play|plays", 0, "После can — словарная форма без to."],
        ["c", "___ you speak English?", "Can|Do can|Are", 0, "can сам встаёт на первое место."],
        ["c", "He ___ drive. He's ten.", "can't|doesn't can|not can", 0, "Отрицание — <b>can't</b>, без do."],
        ["c", "— Can you ride a bike? — Yes, I ___.", "can|do|am", 0, "Краткий ответ повторяет can."],
        ["c", "___ I have some water, please?", "Can|Do|Am", 0, "Просьба: <b>Can I…?</b>"],
        ["t", "Я умею плавать.", "I can swim.", "I + can + swim."],
        ["t", "Ты можешь мне помочь?", "Can you help me?|Could you help me?", "Can + you + help + me?"],
        ["b", "My brother can run very fast.", "Мой брат умеет очень быстро бегать.", "can + run, very fast в конце."]
      ] },
    d: { t: "Что ты умеешь?",
      l: [["A", "Can you play the guitar?", "Ты умеешь играть на гитаре?"], ["B", "No, I can't. But I can sing!", "Нет. Но я умею петь!"], ["A", "Really? Can you sing in English?", "Правда? А на английском можешь?"],
        ["B", "Yes, I can. Can you help me with my English song?", "Да. Поможешь мне с песней на английском?"], ["A", "Sure! I can help you on Saturday.", "Конечно! Могу помочь в субботу."]],
      q: [["Умеет ли B играть на гитаре?", "Нет|Да|Немного", 0, "No, I can't."], ["Что умеет B?", "Петь|Танцевать|Рисовать", 0, "I can sing!"], ["Когда A поможет?", "В субботу|Сегодня|В пятницу", 0, "on Saturday"]] },
    s: [["I can speak English.", "Я говорю по-английски.", "I can speak English well."], ["She can't drive.", "Она не умеет водить.", "She cannot drive.|She can not drive."], ["Can you help me, please?", "Ты можешь мне помочь, пожалуйста?", "Can you help me please?|Could you help me, please?|Could you help me please?"]]
  });

  A.push({ id: 17, world: 3, en: "What are you doing?", ru: "Present Continuous", topic: "Что происходит сейчас",
    goal: "Рассказать, что происходит прямо сейчас, и спросить «Что ты делаешь?».",
    w: [
      ["now", "naʊ", "", "сейчас", "I'm busy now.", "Я сейчас занят."],
      ["wait", "weɪt", "", "ждать", "I'm waiting for the bus.", "Я жду автобус."],
      ["look", "lʊk", "", "смотреть; выглядеть", "Look at this!", "Посмотри на это!"],
      ["listen", "ˈlɪsn", "", "слушать", "I'm listening to music.", "Я слушаю музыку."],
      ["talk", "tɔːk", "", "разговаривать", "She is talking on the phone.", "Она разговаривает по телефону."],
      ["write", "raɪt", "", "писать", "He is writing a letter.", "Он пишет письмо."],
      ["rain", "reɪn", "", "дождь; идти (о дожде)", "It's raining again.", "Опять идёт дождь."],
      ["wear", "weə", "wer", "носить (одежду)", "She is wearing a red dress.", "На ней красное платье."],
      ["take", "teɪk", "", "брать; ехать (на транспорте)", "I take the bus to work.", "Я езжу на работу на автобусе."],
      ["walk", "wɔːk", "", "идти пешком, гулять", "We are walking in the park.", "Мы гуляем в парке."]
    ],
    p: { t: "Интонация вопросов с what, where, how", ipa: "↘",
      html: "<p>В вопросах с вопросительным словом голос <b>падает</b> в конце: <i>What are you doing↘?</i> <i>Where are you↘?</i> Ударение — на главном слове: What are you <b>DO</b>ing?</p>" +
        "<div class='why'><b>Почему не вверх, как в «Are you OK↗?»</b> На вопрос «что?» ответ — не «да/нет», а новая информация. Нисходящий тон звучит естественно и вежливо. Если поднять голос, вопрос прозвучит как переспрос: «Что-что ты делаешь?»</div>" +
        "<p>" + say("What are you doing?") + " " + say("Where are you?") + "</p>",
      ukus: "интонация одинакова. В быстрой американской речи «What are you doing?» часто звучит как «Whatcha doin'?» — так понимать полезно, но писать не нужно.",
      pairs: [], drill: ["What are you doing?", "Where are you going?", "I'm waiting for the bus.", "It's raining."] },
    g: { t: "Present Continuous: am / is / are + -ing",
      html: "<p>Present Continuous описывает действие <b>в процессе</b> — прямо сейчас или в нынешний период: I <b>am waiting</b> for the bus. — Я (сейчас) жду автобус.</p>" +
        "<table><tr><th></th><th>Пример</th></tr><tr><td>+</td><td>I'm reading. She's sleeping. They're working.</td></tr><tr><td>−</td><td>I'm not watching TV. He isn't working.</td></tr><tr><td>?</td><td>Are you working? — Yes, I am. What are you doing?</td></tr></table>" +
        "<div class='why'><b>Зачем отдельное время?</b> По-русски «я читаю» — это и «вообще читаю», и «читаю сейчас». В английском это разные формы: I <b>read</b> (вообще, регулярно) и I <b>am reading</b> (сейчас, в процессе). Слова-подсказки: <b>now, right now, at the moment, Look!, Listen!</b></div>" +
        "<h3>Правописание -ing</h3><p>write → writ<b>ing</b> (немая e выпадает) · sit → sit<b>ting</b>, run → run<b>ning</b> (краткий слог: согласная удваивается) · lie → l<b>ying</b>.</p>" +
        "<p class='brk'>Без am/is/are нельзя: «I waiting» — ошибка. Помощник показывает лицо и время, -ing — процесс.</p>",
      tasks: [
        ["c", "I ___ for a bus now.", "am waiting|wait|waiting", 0, "Сейчас, в процессе → <b>am waiting</b>."],
        ["c", "Look! It ___.", "is raining|rains|raining", 0, "Look! — прямо сейчас → <b>is raining</b>."],
        ["c", "What ___ you doing?", "are|do|is", 0, "you → <b>are</b> … doing."],
        ["c", "She is ___ a letter.", "writing|writeing|write", 0, "write → <b>writing</b>: e выпадает."],
        ["c", "They ___ TV now.", "aren't watching|don't watching|not watching", 0, "Отрицание: <b>aren't</b> + -ing."],
        ["c", "He is ___ on the chair.", "sitting|siting|sit", 0, "sit → <b>sitting</b>: согласная удваивается."],
        ["t", "Я сейчас разговариваю по телефону.", "I am talking on the phone now.|I'm talking on the phone now.|I am talking on the phone.|I'm talking on the phone.", "am + talking."],
        ["t", "Что ты делаешь?", "What are you doing?", "What + are + you + doing?"],
        ["b", "We are listening to music.", "Мы слушаем музыку.", "are + listening + to."]
      ] },
    d: { t: "Звонок под дождём",
      l: [["A", "Hi, Dana! Where are you? What are you doing?", "Привет, Дана! Ты где? Что делаешь?"], ["B", "I'm waiting for the bus. It's raining!", "Жду автобус. Идёт дождь!"], ["A", "Oh no. Are you wearing a coat?", "О нет. Ты в пальто?"],
        ["B", "Yes, I am. And what are you doing?", "Да. А ты что делаешь?"], ["A", "I'm cooking dinner. Come quickly!", "Готовлю ужин. Приезжай скорее!"]],
      q: [["Что делает Дана?", "Ждёт автобус|Готовит ужин|Гуляет", 0, "I'm waiting for the bus."], ["Какая погода?", "Дождь|Солнце|Снег", 0, "It's raining!"], ["Что делает A?", "Готовит ужин|Смотрит телевизор|Едет в автобусе", 0, "I'm cooking dinner."]] },
    s: [["I am waiting for you.", "Я тебя жду.", "I'm waiting for you."], ["It is raining now.", "Сейчас идёт дождь.", "It's raining now."], ["What are you doing?", "Что ты делаешь?"]]
  });

  A.push({ id: 18, world: 3, en: "It usually snows", ru: "Present Simple или Continuous?", topic: "Погода и одежда",
    goal: "Рассказать о погоде и одежде, различать «обычно» и «сейчас».",
    w: [
      ["weather", "ˈweðə", "ˈweðər", "погода", "What's the weather like?", "Какая погода?"],
      ["sunny", "ˈsʌni", "", "солнечный", "It's sunny today.", "Сегодня солнечно."],
      ["hot", "hɒt", "hɑːt", "жаркий; горячий", "It's very hot in July.", "В июле очень жарко."],
      ["warm", "wɔːm", "wɔːrm", "тёплый", "Take a warm jacket.", "Возьми тёплую куртку."],
      ["snow", "snəʊ", "snoʊ", "снег; идти (о снеге)", "It usually snows in winter.", "Зимой обычно идёт снег."],
      ["wind", "wɪnd", "", "ветер", "The wind is very strong.", "Ветер очень сильный."],
      ["coat", "kəʊt", "koʊt", "пальто", "I'm wearing my new coat.", "Я в новом пальто."],
      ["shoes", "ʃuːz", "", "обувь, туфли", "These shoes are comfortable.", "Эти туфли удобные."],
      ["jacket", "ˈdʒækɪt", "", "куртка; пиджак", "Where is my jacket?", "Где моя куртка?"],
      ["T-shirt", "ˈtiː ʃɜːt", "ˈtiː ʃɝːt", "футболка", "He usually wears a T-shirt.", "Он обычно ходит в футболке."]
    ],
    p: { t: "Американское «быстрое t»", ipa: "/t/ → [ɾ]",
      html: "<p>В американском английском <b>t между гласными</b> (и после r перед гласной) звучит как очень быстрое мягкое «д»: water → «уоДэр», better → «бэДэр», city → «сиДи». В транскрипции это обозначается <b>t̬</b> или [ɾ].</p>" +
        "<div class='why'><b>Почему так?</b> Это упрощение в быстрой речи: язык лишь касается нёба. В британском варианте t остаётся чётким. Понимать нужно оба, говорить — как вам удобнее.</div>",
      ukus: "это и есть главное различие уровня. Сравните: " + say("water", "uk") + " " + say("water", "us") + " " + say("better", "uk") + " " + say("better", "us"),
      pairs: [], drill: ["water", "better", "city", "later", "getting", "weather"] },
    g: { t: "Обычно или сейчас?",
      html: "<table><tr><th>Present Simple</th><th>Present Continuous</th></tr><tr><td>регулярно, всегда, факт</td><td>прямо сейчас, временно</td></tr><tr><td>It usually <b>snows</b> in winter.</td><td>Look! It <b>is snowing</b>.</td></tr><tr><td>She <b>wears</b> jeans every day.</td><td>Today she <b>is wearing</b> a dress.</td></tr><tr><td>always, usually, every day, often</td><td>now, today, at the moment, Look!</td></tr></table>" +
        "<div class='why'><b>Как выбрать?</b> Спросите себя: «это привычка или то, что происходит сейчас и скоро закончится?» Привычка → Simple, процесс сейчас → Continuous.</div>" +
        "<h3>Глаголы состояния</h3><p>Некоторые глаголы почти не бывают в Continuous, даже если речь о «сейчас»: <b>like, love, want, need, know, understand, believe</b>.</p>" +
        "<div class='why'><b>Почему?</b> Они описывают состояние, а не действие-процесс: «знать» нельзя делать «в процессе». Поэтому I <b>understand</b> you (а не I am understanding), I <b>want</b> tea now.</div>" +
        "<p class='brk'>Погода: <b>It's</b> sunny / windy / cold. «Какая погода?» — <b>What's the weather like?</b></p>",
      tasks: [
        ["c", "It usually ___ in winter.", "snows|is snowing|snowing", 0, "usually — регулярно → Present Simple."],
        ["c", "Look! It ___ now.", "is snowing|snows|snow", 0, "Look! now — процесс → Continuous."],
        ["c", "Today I ___ a coat because it's cold.", "am wearing|wear|wearing", 0, "Сегодня, временно → <b>am wearing</b>."],
        ["c", "She usually ___ jeans.", "wears|is wearing|wear", 0, "usually → <b>wears</b>."],
        ["c", "I ___ you. (понимаю)", "understand|am understanding|understanding", 0, "understand — глагол состояния, без -ing."],
        ["c", "I ___ a new jacket. (хочу)", "want|am wanting|wanting", 0, "want — глагол состояния."],
        ["t", "Сегодня солнечно.", "It is sunny today.|It's sunny today.|Today it is sunny.|Today it's sunny.", "It is + sunny."],
        ["t", "Я хочу новую куртку.", "I want a new jacket.", "want — Present Simple."],
        ["b", "It is cold, so I am wearing a warm coat.", "Холодно, поэтому я в тёплом пальто.", "Сейчас и временно → am wearing."]
      ] },
    d: { t: "Прогноз погоды",
      l: [["A", "What's the weather like today?", "Какая сегодня погода?"], ["B", "It's cold and windy. It's snowing in the mountains.", "Холодно и ветрено. В горах идёт снег."], ["A", "Is it usually cold in March?", "В марте обычно холодно?"],
        ["B", "Yes, it usually snows in March. Take your warm jacket!", "Да, в марте обычно идёт снег. Возьми тёплую куртку!"], ["A", "OK. I'm wearing my jacket now.", "Хорошо. Я уже надеваю куртку."]],
      q: [["Какая сегодня погода?", "Холодно и ветрено|Жарко|Тепло и солнечно", 0, "It's cold and windy."], ["Что происходит в горах?", "Идёт снег|Идёт дождь|Светит солнце", 0, "It's snowing in the mountains."], ["Что надевает A?", "Куртку|Футболку|Пальто", 0, "I'm wearing my jacket now."]] },
    s: [["What's the weather like?", "Какая погода?", "What is the weather like?"], ["It usually rains in autumn.", "Осенью обычно идёт дождь.", "It usually rains in fall."], ["I am wearing a T-shirt today.", "Сегодня я в футболке.", "I'm wearing a T-shirt today.|Today I am wearing a T-shirt.|Today I'm wearing a T-shirt."]]
  });

  // ===================== МИР 4 =====================
  A.push({ id: 19, world: 4, en: "Where is the station?", ru: "Вопросительные слова", topic: "Город",
    goal: "Спросить дорогу, понять ответ и задавать вопросы where, when, why, how.",
    w: [
      ["where", "weə", "wer", "где; куда", "Where do you live?", "Где ты живёшь?"],
      ["when", "wen", "", "когда", "When does the shop open?", "Когда открывается магазин?"],
      ["why", "waɪ", "", "почему", "Why are you sad?", "Почему ты грустишь?"],
      ["how", "haʊ", "", "как", "How can I get to the museum?", "Как пройти к музею?"],
      ["street", "striːt", "", "улица", "I live on Abay Street.", "Я живу на улице Абая."],
      ["station", "ˈsteɪʃn", "", "вокзал, станция", "Where is the bus station?", "Где автовокзал?"],
      ["museum", "mjuˈziːəm", "", "музей", "The museum is next to the park.", "Музей рядом с парком."],
      ["left", "left", "", "налево; левый", "Turn left.", "Поверните налево."],
      ["right", "raɪt", "", "направо; правый; правильный", "Turn right at the bank.", "У банка поверните направо."],
      ["straight", "streɪt", "", "прямо", "Go straight on.", "Идите прямо."]
    ],
    p: { t: "/w/ и /v/", ipa: "/w/ /v/",
      html: "<p><b>/w/</b> — губы вытянуты трубочкой и быстро раскрываются, зубы не участвуют: <b>where, when, west</b>. <b>/v/</b> — верхние зубы касаются нижней губы: <b>very, vest</b>.</p>" +
        "<div class='why'><b>Частая ошибка:</b> произносить w как «в». Тогда <b>west</b> (запад) звучит как <b>vest</b> (жилет), а <b>wine</b> (вино) — как <b>vine</b> (лоза).</div>",
      ukus: "звуки одинаковые. Буквы wh в словах where, when, why оба варианта читают как /w/: h не произносится.",
      pairs: [["west", "vest"], ["wine", "vine"], ["wet", "vet"]], drill: ["where", "when", "why", "we", "very", "west"] },
    g: { t: "Вопросы с what, where, when, why, how, who",
      html: "<p>Схема: <b>вопросительное слово + помощник (do/does/is/are/can) + подлежащее + глагол</b>.</p>" +
        "<table><tr><th>Слово</th><th>Пример</th></tr><tr><td>where — где</td><td>Where <b>do</b> you live? Where <b>is</b> the station?</td></tr><tr><td>when — когда</td><td>When <b>does</b> the museum open?</td></tr><tr><td>why — почему</td><td>Why <b>are</b> you late? — <b>Because</b> …</td></tr><tr><td>how — как</td><td>How <b>can</b> I get to the bank?</td></tr><tr><td>what — что</td><td>What <b>do</b> you want?</td></tr><tr><td>who — кто</td><td>Who <b>is</b> she? Who lives here?</td></tr></table>" +
        "<div class='why'><b>Почему порядок такой?</b> Вопросительное слово встаёт первым, а дальше идёт обычный вопрос «да/нет» с той же перестановкой: Do you live here? → <b>Where</b> do you live?</div>" +
        "<div class='why'><b>Особый случай — who как подлежащее.</b> «Кто здесь живёт?» — <b>Who lives here?</b> Без do: who само является подлежащим, и порядок слов как в утверждении.</div>" +
        "<p class='brk'>Дорога: Go straight on — идите прямо; Turn left / right — поверните налево / направо; It's on the left — это слева; next to — рядом с.</p>",
      tasks: [
        ["c", "___ is the station?", "Where|When|Who", 0, "Спрашиваем о месте → <b>where</b>."],
        ["c", "___ do you get up? — At seven.", "When|Where|Why", 0, "Ответ — время → <b>when</b>."],
        ["c", "___ are you sad? — Because I'm tired.", "Why|How|What", 0, "Ответ с because → <b>why</b>."],
        ["c", "Where ___ you live?", "do|are|does", 0, "you + обычный глагол → <b>do</b>."],
        ["c", "Where ___ your sister work?", "does|do|is", 0, "your sister = she → <b>does</b>."],
        ["c", "___ can I get to the museum?", "How|Where|What", 0, "«Как пройти» → <b>how</b>."],
        ["c", "Who ___ in this house?", "lives|does live|do live", 0, "who — подлежащее, do не нужен: <b>Who lives</b>…"],
        ["t", "Где ты живёшь?", "Where do you live?", "Where + do + you + live?"],
        ["t", "Поверните налево.", "Turn left.|Turn left, please.", "Turn left."],
        ["b", "Excuse me, where is the bank?", "Извините, где банк?", "Excuse me, + where + is…"]
      ] },
    d: { t: "Как пройти к музею?",
      l: [["A", "Excuse me, how can I get to the museum?", "Извините, как пройти к музею?"], ["B", "Go straight on, then turn left.", "Идите прямо, потом поверните налево."], ["A", "Is it far?", "Это далеко?"],
        ["B", "No, it's about five minutes. The museum is next to the station.", "Нет, минут пять. Музей рядом с вокзалом."], ["A", "Thank you! When does it open?", "Спасибо! Когда он открывается?"], ["B", "At ten o'clock.", "В десять часов."]],
      q: [["Куда идёт A?", "В музей|На вокзал|В банк", 0, ""], ["Куда нужно повернуть?", "Налево|Направо|Никуда, всё время прямо", 0, "then turn left"], ["Во сколько открывается музей?", "В 10:00|В 9:00|В 5:00", 0, "At ten o'clock."]] },
    s: [["Where is the station?", "Где вокзал?"], ["Turn right, please.", "Поверните направо, пожалуйста.", "Turn right please.|Please turn right."], ["Why are you late?", "Почему ты опоздал?"]]
  });

  A.push({ id: 20, world: 4, en: "Where were you?", ru: "Прошедшее время: was / were", topic: "Вчера и прошлое",
    goal: "Рассказать, где вы были и каким было прошлое событие.",
    w: [
      ["yesterday", "ˈjestədeɪ", "ˈjestərdeɪ", "вчера", "I was at home yesterday.", "Вчера я был дома."],
      ["last", "lɑːst", "læst", "прошлый; последний", "Where were you last night?", "Где ты был вчера вечером?"],
      ["ago", "əˈɡəʊ", "əˈɡoʊ", "тому назад", "I was in London two years ago.", "Я был в Лондоне два года назад."],
      ["party", "ˈpɑːti", "ˈpɑːrt̬i", "вечеринка, праздник", "The party was great!", "Вечеринка была отличная!"],
      ["concert", "ˈkɒnsət", "ˈkɑːnsərt", "концерт", "Were you at the concert?", "Ты был на концерте?"],
      ["cinema", "ˈsɪnəmə", "", "кинотеатр (в США — movie theater)", "We were at the cinema.", "Мы были в кино."],
      ["born", "bɔːn", "bɔːrn", "рождённый (be born — родиться)", "I was born in Almaty.", "Я родился в Алматы."],
      ["child", "tʃaɪld", "", "ребёнок (мн. children)", "I was a happy child.", "Я был счастливым ребёнком."],
      ["school", "skuːl", "", "школа", "We were at school together.", "Мы вместе учились в школе."],
      ["week", "wiːk", "", "неделя", "I was busy last week.", "На прошлой неделе я был занят."]
    ],
    p: { t: "Слабые формы: was и were", ipa: "/wəz/ /wə/",
      html: "<p>В середине фразы <b>was</b> и <b>were</b> обычно безударные: <b>/wəz/</b>, <b>/wə/</b> — I w'z at home. В конце фразы и в кратких ответах звучит полная форма: Yes, I <b>was</b> /wɒz/.</p>" +
        "<div class='why'><b>Почему это важно для слуха?</b> Если ждать чёткого «уоз», можно не услышать was в быстрой речи. Служебные слова в английском почти всегда «проглатываются».</div>" +
        "<p>" + say("I was at home.") + " " + say("Were you there?") + " " + say("Yes, I was.") + "</p>",
      ukus: "полная форма was: UK /wɒz/, US /wʌz/. Слабая /wəz/ одинаковая. Британское <b>cinema</b> — американское <b>movie theater</b> (или «go to the movies»).",
      pairs: [], drill: ["I was at home.", "Were you there?", "Yes, I was.", "No, I wasn't."] },
    g: { t: "was / were",
      html: "<p>Прошедшее время глагола to be:</p>" +
        "<table><tr><th>Кто</th><th>+</th><th>−</th><th>?</th></tr><tr><td>I, he, she, it</td><td>was</td><td>wasn't</td><td>Was he…?</td></tr><tr><td>you, we, they</td><td>were</td><td>weren't</td><td>Were you…?</td></tr></table>" +
        "<div class='why'><b>Как выбрать?</b> Как и в настоящем: где было <b>am / is</b>, теперь <b>was</b>; где было <b>are</b>, теперь <b>were</b>. I am → I was, she is → she was, they are → they were.</div>" +
        "<div class='why'><b>Почему «I was born»?</b> По-английски «родиться» — «быть рождённым». Рождение уже в прошлом, поэтому всегда <b>was/were born</b>: I <b>was born</b> in 2005. Сказать «I am born» — ошибка.</div>" +
        "<p class='brk'>Слова прошлого: yesterday, last week / last year, two days ago, in 2010. ago ставится <b>после</b> срока: three years <b>ago</b>.</p>",
      tasks: [
        ["c", "I ___ at home yesterday.", "was|were|am", 0, "I → <b>was</b>."],
        ["c", "They ___ at the party.", "were|was|are", 0, "they → <b>were</b>."],
        ["c", "___ you at school yesterday?", "Were|Was|Did", 0, "you → <b>were</b>, на первом месте."],
        ["c", "She ___ tired last night.", "wasn't|weren't|didn't", 0, "she → <b>wasn't</b>."],
        ["c", "I ___ born in 2005.", "was|were|am", 0, "Родиться — <b>was born</b>."],
        ["c", "We ___ at the cinema a week ago.", "were|was|are", 0, "we → <b>were</b>; a week ago — прошлое."],
        ["t", "Вчера я был дома.", "I was at home yesterday.|Yesterday I was at home.", "I + was."],
        ["t", "Где ты родился?", "Where were you born?", "Where + were + you + born?"],
        ["b", "The concert was great.", "Концерт был отличный.", "the concert = it → was."]
      ] },
    d: { t: "Где ты был?",
      l: [["A", "Where were you yesterday?", "Где ты был вчера?"], ["B", "I was at a concert.", "На концерте."], ["A", "Was it good?", "Было хорошо?"], ["B", "Yes, it was great! My friends were there too.", "Да, отлично! Мои друзья тоже там были."],
        ["A", "I was at home. I was very tired.", "А я был дома. Я очень устал."], ["B", "Oh! Were you ill?", "Ой! Ты болел?"], ["A", "No, I wasn't. I was just busy last week.", "Нет. Просто на прошлой неделе было много дел."]],
      q: [["Где был B вчера?", "На концерте|Дома|В кино", 0, "I was at a concert."], ["Кто ещё был на концерте?", "Друзья B|Брат B|Никого", 0, "My friends were there too."], ["Болел ли A?", "Нет|Да|Не сказано", 0, "No, I wasn't."]] },
    s: [["I was at home yesterday.", "Вчера я был дома.", "Yesterday I was at home."], ["Were you at the party?", "Ты был на вечеринке?"], ["We were children ten years ago.", "Десять лет назад мы были детьми."]]
  });
})(window.EN);
