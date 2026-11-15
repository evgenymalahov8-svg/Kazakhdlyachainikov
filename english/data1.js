/* Английский для чайников — данные курса, часть 1: миры, звуки, уровни 1–10.
   Слово: [английский, IPA UK, IPA US ("" если совпадает), перевод, пример, перевод примера]
   Задание грамматики: ["c", вопрос, "вар1|вар2|вар3", индекс верного, почему] · ["t", по-русски, "ответ1|ответ2", почему] · ["b", предложение, перевод, почему]
   Предложение практики: [английский, перевод, "другие верные варианты|…"] */
window.EN = window.EN || { lessons: [] };
(function (EN) {
  function say(w, acc) { return "<button class='btn sm teal' type='button' data-say=\"" + w + "\"" + (acc ? " data-acc='" + acc + "'" : "") + ">▶ " + (acc ? acc.toUpperCase() + " " : "") + w + "</button>"; }
  EN.say = say;

  EN.worlds = [
    { name: "Деревня звуков", sub: "Уровни 1–6: приветствия, глагол to be, числа, артикли. Первые шаги." },
    { name: "Лес слов", sub: "Уровни 7–12: семья, внешность, распорядок дня, профессии и Present Simple." },
    { name: "Город времени", sub: "Уровни 13–18: дом, время, еда, умения, Present Continuous." },
    { name: "Порт вопросов", sub: "Уровни 19–24: вопросы, прошедшее время, город и путешествия." },
    { name: "Замок свободы", sub: "Уровни 25–30: сравнения, будущее, модальные глаголы, Present Perfect и финальный босс." }
  ];

  EN.sounds = [
    { t: "Короткие гласные", note: "Русские подсказки приблизительные: точный звук — в озвучке.", items: [
      ["ɪ", "ship", "короткое, между «и» и «ы»"], ["e", "bed", "как «э» в слове «это»"], ["æ", "cat", "широкое, между «а» и «э»"], ["ʌ", "cup", "короткое «а»"],
      ["ɒ", "hot", "короткое «о» (UK); в US — ɑː"], ["ʊ", "book", "короткое «у», губы не вытягивать"], ["ə", "about", "безударный, нейтральный звук"]] },
    { t: "Долгие гласные", note: "Двоеточие ː означает долготу.", items: [
      ["iː", "see", "долгое «и»"], ["ɑː", "car", "долгое глубокое «а»"], ["ɔː", "door", "долгое «о»"], ["uː", "food", "долгое «у»"], ["ɜː", "bird", "похоже на «ё» без «й» (US: ɝ)"]] },
    { t: "Дифтонги", note: "Два звука, которые сливаются в один слог.", items: [
      ["eɪ", "day", "«эй»"], ["aɪ", "my", "«ай»"], ["ɔɪ", "boy", "«ой»"], ["aʊ", "now", "«ау»"], ["əʊ", "go", "«эу» (UK); в US — oʊ «оу»"],
      ["ɪə", "here", "«иэ» (UK); в US — ɪr"], ["eə", "hair", "«эа» (UK); в US — er"]] },
    { t: "Трудные согласные", note: "Этих звуков нет в русском или они отличаются.", items: [
      ["θ", "think", "кончик языка между зубами, глухо"], ["ð", "this", "то же, но звонко"], ["w", "we", "губы трубочкой, быстрое «у»"], ["ŋ", "sing", "«н» задней частью языка"],
      ["h", "hat", "просто выдох, не «х»"], ["r", "red", "язык не дрожит, кончик загнут"], ["ʃ", "she", "мягкое «ш»"], ["ʒ", "vision", "мягкое «ж»"],
      ["tʃ", "chair", "«ч»"], ["dʒ", "job", "слитное «дж»"], ["j", "yes", "«й»"]] }
  ];

  EN.soundTopics = [
    { t: "🇬🇧 Британский и 🇺🇸 американский", html:
      "<p>В курсе у каждого слова две транскрипции. Различий немного, и вас поймут с любым вариантом. Главное — не смешивать их внутри одного слова.</p>" +
      "<table><tr><th>Что</th><th>🇬🇧 UK</th><th>🇺🇸 US</th></tr>" +
      "<tr><td>Звук r после гласной</td><td>не произносится: car /kɑː/</td><td>произносится: car /kɑːr/</td></tr>" +
      "<tr><td>hot, box, stop</td><td>/ɒ/ — округлённое «о»</td><td>/ɑː/ — почти «а»</td></tr>" +
      "<tr><td>t между гласными</td><td>чёткое t: water /ˈwɔːtə/</td><td>быстрое «д»: water /ˈwɑːt̬ər/</td></tr>" +
      "<tr><td>bath, ask, can't</td><td>/ɑː/: /bɑːθ/</td><td>/æ/: /bæθ/</td></tr>" +
      "<tr><td>go, home, no</td><td>/əʊ/ «эу»</td><td>/oʊ/ «оу»</td></tr>" +
      "<tr><td>Слова</td><td>flat, lift, holiday, mobile</td><td>apartment, elevator, vacation, cell phone</td></tr>" +
      "<tr><td>Написание</td><td>colour, centre</td><td>color, center</td></tr></table>" +
      "<p>Послушайте разницу: " + say("water", "uk") + " " + say("water", "us") + " " + say("car", "uk") + " " + say("car", "us") + " " + say("hot", "uk") + " " + say("hot", "us") + "</p>" },
    { t: "Ударение", html:
      "<p>В транскрипции знак <mark>ˈ</mark> стоит <b>перед</b> ударным слогом: /ˈteɪbl/ — TA-ble. Знак <mark>ˌ</mark> — второстепенное ударение: /ˌendʒɪˈnɪə/.</p>" +
      "<p>Ударение может менять смысл и часть речи: <b>a ˈpresent</b> (подарок) — <b>to preˈsent</b> (представлять). Оно может «переезжать» в родственных словах: " + say("photograph") + " " + say("photographer") + "</p>" +
      "<p>Безударные гласные обычно превращаются в /ə/: banana /bəˈnɑːnə/. Поэтому английская речь звучит «смазанно» — это нормально.</p>" },
    { t: "Интонация", html:
      "<p><b>↘ Нисходящая</b> — в утверждениях и вопросах со словами what, where, how: <i>I'm from Almaty↘. Where are you from↘?</i> " + say("Where are you from?") + "</p>" +
      "<p><b>↗ Восходящая</b> — в вопросах «да/нет»: <i>Are you a student↗?</i> " + say("Are you a student?") + "</p>" +
      "<p>В перечислениях голос поднимается на каждом пункте и падает на последнем: <i>tea↗, coffee↗ or juice↘</i>. Вежливая просьба звучит мягче и выше: <i>Could you help me, please↗?</i></p>" }
  ];

  EN.about =
    "<h3>Что это</h3><p>«Английский для чайников» — бесплатный курс английского с нуля до уровня <b>A2</b> (уверенный базовый). Он входит в проект «Языки для чайников» вместе с казахским курсом.</p>" +
    "<h3>Как устроен уровень</h3><p>Каждый из 30 уровней состоит из шести блоков: <b>слова</b> (10 новых, с IPA и озвучкой UK/US) → <b>звуки</b> (произношение, ударение, интонация) → <b>грамматика</b> (правило с объяснением «почему» и сразу практика) → <b>аудирование</b> (диалог на слух, вопросы, потом текст) → <b>практика</b> (сборка и перевод предложений, диктант, повторение старых слов) → <b>босс-тест</b> (нужно 80%). Теория всегда закрепляется практикой. Прохождение уровня занимает примерно 25–40 минут, блоки сохраняются — можно прерваться.</p>" +
    "<h3>Озвучка и микрофон</h3><p>Слова и диалоги озвучивает голос вашего браузера или телефона, поэтому звучание зависит от устройства. Лучше всего — Chrome, Edge или Safari. Проверка произношения кнопкой «🎙 Скажи» работает там, где браузер умеет распознавать речь (Chrome, Edge). Оценка ориентировочная.</p>" +
    "<h3>Прогресс</h3><p>Хранится только в этом браузере, отдельно от казахского курса. Перенести его можно кодом в разделе «Профиль и настройки».</p>" +
    "<h3>Кто сделал</h3><p>Сайт создан студенткой, которая поступила учиться в Республику Казахстан и сама не казашка. Английский для автора не родной, поэтому в текстах возможны ошибки. Сайт не заменяет учителя и не выдаёт сертификатов.</p>" +
    "<p><b>Не для коммерческого использования:</b> только для развлекательных и познавательных целей. Здесь нет рекламы, платных разделов и продаж.</p><p>Автор: Сулустанова Анжелина.</p>";

  var A = EN.lessons;

  // ===================== МИР 1 =====================
  A.push({ id: 1, world: 1, en: "Hello!", ru: "Привет и знакомство", topic: "Приветствия",
    goal: "Поздороваться, представиться, сказать «спасибо» и «пожалуйста», назвать своё имя по буквам.",
    w: [
      ["hello", "həˈləʊ", "həˈloʊ", "привет; здравствуйте", "Hello, Anna!", "Привет, Анна!"],
      ["hi", "haɪ", "", "привет (неформально)", "Hi! How are you?", "Привет! Как дела?"],
      ["goodbye", "ˌɡʊdˈbaɪ", "", "до свидания", "Goodbye, see you tomorrow!", "До свидания, увидимся завтра!"],
      ["bye", "baɪ", "", "пока", "Bye, Tom!", "Пока, Том!"],
      ["please", "pliːz", "", "пожалуйста (в просьбе)", "Tea, please.", "Чай, пожалуйста."],
      ["thank you", "ˈθæŋk juː", "", "спасибо", "Thank you very much!", "Большое спасибо!"],
      ["yes", "jes", "", "да", "Yes, please.", "Да, пожалуйста."],
      ["no", "nəʊ", "noʊ", "нет", "No, thank you.", "Нет, спасибо."],
      ["sorry", "ˈsɒri", "ˈsɑːri", "извините; простите", "Sorry, I'm late.", "Извините, я опоздал."],
      ["name", "neɪm", "", "имя", "My name is Anna.", "Меня зовут Анна."]
    ],
    p: { t: "Звук /h/ и английский алфавит", ipa: "/h/",
      html: "<p>Английский <b>/h/</b> — это просто выдох, как будто греете руки дыханием. Он намного мягче русского «х»: язык не трётся о нёбо. " + say("hello") + " " + say("hi") + "</p>" +
        "<p>Если пропустить /h/, получится другое слово: <b>high</b> (высокий) и <b>eye</b> (глаз).</p>" +
        "<h3>Буквы и их названия</h3><p>Названия букв пригодятся, чтобы продиктовать имя: <b>How do you spell it?</b> — «Как это пишется?». Гласные называются так: A /eɪ/, E /iː/, I /aɪ/, O /əʊ/, U /juː/. Чаще всего путают: <b>E</b> /iː/ и <b>I</b> /aɪ/, <b>G</b> /dʒiː/ и <b>J</b> /dʒeɪ/, <b>R</b> /ɑː/.</p>",
      ukus: "звук /h/ одинаковый. А вот буква Z называется по-разному: в Британии «зед» /zed/, в Америке «зи» /ziː/. Буква R в Америке звучит с «р» на конце: /ɑːr/.",
      pairs: [["high", "eye"], ["hat", "at"], ["hand", "and"]], drill: ["hello", "hi", "house", "happy", "who"] },
    g: { t: "Знакомство: My name is… / I'm…",
      html: "<p><b>My name is Anna.</b> — Меня зовут Анна. Дословно: «Моё имя <mark>есть</mark> Анна».</p>" +
        "<div class='why'><b>Почему is?</b> В английском предложении обязательно есть глагол. По-русски мы говорим «я студент» без глагола, а англичанин скажет «я <i>есть</i> студент». Глагол «быть» — <b>am / is / are</b>; подробно его разберём на уровне 2.</div>" +
        "<table><tr><th>Фраза</th><th>Перевод</th><th>Когда</th></tr>" +
        "<tr><td>My name is Tom. / I'm Tom.</td><td>Меня зовут Том. / Я Том.</td><td>представиться</td></tr>" +
        "<tr><td>What's your name?</td><td>Как тебя (вас) зовут?</td><td>спросить имя</td></tr>" +
        "<tr><td>Nice to meet you.</td><td>Приятно познакомиться.</td><td>после знакомства</td></tr>" +
        "<tr><td>How do you spell it?</td><td>Как это пишется?</td><td>попросить продиктовать</td></tr>" +
        "<tr><td>You're welcome.</td><td>Пожалуйста / не за что.</td><td>ответ на «спасибо»</td></tr></table>" +
        "<div class='why'><b>Два «пожалуйста».</b> <b>Please</b> — в просьбе («Чай, пожалуйста»). <b>You're welcome</b> — в ответ на благодарность. Сказать «Please» в ответ на «Thank you» — ошибка.</div>" +
        "<p class='brk'>Разбор: I'm = I + am («я есть»). What's = what + is («что есть»).</p>",
      tasks: [
        ["c", "My name ___ Anna.", "is|am|are", 0, "<b>My name</b> — «моё имя», это «оно», одно. С ним ставим <b>is</b>."],
        ["c", "___ Tom. (= Я Том.)", "I'm|I|My", 0, "<b>I'm</b> = I am. Без глагола am предложение неполное: «I Tom» — ошибка."],
        ["c", "— Thank you! — ___", "You're welcome.|Please.|Goodbye.", 0, "На «спасибо» отвечают <b>You're welcome</b>. <b>Please</b> — только в просьбе."],
        ["c", "Water, ___. (= Воды, пожалуйста.)", "please|thank you|sorry", 0, "В просьбе — <b>please</b>."],
        ["c", "Как попросить продиктовать имя по буквам?", "How do you spell it?|How are you?|What is it?", 0, "<b>spell</b> — называть по буквам."],
        ["t", "Меня зовут Анна.", "My name is Anna.|My name's Anna.|I'm Anna.|I am Anna.", "My name is… или коротко I'm…"],
        ["t", "Приятно познакомиться.", "Nice to meet you.|Nice to meet you too.", "Устойчивая фраза: Nice to meet you."],
        ["b", "Hello, my name is Tom.", "Привет, меня зовут Том.", "Порядок: приветствие, потом My name is…"]
      ] },
    d: { t: "Знакомство в университете",
      l: [["A", "Hello! My name is Tom.", "Привет! Меня зовут Том."], ["B", "Hi, Tom! I'm Anna.", "Привет, Том! Я Анна."], ["A", "Nice to meet you, Anna.", "Приятно познакомиться, Анна."],
        ["B", "Nice to meet you too.", "Мне тоже приятно."], ["A", "How do you spell your name?", "Как пишется твоё имя?"], ["B", "A, N, N, A.", "Эй, эн, эн, эй."], ["A", "Thank you! Goodbye!", "Спасибо! До свидания!"], ["B", "Bye, Tom!", "Пока, Том!"]],
      q: [["Как зовут девушку?", "Анна|Том|Ана", 0, "B: I'm Anna."], ["О чём Том спрашивает в конце?", "Как пишется её имя|Откуда она|Сколько ей лет", 0, "How do you spell your name?"], ["Как они прощаются?", "Goodbye и Bye|Hello и Hi|Please и Sorry", 0, ""]] },
    s: [["Hello, I am Anna.", "Привет, я Анна.", "Hello, I'm Anna.|Hi, I am Anna.|Hi, I'm Anna."], ["Nice to meet you.", "Приятно познакомиться."], ["Thank you, goodbye!", "Спасибо, до свидания!", "Thank you, goodbye."]]
  });

  A.push({ id: 2, world: 1, en: "I am a student", ru: "Глагол to be", topic: "Люди и страны",
    goal: "Сказать, кто вы и откуда, рассказать о другом человеке: am, is, are и местоимения.",
    w: [
      ["student", "ˈstjuːdnt", "ˈstuːdnt", "студент, студентка", "I am a student.", "Я студент."],
      ["teacher", "ˈtiːtʃə", "ˈtiːtʃər", "учитель, преподаватель", "She is a teacher.", "Она учительница."],
      ["friend", "frend", "", "друг, подруга", "He is my friend.", "Он мой друг."],
      ["country", "ˈkʌntri", "", "страна", "Kazakhstan is a big country.", "Казахстан — большая страна."],
      ["city", "ˈsɪti", "ˈsɪt̬i", "город", "Almaty is a big city.", "Алматы — большой город."],
      ["from", "frɒm", "frʌm", "из (откуда)", "I am from Almaty.", "Я из Алматы."],
      ["he", "hiː", "", "он", "He is from London.", "Он из Лондона."],
      ["she", "ʃiː", "", "она", "She is a student.", "Она студентка."],
      ["we", "wiː", "", "мы", "We are friends.", "Мы друзья."],
      ["they", "ðeɪ", "", "они", "They are from Kazakhstan.", "Они из Казахстана."]
    ],
    p: { t: "Звуки th: /θ/ и /ð/", ipa: "/θ/ /ð/",
      html: "<p>Буквы <b>th</b> дают два звука, которых нет в русском. Положите кончик языка между зубами и выдохните: глухо — <b>/θ/</b> (think, thank), со звоном голоса — <b>/ð/</b> (this, they, the).</p>" +
        "<div class='why'><b>Частая ошибка:</b> заменять th на «с», «з», «ф» или «т». Тогда <b>think</b> (думать) превращается в <b>sink</b> (раковина), а <b>three</b> (три) — в <b>tree</b> (дерево).</div>",
      ukus: "звуки одинаковы в обоих вариантах. В разговорной речи некоторых британцев th звучит как «ф» (three → «фри»), но это просторечие — так учить не нужно.",
      pairs: [["think", "sink"], ["three", "tree"], ["they", "day"]], drill: ["the", "this", "they", "think", "thank you", "three"] },
    g: { t: "Глагол to be: am, is, are",
      html: "<p>По-русски: «Я студент». По-английски обязательно нужен глагол: <b>I am a student</b> — «я <i>есть</i> студент».</p>" +
        "<table><tr><th>Кто</th><th>Глагол</th><th>Коротко</th><th>Пример</th></tr>" +
        "<tr><td>I (я)</td><td>am</td><td>I'm</td><td>I am a student.</td></tr>" +
        "<tr><td>he / she / it (он, она, оно)</td><td>is</td><td>he's, she's, it's</td><td>She is from London.</td></tr>" +
        "<tr><td>you / we / they (ты, вы, мы, они)</td><td>are</td><td>you're, we're, they're</td><td>We are friends.</td></tr></table>" +
        "<div class='why'><b>Как выбрать форму?</b> Посмотрите на подлежащее: <b>I</b> → am; один человек или предмет → is; несколько или <b>you</b> → are. <b>You</b> — это и «ты», и «вы», и глагол с ним всегда <b>are</b>.</div>" +
        "<p class='brk'>Перед профессией в единственном числе ставится <b>a</b>: I am <b>a</b> student. Почему — разберём на уровне 5.</p>",
      tasks: [
        ["c", "I ___ a student.", "am|is|are", 0, "С <b>I</b> — только <b>am</b>."],
        ["c", "She ___ a teacher.", "is|am|are", 0, "<b>She</b> — один человек → <b>is</b>."],
        ["c", "We ___ friends.", "are|is|am", 0, "<b>We</b> — несколько человек → <b>are</b>."],
        ["c", "They ___ from London.", "are|is|am", 0, "<b>They</b> → <b>are</b>."],
        ["c", "He ___ from Almaty.", "is|are|am", 0, "<b>He</b> → <b>is</b>."],
        ["c", "You ___ my friend.", "are|is|am", 0, "<b>You</b> всегда с <b>are</b>, даже если это один человек."],
        ["t", "Я студент.", "I am a student.|I'm a student.", "I + am, перед профессией a."],
        ["t", "Она из Казахстана.", "She is from Kazakhstan.|She's from Kazakhstan.", "She + is + from."],
        ["b", "We are from Almaty.", "Мы из Алматы.", "We + are."]
      ] },
    d: { t: "Новый друг",
      l: [["A", "Hi! I'm Dana. I'm a student.", "Привет! Я Дана. Я студентка."], ["B", "Hello, Dana! I'm Mark. I'm a student too.", "Привет, Дана! Я Марк. Я тоже студент."],
        ["A", "Where are you from, Mark?", "Откуда ты, Марк?"], ["B", "I'm from London. And you?", "Я из Лондона. А ты?"], ["A", "I'm from Almaty. It's a big city.", "Я из Алматы. Это большой город."], ["B", "Cool! My teacher is from Almaty too.", "Классно! Мой преподаватель тоже из Алматы."]],
      q: [["Откуда Марк?", "Из Лондона|Из Алматы|Из Москвы", 0, "I'm from London."], ["Кто Дана?", "Студентка|Учительница|Подруга учителя", 0, "I'm a student."], ["Что Дана говорит об Алматы?", "Это большой город|Это маленький город|Это её страна", 0, "It's a big city."]] },
    s: [["I am from Kazakhstan.", "Я из Казахстана.", "I'm from Kazakhstan."], ["She is a teacher.", "Она учитель.", "She's a teacher."], ["They are my friends.", "Они мои друзья.", "They're my friends."]]
  });

  A.push({ id: 3, world: 1, en: "Are you OK?", ru: "Вопросы и отрицания с to be", topic: "Чувства и состояние",
    goal: "Спросить, как дела у собеседника, и ответить «да» или «нет» коротким ответом.",
    w: [
      ["happy", "ˈhæpi", "", "счастливый, довольный", "I am happy today.", "Я сегодня счастлив."],
      ["sad", "sæd", "", "грустный", "Why are you sad?", "Почему ты грустишь?"],
      ["tired", "ˈtaɪəd", "ˈtaɪərd", "уставший", "She is tired.", "Она устала."],
      ["hungry", "ˈhʌŋɡri", "", "голодный", "Are you hungry?", "Ты голоден?"],
      ["busy", "ˈbɪzi", "", "занятой", "He is busy now.", "Он сейчас занят."],
      ["fine", "faɪn", "", "хорошо, в порядке", "I'm fine, thanks.", "У меня всё хорошо, спасибо."],
      ["good", "ɡʊd", "", "хороший", "It is a good day.", "Хороший день."],
      ["bad", "bæd", "", "плохой", "That is a bad idea.", "Это плохая идея."],
      ["cold", "kəʊld", "koʊld", "холодный; замёрзший", "I am cold.", "Мне холодно."],
      ["late", "leɪt", "", "поздний; опоздавший", "Sorry, I am late.", "Извините, я опоздал."]
    ],
    p: { t: "Звуки /æ/ и /e/", ipa: "/æ/ /e/",
      html: "<p><b>/æ/</b> — широко откройте рот, как для «а», и скажите «э». Получится звук между ними: <b>bad, sad, man</b>. <b>/e/</b> — обычное «э», рот почти закрыт: <b>bed, said, men</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>bad</b> (плохой) и <b>bed</b> (кровать), <b>man</b> (мужчина) и <b>men</b> (мужчины) отличаются только этим звуком.</div>",
      ukus: "в словах bath, ask, can't, after британцы говорят долгое /ɑː/ (/bɑːθ/), а американцы — /æ/ (/bæθ/). " + say("bath", "uk") + " " + say("bath", "us"),
      pairs: [["bad", "bed"], ["man", "men"], ["sad", "said"]], drill: ["bad", "bed", "happy", "sad", "said", "cat"] },
    g: { t: "To be: вопросы, «нет» и короткие ответы",
      html: "<h3>Отрицание: добавьте not</h3><table><tr><th>Полно</th><th>Коротко</th></tr><tr><td>I am not tired.</td><td>I'm not tired.</td></tr><tr><td>He is not busy.</td><td>He isn't busy. / He's not busy.</td></tr><tr><td>They are not hungry.</td><td>They aren't hungry.</td></tr></table>" +
        "<div class='why'><b>Почему с I нет «amn't»?</b> Такой формы просто нет в языке. С I говорят только <b>I'm not</b>.</div>" +
        "<h3>Вопрос: глагол меняется местами с подлежащим</h3><p>You <b>are</b> tired. → <b>Are</b> you tired? · She <b>is</b> busy. → <b>Is</b> she busy?</p>" +
        "<div class='why'><b>Почему меняется порядок?</b> По-русски вопрос задают одной интонацией («Ты устал?»). По-английски вопрос показывают <b>порядком слов</b>: глагол встаёт на первое место.</div>" +
        "<h3>Короткие ответы</h3><p>— Are you hungry? — <b>Yes, I am.</b> / <b>No, I'm not.</b></p><p class='brk'>В ответе повторяем глагол из вопроса. «Yes, I'm» в конце фразы сокращать нельзя.</p>",
      tasks: [
        ["c", "___ you tired?", "Are|Is|Am", 0, "С <b>you</b> — <b>are</b>, и в вопросе глагол стоит первым."],
        ["c", "She ___ hungry. (= Она не голодна.)", "isn't|aren't|not", 0, "She → is, отрицание → <b>isn't</b>."],
        ["c", "— Are you busy? — Yes, I ___.", "am|is|are", 0, "Короткий ответ повторяет глагол: <b>Yes, I am.</b>"],
        ["c", "— Is he happy? — No, he ___.", "isn't|aren't|not", 0, "He → is → <b>isn't</b>."],
        ["c", "I ___ late. (= Я не опоздал.)", "am not|isn't|aren't", 0, "С I — только <b>am not</b>."],
        ["c", "___ they cold?", "Are|Is|Am", 0, "They → <b>are</b>."],
        ["t", "Ты голоден?", "Are you hungry?", "Глагол are — первым."],
        ["t", "Я не устал.", "I am not tired.|I'm not tired.", "I'm not + прилагательное."],
        ["b", "Is she from London?", "Она из Лондона?", "Is на первом месте."]
      ] },
    d: { t: "Как дела?",
      l: [["A", "Hi, Sam! Are you OK?", "Привет, Сэм! Ты в порядке?"], ["B", "Hi! I'm fine, thanks. But I'm very tired.", "Привет! Нормально, спасибо. Но я очень устал."], ["A", "Are you busy today?", "Ты сегодня занят?"],
        ["B", "Yes, I am. And I'm hungry too!", "Да. И ещё я голоден!"], ["A", "Me too. Let's have lunch.", "Я тоже. Давай пообедаем."], ["B", "Good idea!", "Хорошая идея!"]],
      q: [["Как себя чувствует Сэм?", "Нормально, но очень устал|Плохо и грустно|Ему холодно", 0, "I'm fine… but I'm very tired."], ["Занят ли Сэм сегодня?", "Да|Нет|Не сказано", 0, "Yes, I am."], ["Что предлагают в конце?", "Пообедать|Поспать|Пойти в кино", 0, "Let's have lunch."]] },
    s: [["I am not hungry.", "Я не голоден.", "I'm not hungry."], ["Are you happy?", "Ты счастлив?"], ["He is not busy today.", "Он сегодня не занят.", "He isn't busy today.|He's not busy today."]]
  });

  A.push({ id: 4, world: 1, en: "Numbers", ru: "Числа и возраст", topic: "Числа",
    goal: "Считать до ста, назвать свой возраст и цену, не путать thirteen и thirty.",
    w: [
      ["one", "wʌn", "", "один", "One coffee, please.", "Один кофе, пожалуйста."],
      ["two", "tuː", "", "два", "Two teas, please.", "Два чая, пожалуйста."],
      ["three", "θriː", "", "три", "Three students are late.", "Три студента опаздывают."],
      ["four", "fɔː", "fɔːr", "четыре", "I am four years old.", "Мне четыре года."],
      ["five", "faɪv", "", "пять", "Five plus five is ten.", "Пять плюс пять — десять."],
      ["ten", "ten", "", "десять", "It is ten dollars.", "Это стоит десять долларов."],
      ["twelve", "twelv", "", "двенадцать", "My brother is twelve.", "Моему брату двенадцать."],
      ["twenty", "ˈtwenti", "ˈtwen(t)i", "двадцать", "I am twenty years old.", "Мне двадцать лет."],
      ["hundred", "ˈhʌndrəd", "", "сто", "It is a hundred dollars.", "Это стоит сто долларов."],
      ["old", "əʊld", "oʊld", "старый; (о возрасте) … лет", "How old are you?", "Сколько тебе лет?"]
    ],
    p: { t: "Ударение в числах: thirteen или thirty?", ipa: "ˈ",
      html: "<p>Числа 13–19 оканчиваются на <b>-teen</b>, и ударение падает на конец: thir<b>TEEN</b> /ˌθɜːˈtiːn/. Десятки оканчиваются на <b>-ty</b> с ударением в начале: <b>THIR</b>ty /ˈθɜːti/.</p>" +
        "<div class='why'><b>Подсказка:</b> в -teen долгий звук /iː/ и чёткое t. В -ty — короткое /i/. Если не расслышали цену, переспросите: <b>Fifteen or fifty?</b></div>",
      ukus: "в американском t между гласными звучит как быстрое «д»: thirty /ˈθɝːt̬i/, а twenty часто звучит как «твэни». " + say("thirty", "uk") + " " + say("thirty", "us"),
      pairs: [["thirteen", "thirty"], ["fourteen", "forty"], ["fifteen", "fifty"]], drill: ["thirteen", "thirty", "fifteen", "fifty", "a hundred"] },
    g: { t: "Числа и возраст: I am 20",
      html: "<table><tr><th>1–12</th><th>13–19 (+teen)</th><th>Десятки (+ty)</th></tr>" +
        "<tr><td>one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve</td><td>thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen</td><td>twenty, thirty, forty, fifty, sixty, seventy, eighty, ninety</td></tr></table>" +
        "<p>Составные пишутся через дефис: <b>twenty-one</b>, <b>forty-five</b>. Сотни: <b>a hundred</b>, <b>two hundred</b> — без -s.</p>" +
        "<div class='why'><b>Почему hundred без -s?</b> Число перед ним уже показывает количество: two hundred, five hundred. Форма hundreds бывает только без числа: «hundreds of people» — «сотни людей».</div>" +
        "<div class='why'><b>Возраст — через to be.</b> По-русски «мне 20 лет», по-английски «я <i>есть</i> 20 лет»: <b>I am twenty (years old)</b>. Сказать «I have 20 years» — ошибка. Вопрос: <b>How old are you?</b></div>" +
        "<p class='brk'>Особые формы: five → <b>fif</b>teen, <b>fif</b>ty; three → <b>thir</b>teen; four → <b>for</b>ty (без u!).</p>",
      tasks: [
        ["c", "I ___ eighteen years old.", "am|have|is", 0, "Возраст — через to be: <b>I am</b> 18."],
        ["c", "Как спросить «Сколько тебе лет?»", "How old are you?|How many are you?|What old are you?", 0, "Устойчивый вопрос: <b>How old are you?</b>"],
        ["c", "21 =", "twenty-one|twenty one teen|two-one", 0, "Десятки + единицы через дефис."],
        ["c", "300 =", "three hundred|three hundreds|thirty hundred", 0, "После числа hundred без -s."],
        ["c", "15 =", "fifteen|fifty|fiveteen", 0, "five → <b>fif</b>teen."],
        ["c", "40 =", "forty|fourty|fourteen", 0, "Пишется <b>forty</b> — без u."],
        ["t", "Мне двадцать лет.", "I am twenty years old.|I'm twenty years old.|I am twenty.|I'm twenty.|I am 20.|I'm 20.|I am 20 years old.|I'm 20 years old.", "I am + число (+ years old)."],
        ["t", "Ему тринадцать.", "He is thirteen.|He's thirteen.|He is 13.|He's 13.|He is thirteen years old.|He's thirteen years old.", "He is + число."],
        ["b", "How old is your brother?", "Сколько лет твоему брату?", "How old + is + о ком спрашиваем."]
      ] },
    d: { t: "В кафе: сколько стоит?",
      l: [["A", "Hello! How much is the tea?", "Здравствуйте! Сколько стоит чай?"], ["B", "It's two dollars.", "Два доллара."], ["A", "And the cake?", "А торт?"], ["B", "Fifteen dollars.", "Пятнадцать долларов."],
        ["A", "Fifteen or fifty?", "Пятнадцать или пятьдесят?"], ["B", "Fifteen. One, five.", "Пятнадцать. Один, пять."], ["A", "OK. One tea and one cake, please.", "Хорошо. Один чай и один торт, пожалуйста."], ["B", "That's seventeen dollars.", "С вас семнадцать долларов."]],
      q: [["Сколько стоит чай?", "2 доллара|12 долларов|20 долларов", 0, "It's two dollars."], ["Сколько стоит торт?", "15 долларов|50 долларов|5 долларов", 0, "Fifteen. One, five."], ["Сколько нужно заплатить?", "17 долларов|70 долларов|7 долларов", 0, "That's seventeen dollars."]] },
    s: [["I am nineteen years old.", "Мне девятнадцать лет.", "I'm nineteen years old.|I'm nineteen.|I am nineteen.|I am 19.|I'm 19."], ["Two teas, please.", "Два чая, пожалуйста."], ["She is twenty-five.", "Ей двадцать пять.", "She's twenty-five.|She is 25.|She's 25.|She is twenty-five years old."]]
  });

  A.push({ id: 5, world: 1, en: "A book, two books", ru: "Артикль a/an и множественное число", topic: "Вещи и учёба",
    goal: "Называть предметы с a/an, говорить о нескольких предметах и правильно произносить окончание -s.",
    w: [
      ["book", "bʊk", "", "книга", "It is a good book.", "Это хорошая книга."],
      ["pen", "pen", "", "ручка", "It is a red pen.", "Это красная ручка."],
      ["bag", "bæɡ", "", "сумка", "Where is my bag?", "Где моя сумка?"],
      ["phone", "fəʊn", "foʊn", "телефон", "My phone is new.", "Мой телефон новый."],
      ["apple", "ˈæpl", "", "яблоко", "An apple a day keeps the doctor away.", "Яблоко в день — и доктор не нужен."],
      ["egg", "eɡ", "", "яйцо", "I want two eggs.", "Я хочу два яйца."],
      ["box", "bɒks", "bɑːks", "коробка", "The box is empty.", "Коробка пустая."],
      ["watch", "wɒtʃ", "wɑːtʃ", "наручные часы; смотреть", "Your watch is nice.", "У тебя красивые часы."],
      ["umbrella", "ʌmˈbrelə", "", "зонт", "Take an umbrella!", "Возьми зонт!"],
      ["key", "kiː", "", "ключ", "Where are my keys?", "Где мои ключи?"]
    ],
    p: { t: "Окончание -s: /s/, /z/ или /ɪz/", ipa: "/s/ /z/ /ɪz/",
      html: "<p>Окончание множественного числа звучит по-разному, и это зависит от последнего звука слова:</p>" +
        "<table><tr><th>Звук</th><th>Когда</th><th>Примеры</th></tr><tr><td>/s/</td><td>после глухих p, t, k, f</td><td>books, cups</td></tr><tr><td>/z/</td><td>после звонких и гласных</td><td>pens, bags, keys</td></tr><tr><td>/ɪz/</td><td>после s, z, ш, ч, дж (-es)</td><td>boxes, watches</td></tr></table>" +
        "<div class='why'><b>Почему так?</b> Глухой звук легко переходит в глухой /s/, звонкий — в звонкий /z/. А после шипящих нужен гласный /ɪ/, иначе два шипящих слились бы в один.</div>",
      ukus: "окончание звучит одинаково. Отличается само слово box: в Британии /bɒks/ с округлённым «о», в Америке /bɑːks/, почти «а». " + say("box", "uk") + " " + say("box", "us"),
      pairs: [["ice", "eyes"], ["price", "prize"], ["bus", "buzz"]], drill: ["books", "pens", "bags", "boxes", "watches", "keys"] },
    g: { t: "a / an и множественное число",
      html: "<p><b>a / an</b> ставят перед одним предметом, когда он «какой-то, один из многих»: <b>a book</b>, <b>an apple</b>.</p>" +
        "<div class='why'><b>Почему a и an?</b> Артикль произошёл от слова <i>one</i> («один»). <b>an</b> ставится перед гласным <b>звуком</b>, чтобы два гласных не сталкивались: an apple, an egg, <b>an hour</b> (h не читается). Перед согласным звуком — <b>a</b>: a book, <b>a university</b> (звучит /juː/ — «ю»).</div>" +
        "<h3>Много предметов: +s</h3><table><tr><th>Правило</th><th>Пример</th></tr><tr><td>обычно +s</td><td>book → books, key → keys</td></tr><tr><td>после s, x, ch, sh → +es</td><td>box → boxes, watch → watches</td></tr><tr><td>согласная + y → ies</td><td>city → cities</td></tr><tr><td>особые слова</td><td>man → men, woman → women, child → children</td></tr></table>" +
        "<p class='brk'>С множественным числом <b>a/an не ставят</b>: a book → books (не «a books»).</p>",
      tasks: [
        ["c", "___ apple", "an|a|—", 0, "apple начинается с гласного звука → <b>an</b>."],
        ["c", "___ book", "a|an|—", 0, "book — согласный звук → <b>a</b>."],
        ["c", "___ umbrella", "an|a|—", 0, "umbrella /ʌm-/ — гласный звук → <b>an</b>."],
        ["c", "___ university", "a|an|—", 0, "university звучит /juː/ — согласный звук «й» → <b>a</b>."],
        ["c", "two ___", "boxes|boxs|box", 0, "После x → <b>-es</b>."],
        ["c", "three ___", "watches|watchs|watch", 0, "После ch → <b>-es</b>."],
        ["c", "I need ___ keys.", "—|a|an", 0, "<b>keys</b> — много, a/an не нужен."],
        ["t", "Это яблоко.", "It is an apple.|It's an apple.|This is an apple.", "an перед apple."],
        ["t", "две книги", "two books", "book + s."],
        ["b", "I need a pen and two books.", "Мне нужна ручка и две книги.", "a pen — одна, books — много."]
      ] },
    d: { t: "Собираемся на занятия",
      l: [["A", "Where is my bag?", "Где моя сумка?"], ["B", "It's on the chair.", "На стуле."], ["A", "Thanks. A book, two pens, an apple…", "Спасибо. Книга, две ручки, яблоко…"], ["B", "And your phone?", "А телефон?"],
        ["A", "My phone is in my bag. But where are my keys?", "Телефон в сумке. А где мои ключи?"], ["B", "Your keys are on the table!", "Ключи на столе!"], ["A", "Oh, thank you! And an umbrella. It's raining.", "Ой, спасибо! И зонт. Идёт дождь."]],
      q: [["Где сумка?", "На стуле|На столе|В шкафу", 0, "It's on the chair."], ["Сколько ручек берёт A?", "Две|Одну|Три", 0, "two pens"], ["Зачем нужен зонт?", "Идёт дождь|Солнечно|Холодно", 0, "It's raining."]] },
    s: [["It is an umbrella.", "Это зонт.", "It's an umbrella.|This is an umbrella."], ["I need two eggs.", "Мне нужно два яйца."], ["My keys are in the bag.", "Мои ключи в сумке.", "My keys are in my bag."]]
  });

  A.push({ id: 6, world: 1, en: "This is my room", ru: "this / that / these / those и the", topic: "Дом и предметы",
    goal: "Показывать на предметы рядом и вдали, понимать разницу между a и the.",
    w: [
      ["table", "ˈteɪbl", "", "стол", "The cups are on the table.", "Чашки на столе."],
      ["chair", "tʃeə", "tʃer", "стул", "This chair is new.", "Этот стул новый."],
      ["window", "ˈwɪndəʊ", "ˈwɪndoʊ", "окно", "Open the window, please.", "Открой окно, пожалуйста."],
      ["door", "dɔː", "dɔːr", "дверь", "Close the door, please.", "Закрой дверь, пожалуйста."],
      ["room", "ruːm", "", "комната", "This is my room.", "Это моя комната."],
      ["bed", "bed", "", "кровать", "My bed is big.", "У меня большая кровать."],
      ["lamp", "læmp", "", "лампа", "That lamp is old.", "Та лампа старая."],
      ["picture", "ˈpɪktʃə", "ˈpɪktʃər", "картина; фотография", "I like these pictures.", "Мне нравятся эти картины."],
      ["cup", "kʌp", "", "чашка", "A cup of tea, please.", "Чашку чая, пожалуйста."],
      ["flat", "flæt", "", "квартира (UK; в США — apartment)", "Welcome to my flat!", "Добро пожаловать в мою квартиру!"]
    ],
    p: { t: "Короткий /ɪ/ и долгий /iː/", ipa: "/ɪ/ /iː/",
      html: "<p><b>/ɪ/</b> — короткий расслабленный звук между «и» и «ы»: <b>this, sit, ship</b>. <b>/iː/</b> — долгое напряжённое «и», губы слегка растянуты в улыбку: <b>these, seat, sheep</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>this</b> (этот) — <b>these</b> (эти), <b>live</b> (жить) — <b>leave</b> (уходить), <b>ship</b> (корабль) — <b>sheep</b> (овца). Долгота меняет смысл.</div>",
      ukus: "звуки одинаковые, а слова для жилья разные. Британцы говорят <b>flat</b>, американцы — <b>apartment</b>. Так же: lift / elevator (лифт), mobile / cell phone (мобильный).",
      pairs: [["ship", "sheep"], ["live", "leave"], ["sit", "seat"], ["this", "these"]], drill: ["this", "these", "sit", "seat", "it", "eat"] },
    g: { t: "this, that, these, those и артикль the",
      html: "<table><tr><th></th><th>рядом</th><th>далеко</th></tr><tr><td>один предмет</td><td><b>this</b> — этот</td><td><b>that</b> — тот</td></tr><tr><td>много</td><td><b>these</b> — эти</td><td><b>those</b> — те</td></tr></table>" +
        "<div class='why'><b>Как выбрать?</b> Задайте себе два вопроса: близко или далеко? Один или много? Ответы дадут одно из четырёх слов. После these/those глагол <b>are</b>: These chairs <b>are</b> new.</div>" +
        "<h3>a или the?</h3><p><b>a</b> — «какой-то, один из», когда упоминаем впервые. <b>the</b> — «тот самый», когда понятно, о чём речь.</p>" +
        "<p>I have <b>a</b> cat. <b>The</b> cat is black. — У меня есть кошка. (Эта) кошка чёрная.</p>" +
        "<div class='why'><b>Почему the?</b> Слово произошло от <i>that</i>. Ставьте <b>the</b>, если собеседник знает, какой предмет имеется в виду: <b>Close the door</b> — дверь в этой комнате понятна обоим.</div>",
      tasks: [
        ["c", "___ is my room. (рядом, одна)", "This|These|Those", 0, "Рядом + один → <b>this</b>."],
        ["c", "___ chairs are new. (рядом, много)", "These|This|That", 0, "Рядом + много → <b>these</b>."],
        ["c", "___ window over there is open.", "That|These|This", 0, "over there — далеко, одно окно → <b>that</b>."],
        ["c", "Look at ___ birds in the sky!", "those|this|these", 0, "Далеко + много → <b>those</b>."],
        ["c", "I have a cat. ___ cat is black.", "The|A|An", 0, "Кошка уже упомянута → <b>the</b>."],
        ["c", "Close ___ door, please.", "the|a|an", 0, "Обоим понятно, какая дверь → <b>the</b>."],
        ["t", "Это мой стол.", "This is my table.", "Рядом, один → this is."],
        ["t", "Те стулья старые.", "Those chairs are old.", "Далеко, много → those … are."],
        ["b", "These cups are on the table.", "Эти чашки на столе.", "these + are."]
      ] },
    d: { t: "Новая квартира",
      l: [["A", "Welcome to my flat!", "Добро пожаловать в мою квартиру!"], ["B", "Wow, it's nice! Is this your room?", "Ух ты, здорово! Это твоя комната?"], ["A", "Yes. This is my bed, and that is my table.", "Да. Это моя кровать, а то — мой стол."],
        ["B", "I like these pictures.", "Мне нравятся эти картины."], ["A", "Thank you. Those pictures are from London.", "Спасибо. Те картины из Лондона."], ["B", "And that door?", "А та дверь?"], ["A", "That's the kitchen.", "Там кухня."]],
      q: [["Где они?", "В квартире|В университете|В кафе", 0, "Welcome to my flat!"], ["Откуда картины?", "Из Лондона|Из Алматы|Из магазина", 0, "Those pictures are from London."], ["Что за той дверью?", "Кухня|Ванная|Спальня", 0, "That's the kitchen."]] },
    s: [["This is my room.", "Это моя комната."], ["That window is open.", "То окно открыто."], ["These cups are new.", "Эти чашки новые."]]
  });

  // ===================== МИР 2 =====================
  A.push({ id: 7, world: 2, en: "My family", ru: "Притяжательные слова и 's", topic: "Семья",
    goal: "Рассказать о семье: my, your, his, her, our, their и конструкция Anna's brother.",
    w: [
      ["mother", "ˈmʌðə", "ˈmʌðər", "мама, мать", "My mother is a doctor.", "Моя мама — врач."],
      ["father", "ˈfɑːðə", "ˈfɑːðər", "папа, отец", "His father is from Almaty.", "Его папа из Алматы."],
      ["sister", "ˈsɪstə", "ˈsɪstər", "сестра", "Her sister is a student.", "Её сестра — студентка."],
      ["brother", "ˈbrʌðə", "ˈbrʌðər", "брат", "My brother is twelve.", "Моему брату двенадцать."],
      ["parents", "ˈpeərənts", "ˈperənts", "родители", "Our parents are teachers.", "Наши родители — учителя."],
      ["son", "sʌn", "", "сын", "Their son is five.", "Их сыну пять лет."],
      ["daughter", "ˈdɔːtə", "ˈdɔːt̬ər", "дочь", "This is my daughter, Aliya.", "Это моя дочь Алия."],
      ["husband", "ˈhʌzbənd", "", "муж", "Her husband is an engineer.", "Её муж — инженер."],
      ["wife", "waɪf", "", "жена", "His wife is a nurse.", "Его жена — медсестра."],
      ["family", "ˈfæməli", "", "семья", "I love my family.", "Я люблю свою семью."]
    ],
    p: { t: "Шва /ə/ — самый частый звук английского", ipa: "/ə/",
      html: "<p><b>/ə/</b> — короткий безударный звук. Рот расслаблен, звук похож на неясное «э»: <b>a</b>bout /əˈbaʊt/, moth<b>er</b> /ˈmʌðə/, ban<b>a</b>n<b>a</b> /bəˈnɑːnə/.</p>" +
        "<div class='why'><b>Почему его так много?</b> Англичане выделяют голосом ударный слог, а остальные «проглатывают». Поэтому <b>teacher</b> звучит как «ТИЧ-ə», а не «ти-чер». Если произносить все гласные чётко, речь звучит неестественно.</div>",
      ukus: "в Британии -er на конце — просто /ə/: mother /ˈmʌðə/. В Америке звучит «р»: /ˈmʌðər/. " + say("mother", "uk") + " " + say("mother", "us"),
      pairs: [], drill: ["mother", "father", "sister", "banana", "about", "teacher"] },
    g: { t: "my, your, his, her… и 's",
      html: "<table><tr><th>Кто</th><th>Чей</th><th>Пример</th></tr><tr><td>I</td><td><b>my</b> — мой</td><td>my brother</td></tr><tr><td>you</td><td><b>your</b> — твой, ваш</td><td>your sister</td></tr><tr><td>he</td><td><b>his</b> — его</td><td>his car</td></tr><tr><td>she</td><td><b>her</b> — её</td><td>her husband</td></tr><tr><td>it</td><td><b>its</b> — его/её (о предмете, животном)</td><td>its name</td></tr><tr><td>we</td><td><b>our</b> — наш</td><td>our parents</td></tr><tr><td>they</td><td><b>their</b> — их</td><td>their son</td></tr></table>" +
        "<div class='why'><b>his или her?</b> Смотрите на <b>владельца</b>, а не на предмет. «Анна и её брат» → Anna and <b>her</b> brother: брат мужского рода, но владелец — Анна, поэтому her.</div>" +
        "<h3>Чьё-то: 's</h3><p><b>Anna's brother</b> — брат Анны. <b>My father's car</b> — машина моего папы. Если владельцев несколько и слово на -s: <b>my parents' house</b> — дом моих родителей.</p>" +
        "<div class='why'><b>Почему не «the brother of Anna»?</b> Так говорят о предметах (the door of the room), а о людях — через 's. Это короче и естественнее.</div>" +
        "<p class='brk'>Не путайте похожие по звучанию: <b>their</b> (их) — <b>there</b> (там) — <b>they're</b> (они есть). Все три звучат /ðeə/.</p>",
      tasks: [
        ["c", "Anna and ___ brother", "her|his|its", 0, "Владелец — Анна (она) → <b>her</b>."],
        ["c", "Tom and ___ sister", "his|her|its", 0, "Владелец — Том (он) → <b>his</b>."],
        ["c", "We love ___ parents.", "our|their|we", 0, "we → <b>our</b>."],
        ["c", "This is ___ car. (машина Марата)", "Marat's|Marat|Marats", 0, "Чьё-то → <b>'s</b>: Marat's."],
        ["c", "They are with ___ children.", "their|there|they're", 0, "«их» → <b>their</b>. There — «там», they're — «они есть»."],
        ["c", "The dog is hungry. ___ bowl is empty.", "Its|It's|His", 0, "О животном или предмете → <b>its</b>. It's = it is."],
        ["t", "Это моя мама.", "This is my mother.|This is my mom.|This is my mum.", "my + mother."],
        ["t", "Как зовут твою сестру?", "What is your sister's name?|What's your sister's name?", "your sister's name — «имя твоей сестры»."],
        ["b", "My father's name is Askar.", "Моего папу зовут Аскар.", "father's name — «имя папы»."]
      ] },
    d: { t: "Семейное фото",
      l: [["A", "Who is this?", "Кто это?"], ["B", "That's my mother, and this is my father.", "Это моя мама, а это мой папа."], ["A", "And who is that girl?", "А кто та девушка?"],
        ["B", "That's my sister, Aliya. She's a student.", "Это моя сестра Алия. Она студентка."], ["A", "Is this your brother?", "Это твой брат?"], ["B", "No, that's Aliya's husband, Daniyar.", "Нет, это муж Алии, Данияр."]],
      q: [["Кто такая Алия?", "Сестра|Мама|Подруга", 0, "That's my sister, Aliya."], ["Кто такой Данияр?", "Муж Алии|Брат|Папа", 0, "Aliya's husband."], ["Чем занимается Алия?", "Учится|Преподаёт|Лечит людей", 0, "She's a student."]] },
    s: [["This is my family.", "Это моя семья."], ["Her brother is a teacher.", "Её брат — учитель.", "Her brother's a teacher."], ["My sister's name is Dana.", "Мою сестру зовут Дана.", "My sister is Dana."]]
  });

  A.push({ id: 8, world: 2, en: "She has blue eyes", ru: "have / has (have got)", topic: "Внешность",
    goal: "Описать внешность человека и сказать, что у кого есть.",
    w: [
      ["hair", "heə", "her", "волосы", "She has long hair.", "У неё длинные волосы."],
      ["eyes", "aɪz", "", "глаза", "He has brown eyes.", "У него карие глаза."],
      ["face", "feɪs", "", "лицо", "She has a nice face.", "У неё приятное лицо."],
      ["tall", "tɔːl", "", "высокий (о человеке)", "My brother is very tall.", "Мой брат очень высокий."],
      ["short", "ʃɔːt", "ʃɔːrt", "низкий; короткий", "He has short hair.", "У него короткие волосы."],
      ["long", "lɒŋ", "lɔːŋ", "длинный", "It is a long street.", "Это длинная улица."],
      ["dark", "dɑːk", "dɑːrk", "тёмный", "She has dark hair.", "У неё тёмные волосы."],
      ["beautiful", "ˈbjuːtɪfl", "ˈbjuːt̬ɪfl", "красивый", "What a beautiful city!", "Какой красивый город!"],
      ["young", "jʌŋ", "", "молодой", "Our teacher is young.", "Наш учитель молодой."],
      ["glasses", "ˈɡlɑːsɪz", "ˈɡlæsɪz", "очки; стаканы", "My father wears glasses.", "Мой папа носит очки."]
    ],
    p: { t: "Короткий /ʌ/ и долгий /ɑː/", ipa: "/ʌ/ /ɑː/",
      html: "<p><b>/ʌ/</b> — короткое «а», рот открыт немного: <b>cut, hut, much, young</b>. <b>/ɑː/</b> — долгое глубокое «а», как у врача: «скажите а-а-а»: <b>car, heart, dark, father</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>cut</b> (резать) — <b>cart</b> (тележка), <b>hut</b> (хижина) — <b>heart</b> (сердце).</div>",
      ukus: "это главная разница двух вариантов: в американском r после гласной произносится, в британском нет. dark: UK /dɑːk/, US /dɑːrk/. " + say("dark", "uk") + " " + say("dark", "us"),
      pairs: [["cut", "cart"], ["hut", "heart"], ["much", "march"]], drill: ["young", "much", "dark", "car", "father", "heart"] },
    g: { t: "have / has и have got",
      html: "<p>«У меня есть» по-английски — <b>I have</b>: «я имею». Владелец становится подлежащим.</p>" +
        "<table><tr><th>Кто</th><th>Форма</th><th>Британский вариант</th></tr><tr><td>I, you, we, they</td><td><b>have</b>: I have a brother.</td><td>I've got a brother.</td></tr><tr><td>he, she, it</td><td><b>has</b>: She has blue eyes.</td><td>She's got blue eyes.</td></tr></table>" +
        "<div class='why'><b>Почему has?</b> С he/she/it глаголы в настоящем времени получают окончание -s (подробно — на уровне 10). have + s = <b>has</b>.</div>" +
        "<div class='why'><b>have или have got?</b> Значение одно и то же. <b>have got</b> чаще говорят в Британии, просто <b>have</b> — в Америке. Вопрос с have got: <b>Have you got a car?</b> — <b>Yes, I have. / No, I haven't.</b></div>" +
        "<p class='brk'>Внешность через to be и через have: She <b>is</b> tall (она высокая) — She <b>has</b> long hair (у неё длинные волосы). Признак самого человека — to be, его «часть» — have.</p>",
      tasks: [
        ["c", "I ___ long hair.", "have|has|am", 0, "«У меня есть» = <b>I have</b>, а не I am."],
        ["c", "She ___ blue eyes.", "has|have|is", 0, "she → <b>has</b>."],
        ["c", "My brother ___ got glasses.", "has|have|is", 0, "brother = he → <b>has got</b>."],
        ["c", "They ___ two children.", "have|has|are", 0, "they → <b>have</b>."],
        ["c", "— Have you got a sister? — Yes, I ___.", "have|has|am", 0, "Короткий ответ повторяет глагол: <b>Yes, I have.</b>"],
        ["c", "He ___ tall. (= Он высокий.)", "is|has|have", 0, "Признак человека — to be: <b>he is</b> tall."],
        ["t", "У неё тёмные волосы.", "She has dark hair.|She has got dark hair.|She's got dark hair.", "she + has (got)."],
        ["t", "У меня есть брат.", "I have a brother.|I have got a brother.|I've got a brother.", "I have + a + brother."],
        ["b", "He has got short hair.", "У него короткие волосы.", "he + has got."]
      ] },
    d: { t: "Новый преподаватель",
      l: [["A", "Who is your new teacher?", "Кто твой новый преподаватель?"], ["B", "Mr Brown. He's tall and young.", "Мистер Браун. Он высокий и молодой."], ["A", "Has he got glasses?", "Он носит очки?"],
        ["B", "Yes, he has. And he has got dark hair.", "Да. И у него тёмные волосы."], ["A", "Is he nice?", "Он приятный?"], ["B", "Very nice! And he has a great smile.", "Очень! И у него отличная улыбка."]],
      q: [["Какой мистер Браун?", "Высокий и молодой|Низкий и старый|Высокий и пожилой", 0, "He's tall and young."], ["Носит ли он очки?", "Да|Нет|Не сказано", 0, "Yes, he has."], ["Какие у него волосы?", "Тёмные|Светлые|Рыжие", 0, "dark hair"]] },
    s: [["She has got long hair.", "У неё длинные волосы.", "She has long hair.|She's got long hair."], ["I have brown eyes.", "У меня карие глаза.", "I've got brown eyes.|I have got brown eyes."], ["He is tall and young.", "Он высокий и молодой.", "He's tall and young."]]
  });

  A.push({ id: 9, world: 2, en: "My day", ru: "Present Simple: I, you, we, they", topic: "Распорядок дня",
    goal: "Рассказать о своём обычном дне: что вы делаете каждый день.",
    w: [
      ["get up", "ˌɡet ˈʌp", "", "вставать (с кровати)", "I get up at seven.", "Я встаю в семь."],
      ["breakfast", "ˈbrekfəst", "", "завтрак", "We have breakfast at eight.", "Мы завтракаем в восемь."],
      ["work", "wɜːk", "wɝːk", "работать; работа", "I work in an office.", "Я работаю в офисе."],
      ["study", "ˈstʌdi", "", "учиться, заниматься", "We study English every day.", "Мы учим английский каждый день."],
      ["go", "ɡəʊ", "ɡoʊ", "идти; ехать", "They go to work by bus.", "Они ездят на работу на автобусе."],
      ["home", "həʊm", "hoʊm", "дом; домой", "I go home at six.", "Я иду домой в шесть."],
      ["eat", "iːt", "", "есть, кушать", "We eat a lot of fruit.", "Мы едим много фруктов."],
      ["drink", "drɪŋk", "", "пить", "I drink tea in the morning.", "Я пью чай утром."],
      ["sleep", "sliːp", "", "спать", "Cats sleep a lot.", "Кошки много спят."],
      ["every", "ˈevri", "", "каждый", "I read every evening.", "Я читаю каждый вечер."]
    ],
    p: { t: "Звук /ŋ/", ipa: "/ŋ/",
      html: "<p><b>/ŋ/</b> — носовой звук. Спинка языка прижимается к мягкому нёбу, как при «г», но воздух идёт через нос. Пишется <b>ng</b> или <b>n</b> перед k: <b>sing, morning, drink, thank</b>.</p>" +
        "<div class='why'><b>Частая ошибка:</b> произносить в конце «нг» или просто «н». В <b>sing</b> нет звука /ɡ/, а <b>sin</b> (грех) и <b>sing</b> (петь) — разные слова.</div>",
      ukus: "звук одинаковый. В разговорной речи окончание -ing иногда сокращают до «-in» (goin', doin'), но в учебной речи говорите полное /ɪŋ/.",
      pairs: [["sin", "sing"], ["thin", "thing"], ["ran", "rang"]], drill: ["drink", "sing", "morning", "evening", "long", "thank"] },
    g: { t: "Present Simple: I work, we study",
      html: "<p><b>Present Simple</b> — настоящее простое время. Оно описывает то, что происходит <b>регулярно</b> или <b>всегда</b>: привычки, расписание, факты.</p>" +
        "<table><tr><th>Кто</th><th>Глагол</th><th>Пример</th></tr><tr><td>I, you, we, they</td><td>без изменений</td><td>I <b>work</b>. We <b>study</b>. They <b>go</b> home.</td></tr></table>" +
        "<div class='why'><b>Почему без окончания?</b> По-русски глагол меняется: работаю, работаем, работают. В английском для I/you/we/they форма одна — словарная. Изменение есть только у he/she/it (уровень 10).</div>" +
        "<div class='why'><b>Частая ошибка:</b> добавлять am/is/are: «I am work» — неверно. To be и обычный глагол вместе в Present Simple не ставят. Правильно: <b>I work</b>.</div>" +
        "<p>Слова-подсказки: <b>every day</b> (каждый день), <b>usually</b> (обычно), <b>in the morning</b> (утром), <b>at seven</b> (в семь).</p>" +
        "<p class='brk'>«Завтракать» = <b>have breakfast</b>: «иметь завтрак». Так же have lunch, have dinner.</p>",
      tasks: [
        ["c", "I ___ up at seven.", "get|gets|getting", 0, "I → словарная форма <b>get</b>."],
        ["c", "We ___ English every day.", "study|studies|are study", 0, "we → <b>study</b>; am/is/are здесь не нужен."],
        ["c", "They ___ to work by bus.", "go|goes|are go", 0, "they → <b>go</b>."],
        ["c", "I ___ tea in the morning.", "drink|am drink|drinks", 0, "I → <b>drink</b>, без am."],
        ["c", "We ___ lunch at home. (= Мы обедаем дома.)", "have|has|are have", 0, "Обедать = <b>have lunch</b>; we → have."],
        ["c", "You ___ a lot. (= Ты много спишь.)", "sleep|sleeps|are sleep", 0, "you → <b>sleep</b>."],
        ["t", "Я работаю каждый день.", "I work every day.", "I + work + every day."],
        ["t", "Мы встаём в семь.", "We get up at seven.|We get up at 7.", "get up + at + время."],
        ["b", "They have breakfast at eight.", "Они завтракают в восемь.", "have breakfast + at eight."]
      ] },
    d: { t: "Мой день",
      l: [["A", "What time do you get up?", "Во сколько ты встаёшь?"], ["B", "I get up at six.", "Я встаю в шесть."], ["A", "Six! That's early.", "В шесть! Это рано."],
        ["B", "Yes. I have breakfast, and I go to work at seven.", "Да. Я завтракаю и в семь ухожу на работу."], ["A", "And in the evening?", "А вечером?"], ["B", "I study English, and I go to sleep at eleven.", "Учу английский и ложусь спать в одиннадцать."]],
      q: [["Во сколько встаёт B?", "В шесть|В семь|В одиннадцать", 0, "I get up at six."], ["Когда B уходит на работу?", "В семь|В шесть|В восемь", 0, "I go to work at seven."], ["Что B делает вечером?", "Учит английский|Работает|Готовит", 0, "I study English."]] },
    s: [["I get up at seven.", "Я встаю в семь.", "I get up at 7."], ["We study English every day.", "Мы учим английский каждый день."], ["They go home at six.", "Они идут домой в шесть.", "They go home at 6."]]
  });

  A.push({ id: 10, world: 2, en: "She works in a hospital", ru: "Present Simple: he, she, it + s", topic: "Профессии",
    goal: "Рассказать, кто где работает и что делает: окончание -s у he/she/it.",
    w: [
      ["doctor", "ˈdɒktə", "ˈdɑːktər", "врач", "My mother is a doctor.", "Моя мама — врач."],
      ["driver", "ˈdraɪvə", "ˈdraɪvər", "водитель", "He is a taxi driver.", "Он таксист."],
      ["nurse", "nɜːs", "nɝːs", "медсестра, медбрат", "She is a nurse.", "Она медсестра."],
      ["cook", "kʊk", "", "повар; готовить", "My father cooks dinner.", "Мой папа готовит ужин."],
      ["engineer", "ˌendʒɪˈnɪə", "ˌendʒɪˈnɪr", "инженер", "She is an engineer.", "Она инженер."],
      ["shop", "ʃɒp", "ʃɑːp", "магазин (в США чаще store)", "He works in a shop.", "Он работает в магазине."],
      ["hospital", "ˈhɒspɪtl", "ˈhɑːspɪt̬l", "больница", "She works in a hospital.", "Она работает в больнице."],
      ["office", "ˈɒfɪs", "ˈɑːfɪs", "офис", "My office is in the city centre.", "Мой офис в центре города."],
      ["job", "dʒɒb", "dʒɑːb", "работа, должность", "I like my job.", "Мне нравится моя работа."],
      ["money", "ˈmʌni", "", "деньги", "He needs money.", "Ему нужны деньги."]
    ],
    p: { t: "Звук /ɜː/", ipa: "/ɜː/",
      html: "<p><b>/ɜː/</b> — долгий звук, похожий на «ё» без «й» в начале. Губы не округлять, рот приоткрыт: <b>work, nurse, girl, first, bird</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>work</b> (работать) и <b>walk</b> (гулять) русскоговорящие часто путают. В work звук /ɜː/, в walk — долгое /ɔː/.</div>",
      ukus: "в американском варианте к этому звуку добавляется «р»: nurse — UK /nɜːs/, US /nɝːs/. " + say("nurse", "uk") + " " + say("nurse", "us"),
      pairs: [["walk", "work"], ["bed", "bird"], ["ten", "turn"]], drill: ["work", "nurse", "girl", "first", "word", "bird"] },
    g: { t: "he / she / it + -s",
      html: "<p>В Present Simple с <b>he, she, it</b> (а также с одним человеком: my mother, Tom) к глаголу добавляют <b>-s</b>: I work → <b>she works</b>.</p>" +
        "<table><tr><th>Правило</th><th>Пример</th></tr><tr><td>обычно +s</td><td>work → work<b>s</b>, drive → drive<b>s</b></td></tr><tr><td>после s, sh, ch, x, o → +es</td><td>watch → watch<b>es</b>, go → go<b>es</b>, do → do<b>es</b></td></tr><tr><td>согласная + y → ies</td><td>study → stud<b>ies</b> (но play → play<b>s</b>)</td></tr><tr><td>исключение</td><td>have → <b>has</b></td></tr></table>" +
        "<div class='why'><b>Почему только у he/she/it?</b> Это остаток старых окончаний: раньше у каждого лица было своё, а сохранилось только одно. Поэтому -s — главный сигнал «он/она/оно» в настоящем времени. Забыть его — самая частая ошибка.</div>" +
        "<div class='why'><b>Почему -es после sh, ch, x?</b> Иначе два шипящих звука слились бы: «watchs» не выговорить. Гласный /ɪ/ их разделяет: watches /ˈwɒtʃɪz/.</div>",
      tasks: [
        ["c", "She ___ in a hospital.", "works|work|working", 0, "she → work + <b>s</b>."],
        ["c", "My father ___ a car.", "drives|drive|drivs", 0, "my father = he → <b>drives</b>."],
        ["c", "He ___ to work by bus.", "goes|gos|go", 0, "go → <b>goes</b> (после o → -es)."],
        ["c", "Anna ___ English.", "studies|studys|study", 0, "согласная + y → <b>ies</b>."],
        ["c", "Tom ___ two jobs.", "has|haves|have", 0, "have → <b>has</b>."],
        ["c", "They ___ in an office.", "work|works|working", 0, "they → без -s."],
        ["c", "The shop ___ at nine. (= открывается)", "opens|open|opense", 0, "the shop = it → <b>opens</b>."],
        ["t", "Она работает в магазине.", "She works in a shop.|She works at a shop.|She works in a store.", "she + works."],
        ["t", "Мой брат водит такси.", "My brother drives a taxi.", "my brother = he → drives."],
        ["b", "He cooks in a big restaurant.", "Он готовит в большом ресторане.", "he + cooks."]
      ] },
    d: { t: "Кем ты работаешь?",
      l: [["A", "What do you do?", "Кем ты работаешь?"], ["B", "I'm a nurse. I work in a hospital.", "Я медсестра. Работаю в больнице."], ["A", "Do you like your job?", "Тебе нравится твоя работа?"],
        ["B", "Yes, I do. And what does your sister do?", "Да. А чем занимается твоя сестра?"], ["A", "She's an engineer. She works in an office.", "Она инженер. Работает в офисе."], ["B", "And your father?", "А твой папа?"], ["A", "He's a driver. He drives a bus.", "Он водитель. Водит автобус."]],
      q: [["Где работает B?", "В больнице|В офисе|В магазине", 0, "I work in a hospital."], ["Кем работает сестра A?", "Инженером|Медсестрой|Водителем", 0, "She's an engineer."], ["Что водит папа A?", "Автобус|Такси|Грузовик", 0, "He drives a bus."]] },
    s: [["She works in a hospital.", "Она работает в больнице."], ["My father drives a bus.", "Мой папа водит автобус.", "My dad drives a bus."], ["He studies English.", "Он учит английский."]]
  });
})(window.EN);
