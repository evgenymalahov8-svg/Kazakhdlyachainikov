/* Английский для чайников: все данные курса (уровни 1–50, сленг, IELTS, программа B1/B2, новая методика, входной тест). Порядок блоков важен. */
/* ==== data1 ==== */
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
    { t: "Британский (UK) и американский (US)", html:
      "<p>В курсе у каждого слова две транскрипции. Различий немного, и вас поймут с любым вариантом. Главное — не смешивать их внутри одного слова.</p>" +
      "<table><tr><th>Что</th><th>UK</th><th>US</th></tr>" +
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
    "<h3>Словарь+</h3><p>Кроме слов уроков есть 26 тематических наборов самых частых английских слов (раздел «Словарь+»). Вместе со словами уроков это больше тысячи слов — примерно столько нужно для уровня A2. Наборы открываются постепенно, по мере прохождения уровней 2–30; переводы, транскрипции и примеры составлены для курса.</p>" +
    "<h3>Озвучка и микрофон</h3><p>Слова и диалоги озвучивает голос вашего браузера или телефона, поэтому звучание зависит от устройства. Лучше всего — Chrome, Edge или Safari. Проверка произношения кнопкой «Повторить вслух» работает там, где браузер умеет распознавать речь (Chrome, Edge). Оценка ориентировочная.</p>" +
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
;
/* ==== data2 ==== */
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
;
/* ==== data3 ==== */
/* Английский для чайников — данные курса, часть 3: уровни 21–30. Формат — см. data1.js. */
(function (EN) {
  var say = EN.say, A = EN.lessons;

  A.push({ id: 21, world: 4, en: "I visited my parents", ru: "Past Simple: правильные глаголы", topic: "Выходные",
    goal: "Рассказать, что вы делали на выходных, используя глаголы с окончанием -ed.",
    w: [
      ["visit", "ˈvɪzɪt", "", "посещать, навещать", "I visited my parents.", "Я навестил родителей."],
      ["stay", "steɪ", "", "оставаться; останавливаться (в отеле)", "We stayed at home.", "Мы остались дома."],
      ["clean", "kliːn", "", "убирать, чистить; чистый", "I cleaned my room.", "Я убрал свою комнату."],
      ["call", "kɔːl", "", "звонить; звать", "She called me yesterday.", "Она звонила мне вчера."],
      ["open", "ˈəʊpən", "ˈoʊpən", "открывать; открытый", "He opened the window.", "Он открыл окно."],
      ["start", "stɑːt", "stɑːrt", "начинать(ся)", "The film started at eight.", "Фильм начался в восемь."],
      ["finish", "ˈfɪnɪʃ", "", "заканчивать(ся)", "I finished my homework.", "Я закончил домашнее задание."],
      ["travel", "ˈtrævl", "", "путешествовать", "They travelled a lot last year.", "В прошлом году они много путешествовали."],
      ["want", "wɒnt", "wɑːnt", "хотеть", "I wanted to sleep.", "Я хотел спать."],
      ["need", "niːd", "", "нуждаться; нужно", "We needed help.", "Нам нужна была помощь."]
    ],
    p: { t: "Окончание -ed: /t/, /d/ или /ɪd/", ipa: "/t/ /d/ /ɪd/",
      html: "<table><tr><th>Звук</th><th>Когда</th><th>Примеры</th></tr><tr><td>/t/</td><td>после глухих: p, k, s, f, ш, ч</td><td>walked, finished, stopped</td></tr><tr><td>/d/</td><td>после звонких и гласных</td><td>cleaned, stayed, called</td></tr><tr><td>/ɪd/</td><td>после t и d</td><td>wanted, visited, needed, started</td></tr></table>" +
        "<div class='why'><b>Почему лишний слог только после t и d?</b> Иначе два одинаковых звука слились бы: «want-t» не отличить от want. Гласный /ɪ/ разделяет их, и прошедшее время становится слышно. В остальных случаях лишнего слога нет: walked — один слог /wɔːkt/, а не «уок-ед».</div>",
      ukus: "звучание одинаковое, а написание немного отличается: британское <b>travelled</b> (две l) — американское <b>traveled</b> (одна l).",
      pairs: [], drill: ["walked", "cleaned", "wanted", "visited", "stayed", "finished"] },
    g: { t: "Past Simple: глагол + -ed",
      html: "<p>Past Simple — простое прошедшее время: законченное действие в прошлом, обычно с указанием, когда оно было. Для правильных глаголов добавляем <b>-ed</b>: I <b>cleaned</b> my room yesterday.</p>" +
        "<div class='why'><b>Хорошая новость:</b> в прошедшем времени форма одна для всех: I visited, she visited, they visited. Никакого -s для he/she!</div>" +
        "<table><tr><th>Правило написания</th><th>Пример</th></tr><tr><td>обычно +ed</td><td>visit → visit<b>ed</b>, clean → clean<b>ed</b></td></tr><tr><td>на -e → +d</td><td>live → live<b>d</b>, dance → dance<b>d</b></td></tr><tr><td>согласная + y → ied</td><td>study → stud<b>ied</b> (но stay → stay<b>ed</b>)</td></tr><tr><td>краткий ударный слог → удвоение</td><td>stop → sto<b>pped</b>, plan → pla<b>nned</b></td></tr></table>" +
        "<div class='why'><b>Почему stayed, но studied?</b> Если перед y стоит гласная (a, e, o), y остаётся: stay → stayed, play → played. Если согласная, y меняется на i: study → studied, cry → cried.</div>" +
        "<p class='brk'>Слова-подсказки: yesterday, last weekend, two days ago, in 2020.</p>",
      tasks: [
        ["c", "Yesterday I ___ my room.", "cleaned|clean|cleans", 0, "yesterday → прошедшее: <b>cleaned</b>."],
        ["c", "She ___ her grandmother last week.", "visited|visit|visits", 0, "last week → <b>visited</b>; для she без -s."],
        ["c", "We ___ in a hotel.", "stayed|staied|stay", 0, "Гласная + y → <b>stayed</b>."],
        ["c", "He ___ English last year.", "studied|studyed|studies", 0, "Согласная + y → <b>studied</b>."],
        ["c", "The film ___ at 8 and ___ at 10.", "started, finished|start, finish|starts, finishes", 0, "Оба действия в прошлом → -ed."],
        ["c", "The bus ___. (остановился)", "stopped|stoped|stop", 0, "Краткий слог stop → <b>stopped</b>."],
        ["t", "Я позвонил маме.", "I called my mother.|I called my mom.|I called my mum.", "call + ed."],
        ["t", "Мы путешествовали летом.", "We travelled in summer.|We traveled in summer.|We travelled in the summer.|We traveled in the summer.", "travelled (UK) / traveled (US)."],
        ["b", "She opened the window.", "Она открыла окно.", "open + ed."]
      ] },
    d: { t: "Как прошли выходные?",
      l: [["A", "How was your weekend?", "Как прошли выходные?"], ["B", "Great! I visited my parents.", "Отлично! Я навестил родителей."], ["A", "Nice! I stayed at home and cleaned my flat.", "Здорово! А я остался дома и убрал квартиру."],
        ["B", "Oh, that's boring!", "Ой, скукота!"], ["A", "Then I called my friend and we watched a film.", "Потом я позвонил другу, и мы посмотрели фильм."], ["B", "Which film?", "Какой фильм?"], ["A", "A comedy. We laughed a lot!", "Комедию. Мы много смеялись!"]],
      q: [["Что делал B на выходных?", "Навестил родителей|Убирал квартиру|Смотрел фильм", 0, "I visited my parents."], ["Что A сделал сначала?", "Убрал квартиру|Позвонил другу|Пошёл в кино", 0, "I stayed at home and cleaned my flat. Then…"], ["Какой фильм смотрели?", "Комедию|Ужастик|Мультфильм", 0, "A comedy."]] },
    s: [["I cleaned my room yesterday.", "Вчера я убрал свою комнату.", "Yesterday I cleaned my room."], ["We visited the museum.", "Мы посетили музей.", "We visited a museum."], ["The lesson started at nine.", "Урок начался в девять.", "The lesson started at 9."]]
  });

  A.push({ id: 22, world: 4, en: "We went to London", ru: "Past Simple: неправильные глаголы", topic: "Путешествие",
    goal: "Рассказать о поездке, используя самые частые неправильные глаголы.",
    w: [
      ["went", "went", "", "ходил, ездил (go)", "We went to London.", "Мы ездили в Лондон."],
      ["had", "hæd", "", "имел; ел (have)", "I had a great time.", "Я отлично провёл время."],
      ["saw", "sɔː", "sɑː", "видел (see)", "We saw Big Ben.", "Мы видели Биг-Бен."],
      ["came", "keɪm", "", "пришёл, приехал (come)", "She came home late.", "Она пришла домой поздно."],
      ["took", "tʊk", "", "взял; поехал на (take)", "He took a taxi.", "Он взял такси."],
      ["bought", "bɔːt", "bɑːt", "купил (buy)", "I bought a new phone.", "Я купил новый телефон."],
      ["ate", "et", "eɪt", "ел (eat)", "We ate fish and chips.", "Мы ели рыбу с картошкой."],
      ["flew", "fluː", "", "летел (fly)", "They flew to Almaty.", "Они летели в Алматы."],
      ["got", "ɡɒt", "ɡɑːt", "получил; добрался (get)", "We got to the hotel at night.", "Мы добрались до отеля ночью."],
      ["ticket", "ˈtɪkɪt", "", "билет", "I bought two tickets.", "Я купил два билета."]
    ],
    p: { t: "Звук /ɔː/ в bought, saw, caught", ipa: "/ɔː/",
      html: "<p>Многие неправильные формы на -ought и -aught читаются с долгим <b>/ɔː/</b>: <b>bought, brought, thought, taught, caught</b>. Буквы gh не произносятся.</p>" +
        "<div class='why'><b>Не путайте с /əʊ/:</b> <b>bought</b> (купил) — <b>boat</b> (лодка), <b>caught</b> (поймал) — <b>coat</b> (пальто), <b>saw</b> (видел) — <b>so</b> (так).</div>",
      ukus: "в американском варианте /ɔː/ часто звучит открыто, почти как /ɑː/: saw — US /sɑː/. Слово ate: британцы часто говорят /et/, американцы — /eɪt/. " + say("ate", "uk") + " " + say("ate", "us"),
      pairs: [["bought", "boat"], ["saw", "so"], ["caught", "coat"]], drill: ["bought", "saw", "thought", "taught", "caught", "walk"] },
    g: { t: "Неправильные глаголы",
      html: "<p>Самые частые глаголы образуют прошедшее время не через -ed, а по-своему. Их нужно запомнить:</p>" +
        "<table><tr><th>Глагол</th><th>Прошедшее</th><th>Перевод</th></tr><tr><td>go</td><td>went</td><td>идти, ехать</td></tr><tr><td>have</td><td>had</td><td>иметь</td></tr><tr><td>see</td><td>saw</td><td>видеть</td></tr><tr><td>come</td><td>came</td><td>приходить</td></tr><tr><td>take</td><td>took</td><td>брать</td></tr><tr><td>buy</td><td>bought</td><td>покупать</td></tr><tr><td>eat</td><td>ate</td><td>есть</td></tr><tr><td>fly</td><td>flew</td><td>летать</td></tr><tr><td>get</td><td>got</td><td>получать</td></tr><tr><td>make</td><td>made</td><td>делать</td></tr><tr><td>do</td><td>did</td><td>делать</td></tr><tr><td>write</td><td>wrote</td><td>писать</td></tr></table>" +
        "<div class='why'><b>Почему они «неправильные»?</b> Это самые древние и частые слова языка. Частые слова меняются медленнее, поэтому сохранили старые формы, а -ed получили более «молодые» глаголы. Хорошая новость: их немного, и вы будете слышать их постоянно.</div>" +
        "<p class='brk'>Как и у правильных глаголов, форма одна для всех лиц: I went, she went, they went.</p>",
      tasks: [
        ["c", "Last summer we ___ to London.", "went|goed|go", 0, "go → <b>went</b>."],
        ["c", "I ___ a great time.", "had|haved|have", 0, "have → <b>had</b>."],
        ["c", "She ___ a new phone yesterday.", "bought|buyed|buy", 0, "buy → <b>bought</b>."],
        ["c", "We ___ the Tower of London.", "saw|seed|see", 0, "see → <b>saw</b>."],
        ["c", "They ___ to Almaty by plane.", "flew|flied|fly", 0, "fly → <b>flew</b>."],
        ["c", "He ___ a taxi to the hotel.", "took|taked|take", 0, "take → <b>took</b>."],
        ["c", "She ___ a letter to her friend.", "wrote|writed|write", 0, "write → <b>wrote</b>."],
        ["t", "Я купил билет.", "I bought a ticket.|I bought the ticket.", "buy → bought."],
        ["t", "Мы поехали в Лондон.", "We went to London.", "go → went."],
        ["b", "We ate fish and chips.", "Мы ели рыбу с картошкой.", "eat → ate."]
      ] },
    d: { t: "Поездка в Лондон",
      l: [["A", "How was London?", "Как Лондон?"], ["B", "Amazing! We flew there in May.", "Потрясающе! Мы летали туда в мае."], ["A", "What did you see?", "Что вы видели?"],
        ["B", "We saw Big Ben, and we went to the British Museum.", "Видели Биг-Бен и сходили в Британский музей."], ["A", "Did you buy anything?", "Купили что-нибудь?"], ["B", "Yes, I bought a red bus for my brother. A toy one!", "Да, купил брату красный автобус. Игрушечный!"]],
      q: [["Когда B летал в Лондон?", "В мае|В июле|В декабре", 0, "We flew there in May."], ["Что они видели?", "Биг-Бен|Эйфелеву башню|Статую Свободы", 0, "We saw Big Ben."], ["Что купил B?", "Игрушечный автобус|Билет|Футболку", 0, "A toy one!"]] },
    s: [["I went to the cinema yesterday.", "Вчера я ходил в кино.", "Yesterday I went to the cinema.|I went to the movies yesterday."], ["She bought a ticket.", "Она купила билет."], ["We had a great time.", "Мы отлично провели время."]]
  });

  A.push({ id: 23, world: 4, en: "Did you find it?", ru: "Past Simple: вопросы и отрицания с did", topic: "Аэропорт и отель",
    goal: "Справиться в аэропорту и отеле: спросить и ответить о прошлом с помощью did.",
    w: [
      ["airport", "ˈeəpɔːt", "ˈerpɔːrt", "аэропорт", "I'm at the airport.", "Я в аэропорту."],
      ["plane", "pleɪn", "", "самолёт", "The plane is late.", "Самолёт задерживается."],
      ["hotel", "həʊˈtel", "hoʊˈtel", "гостиница, отель", "Our hotel is near the sea.", "Наш отель у моря."],
      ["passport", "ˈpɑːspɔːt", "ˈpæspɔːrt", "паспорт", "Here is my passport.", "Вот мой паспорт."],
      ["luggage", "ˈlʌɡɪdʒ", "", "багаж (в США — baggage)", "I can't find my luggage.", "Я не могу найти свой багаж."],
      ["trip", "trɪp", "", "поездка", "Have a nice trip!", "Хорошей поездки!"],
      ["arrive", "əˈraɪv", "", "прибывать, приезжать", "We arrived at night.", "Мы приехали ночью."],
      ["leave", "liːv", "", "уезжать, уходить; оставлять", "The plane leaves at six.", "Самолёт вылетает в шесть."],
      ["lose", "luːz", "", "терять", "Don't lose your ticket!", "Не потеряй билет!"],
      ["find", "faɪnd", "", "находить", "Did you find your keys?", "Ты нашёл ключи?"]
    ],
    p: { t: "Звуки /dʒ/ и /tʃ/", ipa: "/dʒ/ /tʃ/",
      html: "<p><b>/tʃ/</b> — глухой, как русское «ч», но твёрже: <b>cheap, chair, much</b>. <b>/dʒ/</b> — звонкая пара, слитное «дж» (не «д» + «ж» по отдельности): <b>job, luggage, change</b>.</p>" +
        "<div class='why'><b>Почему важно:</b> <b>cheap</b> (дешёвый) — <b>jeep</b> (джип), <b>rich</b> (богатый) — <b>ridge</b> (хребет). В конце слова русскоговорящие часто оглушают /dʒ/ — следите за этим в слове luggage.</div>",
      ukus: "звуки одинаковые. Слова разные: британский <b>luggage</b> — американский <b>baggage</b>; британский <b>flat</b> — американский <b>apartment</b>.",
      pairs: [["cheap", "jeep"], ["chin", "gin"], ["rich", "ridge"]], drill: ["luggage", "change", "chair", "jacket", "much", "job"] },
    g: { t: "did: вопросы и отрицания в прошлом",
      html: "<table><tr><th></th><th>Пример</th></tr><tr><td>?</td><td><b>Did</b> you <b>find</b> your passport? — Yes, I did. / No, I didn't.</td></tr><tr><td>−</td><td>I <b>didn't lose</b> my luggage.</td></tr><tr><td>вопрос со словом</td><td>Where <b>did</b> you <b>go</b>? What time <b>did</b> the plane <b>leave</b>?</td></tr></table>" +
        "<div class='why'><b>Почему «Did you find», а не «Did you found»?</b> Это то же правило, что с does: прошедшее время показывается один раз. Его «забрал» помощник <b>did</b> (прошедшая форма do), поэтому основной глагол возвращается к словарной форме. Это правило действует и для неправильных глаголов: Did you <b>see</b>? (не saw), I didn't <b>go</b> (не went).</div>" +
        "<div class='why'><b>Исключение — was/were.</b> С to be помощник не нужен: <b>Were</b> you tired? I <b>wasn't</b> there. (уровень 20)</div>" +
        "<p class='brk'>didn't = did not.</p>",
      tasks: [
        ["c", "___ you find your passport?", "Did|Do|Were", 0, "Прошлое + обычный глагол → <b>Did</b>."],
        ["c", "I didn't ___ my luggage.", "lose|lost|losed", 0, "После didn't — словарная форма."],
        ["c", "Where did you ___?", "go|went|going", 0, "После did — <b>go</b>, а не went."],
        ["c", "— Did she arrive on time? — Yes, she ___.", "did|was|arrived", 0, "Краткий ответ: <b>Yes, she did.</b>"],
        ["c", "We ___ the hotel. (не нашли)", "didn't find|didn't found|don't found", 0, "didn't + <b>find</b>."],
        ["c", "What time ___ the plane leave?", "did|was|were", 0, "Обычный глагол leave → <b>did</b>."],
        ["c", "___ you tired after the trip?", "Were|Did|Do", 0, "tired — с to be: <b>Were</b> you…"],
        ["t", "Ты потерял паспорт?", "Did you lose your passport?|Did you lose the passport?", "Did + you + lose…"],
        ["t", "Я не видел его.", "I didn't see him.|I did not see him.", "didn't + see."],
        ["b", "When did you arrive at the airport?", "Когда ты приехал в аэропорт?", "When + did + you + arrive."]
      ] },
    d: { t: "Потерянный багаж",
      l: [["A", "Hello. I can't find my luggage.", "Здравствуйте. Я не могу найти свой багаж."], ["B", "Which flight did you arrive on?", "Каким рейсом вы прилетели?"], ["A", "Flight 205 from Almaty.", "Рейсом 205 из Алматы."],
        ["B", "Did you check belt number three?", "Вы проверили ленту номер три?"], ["A", "Yes, I did, but I didn't see my bag.", "Да, но своей сумки не увидел."], ["B", "OK, we'll find it. Which hotel are you staying at?", "Хорошо, мы её найдём. В каком отеле вы остановились?"], ["A", "The Park Hotel.", "В «Парк-отеле»."]],
      q: [["Что потерял A?", "Багаж|Паспорт|Билет", 0, "I can't find my luggage."], ["Откуда рейс?", "Из Алматы|Из Лондона|Из Астаны", 0, "Flight 205 from Almaty."], ["В каком отеле A?", "Park Hotel|Grand Hotel|Не сказано", 0, "The Park Hotel."]] },
    s: [["Did you see the film?", "Ты смотрел фильм?"], ["I didn't lose my passport.", "Я не потерял паспорт.", "I did not lose my passport."], ["Where did you go yesterday?", "Куда ты ходил вчера?"]]
  });

  A.push({ id: 24, world: 4, en: "Help me, please!", ru: "Местоимения me, him, her… и повелительное наклонение", topic: "Просьбы и инструкции",
    goal: "Просить и давать инструкции, понимать учителя и указатели.",
    w: [
      ["give", "ɡɪv", "", "давать", "Give me the book, please.", "Дай мне книгу, пожалуйста."],
      ["tell", "tel", "", "сказать (кому-то), рассказать", "Tell me about your family.", "Расскажи мне о своей семье."],
      ["show", "ʃəʊ", "ʃoʊ", "показывать", "Show me your photos!", "Покажи мне свои фото!"],
      ["send", "send", "", "отправлять", "Send me a message.", "Отправь мне сообщение."],
      ["ask", "ɑːsk", "æsk", "спрашивать; просить", "Ask the teacher.", "Спроси учителя."],
      ["answer", "ˈɑːnsə", "ˈænsər", "отвечать; ответ", "Answer the question.", "Ответь на вопрос."],
      ["repeat", "rɪˈpiːt", "", "повторять", "Can you repeat that, please?", "Можете повторить, пожалуйста?"],
      ["slowly", "ˈsləʊli", "ˈsloʊli", "медленно", "Please speak slowly.", "Пожалуйста, говорите медленно."],
      ["again", "əˈɡen", "", "снова, ещё раз", "Say it again, please.", "Скажите ещё раз, пожалуйста."],
      ["message", "ˈmesɪdʒ", "", "сообщение", "I got your message.", "Я получил твоё сообщение."]
    ],
    p: { t: "Ударение во фразе", ipa: "ˈ … ˈ",
      html: "<p>Во фразе ударными бывают слова со смыслом: существительные, глаголы, прилагательные, наречия. Служебные слова (to, a, the, me, can, and) звучат быстро и тихо: <i>Can you re<b>PEAT</b> it, <b>PLEASE</b>?</i> · <i><b>SPEAK SLOW</b>ly, <b>PLEASE</b>.</i></p>" +
        "<div class='why'><b>Почему это помогает?</b> Английский — язык с «ритмом ударений»: между ударными словами фраза сжимается. Если выделить голосом главные слова, вас поймут даже с акцентом.</div>" +
        "<p>" + say("Can you repeat that, please?") + " " + say("Please speak slowly.") + "</p>",
      ukus: "ask и answer: UK /ɑːsk/, /ˈɑːnsə/ — US /æsk/, /ˈænsər/. again: оба варианта /əˈɡen/, в Британии встречается и /əˈɡeɪn/. " + say("ask", "uk") + " " + say("ask", "us"),
      pairs: [], drill: ["Can you repeat that, please?", "Please speak slowly.", "Send me a message.", "Show me, please."] },
    g: { t: "me, him, her, us, them и просьбы",
      html: "<table><tr><th>Кто (подлежащее)</th><th>Кого / кому (дополнение)</th></tr><tr><td>I</td><td><b>me</b></td></tr><tr><td>you</td><td><b>you</b></td></tr><tr><td>he</td><td><b>him</b></td></tr><tr><td>she</td><td><b>her</b></td></tr><tr><td>it</td><td><b>it</b></td></tr><tr><td>we</td><td><b>us</b></td></tr><tr><td>they</td><td><b>them</b></td></tr></table>" +
        "<div class='why'><b>Когда нужна вторая колонка?</b> После глагола и после предлога: Help <b>me</b>. I see <b>him</b>. Come with <b>us</b>. Это как русские «меня, мне, его, ему». Падеж в английском один на все эти случаи: <b>me</b> = и «меня», и «мне».</div>" +
        "<h3>Повелительное наклонение</h3><p>Просьба или команда — просто словарная форма глагола: <b>Open</b> the door. <b>Sit</b> down. Запрет — <b>Don't</b> + глагол: <b>Don't</b> be late!</p>" +
        "<div class='why'><b>Как сделать вежливо?</b> Добавьте please или спросите: <b>Can you</b> open the door? <b>Could you</b> help me, please? — это звучит гораздо мягче голого «Open the door».</div>",
      tasks: [
        ["c", "Can you help ___?", "me|I|my", 0, "После глагола → <b>me</b>."],
        ["c", "I like Tom. I see ___ every day.", "him|he|his", 0, "Tom → he → после глагола <b>him</b>."],
        ["c", "Give the book to ___. (ей)", "her|she|hers", 0, "После предлога to → <b>her</b>."],
        ["c", "Call ___ tomorrow! (нам)", "us|we|our", 0, "we → <b>us</b>."],
        ["c", "___ late! (Не опаздывай!)", "Don't be|Not be|Don't", 0, "Запрет: <b>Don't</b> + глагол (be)."],
        ["c", "Where are my keys? I can't find ___.", "them|they|their", 0, "keys → they → <b>them</b>."],
        ["t", "Повторите, пожалуйста.", "Repeat, please.|Please repeat.|Repeat please.|Could you repeat, please?|Can you repeat that, please?|Can you repeat, please?|Repeat that, please.", "Повелительное: Repeat + please."],
        ["t", "Говорите медленно, пожалуйста.", "Speak slowly, please.|Please speak slowly.|Speak slowly please.|Can you speak slowly, please?|Could you speak slowly, please?", "Speak + slowly + please."],
        ["b", "Send me a message, please.", "Отправь мне сообщение, пожалуйста.", "send + me + a message."]
      ] },
    d: { t: "На уроке",
      l: [["A", "Open your books, please. Anna, read the text.", "Откройте книги, пожалуйста. Анна, прочитай текст."], ["B", "Sorry, can you repeat that, please?", "Извините, можете повторить?"], ["A", "Read the text, please. Page ten.", "Прочитай текст, пожалуйста. Страница десять."],
        ["B", "OK. Can you help me with this word?", "Хорошо. Поможете мне с этим словом?"], ["A", "Of course. Ask me after the lesson. And don't forget your homework!", "Конечно. Спроси меня после урока. И не забудь домашнее задание!"]],
      q: [["Что учитель просит сделать Анну?", "Прочитать текст|Написать письмо|Закрыть книгу", 0, "Anna, read the text."], ["Какая страница?", "10|2|12", 0, "Page ten."], ["Когда Анна может спросить про слово?", "После урока|Завтра|Прямо сейчас", 0, "Ask me after the lesson."]] },
    s: [["Can you help me?", "Ты можешь мне помочь?", "Could you help me?"], ["Don't tell him.", "Не говори ему.", "Do not tell him."], ["Please speak slowly.", "Пожалуйста, говорите медленно.", "Speak slowly, please.|Speak slowly please."]]
  });

  // ===================== МИР 5 =====================
  A.push({ id: 25, world: 5, en: "Bigger and better", ru: "Сравнения: -er, more, the best", topic: "Сравнения",
    goal: "Сравнивать предметы и места, говорить «самый…».",
    w: [
      ["big", "bɪɡ", "", "большой", "Almaty is a big city.", "Алматы — большой город."],
      ["small", "smɔːl", "", "маленький", "My room is small.", "Моя комната маленькая."],
      ["cheap", "tʃiːp", "", "дешёвый", "This bag is cheap.", "Эта сумка дешёвая."],
      ["expensive", "ɪkˈspensɪv", "", "дорогой (по цене)", "London is very expensive.", "Лондон очень дорогой."],
      ["easy", "ˈiːzi", "", "лёгкий, простой", "This test is easy.", "Этот тест лёгкий."],
      ["difficult", "ˈdɪfɪkəlt", "", "трудный", "Chinese is difficult.", "Китайский трудный."],
      ["better", "ˈbetə", "ˈbet̬ər", "лучше", "My English is better now.", "Мой английский теперь лучше."],
      ["best", "best", "", "лучший, самый лучший", "You are my best friend.", "Ты мой лучший друг."],
      ["than", "ðæn", "", "чем", "Tea is cheaper than coffee.", "Чай дешевле кофе."],
      ["mountain", "ˈmaʊntɪn", "ˈmaʊntn", "гора", "The mountains are beautiful.", "Горы красивые."]
    ],
    p: { t: "Слабое than и окончание -er", ipa: "/ðən/ /ə/",
      html: "<p>В сравнениях <b>than</b> почти всегда безударное: <b>/ðən/</b>. Окончание -er — это шва: bigger /ˈbɪɡə/. Получается ритм: <i><b>BIG</b>-gə-ðən</i>.</p>" +
        "<div class='why'><b>Почему важно для слуха?</b> «bigger than» в быстрой речи звучит как одно слово «бигəðən». Если ждать чёткого «зэн», его можно не услышать.</div>" +
        "<p>" + say("bigger than") + " " + say("cheaper than") + " " + say("the best") + "</p>",
      ukus: "в американском варианте -er звучит с «р»: bigger /ˈbɪɡər/, а t в better — быстрое «д»: /ˈbet̬ər/. " + say("better", "uk") + " " + say("better", "us"),
      pairs: [], drill: ["bigger than", "cheaper than", "better", "the best", "more expensive"] },
    g: { t: "Сравнительная и превосходная степень",
      html: "<table><tr><th>Слово</th><th>Сравнение (более)</th><th>Превосходная (самый)</th></tr>" +
        "<tr><td>короткое: cheap</td><td>cheap<b>er</b> than</td><td><b>the</b> cheap<b>est</b></td></tr>" +
        "<tr><td>на -y: easy</td><td>eas<b>ier</b></td><td>the eas<b>iest</b></td></tr>" +
        "<tr><td>краткий слог: big</td><td>bi<b>gger</b></td><td>the bi<b>ggest</b></td></tr>" +
        "<tr><td>длинное: expensive</td><td><b>more</b> expensive</td><td><b>the most</b> expensive</td></tr>" +
        "<tr><td>особые: good / bad</td><td><b>better</b> / <b>worse</b></td><td>the <b>best</b> / the <b>worst</b></td></tr></table>" +
        "<div class='why'><b>Почему у длинных слов more?</b> Окончание к длинному слову делает его тяжёлым и неудобным («expensiver»). Поэтому в двух- и многосложных словах (кроме тех, что на -y) используют отдельное слово more / most.</div>" +
        "<div class='why'><b>Почему the перед best?</b> «Самый» бывает только один, он конкретный — значит, нужен определённый артикль: <b>the</b> best, <b>the</b> biggest.</div>" +
        "<p class='brk'>«чем» = <b>than</b> (не then — «потом»). Двойное сравнение «more cheaper» — ошибка.</p>",
      tasks: [
        ["c", "London is ___ than Almaty.", "bigger|more big|biggest", 0, "Короткое слово: big → <b>bigger</b>."],
        ["c", "This phone is ___ than that one.", "more expensive|expensiver|most expensive", 0, "Длинное слово → <b>more</b> expensive."],
        ["c", "English is ___ than Chinese.", "easier|easyer|more easy", 0, "easy → <b>easier</b>."],
        ["c", "This is the ___ film of the year.", "best|better|goodest", 0, "Самый хороший → <b>the best</b>."],
        ["c", "Everest is the ___ mountain in the world.", "highest|higher|most high", 0, "Самая высокая → <b>the highest</b>."],
        ["c", "My English is ___ than last year.", "better|gooder|best", 0, "good → <b>better</b>."],
        ["c", "Tea is cheaper ___ coffee.", "than|then|that", 0, "«чем» = <b>than</b>."],
        ["t", "Чай дешевле кофе.", "Tea is cheaper than coffee.", "cheaper + than."],
        ["t", "Это самый лучший день.", "This is the best day.|It is the best day.|It's the best day.|Today is the best day.", "the best."],
        ["b", "Summer is warmer than spring.", "Лето теплее весны.", "warm → warmer + than."]
      ] },
    d: { t: "Какой телефон купить?",
      l: [["A", "Which phone is better?", "Какой телефон лучше?"], ["B", "This one is cheaper, but that one is faster.", "Этот дешевле, но тот быстрее."], ["A", "Is the black one more expensive?", "Чёрный дороже?"],
        ["B", "Yes, it's the most expensive phone in the shop.", "Да, это самый дорогой телефон в магазине."], ["A", "Hmm. I want the cheapest one!", "Хм. Я хочу самый дешёвый!"], ["B", "Then take this small one. It's easier to use too.", "Тогда берите этот маленький. Им ещё и проще пользоваться."]],
      q: [["Что говорят о чёрном телефоне?", "Он самый дорогой в магазине|Он самый дешёвый|Он самый маленький", 0, "it's the most expensive phone in the shop"], ["Какой телефон хочет A?", "Самый дешёвый|Самый быстрый|Чёрный", 0, "I want the cheapest one!"], ["Чем ещё хорош маленький телефон?", "Им проще пользоваться|Он красивее|Он быстрее", 0, "It's easier to use too."]] },
    s: [["My bag is bigger than your bag.", "Моя сумка больше твоей.", "My bag is bigger than yours."], ["This is the best book.", "Это лучшая книга.", "It is the best book.|It's the best book."], ["English is easier than Chinese.", "Английский легче китайского."]]
  });

  A.push({ id: 26, world: 5, en: "I'm going to travel", ru: "Будущее: be going to", topic: "Планы",
    goal: "Рассказать о своих планах и намерениях и спросить о чужих.",
    w: [
      ["plan", "plæn", "", "план; планировать", "What are your plans?", "Какие у тебя планы?"],
      ["tomorrow", "təˈmɒrəʊ", "təˈmɑːroʊ", "завтра", "See you tomorrow!", "До завтра!"],
      ["next", "nekst", "", "следующий", "I'm going to travel next year.", "В следующем году я собираюсь путешествовать."],
      ["future", "ˈfjuːtʃə", "ˈfjuːtʃər", "будущее", "Think about your future.", "Подумай о своём будущем."],
      ["university", "ˌjuːnɪˈvɜːsəti", "ˌjuːnɪˈvɝːsət̬i", "университет", "She studies at university.", "Она учится в университете."],
      ["learn", "lɜːn", "lɝːn", "учить, узнавать", "I'm going to learn French.", "Я собираюсь учить французский."],
      ["buy", "baɪ", "", "покупать", "We're going to buy a car.", "Мы собираемся купить машину."],
      ["move", "muːv", "", "переезжать; двигать", "They are going to move to Astana.", "Они собираются переехать в Астану."],
      ["become", "bɪˈkʌm", "", "становиться", "I want to become a doctor.", "Я хочу стать врачом."],
      ["abroad", "əˈbrɔːd", "", "за границей, за границу", "She is going to study abroad.", "Она собирается учиться за границей."]
    ],
    p: { t: "going to в быстрой речи — «gonna»", ipa: "/ˈɡəʊɪŋ tə/ → /ˈɡʌnə/",
      html: "<p>В аккуратной речи — <b>going to</b> /ˈɡəʊɪŋ tə/, to безударное. В быстрой разговорной речи это сливается в <b>gonna</b> /ˈɡʌnə/: <i>I'm gonna travel.</i></p>" +
        "<div class='why'><b>Как использовать?</b> Понимать «gonna» нужно обязательно: так говорят в фильмах и песнях. В письме и на экзаменах пишите полное <b>going to</b>.</div>" +
        "<p>" + say("I'm going to travel.") + " " + say("What are you going to do?") + "</p>",
      ukus: "«gonna» звучит в обоих вариантах. Слово tomorrow: UK /təˈmɒrəʊ/, US /təˈmɑːroʊ/. " + say("tomorrow", "uk") + " " + say("tomorrow", "us"),
      pairs: [], drill: ["I'm going to travel.", "What are you going to do?", "tomorrow", "next year"] },
    g: { t: "be going to: планы и очевидное будущее",
      html: "<p><b>am / is / are + going to + глагол</b>: I <b>am going to learn</b> French. — Я собираюсь учить французский.</p>" +
        "<table><tr><th></th><th>Пример</th></tr><tr><td>+</td><td>She's going to move.</td></tr><tr><td>−</td><td>We aren't going to buy a car.</td></tr><tr><td>?</td><td>Are you going to study abroad? What are you going to do?</td></tr></table>" +
        "<div class='why'><b>Когда going to?</b> 1) Решение <b>уже принято</b> до разговора — это план: I'm going to visit London (билеты куплены). 2) Предсказание по <b>видимым признакам</b>: Look at those clouds! It's <b>going to rain</b>.</div>" +
        "<div class='why'><b>Почему am/is/are?</b> Дословно «я нахожусь на пути к тому, чтобы…» — это конструкция Present Continuous с глаголом go. Поэтому помощник обязателен, а после to — словарная форма.</div>" +
        "<p class='brk'>Слова будущего: tomorrow, next week / next year, soon, in two days, after university.</p>",
      tasks: [
        ["c", "I ___ going to study abroad.", "am|is|are", 0, "I → <b>am</b>."],
        ["c", "She is going ___ a new car.", "to buy|buy|buying", 0, "going <b>to</b> + словарная форма."],
        ["c", "What ___ you going to do tomorrow?", "are|do|will", 0, "you → <b>are</b> going to."],
        ["c", "Look at the clouds! It ___ rain.", "is going to|going to|is go to", 0, "Видимые признаки → <b>is going to</b>."],
        ["c", "We ___ going to move. (не собираемся)", "aren't|don't|not", 0, "Отрицание: <b>aren't</b> going to."],
        ["c", "Are they going to ___ English?", "learn|learning|learns", 0, "После to — <b>learn</b>."],
        ["t", "Я собираюсь стать врачом.", "I am going to become a doctor.|I'm going to become a doctor.|I am going to be a doctor.|I'm going to be a doctor.", "am going to + become."],
        ["t", "Что ты собираешься делать завтра?", "What are you going to do tomorrow?", "What + are + you + going to do."],
        ["b", "We are going to visit London next year.", "В следующем году мы собираемся посетить Лондон.", "are going to + visit."]
      ] },
    d: { t: "Планы на будущее",
      l: [["A", "What are you going to do after university?", "Что ты собираешься делать после университета?"], ["B", "I'm going to work abroad.", "Собираюсь работать за границей."], ["A", "Where?", "Где?"],
        ["B", "In Canada. I'm going to learn French too. And you?", "В Канаде. Ещё собираюсь учить французский. А ты?"], ["A", "I'm not going to move. I'm going to open a café here.", "Я не собираюсь переезжать. Открою кафе здесь."], ["B", "Great plan!", "Отличный план!"]],
      q: [["Где B собирается работать?", "В Канаде|В Лондоне|Здесь", 0, "In Canada."], ["Какой язык B будет учить?", "Французский|Немецкий|Английский", 0, "I'm going to learn French."], ["Что хочет сделать A?", "Открыть кафе|Переехать|Учиться за границей", 0, "I'm going to open a café here."]] },
    s: [["I am going to learn English.", "Я собираюсь учить английский.", "I'm going to learn English."], ["It is going to rain.", "Сейчас пойдёт дождь.", "It's going to rain."], ["What are you going to buy?", "Что ты собираешься купить?"]]
  });

  A.push({ id: 27, world: 5, en: "I'll help you!", ru: "Будущее: will", topic: "Обещания и решения",
    goal: "Обещать, предлагать помощь, принимать решения на ходу и делать прогнозы.",
    w: [
      ["will", "wɪl", "", "вспомогательный глагол будущего времени", "I will call you.", "Я тебе позвоню."],
      ["promise", "ˈprɒmɪs", "ˈprɑːmɪs", "обещать; обещание", "I promise!", "Обещаю!"],
      ["maybe", "ˈmeɪbi", "", "может быть", "Maybe I'll come.", "Может быть, я приду."],
      ["probably", "ˈprɒbəbli", "ˈprɑːbəbli", "вероятно", "It will probably rain.", "Вероятно, пойдёт дождь."],
      ["sure", "ʃɔː", "ʃʊr", "конечно; уверенный", "Sure, I'll help you.", "Конечно, я тебе помогу."],
      ["forget", "fəˈɡet", "fərˈɡet", "забывать", "Don't forget your keys!", "Не забудь ключи!"],
      ["remember", "rɪˈmembə", "rɪˈmembər", "помнить; вспоминать", "I'll remember this day.", "Я запомню этот день."],
      ["win", "wɪn", "", "выигрывать, побеждать", "I think our team will win.", "Думаю, наша команда выиграет."],
      ["carry", "ˈkæri", "", "нести", "I'll carry your bag.", "Я понесу твою сумку."],
      ["think", "θɪŋk", "", "думать; считать", "I think it will be sunny.", "Думаю, будет солнечно."]
    ],
    p: { t: "won't или want?", ipa: "/wəʊnt/ /wɒnt/",
      html: "<p><b>won't</b> (= will not) /wəʊnt/ — с дифтонгом «оу». <b>want</b> (хотеть) /wɒnt/ — с коротким «о». Перепутать их — значит сказать противоположное: <i>I won't go</i> (не пойду) — <i>I want to go</i> (хочу пойти).</p>" +
        "<div class='why'><b>Сокращения с will:</b> I'll /aɪl/, you'll /juːl/, she'll /ʃiːl/, it'll /ˈɪtl/. В разговоре полное will звучит как особое подчёркивание: «I <b>will</b> do it!» — «Я обязательно сделаю!»</div>",
      ukus: "won't: UK /wəʊnt/, US /woʊnt/. want: UK /wɒnt/, US /wɑːnt/. В американском различие ещё заметнее. " + say("won't", "uk") + " " + say("want", "uk") + " " + say("won't", "us") + " " + say("want", "us"),
      pairs: [["won't", "want"]], drill: ["I'll help you.", "I won't forget.", "I want to go.", "It'll be fine."] },
    g: { t: "will — решение сейчас, обещание, прогноз",
      html: "<p><b>will + словарная форма</b> одинаково для всех: I / she / they <b>will go</b>. Отрицание — <b>won't</b>, вопрос — <b>Will</b> you…?</p>" +
        "<table><tr><th>Когда</th><th>Пример</th></tr><tr><td>решение в момент речи</td><td>The phone is ringing. — <b>I'll</b> answer it!</td></tr><tr><td>обещание</td><td>I promise I <b>won't</b> be late.</td></tr><tr><td>предложение помощи</td><td><b>I'll</b> carry your bag.</td></tr><tr><td>прогноз-мнение</td><td>I think you<b>'ll</b> win. It will probably rain.</td></tr><tr><td>просьба</td><td><b>Will</b> you help me?</td></tr></table>" +
        "<div class='why'><b>will или going to?</b> Если решение принято <b>раньше</b> и есть план — going to: «I'm going to fly to Paris (билеты куплены)». Если решаете <b>прямо сейчас</b> — will: «Oh, it's cold. I'll close the window». Прогноз по видимым признакам — going to, по мнению (I think, maybe, probably) — will.</div>" +
        "<p class='brk'>will — модальный глагол: без -s (she will), без to после себя (will go, не will to go).</p>",
      tasks: [
        ["c", "The phone is ringing! —", "I'll answer it!|I'm going to answer it!|I answer it!", 0, "Решение в момент речи → <b>will</b>."],
        ["c", "I promise I ___ forget.", "won't|don't|willn't", 0, "Обещание → <b>won't</b> (will not)."],
        ["c", "I think it ___ be sunny tomorrow.", "will|is|does", 0, "Мнение-прогноз → <b>will</b>."],
        ["c", "___ you help me? — Sure!", "Will|Do|Are", 0, "Просьба: <b>Will</b> you…?"],
        ["c", "Maybe she ___ come.", "will|wills|is", 0, "will не меняется: she <b>will</b>."],
        ["c", "I bought the tickets. I ___ fly to Paris on Friday.", "am going to|will|'ll", 0, "План, решение принято раньше → <b>going to</b>."],
        ["t", "Я помогу тебе.", "I will help you.|I'll help you.", "I'll + help."],
        ["t", "Я не забуду.", "I won't forget.|I will not forget.", "won't + forget."],
        ["b", "I think you will win.", "Думаю, ты выиграешь.", "I think + you will + win."]
      ] },
    d: { t: "Перед экзаменом",
      l: [["A", "I'm worried about the exam tomorrow.", "Я волнуюсь из-за завтрашнего экзамена."], ["B", "Don't worry. You'll pass! You studied a lot.", "Не переживай. Ты сдашь! Ты много занимался."], ["A", "Maybe. Will you help me with grammar tonight?", "Может быть. Поможешь мне с грамматикой вечером?"],
        ["B", "Sure, I will. I'll come at seven.", "Конечно. Приду в семь."], ["A", "Thank you! I promise I'll make tea.", "Спасибо! Обещаю, сделаю чай."], ["B", "And I'll bring some cake!", "А я принесу торт!"]],
      q: [["О чём волнуется A?", "Об экзамене|О работе|О поездке", 0, "the exam tomorrow"], ["Во сколько придёт B?", "В семь|В шесть|Завтра утром", 0, "I'll come at seven."], ["Что принесёт B?", "Торт|Чай|Книги", 0, "I'll bring some cake!"]] },
    s: [["I will call you tomorrow.", "Я позвоню тебе завтра.", "I'll call you tomorrow."], ["I won't forget.", "Я не забуду.", "I will not forget."], ["Will you help me?", "Ты мне поможешь?"]]
  });

  A.push({ id: 28, world: 5, en: "You should rest", ru: "must, have to, should", topic: "Здоровье и советы",
    goal: "Давать советы, говорить об обязанностях и запретах, объясниться у врача.",
    w: [
      ["must", "mʌst", "", "должен (обязан, необходимо)", "You must wear a seat belt.", "Ты должен пристегнуться."],
      ["should", "ʃʊd", "", "следует, стоит (совет)", "You should see a doctor.", "Тебе стоит сходить к врачу."],
      ["have to", "ˈhæv tə", "", "приходится, нужно (обязанность)", "I have to work on Saturday.", "В субботу мне нужно работать."],
      ["headache", "ˈhedeɪk", "", "головная боль", "I have a headache.", "У меня болит голова."],
      ["ill", "ɪl", "", "больной (в США чаще sick)", "She is ill today.", "Она сегодня болеет."],
      ["medicine", "ˈmedsn", "ˈmedɪsn", "лекарство; медицина", "Take this medicine twice a day.", "Принимай это лекарство дважды в день."],
      ["rest", "rest", "", "отдыхать; отдых", "You need to rest.", "Тебе нужно отдохнуть."],
      ["healthy", "ˈhelθi", "", "здоровый (полезный)", "Fruit is healthy.", "Фрукты полезны."],
      ["exercise", "ˈeksəsaɪz", "ˈeksərsaɪz", "упражнение; заниматься спортом", "You should exercise every day.", "Тебе стоит заниматься спортом каждый день."],
      ["advice", "ədˈvaɪs", "", "совет (неисчисляемое)", "Thank you for your advice.", "Спасибо за совет."]
    ],
    p: { t: "Немые буквы", ipa: "should /ʃʊd/",
      html: "<p>В английском много букв, которые пишутся, но не читаются: <b>shou<s>l</s>d</b> /ʃʊd/, <b>cou<s>l</s>d</b>, <b>wa<s>l</s>k</b> /wɔːk/, <b>ta<s>l</s>k</b>, <b><s>k</s>now</b>, <b><s>w</s>rite</b>, <b>lis<s>t</s>en</b>, <b>hig<s>h</s></b>.</p>" +
        "<div class='why'><b>Почему так?</b> Когда-то эти буквы произносились, но звучание изменилось быстрее, чем написание. Поэтому в английском так важна транскрипция: она показывает, как слово звучит на самом деле.</div>",
      ukus: "немые буквы одинаковые. Слова: британское <b>ill</b> — американское <b>sick</b>. medicine: британцы часто говорят в два слога /ˈmedsn/. " + say("medicine", "uk") + " " + say("medicine", "us"),
      pairs: [], drill: ["should", "could", "walk", "talk", "know", "listen"] },
    g: { t: "must, have to, should",
      html: "<table><tr><th>Слово</th><th>Значение</th><th>Пример</th></tr><tr><td><b>must</b></td><td>должен — правило или внутреннее убеждение говорящего</td><td>I <b>must</b> study more. You <b>must</b> stop at a red light.</td></tr><tr><td><b>have to</b></td><td>приходится — обязанность «снаружи»: работа, расписание</td><td>I <b>have to</b> get up at six. She <b>has to</b> work.</td></tr><tr><td><b>should</b></td><td>стоит, следует — совет</td><td>You <b>should</b> rest.</td></tr></table>" +
        "<div class='why'><b>Ловушка в отрицаниях!</b> <b>mustn't</b> = <b>нельзя</b> (запрет): You mustn't smoke here. А <b>don't have to</b> = <b>не обязательно</b>: It's Sunday, I don't have to get up early. Значения совсем разные!</div>" +
        "<div class='why'><b>Почему «she has to», но «she must»?</b> must и should — модальные: не меняются и не берут to. have to — обычный глагол have + to, поэтому он меняется (has to) и строит вопросы через do: <b>Do</b> I <b>have to</b> take medicine?</div>" +
        "<p class='brk'>shouldn't = не стоит: You shouldn't eat so much sugar. advice — неисчисляемое: some advice, a piece of advice (не «an advice»).</p>",
      tasks: [
        ["c", "You look tired. You ___ rest.", "should|must to|should to", 0, "Совет → <b>should</b> + глагол без to."],
        ["c", "You ___ smoke here. It's forbidden.", "mustn't|don't have to|shouldn't to", 0, "Запрет → <b>mustn't</b>."],
        ["c", "It's Sunday. I ___ get up early.", "don't have to|mustn't|haven't", 0, "«Не обязательно» → <b>don't have to</b>."],
        ["c", "She ___ work on Saturdays. Her boss says so.", "has to|have to|must to", 0, "Обязанность от начальника; she → <b>has to</b>."],
        ["c", "You ___ eat so much sugar.", "shouldn't|don't should|not should", 0, "Совет «не стоит» → <b>shouldn't</b>."],
        ["c", "___ I have to take medicine?", "Do|Must|Should", 0, "have to строит вопрос через <b>do</b>."],
        ["t", "Тебе стоит принять лекарство.", "You should take medicine.|You should take some medicine.|You should take the medicine.|You should take your medicine.", "should + take."],
        ["t", "Мне нужно работать завтра.", "I have to work tomorrow.|Tomorrow I have to work.", "have to — обязанность."],
        ["b", "You must not be late.", "Тебе нельзя опаздывать.", "must not = нельзя."]
      ] },
    d: { t: "У врача",
      l: [["A", "What's the matter?", "Что случилось?"], ["B", "I have a headache and I feel ill.", "У меня болит голова, и я плохо себя чувствую."], ["A", "You should rest and drink a lot of water.", "Вам стоит отдохнуть и пить много воды."],
        ["B", "Do I have to take medicine?", "Мне нужно принимать лекарство?"], ["A", "Yes, take this medicine three times a day. And you mustn't go to work this week.", "Да, принимайте это лекарство три раза в день. И на этой неделе вам нельзя ходить на работу."], ["B", "Thank you, doctor.", "Спасибо, доктор."]],
      q: [["На что жалуется B?", "На головную боль|На зубную боль|На кашель", 0, "I have a headache."], ["Сколько раз в день принимать лекарство?", "Три|Два|Один", 0, "three times a day"], ["Что нельзя делать на этой неделе?", "Ходить на работу|Пить воду|Отдыхать", 0, "you mustn't go to work this week"]] },
    s: [["You should rest.", "Тебе следует отдохнуть.", "You should have a rest."], ["I have to go now.", "Мне нужно идти.", "I have to go."], ["You mustn't be late.", "Тебе нельзя опаздывать.", "You must not be late."]]
  });

  A.push({ id: 29, world: 5, en: "Have you ever…?", ru: "Present Perfect: опыт и результат", topic: "Опыт",
    goal: "Рассказать о своём опыте: где вы были, что пробовали, что уже сделали.",
    w: [
      ["ever", "ˈevə", "ˈevər", "когда-нибудь", "Have you ever been to London?", "Ты когда-нибудь был в Лондоне?"],
      ["just", "dʒʌst", "", "только что; просто", "I have just arrived.", "Я только что приехал."],
      ["already", "ɔːlˈredi", "", "уже", "She has already finished.", "Она уже закончила."],
      ["yet", "jet", "", "ещё (в отриц.); уже (в вопросе)", "I haven't eaten yet.", "Я ещё не ел."],
      ["been", "biːn", "bɪn", "был (be); побывал", "I have been to Turkey.", "Я был в Турции."],
      ["seen", "siːn", "", "увиденный (see — saw — seen)", "Have you seen this film?", "Ты видел этот фильм?"],
      ["done", "dʌn", "", "сделанный (do — did — done)", "I have done my homework.", "Я сделал домашнее задание."],
      ["tried", "traɪd", "", "пробовал (try)", "Have you ever tried sushi?", "Ты когда-нибудь пробовал суши?"],
      ["experience", "ɪkˈspɪəriəns", "ɪkˈspɪriəns", "опыт", "It was a great experience.", "Это был отличный опыт."],
      ["once", "wʌns", "", "один раз; однажды", "I have been there once.", "Я был там один раз."]
    ],
    p: { t: "Слабое have: I've, she's", ipa: "/aɪv/ /həv/",
      html: "<p>В Present Perfect have почти всегда сокращается: <b>I've</b> /aɪv/, <b>you've</b>, <b>we've</b>, <b>she's</b> (= she has), <b>he's</b>. В вопросе have безударное: <b>/həv/</b> — <i>H'v you ever been…?</i></p>" +
        "<div class='why'><b>Ловушка:</b> <b>she's</b> бывает и she is, и she has. Подсказка — следующее слово: <i>She's tired</i> (is) — <i>She's been</i> (has). Если дальше идёт третья форма глагола (been, done, seen), то это has.</div>" +
        "<p>" + say("I've been to London.") + " " + say("Have you ever tried it?") + "</p>",
      ukus: "американцы часто используют Past Simple там, где британцы говорят Present Perfect: US «Did you eat yet?» — UK «Have you eaten yet?». been: UK /biːn/, US /bɪn/.",
      pairs: [], drill: ["I've been to London.", "Have you ever tried it?", "She's just finished.", "I haven't seen it yet."] },
    g: { t: "Present Perfect: have / has + третья форма",
      html: "<p><b>have / has + третья форма глагола</b> (V3): правильные на -ed (visited, tried), неправильные — по таблице (go — went — <b>gone</b>, see — saw — <b>seen</b>, do — did — <b>done</b>, be — was — <b>been</b>, eat — ate — <b>eaten</b>).</p>" +
        "<div class='why'><b>Зачем это время?</b> Оно связывает прошлое с <b>настоящим</b>. Важно не «когда», а результат или опыт сейчас: «Я был в Лондоне» = у меня есть такой опыт. Поэтому с точным временем (yesterday, in 2020, two days ago) Present Perfect <b>не используют</b> — там нужен Past Simple.</div>" +
        "<table><tr><th>Значение</th><th>Пример</th></tr><tr><td>опыт (ever, never, once)</td><td>Have you <b>ever</b> been to London? I've <b>never</b> seen snow.</td></tr><tr><td>свежий результат (just)</td><td>I've <b>just</b> finished.</td></tr><tr><td>уже / ещё не (already, yet)</td><td>She has <b>already</b> left. I haven't done it <b>yet</b>.</td></tr></table>" +
        "<div class='why'><b>been или gone?</b> She has <b>been</b> to Paris — была и вернулась. She has <b>gone</b> to Paris — уехала и сейчас там.</div>" +
        "<p class='brk'>Сравните: I <b>have been</b> to Turkey (опыт, когда — неважно) — I <b>went</b> to Turkey two years ago (точное время → Past Simple).</p>",
      tasks: [
        ["c", "Have you ___ been to London?", "ever|yet|already", 0, "Опыт в вопросе → <b>ever</b>."],
        ["c", "I have ___ seen this film. (уже)", "already|yet|ever", 0, "«уже» в утверждении → <b>already</b>."],
        ["c", "She ___ just finished.", "has|have|is", 0, "she → <b>has</b> + V3."],
        ["c", "Have you done your homework ___?", "yet|already|ever", 0, "«уже?» в конце вопроса → <b>yet</b>."],
        ["c", "I ___ to Paris last year.", "went|have been|have gone", 0, "Точное время (last year) → Past Simple: <b>went</b>."],
        ["c", "We have never ___ sushi.", "tried|try|tryed", 0, "have + V3: try → <b>tried</b>."],
        ["c", "Have you ___ my keys?", "seen|saw|see", 0, "have + V3: see → <b>seen</b>."],
        ["t", "Ты когда-нибудь был в Лондоне?", "Have you ever been to London?", "Have + you + ever + been to."],
        ["t", "Я только что пришёл.", "I have just come.|I've just come.|I have just arrived.|I've just arrived.|I have just come home.|I've just come home.", "have + just + V3."],
        ["b", "I have never seen snow.", "Я никогда не видел снег.", "have + never + seen."]
      ] },
    d: { t: "Ты когда-нибудь…?",
      l: [["A", "Have you ever been abroad?", "Ты когда-нибудь был за границей?"], ["B", "Yes, I have. I've been to Turkey and Georgia.", "Да. Я был в Турции и Грузии."], ["A", "When did you go to Turkey?", "Когда ты ездил в Турцию?"],
        ["B", "Two years ago. Have you ever tried Turkish food?", "Два года назад. Ты когда-нибудь пробовал турецкую еду?"], ["A", "No, I haven't. But I've just bought a Turkish cookbook!", "Нет. Но я только что купил книгу турецких рецептов!"]],
      q: [["Где был B?", "В Турции и Грузии|В Лондоне|Нигде", 0, "I've been to Turkey and Georgia."], ["Когда B ездил в Турцию?", "Два года назад|В прошлом месяце|Вчера", 0, "Two years ago."], ["Что только что купил A?", "Книгу рецептов|Билет|Турецкий ковёр", 0, "a Turkish cookbook"]] },
    s: [["I have never been to London.", "Я никогда не был в Лондоне.", "I've never been to London."], ["Have you ever tried sushi?", "Ты когда-нибудь пробовал суши?"], ["She has just finished her homework.", "Она только что закончила домашнее задание.", "She's just finished her homework."]]
  });

  A.push({ id: 30, world: 5, en: "Final boss", ru: "Финал: все времена вместе", topic: "Финал",
    goal: "Собрать всё вместе: выбрать нужное время, рассказать историю и пройти финальный тест.",
    w: [
      ["story", "ˈstɔːri", "", "история, рассказ", "Tell me a story.", "Расскажи мне историю."],
      ["dream", "driːm", "", "мечта; сон; мечтать", "My dream is to visit Japan.", "Моя мечта — побывать в Японии."],
      ["mistake", "mɪˈsteɪk", "", "ошибка", "Everybody makes mistakes.", "Все ошибаются."],
      ["practice", "ˈpræktɪs", "", "практика (глагол UK — practise)", "Practice makes perfect.", "Практика ведёт к совершенству."],
      ["improve", "ɪmˈpruːv", "", "улучшать(ся)", "My English has improved.", "Мой английский стал лучше."],
      ["confident", "ˈkɒnfɪdənt", "ˈkɑːnfɪdənt", "уверенный", "I feel more confident now.", "Теперь я чувствую себя увереннее."],
      ["understand", "ˌʌndəˈstænd", "ˌʌndərˈstænd", "понимать", "I understand you.", "Я тебя понимаю."],
      ["language", "ˈlæŋɡwɪdʒ", "", "язык (речь)", "English is a useful language.", "Английский — полезный язык."],
      ["enough", "ɪˈnʌf", "", "достаточно", "I have enough time.", "У меня достаточно времени."],
      ["success", "səkˈses", "", "успех", "Good luck and success!", "Удачи и успехов!"]
    ],
    p: { t: "Интонация перечислений и выбора", ipa: "↗ ↗ ↘",
      html: "<p>При перечислении голос <b>поднимается</b> на каждом пункте и <b>опускается</b> на последнем — так слушатель понимает, что список закончен: <i>I speak Kazakh↗, Russian↗ and English↘.</i></p>" +
        "<p>В вопросе с выбором «или» — то же самое: <i>Tea↗ or coffee↘?</i> Если поднять голос в конце, вопрос прозвучит как «да/нет»: «Хотите чего-нибудь — чаю или кофе?»</p>" +
        "<p>" + say("I speak Kazakh, Russian and English.") + " " + say("Tea or coffee?") + "</p>",
      ukus: "интонация одинаковая. Написание: британский глагол <b>practise</b> и существительное <b>practice</b>; в американском обе формы пишутся <b>practice</b>.",
      pairs: [], drill: ["Tea or coffee?", "I speak Kazakh, Russian and English.", "language", "understand", "enough"] },
    g: { t: "Все времена курса: как выбрать",
      html: "<table><tr><th>Время</th><th>Когда</th><th>Пример</th><th>Подсказки</th></tr>" +
        "<tr><td>Present Simple</td><td>привычки, факты</td><td>I <b>study</b> every day.</td><td>every day, usually, always</td></tr>" +
        "<tr><td>Present Continuous</td><td>сейчас, в процессе</td><td>She <b>is dancing</b>.</td><td>now, Look!, today</td></tr>" +
        "<tr><td>Past Simple</td><td>законченное в прошлом, известно когда</td><td>We <b>went</b> to Astana.</td><td>yesterday, last, ago, in 2020</td></tr>" +
        "<tr><td>Present Perfect</td><td>опыт или результат сейчас</td><td>I've never <b>ridden</b> a horse.</td><td>ever, never, just, already, yet</td></tr>" +
        "<tr><td>be going to</td><td>план, решение уже принято</td><td>I'm <b>going to visit</b> Grandma.</td><td>tomorrow (с планом), видимые признаки</td></tr>" +
        "<tr><td>will</td><td>решение сейчас, обещание, мнение</td><td>I'll <b>help</b> you!</td><td>I think, maybe, I promise</td></tr></table>" +
        "<div class='why'><b>Алгоритм выбора.</b> 1) Когда? Сейчас / регулярно / в прошлом / в будущем. 2) Если прошлое — важно «когда» (Past Simple) или результат сейчас (Present Perfect)? 3) Если будущее — план (going to) или решение прямо сейчас (will)?</div>" +
        "<p class='brk'>Помощники: do/does (Present Simple), am/is/are (Continuous, going to), did (Past Simple), have/has (Present Perfect), will. После каждого помощника — словарная форма, кроме Continuous (-ing) и Present Perfect (V3).</p>",
      tasks: [
        ["c", "I ___ English every day.", "study|am studying|studied", 0, "every day — привычка → Present Simple."],
        ["c", "Look! She ___.", "is dancing|dances|danced", 0, "Look! — сейчас → Present Continuous."],
        ["c", "We ___ to Astana last month.", "went|have gone|go", 0, "last month — точное прошлое → Past Simple."],
        ["c", "I ___ never ___ a horse.", "have, ridden|did, ride|am, riding", 0, "Опыт, never → Present Perfect."],
        ["c", "Tomorrow I ___ visit my grandma. I've bought the tickets.", "am going to|will|visit", 0, "План уже есть → <b>going to</b>."],
        ["c", "— It's cold in here. —", "OK, I'll close the window.|OK, I'm going to close the window.|OK, I close the window.", 0, "Решение прямо сейчас → <b>will</b>."],
        ["c", "She ___ two languages.", "speaks|is speaking|speak", 0, "Факт о человеке → Present Simple, she → -s."],
        ["c", "___ you ever been to London?", "Have|Did|Were", 0, "ever + опыт → <b>Have</b> you ever been…"],
        ["t", "Я понимаю тебя.", "I understand you.", "understand — глагол состояния → Present Simple."],
        ["t", "Я сделал ошибку.", "I made a mistake.|I have made a mistake.|I've made a mistake.", "make a mistake — «сделать ошибку»."],
        ["b", "I am going to practise English every day.", "Я собираюсь практиковать английский каждый день.", "План → am going to."]
      ] },
    d: { t: "Год с английским",
      l: [["A", "Your English is very good now!", "Твой английский теперь очень хороший!"], ["B", "Thanks! A year ago I didn't understand anything.", "Спасибо! Год назад я ничего не понимал."], ["A", "What helped you?", "Что тебе помогло?"],
        ["B", "I studied every day, and I wasn't afraid of mistakes.", "Я занимался каждый день и не боялся ошибок."], ["A", "What are you going to do next?", "Что собираешься делать дальше?"], ["B", "I'm going to read a book in English. I think I'll understand most of it!", "Собираюсь прочитать книгу на английском. Думаю, пойму большую часть!"]],
      q: [["Сколько B понимал по-английски год назад?", "Ничего не понимал|Хорошо понимал|Понимал половину", 0, "A year ago I didn't understand anything."], ["Что помогло B?", "Занятия каждый день и смелость ошибаться|Курсы за границей|Сериалы", 0, "I studied every day, and I wasn't afraid of mistakes."], ["Что B собирается сделать?", "Прочитать книгу на английском|Поехать в Лондон|Сдать экзамен", 0, "I'm going to read a book in English."]] },
    s: [["I understand English now.", "Теперь я понимаю английский.", "Now I understand English."], ["Don't be afraid of mistakes.", "Не бойся ошибок.", "Do not be afraid of mistakes."], ["I have learned a lot this year.", "В этом году я многому научился.", "I've learned a lot this year.|I have learnt a lot this year.|I've learnt a lot this year."]]
  });
})(window.EN);
;
/* ==== data4 ==== */
/* Английский для чайников — данные дополнительных разделов:
   разговорная речь и сленг, официальный английский, подготовка к IELTS, план 31–180. */
(function (EN) {
  // [фраза, перевод/значение, пример, где говорят: "uk" | "us" | ""]
  EN.slang = [
    ["What's up?", "Как дела? Что нового? (приветствие)", "Hey Tom, what's up?", ""],
    ["How's it going?", "Как жизнь? Как оно?", "Hi! How's it going?", ""],
    ["Cheers!", "Спасибо! / Будем! (тост); в Британии — часто «спасибо»", "Cheers for the help, mate!", "uk"],
    ["mate", "приятель, друг", "See you later, mate.", "uk"],
    ["dude", "чувак, друг", "Dude, that was amazing!", "us"],
    ["guys", "ребята (о любой компании)", "Thanks, guys!", ""],
    ["cool", "классно, круто", "Your new phone is really cool.", ""],
    ["awesome", "потрясающе, круто", "The concert was awesome!", "us"],
    ["brilliant", "отлично, блестяще", "Brilliant, thanks a lot!", "uk"],
    ["No worries.", "Не за что. Всё нормально.", "— Sorry I'm late! — No worries.", ""],
    ["No way!", "Да ладно! Не может быть!", "You won the lottery? No way!", ""],
    ["I'm gonna…", "Я собираюсь… (going to)", "I'm gonna call you later.", ""],
    ["I wanna…", "Я хочу… (want to)", "I wanna go home.", ""],
    ["Gotta go.", "Мне пора бежать. (have got to go)", "Sorry, gotta go. Bye!", ""],
    ["kinda", "вроде, как бы (kind of)", "I'm kinda tired.", ""],
    ["Yeah / Yep / Nope", "да / ага / не-а", "— Coffee? — Yep, please.", ""],
    ["Hang on.", "Подожди секунду.", "Hang on, I'm looking for my keys.", ""],
    ["I'm knackered.", "Я выжат, без сил", "I worked all day. I'm knackered.", "uk"],
    ["It's a piece of cake.", "Проще простого", "Don't worry, the test is a piece of cake.", ""],
    ["Catch you later.", "Увидимся! Пока!", "Catch you later, guys!", ""],
    ["y'all", "вы все (юг США)", "Are y'all coming tonight?", "us"],
    ["bloke", "мужик, парень", "He's a nice bloke.", "uk"],
    ["Fancy a cup of tea?", "Не хочешь чаю?", "Fancy a cup of tea after work?", "uk"],
    ["My bad.", "Моя ошибка, виноват", "Oops, my bad. I'll fix it.", "us"]
  ];
  // разговорный вариант ↔ официальный вариант ↔ перевод
  EN.registerPairs = [
    ["Hi! / Hey!", "Good morning. / Good afternoon.", "Привет! — Доброе утро. / Добрый день."],
    ["Thanks!", "Thank you very much. / I really appreciate it.", "Спасибо! — Большое спасибо. / Я очень признателен."],
    ["Sorry!", "I apologise for the inconvenience.", "Извини! — Приношу извинения за неудобства."],
    ["Can you help me?", "Could you please help me?", "Поможешь? — Не могли бы вы мне помочь?"],
    ["I want…", "I would like…", "Я хочу… — Я бы хотел…"],
    ["Tell me…", "Could you let me know…?", "Скажи… — Не могли бы вы сообщить…?"],
    ["What?", "Sorry, could you repeat that, please?", "Что? — Простите, не могли бы вы повторить?"],
    ["Get back to me.", "I look forward to hearing from you.", "Ответь мне. — С нетерпением жду вашего ответа."],
    ["I need to ask…", "I am writing to enquire about…", "Мне надо спросить… — Пишу, чтобы узнать о…"],
    ["Bye! / See ya!", "Kind regards, / Yours sincerely,", "Пока! — С уважением, (в конце письма)"],
    ["buy", "purchase", "купить — приобрести"],
    ["ask for", "request", "просить — запрашивать"],
    ["get", "receive / obtain", "получить — получить (официально)"],
    ["start", "commence", "начинать — приступать"],
    ["need", "require", "нуждаться — требоваться"],
    ["help", "assist", "помогать — оказывать содействие"]
  ];
  EN.formalPhrases = [
    ["Dear Sir or Madam,", "Уважаемые господа, (если имя неизвестно)"],
    ["Dear Ms Brown,", "Уважаемая госпожа Браун, (Ms — нейтрально для женщин)"],
    ["I am writing to apply for…", "Пишу, чтобы подать заявку на…"],
    ["I am writing to enquire about…", "Пишу, чтобы узнать о…"],
    ["I would be grateful if you could…", "Буду признателен, если вы сможете…"],
    ["Please find attached my CV.", "Во вложении моё резюме."],
    ["Could you please confirm…?", "Не могли бы вы подтвердить…?"],
    ["Thank you for your reply.", "Спасибо за ваш ответ."],
    ["I look forward to hearing from you.", "С нетерпением жду вашего ответа."],
    ["Yours faithfully,", "С уважением, (если начали с Dear Sir or Madam)"],
    ["Yours sincerely,", "С уважением, (если обращались по имени)"],
    ["Kind regards,", "С наилучшими пожеланиями, (нейтрально, e-mail)"]
  ];
  EN.formalNote = "<p>Официальный английский звучит вежливее за счёт трёх приёмов:</p>" +
    "<p><b>1. Вопрос вместо приказа.</b> «Send me the file» звучит резко. <b>Could you please send me the file?</b> — вежливо.</p>" +
    "<p><b>2. Would вместо want.</b> «I want a room» — требование. <b>I would like a room</b> — просьба.</p>" +
    "<p><b>3. Полные формы.</b> В письмах и документах пишут <b>I am, do not, cannot</b>, а не I'm, don't, can't.</p>" +
    "<div class='why'><b>Почему так?</b> В английском вежливость строится через «смягчение»: чем длиннее и косвеннее фраза, тем она уважительнее. Прямая форма не грубая между друзьями, но в официальной ситуации может прозвучать как приказ.</div>" +
    "<p><b>Как закончить письмо:</b> начали с «Dear Sir or Madam» — пишите <b>Yours faithfully</b>; начали с имени (Dear Mr Smith) — <b>Yours sincerely</b>; в обычном деловом e-mail — <b>Kind regards</b>. В американском варианте чаще пишут <b>Sincerely</b> и Dear Sir or Madam заменяют на <b>To whom it may concern</b>.</p>";

  // ---------- IELTS ----------
  EN.ielts = {
    intro: "<p><b>IELTS</b> (International English Language Testing System) — международный экзамен по английскому. Его сдают для учёбы, работы и переезда за границу. Результат — балл (band) от 0 до 9 с шагом 0,5 за каждую часть и итоговый балл.</p>" +
      "<p>Есть два вида: <b>Academic</b> — для поступления в университеты, и <b>General Training</b> — для работы и иммиграции. Listening и Speaking у них одинаковые, Reading и Writing отличаются.</p>" +
      "<div class='why'><b>Честно о уровне.</b> Этот курс доводит до A2. Для IELTS обычно нужен балл 5.5–7, а это примерно уровни B1–C1. Раздел поможет понять формат экзамена и начать готовиться. Точные правила и даты всегда проверяйте на официальном сайте ielts.org или у организатора экзамена в вашем городе.</div>",
    format: [
      ["Listening", "около 30 минут", "4 части, 40 вопросов. Запись звучит один раз. Разговоры о быте и учёбе, лекция."],
      ["Reading", "60 минут", "3 текста, 40 вопросов. Academic — тексты из книг и журналов, General — объявления, инструкции, статьи."],
      ["Writing", "60 минут", "Task 1 — от 150 слов (Academic: описать график или схему; General: письмо). Task 2 — эссе от 250 слов."],
      ["Speaking", "11–14 минут", "Разговор с экзаменатором: Part 1 — вопросы о вас, Part 2 — монолог 1–2 минуты по карточке, Part 3 — обсуждение."]
    ],
    bands: [["9", "Expert — свободное владение"], ["8", "Very good — очень хорошо, редкие неточности"], ["7", "Good — уверенно, иногда ошибки"], ["6", "Competent — понятно в целом, есть ошибки"], ["5", "Modest — частично, много ошибок"], ["4", "Limited — только в знакомых ситуациях"]],
    tips: [
      ["Listening", "Прочитайте вопросы до начала записи и подчеркните ключевые слова. Следите за правописанием: ответ с ошибкой не засчитывается."],
      ["Reading", "Не читайте текст целиком медленно. Сначала просмотрите его быстро (skimming), потом ищите нужное место (scanning)."],
      ["Writing", "Соблюдайте объём (150 и 250 слов) и время: на Task 1 — около 20 минут, на Task 2 — около 40. Task 2 весит больше."],
      ["Speaking", "Отвечайте развёрнуто: не «Yes», а «Yes, I do, because…». Если не поняли вопрос, переспросите: «Could you repeat the question, please?»"]
    ],
    // связки для эссе и устной части: [фраза, перевод, где использовать]
    linking: [
      ["Firstly, …", "Во-первых, …", "начать аргумент"],
      ["In addition, …", "Кроме того, …", "добавить мысль"],
      ["However, …", "Однако, …", "противопоставить"],
      ["On the other hand, …", "С другой стороны, …", "вторая точка зрения"],
      ["For example, …", "Например, …", "пример"],
      ["As a result, …", "В результате, …", "следствие"],
      ["In my opinion, …", "По моему мнению, …", "своё мнение"],
      ["To sum up, …", "Подводя итог, …", "вывод"],
      ["That's an interesting question.", "Это интересный вопрос.", "выиграть время в Speaking"],
      ["Let me think about that for a moment.", "Дайте подумать секунду.", "выиграть время в Speaking"]
    ],
    // Speaking Part 1: вопрос и образец ответа
    speaking: [
      ["Where are you from?", "I'm from Almaty, the biggest city in Kazakhstan. It's famous for its mountains."],
      ["Do you work or are you a student?", "I'm a student. I study at university, and I'm learning English in my free time."],
      ["What do you like doing in your free time?", "I really like reading and walking in the park, because it helps me relax."],
      ["Do you like your hometown? Why?", "Yes, I do. It's green and friendly, although the traffic can be quite heavy."],
      ["What kind of music do you like?", "I mostly listen to pop music, but sometimes I enjoy traditional music too."],
      ["How do you usually spend your weekends?", "I usually meet my friends, and on Sundays I help my parents at home."]
    ],
    essay: "<h3>Эссе Task 2: схема на 4 абзаца</h3>" +
      "<p><b>1. Introduction</b> — перефразируйте тему и дайте своё мнение: <i>Some people believe that… In my opinion, …</i></p>" +
      "<p><b>2. Body 1</b> — первая причина и пример: <i>Firstly, … For example, …</i></p>" +
      "<p><b>3. Body 2</b> — вторая причина или другая сторона: <i>On the other hand, … As a result, …</i></p>" +
      "<p><b>4. Conclusion</b> — короткий вывод без новых идей: <i>To sum up, …</i></p>" +
      "<div class='why'><b>Почему эта схема работает?</b> Экзаменатор оценивает четыре критерия: насколько вы ответили на задание, связность текста, словарный запас и грамматику. Чёткие абзацы со связками сразу закрывают критерий связности.</div>",
    quiz: [
      ["Сколько частей в IELTS?", "4|3|5", 0, "Listening, Reading, Writing, Speaking."],
      ["Какой максимальный балл?", "9|10|100", 0, "Шкала от 0 до 9 с шагом 0,5."],
      ["Сколько вопросов в Listening?", "40|30|60", 0, "4 части, всего 40 вопросов."],
      ["Минимальный объём эссе Task 2?", "250 слов|150 слов|100 слов", 0, "Task 1 — от 150, Task 2 — от 250 слов."],
      ["Сколько длится Speaking?", "11–14 минут|30 минут|5 минут", 0, "Три части разговора с экзаменатором."],
      ["Какая связка вводит противопоставление?", "However|For example|Firstly", 0, "However — «однако»."],
      ["Какая связка подходит для вывода?", "To sum up|In addition|For example", 0, "To sum up — «подводя итог»."],
      ["Вы не поняли вопрос на Speaking. Что сказать?", "Could you repeat the question, please?|What?|I don't know.", 0, "Вежливо переспросить — нормально и не снижает балл."]
    ]
  };

  // ---------- Продолжение 31–180 ----------
  EN.next = [
    ["31–60", "A2+", "Present Perfect и Past Simple вместе, будущее время, сравнения, путешествия, покупки, здоровье, работа"],
    ["61–100", "B1", "условные предложения, пассивный залог, косвенная речь, учёба и карьера, новости, письма и e-mail"],
    ["101–140", "B1+", "модальные глаголы прошлого, фразовые глаголы, идиомы, дискуссии, собеседование, презентации"],
    ["141–180", "B2", "сложные времена, инверсия, академическая лексика, эссе и подготовка к IELTS, деловой английский"]
  ];
})(window.EN);
;
/* ==== data5 ==== */
/* Программа продолжения: 31–180 (цель — B1) и дополнительный курс B2 (90 дней).
   Каждый модуль: [название, ориентир CEFR, что вы сможете, грамматика, [10 тем по дням]] */
window.EN = window.EN || {};
EN.b1 = [
  ["Мой день подробно", "A2", "Подробно рассказать о своём дне, привычках и расписании.", "Present Simple и Continuous: контраст; наречия частоты", ["Утро и дорога на учёбу", "Распорядок недели", "Что я делаю сейчас и обычно", "Дом и обязанности", "Еда в течение дня", "Свободное время", "Выходные", "Как часто: always, usually, rarely", "Повторение и мини-рассказ", "Контрольная модуля 1"]],
  ["Истории из прошлого", "A2", "Рассказать историю или случай из прошлого по порядку.", "Past Simple (правильные и неправильные глаголы), used to, Past Continuous, when / while", ["Вчерашний день: -ed", "Неправильные глаголы: часть 1", "Неправильные глаголы: часть 2, say / tell", "Детство: used to", "Поездка: вопросы в прошлом", "Что происходило: Past Continuous", "When и while", "Время в рассказе: before, during, ago", "Смешной случай: наречия", "Контрольная модуля 2"]],
  ["Планы и будущее", "A2", "Говорить о планах, договорённостях и прогнозах.", "be going to, Present Continuous для будущего, will", ["Планы на выходные", "Договорённости и встречи", "Обещания и решения сразу: will", "Прогнозы: погода и жизнь", "Учёба и цели", "Приглашения: принять и отказаться", "Мечты на 5 лет", "Звонок: договориться о встрече", "Письмо другу о планах", "Контрольная модуля 3"]],
  ["Сравниваем мир", "A2+", "Сравнивать города, вещи и людей и выбирать.", "Сравнительная и превосходная степень, as … as, too / enough", ["Город и деревня", "Самое-самое: превосходная степень", "Покупки и выбор товара", "Погода и климат стран", "Too big, not big enough", "Описание внешности", "Описание характера", "Квартира мечты", "Отзыв о месте", "Контрольная модуля 4"]],
  ["Опыт и жизнь", "A2+", "Рассказать о жизненном опыте и о том, что уже сделано.", "Present Perfect: ever / never / already / yet / just; Present Perfect vs Past Simple", ["Have you ever…?", "Already, yet, just", "For и since", "Что изменилось в моём городе", "Резюме и опыт работы", "Present Perfect или Past Simple", "Новости: что случилось", "Собеседование: опыт", "Письмо о новостях", "Контрольная модуля 5"]],
  ["Здоровье и советы", "A2+", "Описать самочувствие, попросить и дать совет.", "should, have to, must, don't have to; советы и правила", ["У врача: симптомы", "В аптеке", "Советы: should", "Правила: must и have to", "Спорт и привычки", "Сон и стресс", "Правила в общежитии", "Просить о помощи вежливо", "Письмо с советом", "Контрольная модуля 6"]],
  ["Путешествия и город", "B1", "Справиться почти в любой ситуации в поездке.", "Модальные can / could / may для просьб; косвенные вопросы", ["Аэропорт и регистрация", "Гостиница: проблемы в номере", "Спросить дорогу: Could you tell me where…?", "Транспорт и билеты", "В ресторане: жалоба", "Достопримечательности", "Потерянные вещи", "Экскурсия: понимать гида", "Отзыв о поездке", "Контрольная модуля 7"]],
  ["Если бы…", "B1", "Говорить о реальных и воображаемых ситуациях.", "Zero, First и Second Conditional; unless; when vs if", ["Факты: если нагреть воду…", "First Conditional: реальное будущее", "Unless и as soon as", "Second Conditional: если бы я…", "If I were you — совет", "Мечты и желания: I wish", "Решения и последствия", "Дебаты: что бы вы сделали", "Эссе: если бы я был мэром", "Контрольная модуля 8"]],
  ["Работа и учёба", "B1", "Обсуждать учёбу, работу и писать деловые письма.", "Герундий и инфинитив: enjoy doing, want to do; used to", ["Профессии и обязанности", "Собеседование: о себе", "Like doing / would like to do", "Раньше и теперь: used to", "Деловое письмо: запрос", "Совещание и мнения", "Университет: лекции и семинары", "Презентация на 2 минуты", "Сопроводительное письмо", "Контрольная модуля 9"]],
  ["Медиа и новости", "B1", "Понять основное в новостях и пересказать их.", "Passive Voice: Present и Past; by + исполнитель", ["Заголовки новостей", "Пассив в настоящем", "Пассив в прошлом", "Как это сделано: процессы", "Соцсети и интернет", "Фильмы и сериалы: отзыв", "Факты и мнения", "Пересказ статьи", "Пишем короткую новость", "Контрольная модуля 10"]],
  ["Люди и отношения", "B1", "Описывать людей, отношения и чувства.", "Relative clauses: who, which, that, where; фразовые глаголы get / get on", ["Семья и друзья подробно", "Человек, который…", "Место, где…", "Фразовые глаголы отношений", "Ссоры и примирение", "Чувства и эмоции", "Знакомство и small talk", "Поздравления и сочувствие", "Письмо о друге", "Контрольная модуля 11"]],
  ["Он сказал, что…", "B1", "Передавать чужие слова и вопросы.", "Reported Speech: said / told / asked; сдвиг времён", ["Said и told", "Передать утверждение", "Передать вопрос", "Передать просьбу и приказ", "Сплетни и новости друзей", "Телефонное сообщение", "Пересказ разговора", "Интервью", "Письмо-пересказ", "Контрольная модуля 12"]],
  ["Природа и общество", "B1", "Высказать и обосновать мнение на общие темы.", "Present Perfect Continuous; связки: however, although, because of", ["Экология", "Как долго: have been doing", "Город будущего", "Технологии в жизни", "Образование: за и против", "However, although, despite", "Мнение: I believe, In my view", "Дискуссия в паре", "Эссе-мнение на 150 слов", "Контрольная модуля 13"]],
  ["Культура и традиции", "B1", "Рассказывать о своей культуре и сравнивать её с другими.", "Past Perfect; артикли в устойчивых выражениях", ["Праздники Казахстана по-английски", "Праздники Британии и США", "Кухня народов мира", "Past Perfect: уже произошло до", "История моего города", "Музыка и искусство", "Этикет в разных странах", "Рассказ гостю о стране", "Статья о традиции", "Контрольная модуля 14"]],
  ["Итог: уровень B1", "B1", "Свободно общаться на знакомые темы и писать связные тексты.", "Повторение всей грамматики A2–B1", ["Повторение времён", "Повторение условных предложений", "Повторение пассива и косвенной речи", "Аудирование B1: формат экзамена", "Чтение B1: формат экзамена", "Письмо B1: письмо и эссе", "Говорение B1: интервью", "Пробный тест: часть 1", "Пробный тест: часть 2", "Итоговый экзамен B1"]]
];
EN.b2 = [
  ["Тонкости времён", "B2", "Точно выбирать время и аспект в сложных ситуациях.", "Future Continuous и Future Perfect; narrative tenses", ["Будущее в процессе", "Будет сделано к…", "Все прошедшие времена в рассказе", "Привычки в прошлом: would", "Контрольная модуля"]],
  ["Условия и сожаления", "B2", "Говорить о несбывшемся и сожалеть корректно.", "Third и Mixed Conditional; I wish / If only + Past Perfect", ["Third Conditional", "Mixed Conditional", "Сожаления: I wish I had…", "Should have / could have done", "Контрольная модуля"]],
  ["Аргументы и дебаты", "B2", "Аргументированно спорить и уступать.", "Связки уступки и контраста; инверсия для акцента", ["Структура аргумента", "Whereas, nevertheless, on the contrary", "Not only… but also", "Вежливое несогласие", "Контрольная модуля"]],
  ["Академический английский", "B2", "Понимать лекции и писать эссе с аргументами.", "Безличные конструкции: It is believed that…; номинализация", ["Лекция: конспект", "Эссе за и против", "Описание графиков", "Цитирование и перефраз", "Контрольная модуля"]],
  ["Деловой английский", "B2", "Вести переговоры, переписку и созвоны.", "Вежливые модальные, смягчение: I was wondering if…", ["Переговоры", "Деловая переписка", "Созвон и презентация", "Жалоба и ответ на жалобу", "Контрольная модуля"]],
  ["Идиомы и фразовые глаголы", "B2", "Понимать живую речь, сериалы и шутки.", "100 частых фразовых глаголов; идиомы", ["Фразовые глаголы: работа", "Фразовые глаголы: отношения", "Идиомы о времени и деньгах", "Британский и американский сленг B2", "Контрольная модуля"]],
  ["Медиа и критика", "B2", "Анализировать статьи, рекламу и фейки.", "Модальные вероятности: must have, can't have; пассив с модальными", ["Как устроена статья", "Должно быть, случилось…", "Реклама и манипуляции", "Рецензия", "Контрольная модуля"]],
  ["Наука и технологии", "B2", "Объяснять сложные идеи простыми словами.", "Причастные обороты; сложное дополнение", ["ИИ и будущее профессий", "Объяснить процесс", "Медицина и открытия", "Научно-популярный текст", "Контрольная модуля"]],
  ["Итог: уровень B2", "B2", "Свободно говорить на абстрактные темы и писать эссе уровня IELTS 6.0–6.5.", "Повторение грамматики B2", ["Пробный Listening", "Пробный Reading", "Пробный Writing", "Пробный Speaking", "Итоговый экзамен B2"]]
];
;
/* ==== data6 ==== */
/* Английский для чайников — продолжение, модуль 1 «Мой день подробно» (A2): уровни 31–40. Формат — см. data1.js. */
(function (EN) {
  var say = EN.say, A = EN.lessons;
  EN.worlds.push({ name: "Мой день подробно", sub: "Уровни 31–40: распорядок, время, сейчас и обычно, дом, еда, хобби, вопросы, частотность. Модуль 1 продолжения (A2)." });

  A.push({ id: 31, world: 6, en: "My morning", ru: "Утро: Present Simple и окончание -s", topic: "Утро",
    goal: "Подробно рассказать о своём утре и об утре другого человека, правильно ставя окончание -s / -es.",
    w: [
      ["wake up", "weɪk ʌp", "", "просыпаться", "I wake up at seven.", "Я просыпаюсь в семь."],
      ["get up", "ɡet ʌp", "", "вставать (с кровати)", "She gets up at half past seven.", "Она встаёт в половине восьмого."],
      ["alarm", "əˈlɑːm", "əˈlɑːrm", "будильник", "My alarm rings at six.", "Мой будильник звонит в шесть."],
      ["brush", "brʌʃ", "", "чистить (щёткой)", "He brushes his teeth.", "Он чистит зубы."],
      ["shower", "ˈʃaʊə", "ˈʃaʊər", "душ; принимать душ", "I have a shower every morning.", "Я принимаю душ каждое утро."],
      ["get dressed", "ɡet drest", "", "одеваться", "I get dressed quickly.", "Я быстро одеваюсь."],
      ["leave", "liːv", "", "уходить, выходить (из дома)", "She leaves home at eight.", "Она выходит из дома в восемь."],
      ["catch", "kætʃ", "", "успеть на (автобус), ловить", "He catches the bus at 8:15.", "Он садится на автобус в 8:15."],
      ["on foot", "ɒn fʊt", "ɑːn fʊt", "пешком", "I go to university on foot.", "Я хожу в университет пешком."],
      ["late", "leɪt", "", "поздно; опоздавший", "Don't be late!", "Не опаздывай!"]
    ],
    p: { t: "Окончание -s: три звука", ipa: "/s/ /z/ /ɪz/",
      html: "<p>Окончание <b>-s / -es</b> читается тремя способами — всё зависит от последнего звука глагола.</p>" +
        "<p><b>/s/</b> после глухих звуков (p, t, k, f): <i>gets, wakes, sleeps</i>. " + say("She gets up. He wakes up.") + "</p>" +
        "<p><b>/z/</b> после звонких и гласных: <i>leaves, goes, plays</i>. " + say("She leaves at eight. He goes home.") + "</p>" +
        "<p><b>/ɪz/</b> после шипящих (s, z, ʃ, tʃ, dʒ): <i>brushes, catches, washes</i> — появляется лишний слог. " + say("He brushes his teeth and catches the bus.") + "</p>",
      ukus: "окончание звучит одинаково. Различаются гласные: <i>on foot</i> — UK /ɒn/, US /ɑːn/; в <i>alarm, shower</i> американцы произносят r.",
      pairs: [["catch", "catches"], ["wash", "washes"], ["get", "gets"]], drill: ["She gets up.", "He leaves at eight.", "He brushes his teeth.", "She catches the bus.", "alarm", "shower"] },
    g: { t: "Present Simple: he / she / it + -s, правила написания",
      html: "<p>С <b>he, she, it</b> (и одним человеком: <i>my sister, Tom</i>) к глаголу добавляется <b>-s</b>: <i>I get up → she get<b>s</b> up</i>.</p>" +
        "<table><tr><th>Глагол кончается на</th><th>Что добавить</th><th>Пример</th></tr>" +
        "<tr><td>большинство</td><td>-s</td><td>wake → wake<b>s</b>, leave → leave<b>s</b></td></tr>" +
        "<tr><td>-s, -sh, -ch, -x, -o</td><td>-es</td><td>brush → brush<b>es</b>, catch → catch<b>es</b>, go → go<b>es</b>, do → do<b>es</b></td></tr>" +
        "<tr><td>согласная + y</td><td>y → -ies</td><td>study → stud<b>ies</b>, fly → fl<b>ies</b></td></tr>" +
        "<tr><td>гласная + y</td><td>-s</td><td>play → play<b>s</b>, stay → stay<b>s</b></td></tr>" +
        "<tr><td>have</td><td>особая форма</td><td>he <b>has</b></td></tr></table>" +
        "<div class='why'><b>Почему так?</b> Это последний «осколок» старых окончаний глагола. В русском окончания у каждого лица (я иду, он идёт), а в английском осталось только одно — у he/she/it.</div>" +
        "<p class='brk'>Отрицание и вопрос: <b>doesn't</b> / <b>Does</b> — и тогда -s у глагола уже не нужен: <i>She doesn't get up early. Does he catch the bus?</i></p>",
      tasks: [
        ["c", "My brother ___ up at six.", "gets|get|getting", 0, "my brother = he → get<b>s</b>."],
        ["c", "She ___ her teeth after breakfast.", "brushes|brushs|brush", 0, "brush кончается на -sh → <b>-es</b>."],
        ["c", "He ___ English at university.", "studies|studys|study", 0, "согласная + y → <b>-ies</b>."],
        ["c", "Tom ___ a shower in the evening.", "has|haves|have", 0, "have → <b>has</b> с he/she/it."],
        ["c", "My mum ___ home at 7:30.", "leaves|leave|leavs", 0, "leave + s = leave<b>s</b>."],
        ["c", "She ___ get up early on Sundays.", "doesn't|don't|isn't", 0, "Отрицание с she → <b>doesn't</b> + глагол без -s."],
        ["c", "___ he catch the bus every day?", "Does|Do|Is", 0, "Вопрос с he → <b>Does</b>."],
        ["c", "My cat ___ me up at five!", "wakes|wake|waking", 0, "my cat = it → wake<b>s</b>."],
        ["t", "Она уходит из дома в восемь.", "She leaves home at eight.|She leaves home at 8.|She leaves the house at eight.", "she → leave<b>s</b>."],
        ["t", "Он ходит в университет пешком.", "He goes to university on foot.|He walks to university.", "go → go<b>es</b>; пешком — on foot."],
        ["b", "My sister never gets up late.", "Моя сестра никогда не встаёт поздно.", "never стоит перед глаголом, gets — с -s."]
      ] },
    d: { t: "Утро двух соседей",
      l: [["A", "What time do you get up?", "Во сколько ты встаёшь?"], ["B", "My alarm rings at six, but I get up at half past six.", "Будильник звонит в шесть, но встаю я в половине седьмого."], ["A", "That's early! What do you do first?", "Рано! Что делаешь сначала?"],
        ["B", "I have a shower, get dressed and have breakfast.", "Принимаю душ, одеваюсь и завтракаю."], ["A", "And how do you get to university?", "А как добираешься до университета?"], ["B", "I usually go on foot. It takes twenty minutes, so I'm never late.", "Обычно хожу пешком. Это двадцать минут, поэтому я никогда не опаздываю."]],
      q: [["Во сколько B встаёт?", "В половине седьмого|В шесть|В семь", 0, "I get up at half past six."], ["Что B делает первым?", "Принимает душ|Завтракает|Чистит зубы", 0, "I have a shower, get dressed…"], ["Как B добирается до университета?", "Пешком, 20 минут|На автобусе|На такси", 0, "I usually go on foot. It takes twenty minutes."]] },
    s: [["She wakes up at seven.", "Она просыпается в семь.", "She wakes up at 7."], ["He doesn't have breakfast.", "Он не завтракает.", "He does not have breakfast."], ["I catch the bus at eight.", "Я сажусь на автобус в восемь.", "I catch the bus at 8.|I take the bus at eight."]]
  });

  A.push({ id: 32, world: 6, en: "My week", ru: "Неделя: предлоги времени on, at, in", topic: "Расписание",
    goal: "Рассказать о расписании недели и договориться о времени, не путая on, at и in.",
    w: [
      ["weekday", "ˈwiːkdeɪ", "", "будний день", "On weekdays I study.", "В будни я учусь."],
      ["weekend", "ˌwiːkˈend", "ˈwiːkend", "выходные", "See you at the weekend!", "Увидимся на выходных!"],
      ["Thursday", "ˈθɜːzdeɪ", "ˈθɝːzdeɪ", "четверг", "I have English on Thursday.", "У меня английский в четверг."],
      ["timetable", "ˈtaɪmteɪbl", "", "расписание (UK); в US — schedule", "Check the timetable.", "Посмотри расписание."],
      ["lesson", "ˈlesn", "", "урок, занятие", "My first lesson starts at nine.", "Моё первое занятие начинается в девять."],
      ["start", "stɑːt", "stɑːrt", "начинать(ся)", "The film starts at seven.", "Фильм начинается в семь."],
      ["finish", "ˈfɪnɪʃ", "", "заканчивать(ся)", "We finish at three.", "Мы заканчиваем в три."],
      ["busy", "ˈbɪzi", "", "занятой", "I'm busy on Monday.", "В понедельник я занят."],
      ["free", "friː", "", "свободный", "Are you free on Friday evening?", "Ты свободен в пятницу вечером?"],
      ["once a week", "wʌns ə wiːk", "", "раз в неделю", "I go swimming once a week.", "Я хожу плавать раз в неделю."]
    ],
    p: { t: "Звук /θ/ — Thursday, third, month", ipa: "/θ/",
      html: "<p>Звук <b>/θ/</b> пишется буквами <b>th</b>. Кончик языка слегка между зубами, и вы дуете — как «с», но язык впереди. Не заменяйте его на «с» или «ф»: <i>Thursday</i>, а не «сёздей».</p>" +
        "<p>" + say("Thursday. Third. Month. Thank you.") + "</p>" +
        "<p>Звонкая пара — <b>/ð/</b>: <i>this, the, then</i>. Язык тот же, но включается голос. " + say("This Thursday, then.") + "</p>",
      ukus: "UK говорит <i>timetable</i> и <i>at the weekend</i>, US — <i>schedule</i> и <i>on the weekend</i>. Оба варианта правильные.",
      pairs: [["thick", "sick"], ["three", "free"], ["thin", "fin"]], drill: ["Thursday", "third", "month", "this Thursday", "Thank you", "free"] },
    g: { t: "Предлоги времени: at, on, in",
      html: "<p>Представьте пирамиду: чем точнее время, тем «меньше» предлог.</p>" +
        "<table><tr><th>Предлог</th><th>Когда</th><th>Примеры</th></tr>" +
        "<tr><td><b>at</b></td><td>точное время, «точки»</td><td>at 9:00, at noon, at night, at the weekend (UK)</td></tr>" +
        "<tr><td><b>on</b></td><td>дни и даты</td><td>on Monday, on Friday evening, on 5 May, on my birthday</td></tr>" +
        "<tr><td><b>in</b></td><td>длинные периоды</td><td>in the morning, in May, in 2026, in summer</td></tr></table>" +
        "<div class='why'><b>Ловушки.</b> <i>in the evening</i>, но <i>on Monday evening</i> — если есть день, побеждает <b>on</b>. <i>At night</i> — без the. Перед <b>this, next, last, every</b> предлог не нужен: <i>next Monday, every day</i>.</div>",
      tasks: [
        ["c", "My lesson starts ___ nine o'clock.", "at|on|in", 0, "Точное время → <b>at</b>."],
        ["c", "I have English ___ Thursday.", "on|at|in", 0, "День недели → <b>on</b>."],
        ["c", "We go to the park ___ the morning.", "in|on|at", 0, "Часть дня → <b>in</b> the morning."],
        ["c", "Are you free ___ Friday evening?", "on|in|at", 0, "Есть день → <b>on</b> Friday evening."],
        ["c", "My birthday is ___ May.", "in|on|at", 0, "Месяц → <b>in</b>."],
        ["c", "I don't work ___ night.", "at|in|on", 0, "Устойчиво: <b>at</b> night."],
        ["c", "See you ___ Monday!", "next|on next|in next", 0, "Перед next предлог не нужен."],
        ["c", "The shop is closed ___ 1 January.", "on|in|at", 0, "Дата → <b>on</b>."],
        ["t", "Я занят в понедельник.", "I'm busy on Monday.|I am busy on Monday.", "День → on Monday."],
        ["t", "Я хожу плавать раз в неделю.", "I go swimming once a week.", "once a week — раз в неделю."],
        ["b", "We finish at three on Fridays.", "По пятницам мы заканчиваем в три.", "at — время, on — день."]
      ] },
    d: { t: "Договариваемся о встрече",
      l: [["A", "Are you free on Thursday?", "Ты свободна в четверг?"], ["B", "No, sorry, I'm busy. I have lessons from nine to five.", "Нет, извини, я занята. У меня занятия с девяти до пяти."], ["A", "What about Friday evening?", "А в пятницу вечером?"],
        ["B", "Friday is fine. My last lesson finishes at three.", "Пятница подходит. Последнее занятие заканчивается в три."], ["A", "Great. Let's meet at six, at the café.", "Отлично. Давай встретимся в шесть в кафе."], ["B", "OK, see you on Friday at six!", "Хорошо, до пятницы, в шесть!"]],
      q: [["Почему B не может в четверг?", "Занятия с 9 до 5|Работа вечером|День рождения", 0, "I have lessons from nine to five."], ["Во сколько у B заканчивается последнее занятие в пятницу?", "В три|В пять|В шесть", 0, "My last lesson finishes at three."], ["Где и когда встреча?", "В кафе в пятницу в шесть|В парке в четверг|В кафе в пятницу в три", 0, "Let's meet at six, at the café."]] },
    s: [["My lessons start at nine.", "Мои занятия начинаются в девять.", "My lessons start at 9."], ["I'm free on Saturday.", "В субботу я свободен.", "I am free on Saturday."], ["We meet in the evening.", "Мы встречаемся вечером.", "We meet in the evenings."]]
  });

  A.push({ id: 33, world: 6, en: "Now or usually?", ru: "Present Simple или Continuous", topic: "Сейчас и обычно",
    goal: "Различать, что человек делает обычно и что он делает сейчас, и выбирать нужное время.",
    w: [
      ["usually", "ˈjuːʒuəli", "", "обычно", "I usually walk to work.", "Обычно я хожу на работу пешком."],
      ["at the moment", "ət ðə ˈməʊmənt", "ət ðə ˈmoʊmənt", "в данный момент", "She's working at the moment.", "Она сейчас работает."],
      ["right now", "raɪt naʊ", "", "прямо сейчас", "I can't talk right now.", "Я не могу говорить прямо сейчас."],
      ["these days", "ðiːz deɪz", "", "в эти дни, в последнее время", "I'm reading a lot these days.", "В последнее время я много читаю."],
      ["wear", "weə", "wer", "носить (одежду)", "She usually wears jeans.", "Обычно она носит джинсы."],
      ["wait", "weɪt", "", "ждать", "I'm waiting for the bus.", "Я жду автобус."],
      ["rain", "reɪn", "", "дождь; идёт дождь", "It's raining now.", "Сейчас идёт дождь."],
      ["cook", "kʊk", "", "готовить (еду)", "Dad is cooking dinner.", "Папа готовит ужин."],
      ["prefer", "prɪˈfɜː", "prɪˈfɝː", "предпочитать", "I prefer tea.", "Я предпочитаю чай."],
      ["know", "nəʊ", "noʊ", "знать", "I know the answer.", "Я знаю ответ."]
    ],
    p: { t: "Звук /ŋ/ в окончании -ing", ipa: "/ŋ/",
      html: "<p>В <b>-ing</b> нет звука «г» в конце. Это <b>/ŋ/</b> — «н», сказанное задней частью языка, как в русском «банк» перед «к». Рот открыт, звук идёт в нос.</p>" +
        "<p>" + say("I'm waiting. She's cooking. It's raining.") + "</p>" +
        "<p>В разговорной речи часто слышно <i>waitin'</i> — это небрежная форма, в учёбе произносите полное /ŋ/.</p>",
      ukus: "<i>at the moment</i>: UK /ˈməʊmənt/, US /ˈmoʊmənt/. В <i>wear</i> американцы произносят r в конце.",
      pairs: [["sin", "sing"], ["thin", "thing"], ["ran", "rang"]], drill: ["waiting", "cooking", "raining", "I'm waiting for the bus.", "right now", "usually"] },
    g: { t: "Present Simple или Present Continuous",
      html: "<table><tr><th></th><th>Present Simple</th><th>Present Continuous</th></tr>" +
        "<tr><td>Смысл</td><td>обычно, регулярно, всегда правда</td><td>сейчас, в процессе, временно</td></tr>" +
        "<tr><td>Форма</td><td>I work / she works</td><td>I'm working / she's working</td></tr>" +
        "<tr><td>Подсказки</td><td>usually, every day, often, never</td><td>now, at the moment, right now, Look!, these days</td></tr>" +
        "<tr><td>Пример</td><td>She usually <b>wears</b> jeans.</td><td>Today she <b>is wearing</b> a dress.</td></tr></table>" +
        "<div class='why'><b>Глаголы состояния</b> обычно не бывают в Continuous: <i>know, like, love, want, need, prefer, understand, believe</i>. Даже «сейчас» говорят <i>I know</i>, а не <i>I'm knowing</i>.</div>",
      tasks: [
        ["c", "Look! It ___.", "is raining|rains|rain", 0, "Look! — сейчас → <b>is raining</b>."],
        ["c", "It often ___ in London.", "rains|is raining|rain", 0, "often — регулярно → <b>rains</b>."],
        ["c", "I can't talk now. I ___ dinner.", "am cooking|cook|cooks", 0, "now → Continuous."],
        ["c", "She usually ___ jeans, but today she ___ a dress.", "wears, is wearing|is wearing, wears|wear, wearing", 0, "usually → Simple, today → Continuous."],
        ["c", "I ___ the answer.", "know|am knowing|knowing", 0, "know — глагол состояния, без -ing."],
        ["c", "We ___ for the bus at the moment.", "are waiting|wait|waits", 0, "at the moment → Continuous."],
        ["c", "___ you usually walk to work?", "Do|Are|Is", 0, "usually → Present Simple → <b>Do</b>."],
        ["c", "What ___ you doing right now?", "are|do|does", 0, "right now → <b>are</b> you doing."],
        ["t", "Я жду автобус.", "I'm waiting for the bus.|I am waiting for the bus.", "Сейчас → am waiting; ждать кого-то — wait <b>for</b>."],
        ["t", "Я предпочитаю чай.", "I prefer tea.", "prefer — состояние → Present Simple."],
        ["b", "I'm reading a good book these days.", "В последнее время я читаю хорошую книгу.", "these days — временный период → Continuous."]
      ] },
    d: { t: "Телефонный звонок",
      l: [["A", "Hi! What are you doing?", "Привет! Что делаешь?"], ["B", "I'm waiting for the bus. It's raining and I'm cold!", "Жду автобус. Идёт дождь, и мне холодно!"], ["A", "Don't you usually go on foot?", "Ты же обычно ходишь пешком?"],
        ["B", "Yes, I usually walk, but not in this weather.", "Да, обычно хожу пешком, но не в такую погоду."], ["A", "I'm cooking dinner. Come to my place!", "Я готовлю ужин. Приходи ко мне!"], ["B", "Thanks! I know your address. See you soon!", "Спасибо! Я знаю твой адрес. Скоро буду!"]],
      q: [["Что B делает сейчас?", "Ждёт автобус|Идёт пешком|Готовит ужин", 0, "I'm waiting for the bus."], ["Как B обычно добирается?", "Пешком|На автобусе|На такси", 0, "I usually walk…"], ["Что делает A?", "Готовит ужин|Ждёт автобус|Работает", 0, "I'm cooking dinner."]] },
    s: [["It's raining at the moment.", "Сейчас идёт дождь.", "It is raining at the moment.|It's raining now."], ["She usually walks to work.", "Она обычно ходит на работу пешком.", "She usually goes to work on foot."], ["What are you doing?", "Что ты делаешь?", "What are you doing now?"]]
  });

  A.push({ id: 34, world: 6, en: "Housework", ru: "Дом: do или make", topic: "Дом и обязанности",
    goal: "Рассказать, кто что делает по дому, и не путать do и make.",
    w: [
      ["housework", "ˈhaʊswɜːk", "ˈhaʊswɝːk", "домашние дела", "I do the housework on Saturdays.", "Я делаю домашние дела по субботам."],
      ["wash up", "wɒʃ ʌp", "wɑːʃ ʌp", "мыть посуду (UK)", "Can you wash up, please?", "Можешь помыть посуду?"],
      ["dishes", "ˈdɪʃɪz", "", "посуда, тарелки", "He does the dishes after dinner.", "Он моет посуду после ужина."],
      ["laundry", "ˈlɔːndri", "ˈlɑːndri", "стирка; бельё", "I do the laundry on Sunday.", "Я стираю в воскресенье."],
      ["vacuum", "ˈvækjuːm", "", "пылесосить; пылесос", "She vacuums the carpet.", "Она пылесосит ковёр."],
      ["tidy", "ˈtaɪdi", "", "убирать; аккуратный", "Tidy your room!", "Убери свою комнату!"],
      ["iron", "ˈaɪən", "ˈaɪərn", "гладить; утюг", "I never iron my T-shirts.", "Я никогда не глажу футболки."],
      ["rubbish", "ˈrʌbɪʃ", "", "мусор (UK); в US — trash", "Take out the rubbish.", "Вынеси мусор."],
      ["share", "ʃeə", "ʃer", "делить(ся)", "We share the housework.", "Мы делим домашние дела."],
      ["flatmate", "ˈflætmeɪt", "", "сосед по квартире (UK); в US — roommate", "My flatmate cooks very well.", "Мой сосед по квартире отлично готовит."]
    ],
    p: { t: "Звуки /w/ и /v/", ipa: "/w/ /v/",
      html: "<p><b>/v/</b> — как русское «в»: верхние зубы касаются нижней губы. <b>/w/</b> — губы вытянуты в трубочку и сразу раскрываются, зубы не участвуют, похоже на быстрое «уа».</p>" +
        "<p>" + say("wash, wine, west — vacuum, vine, vest") + "</p>" +
        "<p>Скороговорка: " + say("We wash and vacuum very well.") + "</p>",
      ukus: "UK: <i>wash up, rubbish, flatmate</i>; US: <i>do the dishes, trash, roommate</i>. В <i>laundry</i> UK /ɔː/, US /ɑː/.",
      pairs: [["west", "vest"], ["wine", "vine"], ["wet", "vet"]], drill: ["wash", "vacuum", "We wash and vacuum very well.", "housework", "west", "vest"] },
    g: { t: "do или make",
      html: "<p>Оба глагола переводятся как «делать», но работают по-разному.</p>" +
        "<table><tr><th>do — действие, работа, обязанность</th><th>make — создать, получить результат</th></tr>" +
        "<tr><td>do the housework, do the dishes, do the laundry, do homework, do sport, do your best</td><td>make breakfast, make a cake, make tea, make the bed, make a mistake, make a noise, make friends</td></tr></table>" +
        "<div class='why'><b>Подсказка.</b> Если в конце появилось что-то новое (еда, шум, ошибка, заправленная кровать) — чаще <b>make</b>. Если просто выполняете работу — <b>do</b>. Но многое надо запомнить как готовые сочетания.</div>" +
        "<p class='brk'>Кто что делает: <i>Who does the cooking?</i> — <i>My dad <b>does</b>.</i> Кто-то другой делает за вас: <i>My mum makes me tidy my room</i> — «мама заставляет».</p>",
      tasks: [
        ["c", "I ___ the housework on Saturdays.", "do|make|have", 0, "<b>do</b> the housework."],
        ["c", "Can you ___ breakfast, please?", "make|do|cook up", 0, "Еда — результат → <b>make</b> breakfast."],
        ["c", "Don't worry, everybody ___ mistakes.", "makes|does|has", 0, "<b>make</b> a mistake."],
        ["c", "He ___ the dishes after dinner.", "does|makes|is", 0, "<b>do</b> the dishes."],
        ["c", "___ your bed every morning!", "Make|Do|Tidy up", 0, "<b>make</b> the bed — заправлять кровать."],
        ["c", "My flatmate ___ the laundry on Sundays.", "does|makes|do", 0, "<b>do</b> the laundry; flatmate → -es."],
        ["c", "Please don't ___ so much noise.", "make|do|have", 0, "<b>make</b> a noise."],
        ["c", "We ___ the housework.", "share|shares|sharing", 0, "we → без -s."],
        ["t", "Я никогда не глажу футболки.", "I never iron my T-shirts.|I never iron my t-shirts.|I never iron T-shirts.", "never перед глаголом."],
        ["t", "Вынеси мусор, пожалуйста.", "Take out the rubbish, please.|Please take out the rubbish.|Take out the trash, please.|Take the rubbish out, please.", "take out the rubbish (UK) / trash (US)."],
        ["b", "My flatmate makes dinner and I do the dishes.", "Мой сосед готовит ужин, а я мою посуду.", "make dinner — результат; do the dishes — работа."]
      ] },
    d: { t: "Кто сегодня убирает?",
      l: [["A", "The flat is a mess! Whose turn is it?", "В квартире бардак! Чья сегодня очередь?"], ["B", "I did the dishes yesterday. Today it's your turn.", "Вчера посуду мыл я. Сегодня твоя очередь."], ["A", "OK, I'll vacuum and take out the rubbish.", "Ладно, я пропылесошу и вынесу мусор."],
        ["B", "And I'll make dinner. Pasta?", "А я приготовлю ужин. Паста?"], ["A", "Great. Can you do the laundry too?", "Отлично. А можешь ещё постирать?"], ["B", "Only if you iron my shirts!", "Только если ты погладишь мои рубашки!"]],
      q: [["Что B делал вчера?", "Мыл посуду|Пылесосил|Стирал", 0, "I did the dishes yesterday."], ["Что сделает A?", "Пропылесосит и вынесет мусор|Приготовит ужин|Погладит рубашки", 0, "I'll vacuum and take out the rubbish."], ["Что приготовит B?", "Пасту|Суп|Плов", 0, "And I'll make dinner. Pasta?"]] },
    s: [["We share the housework.", "Мы делим домашние дела.", "We share housework."], ["I make my bed every day.", "Я заправляю кровать каждый день.", "I make the bed every day."], ["Who does the cooking?", "Кто готовит?", "Who cooks?"]]
  });

  A.push({ id: 35, world: 6, en: "Food all day", ru: "Еда: some, any, much, many", topic: "Еда в течение дня",
    goal: "Рассказать, что вы едите за день, и правильно говорить о количестве: some, any, much, many, a lot of.",
    w: [
      ["meal", "miːl", "", "приём пищи, еда", "Breakfast is my favourite meal.", "Завтрак — мой любимый приём пищи."],
      ["snack", "snæk", "", "перекус", "I have a snack at four.", "В четыре у меня перекус."],
      ["cereal", "ˈsɪəriəl", "ˈsɪriəl", "хлопья, каша из хлопьев", "I have cereal with milk.", "Я ем хлопья с молоком."],
      ["vegetables", "ˈvedʒtəblz", "", "овощи", "Eat more vegetables.", "Ешь больше овощей."],
      ["rice", "raɪs", "", "рис", "We don't have much rice.", "У нас мало риса."],
      ["meat", "miːt", "", "мясо", "Kazakh food has a lot of meat.", "В казахской кухне много мяса."],
      ["sugar", "ˈʃʊɡə", "ˈʃʊɡər", "сахар", "No sugar, thanks.", "Без сахара, спасибо."],
      ["hungry", "ˈhʌŋɡri", "", "голодный", "I'm hungry!", "Я голоден!"],
      ["healthy", "ˈhelθi", "", "здоровый, полезный", "Fruit is healthy.", "Фрукты полезные."],
      ["skip", "skɪp", "", "пропускать", "Don't skip breakfast.", "Не пропускай завтрак."]
    ],
    p: { t: "Звуки /ʃ/ и /tʃ/", ipa: "/ʃ/ /tʃ/",
      html: "<p><b>/ʃ/</b> (sh) — мягкое длинное «ш», губы чуть вперёд: <i>sugar, fish, shop</i>. <b>/tʃ/</b> (ch) — короткое «ч» с толчком: <i>cheese, chicken, lunch</i>.</p>" +
        "<p>" + say("sugar, fish, shop — cheese, chicken, lunch") + "</p>" +
        "<p>Заметьте: в <b>sugar</b> пишется s, а звучит /ʃ/.</p>",
      ukus: "UK <i>favourite</i>, US <i>favorite</i>. В <i>cereal</i> и <i>sugar</i> у американцев слышен r.",
      pairs: [["ship", "chip"], ["share", "chair"], ["wash", "watch"]], drill: ["sugar", "cheese", "chicken", "fish and chips", "lunch", "healthy"] },
    g: { t: "Исчисляемые и неисчисляемые: some, any, much, many",
      html: "<p><b>Исчисляемые</b> можно посчитать: <i>an apple, two eggs</i>. <b>Неисчисляемые</b> — нет: <i>rice, milk, sugar, meat, bread, water</i>. У них нет a/an и множественного числа.</p>" +
        "<table><tr><th></th><th>Исчисляемые (eggs)</th><th>Неисчисляемые (rice)</th></tr>" +
        "<tr><td>утверждение</td><td>some eggs, a lot of eggs</td><td>some rice, a lot of rice</td></tr>" +
        "<tr><td>отрицание и вопрос</td><td>any eggs, many eggs</td><td>any rice, much rice</td></tr>" +
        "<tr><td>сколько?</td><td><b>How many</b> eggs?</td><td><b>How much</b> rice?</td></tr></table>" +
        "<div class='why'><b>Почему так?</b> Some — «немного, сколько-то» в утверждении. Any — «хоть сколько-нибудь» в вопросе и отрицании. В просьбах и предложениях всё же говорят <b>some</b>: <i>Would you like some tea?</i> — вы ждёте «да».</div>",
      tasks: [
        ["c", "We don't have ___ rice.", "much|many|a", 0, "rice — неисчисляемое, отрицание → <b>much</b>."],
        ["c", "How ___ eggs do you need?", "many|much|any", 0, "eggs — исчисляемые → <b>How many</b>."],
        ["c", "There is ___ milk in the fridge.", "some|any|many", 0, "Утверждение → <b>some</b>."],
        ["c", "Are there ___ vegetables?", "any|much|a", 0, "Вопрос → <b>any</b>."],
        ["c", "Would you like ___ tea?", "some|any|many", 0, "Предложение → <b>some</b>."],
        ["c", "How ___ sugar do you take?", "much|many|some", 0, "sugar — неисчисляемое → <b>How much</b>."],
        ["c", "Kazakh food has ___ meat.", "a lot of|many|a", 0, "Утверждение, неисчисляемое → <b>a lot of</b>."],
        ["c", "I'd like ___ apple.", "an|some|any", 0, "apple — одно, исчисляемое → <b>an</b>."],
        ["t", "Без сахара, спасибо.", "No sugar, thanks.|No sugar, thank you.", "Устойчивая фраза."],
        ["t", "Не пропускай завтрак.", "Don't skip breakfast.|Do not skip breakfast.", "skip — пропускать."],
        ["b", "I usually have a snack at four.", "Обычно у меня перекус в четыре.", "have a snack — перекусить."]
      ] },
    d: { t: "Что купить к ужину",
      l: [["A", "I'm hungry! Is there any food?", "Я голодный! Есть какая-нибудь еда?"], ["B", "There's some rice, but there isn't any meat.", "Есть немного риса, но мяса нет."], ["A", "How many eggs are there?", "Сколько там яиц?"],
        ["B", "Only two. And we don't have much milk.", "Только два. И молока мало."], ["A", "OK, I'll go to the shop. Do we need any vegetables?", "Ладно, схожу в магазин. Овощи нужны?"], ["B", "Yes, please. Let's cook something healthy!", "Да, пожалуйста. Давай приготовим что-нибудь полезное!"]],
      q: [["Чего нет дома?", "Мяса|Риса|Яиц", 0, "There isn't any meat."], ["Сколько яиц?", "Два|Шесть|Ни одного", 0, "Only two."], ["Что ещё нужно купить?", "Овощи и молоко|Сахар|Хлеб", 0, "We don't have much milk. Do we need any vegetables? — Yes."]] },
    s: [["Is there any milk?", "Есть молоко?", "Is there any milk left?"], ["I don't eat much meat.", "Я ем мало мяса.", "I do not eat much meat.|I don't eat a lot of meat."], ["How many apples do you want?", "Сколько яблок ты хочешь?", "How many apples would you like?"]]
  });

  A.push({ id: 36, world: 6, en: "Free time", ru: "Хобби: like / love / hate + -ing", topic: "Свободное время",
    goal: "Рассказать о хобби и о том, что вы любите и не любите делать.",
    w: [
      ["hobby", "ˈhɒbi", "ˈhɑːbi", "хобби", "My hobby is photography.", "Моё хобби — фотография."],
      ["enjoy", "ɪnˈdʒɔɪ", "", "получать удовольствие, любить", "I enjoy reading.", "Я люблю читать."],
      ["can't stand", "kɑːnt stænd", "kænt stænd", "терпеть не могу", "I can't stand waiting.", "Терпеть не могу ждать."],
      ["mind", "maɪnd", "", "возражать, быть против", "I don't mind cooking.", "Я не против готовить."],
      ["board game", "ˈbɔːd ɡeɪm", "ˈbɔːrd ɡeɪm", "настольная игра", "We play board games on Fridays.", "По пятницам мы играем в настольные игры."],
      ["draw", "drɔː", "drɑː", "рисовать (карандашом)", "She loves drawing.", "Она обожает рисовать."],
      ["hiking", "ˈhaɪkɪŋ", "", "походы, пешие прогулки", "We go hiking in the mountains.", "Мы ходим в походы в горы."],
      ["gym", "dʒɪm", "", "спортзал", "I go to the gym twice a week.", "Я хожу в спортзал два раза в неделю."],
      ["relax", "rɪˈlæks", "", "расслабляться, отдыхать", "I relax with music.", "Я отдыхаю под музыку."],
      ["interested in", "ˈɪntrəstɪd ɪn", "", "интересующийся (чем-то)", "I'm interested in history.", "Мне интересна история."]
    ],
    p: { t: "Ударение в словах: HObby, enJOY", ipa: "ˈ",
      html: "<p>Знак <b>ˈ</b> в транскрипции стоит <i>перед</i> ударным слогом. Ударный слог — громче, длиннее и выше; безударные «проглатываются» в /ə/.</p>" +
        "<p>Двусложные существительные чаще ударные в начале: <b>HOB</b>by, <b>HI</b>king. Глаголы — часто в конце: en<b>JOY</b>, re<b>LAX</b>.</p>" +
        "<p>" + say("hobby, hiking, gym — enjoy, relax") + "</p>" +
        "<p>Слово <b>interested</b> — три слога, а не четыре: <i>IN-tres-ted</i>. " + say("I'm interested in history.") + "</p>",
      ukus: "<i>hobby</i>: UK /ɒ/, US /ɑː/. <i>can't</i>: UK /kɑːnt/, US /kænt/ — одна из самых заметных разниц.",
      pairs: [["can", "can't"], ["hobby", "happy"]], drill: ["hobby", "enjoy", "relax", "interested", "I can't stand waiting.", "I don't mind cooking."] },
    g: { t: "Глаголы вкуса + -ing",
      html: "<p>После глаголов, которые говорят об отношении к занятию, второй глагол получает <b>-ing</b>:</p>" +
        "<p>♥♥ <b>love</b> · ♥ <b>like / enjoy</b> · — <b>don't mind</b> · ✗ <b>don't like</b> · ✗✗ <b>hate / can't stand</b> + <b>-ing</b></p>" +
        "<p><i>I enjoy read<b>ing</b>. She can't stand wait<b>ing</b>. Do you like cook<b>ing</b>?</i></p>" +
        "<div class='why'><b>Ловушки.</b> После <b>enjoy, mind, can't stand</b> — только -ing (<i>I enjoy to read</i> — ошибка). После предлога тоже -ing: <i>interested <b>in</b> learning, good <b>at</b> drawing</i>. Но <b>would like</b> + to: <i>I'd like to go hiking</i> — это желание, а не вкус.</div>" +
        "<p class='brk'>go + -ing для активностей: <i>go hiking, go swimming, go shopping</i>.</p>",
      tasks: [
        ["c", "I enjoy ___ books.", "reading|to read|read", 0, "enjoy + <b>-ing</b>."],
        ["c", "She can't stand ___.", "waiting|to wait|wait", 0, "can't stand + <b>-ing</b>."],
        ["c", "I don't mind ___ dinner.", "cooking|to cook|cook", 0, "mind + <b>-ing</b>."],
        ["c", "We often go ___ in the mountains.", "hiking|to hike|hike", 0, "go + <b>-ing</b> для активностей."],
        ["c", "He's interested ___ history.", "in|on|at", 0, "interested <b>in</b>."],
        ["c", "I'm good at ___.", "drawing|draw|to draw", 0, "После предлога → <b>-ing</b>."],
        ["c", "I'd like ___ to the gym tonight.", "to go|going|go", 0, "would like + <b>to</b>."],
        ["c", "___ you like playing board games?", "Do|Are|Does", 0, "Вопрос с you → <b>Do</b>."],
        ["t", "Я люблю читать.", "I like reading.|I love reading.|I enjoy reading.|I like to read.|I love to read.", "like/love + -ing (или to)."],
        ["t", "Мне интересна история.", "I'm interested in history.|I am interested in history.", "interested in."],
        ["b", "I go to the gym twice a week.", "Я хожу в спортзал два раза в неделю.", "twice a week — дважды в неделю."]
      ] },
    d: { t: "Знакомство в клубе",
      l: [["A", "What do you do in your free time?", "Чем ты занимаешься в свободное время?"], ["B", "I love drawing, and I go hiking at the weekend.", "Обожаю рисовать, а на выходных хожу в походы."], ["A", "Cool! I can't stand walking for hours.", "Круто! Терпеть не могу часами ходить."],
        ["B", "What do you enjoy doing?", "А тебе что нравится делать?"], ["A", "I enjoy playing board games. I don't mind losing!", "Люблю играть в настольные игры. Проигрывать не боюсь!"], ["B", "Then come to our club on Friday!", "Тогда приходи в наш клуб в пятницу!"]],
      q: [["Что B любит делать?", "Рисовать и ходить в походы|Играть в игры|Готовить", 0, "I love drawing, and I go hiking at the weekend."], ["Что A терпеть не может?", "Долго ходить пешком|Проигрывать|Рисовать", 0, "I can't stand walking for hours."], ["Что нравится A?", "Настольные игры|Походы|Спортзал", 0, "I enjoy playing board games."]] },
    s: [["I enjoy playing board games.", "Мне нравится играть в настольные игры.", "I like playing board games."], ["She can't stand waiting.", "Она терпеть не может ждать.", "She hates waiting."], ["We go hiking at the weekend.", "На выходных мы ходим в походы.", "We go hiking on the weekend.|We go hiking at weekends."]]
  });

  A.push({ id: 37, world: 6, en: "Asking questions", ru: "Вопросы: порядок слов и вопросительные слова", topic: "Выходные",
    goal: "Свободно задавать вопросы о жизни и выходных: What, Where, When, Who, Why, How often.",
    w: [
      ["ask", "ɑːsk", "æsk", "спрашивать", "Can I ask a question?", "Можно задать вопрос?"],
      ["answer", "ˈɑːnsə", "ˈænsər", "ответ; отвечать", "I don't know the answer.", "Я не знаю ответа."],
      ["usually", "ˈjuːʒuəli", "", "обычно", "What do you usually do on Sunday?", "Что ты обычно делаешь в воскресенье?"],
      ["visit", "ˈvɪzɪt", "", "навещать, посещать", "Who do you visit at the weekend?", "Кого ты навещаешь на выходных?"],
      ["sleep in", "sliːp ɪn", "", "отсыпаться", "I sleep in on Sundays.", "По воскресеньям я отсыпаюсь."],
      ["go out", "ɡəʊ aʊt", "ɡoʊ aʊt", "выходить куда-то (развлечься)", "Do you go out on Saturday night?", "Ты ходишь куда-нибудь в субботу вечером?"],
      ["stay in", "steɪ ɪn", "", "оставаться дома", "I usually stay in on Friday.", "В пятницу я обычно сижу дома."],
      ["why", "waɪ", "", "почему", "Why do you get up so early?", "Почему ты встаёшь так рано?"],
      ["how often", "haʊ ˈɒfn", "haʊ ˈɔːfn", "как часто", "How often do you go out?", "Как часто ты куда-нибудь выходишь?"],
      ["because", "bɪˈkɒz", "bɪˈkɔːz", "потому что", "Because I like mornings.", "Потому что я люблю утро."]
    ],
    p: { t: "Интонация вопросов: Wh- ↘ и Yes/No ↗", ipa: "↘ ↗",
      html: "<p>В вопросах с вопросительным словом (<b>What, Where, Why…</b>) голос <b>опускается</b> в конце: <i>Where do you live↘?</i></p>" +
        "<p>В вопросах «да/нет» (<b>Do you…? Are you…?</b>) голос <b>поднимается</b>: <i>Do you live here↗?</i></p>" +
        "<p>" + say("Where do you live?") + " " + say("Do you live here?") + "</p>" +
        "<p>Если поднять голос в Wh-вопросе, он прозвучит как переспрос: «Где-где ты живёшь?»</p>",
      ukus: "<i>ask, answer</i>: UK /ɑː/, US /æ/. <i>often</i>: многие произносят t — /ˈɒftən/; оба варианта правильные.",
      pairs: [], drill: ["Where do you live?", "Do you live here?", "How often do you go out?", "Why do you get up so early?", "because", "answer"] },
    g: { t: "Порядок слов в вопросе: QUASI",
      html: "<p>Схема вопроса в Present Simple: <b>Q</b>uestion word + <b>A</b>uxiliary (помощник) + <b>S</b>ubject (кто) + <b>I</b>nfinitive (глагол).</p>" +
        "<table><tr><th>Q</th><th>A</th><th>S</th><th>I</th><th>…</th></tr>" +
        "<tr><td>What</td><td>do</td><td>you</td><td>do</td><td>at the weekend?</td></tr>" +
        "<tr><td>Where</td><td>does</td><td>she</td><td>live?</td><td></td></tr>" +
        "<tr><td>How often</td><td>do</td><td>they</td><td>go out?</td><td></td></tr></table>" +
        "<div class='why'><b>Вопрос к подлежащему</b> («кто?», «что?» делает) — без do/does: <i><b>Who lives</b> here? <b>What happens</b> next?</i> Помощник не нужен, потому что вопросительное слово само стоит на месте подлежащего.</div>" +
        "<p class='brk'>Короткие ответы: <i>Do you…? — Yes, I do. / No, I don't.</i> Отвечают тем же помощником.</p>",
      tasks: [
        ["c", "Where ___ she live?", "does|do|is", 0, "she → <b>does</b>."],
        ["c", "What ___ you usually do on Sunday?", "do|does|are", 0, "you → <b>do</b>."],
        ["c", "How often ___ they go out?", "do|does|are", 0, "they → <b>do</b>."],
        ["c", "Who ___ in this flat?", "lives|does live|do live", 0, "Вопрос к подлежащему → без do: <b>Who lives</b>."],
        ["c", "Why ___ you get up so early?", "do|are|does", 0, "Present Simple, you → <b>do</b>."],
        ["c", "— Do you sleep in on Sundays? — Yes, I ___.", "do|am|sleep", 0, "Короткий ответ: <b>Yes, I do</b>."],
        ["c", "What time ___ the film start?", "does|do|is", 0, "the film = it → <b>does</b>."],
        ["c", "___ do you visit at the weekend? — My grandma.", "Who|What|Where", 0, "Ответ — человек → <b>Who</b>."],
        ["t", "Как часто ты ходишь в спортзал?", "How often do you go to the gym?", "How often + do + you + go."],
        ["t", "Где живёт твой брат?", "Where does your brother live?", "your brother = he → does, live без -s."],
        ["b", "What do you usually do on Saturday?", "Что ты обычно делаешь в субботу?", "QUASI: What + do + you + do."]
      ] },
    d: { t: "Интервью для студенческой газеты",
      l: [["A", "Can I ask you some questions about your weekend?", "Можно задать тебе пару вопросов о твоих выходных?"], ["B", "Sure!", "Конечно!"], ["A", "What do you usually do on Saturday?", "Что ты обычно делаешь в субботу?"],
        ["B", "I sleep in, then I visit my grandparents.", "Отсыпаюсь, потом навещаю бабушку с дедушкой."], ["A", "How often do you go out with friends?", "Как часто ты выходишь куда-нибудь с друзьями?"], ["B", "About twice a month. I usually stay in because I'm saving money.", "Примерно два раза в месяц. Обычно сижу дома, потому что коплю деньги."]],
      q: [["Что B делает в субботу утром?", "Отсыпается|Работает|Ходит в спортзал", 0, "I sleep in…"], ["Кого навещает B?", "Бабушку и дедушку|Друзей|Брата", 0, "I visit my grandparents."], ["Почему B редко выходит?", "Копит деньги|Много учится|Болеет", 0, "because I'm saving money."]] },
    s: [["How often do you go out?", "Как часто ты куда-нибудь выходишь?", "How often do you go out with friends?"], ["Who lives here?", "Кто здесь живёт?", "Who lives in this flat?"], ["Why does she get up so early?", "Почему она встаёт так рано?", "Why does she wake up so early?"]]
  });

  A.push({ id: 38, world: 6, en: "How often?", ru: "Наречия частоты и их место", topic: "Как часто",
    goal: "Точно сказать, как часто вы что-то делаете, и правильно поставить always, usually, rarely.",
    w: [
      ["always", "ˈɔːlweɪz", "ˈɑːlweɪz", "всегда", "I always have breakfast.", "Я всегда завтракаю."],
      ["often", "ˈɒfn", "ˈɔːfn", "часто", "We often eat out.", "Мы часто едим вне дома."],
      ["sometimes", "ˈsʌmtaɪmz", "", "иногда", "I sometimes walk to work.", "Иногда я хожу на работу пешком."],
      ["rarely", "ˈreəli", "ˈrerli", "редко", "She rarely watches TV.", "Она редко смотрит телевизор."],
      ["hardly ever", "ˈhɑːdli ˈevə", "ˈhɑːrdli ˈevər", "почти никогда", "I hardly ever drink coffee.", "Я почти никогда не пью кофе."],
      ["never", "ˈnevə", "ˈnevər", "никогда", "He's never late.", "Он никогда не опаздывает."],
      ["twice", "twaɪs", "", "дважды", "I call my mum twice a week.", "Я звоню маме два раза в неделю."],
      ["every", "ˈevri", "", "каждый", "every day, every Monday", "каждый день, каждый понедельник"],
      ["eat out", "iːt aʊt", "", "есть вне дома (в кафе)", "Do you often eat out?", "Ты часто ешь в кафе?"],
      ["habit", "ˈhæbɪt", "", "привычка", "It's a good habit.", "Это хорошая привычка."]
    ],
    p: { t: "Ударение в наречиях: USually, SOMEtimes", ipa: "ˈ",
      html: "<p>Все наречия частоты ударные в начале: <b>AL</b>ways, <b>US</b>ually, <b>OF</b>ten, <b>SOME</b>times, <b>RARE</b>ly, <b>NEV</b>er.</p>" +
        "<p><b>usually</b> — 3–4 слога, звук /ʒ/ как «ж»: /ˈjuːʒuəli/, часто сокращается до /ˈjuːʒli/. " + say("usually, always, sometimes, rarely, never") + "</p>" +
        "<p>В предложении наречие частоты часто несёт главное ударение: <i>I <b>NEV</b>er drink coffee.</i> " + say("I never drink coffee. I always have breakfast.") + "</p>",
      ukus: "<i>always, often</i>: UK /ɔː/ и /ɒ/, US /ɑː/ и /ɔː/. В <i>never, rarely, hardly</i> американцы произносят r.",
      pairs: [], drill: ["usually", "sometimes", "rarely", "hardly ever", "I never drink coffee.", "twice a week"] },
    g: { t: "Где ставить наречие частоты",
      html: "<p>Шкала: <b>always</b> 100% → <b>usually</b> → <b>often</b> → <b>sometimes</b> → <b>rarely / hardly ever</b> → <b>never</b> 0%.</p>" +
        "<table><tr><th>Правило</th><th>Пример</th></tr>" +
        "<tr><td>перед обычным глаголом</td><td>I <b>usually</b> get up at seven.</td></tr>" +
        "<tr><td>после am / is / are</td><td>He is <b>never</b> late.</td></tr>" +
        "<tr><td>между помощником и глаголом</td><td>I don't <b>often</b> eat out. Do you <b>always</b> walk?</td></tr>" +
        "<tr><td>выражения с every, once, twice — в конце</td><td>I go swimming <b>twice a week</b>.</td></tr></table>" +
        "<div class='why'><b>Never и hardly ever уже отрицательные.</b> Не ставьте рядом not: <i>I never drink coffee</i>, а не <i>I don't never drink</i>. В русском двойное отрицание — норма («никогда не пью»), в английском — ошибка.</div>",
      tasks: [
        ["c", "I ___ get up at seven.", "usually|am usually|usually am", 0, "Перед обычным глаголом."],
        ["c", "He ___ late.", "is never|never is|never", 0, "После <b>is</b>."],
        ["c", "I ___ coffee.", "never drink|don't never drink|drink never", 0, "never уже отрицание — без don't."],
        ["c", "I go swimming ___.", "twice a week|a week twice|twice week", 0, "<b>twice a week</b> — в конце."],
        ["c", "Do you ___ walk to work?", "always|always do|are always", 0, "Между помощником и глаголом."],
        ["c", "She ___ watches TV. She prefers books.", "rarely|always|usually", 0, "Предпочитает книги → <b>rarely</b>."],
        ["c", "We ___ eat out — maybe once a year.", "hardly ever|often|always", 0, "Раз в год → <b>hardly ever</b>."],
        ["c", "They ___ tired after work.", "are often|often are|often", 0, "После <b>are</b>."],
        ["t", "Я всегда завтракаю.", "I always have breakfast.|I always eat breakfast.", "always перед have."],
        ["t", "Он никогда не опаздывает.", "He's never late.|He is never late.", "never после is, без not."],
        ["b", "I hardly ever drink coffee in the evening.", "Я почти никогда не пью кофе вечером.", "hardly ever перед глаголом."]
      ] },
    d: { t: "Опрос о привычках",
      l: [["A", "How often do you eat out?", "Как часто ты ешь в кафе?"], ["B", "Hardly ever. I usually cook at home.", "Почти никогда. Обычно готовлю дома."], ["A", "Do you always have breakfast?", "Ты всегда завтракаешь?"],
        ["B", "Yes, always. It's a good habit.", "Да, всегда. Это хорошая привычка."], ["A", "And how often do you do sport?", "А как часто занимаешься спортом?"], ["B", "I go to the gym twice a week, and I sometimes go hiking.", "Хожу в спортзал два раза в неделю и иногда в походы."]],
      q: [["Как часто B ест в кафе?", "Почти никогда|Часто|Каждый день", 0, "Hardly ever."], ["Завтракает ли B?", "Всегда|Иногда|Никогда", 0, "Yes, always."], ["Как часто B ходит в спортзал?", "Два раза в неделю|Раз в неделю|Каждый день", 0, "twice a week"]] },
    s: [["I usually cook at home.", "Обычно я готовлю дома.", "I usually cook at home."], ["She is always on time.", "Она всегда вовремя.", "She's always on time."], ["We eat out once a month.", "Мы едим в кафе раз в месяц.", "We eat out once a month."]]
  });

  A.push({ id: 39, world: 6, en: "My day: a story", ru: "Связный рассказ: and, but, so, because, then", topic: "Мини-рассказ",
    goal: "Соединять предложения в связный рассказ о своём дне с помощью связок.",
    w: [
      ["first", "fɜːst", "fɝːst", "сначала, первый", "First, I make tea.", "Сначала я завариваю чай."],
      ["then", "ðen", "", "потом, затем", "Then I check my messages.", "Потом проверяю сообщения."],
      ["after that", "ˈɑːftə ðæt", "ˈæftər ðæt", "после этого", "After that, I go to class.", "После этого иду на занятие."],
      ["finally", "ˈfaɪnəli", "", "наконец, в конце", "Finally, I go to bed.", "Наконец я ложусь спать."],
      ["so", "səʊ", "soʊ", "поэтому, так что", "I was tired, so I slept.", "Я устал, поэтому спал."],
      ["but", "bʌt", "", "но", "I like tea, but I don't like coffee.", "Я люблю чай, но не люблю кофе."],
      ["during", "ˈdjʊərɪŋ", "ˈdʊrɪŋ", "во время", "I read during lunch.", "Я читаю во время обеда."],
      ["check", "tʃek", "", "проверять", "I check my email every morning.", "Я проверяю почту каждое утро."],
      ["go to bed", "ɡəʊ tə bed", "ɡoʊ tə bed", "ложиться спать", "I go to bed at eleven.", "Я ложусь спать в одиннадцать."],
      ["tired", "ˈtaɪəd", "ˈtaɪərd", "усталый", "I'm tired after work.", "Я устаю после работы."]
    ],
    p: { t: "Связывание слов: get‿up, after‿it", ipa: "‿",
      html: "<p>В живой речи слова сливаются. Если слово кончается на согласный, а следующее начинается с гласного, согласный «переезжает»: <i>get‿up</i> звучит как «ге-тап», <i>check‿it</i> — «че-кит».</p>" +
        "<p>" + say("I get up and check it. Then I go out.") + "</p>" +
        "<p>Безударные служебные слова сокращаются: <b>to</b> → /tə/, <b>and</b> → /ən/: <i>go tə bed, tea ən toast</i>. " + say("I go to bed at eleven. Tea and toast.") + "</p>",
      ukus: "<i>after</i>: UK /ɑː/, US /æ/. В <i>during</i> британцы часто говорят /ˈdjʊə/, американцы — /ˈdʊ/.",
      pairs: [], drill: ["get up", "check it", "go to bed", "tea and toast", "After that, I go to class.", "Finally, I go to bed."] },
    g: { t: "Связки: and, but, so, because, then",
      html: "<table><tr><th>Связка</th><th>Смысл</th><th>Пример</th></tr>" +
        "<tr><td><b>and</b></td><td>добавить</td><td>I make tea <b>and</b> check my messages.</td></tr>" +
        "<tr><td><b>but</b></td><td>противопоставить</td><td>I'm tired, <b>but</b> I'm happy.</td></tr>" +
        "<tr><td><b>so</b></td><td>следствие → «поэтому»</td><td>It was late, <b>so</b> I took a taxi.</td></tr>" +
        "<tr><td><b>because</b></td><td>причина → «потому что»</td><td>I took a taxi <b>because</b> it was late.</td></tr>" +
        "<tr><td><b>first, then, after that, finally</b></td><td>порядок событий</td><td><b>First</b> I shower, <b>then</b> I have breakfast.</td></tr></table>" +
        "<div class='why'><b>so и because</b> — зеркальные: причина и следствие меняются местами. Проверка: «X, поэтому Y» = <i>X, so Y</i>; «Y, потому что X» = <i>Y because X</i>.</div>" +
        "<p class='brk'>Запятая: перед <b>but</b> и <b>so</b> — обычно ставится, перед <b>because</b> — обычно нет. После <i>First, Then, After that, Finally</i> в начале предложения — запятая по желанию.</p>",
      tasks: [
        ["c", "I'm tired, ___ I'm going to bed.", "so|because|but", 0, "Следствие → <b>so</b>."],
        ["c", "I'm going to bed ___ I'm tired.", "because|so|but", 0, "Причина → <b>because</b>."],
        ["c", "I like tea, ___ I don't like coffee.", "but|so|because", 0, "Противопоставление → <b>but</b>."],
        ["c", "___, I make tea. Then I check my messages.", "First|Finally|But", 0, "Начало порядка → <b>First</b>."],
        ["c", "___, at eleven, I go to bed.", "Finally|First|Because", 0, "Конец дня → <b>Finally</b>."],
        ["c", "I read ___ lunch.", "during|while|because", 0, "during + существительное."],
        ["c", "It was raining, ___ I stayed in.", "so|but|because", 0, "Следствие → <b>so</b>."],
        ["c", "She is happy ___ it's Friday.", "because|so|then", 0, "Причина → <b>because</b>."],
        ["t", "Я устал, поэтому лёг спать рано.", "I was tired, so I went to bed early.|I was tired so I went to bed early.", "so — поэтому."],
        ["t", "Я проверяю почту каждое утро.", "I check my email every morning.|I check my emails every morning.", "check — проверять."],
        ["b", "After that, I go to class.", "После этого я иду на занятие.", "After that — после этого."]
      ] },
    d: { t: "Рассказ Айгерим о своём дне",
      l: [["A", "Tell me about your typical day.", "Расскажи о своём обычном дне."], ["B", "First, I get up at seven and make tea.", "Сначала встаю в семь и завариваю чай."], ["B", "Then I check my messages, but I don't spend much time on my phone.", "Потом проверяю сообщения, но в телефоне долго не сижу."],
        ["B", "After that, I go to class. I read during lunch because it relaxes me.", "Потом иду на занятия. В обед читаю, потому что это меня расслабляет."], ["B", "In the evening I'm usually tired, so I stay in.", "Вечером обычно устаю, поэтому сижу дома."], ["B", "Finally, I go to bed at eleven.", "И наконец ложусь спать в одиннадцать."]],
      q: [["Что Айгерим делает первым?", "Встаёт и заваривает чай|Проверяет сообщения|Идёт на занятия", 0, "First, I get up at seven and make tea."], ["Почему она читает в обед?", "Это её расслабляет|Это задание|Нет телефона", 0, "because it relaxes me."], ["Во сколько она ложится?", "В одиннадцать|В десять|В полночь", 0, "Finally, I go to bed at eleven."]] },
    s: [["First, I make tea.", "Сначала я завариваю чай.", "First I make tea."], ["I'm tired, so I'm staying in.", "Я устала, поэтому сижу дома.", "I'm tired so I'm staying in.|I am tired, so I am staying in."], ["Finally, I go to bed.", "Наконец я ложусь спать.", "Finally I go to bed."]]
  });

  A.push({ id: 40, world: 6, en: "Module 1 boss", ru: "Контрольная модуля 1", topic: "Контрольная",
    goal: "Проверить всё из модуля: -s, предлоги времени, Simple или Continuous, do/make, some/any, -ing, вопросы, частотность, связки.",
    w: [
      ["routine", "ruːˈtiːn", "", "распорядок, рутина", "I have a busy routine.", "У меня плотный распорядок."],
      ["early", "ˈɜːli", "ˈɝːli", "рано; ранний", "I'm an early bird.", "Я жаворонок (рано встаю)."],
      ["work", "wɜːk", "wɝːk", "работа; работать", "I work from home on Fridays.", "По пятницам я работаю из дома."],
      ["weekly", "ˈwiːkli", "", "еженедельный", "a weekly plan", "план на неделю"],
      ["chore", "tʃɔː", "tʃɔːr", "домашнее дело, обязанность", "Cleaning is my least favourite chore.", "Уборка — моё самое нелюбимое дело."],
      ["plan", "plæn", "", "план; планировать", "I plan my week on Sunday.", "Я планирую неделю в воскресенье."],
      ["spend", "spend", "", "проводить (время), тратить", "I spend an hour on homework.", "Я трачу час на домашку."],
      ["typical", "ˈtɪpɪkl", "", "типичный, обычный", "a typical day", "обычный день"],
      ["balance", "ˈbæləns", "", "баланс, равновесие", "Work-life balance is important.", "Баланс работы и жизни важен."],
      ["improve", "ɪmˈpruːv", "", "улучшать(ся)", "My English is improving.", "Мой английский становится лучше."]
    ],
    p: { t: "Звук /ɜː/: work, early, Thursday", ipa: "/ɜː/",
      html: "<p><b>/ɜː/</b> — длинный звук между «ё» и «э», губы расслаблены, рот не округлять: <i>work, early, first, Thursday, word</i>. Пишется по-разному: or, ear, ir, ur.</p>" +
        "<p>" + say("I work early on Thursday. First word.") + "</p>" +
        "<p>Не путайте <b>work</b> /wɜːk/ и <b>walk</b> /wɔːk/ — «работать» и «гулять». " + say("work — walk") + "</p>",
      ukus: "в US этот звук с r: /ɝː/ — <i>work</i> звучит как «вёрк» с американским r. В UK r не слышно.",
      pairs: [["work", "walk"], ["word", "ward"], ["first", "fast"]], drill: ["work", "early", "Thursday", "first", "work — walk", "I work from home on Fridays."] },
    g: { t: "Повторение модуля 1",
      html: "<table><tr><th>Тема</th><th>Главное</th></tr>" +
        "<tr><td>-s в Present Simple</td><td>he/she/it gets, brushes, studies, has</td></tr>" +
        "<tr><td>at / on / in</td><td>at 9, on Monday, in the morning; on Friday evening</td></tr>" +
        "<tr><td>Simple / Continuous</td><td>usually work / am working now; know, like — без -ing</td></tr>" +
        "<tr><td>do / make</td><td>do the housework, the dishes; make breakfast, a mistake, the bed</td></tr>" +
        "<tr><td>some / any / much / many</td><td>some — утверждение, any — вопрос и отрицание; much — rice, many — eggs</td></tr>" +
        "<tr><td>вкус + -ing</td><td>enjoy reading, can't stand waiting, go hiking; would like to</td></tr>" +
        "<tr><td>вопросы</td><td>Where does she live? Who lives here?</td></tr>" +
        "<tr><td>частотность</td><td>I usually walk. He is never late. twice a week</td></tr>" +
        "<tr><td>связки</td><td>so — следствие, because — причина, but — контраст</td></tr></table>" +
        "<div class='why'>Если ошибаетесь в какой-то теме, вернитесь к её уровню (31–39): карточки и тренировка ошибок подтянут слабые места.</div>",
      tasks: [
        ["c", "My sister ___ English every evening.", "studies|study|is study", 0, "she → stud<b>ies</b>."],
        ["c", "I have a lesson ___ Monday morning.", "on|in|at", 0, "Есть день → <b>on</b>."],
        ["c", "Sorry, I can't talk. I ___ dinner.", "am making|make|do", 0, "Сейчас → Continuous; еда → make."],
        ["c", "Who ___ the housework in your family?", "does|makes|do", 0, "do the housework; Who + глагол с -s."],
        ["c", "We don't have ___ eggs.", "any|much|some", 0, "Отрицание → <b>any</b>."],
        ["c", "I can't stand ___ up early.", "getting|to get|get", 0, "can't stand + <b>-ing</b>."],
        ["c", "Where ___ your parents live?", "do|does|are", 0, "parents = they → <b>do</b>."],
        ["c", "He ___ late for class.", "is never|never is|doesn't never", 0, "never после is."],
        ["c", "It was cold, ___ I stayed at home.", "so|because|but", 0, "Следствие → <b>so</b>."],
        ["t", "Я обычно трачу час на домашнюю работу.", "I usually spend an hour on homework.|I usually spend an hour on my homework.|I usually spend one hour on homework.", "spend time on smth."],
        ["t", "Она никогда не пропускает завтрак.", "She never skips breakfast.", "never + skip<b>s</b>."],
        ["b", "First I plan my week, then I do the chores.", "Сначала я планирую неделю, потом делаю домашние дела.", "First… then…; do the chores."]
      ] },
    d: { t: "Обычный день студента",
      l: [["A", "So, what's your typical day like?", "Ну и как проходит твой обычный день?"], ["B", "I'm an early bird, so I usually get up at six.", "Я жаворонок, поэтому обычно встаю в шесть."], ["A", "What do you do on weekdays?", "Что делаешь в будни?"],
        ["B", "I have classes in the morning and I work from home on Fridays.", "Утром занятия, а по пятницам работаю из дома."], ["A", "And what are you doing these days to improve your English?", "А что ты сейчас делаешь, чтобы подтянуть английский?"], ["B", "I'm watching series without subtitles. I enjoy it, but it's hard!", "Смотрю сериалы без субтитров. Мне нравится, но это тяжело!"]],
      q: [["Почему B встаёт в шесть?", "Он жаворонок|Далеко ехать|Будильник", 0, "I'm an early bird, so I usually get up at six."], ["Когда B работает из дома?", "По пятницам|По понедельникам|Каждый день", 0, "I work from home on Fridays."], ["Что B делает в последнее время для английского?", "Смотрит сериалы без субтитров|Ходит на курсы|Читает книги", 0, "I'm watching series without subtitles."]] },
    s: [["I'm an early bird.", "Я жаворонок.", "I am an early bird."], ["My English is improving.", "Мой английский становится лучше.", "My English is getting better."], ["I plan my week on Sunday.", "Я планирую неделю в воскресенье.", "I plan my week on Sundays."]]
  });
})(window.EN);
;
/* ==== data-v2 ==== */
/* Новая методика для уровней 1–5 (пилот): одна практическая задача на урок,
   «я умею», вопросы для ответа вслух [вопрос, перевод, пример ответа] и письменное задание. */
window.EN = window.EN || {};
EN.v2 = {
  1: { task: "Поздороваться с новым человеком, представиться и назвать имя по буквам.",
    can: ["Могу поздороваться и попрощаться", "Могу представиться: My name is… / I'm…", "Могу назвать своё имя по буквам"],
    speak: [["Hello! What's your name?", "Привет! Как тебя зовут?", "Hi! My name is Aigerim."], ["How do you spell your name?", "Как пишется твоё имя?", "A, I, G, E, R, I, M."], ["Nice to meet you!", "Приятно познакомиться!", "Nice to meet you too."]],
    write: "Напишите короткий диалог знакомства: поздоровайтесь, представьтесь, скажите «приятно познакомиться» и попрощайтесь." },
  2: { task: "Рассказать, кто вы и откуда, и спросить об этом собеседника.",
    can: ["Могу сказать, кто я: I'm a student", "Могу сказать, откуда я: I'm from…", "Могу рассказать о другом человеке: He is… / She is…"],
    speak: [["Where are you from?", "Откуда ты?", "I'm from Almaty."], ["Are you a student?", "Ты студент?", "Yes, I'm a student."], ["Where is your teacher from?", "Откуда твой преподаватель?", "My teacher is from Astana."]],
    write: "Напишите о себе и о друге: кто вы, откуда, кто ваш друг и откуда он." },
  3: { task: "Спросить, как дела, и коротко ответить «да» или «нет».",
    can: ["Могу спросить: Are you OK? Are you busy?", "Могу ответить коротко: Yes, I am. / No, I'm not.", "Могу сказать, как я себя чувствую: tired, hungry, fine"],
    speak: [["Are you OK?", "Ты в порядке?", "Yes, I am. I'm fine, thanks."], ["Are you tired?", "Ты устал?", "No, I'm not. I'm fine."], ["Are you hungry?", "Ты голоден?", "Yes, I am. Let's have lunch!"]],
    write: "Напишите переписку с другом: спросите, как дела, занят ли он, и ответьте коротко." },
  4: { task: "Узнать цену, назвать свой возраст и не перепутать fifteen и fifty.",
    can: ["Могу считать до ста", "Могу назвать возраст: I'm twenty.", "Могу спросить цену: How much is it?"],
    speak: [["How old are you?", "Сколько тебе лет?", "I'm nineteen."], ["How much is the tea?", "Сколько стоит чай?", "It's two dollars."], ["Fifteen or fifty?", "Пятнадцать или пятьдесят?", "Fifteen. One, five."]],
    write: "Напишите диалог в кафе: спросите цену двух вещей и посчитайте, сколько всего." },
  5: { task: "Сказать, что у вас с собой, и найти потерянную вещь.",
    can: ["Могу назвать предмет с a / an", "Могу говорить о нескольких предметах: two books", "Могу спросить, где вещь: Where is my…?"],
    speak: [["What's in your bag?", "Что у тебя в сумке?", "A book, two pens and an apple."], ["Where is your phone?", "Где твой телефон?", "It's in my bag."], ["Where are my keys?", "Где мои ключи?", "Your keys are on the table."]],
    write: "Напишите, что лежит в вашей сумке: 4–5 предметов с a / an и во множественном числе." }
};
;
/* ==== data7 ==== */
/* Английский для чайников — продолжение, модуль 2 «Истории из прошлого» (A2): уровни 41–50.
   Сразу по новой методике: задача урока, «я умею», ответы вслух, письменная задача (EN.v2). */
(function (EN) {
  var say = EN.say, A = EN.lessons;
  EN.worlds.push({ name: "Истории из прошлого", sub: "Уровни 41–50: Past Simple, неправильные глаголы, used to, Past Continuous, when и while, рассказ по порядку. Модуль 2 продолжения (A2)." });
  EN.v2 = EN.v2 || {};

  A.push({ id: 41, world: 7, en: "Yesterday", ru: "Past Simple: правильные глаголы и -ed", topic: "Вчерашний день",
    goal: "Подробно рассказать, что вы делали вчера, и правильно произносить окончание -ed.",
    w: [
      ["yesterday", "ˈjestədeɪ", "ˈjestərdeɪ", "вчера", "I stayed at home yesterday.", "Вчера я был дома."],
      ["last night", "lɑːst naɪt", "læst naɪt", "вчера вечером, прошлой ночью", "I watched a film last night.", "Вчера вечером я смотрел фильм."],
      ["walk", "wɔːk", "wɑːk", "гулять, идти пешком", "We walked in the park.", "Мы гуляли в парке."],
      ["visit", "ˈvɪzɪt", "", "навещать, посещать", "I visited my grandma.", "Я навестил бабушку."],
      ["study", "ˈstʌdi", "", "учиться, заниматься", "She studied for three hours.", "Она занималась три часа."],
      ["call", "kɔːl", "kɑːl", "звонить", "He called me in the evening.", "Он позвонил мне вечером."],
      ["clean", "kliːn", "", "убирать, чистить", "I cleaned my room.", "Я убрал свою комнату."],
      ["finish", "ˈfɪnɪʃ", "", "заканчивать", "We finished at six.", "Мы закончили в шесть."],
      ["start", "stɑːt", "stɑːrt", "начинать", "The lesson started at nine.", "Урок начался в девять."],
      ["stay", "steɪ", "", "оставаться", "I stayed in all day.", "Я весь день сидел дома."]
    ],
    p: { t: "Окончание -ed: /t/, /d/, /ɪd/", ipa: "/t/ /d/ /ɪd/",
      html: "<p>Окончание <b>-ed</b> пишется одинаково, а звучит тремя способами — всё зависит от последнего звука глагола.</p>" +
        "<p><b>/t/</b> после глухих (p, k, s, sh, ch, f): <i>walked, finished, watched</i>. " + say("walked, finished, watched") + "</p>" +
        "<p><b>/d/</b> после звонких и гласных: <i>called, cleaned, stayed, studied</i>. " + say("called, cleaned, stayed") + "</p>" +
        "<p><b>/ɪd/</b> только после t и d — появляется лишний слог: <i>started, visited, needed</i>. " + say("started, visited, needed") + "</p>" +
        "<p>Частая ошибка — говорить «волк-ед» с лишним слогом. В <i>walked</i> один слог: /wɔːkt/.</p>",
      ukus: "окончание звучит одинаково. В <i>yesterday</i> и <i>start</i> американцы произносят r; <i>last</i>: UK /ɑː/, US /æ/.",
      pairs: [["walk", "walked"], ["start", "started"], ["clean", "cleaned"]], drill: ["walked", "called", "started", "visited", "I walked in the park.", "The lesson started at nine."] },
    g: { t: "Past Simple: правильные глаголы",
      html: "<p>Past Simple — законченное действие в прошлом, обычно с подсказкой: <i>yesterday, last week, in 2020, two days ago</i>.</p>" +
        "<table><tr><th>Правило написания</th><th>Пример</th></tr>" +
        "<tr><td>обычно + -ed</td><td>walk → walk<b>ed</b>, clean → clean<b>ed</b></td></tr>" +
        "<tr><td>на -e → + d</td><td>like → like<b>d</b>, live → live<b>d</b></td></tr>" +
        "<tr><td>согласная + y → -ied</td><td>study → stud<b>ied</b>, try → tr<b>ied</b></td></tr>" +
        "<tr><td>гласная + y → -ed</td><td>stay → stay<b>ed</b>, play → play<b>ed</b></td></tr>" +
        "<tr><td>короткий слог: удвоить согласную</td><td>stop → sto<b>pp</b>ed, plan → pla<b>nn</b>ed</td></tr></table>" +
        "<div class='why'><b>Удобно:</b> форма одна для всех лиц — I walked, she walked, they walked. Никакого -s, как в настоящем времени.</div>" +
        "<p class='brk'>Вопрос и отрицание — через <b>did</b>, глагол без -ed: <i>Did you call him? I didn't call him.</i></p>",
      tasks: [
        ["c", "I ___ my grandma yesterday.", "visited|visit|visiting", 0, "yesterday → Past Simple: visit<b>ed</b>."],
        ["c", "She ___ for three hours last night.", "studied|studyed|studies", 0, "согласная + y → <b>-ied</b>."],
        ["c", "We ___ at home all weekend.", "stayed|staied|stay", 0, "гласная + y → просто <b>-ed</b>."],
        ["c", "The bus ___ at the corner.", "stopped|stoped|stops", 0, "stop: короткий слог → удваиваем p."],
        ["c", "I ___ him last night.", "didn't call|didn't called|not called", 0, "После didn't — глагол без -ed."],
        ["c", "___ you finish your homework?", "Did|Do|Were", 0, "Вопрос в прошлом → <b>Did</b>."],
        ["c", "They ___ in Almaty in 2020.", "lived|livd|liveed", 0, "на -e → просто <b>-d</b>."],
        ["c", "In which word does -ed sound like /ɪd/?", "started|walked|called", 0, "/ɪd/ — только после t и d."],
        ["t", "Вчера я убрал свою комнату.", "Yesterday I cleaned my room.|I cleaned my room yesterday.", "clean → cleaned."],
        ["t", "Урок начался в девять.", "The lesson started at nine.|The lesson started at 9.|The class started at nine.", "start → started /ɪd/."],
        ["b", "We walked in the park last night.", "Вчера вечером мы гуляли в парке.", "walk → walked, last night — в конце."]
      ] },
    d: { t: "Как прошёл вчерашний день",
      l: [["A", "What did you do yesterday?", "Что ты делала вчера?"], ["B", "In the morning I cleaned my room and called my mum.", "Утром убрала комнату и позвонила маме."], ["A", "Did you go out?", "Ты выходила куда-нибудь?"],
        ["B", "Yes, I walked in the park with a friend. Then I studied for two hours.", "Да, гуляла в парке с подругой. Потом два часа занималась."], ["A", "And in the evening?", "А вечером?"], ["B", "I stayed at home and watched a film. It finished very late!", "Сидела дома и смотрела фильм. Он закончился очень поздно!"]],
      q: [["Что B делала утром?", "Убрала комнату и позвонила маме|Гуляла в парке|Смотрела фильм", 0, "In the morning I cleaned my room and called my mum."], ["Сколько B занималась?", "Два часа|Три часа|Весь день", 0, "I studied for two hours."], ["Что было вечером?", "Сидела дома и смотрела фильм|Гуляла|Ходила в гости", 0, "I stayed at home and watched a film."]] },
    s: [["I visited my grandma yesterday.", "Вчера я навестил бабушку.", "Yesterday I visited my grandma.|I visited my grandmother yesterday."], ["She didn't call me.", "Она мне не позвонила.", "She did not call me."], ["Did you finish?", "Ты закончил?", "Did you finish it?"]]
  });
  EN.v2[41] = { task: "Рассказать о вчерашнем дне по порядку: утро, день и вечер.",
    can: ["Могу сказать, что делал вчера: I cleaned, I called…", "Произношу -ed правильно: walked /t/, called /d/, started /ɪd/", "Могу спросить: What did you do yesterday?"],
    speak: [["What did you do yesterday?", "Что ты делал вчера?", "I studied in the morning and walked in the park."], ["Did you call your friends?", "Ты звонил друзьям?", "Yes, I called my friend in the evening."], ["When did your lessons start?", "Когда начались занятия?", "They started at nine."]],
    write: "Напишите 4–5 предложений о вчерашнем дне: утро, день, вечер. Используйте 3 слова урока." };

  A.push({ id: 42, world: 7, en: "Irregular verbs 1", ru: "Неправильные глаголы: часть 1", topic: "Покупки и день",
    goal: "Уверенно использовать 10 самых частых неправильных глаголов в прошедшем времени.",
    w: [
      ["went", "went", "went", "пошёл (от go)", "I went to the shop.", "Я сходил в магазин."],
      ["saw", "sɔː", "sɑː", "увидел (от see)", "We saw a great film.", "Мы посмотрели отличный фильм."],
      ["bought", "bɔːt", "bɑːt", "купил (от buy)", "She bought a new phone.", "Она купила новый телефон."],
      ["ate", "et", "eɪt", "съел (от eat)", "I ate plov for lunch.", "На обед я съел плов."],
      ["drank", "dræŋk", "", "выпил (от drink)", "He drank two cups of tea.", "Он выпил две чашки чая."],
      ["took", "tʊk", "", "взял (от take)", "I took a taxi.", "Я взял такси."],
      ["got", "ɡɒt", "ɡɑːt", "получил (от get)", "I got a message.", "Я получил сообщение."],
      ["made", "meɪd", "", "сделал (от make)", "Mum made a cake.", "Мама испекла торт."],
      ["had", "hæd", "", "имел; есть (еду) (от have)", "We had breakfast at eight.", "Мы позавтракали в восемь."],
      ["came", "keɪm", "", "пришёл (от come)", "They came home late.", "Они пришли домой поздно."]
    ],
    p: { t: "Звук /ɔː/: saw, bought, taught", ipa: "/ɔː/",
      html: "<p>Многие неправильные глаголы в прошедшем времени звучат на <b>/ɔː/</b> — длинное «о», губы округлены и вытянуты: <i>saw, bought, thought, caught, taught</i>.</p>" +
        "<p>" + say("saw, bought, thought, caught, taught") + "</p>" +
        "<p>Буквы <b>ough</b> и <b>augh</b> здесь не читаются по буквам: <i>bought</i> = /bɔːt/, без «г» и «х».</p>",
      ukus: "в US этот звук ближе к /ɑː/: <i>saw</i> /sɑː/, <i>bought</i> /bɑːt/. <i>ate</i>: UK /et/, US /eɪt/; <i>got</i>: UK /ɡɒt/, US /ɡɑːt/.",
      pairs: [["saw", "so"], ["bought", "boat"]], drill: ["saw", "bought", "thought", "taught", "She bought a new phone.", "We saw a great film."] },
    g: { t: "Неправильные глаголы: вторая форма",
      html: "<p>Около 150 глаголов образуют прошедшее время не через -ed, а своей формой. Их надо выучить, но самых частых — всего пара десятков.</p>" +
        "<table><tr><th>Глагол</th><th>Прошедшее</th><th>Подсказка</th></tr>" +
        "<tr><td>go</td><td>went</td><td>совсем другое слово</td></tr><tr><td>see</td><td>saw</td><td>звук /ɔː/</td></tr>" +
        "<tr><td>buy, think, bring</td><td>bought, thought, brought</td><td>группа -ought</td></tr>" +
        "<tr><td>eat, drink</td><td>ate, drank</td><td>меняется гласная</td></tr>" +
        "<tr><td>take, get, make, have, come</td><td>took, got, made, had, came</td><td>частые — учить первыми</td></tr></table>" +
        "<div class='why'><b>Главная ловушка:</b> после <b>did / didn't</b> — всегда первая форма. <i>Did you go?</i> (не <i>went</i>), <i>I didn't buy it</i> (не <i>bought</i>). Прошедшее время уже показал did.</div>",
      tasks: [
        ["c", "I ___ to the shop yesterday.", "went|goed|go", 0, "go → <b>went</b>."],
        ["c", "She ___ a new phone last week.", "bought|buyed|buy", 0, "buy → <b>bought</b>."],
        ["c", "We ___ a great film.", "saw|seed|seen", 0, "see → <b>saw</b>."],
        ["c", "Did you ___ the bus?", "take|took|taken", 0, "После did — первая форма: <b>take</b>."],
        ["c", "I didn't ___ breakfast.", "have|had|has", 0, "После didn't — первая форма."],
        ["c", "They ___ home very late.", "came|comed|come", 0, "come → <b>came</b>."],
        ["c", "He ___ two cups of tea.", "drank|drinked|drunk", 0, "drink → <b>drank</b>."],
        ["c", "Mum ___ a cake for my birthday.", "made|maked|make", 0, "make → <b>made</b>."],
        ["t", "Я взял такси.", "I took a taxi.", "take → took."],
        ["t", "Ты получил моё сообщение?", "Did you get my message?", "Вопрос: Did + get (первая форма)."],
        ["b", "We had breakfast at eight.", "Мы позавтракали в восемь.", "have breakfast → had breakfast."]
      ] },
    d: { t: "Суббота в торговом центре",
      l: [["A", "Where did you go on Saturday?", "Куда ты ходила в субботу?"], ["B", "I went to the mall with my sister.", "Ходила в торговый центр с сестрой."], ["A", "Did you buy anything?", "Купила что-нибудь?"],
        ["B", "Yes, I bought a jacket. My sister didn't buy anything.", "Да, купила куртку. Сестра ничего не купила."], ["A", "Did you eat there?", "Вы там поели?"], ["B", "We had lunch and saw a film. We came home at ten.", "Пообедали и посмотрели фильм. Домой пришли в десять."]],
      q: [["С кем B ходила в торговый центр?", "С сестрой|С мамой|С подругой", 0, "with my sister"], ["Что купила B?", "Куртку|Телефон|Ничего", 0, "I bought a jacket."], ["Когда они пришли домой?", "В десять|В восемь|В полночь", 0, "We came home at ten."]] },
    s: [["I went to the mall.", "Я ходил в торговый центр.", "I went to the shopping centre.|I went to the shopping center."], ["She didn't buy anything.", "Она ничего не купила.", "She did not buy anything."], ["Did you see the film?", "Ты посмотрел фильм?", "Did you see that film?"]]
  });
  EN.v2[42] = { task: "Рассказать, куда вы ходили, что купили и что видели в выходные.",
    can: ["Знаю 10 частых неправильных глаголов: went, saw, bought…", "После did использую первую форму: Did you go?", "Могу рассказать о покупках в прошлом"],
    speak: [["Where did you go last weekend?", "Куда ты ходил на выходных?", "I went to the mall with my friend."], ["What did you buy?", "Что ты купил?", "I bought a book and some tea."], ["Did you see a film?", "Ты смотрел фильм?", "Yes, I did. I saw a comedy."]],
    write: "Напишите о прошлых выходных: куда ходили, что купили, что ели, что видели. 5 неправильных глаголов." };

  A.push({ id: 43, world: 7, en: "Irregular verbs 2", ru: "Неправильные глаголы: часть 2", topic: "Общение",
    goal: "Рассказать о разговорах и новостях в прошлом: кто что сказал, написал, нашёл и потерял.",
    w: [
      ["said", "sed", "", "сказал (от say)", "She said hello.", "Она поздоровалась."],
      ["told", "təʊld", "toʊld", "рассказал (от tell)", "He told me the news.", "Он рассказал мне новость."],
      ["spoke", "spəʊk", "spoʊk", "поговорил (от speak)", "I spoke to my teacher.", "Я поговорил с преподавателем."],
      ["wrote", "rəʊt", "roʊt", "написал (от write)", "I wrote a message.", "Я написал сообщение."],
      ["read", "red", "", "прочитал (от read)", "I read your email.", "Я прочитал твоё письмо."],
      ["met", "met", "", "встретил (от meet)", "We met at the café.", "Мы встретились в кафе."],
      ["left", "left", "", "ушёл, оставил (от leave)", "I left my bag at home.", "Я оставил сумку дома."],
      ["lost", "lɒst", "lɔːst", "потерял (от lose)", "He lost his keys.", "Он потерял ключи."],
      ["found", "faʊnd", "", "нашёл (от find)", "I found them under the bed.", "Я нашёл их под кроватью."],
      ["thought", "θɔːt", "θɑːt", "подумал (от think)", "I thought it was Monday.", "Я думал, что сегодня понедельник."]
    ],
    p: { t: "read и read: одна буква, два звука", ipa: "/riːd/ — /red/",
      html: "<p>У <b>read</b> одинаковое написание, но разное произношение: настоящее /riːd/ — «рид», прошедшее /red/ — как цвет <i>red</i>.</p>" +
        "<p>" + say("I read every day. I read this book last year.") + "</p>" +
        "<p>Похожее превращение: <b>said</b> звучит /sed/, а не «сэйд». " + say("She said hello.") + "</p>",
      ukus: "<i>told, spoke, wrote</i>: UK /əʊ/, US /oʊ/. <i>lost</i>: UK /ɒ/, US /ɔː/.",
      pairs: [["said", "sad"], ["read", "red"]], drill: ["said", "read", "told", "wrote", "I read your email.", "He told me the news."] },
    g: { t: "say или tell; ещё 10 неправильных глаголов",
      html: "<p>Обе формы — «сказать», но строятся по-разному:</p>" +
        "<table><tr><th>say</th><th>tell</th></tr>" +
        "<tr><td>что сказал: <i>She <b>said</b> hello. He <b>said</b> (that) he was tired.</i></td><td>кому сказал: <i>He <b>told me</b> the news. She <b>told us</b> a story.</i></td></tr>" +
        "<tr><td>say <b>to</b> someone: <i>He said to me…</i></td><td>после tell — сразу человек, без to</td></tr></table>" +
        "<div class='why'><b>Запомните сочетания:</b> tell a story, tell the truth, tell a joke; say hello, say goodbye, say sorry.</div>" +
        "<p class='brk'>Формы: speak → spoke, write → wrote, meet → met, leave → left, lose → lost, find → found, think → thought, read → read (/red/).</p>",
      tasks: [
        ["c", "He ___ me the news.", "told|said|spoke", 0, "Кому сказал → <b>told me</b>."],
        ["c", "She ___ hello and smiled.", "said|told|spoke", 0, "say hello — устойчиво."],
        ["c", "I ___ a long message to my friend.", "wrote|writed|written", 0, "write → <b>wrote</b>."],
        ["c", "We ___ at the café at six.", "met|meeted|meet", 0, "meet → <b>met</b>."],
        ["c", "He ___ his keys again!", "lost|losed|lose", 0, "lose → <b>lost</b>."],
        ["c", "I ___ my bag at home.", "left|leaved|leave", 0, "leave → <b>left</b>."],
        ["c", "Can you ___ me a story?", "tell|say|speak", 0, "<b>tell</b> a story."],
        ["c", "I ___ it was Monday, but it was Sunday.", "thought|thinked|think", 0, "think → <b>thought</b>."],
        ["t", "Я нашёл ключи под кроватью.", "I found the keys under the bed.|I found my keys under the bed.", "find → found."],
        ["t", "Я поговорил с преподавателем.", "I spoke to my teacher.|I spoke with my teacher.|I talked to my teacher.", "speak → spoke."],
        ["b", "She told us a funny story.", "Она рассказала нам смешную историю.", "tell + кому + что."]
      ] },
    d: { t: "Потерянные ключи",
      l: [["A", "Why are you late?", "Почему ты опоздал?"], ["B", "I lost my keys! I thought I left them at the café.", "Потерял ключи! Думал, что оставил их в кафе."], ["A", "Did you find them?", "Нашёл?"],
        ["B", "Yes. I wrote to my sister, and she said they were at home.", "Да. Написал сестре, и она сказала, что они дома."], ["A", "Where were they?", "Где они были?"], ["B", "Under my bed! I found them and ran here.", "Под кроватью! Нашёл и прибежал сюда."]],
      q: [["Что потерял B?", "Ключи|Телефон|Сумку", 0, "I lost my keys!"], ["Кому он написал?", "Сестре|Другу|Маме", 0, "I wrote to my sister"], ["Где были ключи?", "Под кроватью|В кафе|В сумке", 0, "Under my bed!"]] },
    s: [["He told me the news.", "Он рассказал мне новость.", "He told me the news yesterday."], ["I lost my keys.", "Я потерял ключи.", "I've lost my keys."], ["We met at the café.", "Мы встретились в кафе.", "We met in the café."]]
  });
  EN.v2[43] = { task: "Пересказать историю о потерянной вещи: что потеряли, что подумали, кто помог, где нашли.",
    can: ["Различаю say и tell: said hello, told me", "Знаю ещё 10 неправильных глаголов: wrote, met, lost, found…", "Читаю read в прошлом как /red/"],
    speak: [["Did you ever lose something important?", "Ты когда-нибудь терял что-то важное?", "Yes, I lost my phone last year."], ["Where did you find it?", "Где ты это нашёл?", "I found it in my bag."], ["Who did you tell?", "Кому ты рассказал?", "I told my mum."]],
    write: "Напишите историю о вещи, которую вы потеряли: что, где, как нашли. Используйте lost, thought, found, told." };

  A.push({ id: 44, world: 7, en: "When I was a child", ru: "Детство: used to", topic: "Детство",
    goal: "Рассказать о своём детстве: что вы обычно делали раньше и чего больше не делаете.",
    w: [
      ["child", "tʃaɪld", "", "ребёнок", "When I was a child, I lived in a village.", "В детстве я жил в селе."],
      ["childhood", "ˈtʃaɪldhʊd", "", "детство", "I had a happy childhood.", "У меня было счастливое детство."],
      ["village", "ˈvɪlɪdʒ", "", "село, деревня", "My grandparents live in a village.", "Мои бабушка с дедушкой живут в селе."],
      ["toy", "tɔɪ", "", "игрушка", "My favourite toy was a red car.", "Моей любимой игрушкой была красная машинка."],
      ["used to", "ˈjuːst tə", "", "раньше (бывало), имел привычку", "I used to play outside every day.", "Раньше я каждый день играл на улице."],
      ["afraid of", "əˈfreɪd əv", "", "боящийся (чего-то)", "I was afraid of dogs.", "Я боялся собак."],
      ["grow up", "ɡrəʊ ʌp", "ɡroʊ ʌp", "расти, вырасти", "I grew up in Shymkent.", "Я вырос в Шымкенте."],
      ["neighbour", "ˈneɪbə", "ˈneɪbər", "сосед (UK); в US — neighbor", "Our neighbours had a big garden.", "У наших соседей был большой сад."],
      ["remember", "rɪˈmembə", "rɪˈmembər", "помнить", "I remember my first school.", "Я помню свою первую школу."],
      ["anymore", "ˌeniˈmɔː", "ˌeniˈmɔːr", "больше (не)", "I don't play football anymore.", "Я больше не играю в футбол."]
    ],
    p: { t: "used to: /ˈjuːstə/ — одно слитное слово", ipa: "/ˈjuːstə/",
      html: "<p>В <b>used to</b> буква d не слышна, а <b>to</b> звучит как /tə/. Получается одно слитное /ˈjuːstə/ — «юстэ».</p>" +
        "<p>" + say("I used to live in a village. I used to play outside.") + "</p>" +
        "<p>Не путайте со словом <b>used</b> /juːzd/ «использовал» — там звонкое /z/: " + say("I used a pen.") + "</p>",
      ukus: "<i>neighbour</i> (UK) пишется в US как <i>neighbor</i>; <i>grow up</i>: UK /əʊ/, US /oʊ/; в <i>remember</i> американцы произносят r.",
      pairs: [["used to", "used"]], drill: ["used to", "I used to live in a village.", "childhood", "neighbour", "remember", "anymore"] },
    g: { t: "used to: так было раньше",
      html: "<p><b>used to + глагол</b> — привычка или состояние в прошлом, которых <b>сейчас уже нет</b>.</p>" +
        "<table><tr><th>Форма</th><th>Пример</th></tr>" +
        "<tr><td>+ used to + глагол</td><td>I <b>used to</b> live in a village. (Теперь живу в городе.)</td></tr>" +
        "<tr><td>− didn't use to + глагол</td><td>I <b>didn't use to</b> like vegetables.</td></tr>" +
        "<tr><td>? Did … use to + глагол</td><td><b>Did</b> you <b>use to</b> play outside?</td></tr></table>" +
        "<div class='why'><b>Почему use без d?</b> После did глагол всегда в первой форме — так же, как <i>did you go</i>. Поэтому <i>didn't use to</i>, <i>did you use to</i>.</div>" +
        "<p class='brk'>Для одного события used to не подходит: <i>I went to Astana in 2015</i> (один раз), но <i>I used to go to the village every summer</i> (много раз).</p>",
      tasks: [
        ["c", "I ___ live in a village, but now I live in Almaty.", "used to|use to|was used to", 0, "Утверждение → <b>used to</b>."],
        ["c", "Did you ___ play outside?", "use to|used to|using to", 0, "После did → <b>use to</b>."],
        ["c", "I didn't ___ like vegetables.", "use to|used to|use", 0, "После didn't → <b>use to</b>."],
        ["c", "We ___ to the sea in 2018. (один раз)", "went|used to go|use to go", 0, "Одно событие → Past Simple."],
        ["c", "She ___ afraid of dogs when she was a child.", "used to be|used to|use to be", 0, "used to + <b>be</b>."],
        ["c", "I don't play football ___.", "anymore|already|yet", 0, "«больше не» → <b>anymore</b>."],
        ["c", "Where did you grow ___?", "up|in|on", 0, "<b>grow up</b> — вырасти."],
        ["c", "My grandpa ___ tell me stories every evening.", "used to|use to|was used", 0, "Повторялось много раз → <b>used to</b>."],
        ["t", "Я вырос в Шымкенте.", "I grew up in Shymkent.", "grow → grew."],
        ["t", "Раньше я боялся собак.", "I used to be afraid of dogs.", "used to be afraid of."],
        ["b", "I had a happy childhood.", "У меня было счастливое детство.", "have → had."]
      ] },
    d: { t: "Фотографии из детства",
      l: [["A", "Is this you? You look so small!", "Это ты? Такая маленькая!"], ["B", "Yes! I grew up in a village. We used to play outside all day.", "Да! Я выросла в селе. Мы целыми днями играли на улице."], ["A", "Did you use to have a pet?", "У тебя было домашнее животное?"],
        ["B", "We had a cat, but I used to be afraid of our neighbour's dog.", "Была кошка, но я боялась соседской собаки."], ["A", "Do you still go to the village?", "Ты до сих пор ездишь в село?"], ["B", "Not anymore. But I remember everything.", "Уже нет. Но я всё помню."]],
      q: [["Где выросла B?", "В селе|В Алматы|В Астане", 0, "I grew up in a village."], ["Кого боялась B?", "Соседскую собаку|Кошку|Темноту", 0, "I used to be afraid of our neighbour's dog."], ["Ездит ли она сейчас в село?", "Нет, больше не ездит|Да, каждое лето|Не сказано", 0, "Not anymore."]] },
    s: [["I used to live in a village.", "Раньше я жил в селе.", "I used to live in the village."], ["Did you use to play outside?", "Ты играл раньше на улице?", "Did you use to play outdoors?"], ["I don't do it anymore.", "Я больше так не делаю.", "I do not do it anymore.|I don't do that anymore."]]
  });
  EN.v2[44] = { task: "Рассказать о своём детстве: где росли, что делали раньше и чего больше не делаете.",
    can: ["Могу рассказать о привычках в прошлом: I used to…", "Различаю used to (много раз) и Past Simple (один раз)", "Могу сказать «больше не»: not anymore"],
    speak: [["Where did you grow up?", "Где ты вырос?", "I grew up in Taraz."], ["What did you use to do after school?", "Что ты обычно делал после школы?", "I used to play football with my friends."], ["What were you afraid of?", "Чего ты боялся?", "I used to be afraid of the dark."]],
    write: "Напишите о своём детстве 5 предложений: где вы росли, что делали раньше (used to), чего больше не делаете." };

  A.push({ id: 45, world: 7, en: "A trip to remember", ru: "Вопросы и отрицания в прошлом", topic: "Путешествие",
    goal: "Расспросить человека о поездке и рассказать о своей, задавая разные вопросы в прошлом.",
    w: [
      ["trip", "trɪp", "", "поездка", "How was your trip?", "Как прошла поездка?"],
      ["flew", "fluː", "", "полетел (от fly)", "We flew to Istanbul.", "Мы полетели в Стамбул."],
      ["arrive", "əˈraɪv", "", "прибывать, приезжать", "We arrived at midnight.", "Мы приехали в полночь."],
      ["hotel", "həʊˈtel", "hoʊˈtel", "гостиница, отель", "We stayed in a small hotel.", "Мы остановились в маленькой гостинице."],
      ["sightseeing", "ˈsaɪtsiːɪŋ", "", "осмотр достопримечательностей", "We went sightseeing every day.", "Мы каждый день осматривали достопримечательности."],
      ["take photos", "teɪk ˈfəʊtəʊz", "teɪk ˈfoʊtoʊz", "фотографировать", "I took a lot of photos.", "Я сделал много фотографий."],
      ["spent", "spent", "", "потратил, провёл (от spend)", "We spent a week there.", "Мы провели там неделю."],
      ["weather", "ˈweðə", "ˈweðər", "погода", "The weather was hot.", "Погода была жаркая."],
      ["ago", "əˈɡəʊ", "əˈɡoʊ", "назад", "I went there two years ago.", "Я был там два года назад."],
      ["enjoy", "ɪnˈdʒɔɪ", "", "наслаждаться, понравиться", "Did you enjoy it?", "Тебе понравилось?"]
    ],
    p: { t: "Did you…? — /ˈdɪdʒə/", ipa: "/ˈdɪdʒə/",
      html: "<p>В быстрой речи <b>did you</b> сливается в /ˈdɪdʒə/ — «диджа»: d + y дают звук /dʒ/.</p>" +
        "<p>" + say("Did you enjoy it? Did you take photos?") + "</p>" +
        "<p>Так же <b>what did you</b> → /ˈwɒdɪdʒə/: " + say("What did you do there?") + "</p>",
      ukus: "<i>photos</i> и <i>ago</i>: UK /əʊ/, US /oʊ/. В <i>weather</i> американцы произносят r.",
      pairs: [], drill: ["Did you enjoy it?", "What did you do there?", "Where did you stay?", "sightseeing", "two years ago", "We arrived at midnight."] },
    g: { t: "Вопросы и отрицания в Past Simple",
      html: "<table><tr><th>Тип</th><th>Схема</th><th>Пример</th></tr>" +
        "<tr><td>да / нет</td><td>Did + кто + глагол?</td><td><b>Did</b> you <b>enjoy</b> it?</td></tr>" +
        "<tr><td>с вопросительным словом</td><td>Where / When / How long + did + кто + глагол?</td><td>Where <b>did</b> you <b>stay</b>? How long <b>did</b> you <b>spend</b> there?</td></tr>" +
        "<tr><td>к подлежащему</td><td>Who / What + глагол во 2-й форме</td><td><b>Who went</b> with you? <b>What happened</b>?</td></tr>" +
        "<tr><td>отрицание</td><td>didn't + глагол</td><td>We <b>didn't fly</b>, we took a train.</td></tr></table>" +
        "<div class='why'><b>Исключение — was / were.</b> С ними did не нужен: <i>How <b>was</b> the trip? <b>Were</b> you tired? It <b>wasn't</b> cold.</i></div>" +
        "<p class='brk'><b>ago</b> ставится после срока: <i>two years ago, a week ago</i> — не «ago two years».</p>",
      tasks: [
        ["c", "Where ___ you stay?", "did|were|do", 0, "Past Simple → <b>did</b>."],
        ["c", "How ___ the weather?", "was|did|were", 0, "С to be → <b>was</b>, без did."],
        ["c", "Did you ___ a lot of photos?", "take|took|taking", 0, "После did → <b>take</b>."],
        ["c", "Who ___ with you?", "went|did go|did went", 0, "Вопрос к подлежащему — без did."],
        ["c", "We didn't ___, we took a train.", "fly|flew|flown", 0, "После didn't → <b>fly</b>."],
        ["c", "I went there two years ___.", "ago|before|later", 0, "Срок + <b>ago</b>."],
        ["c", "___ you tired after the trip?", "Were|Did|Was", 0, "you + to be в прошлом → <b>Were</b>."],
        ["c", "How long did you ___ there?", "spend|spent|spending", 0, "После did → первая форма."],
        ["t", "Тебе понравилось?", "Did you enjoy it?|Did you like it?", "Did + enjoy."],
        ["t", "Мы приехали в полночь.", "We arrived at midnight.|We arrived at 12 am.", "arrive at + время."],
        ["b", "What did you do there?", "Что вы там делали?", "What + did + you + do."]
      ] },
    d: { t: "Рассказ о поездке",
      l: [["A", "How was your trip to Turkey?", "Как поездка в Турцию?"], ["B", "Amazing! We flew to Istanbul and spent a week there.", "Потрясающе! Мы полетели в Стамбул и провели там неделю."], ["A", "Where did you stay?", "Где вы жили?"],
        ["B", "In a small hotel near the sea. The weather was hot.", "В маленькой гостинице у моря. Погода была жаркая."], ["A", "Did you go sightseeing?", "Достопримечательности смотрели?"], ["B", "Every day! But I didn't take many photos — I just enjoyed it.", "Каждый день! Но фотографий сделала мало — просто наслаждалась."]],
      q: [["Сколько B провела в Стамбуле?", "Неделю|Два дня|Месяц", 0, "spent a week there"], ["Где они жили?", "В маленькой гостинице у моря|У друзей|В большом отеле", 0, "In a small hotel near the sea."], ["Много ли B фотографировала?", "Нет, мало|Да, очень много|Вообще не была на экскурсиях", 0, "I didn't take many photos"]] },
    s: [["Where did you stay?", "Где вы останавливались?", "Where did you stay there?"], ["How was the weather?", "Какая была погода?", "What was the weather like?"], ["I went there two years ago.", "Я был там два года назад.", "I was there two years ago."]]
  });
  EN.v2[45] = { task: "Расспросить друга о поездке пятью разными вопросами и рассказать о своей.",
    can: ["Задаю вопросы в прошлом: Where did you stay?", "Знаю исключение: How was…? Were you…?", "Использую ago: two years ago"],
    speak: [["Where did you go on your last trip?", "Куда ты ездил в последний раз?", "I went to Almaty two months ago."], ["How long did you stay there?", "Сколько ты там пробыл?", "I stayed there for five days."], ["How was the weather?", "Какая была погода?", "It was sunny and warm."]],
    write: "Напишите 5 вопросов другу о его поездке и коротко расскажите о своей поездке." };

  A.push({ id: 46, world: 7, en: "What were you doing?", ru: "Past Continuous", topic: "Что происходило",
    goal: "Описать, что происходило в определённый момент в прошлом.",
    w: [
      ["at that moment", "æt ðæt ˈməʊmənt", "æt ðæt ˈmoʊmənt", "в тот момент", "At that moment I was sleeping.", "В тот момент я спал."],
      ["at 8 o'clock", "æt eɪt əˈklɒk", "æt eɪt əˈklɑːk", "в 8 часов", "At 8 o'clock I was having dinner.", "В восемь я ужинал."],
      ["all evening", "ɔːl ˈiːvnɪŋ", "ɑːl ˈiːvnɪŋ", "весь вечер", "It was raining all evening.", "Весь вечер шёл дождь."],
      ["shine", "ʃaɪn", "", "светить", "The sun was shining.", "Светило солнце."],
      ["wait for", "weɪt fɔː", "weɪt fɔːr", "ждать (кого-то)", "I was waiting for the bus.", "Я ждал автобус."],
      ["chat", "tʃæt", "", "болтать, переписываться", "We were chatting online.", "Мы переписывались онлайн."],
      ["sleep", "sliːp", "", "спать", "Were you sleeping?", "Ты спал?"],
      ["noise", "nɔɪz", "", "шум", "The neighbours were making a lot of noise.", "Соседи сильно шумели."],
      ["background", "ˈbækɡraʊnd", "", "фон, обстановка", "Music was playing in the background.", "На фоне играла музыка."],
      ["outside", "ˌaʊtˈsaɪd", "", "на улице, снаружи", "Children were playing outside.", "Дети играли на улице."]
    ],
    p: { t: "Слабые формы was и were", ipa: "/wəz/ /wə/",
      html: "<p>В утвердительном предложении <b>was</b> и <b>were</b> безударны и звучат коротко: /wəz/ и /wə/.</p>" +
        "<p>" + say("I was waiting for the bus. They were chatting.") + "</p>" +
        "<p>В вопросах в начале и в кратких ответах — полная форма: /wɒz/, /wɜː/. " + say("Was it raining? Yes, it was.") + "</p>",
      ukus: "<i>were</i> в US звучит /wɝː/ с r. <i>o'clock</i>: UK /ɒ/, US /ɑː/.",
      pairs: [], drill: ["I was waiting.", "They were chatting.", "Was it raining?", "Yes, it was.", "The sun was shining.", "at that moment"] },
    g: { t: "Past Continuous: was / were + -ing",
      html: "<p>Past Continuous показывает действие <b>в процессе</b> в какой-то момент прошлого: «в 8 вечера я как раз ужинал».</p>" +
        "<table><tr><th>Форма</th><th>Пример</th></tr>" +
        "<tr><td>I / he / she / it <b>was</b> + -ing</td><td>At 8 I <b>was having</b> dinner.</td></tr>" +
        "<tr><td>you / we / they <b>were</b> + -ing</td><td>We <b>were chatting</b> online.</td></tr>" +
        "<tr><td>− wasn't / weren't + -ing</td><td>It <b>wasn't raining</b>.</td></tr>" +
        "<tr><td>? Was / Were … -ing?</td><td><b>Were</b> you <b>sleeping</b>?</td></tr></table>" +
        "<div class='why'><b>Для чего ещё:</b> описать фон истории — <i>The sun was shining, birds were singing…</i> Это как декорации перед главным событием.</div>" +
        "<p class='brk'>Глаголы состояния (know, like, want) не ставят в Continuous и в прошлом: <i>I knew</i>, а не <i>I was knowing</i>.</p>",
      tasks: [
        ["c", "At 8 o'clock I ___ dinner.", "was having|were having|had having", 0, "I → <b>was</b> + -ing."],
        ["c", "We ___ online all evening.", "were chatting|was chatting|chatting", 0, "we → <b>were</b>."],
        ["c", "___ you sleeping when I called?", "Were|Was|Did", 0, "you → <b>Were</b>."],
        ["c", "It ___ raining, so we went out.", "wasn't|weren't|didn't", 0, "it → <b>wasn't</b>."],
        ["c", "The sun ___ and birds were singing.", "was shining|shined|is shining", 0, "Фон истории → Past Continuous."],
        ["c", "What were you ___ at that moment?", "doing|do|did", 0, "were + <b>-ing</b>."],
        ["c", "I ___ the answer.", "knew|was knowing|were knowing", 0, "know — состояние, без -ing."],
        ["c", "The children ___ outside.", "were playing|was playing|played playing", 0, "children = they → <b>were</b>."],
        ["t", "Я ждал автобус.", "I was waiting for the bus.", "was + waiting; wait <b>for</b>."],
        ["t", "Весь вечер шёл дождь.", "It was raining all evening.", "it + was raining."],
        ["b", "What were you doing at nine?", "Что ты делал в девять?", "What + were + you + doing."]
      ] },
    d: { t: "Алиби для соседей",
      l: [["A", "Did you hear the noise last night?", "Ты слышал шум вчера ночью?"], ["B", "No, I was sleeping. What happened?", "Нет, я спал. А что случилось?"], ["A", "At midnight someone was playing loud music.", "В полночь кто-то включил громкую музыку."],
        ["B", "Maybe the students upstairs. They were having a party.", "Может, студенты сверху. У них была вечеринка."], ["A", "And what were you doing at eleven?", "А что ты делал в одиннадцать?"], ["B", "I was chatting with my brother online. Then I went to bed.", "Переписывался с братом онлайн. Потом лёг спать."]],
      q: [["Что делал B в полночь?", "Спал|Слушал музыку|Был на вечеринке", 0, "No, I was sleeping."], ["Кто, возможно, шумел?", "Студенты сверху|Брат|Собака", 0, "Maybe the students upstairs."], ["Что B делал в одиннадцать?", "Переписывался с братом|Смотрел фильм|Готовил", 0, "I was chatting with my brother online."]] },
    s: [["I was sleeping at midnight.", "В полночь я спал.", "At midnight I was sleeping."], ["Were you waiting for me?", "Ты меня ждал?", "Were you waiting for me?"], ["It wasn't raining.", "Дождя не было.", "It was not raining."]]
  });
  EN.v2[46] = { task: "Описать, что вы и люди вокруг делали в определённый момент вчера.",
    can: ["Могу сказать, что происходило в момент прошлого: I was having dinner", "Описываю фон истории: The sun was shining", "Спрашиваю: What were you doing at…?"],
    speak: [["What were you doing at 9 last night?", "Что ты делал вчера в 9 вечера?", "I was watching a series."], ["Were you sleeping at midnight?", "Ты спал в полночь?", "No, I wasn't. I was reading."], ["What was the weather like this morning?", "Какая была погода утром?", "It was raining and the wind was blowing."]],
    write: "Опишите вчерашний вечер в 8 часов: что делали вы, ваша семья или соседи, какая была погода." };

  A.push({ id: 47, world: 7, en: "When and while", ru: "Past Continuous + Past Simple: when и while", topic: "Неожиданное событие",
    goal: "Рассказать, как длинное действие прервало неожиданное событие.",
    w: [
      ["when", "wen", "", "когда", "I was cooking when the phone rang.", "Я готовил, когда зазвонил телефон."],
      ["while", "waɪl", "", "пока, в то время как", "While I was walking, it started to rain.", "Пока я шёл, начался дождь."],
      ["suddenly", "ˈsʌdənli", "", "вдруг, внезапно", "Suddenly, the lights went out.", "Вдруг погас свет."],
      ["rang", "ræŋ", "", "зазвонил (от ring)", "The phone rang.", "Зазвонил телефон."],
      ["fell", "fel", "fel", "упал (от fall)", "I fell off my bike.", "Я упал с велосипеда."],
      ["broke", "brəʊk", "broʊk", "сломал (от break)", "She broke her phone.", "Она разбила телефон."],
      ["happen", "ˈhæpən", "", "случаться", "What happened?", "Что случилось?"],
      ["drop", "drɒp", "drɑːp", "ронять", "I dropped my cup.", "Я уронил чашку."],
      ["cross the road", "krɒs ðə rəʊd", "krɔːs ðə roʊd", "переходить дорогу", "I saw her while I was crossing the road.", "Я увидел её, когда переходил дорогу."],
      ["notice", "ˈnəʊtɪs", "ˈnoʊtɪs", "замечать", "I didn't notice the time.", "Я не заметил, сколько времени."]
    ],
    p: { t: "Связывание: was‿eating, when‿it", ipa: "‿",
      html: "<p>Согласный в конце слова «переезжает» к гласной следующего: <i>was‿eating</i> → «wə-zeating», <i>when‿it</i> → «we-nit».</p>" +
        "<p>" + say("I was eating when it started to rain.") + "</p>" +
        "<p>Ударение падает на главные слова: <i>I was <b>COOK</b>ing when the <b>PHONE</b> <b>RANG</b>.</i> " + say("I was cooking when the phone rang.") + "</p>",
      ukus: "<i>broke, notice, road</i>: UK /əʊ/, US /oʊ/. <i>drop, cross</i>: UK /ɒ/, US /ɑː/ и /ɔː/.",
      pairs: [], drill: ["was eating", "when it rained", "I was cooking when the phone rang.", "suddenly", "What happened?", "While I was walking, it started to rain."] },
    g: { t: "Длинное действие и событие: when / while",
      html: "<p>В истории часто два действия: <b>длинное фоновое</b> (Past Continuous) и <b>короткое событие</b>, которое его прервало (Past Simple).</p>" +
        "<table><tr><th>Связка</th><th>Пример</th></tr>" +
        "<tr><td><b>when</b> + короткое событие</td><td>I <b>was cooking</b> when the phone <b>rang</b>.</td></tr>" +
        "<tr><td><b>while</b> + длинное действие</td><td><b>While</b> I <b>was walking</b>, it <b>started</b> to rain.</td></tr>" +
        "<tr><td>два длинных одновременно</td><td>I <b>was reading while</b> she <b>was cooking</b>.</td></tr>" +
        "<tr><td>события по очереди</td><td>When the phone <b>rang</b>, I <b>answered</b> it. (сначала звонок, потом ответ)</td></tr></table>" +
        "<div class='why'><b>Проверка:</b> если можно сказать «как раз в процессе» — это Continuous. Если «вдруг, в один момент» — Simple.</div>" +
        "<p class='brk'>Запятая нужна, если предложение начинается с when / while: <i>While I was walking, …</i></p>",
      tasks: [
        ["c", "I was cooking when the phone ___.", "rang|was ringing|rings", 0, "Короткое событие → Past Simple."],
        ["c", "While I ___ home, it started to rain.", "was walking|walked|walk", 0, "while + длинное действие."],
        ["c", "She ___ her phone while she was running.", "dropped|was dropping|drops", 0, "Короткое событие → <b>dropped</b>."],
        ["c", "What ___ when you heard the news?", "were you doing|did you do|you were doing", 0, "Процесс в момент → were you doing."],
        ["c", "I fell off my bike ___ I was crossing the road.", "while|during|then", 0, "while + Past Continuous."],
        ["c", "When the teacher came in, we ___.", "stopped talking|were stopping talk|stop talking", 0, "Сначала вошёл, потом замолчали → Past Simple."],
        ["c", "I ___ TV while my sister was studying.", "was watching|watched|am watching", 0, "Два длинных одновременно → оба Continuous."],
        ["c", "___, the lights went out.", "Suddenly|While|During", 0, "Неожиданность → <b>Suddenly</b>."],
        ["t", "Что случилось?", "What happened?", "happen → happened, без did."],
        ["t", "Я не заметил время.", "I didn't notice the time.", "didn't + notice."],
        ["b", "I was cooking when the phone rang.", "Я готовил, когда зазвонил телефон.", "Continuous — фон, Simple — событие."]
      ] },
    d: { t: "Как я разбила телефон",
      l: [["A", "What happened to your phone?", "Что с твоим телефоном?"], ["B", "I broke it yesterday. I was running to the bus stop…", "Вчера разбила. Я бежала к остановке…"], ["A", "And?", "И?"],
        ["B", "While I was crossing the road, someone called me.", "Пока я переходила дорогу, мне позвонили."], ["A", "Oh no! Did you drop it?", "Ой! Ты его уронила?"], ["B", "Yes! I didn't notice a hole in the road and fell. The phone fell too.", "Да! Не заметила яму на дороге и упала. Телефон тоже."]],
      q: [["Куда бежала B?", "На остановку|Домой|На работу", 0, "I was running to the bus stop"], ["Что случилось, пока она переходила дорогу?", "Ей позвонили|Пошёл дождь|Приехал автобус", 0, "While I was crossing the road, someone called me."], ["Почему она упала?", "Не заметила яму|Её толкнули|Поскользнулась на льду", 0, "I didn't notice a hole in the road"]] },
    s: [["The phone rang while I was cooking.", "Телефон зазвонил, пока я готовил.", "The phone rang when I was cooking."], ["What happened?", "Что случилось?", "What happened there?"], ["I was walking when it started to rain.", "Я шёл, когда начался дождь.", "I was walking when it began to rain."]]
  });
  EN.v2[47] = { task: "Рассказать о неожиданном случае: что вы делали и что вдруг произошло.",
    can: ["Соединяю фон и событие: I was cooking when the phone rang", "Использую while с длинным действием", "Спрашиваю: What happened? What were you doing?"],
    speak: [["What were you doing when you heard the news?", "Что ты делал, когда услышал новость?", "I was having lunch when my friend called."], ["What happened while you were walking home?", "Что случилось, пока ты шёл домой?", "While I was walking home, it started to rain."], ["Did you ever drop your phone?", "Ты когда-нибудь ронял телефон?", "Yes, I dropped it while I was running."]],
    write: "Опишите неожиданный случай: 2 предложения с when и 2 с while, плюс как всё закончилось." };

  A.push({ id: 48, world: 7, en: "Time in a story", ru: "Время в рассказе: before, after, during, ago", topic: "Последовательность",
    goal: "Точно показать время событий в рассказе: до, после, во время, сколько времени назад.",
    w: [
      ["before", "bɪˈfɔː", "bɪˈfɔːr", "до, перед", "Before the exam, I was nervous.", "Перед экзаменом я волновался."],
      ["after", "ˈɑːftə", "ˈæftər", "после", "After lunch, we went for a walk.", "После обеда мы пошли гулять."],
      ["during", "ˈdjʊərɪŋ", "ˈdʊrɪŋ", "во время", "I fell asleep during the film.", "Я уснул во время фильма."],
      ["later", "ˈleɪtə", "ˈleɪtər", "позже", "Two hours later, she called back.", "Через два часа она перезвонила."],
      ["at first", "ət fɜːst", "ət fɝːst", "сначала, поначалу", "At first, I didn't like it.", "Поначалу мне не понравилось."],
      ["in the end", "ɪn ði end", "", "в итоге, в конце концов", "In the end, everything was fine.", "В итоге всё было хорошо."],
      ["meanwhile", "ˈmiːnwaɪl", "", "тем временем", "Meanwhile, my friends were waiting.", "Тем временем друзья ждали."],
      ["nervous", "ˈnɜːvəs", "ˈnɝːvəs", "волнующийся, нервный", "I was nervous before the interview.", "Я волновался перед собеседованием."],
      ["exam", "ɪɡˈzæm", "", "экзамен", "I passed the exam!", "Я сдал экзамен!"],
      ["pass", "pɑːs", "pæs", "сдать (экзамен); проходить", "Did you pass?", "Ты сдал?"]
    ],
    p: { t: "Ударение в двусложных словах-связках", ipa: "ˈ",
      html: "<p>Связки ударные в разных местах: be<b>FORE</b>, <b>AF</b>ter, <b>DUR</b>ing, <b>LA</b>ter, <b>MEAN</b>while.</p>" +
        "<p>" + say("before, after, during, later, meanwhile") + "</p>" +
        "<p>В начале предложения связка произносится с паузой — как запятая: " + say("After lunch, we went for a walk.") + "</p>",
      ukus: "<i>after, pass</i>: UK /ɑː/, US /æ/. <i>during</i>: UK /ˈdjʊə/, US /ˈdʊ/.",
      pairs: [], drill: ["before", "after", "during", "meanwhile", "In the end, everything was fine.", "Two hours later, she called back."] },
    g: { t: "before / after / during / while / ago / later",
      html: "<table><tr><th>Слово</th><th>После него</th><th>Пример</th></tr>" +
        "<tr><td><b>before, after</b></td><td>существительное, -ing или целое предложение</td><td>before the exam · after eating · after we left</td></tr>" +
        "<tr><td><b>during</b></td><td>только существительное</td><td>during the film, during the lesson</td></tr>" +
        "<tr><td><b>while</b></td><td>целое предложение</td><td>while I was watching the film</td></tr>" +
        "<tr><td><b>ago</b></td><td>после срока, от «сейчас»</td><td>two days ago</td></tr>" +
        "<tr><td><b>later</b></td><td>после срока, от момента в истории</td><td>two days later</td></tr></table>" +
        "<div class='why'><b>during или while?</b> «Во время фильма» — <i>during the film</i>. «Пока шёл фильм» — <i>while the film was playing</i>. После during нет глагола.</div>" +
        "<p class='brk'>Порядок рассказа: <i>At first … Then … After that … Meanwhile … In the end …</i></p>",
      tasks: [
        ["c", "I fell asleep ___ the film.", "during|while|ago", 0, "Существительное → <b>during</b>."],
        ["c", "I fell asleep ___ I was watching the film.", "while|during|after of", 0, "Целое предложение → <b>while</b>."],
        ["c", "___ eating, we went for a walk.", "After|During|Ago", 0, "after + -ing."],
        ["c", "I met him three years ___.", "ago|later|before of", 0, "От «сейчас» → <b>ago</b>."],
        ["c", "We arrived at 6. Two hours ___, the party started.", "later|ago|during", 0, "От момента в истории → <b>later</b>."],
        ["c", "___, I didn't like the city, but now I love it.", "At first|In the end|During", 0, "«Поначалу» → <b>At first</b>."],
        ["c", "I was nervous ___ the exam.", "before|ago|while", 0, "«Перед» → <b>before</b>."],
        ["c", "___, everything was fine and we passed.", "In the end|At first|Meanwhile", 0, "Итог → <b>In the end</b>."],
        ["t", "После обеда мы пошли гулять.", "After lunch, we went for a walk.|After lunch we went for a walk.", "after + существительное."],
        ["t", "Ты сдал экзамен?", "Did you pass the exam?", "pass the exam."],
        ["b", "Meanwhile, my friends were waiting outside.", "Тем временем друзья ждали на улице.", "Meanwhile + Past Continuous."]
      ] },
    d: { t: "День экзамена",
      l: [["A", "How was the exam?", "Как экзамен?"], ["B", "At first I was very nervous. Before the exam I couldn't eat!", "Сначала я очень волновалась. Перед экзаменом не могла есть!"], ["A", "And during the exam?", "А во время экзамена?"],
        ["B", "During the first part my hands were shaking. Meanwhile, my friends were waiting outside.", "Во время первой части у меня тряслись руки. Тем временем друзья ждали на улице."], ["A", "Did you get the results?", "Результаты уже есть?"], ["B", "Yes, two days later. In the end, I passed!", "Да, через два дня. В итоге я сдала!"]],
      q: [["Что было перед экзаменом?", "Не могла есть от волнения|Повторяла всю ночь|Спала", 0, "Before the exam I couldn't eat!"], ["Где были друзья?", "Ждали на улице|Тоже сдавали|Были дома", 0, "Meanwhile, my friends were waiting outside."], ["Когда пришли результаты?", "Через два дня|Сразу|Через неделю", 0, "two days later"]] },
    s: [["I was nervous before the exam.", "Я волновался перед экзаменом.", "Before the exam I was nervous."], ["I fell asleep during the film.", "Я уснул во время фильма.", "I fell asleep during the movie."], ["In the end, I passed.", "В итоге я сдал.", "In the end I passed."]]
  });
  EN.v2[48] = { task: "Рассказать о важном дне по порядку: до, во время, после и чем всё закончилось.",
    can: ["Различаю during (+ существительное) и while (+ предложение)", "Различаю ago и later", "Строю рассказ: At first … Meanwhile … In the end"],
    speak: [["How did you feel before your last exam?", "Как ты себя чувствовал перед последним экзаменом?", "I was very nervous before the exam."], ["What do you usually do during long trips?", "Что ты делаешь во время долгих поездок?", "During long trips, I listen to music."], ["What happened in the end?", "Чем всё закончилось?", "In the end, everything was fine."]],
    write: "Опишите важный день (экзамен, переезд, праздник): at first, before, during, meanwhile, in the end." };

  A.push({ id: 49, world: 7, en: "A funny story", ru: "Как рассказать историю: наречия и реакции", topic: "Смешной случай",
    goal: "Живо рассказать смешной случай и отреагировать на чужую историю.",
    w: [
      ["funny", "ˈfʌni", "", "смешной", "It was so funny!", "Это было так смешно!"],
      ["embarrassed", "ɪmˈbærəst", "", "смущённый", "I was so embarrassed!", "Мне было так неловко!"],
      ["luckily", "ˈlʌkɪli", "", "к счастью", "Luckily, nobody saw it.", "К счастью, никто не видел."],
      ["unfortunately", "ʌnˈfɔːtʃənətli", "ʌnˈfɔːrtʃənətli", "к сожалению", "Unfortunately, my teacher saw everything.", "К сожалению, преподаватель всё видел."],
      ["laugh", "lɑːf", "læf", "смеяться", "Everybody laughed.", "Все засмеялись."],
      ["slowly", "ˈsləʊli", "ˈsloʊli", "медленно", "I walked slowly to the door.", "Я медленно пошёл к двери."],
      ["quickly", "ˈkwɪkli", "", "быстро", "She quickly hid the cake.", "Она быстро спрятала торт."],
      ["wrong", "rɒŋ", "rɔːŋ", "неправильный, не тот", "I got on the wrong bus.", "Я сел не на тот автобус."],
      ["realise", "ˈrɪəlaɪz", "ˈriːəlaɪz", "понять, осознать (US — realize)", "Then I realised my mistake.", "Потом я понял свою ошибку."],
      ["You're kidding!", "jɔː ˈkɪdɪŋ", "jʊr ˈkɪdɪŋ", "Да ладно! Шутишь!", "— I met Dimash! — You're kidding!", "— Я встретил Димаша! — Да ладно!"]
    ],
    p: { t: "Эмоции голосом: Really? You're kidding!", ipa: "↗ ↘",
      html: "<p>Реакции на историю передают эмоцию интонацией. Удивление — голос резко вверх: <i>Really↗? No way↗!</i></p>" +
        "<p>" + say("Really? You're kidding! No way!") + "</p>" +
        "<p>Сочувствие — мягко вниз: <i>Oh no↘. That's terrible↘.</i> " + say("Oh no. That's terrible.") + "</p>",
      ukus: "UK <i>realise</i>, US <i>realize</i>. <i>laugh</i>: UK /ɑː/, US /æ/. В <i>unfortunately</i> у американцев слышен r.",
      pairs: [], drill: ["Really?", "You're kidding!", "Oh no!", "Luckily, nobody saw it.", "Unfortunately, my teacher saw everything.", "Everybody laughed."] },
    g: { t: "Наречия: как и с каким настроением",
      html: "<p><b>Наречия образа действия</b> отвечают «как?»: прилагательное + <b>-ly</b>: slow → slow<b>ly</b>, quick → quick<b>ly</b>, happy → happ<b>ily</b>.</p>" +
        "<table><tr><th>Исключения</th><th>Пример</th></tr><tr><td>good → <b>well</b></td><td>She speaks English <b>well</b>.</td></tr><tr><td>fast → <b>fast</b>, hard → <b>hard</b></td><td>He runs <b>fast</b>. I worked <b>hard</b>.</td></tr></table>" +
        "<p><b>Наречия-комментарии</b> ставятся в начало и показывают ваше отношение: <i>Luckily, … Unfortunately, … Suddenly, … Surprisingly, …</i></p>" +
        "<div class='why'><b>Прилагательное или наречие?</b> После be, look, feel, seem — прилагательное: <i>She looked <b>happy</b></i>. После обычного действия — наречие: <i>She smiled <b>happily</b></i>.</div>" +
        "<p class='brk'>Реакции слушателя: Really? · You're kidding! · No way! · Oh no! · What happened next? · That's so funny!</p>",
      tasks: [
        ["c", "I walked ___ to the door.", "slowly|slow|slowely", 0, "Как шёл? → наречие <b>slowly</b>."],
        ["c", "She speaks English very ___.", "well|good|goodly", 0, "good → <b>well</b>."],
        ["c", "He runs very ___.", "fast|fastly|faster than", 0, "fast — без -ly."],
        ["c", "She looked ___.", "happy|happily|happyly", 0, "После look → прилагательное."],
        ["c", "___, nobody saw my mistake.", "Luckily|Lucky|Luck", 0, "Комментарий в начале → <b>Luckily</b>."],
        ["c", "I got on the ___ bus.", "wrong|wrongly|bad", 0, "Какой автобус? → прилагательное <b>wrong</b>."],
        ["c", "— I won a car! — ___", "You're kidding!|You're welcome!|Never mind.", 0, "Удивление → <b>You're kidding!</b>"],
        ["c", "Then I ___ my mistake.", "realised|realise|was realise", 0, "Past Simple: realise → <b>realised</b>."],
        ["t", "Все засмеялись.", "Everybody laughed.|Everyone laughed.", "laugh → laughed /t/."],
        ["t", "Мне было так неловко!", "I was so embarrassed!|I felt so embarrassed!", "embarrassed — о себе."],
        ["b", "Unfortunately, my teacher saw everything.", "К сожалению, преподаватель всё видел.", "Комментарий + Past Simple."]
      ] },
    d: { t: "Не тот автобус",
      l: [["A", "You look happy! What happened?", "Ты весёлая! Что случилось?"], ["B", "A funny story. This morning I was reading on the bus and didn't look outside.", "Смешная история. Утром я читала в автобусе и не смотрела в окно."], ["A", "And?", "И?"],
        ["B", "Suddenly I realised it was the wrong bus! I was at the airport!", "Вдруг поняла, что это не тот автобус! Я была в аэропорту!"], ["A", "You're kidding! Were you late?", "Да ладно! Ты опоздала?"], ["B", "Luckily, my lesson started late. I quickly took a taxi, and everybody laughed when I told them.", "К счастью, занятие началось позже. Я быстро взяла такси, и все смеялись, когда я рассказала."]],
      q: [["Что делала B в автобусе?", "Читала|Спала|Говорила по телефону", 0, "I was reading on the bus"], ["Где она оказалась?", "В аэропорту|На вокзале|Дома", 0, "I was at the airport!"], ["Почему она не опоздала?", "Занятие началось позже|Отменили урок|Её подвезли друзья", 0, "Luckily, my lesson started late."]] },
    s: [["Luckily, nobody saw it.", "К счастью, никто не видел.", "Luckily nobody saw it."], ["She speaks English well.", "Она хорошо говорит по-английски.", "She speaks good English."], ["I got on the wrong bus.", "Я сел не на тот автобус.", "I took the wrong bus."]]
  });
  EN.v2[49] = { task: "Рассказать смешной или неловкий случай и отреагировать на историю собеседника.",
    can: ["Использую наречия: slowly, quickly, well", "Добавляю отношение: Luckily, Unfortunately, Suddenly", "Реагирую на историю: Really? You're kidding! What happened next?"],
    speak: [["Tell me about a funny thing that happened to you.", "Расскажи о смешном случае.", "Once I got on the wrong bus and ended up at the airport!"], ["I lost my passport at the airport!", "Я потерял паспорт в аэропорту!", "Oh no! What happened next?"], ["I met a famous singer yesterday!", "Я вчера встретил известного певца!", "You're kidding! Did you take a photo?"]],
    write: "Напишите смешной или неловкий случай на 5–6 предложений: suddenly, luckily или unfortunately, in the end." };

  A.push({ id: 50, world: 7, en: "Module 2 boss", ru: "Контрольная модуля 2: рассказ о прошлом", topic: "Контрольная",
    goal: "Проверить всё из модуля и рассказать связную историю о прошлом.",
    w: [
      ["story", "ˈstɔːri", "", "история, рассказ", "Tell me a story.", "Расскажи историю."],
      ["memory", "ˈmeməri", "", "воспоминание; память", "It's my best memory.", "Это моё лучшее воспоминание."],
      ["experience", "ɪkˈspɪəriəns", "ɪkˈspɪriəns", "опыт; случай", "It was a great experience.", "Это был отличный опыт."],
      ["moment", "ˈməʊmənt", "ˈmoʊmənt", "момент", "I'll never forget that moment.", "Я никогда не забуду тот момент."],
      ["forgot", "fəˈɡɒt", "fərˈɡɑːt", "забыл (от forget)", "I forgot my ticket.", "Я забыл билет."],
      ["felt", "felt", "", "почувствовал (от feel)", "I felt happy.", "Я почувствовал себя счастливым."],
      ["became", "bɪˈkeɪm", "", "стал (от become)", "We became friends.", "Мы стали друзьями."],
      ["decide", "dɪˈsaɪd", "", "решать", "We decided to go.", "Мы решили поехать."],
      ["unforgettable", "ˌʌnfəˈɡetəbl", "ˌʌnfərˈɡetəbl", "незабываемый", "It was unforgettable.", "Это было незабываемо."],
      ["once", "wʌns", "", "однажды; один раз", "Once, I met a famous actor.", "Однажды я встретил известного актёра."]
    ],
    p: { t: "Повторение звуков модуля", ipa: "/t/ /d/ /ɪd/ · /ɔː/ · /wəz/",
      html: "<p>Три главных звука модуля в одном рассказе: окончание <b>-ed</b>, звук <b>/ɔː/</b> в неправильных глаголах и слабое <b>was</b>.</p>" +
        "<p>" + say("Once, I was walking home when I saw an old friend. We talked and decided to have coffee.") + "</p>" +
        "<p>Прочитайте вслух и проверьте: walk<b>ed</b> /t/, decid<b>ed</b> /ɪd/, s<b>aw</b> /ɔː/, <b>was</b> /wəz/.</p>",
      ukus: "<i>memory, story</i> — одинаково; <i>forgot</i>: UK /ɒ/, US /ɑː/; <i>experience</i>: UK /ɪə/, US /ɪ/.",
      pairs: [["walked", "decided"], ["saw", "so"]], drill: ["once", "decided", "unforgettable", "We became friends.", "I'll never forget that moment.", "It was a great experience."] },
    g: { t: "Повторение модуля 2",
      html: "<table><tr><th>Тема</th><th>Главное</th></tr>" +
        "<tr><td>Past Simple</td><td>walked, studied, stopped; did / didn't + первая форма</td></tr>" +
        "<tr><td>неправильные</td><td>went, saw, bought, told, wrote, met, lost, found, thought</td></tr>" +
        "<tr><td>say / tell</td><td>said hello · told me the news</td></tr>" +
        "<tr><td>used to</td><td>I used to live… · Did you use to…?</td></tr>" +
        "<tr><td>вопросы</td><td>Where did you stay? · Who went? · How was it?</td></tr>" +
        "<tr><td>Past Continuous</td><td>I was having dinner at 8.</td></tr>" +
        "<tr><td>when / while</td><td>I was cooking when the phone rang.</td></tr>" +
        "<tr><td>время</td><td>during + сущ., while + предложение; ago / later</td></tr>" +
        "<tr><td>наречия</td><td>slowly, well, fast; Luckily, …</td></tr></table>" +
        "<div class='why'>Ошибаетесь в теме — вернитесь к её уровню (41–49): разминка и тренировка ошибок подтянут слабые места.</div>",
      tasks: [
        ["c", "She ___ for the exam all weekend.", "studied|studyed|was study", 0, "study → studied."],
        ["c", "Did you ___ the new teacher?", "meet|met|meeting", 0, "После did → первая форма."],
        ["c", "He ___ me a funny story.", "told|said|spoke", 0, "tell + кому."],
        ["c", "I ___ be afraid of the dark.", "used to|use to|was used to", 0, "Привычка в прошлом → used to."],
        ["c", "How ___ the party?", "was|did|were", 0, "to be → was."],
        ["c", "At 10 last night I ___ TV.", "was watching|watched|were watching", 0, "Процесс в момент → was watching."],
        ["c", "I was walking home ___ I saw an old friend.", "when|while|during", 0, "Короткое событие → when."],
        ["c", "I fell asleep ___ the lesson.", "during|while|ago", 0, "Существительное → during."],
        ["c", "She did it very ___.", "well|good|goodly", 0, "good → well."],
        ["t", "Мы решили поехать в горы.", "We decided to go to the mountains.", "decide → decided /ɪd/."],
        ["t", "Однажды я встретил известного актёра.", "Once, I met a famous actor.|Once I met a famous actor.", "meet → met."],
        ["b", "While we were talking, it started to rain.", "Пока мы разговаривали, начался дождь.", "while + Past Continuous, событие — Past Simple."]
      ] },
    d: { t: "Лучшее воспоминание",
      l: [["A", "What's your best memory from last year?", "Какое у тебя лучшее воспоминание за прошлый год?"], ["B", "Once, my friends and I decided to go to Kolsai lakes.", "Однажды мы с друзьями решили поехать на Кольсай."], ["A", "How was it?", "Как было?"],
        ["B", "At first it was cold and I forgot my jacket. But while we were walking, the sun came out.", "Сначала было холодно, а я забыла куртку. Но пока мы шли, вышло солнце."], ["A", "That sounds amazing!", "Звучит потрясающе!"], ["B", "It was unforgettable. We became really close friends after that trip.", "Это было незабываемо. После той поездки мы по-настоящему сдружились."]],
      q: [["Куда поехали друзья?", "На озёра Кольсай|В Астану|На море", 0, "go to Kolsai lakes"], ["Что B забыла?", "Куртку|Телефон|Билет", 0, "I forgot my jacket"], ["Что изменилось после поездки?", "Они стали близкими друзьями|Они поссорились|Ничего", 0, "We became really close friends"]] },
    s: [["We decided to go to the lakes.", "Мы решили поехать на озёра.", "We decided to go to the lake."], ["I forgot my jacket.", "Я забыл куртку.", "I forgot my coat."], ["It was unforgettable.", "Это было незабываемо.", "It was an unforgettable trip."]]
  });
  EN.v2[50] = { task: "Рассказать связную историю о своём лучшем воспоминании, используя все времена модуля.",
    can: ["Рассказываю историю в прошлом от начала до конца", "Соединяю фон и события: while, when, suddenly", "Отвечаю на вопросы о своей истории без подсказок"],
    speak: [["What's your best memory?", "Какое твоё лучшее воспоминание?", "My best memory is a trip to the mountains with my friends."], ["What were you doing when it happened?", "Что ты делал, когда это случилось?", "We were walking near the lake when the sun came out."], ["How did you feel?", "Что ты почувствовал?", "I felt really happy. It was unforgettable."]],
    write: "Напишите историю о лучшем воспоминании на 6–8 предложений: Past Simple, Past Continuous, when / while, used to или ago." };
})(window.EN);
;
/* ==== placement-en ==== */
/* Входной тест: английский. [навык, этап, вариант, вопрос, "верный|…", тема, озвучка] */
window.PLACE_EN = {
  stages: [
    { name: "Основы (уровни 1–10)", label: "A1 (начало)", from: 1, to: 10 },
    { name: "Повседневная жизнь (11–20)", label: "A1", from: 11, to: 20 },
    { name: "Прошлое и планы (21–30)", label: "A2", from: 21, to: 30 },
    { name: "Подробнее о жизни (31–40)", label: "A2+", from: 31, to: 40 }
  ],
  zeroLabel: "с нуля",
  bank: [
    // Этап 1 — A
    ["v", 0, 0, "Что значит <b lang='en'>brother</b>?", "брат|сестра|отец|друг", "семья"],
    ["v", 0, 0, "Что значит <b lang='en'>seven</b>?", "семь|семнадцать|семьдесят|шесть", "числа"],
    ["v", 0, 0, "Что значит <b lang='en'>teacher</b>?", "учитель|ученик|врач|повар", "профессии"],
    ["g", 0, 0, "<span lang='en'>I ___ a student.</span>", "am|is|are|be", "to be"],
    ["g", 0, 0, "<span lang='en'>She ___ my friend.</span>", "is|am|are|be", "to be"],
    ["g", 0, 0, "<span lang='en'>I have ___ apple.</span>", "an|a|two|many", "артикли a / an"],
    ["r", 0, 0, "<p lang='en'>Hi! I'm Tom. I'm 20. I'm a student from London.</p>Откуда Том?", "из Лондона|из Астаны|из Парижа|не сказано", "о себе"],
    ["r", 0, 0, "<p lang='en'>This is my room. There is a bed and a desk. There isn't a TV.</p>Чего нет в комнате?", "телевизора|кровати|стола|всё есть", "there is / isn't"],
    ["l", 0, 0, "", "Приятно познакомиться.|До свидания.|Как дела?|Спасибо.", "приветствия", "Nice to meet you."],
    ["l", 0, 0, "", "15|50|5|16", "числа", "fifteen"],
    // Этап 1 — B
    ["v", 0, 1, "Что значит <b lang='en'>sister</b>?", "сестра|брат|мама|подруга", "семья"],
    ["v", 0, 1, "Что значит <b lang='en'>eleven</b>?", "11|7|12|17", "числа"],
    ["v", 0, 1, "Что значит <b lang='en'>student</b>?", "студент|учитель|школа|урок", "профессии"],
    ["g", 0, 1, "<span lang='en'>They ___ from Kazakhstan.</span>", "are|is|am|be", "to be"],
    ["g", 0, 1, "<span lang='en'>___ you OK?</span>", "Are|Is|Am|Do", "вопрос с to be"],
    ["g", 0, 1, "<span lang='en'>one book, two ___</span>", "books|book|bookes|a books", "множественное число"],
    ["r", 0, 1, "<p lang='en'>My name is Anna. I am a doctor. My brother is a student.</p>Кто брат Анны?", "студент|врач|учитель|не сказано", "о себе"],
    ["r", 0, 1, "<p lang='en'>It's a small, old house with a red door.</p>Какого цвета дверь?", "красная|белая|синяя|не сказано", "описание"],
    ["l", 0, 1, "", "Как дела?|Кто ты?|Сколько тебе лет?|Где ты?", "приветствия", "How are you?"],
    ["l", 0, 1, "", "30|13|3|33", "числа", "thirty"],
    // Этап 2 — A
    ["v", 1, 0, "Что значит <b lang='en'>breakfast</b>?", "завтрак|обед|ужин|перекус", "еда"],
    ["v", 1, 0, "Что значит <b lang='en'>expensive</b>?", "дорогой|дешёвый|большой|новый", "покупки"],
    ["v", 1, 0, "Что значит <b lang='en'>Wednesday</b>?", "среда|вторник|четверг|понедельник", "дни недели"],
    ["g", 1, 0, "<span lang='en'>He ___ in a bank.</span>", "works|work|is work|working", "Present Simple"],
    ["g", 1, 0, "<span lang='en'>___ you like coffee?</span>", "Do|Are|Does|Is", "вопросы с do"],
    ["g", 1, 0, "<span lang='en'>Look! It ___.</span>", "is raining|rains|rain|raining", "Present Continuous"],
    ["r", 1, 0, "<p lang='en'>Ben gets up at seven. He has tea and goes to work by bus.</p>Как Бен добирается до работы?", "на автобусе|пешком|на метро|на машине", "распорядок дня"],
    ["r", 1, 0, "<p lang='en'>The café opens at 9 and closes at 6. It is closed on Sunday.</p>Когда кафе не работает?", "в воскресенье|в субботу|после 9|в понедельник", "время"],
    ["l", 1, 0, "", "Сколько это стоит?|Сколько времени?|Где это?|Что это?", "покупки", "How much is it?"],
    ["l", 1, 0, "", "Я обычно хожу на работу пешком.|Я сейчас иду на работу.|Я никогда не хожу пешком.|Я езжу на работу.", "Present Simple", "I usually walk to work."],
    // Этап 2 — B
    ["v", 1, 1, "Что значит <b lang='en'>weather</b>?", "погода|время|вода|весна", "погода"],
    ["v", 1, 1, "Что значит <b lang='en'>always</b>?", "всегда|никогда|иногда|часто", "частотность"],
    ["v", 1, 1, "Что значит <b lang='en'>kitchen</b>?", "кухня|комната|ванная|спальня", "дом"],
    ["g", 1, 1, "<span lang='en'>She ___ have a car.</span>", "doesn't|don't|isn't|not", "отрицание doesn't"],
    ["g", 1, 1, "<span lang='en'>There ___ two chairs.</span>", "are|is|be|am", "there are"],
    ["g", 1, 1, "<span lang='en'>I can ___ English.</span>", "speak|speaks|to speak|speaking", "can"],
    ["r", 1, 1, "<p lang='en'>Sara can swim, but she can't ride a bike.</p>Что Сара не умеет?", "кататься на велосипеде|плавать|готовить|всё умеет", "can / can't"],
    ["r", 1, 1, "<p lang='en'>It's cold today, so I'm wearing a warm coat.</p>Почему автор в тёплом пальто?", "сегодня холодно|идёт дождь|праздник|нет другой одежды", "погода и одежда"],
    ["l", 1, 1, "", "Который час?|Какой сегодня день?|Какая погода?|Где мы?", "время", "What time is it?"],
    ["l", 1, 1, "", "Она сейчас готовит ужин.|Она обычно готовит ужин.|Она приготовила ужин.|Она приготовит ужин.", "Present Continuous", "She's cooking dinner."],
    // Этап 3 — A
    ["v", 2, 0, "Что значит <b lang='en'>yesterday</b>?", "вчера|завтра|сегодня|позавчера", "время"],
    ["v", 2, 0, "Что значит <b lang='en'>cheaper</b>?", "дешевле|дороже|больше|лучше", "сравнение"],
    ["v", 2, 0, "Что значит <b lang='en'>tired</b>?", "уставший|голодный|скучный|занятой", "самочувствие"],
    ["g", 2, 0, "<span lang='en'>I ___ to Almaty last year.</span>", "went|go|have gone|was go", "Past Simple"],
    ["g", 2, 0, "<span lang='en'>We ___ visit my aunt tomorrow.</span>", "are going to|went|visits|were", "be going to"],
    ["g", 2, 0, "<span lang='en'>This bag is ___ than that one.</span>", "bigger|more big|biggest|big", "сравнительная степень"],
    ["r", 2, 0, "<p lang='en'>Last summer Dana travelled to Turkey. She stayed in a small hotel and swam every day.</p>Где жила Дана?", "в небольшом отеле|у друзей|в палатке|не сказано", "Past Simple"],
    ["r", 2, 0, "<p lang='en'>Tom has lived in Astana since 2020.</p>С какого времени Том живёт в Астане?", "с 2020 года|с 2002 года|с рождения|он там не живёт", "Present Perfect"],
    ["l", 2, 0, "", "Я позвоню тебе позже.|Я звонил тебе.|Позвони мне.|Я не могу позвонить.", "will", "I'll call you later."],
    ["l", 2, 0, "", "Мы никуда не ходили.|Мы ушли.|Мы пойдём гулять.|Мы выходим.", "Past Simple", "We didn't go out."],
    // Этап 3 — B
    ["v", 2, 1, "Что значит <b lang='en'>ago</b> (two days ago)?", "назад|после|ещё|уже", "время"],
    ["v", 2, 1, "Что значит <b lang='en'>journey</b>?", "поездка|работа|встреча|прогулка", "путешествия"],
    ["v", 2, 1, "Что значит <b lang='en'>invite</b>?", "приглашать|встречать|звонить|помогать", "планы"],
    ["g", 2, 1, "<span lang='en'>___ you see the film yesterday?</span>", "Did|Do|Were|Have", "вопросы в Past Simple"],
    ["g", 2, 1, "<span lang='en'>Have you ever ___ sushi?</span>", "eaten|ate|eat|eating", "Present Perfect"],
    ["g", 2, 1, "<span lang='en'>It's the ___ day of the year.</span>", "hottest|hotter|most hot|hot", "превосходная степень"],
    ["r", 2, 1, "<p lang='en'>I'm sorry I'm late. The bus didn't come, so I walked.</p>Почему автор опоздал?", "автобус не пришёл|проспал|заблудился|был в пробке", "Past Simple"],
    ["r", 2, 1, "<p lang='en'>Tickets cost 3000 tenge for adults and 1500 for children.</p>Сколько стоит детский билет?", "1500 тенге|3000 тенге|4500 тенге|бесплатно", "цены"],
    ["l", 2, 1, "", "Ты закончил?|Ты начинаешь?|Ты закончишь?|Ты занят?", "Present Perfect", "Have you finished?"],
    ["l", 2, 1, "", "Было лучше, чем я ожидал.|Было хуже, чем я ожидал.|Было как я ожидал.|Мне не понравилось.", "сравнение", "It was better than I expected."],
    // Этап 4 — A
    ["v", 3, 0, "Что значит <b lang='en'>housework</b>?", "домашние дела|домашнее задание|ремонт|переезд", "дом"],
    ["v", 3, 0, "Что значит <b lang='en'>rarely</b>?", "редко|часто|рано|всегда", "частотность"],
    ["v", 3, 0, "Что значит <b lang='en'>can't stand</b>?", "терпеть не могу|не могу стоять|обожаю|не против", "хобби"],
    ["g", 3, 0, "<span lang='en'>I enjoy ___ books.</span>", "reading|to read|read|reads", "enjoy + -ing"],
    ["g", 3, 0, "<span lang='en'>We don't have ___ rice.</span>", "much|many|a|lots", "much / many"],
    ["g", 3, 0, "<span lang='en'>Who ___ the dishes in your family?</span>", "does|makes|do|make", "do / make"],
    ["r", 3, 0, "<p lang='en'>I usually cook at home, but this week I'm eating out because my kitchen is closed for repairs.</p>Почему автор на этой неделе ест в кафе?", "кухня на ремонте|он не умеет готовить|кафе дешёвое|у него праздник", "Simple / Continuous"],
    ["r", 3, 0, "<p lang='en'>Mia hardly ever drinks coffee. She prefers green tea.</p>Что предпочитает Мия?", "зелёный чай|кофе|сок|воду", "частотность"],
    ["l", 3, 0, "", "Как часто ты ходишь в спортзал?|Когда ты пойдёшь в спортзал?|Ты ходил в спортзал?|Где спортзал?", "вопросы", "How often do you go to the gym?"],
    ["l", 3, 0, "", "Терпеть не могу ждать.|Я не могу стоять.|Я подожду.|Я люблю ждать.", "can't stand + -ing", "I can't stand waiting."],
    // Этап 4 — B
    ["v", 3, 1, "Что значит <b lang='en'>share</b>?", "делить(ся)|продавать|покупать|ждать", "дом"],
    ["v", 3, 1, "Что значит <b lang='en'>hardly ever</b>?", "почти никогда|очень часто|с трудом|навсегда", "частотность"],
    ["v", 3, 1, "Что значит <b lang='en'>skip</b> (skip breakfast)?", "пропускать|прыгать|начинать|готовить", "еда"],
    ["g", 3, 1, "<span lang='en'>He ___ late.</span>", "is never|never is|doesn't never|never be", "место never"],
    ["g", 3, 1, "<span lang='en'>How ___ eggs do you need?</span>", "many|much|any|lot", "much / many"],
    ["g", 3, 1, "<span lang='en'>I was tired, ___ I went to bed.</span>", "so|because|but|although", "связки so / because"],
    ["r", 3, 1, "<p lang='en'>My flatmate makes dinner and I do the dishes. We share the housework.</p>Что делает автор?", "моет посуду|готовит ужин|ничего|убирает квартиру", "do / make"],
    ["r", 3, 1, "<p lang='en'>Kim is interested in history, so she often goes to museums.</p>Почему Ким часто ходит в музеи?", "ей интересна история|она там работает|она учится рисовать|туда ходят друзья", "связки"],
    ["l", 3, 1, "", "Кто готовит?|Что ты готовишь?|Когда ужин?|Ты умеешь готовить?", "вопросы", "Who does the cooking?"],
    ["l", 3, 1, "", "Молока не осталось.|Молоко есть.|Купи молока.|Молоко холодное.", "some / any", "There isn't any milk left."]
  ]
};
;

// ===== Словарь+: частотные слова до уровня A2 (оригинальные переводы и примеры) =====
// w: [en, ipaUK, ipaUS ("" = как UK), ru, exEn, exRu]
EN.packs = [
{ id: 1, title: "Где и куда: предлоги места", w: [
  ["into", "ˈɪntuː", "", "в (внутрь, движение)", "She went into the shop.", "Она зашла в магазин."],
  ["out of", "ˈaʊt əv", "", "из (наружу)", "He ran out of the room.", "Он выбежал из комнаты."],
  ["through", "θruː", "", "через, сквозь", "We walked through the park.", "Мы прошли через парк."],
  ["inside", "ˌɪnˈsaɪd", "", "внутри", "It is warm inside.", "Внутри тепло."],
  ["above", "əˈbʌv", "", "над, выше", "There is a lamp above the table.", "Над столом висит лампа."],
  ["below", "bɪˈləʊ", "bɪˈloʊ", "под, ниже", "The temperature is below zero.", "Температура ниже нуля."],
  ["across", "əˈkrɒs", "əˈkrɔːs", "через (на другую сторону)", "The café is across the street.", "Кафе через дорогу."],
  ["between", "bɪˈtwiːn", "", "между", "Sit between Anna and Tom.", "Сядь между Анной и Томом."],
  ["behind", "bɪˈhaɪnd", "", "за, позади", "The cat is behind the sofa.", "Кошка за диваном."],
  ["in front of", "ɪn ˈfrʌnt əv", "", "перед", "I'll wait in front of the cinema.", "Я подожду перед кинотеатром."],
  ["next to", "ˈnekst tə", "", "рядом с", "The bank is next to the station.", "Банк рядом с вокзалом."],
  ["opposite", "ˈɒpəzɪt", "ˈɑːpəzət", "напротив", "We live opposite the school.", "Мы живём напротив школы."],
  ["along", "əˈlɒŋ", "əˈlɔːŋ", "вдоль, по", "Walk along the river.", "Идите вдоль реки."],
  ["around", "əˈraʊnd", "", "вокруг; около", "We travelled around the country.", "Мы путешествовали по всей стране."],
  ["towards", "təˈwɔːdz", "tɔːrdz", "по направлению к", "She walked towards the door.", "Она пошла к двери."],
  ["up", "ʌp", "", "вверх", "Go up the stairs.", "Поднимитесь по лестнице."],
  ["down", "daʊn", "", "вниз", "He looked down.", "Он посмотрел вниз."],
  ["over", "ˈəʊvə", "ˈoʊvər", "над; через; больше", "The plane flew over the city.", "Самолёт пролетел над городом."],
  ["past", "pɑːst", "pæst", "мимо", "We drove past the museum.", "Мы проехали мимо музея."],
  ["onto", "ˈɒntuː", "ˈɑːntuː", "на (движение на поверхность)", "The cat jumped onto the table.", "Кошка запрыгнула на стол."],
  ["off", "ɒf", "ɔːf", "с (прочь с поверхности)", "Take your shoes off.", "Сними обувь."],
  ["away", "əˈweɪ", "", "прочь; далеко", "Go away, please!", "Уйдите, пожалуйста!"],
  ["back", "bæk", "", "назад, обратно", "Come back soon!", "Возвращайся скорее!"],
  ["here", "hɪə", "hɪr", "здесь, сюда", "Come here, please.", "Иди сюда, пожалуйста."],
  ["there", "ðeə", "ðer", "там, туда", "Put the box there.", "Поставь коробку туда."]
]},
{ id: 2, title: "Маленькие слова, без которых никак", w: [
  ["the", "ðə", "", "определённый артикль (тот самый)", "Close the door, please.", "Закрой дверь, пожалуйста."],
  ["a", "ə", "", "неопределённый артикль (какой-то, один)", "I have a dog.", "У меня есть собака."],
  ["and", "ænd", "", "и", "Tea and cake, please.", "Чай и торт, пожалуйста."],
  ["or", "ɔː", "ɔːr", "или", "Tea or coffee?", "Чай или кофе?"],
  ["with", "wɪð", "", "с (вместе с)", "I live with my sister.", "Я живу с сестрой."],
  ["without", "wɪˈðaʊt", "", "без", "Coffee without sugar, please.", "Кофе без сахара, пожалуйста."],
  ["for", "fɔː", "fɔːr", "для; в течение", "This gift is for you.", "Этот подарок для тебя."],
  ["of", "ɒv", "ʌv", "из; (передаёт родительный падеж)", "A cup of tea.", "Чашка чая."],
  ["to", "tuː", "", "к, в (направление)", "I go to work by bus.", "Я езжу на работу на автобусе."],
  ["about", "əˈbaʊt", "", "о, про; около", "Tell me about your family.", "Расскажи мне о своей семье."],
  ["by", "baɪ", "", "на (транспорте); к (сроку); автором", "I'll finish it by Friday.", "Я закончу это к пятнице."],
  ["until", "ənˈtɪl", "", "до (какого-то момента)", "Wait until six.", "Подожди до шести."],
  ["since", "sɪns", "", "с (какого-то времени)", "I have lived here since 2020.", "Я живу здесь с 2020 года."],
  ["as", "æz", "", "как; в качестве", "She works as a nurse.", "Она работает медсестрой."],
  ["if", "ɪf", "", "если", "Call me if you are late.", "Позвони мне, если опаздываешь."],
  ["although", "ɔːlˈðəʊ", "ɔːlˈðoʊ", "хотя", "Although it was cold, we went out.", "Хотя было холодно, мы вышли."],
  ["unless", "ənˈles", "", "если не", "Don't call unless it's important.", "Не звони, если это не важно."],
  ["both", "bəʊθ", "boʊθ", "оба", "Both my parents are doctors.", "Оба моих родителя врачи."],
  ["each", "iːtʃ", "", "каждый (по отдельности)", "Each room has a TV.", "В каждом номере есть телевизор."],
  ["also", "ˈɔːlsəʊ", "ˈɔːlsoʊ", "также", "I also speak French.", "Я также говорю по-французски."],
  ["too", "tuː", "", "тоже; слишком", "It's too hot today.", "Сегодня слишком жарко."],
  ["only", "ˈəʊnli", "ˈoʊnli", "только", "I only have five minutes.", "У меня только пять минут."],
  ["even", "ˈiːvn", "", "даже", "Even my grandma uses the app.", "Даже моя бабушка пользуется приложением."],
  ["not", "nɒt", "nɑːt", "не", "I am not ready.", "Я не готов."],
  ["else", "els", "", "ещё (кроме этого)", "Anything else?", "Что-нибудь ещё?"]
]},
{ id: 3, title: "Наречия: очень, почти, вместе", w: [
  ["very", "ˈveri", "", "очень", "It's very cold today.", "Сегодня очень холодно."],
  ["really", "ˈrɪəli", "ˈriːəli", "действительно, очень", "I really like this song.", "Мне очень нравится эта песня."],
  ["quite", "kwaɪt", "", "довольно, вполне", "The film was quite good.", "Фильм был довольно хорошим."],
  ["almost", "ˈɔːlməʊst", "ˈɔːlmoʊst", "почти", "It's almost eight o'clock.", "Уже почти восемь часов."],
  ["exactly", "ɪɡˈzæktli", "", "точно, именно", "That's exactly what I mean.", "Именно это я и имею в виду."],
  ["simply", "ˈsɪmpli", "", "просто", "Simply press this button.", "Просто нажмите эту кнопку."],
  ["rather", "ˈrɑːðə", "ˈræðər", "довольно; скорее", "It's rather late.", "Уже довольно поздно."],
  ["instead", "ɪnˈsted", "", "вместо этого", "Let's walk instead.", "Давай лучше пройдёмся пешком."],
  ["together", "təˈɡeðə", "təˈɡeðər", "вместе", "We study together.", "Мы учимся вместе."],
  ["alone", "əˈləʊn", "əˈloʊn", "один, в одиночку", "He lives alone.", "Он живёт один."],
  ["actually", "ˈæktʃuəli", "", "на самом деле", "Actually, I'm from Almaty.", "Вообще-то я из Алматы."],
  ["especially", "ɪˈspeʃəli", "", "особенно", "I love fruit, especially apples.", "Я люблю фрукты, особенно яблоки."],
  ["nearly", "ˈnɪəli", "ˈnɪrli", "почти", "I nearly missed the bus.", "Я чуть не опоздал на автобус."],
  ["still", "stɪl", "", "всё ещё", "Are you still at work?", "Ты всё ещё на работе?"],
  ["soon", "suːn", "", "скоро", "See you soon!", "До скорого!"],
  ["recently", "ˈriːsntli", "", "недавно", "I recently moved to London.", "Я недавно переехал в Лондон."],
  ["immediately", "ɪˈmiːdiətli", "", "немедленно, сразу", "Call me immediately.", "Позвони мне сразу же."],
  ["everywhere", "ˈevriweə", "ˈevriwer", "везде", "I looked everywhere for my keys.", "Я везде искал ключи."],
  ["somewhere", "ˈsʌmweə", "ˈsʌmwer", "где-то, куда-то", "Let's go somewhere warm.", "Поехали куда-нибудь, где тепло."],
  ["anywhere", "ˈeniweə", "ˈeniwer", "где угодно; нигде (в отрицании)", "I can't find it anywhere.", "Я нигде не могу это найти."],
  ["perhaps", "pəˈhæps", "pərˈhæps", "возможно, может быть", "Perhaps she is right.", "Возможно, она права."],
  ["of course", "əv ˈkɔːs", "əv ˈkɔːrs", "конечно", "Of course I'll help you.", "Конечно, я тебе помогу."],
  ["certainly", "ˈsɜːtnli", "ˈsɜːrtnli", "несомненно, конечно", "I'll certainly come.", "Я обязательно приду."],
  ["more", "mɔː", "mɔːr", "больше, более", "Can I have more water?", "Можно мне ещё воды?"],
  ["less", "les", "", "меньше, менее", "I want to spend less money.", "Я хочу тратить меньше денег."]
]},
{ id: 4, title: "Местоимения: меня, его, наш", w: [
  ["me", "miː", "", "меня, мне", "Call me tomorrow.", "Позвони мне завтра."],
  ["him", "hɪm", "", "его, ему", "I saw him yesterday.", "Я видел его вчера."],
  ["her", "hɜː", "hɜːr", "её, ей", "Give her the book.", "Дай ей книгу."],
  ["us", "ʌs", "", "нас, нам", "Join us!", "Присоединяйся к нам!"],
  ["them", "ðem", "", "их, им", "I love them.", "Я их люблю."],
  ["my", "maɪ", "", "мой", "This is my phone.", "Это мой телефон."],
  ["your", "jɔː", "jʊr", "твой, ваш", "What's your name?", "Как тебя зовут?"],
  ["his", "hɪz", "", "его (принадлежность)", "His car is red.", "Его машина красная."],
  ["its", "ɪts", "", "его, её (о предмете, животном)", "The dog wants its toy.", "Собака хочет свою игрушку."],
  ["our", "ˈaʊə", "ˈaʊər", "наш", "Our flat is small.", "Наша квартира маленькая."],
  ["their", "ðeə", "ðer", "их (принадлежность)", "Their house is near the sea.", "Их дом у моря."],
  ["mine", "maɪn", "", "мой (без существительного)", "This bag is mine.", "Эта сумка моя."],
  ["yours", "jɔːz", "jʊrz", "твой, ваш (без существительного)", "Is this pen yours?", "Это твоя ручка?"],
  ["myself", "maɪˈself", "", "сам, себя", "I made it myself.", "Я сделал это сам."],
  ["someone", "ˈsʌmwʌn", "", "кто-то", "Someone is at the door.", "Кто-то у двери."],
  ["anyone", "ˈeniwʌn", "", "кто-нибудь; никто (в отрицании)", "Does anyone speak English?", "Кто-нибудь говорит по-английски?"],
  ["no one", "ˈnəʊ wʌn", "ˈnoʊ wʌn", "никто", "No one called.", "Никто не звонил."],
  ["everyone", "ˈevriwʌn", "", "все, каждый", "Everyone is here.", "Все здесь."],
  ["something", "ˈsʌmθɪŋ", "", "что-то", "I want to tell you something.", "Я хочу тебе кое-что сказать."],
  ["anything", "ˈeniθɪŋ", "", "что-нибудь; ничего (в отрицании)", "Do you need anything?", "Тебе что-нибудь нужно?"],
  ["nothing", "ˈnʌθɪŋ", "", "ничего", "There is nothing in the fridge.", "В холодильнике ничего нет."],
  ["everything", "ˈevriθɪŋ", "", "всё", "Everything is fine.", "Всё хорошо."],
  ["other", "ˈʌðə", "ˈʌðər", "другой", "Where are the other students?", "Где остальные студенты?"],
  ["another", "əˈnʌðə", "əˈnʌðər", "ещё один; другой", "Can I have another cup?", "Можно мне ещё чашку?"],
  ["each other", "ˌiːtʃ ˈʌðə", "ˌiːtʃ ˈʌðər", "друг друга", "We help each other.", "Мы помогаем друг другу."]
]},
{ id: 5, title: "Люди вокруг", w: [
  ["man", "mæn", "", "мужчина; человек", "That man is my uncle.", "Тот мужчина — мой дядя."],
  ["woman", "ˈwʊmən", "", "женщина", "A woman asked me the way.", "Женщина спросила у меня дорогу."],
  ["people", "ˈpiːpl", "", "люди", "Many people live here.", "Здесь живёт много людей."],
  ["person", "ˈpɜːsn", "ˈpɜːrsn", "человек", "She is a kind person.", "Она добрый человек."],
  ["kid", "kɪd", "", "ребёнок (разг.)", "The kids are playing outside.", "Дети играют на улице."],
  ["boy", "bɔɪ", "", "мальчик", "The boy is ten.", "Мальчику десять лет."],
  ["girl", "ɡɜːl", "ɡɜːrl", "девочка, девушка", "The girl has long hair.", "У девочки длинные волосы."],
  ["baby", "ˈbeɪbi", "", "младенец, малыш", "The baby is sleeping.", "Малыш спит."],
  ["adult", "ˈædʌlt", "əˈdʌlt", "взрослый", "Tickets for adults cost ten pounds.", "Билеты для взрослых стоят десять фунтов."],
  ["guy", "ɡaɪ", "", "парень (разг.)", "He's a nice guy.", "Он хороший парень."],
  ["grandmother", "ˈɡrænmʌðə", "ˈɡrænmʌðər", "бабушка", "My grandmother lives in a village.", "Моя бабушка живёт в деревне."],
  ["grandfather", "ˈɡrænfɑːðə", "ˈɡrænfɑːðər", "дедушка", "My grandfather was a teacher.", "Мой дедушка был учителем."],
  ["uncle", "ˈʌŋkl", "", "дядя", "My uncle has a big garden.", "У моего дяди большой сад."],
  ["aunt", "ɑːnt", "ænt", "тётя", "My aunt is a nurse.", "Моя тётя — медсестра."],
  ["cousin", "ˈkʌzn", "", "двоюродный брат, сестра", "My cousin lives in Astana.", "Мой двоюродный брат живёт в Астане."],
  ["boyfriend", "ˈbɔɪfrend", "", "парень (молодой человек)", "Her boyfriend is a student.", "Её парень — студент."],
  ["girlfriend", "ˈɡɜːlfrend", "ˈɡɜːrlfrend", "девушка (подруга в паре)", "His girlfriend is from Spain.", "Его девушка из Испании."],
  ["partner", "ˈpɑːtnə", "ˈpɑːrtnər", "партнёр, спутник жизни", "I live with my partner.", "Я живу со своим партнёром."],
  ["colleague", "ˈkɒliːɡ", "ˈkɑːliːɡ", "коллега", "My colleague helped me.", "Мне помог коллега."],
  ["boss", "bɒs", "bɔːs", "начальник", "My boss is very busy.", "Мой начальник очень занят."],
  ["customer", "ˈkʌstəmə", "ˈkʌstəmər", "покупатель, клиент", "The customer wants a refund.", "Покупатель хочет вернуть деньги."],
  ["guest", "ɡest", "", "гость", "We have guests tonight.", "Сегодня вечером у нас гости."],
  ["stranger", "ˈstreɪndʒə", "ˈstreɪndʒər", "незнакомец", "Don't open the door to strangers.", "Не открывай дверь незнакомцам."],
  ["team", "tiːm", "", "команда", "Our team won!", "Наша команда победила!"],
  ["group", "ɡruːp", "", "группа", "We work in groups.", "Мы работаем в группах."]
]},
{ id: 6, title: "Тело и самочувствие", w: [
  ["body", "ˈbɒdi", "ˈbɑːdi", "тело", "Sport is good for your body.", "Спорт полезен для тела."],
  ["head", "hed", "", "голова", "My head hurts.", "У меня болит голова."],
  ["ear", "ɪə", "ɪr", "ухо", "I have pain in my ear.", "У меня болит ухо."],
  ["nose", "nəʊz", "noʊz", "нос", "My nose is cold.", "У меня замёрз нос."],
  ["mouth", "maʊθ", "", "рот", "Open your mouth, please.", "Откройте рот, пожалуйста."],
  ["tooth", "tuːθ", "", "зуб (мн. teeth)", "I broke a tooth.", "Я сломал зуб."],
  ["neck", "nek", "", "шея", "She has a scarf around her neck.", "У неё на шее шарф."],
  ["shoulder", "ˈʃəʊldə", "ˈʃoʊldər", "плечо", "My shoulder hurts after the gym.", "После зала болит плечо."],
  ["arm", "ɑːm", "ɑːrm", "рука (от плеча до кисти)", "He broke his arm.", "Он сломал руку."],
  ["hand", "hænd", "", "рука (кисть)", "Wash your hands.", "Помой руки."],
  ["finger", "ˈfɪŋɡə", "ˈfɪŋɡər", "палец (руки)", "I cut my finger.", "Я порезал палец."],
  ["leg", "leɡ", "", "нога (вся)", "My legs are tired.", "У меня устали ноги."],
  ["knee", "niː", "", "колено", "I fell and hurt my knee.", "Я упал и ушиб колено."],
  ["foot", "fʊt", "", "ступня, нога (мн. feet)", "My left foot hurts.", "У меня болит левая ступня."],
  ["heart", "hɑːt", "hɑːrt", "сердце", "Her heart is beating fast.", "Её сердце быстро бьётся."],
  ["stomach", "ˈstʌmək", "", "живот, желудок", "I have a stomach ache.", "У меня болит живот."],
  ["blood", "blʌd", "", "кровь", "There is blood on your hand.", "У тебя на руке кровь."],
  ["pain", "peɪn", "", "боль", "Where is the pain?", "Где болит?"],
  ["health", "helθ", "", "здоровье", "Health is more important than money.", "Здоровье важнее денег."],
  ["sick", "sɪk", "", "больной; тошнит", "I feel sick.", "Меня тошнит."],
  ["cough", "kɒf", "kɔːf", "кашель; кашлять", "I have a bad cough.", "У меня сильный кашель."],
  ["fever", "ˈfiːvə", "ˈfiːvər", "жар, высокая температура", "The child has a fever.", "У ребёнка жар."],
  ["pill", "pɪl", "", "таблетка", "Take one pill after meals.", "Принимайте одну таблетку после еды."],
  ["pharmacy", "ˈfɑːməsi", "ˈfɑːrməsi", "аптека", "Is there a pharmacy near here?", "Здесь рядом есть аптека?"],
  ["dentist", "ˈdentɪst", "", "стоматолог", "I'm going to the dentist today.", "Сегодня я иду к стоматологу."]
]},
{ id: 7, title: "Время: часы, дни, годы", w: [
  ["day", "deɪ", "", "день", "Have a nice day!", "Хорошего дня!"],
  ["night", "naɪt", "", "ночь", "Good night!", "Спокойной ночи!"],
  ["hour", "ˈaʊə", "ˈaʊər", "час", "The lesson is one hour long.", "Урок длится один час."],
  ["minute", "ˈmɪnɪt", "", "минута", "Wait a minute, please.", "Подождите минутку, пожалуйста."],
  ["second", "ˈsekənd", "", "секунда; второй", "Just a second!", "Секунду!"],
  ["month", "mʌnθ", "", "месяц", "I'll visit you next month.", "Я приеду к тебе в следующем месяце."],
  ["year", "jɪə", "jɪr", "год", "Happy New Year!", "С Новым годом!"],
  ["century", "ˈsentʃəri", "", "век, столетие", "This church is from the 12th century.", "Эта церковь XII века."],
  ["decade", "ˈdekeɪd", "", "десятилетие", "The city changed a lot in a decade.", "Город сильно изменился за десять лет."],
  ["period", "ˈpɪəriəd", "ˈpɪriəd", "период", "It was a difficult period.", "Это был трудный период."],
  ["date", "deɪt", "", "дата, число", "What's the date today?", "Какое сегодня число?"],
  ["calendar", "ˈkælɪndə", "ˈkælɪndər", "календарь", "Write it in your calendar.", "Запиши это в календарь."],
  ["noon", "nuːn", "", "полдень", "Let's meet at noon.", "Давай встретимся в полдень."],
  ["midnight", "ˈmɪdnaɪt", "", "полночь", "The party ended at midnight.", "Вечеринка закончилась в полночь."],
  ["afternoon", "ˌɑːftəˈnuːn", "ˌæftərˈnuːn", "день, после полудня", "I work in the afternoon.", "Я работаю во второй половине дня."],
  ["tonight", "təˈnaɪt", "", "сегодня вечером", "What are you doing tonight?", "Что ты делаешь сегодня вечером?"],
  ["today", "təˈdeɪ", "", "сегодня", "Today is my birthday.", "Сегодня мой день рождения."],
  ["Tuesday", "ˈtjuːzdeɪ", "ˈtuːzdeɪ", "вторник", "I have English on Tuesday.", "Во вторник у меня английский."],
  ["Wednesday", "ˈwenzdeɪ", "", "среда", "See you on Wednesday.", "Увидимся в среду."],
  ["Saturday", "ˈsætədeɪ", "ˈsætərdeɪ", "суббота", "On Saturday we sleep in.", "В субботу мы отсыпаемся."],
  ["Sunday", "ˈsʌndeɪ", "", "воскресенье", "The shop is closed on Sunday.", "В воскресенье магазин закрыт."],
  ["season", "ˈsiːzn", "", "время года; сезон", "Summer is my favourite season.", "Лето — моё любимое время года."],
  ["the past", "ðə ˈpɑːst", "ðə ˈpæst", "прошлое", "Don't live in the past.", "Не живи прошлым."],
  ["quarter", "ˈkwɔːtə", "ˈkwɔːrtər", "четверть", "It's a quarter past five.", "Сейчас четверть шестого."],
  ["age", "eɪdʒ", "", "возраст", "At the age of six I started school.", "В шесть лет я пошёл в школу."]
]},
{ id: 8, title: "Числа и месяцы", w: [
  ["six", "sɪks", "", "шесть", "I get up at six.", "Я встаю в шесть."],
  ["seven", "ˈsevn", "", "семь", "There are seven days in a week.", "В неделе семь дней."],
  ["eight", "eɪt", "", "восемь", "The shop opens at eight.", "Магазин открывается в восемь."],
  ["nine", "naɪn", "", "девять", "My son is nine.", "Моему сыну девять."],
  ["eleven", "ɪˈlevn", "", "одиннадцать", "The film starts at eleven.", "Фильм начинается в одиннадцать."],
  ["thirteen", "ˌθɜːˈtiːn", "ˌθɜːrˈtiːn", "тринадцать", "She is thirteen.", "Ей тринадцать."],
  ["fifteen", "ˌfɪfˈtiːn", "", "пятнадцать", "It takes fifteen minutes.", "Это занимает пятнадцать минут."],
  ["thirty", "ˈθɜːti", "ˈθɜːrti", "тридцать", "The ticket costs thirty dollars.", "Билет стоит тридцать долларов."],
  ["fifty", "ˈfɪfti", "", "пятьдесят", "My father is fifty.", "Моему отцу пятьдесят."],
  ["thousand", "ˈθaʊznd", "", "тысяча", "A thousand people came.", "Пришла тысяча человек."],
  ["million", "ˈmɪljən", "", "миллион", "The city has two million people.", "В городе два миллиона жителей."],
  ["zero", "ˈzɪərəʊ", "ˈzɪroʊ", "ноль", "It's zero degrees outside.", "На улице ноль градусов."],
  ["dozen", "ˈdʌzn", "", "дюжина (12)", "A dozen eggs, please.", "Дюжину яиц, пожалуйста."],
  ["third", "θɜːd", "θɜːrd", "третий", "I live on the third floor.", "Я живу на третьем этаже."],
  ["number", "ˈnʌmbə", "ˈnʌmbər", "число, номер", "What's your phone number?", "Какой у тебя номер телефона?"],
  ["February", "ˈfebruəri", "ˈfebrueri", "февраль", "February is a short month.", "Февраль — короткий месяц."],
  ["March", "mɑːtʃ", "mɑːrtʃ", "март", "Nauryz is in March.", "Наурыз в марте."],
  ["April", "ˈeɪprəl", "", "апрель", "It often rains in April.", "В апреле часто идут дожди."],
  ["sixty", "ˈsɪksti", "", "шестьдесят", "There are sixty minutes in an hour.", "В часе шестьдесят минут."],
  ["June", "dʒuːn", "", "июнь", "School ends in June.", "Учёба в школе заканчивается в июне."],
  ["August", "ˈɔːɡəst", "", "август", "We go to the sea in August.", "В августе мы едем на море."],
  ["September", "sepˈtembə", "sepˈtembər", "сентябрь", "University starts in September.", "Учёба в университете начинается в сентябре."],
  ["October", "ɒkˈtəʊbə", "ɑːkˈtoʊbər", "октябрь", "The leaves fall in October.", "В октябре опадают листья."],
  ["November", "nəʊˈvembə", "noʊˈvembər", "ноябрь", "It's cold in November.", "В ноябре холодно."],
  ["percent", "pəˈsent", "pərˈsent", "процент", "Fifty percent of students passed.", "Пятьдесят процентов студентов сдали."]
]},
{ id: 9, title: "Город: где что находится", w: [
  ["place", "pleɪs", "", "место", "This is a nice place.", "Это приятное место."],
  ["area", "ˈeəriə", "ˈeriə", "район; область", "I live in a quiet area.", "Я живу в тихом районе."],
  ["centre", "ˈsentə", "ˈsentər", "центр (US center)", "The hotel is in the city centre.", "Отель в центре города."],
  ["building", "ˈbɪldɪŋ", "", "здание", "That building is very old.", "То здание очень старое."],
  ["bank", "bæŋk", "", "банк", "The bank opens at nine.", "Банк открывается в девять."],
  ["market", "ˈmɑːkɪt", "ˈmɑːrkɪt", "рынок", "I buy fruit at the market.", "Я покупаю фрукты на рынке."],
  ["supermarket", "ˈsuːpəmɑːkɪt", "ˈsuːpərmɑːrkɪt", "супермаркет", "The supermarket is open until ten.", "Супермаркет работает до десяти."],
  ["library", "ˈlaɪbrəri", "ˈlaɪbreri", "библиотека", "I study in the library.", "Я занимаюсь в библиотеке."],
  ["church", "tʃɜːtʃ", "tʃɜːrtʃ", "церковь", "There is an old church in the village.", "В деревне есть старая церковь."],
  ["mosque", "mɒsk", "mɑːsk", "мечеть", "The mosque is beautiful at night.", "Ночью мечеть очень красивая."],
  ["park", "pɑːk", "pɑːrk", "парк", "Let's walk in the park.", "Давай погуляем в парке."],
  ["square", "skweə", "skwer", "площадь; квадрат", "Meet me in the main square.", "Встретимся на главной площади."],
  ["bridge", "brɪdʒ", "", "мост", "Walk across the bridge.", "Перейдите через мост."],
  ["river", "ˈrɪvə", "ˈrɪvər", "река", "The river is very wide here.", "Здесь река очень широкая."],
  ["sea", "siː", "", "море", "I can see the sea from my window.", "Из окна я вижу море."],
  ["beach", "biːtʃ", "", "пляж", "We spent the day on the beach.", "Мы провели день на пляже."],
  ["island", "ˈaɪlənd", "", "остров", "They live on a small island.", "Они живут на маленьком острове."],
  ["corner", "ˈkɔːnə", "ˈkɔːrnər", "угол", "The café is on the corner.", "Кафе на углу."],
  ["traffic lights", "ˈtræfɪk laɪts", "", "светофор", "Turn left at the traffic lights.", "На светофоре поверните налево."],
  ["bus stop", "ˈbʌs stɒp", "ˈbʌs stɑːp", "автобусная остановка", "I'm waiting at the bus stop.", "Я жду на остановке."],
  ["theatre", "ˈθɪətə", "ˈθiːətər", "театр (US theater)", "We went to the theatre on Friday.", "В пятницу мы ходили в театр."],
  ["restaurant", "ˈrestrɒnt", "ˈrestərɑːnt", "ресторан", "This restaurant is expensive.", "Этот ресторан дорогой."],
  ["café", "ˈkæfeɪ", "kæˈfeɪ", "кафе", "Let's have coffee in that café.", "Давай выпьем кофе в том кафе."],
  ["police", "pəˈliːs", "", "полиция", "Call the police!", "Вызовите полицию!"],
  ["post office", "ˈpəʊst ɒfɪs", "ˈpoʊst ɔːfɪs", "почта", "Where is the post office?", "Где почта?"]
]},
{ id: 10, title: "Транспорт и поездки", w: [
  ["car", "kɑː", "kɑːr", "машина", "We went there by car.", "Мы поехали туда на машине."],
  ["bus", "bʌs", "", "автобус", "I take the bus to work.", "Я езжу на работу на автобусе."],
  ["train", "treɪn", "", "поезд", "The train leaves at seven.", "Поезд отправляется в семь."],
  ["taxi", "ˈtæksi", "", "такси", "Let's take a taxi.", "Давай возьмём такси."],
  ["boat", "bəʊt", "boʊt", "лодка, катер", "We crossed the lake by boat.", "Мы переплыли озеро на лодке."],
  ["ship", "ʃɪp", "", "корабль", "The ship is very big.", "Корабль очень большой."],
  ["ferry", "ˈferi", "", "паром", "The ferry goes every hour.", "Паром ходит каждый час."],
  ["underground", "ˈʌndəɡraʊnd", "ˈʌndərɡraʊnd", "метро (брит.)", "The underground is the fastest way.", "Метро — самый быстрый способ."],
  ["flight", "flaɪt", "", "рейс, полёт", "My flight is at noon.", "Мой рейс в полдень."],
  ["gate", "ɡeɪt", "", "выход (в аэропорту); ворота", "Go to gate twelve.", "Пройдите к выходу двенадцать."],
  ["terminal", "ˈtɜːmɪnl", "ˈtɜːrmɪnl", "терминал", "Our flight leaves from Terminal 2.", "Наш рейс вылетает из терминала 2."],
  ["departure", "dɪˈpɑːtʃə", "dɪˈpɑːrtʃər", "отправление, вылет", "Check the departure time.", "Проверь время вылета."],
  ["suitcase", "ˈsuːtkeɪs", "", "чемодан", "My suitcase is too heavy.", "Мой чемодан слишком тяжёлый."],
  ["map", "mæp", "", "карта", "Can you show me on the map?", "Можете показать мне на карте?"],
  ["guide", "ɡaɪd", "", "гид; путеводитель", "Our guide speaks three languages.", "Наш гид говорит на трёх языках."],
  ["tourist", "ˈtʊərɪst", "ˈtʊrɪst", "турист", "The city is full of tourists.", "Город полон туристов."],
  ["passenger", "ˈpæsɪndʒə", "ˈpæsɪndʒər", "пассажир", "All passengers, please go to the gate.", "Всех пассажиров просим пройти к выходу."],
  ["tour", "tʊə", "tʊr", "экскурсия, тур", "We booked a city tour.", "Мы забронировали экскурсию по городу."],
  ["visa", "ˈviːzə", "", "виза", "Do I need a visa?", "Мне нужна виза?"],
  ["customs", "ˈkʌstəmz", "", "таможня", "We waited at customs for an hour.", "Мы час ждали на таможне."],
  ["reservation", "ˌrezəˈveɪʃn", "ˌrezərˈveɪʃn", "бронирование", "I have a reservation for two nights.", "У меня бронь на две ночи."],
  ["receipt", "rɪˈsiːt", "", "чек, квитанция", "Can I have a receipt, please?", "Можно мне чек, пожалуйста?"],
  ["cash", "kæʃ", "", "наличные", "Do you pay by card or cash?", "Вы платите картой или наличными?"],
  ["souvenir", "ˌsuːvəˈnɪə", "ˌsuːvəˈnɪr", "сувенир", "I bought a souvenir for my mum.", "Я купил маме сувенир."],
  ["currency", "ˈkʌrənsi", "ˈkɜːrənsi", "валюта", "What currency do they use in Turkey?", "Какая валюта в Турции?"]
]},
{ id: 11, title: "Отель и покупки", w: [
  ["reception", "rɪˈsepʃn", "", "стойка регистрации, ресепшен", "Leave the key at reception.", "Оставьте ключ на ресепшене."],
  ["single room", "ˌsɪŋɡl ˈruːm", "", "одноместный номер", "I'd like a single room.", "Мне одноместный номер, пожалуйста."],
  ["double room", "ˌdʌbl ˈruːm", "", "двухместный номер", "A double room for three nights, please.", "Двухместный номер на три ночи, пожалуйста."],
  ["towel", "ˈtaʊəl", "", "полотенце", "Can I have another towel?", "Можно ещё одно полотенце?"],
  ["lift", "lɪft", "", "лифт (брит.; US elevator)", "The lift is not working.", "Лифт не работает."],
  ["floor", "flɔː", "flɔːr", "этаж; пол", "My room is on the fifth floor.", "Мой номер на пятом этаже."],
  ["stairs", "steəz", "sterz", "лестница", "Take the stairs, it's faster.", "Иди по лестнице, так быстрее."],
  ["view", "vjuː", "", "вид", "The room has a sea view.", "Из номера вид на море."],
  ["bath", "bɑːθ", "bæθ", "ванна", "I want a room with a bath.", "Я хочу номер с ванной."],
  ["air conditioning", "ˈeə kənˌdɪʃənɪŋ", "ˈer kənˌdɪʃənɪŋ", "кондиционер", "The air conditioning is too loud.", "Кондиционер слишком шумный."],
  ["price", "praɪs", "", "цена", "What's the price of this jacket?", "Какая цена у этой куртки?"],
  ["bill", "bɪl", "", "счёт", "Can we have the bill, please?", "Можно счёт, пожалуйста?"],
  ["tip", "tɪp", "", "чаевые; совет", "We left a tip for the waiter.", "Мы оставили официанту чаевые."],
  ["discount", "ˈdɪskaʊnt", "", "скидка", "Is there a student discount?", "Есть скидка для студентов?"],
  ["sale", "seɪl", "", "распродажа; продажа", "These shoes were in the sale.", "Эти туфли были на распродаже."],
  ["size", "saɪz", "", "размер", "What size are you?", "Какой у вас размер?"],
  ["shopping", "ˈʃɒpɪŋ", "ˈʃɑːpɪŋ", "покупки, шопинг", "I go shopping on Saturdays.", "По субботам я хожу за покупками."],
  ["cashier", "kæˈʃɪə", "kæˈʃɪr", "кассир", "Pay the cashier, please.", "Оплатите на кассе, пожалуйста."],
  ["card", "kɑːd", "kɑːrd", "карта (банковская); открытка", "Can I pay by card?", "Можно оплатить картой?"],
  ["queue", "kjuː", "", "очередь (US line)", "There's a long queue.", "Там длинная очередь."],
  ["fitting room", "ˈfɪtɪŋ ruːm", "", "примерочная", "Where is the fitting room?", "Где примерочная?"],
  ["try on", "ˌtraɪ ˈɒn", "ˌtraɪ ˈɑːn", "примерять", "Can I try on this dress?", "Можно примерить это платье?"],
  ["wallet", "ˈwɒlɪt", "ˈwɑːlɪt", "кошелёк, бумажник", "I left my wallet at home.", "Я забыл кошелёк дома."],
  ["brand", "brænd", "", "бренд, марка", "What's your favourite brand?", "Какой твой любимый бренд?"],
  ["quality", "ˈkwɒləti", "ˈkwɑːləti", "качество", "The quality is very good.", "Качество очень хорошее."]
]},
{ id: 12, title: "Еда и напитки", w: [
  ["food", "fuːd", "", "еда", "I love Italian food.", "Я люблю итальянскую еду."],
  ["fruit", "fruːt", "", "фрукт(ы)", "Eat more fruit.", "Ешь больше фруктов."],
  ["orange", "ˈɒrɪndʒ", "ˈɔːrɪndʒ", "апельсин; оранжевый", "An orange a day is good for you.", "Апельсин в день — это полезно."],
  ["banana", "bəˈnɑːnə", "bəˈnænə", "банан", "I have a banana for breakfast.", "На завтрак я ем банан."],
  ["fish", "fɪʃ", "", "рыба", "We had fish for dinner.", "На ужин у нас была рыба."],
  ["chicken", "ˈtʃɪkɪn", "", "курица", "Chicken soup, please.", "Куриный суп, пожалуйста."],
  ["beef", "biːf", "", "говядина", "I don't eat beef.", "Я не ем говядину."],
  ["soup", "suːp", "", "суп", "This soup is too hot.", "Этот суп слишком горячий."],
  ["salad", "ˈsæləd", "", "салат", "A green salad, please.", "Зелёный салат, пожалуйста."],
  ["sandwich", "ˈsænwɪdʒ", "ˈsænwɪtʃ", "сэндвич, бутерброд", "I made a cheese sandwich.", "Я сделал бутерброд с сыром."],
  ["butter", "ˈbʌtə", "ˈbʌtər", "сливочное масло", "Bread and butter, please.", "Хлеб с маслом, пожалуйста."],
  ["salt", "sɔːlt", "", "соль", "Can you pass the salt?", "Передай, пожалуйста, соль."],
  ["pepper", "ˈpepə", "ˈpepər", "перец", "Add some salt and pepper.", "Добавь немного соли и перца."],
  ["oil", "ɔɪl", "", "масло (растительное); нефть", "Fry it in a little oil.", "Обжарь в небольшом количестве масла."],
  ["juice", "dʒuːs", "", "сок", "Orange juice, please.", "Апельсиновый сок, пожалуйста."],
  ["tea", "tiː", "", "чай", "Would you like some tea?", "Хочешь чаю?"],
  ["coffee", "ˈkɒfi", "ˈkɔːfi", "кофе", "I drink coffee every morning.", "Я пью кофе каждое утро."],
  ["cake", "keɪk", "", "торт, пирожное", "She made a birthday cake.", "Она испекла торт ко дню рождения."],
  ["chocolate", "ˈtʃɒklət", "ˈtʃɑːklət", "шоколад", "I can't live without chocolate.", "Я не могу жить без шоколада."],
  ["dessert", "dɪˈzɜːt", "dɪˈzɜːrt", "десерт", "What's for dessert?", "Что на десерт?"],
  ["lunch", "lʌntʃ", "", "обед", "Let's have lunch together.", "Давай пообедаем вместе."],
  ["dinner", "ˈdɪnə", "ˈdɪnər", "ужин", "Dinner is ready!", "Ужин готов!"],
  ["menu", "ˈmenjuː", "", "меню", "Can I see the menu, please?", "Можно меню, пожалуйста?"],
  ["plate", "pleɪt", "", "тарелка", "Put the plates on the table.", "Поставь тарелки на стол."],
  ["glass", "ɡlɑːs", "ɡlæs", "стакан; стекло", "A glass of water, please.", "Стакан воды, пожалуйста."]
]},
{ id: 13, title: "Дом и вещи", w: [
  ["thing", "θɪŋ", "", "вещь", "Put your things in the bag.", "Положи свои вещи в сумку."],
  ["stuff", "stʌf", "", "вещи, штуки (разг.)", "I have a lot of stuff to do.", "У меня куча дел."],
  ["wall", "wɔːl", "", "стена", "There's a picture on the wall.", "На стене картина."],
  ["roof", "ruːf", "", "крыша", "The roof is red.", "Крыша красная."],
  ["ceiling", "ˈsiːlɪŋ", "", "потолок", "The ceiling is very high.", "Потолок очень высокий."],
  ["carpet", "ˈkɑːpɪt", "ˈkɑːrpɪt", "ковёр", "The carpet is from Turkey.", "Ковёр из Турции."],
  ["mirror", "ˈmɪrə", "ˈmɪrər", "зеркало", "Look in the mirror.", "Посмотри в зеркало."],
  ["shelf", "ʃelf", "", "полка", "The books are on the shelf.", "Книги на полке."],
  ["cupboard", "ˈkʌbəd", "ˈkʌbərd", "шкаф (кухонный)", "The cups are in the cupboard.", "Чашки в шкафу."],
  ["wardrobe", "ˈwɔːdrəʊb", "ˈwɔːrdroʊb", "платяной шкаф", "My clothes are in the wardrobe.", "Моя одежда в шкафу."],
  ["pillow", "ˈpɪləʊ", "ˈpɪloʊ", "подушка", "I need a soft pillow.", "Мне нужна мягкая подушка."],
  ["blanket", "ˈblæŋkɪt", "", "одеяло, плед", "It's cold, take a blanket.", "Холодно, возьми плед."],
  ["sink", "sɪŋk", "", "раковина", "The dishes are in the sink.", "Посуда в раковине."],
  ["tap", "tæp", "", "кран (US faucet)", "Turn off the tap.", "Закрой кран."],
  ["light", "laɪt", "", "свет; лёгкий", "Turn on the light, please.", "Включи, пожалуйста, свет."],
  ["clock", "klɒk", "klɑːk", "часы (настенные)", "The clock is five minutes fast.", "Часы спешат на пять минут."],
  ["computer", "kəmˈpjuːtə", "kəmˈpjuːtər", "компьютер", "My computer is very slow.", "Мой компьютер очень медленный."],
  ["laptop", "ˈlæptɒp", "ˈlæptɑːp", "ноутбук", "I do my homework on my laptop.", "Я делаю домашку на ноутбуке."],
  ["television", "ˈtelɪvɪʒn", "", "телевизор (TV)", "We don't watch television.", "Мы не смотрим телевизор."],
  ["fork", "fɔːk", "fɔːrk", "вилка", "I need a fork.", "Мне нужна вилка."],
  ["knife", "naɪf", "", "нож", "Be careful, the knife is sharp.", "Осторожно, нож острый."],
  ["spoon", "spuːn", "", "ложка", "Soup with a spoon, please.", "Суп — ложкой, пожалуйста."],
  ["bottle", "ˈbɒtl", "ˈbɑːtl", "бутылка", "A bottle of water, please.", "Бутылку воды, пожалуйста."],
  ["plant", "plɑːnt", "plænt", "растение", "Water the plants, please.", "Полей, пожалуйста, растения."],
  ["gift", "ɡɪft", "", "подарок", "Thank you for the gift!", "Спасибо за подарок!"]
]}
];

EN.packs.push(
{ id: 14, title: "Одежда и внешний вид", w: [
  ["clothes", "kləʊðz", "kloʊðz", "одежда", "I need new clothes.", "Мне нужна новая одежда."],
  ["trousers", "ˈtraʊzəz", "ˈtraʊzərz", "брюки (US pants)", "These trousers are too long.", "Эти брюки слишком длинные."],
  ["dress", "dres", "", "платье", "She wore a blue dress.", "На ней было синее платье."],
  ["skirt", "skɜːt", "skɜːrt", "юбка", "This skirt is too short.", "Эта юбка слишком короткая."],
  ["shirt", "ʃɜːt", "ʃɜːrt", "рубашка", "He's wearing a white shirt.", "На нём белая рубашка."],
  ["sweater", "ˈswetə", "ˈswetər", "свитер", "Take a sweater, it's cold.", "Возьми свитер, холодно."],
  ["jeans", "dʒiːnz", "", "джинсы", "I usually wear jeans.", "Обычно я ношу джинсы."],
  ["hat", "hæt", "", "шляпа, шапка", "Don't forget your hat.", "Не забудь шапку."],
  ["scarf", "skɑːf", "skɑːrf", "шарф", "My grandma made this scarf.", "Этот шарф связала бабушка."],
  ["gloves", "ɡlʌvz", "", "перчатки", "I lost my gloves.", "Я потерял перчатки."],
  ["boots", "buːts", "", "ботинки, сапоги", "I need winter boots.", "Мне нужны зимние ботинки."],
  ["trainers", "ˈtreɪnəz", "ˈtreɪnərz", "кроссовки (US sneakers)", "I run in my old trainers.", "Я бегаю в старых кроссовках."],
  ["socks", "sɒks", "sɑːks", "носки", "Where are my socks?", "Где мои носки?"],
  ["belt", "belt", "", "ремень, пояс", "This belt is leather.", "Этот ремень кожаный."],
  ["ring", "rɪŋ", "", "кольцо", "What a beautiful ring!", "Какое красивое кольцо!"],
  ["leather", "ˈleðə", "ˈleðər", "кожа (материал)", "A leather jacket.", "Кожаная куртка."],
  ["cotton", "ˈkɒtn", "ˈkɑːtn", "хлопок", "This T-shirt is cotton.", "Эта футболка из хлопка."],
  ["wool", "wʊl", "", "шерсть", "A warm wool sweater.", "Тёплый шерстяной свитер."],
  ["fashion", "ˈfæʃn", "", "мода", "She works in fashion.", "Она работает в сфере моды."],
  ["style", "staɪl", "", "стиль", "I like your style.", "Мне нравится твой стиль."],
  ["colour", "ˈkʌlə", "ˈkʌlər", "цвет (US color)", "What colour is your car?", "Какого цвета твоя машина?"],
  ["pretty", "ˈprɪti", "", "симпатичный, милый", "What a pretty dress!", "Какое милое платье!"],
  ["ugly", "ˈʌɡli", "", "некрасивый, уродливый", "That building is ugly.", "Это здание некрасивое."],
  ["handsome", "ˈhænsəm", "", "красивый (о мужчине)", "Her brother is handsome.", "Её брат красивый."],
  ["uniform", "ˈjuːnɪfɔːm", "ˈjuːnɪfɔːrm", "форма, униформа", "Nurses wear a uniform.", "Медсёстры носят форму."]
]},
{ id: 15, title: "Цвета, формы и размеры", w: [
  ["white", "waɪt", "", "белый", "Snow is white.", "Снег белый."],
  ["black", "blæk", "", "чёрный", "I have a black cat.", "У меня чёрная кошка."],
  ["red", "red", "", "красный", "She has a red bag.", "У неё красная сумка."],
  ["blue", "bluː", "", "синий, голубой", "The sky is blue today.", "Сегодня небо голубое."],
  ["green", "ɡriːn", "", "зелёный", "Green tea, please.", "Зелёный чай, пожалуйста."],
  ["yellow", "ˈjeləʊ", "ˈjeloʊ", "жёлтый", "Taxis in New York are yellow.", "Такси в Нью-Йорке жёлтые."],
  ["brown", "braʊn", "", "коричневый", "He has brown eyes.", "У него карие глаза."],
  ["grey", "ɡreɪ", "", "серый (US gray)", "It's a grey day.", "Сегодня пасмурный день."],
  ["pink", "pɪŋk", "", "розовый", "Pink is my favourite colour.", "Розовый — мой любимый цвет."],
  ["purple", "ˈpɜːpl", "ˈpɜːrpl", "фиолетовый", "She painted the wall purple.", "Она покрасила стену в фиолетовый."],
  ["bright", "braɪt", "", "яркий; светлый", "The room is very bright.", "Комната очень светлая."],
  ["round", "raʊnd", "", "круглый", "We have a round table.", "У нас круглый стол."],
  ["wide", "waɪd", "", "широкий", "The road is very wide.", "Дорога очень широкая."],
  ["narrow", "ˈnærəʊ", "ˈnæroʊ", "узкий", "The streets are narrow.", "Улицы узкие."],
  ["heavy", "ˈhevi", "", "тяжёлый", "This box is heavy.", "Эта коробка тяжёлая."],
  ["full", "fʊl", "", "полный; сытый", "The bus is full.", "Автобус полный."],
  ["empty", "ˈempti", "", "пустой", "The fridge is empty.", "Холодильник пустой."],
  ["deep", "diːp", "", "глубокий", "The lake is very deep.", "Озеро очень глубокое."],
  ["huge", "hjuːdʒ", "", "огромный", "They have a huge house.", "У них огромный дом."],
  ["large", "lɑːdʒ", "lɑːrdʒ", "большой (размер)", "A large coffee, please.", "Большой кофе, пожалуйста."],
  ["tiny", "ˈtaɪni", "", "крошечный", "My room is tiny.", "Моя комната крошечная."],
  ["high", "haɪ", "", "высокий (о предметах, горах)", "The mountain is very high.", "Гора очень высокая."],
  ["low", "ləʊ", "loʊ", "низкий", "Prices are low here.", "Здесь низкие цены."],
  ["thick", "θɪk", "", "толстый, густой", "A thick book.", "Толстая книга."],
  ["thin", "θɪn", "", "тонкий; худой", "The walls are thin.", "Стены тонкие."]
]},
{ id: 16, title: "Характер и чувства", w: [
  ["kind", "kaɪnd", "", "добрый", "Thank you, you are very kind.", "Спасибо, вы очень добры."],
  ["friendly", "ˈfrendli", "", "дружелюбный", "The people here are friendly.", "Люди здесь дружелюбные."],
  ["polite", "pəˈlaɪt", "", "вежливый", "Be polite to your teachers.", "Будь вежлив с учителями."],
  ["rude", "ruːd", "", "грубый", "The waiter was rude.", "Официант был грубым."],
  ["shy", "ʃaɪ", "", "застенчивый", "He is shy with new people.", "Он стесняется новых людей."],
  ["calm", "kɑːm", "", "спокойный", "Stay calm.", "Сохраняй спокойствие."],
  ["angry", "ˈæŋɡri", "", "злой, сердитый", "Why are you angry?", "Почему ты злишься?"],
  ["bored", "bɔːd", "bɔːrd", "скучающий (мне скучно)", "I'm bored. Let's go out.", "Мне скучно. Пойдём куда-нибудь."],
  ["excited", "ɪkˈsaɪtɪd", "", "взволнованный (радостно)", "I'm so excited about the trip!", "Я так жду эту поездку!"],
  ["surprised", "səˈpraɪzd", "sərˈpraɪzd", "удивлённый", "I was surprised to see him.", "Я удивился, увидев его."],
  ["shocked", "ʃɒkt", "ʃɑːkt", "потрясённый, в шоке", "We were shocked by the news.", "Новость нас потрясла."],
  ["worried", "ˈwʌrid", "ˈwɜːrid", "обеспокоенный", "I'm worried about the exam.", "Я переживаю из-за экзамена."],
  ["lonely", "ˈləʊnli", "ˈloʊnli", "одинокий", "She feels lonely in the new city.", "Ей одиноко в новом городе."],
  ["proud", "praʊd", "", "гордый", "I'm proud of you!", "Я тобой горжусь!"],
  ["lazy", "ˈleɪzi", "", "ленивый", "Don't be lazy, do your homework.", "Не ленись, делай домашку."],
  ["clever", "ˈklevə", "ˈklevər", "умный, сообразительный", "What a clever idea!", "Какая умная идея!"],
  ["honest", "ˈɒnɪst", "ˈɑːnɪst", "честный", "To be honest, I don't like it.", "Честно говоря, мне это не нравится."],
  ["brave", "breɪv", "", "смелый", "You were very brave.", "Ты был очень смелым."],
  ["curious", "ˈkjʊəriəs", "ˈkjʊriəs", "любопытный", "Children are curious.", "Дети любопытные."],
  ["careful", "ˈkeəfl", "ˈkerfl", "осторожный, аккуратный", "Be careful on the road!", "Будь осторожен на дороге!"],
  ["helpful", "ˈhelpfl", "", "полезный; отзывчивый", "Thanks, that was very helpful.", "Спасибо, это очень помогло."],
  ["serious", "ˈsɪəriəs", "ˈsɪriəs", "серьёзный", "Are you serious?", "Ты серьёзно?"],
  ["relaxed", "rɪˈlækst", "", "расслабленный, спокойный", "I feel relaxed after yoga.", "После йоги я чувствую себя расслабленно."],
  ["upset", "ʌpˈset", "", "расстроенный", "She's upset because she lost her phone.", "Она расстроена, потому что потеряла телефон."],
  ["jealous", "ˈdʒeləs", "", "ревнивый; завидующий", "I'm a bit jealous of your holiday!", "Я немного завидую твоему отпуску!"]
]},
{ id: 17, title: "Оценки: интересно, странно, важно", w: [
  ["important", "ɪmˈpɔːtnt", "ɪmˈpɔːrtnt", "важный", "This is very important.", "Это очень важно."],
  ["interesting", "ˈɪntrəstɪŋ", "", "интересный", "What an interesting book!", "Какая интересная книга!"],
  ["boring", "ˈbɔːrɪŋ", "", "скучный", "The lecture was boring.", "Лекция была скучной."],
  ["wonderful", "ˈwʌndəfl", "ˈwʌndərfl", "чудесный", "We had a wonderful time.", "Мы чудесно провели время."],
  ["terrible", "ˈterəbl", "", "ужасный", "The weather is terrible.", "Погода ужасная."],
  ["great", "ɡreɪt", "", "отличный; великий", "That's a great idea!", "Отличная идея!"],
  ["nice", "naɪs", "", "приятный, хороший", "Nice to meet you!", "Приятно познакомиться!"],
  ["perfect", "ˈpɜːfɪkt", "ˈpɜːrfɪkt", "идеальный", "Your English is perfect!", "У тебя идеальный английский!"],
  ["strange", "streɪndʒ", "", "странный", "What a strange noise!", "Какой странный звук!"],
  ["weird", "wɪəd", "wɪrd", "странный (разг.)", "That's weird.", "Это странно."],
  ["normal", "ˈnɔːml", "ˈnɔːrml", "нормальный, обычный", "It's normal to make mistakes.", "Ошибаться — это нормально."],
  ["different", "ˈdɪfrənt", "", "разный, другой", "We are very different.", "Мы очень разные."],
  ["same", "seɪm", "", "тот же самый", "We have the same phone.", "У нас одинаковые телефоны."],
  ["similar", "ˈsɪmələ", "ˈsɪmələr", "похожий", "Your bag is similar to mine.", "Твоя сумка похожа на мою."],
  ["possible", "ˈpɒsəbl", "ˈpɑːsəbl", "возможный", "Is it possible to change the date?", "Можно ли изменить дату?"],
  ["impossible", "ɪmˈpɒsəbl", "ɪmˈpɑːsəbl", "невозможный", "Nothing is impossible.", "Нет ничего невозможного."],
  ["necessary", "ˈnesəsəri", "ˈnesəseri", "необходимый", "Is it necessary to book?", "Нужно ли бронировать?"],
  ["available", "əˈveɪləbl", "", "доступный, свободный", "Is this room available?", "Этот номер свободен?"],
  ["dangerous", "ˈdeɪndʒərəs", "", "опасный", "This road is dangerous at night.", "Эта дорога опасна ночью."],
  ["safe", "seɪf", "", "безопасный", "Is it safe to swim here?", "Здесь безопасно купаться?"],
  ["popular", "ˈpɒpjələ", "ˈpɑːpjələr", "популярный", "This café is very popular.", "Это кафе очень популярное."],
  ["famous", "ˈfeɪməs", "", "знаменитый", "Paris is famous for its museums.", "Париж знаменит своими музеями."],
  ["special", "ˈspeʃl", "", "особенный", "Today is a special day.", "Сегодня особенный день."],
  ["simple", "ˈsɪmpl", "", "простой", "The rule is simple.", "Правило простое."],
  ["correct", "kəˈrekt", "", "правильный", "Your answer is correct.", "Твой ответ правильный."]
]},
{ id: 18, title: "Какой? Новый, старый, свой", w: [
  ["new", "njuː", "nuː", "новый", "I have a new job.", "У меня новая работа."],
  ["modern", "ˈmɒdn", "ˈmɑːdərn", "современный", "The building is very modern.", "Здание очень современное."],
  ["traditional", "trəˈdɪʃənl", "", "традиционный", "We cooked a traditional dish.", "Мы приготовили традиционное блюдо."],
  ["recent", "ˈriːsnt", "", "недавний, последний", "This is a recent photo.", "Это недавнее фото."],
  ["common", "ˈkɒmən", "ˈkɑːmən", "распространённый, общий", "This is a common mistake.", "Это частая ошибка."],
  ["rare", "reə", "rer", "редкий", "This bird is very rare.", "Эта птица очень редкая."],
  ["rich", "rɪtʃ", "", "богатый", "He is rich, but not happy.", "Он богат, но не счастлив."],
  ["poor", "pɔː", "pʊr", "бедный", "It's a poor area.", "Это бедный район."],
  ["dirty", "ˈdɜːti", "ˈdɜːrti", "грязный", "My shoes are dirty.", "Моя обувь грязная."],
  ["quiet", "ˈkwaɪət", "", "тихий", "The library is quiet.", "В библиотеке тихо."],
  ["loud", "laʊd", "", "громкий", "The music is too loud.", "Музыка слишком громкая."],
  ["noisy", "ˈnɔɪzi", "", "шумный", "Our street is noisy.", "Наша улица шумная."],
  ["slow", "sləʊ", "sloʊ", "медленный", "The internet is slow today.", "Сегодня интернет медленный."],
  ["quick", "kwɪk", "", "быстрый", "Can I ask a quick question?", "Можно быстрый вопрос?"],
  ["fresh", "freʃ", "", "свежий", "The bread is fresh.", "Хлеб свежий."],
  ["natural", "ˈnætʃrəl", "", "натуральный, естественный", "It's natural to feel nervous.", "Волноваться — естественно."],
  ["real", "ˈriːəl", "", "настоящий, реальный", "Is this a real diamond?", "Это настоящий бриллиант?"],
  ["main", "meɪn", "", "главный, основной", "This is the main street.", "Это главная улица."],
  ["whole", "həʊl", "hoʊl", "целый, весь", "I ate the whole cake.", "Я съел весь торт."],
  ["certain", "ˈsɜːtn", "ˈsɜːrtn", "уверенный; определённый", "Are you certain?", "Ты уверен?"],
  ["particular", "pəˈtɪkjələ", "pərˈtɪkjələr", "особый, конкретный", "Is there a particular reason?", "Есть какая-то конкретная причина?"],
  ["own", "əʊn", "oʊn", "собственный", "I want my own room.", "Я хочу свою собственную комнату."],
  ["local", "ˈləʊkl", "ˈloʊkl", "местный", "Try the local food.", "Попробуй местную еду."],
  ["international", "ˌɪntəˈnæʃənl", "ˌɪntərˈnæʃənl", "международный", "It's an international school.", "Это международная школа."],
  ["public", "ˈpʌblɪk", "", "общественный, публичный", "I use public transport.", "Я пользуюсь общественным транспортом."]
]},
{ id: 19, title: "Главные глаголы", w: [
  ["be", "biː", "", "быть", "I want to be a doctor.", "Я хочу быть врачом."],
  ["have", "hæv", "", "иметь", "I have two brothers.", "У меня два брата."],
  ["do", "duː", "", "делать", "What do you do?", "Чем ты занимаешься?"],
  ["say", "seɪ", "", "сказать, говорить", "What did she say?", "Что она сказала?"],
  ["make", "meɪk", "", "делать, создавать", "I'll make some tea.", "Я сделаю чай."],
  ["get", "ɡet", "", "получать; добираться; становиться", "How do I get to the station?", "Как мне добраться до вокзала?"],
  ["see", "siː", "", "видеть", "I can see the sea!", "Я вижу море!"],
  ["come", "kʌm", "", "приходить", "Come to my party!", "Приходи на мою вечеринку!"],
  ["put", "pʊt", "", "класть, ставить", "Put your bag here.", "Положи сумку сюда."],
  ["try", "traɪ", "", "пробовать, стараться", "Try this cake!", "Попробуй этот торт!"],
  ["use", "juːz", "", "использовать", "Can I use your phone?", "Можно воспользоваться твоим телефоном?"],
  ["keep", "kiːp", "", "хранить; продолжать", "Keep the change.", "Сдачи не надо."],
  ["let", "let", "", "позволять; давай(те)", "Let me help you.", "Давай я тебе помогу."],
  ["bring", "brɪŋ", "", "приносить", "Bring your passport.", "Возьмите с собой паспорт."],
  ["begin", "bɪˈɡɪn", "", "начинать", "The lesson begins at nine.", "Урок начинается в девять."],
  ["mean", "miːn", "", "значить, иметь в виду", "What does this word mean?", "Что значит это слово?"],
  ["seem", "siːm", "", "казаться", "You seem tired.", "Ты кажешься уставшим."],
  ["feel", "fiːl", "", "чувствовать", "I feel much better.", "Я чувствую себя намного лучше."],
  ["hear", "hɪə", "hɪr", "слышать", "Can you hear me?", "Ты меня слышишь?"],
  ["hold", "həʊld", "hoʊld", "держать", "Hold my hand.", "Держи меня за руку."],
  ["turn", "tɜːn", "tɜːrn", "поворачивать", "Turn right at the bank.", "У банка поверните направо."],
  ["follow", "ˈfɒləʊ", "ˈfɑːloʊ", "следовать, идти за", "Follow me, please.", "Следуйте за мной, пожалуйста."],
  ["believe", "bɪˈliːv", "", "верить", "I don't believe it!", "Не могу поверить!"],
  ["hope", "həʊp", "hoʊp", "надеяться", "I hope you're well.", "Надеюсь, у тебя всё хорошо."],
  ["change", "tʃeɪndʒ", "", "менять(ся); сдача", "I want to change my ticket.", "Я хочу поменять билет."]
]},
{ id: 20, title: "Действия: платить, чинить, искать", w: [
  ["pay", "peɪ", "", "платить", "Can I pay by card?", "Можно заплатить картой?"],
  ["cost", "kɒst", "kɔːst", "стоить", "How much does it cost?", "Сколько это стоит?"],
  ["sell", "sel", "", "продавать", "They sell fresh bread.", "Они продают свежий хлеб."],
  ["borrow", "ˈbɒrəʊ", "ˈbɑːroʊ", "брать взаймы", "Can I borrow your pen?", "Можно одолжить твою ручку?"],
  ["lend", "lend", "", "давать взаймы", "Can you lend me ten dollars?", "Можешь одолжить мне десять долларов?"],
  ["build", "bɪld", "", "строить", "They are building a new school.", "Они строят новую школу."],
  ["break", "breɪk", "", "ломать, разбивать", "Don't break the glass!", "Не разбей стакан!"],
  ["fix", "fɪks", "", "чинить", "Can you fix my bike?", "Можешь починить мой велосипед?"],
  ["cut", "kʌt", "", "резать", "Cut the bread, please.", "Порежь хлеб, пожалуйста."],
  ["fall", "fɔːl", "", "падать", "Be careful, don't fall!", "Осторожно, не упади!"],
  ["throw", "θrəʊ", "θroʊ", "бросать", "Throw me the ball!", "Брось мне мяч!"],
  ["push", "pʊʃ", "", "толкать", "Push the door.", "Толкните дверь."],
  ["pull", "pʊl", "", "тянуть", "Pull, don't push.", "Тяните, а не толкайте."],
  ["pick up", "ˌpɪk ˈʌp", "", "поднимать; забирать", "I'll pick you up at six.", "Я заберу тебя в шесть."],
  ["put on", "ˌpʊt ˈɒn", "ˌpʊt ˈɑːn", "надевать", "Put on your coat.", "Надень пальто."],
  ["take off", "ˌteɪk ˈɒf", "ˌteɪk ˈɔːf", "снимать (одежду); взлетать", "The plane takes off at noon.", "Самолёт взлетает в полдень."],
  ["turn on", "ˌtɜːn ˈɒn", "ˌtɜːrn ˈɑːn", "включать", "Turn on the TV.", "Включи телевизор."],
  ["turn off", "ˌtɜːn ˈɒf", "ˌtɜːrn ˈɔːf", "выключать", "Turn off your phone, please.", "Выключите, пожалуйста, телефон."],
  ["look for", "ˈlʊk fɔː", "ˈlʊk fɔːr", "искать", "I'm looking for my keys.", "Я ищу ключи."],
  ["give up", "ˌɡɪv ˈʌp", "", "сдаваться; бросать (привычку)", "Don't give up!", "Не сдавайся!"],
  ["find out", "ˌfaɪnd ˈaʊt", "", "узнавать, выяснять", "I want to find out the truth.", "Я хочу узнать правду."],
  ["fill in", "ˌfɪl ˈɪn", "", "заполнять (бланк)", "Fill in this form, please.", "Заполните эту форму, пожалуйста."],
  ["hurry", "ˈhʌri", "ˈhɜːri", "спешить", "Hurry up, we're late!", "Поторопись, мы опаздываем!"],
  ["return", "rɪˈtɜːn", "rɪˈtɜːrn", "возвращать(ся)", "I need to return this book.", "Мне нужно вернуть эту книгу."],
  ["set", "set", "", "ставить, устанавливать", "Set your alarm for seven.", "Поставь будильник на семь."]
]},
{ id: 21, title: "Общаемся: объяснить, предложить, извиниться", w: [
  ["agree", "əˈɡriː", "", "соглашаться", "I agree with you.", "Я с тобой согласен."],
  ["disagree", "ˌdɪsəˈɡriː", "", "не соглашаться", "I'm sorry, but I disagree.", "Извини, но я не согласен."],
  ["explain", "ɪkˈspleɪn", "", "объяснять", "Can you explain this rule?", "Можешь объяснить это правило?"],
  ["describe", "dɪˈskraɪb", "", "описывать", "Describe your best friend.", "Опиши своего лучшего друга."],
  ["discuss", "dɪˈskʌs", "", "обсуждать", "Let's discuss it tomorrow.", "Давай обсудим это завтра."],
  ["suggest", "səˈdʒest", "səɡˈdʒest", "предлагать (идею)", "I suggest we take a taxi.", "Предлагаю взять такси."],
  ["offer", "ˈɒfə", "ˈɔːfər", "предлагать (дать)", "She offered me a cup of tea.", "Она предложила мне чашку чая."],
  ["invite", "ɪnˈvaɪt", "", "приглашать", "I want to invite you to my party.", "Я хочу пригласить тебя на вечеринку."],
  ["allow", "əˈlaʊ", "", "разрешать", "Dogs are not allowed here.", "С собаками сюда нельзя."],
  ["refuse", "rɪˈfjuːz", "", "отказываться", "He refused to help.", "Он отказался помогать."],
  ["apologise", "əˈpɒlədʒaɪz", "əˈpɑːlədʒaɪz", "извиняться (US apologize)", "I apologise for being late.", "Прошу прощения за опоздание."],
  ["complain", "kəmˈpleɪn", "", "жаловаться", "She always complains about the weather.", "Она всегда жалуется на погоду."],
  ["argue", "ˈɑːɡjuː", "ˈɑːrɡjuː", "спорить, ссориться", "Please don't argue.", "Пожалуйста, не спорьте."],
  ["joke", "dʒəʊk", "dʒoʊk", "шутить; шутка", "I'm only joking!", "Я просто шучу!"],
  ["wonder", "ˈwʌndə", "ˈwʌndər", "интересоваться, задаваться вопросом", "I wonder what time it is.", "Интересно, который час."],
  ["guess", "ɡes", "", "угадывать; предполагать", "Guess who called me!", "Угадай, кто мне звонил!"],
  ["imagine", "ɪˈmædʒɪn", "", "представлять", "Imagine you are in London.", "Представь, что ты в Лондоне."],
  ["expect", "ɪkˈspekt", "", "ожидать", "I didn't expect to see you here.", "Не ожидал тебя здесь увидеть."],
  ["consider", "kənˈsɪdə", "kənˈsɪdər", "рассматривать, обдумывать", "I'm considering a new job.", "Я подумываю о новой работе."],
  ["compare", "kəmˈpeə", "kəmˈper", "сравнивать", "Compare these two prices.", "Сравни эти две цены."],
  ["choose", "tʃuːz", "", "выбирать", "Choose one answer.", "Выберите один ответ."],
  ["worry", "ˈwʌri", "ˈwɜːri", "волноваться", "Don't worry, be happy.", "Не волнуйся, будь счастлив."],
  ["trust", "trʌst", "", "доверять; доверие", "I trust my friends.", "Я доверяю своим друзьям."],
  ["care", "keə", "ker", "заботиться; беспокоиться", "I care about you.", "Ты мне небезразличен."],
  ["mention", "ˈmenʃn", "", "упоминать", "Did she mention the meeting?", "Она упоминала встречу?"]
]},
{ id: 22, title: "Жизнь и движения", w: [
  ["live", "lɪv", "", "жить", "Where do you live?", "Где ты живёшь?"],
  ["die", "daɪ", "", "умирать", "My plants died in winter.", "Мои растения погибли зимой."],
  ["get married", "ˌɡet ˈmærid", "", "пожениться, выйти замуж", "They got married last year.", "Они поженились в прошлом году."],
  ["love", "lʌv", "", "любить; любовь", "I love my family.", "Я люблю свою семью."],
  ["hate", "heɪt", "", "ненавидеть", "I hate waiting.", "Ненавижу ждать."],
  ["smile", "smaɪl", "", "улыбаться; улыбка", "Smile for the photo!", "Улыбнитесь для фото!"],
  ["cry", "kraɪ", "", "плакать", "The baby is crying.", "Малыш плачет."],
  ["meet", "miːt", "", "встречать(ся), знакомиться", "Let's meet at the café.", "Давай встретимся в кафе."],
  ["stand", "stænd", "", "стоять", "Please stand here.", "Пожалуйста, встаньте здесь."],
  ["sit", "sɪt", "", "сидеть", "Sit down, please.", "Садитесь, пожалуйста."],
  ["lie down", "ˌlaɪ ˈdaʊn", "", "ложиться", "I need to lie down.", "Мне нужно прилечь."],
  ["fly", "flaɪ", "", "летать", "We fly to Istanbul tomorrow.", "Завтра мы летим в Стамбул."],
  ["climb", "klaɪm", "", "подниматься, карабкаться", "We climbed the mountain.", "Мы поднялись на гору."],
  ["jump", "dʒʌmp", "", "прыгать", "The dog jumped into the water.", "Собака прыгнула в воду."],
  ["reach", "riːtʃ", "", "достигать, дотягиваться", "We reached the hotel at night.", "Мы добрались до отеля ночью."],
  ["stop", "stɒp", "stɑːp", "останавливать(ся); прекращать", "Stop the car, please.", "Остановите машину, пожалуйста."],
  ["continue", "kənˈtɪnjuː", "", "продолжать", "Let's continue tomorrow.", "Продолжим завтра."],
  ["grow", "ɡrəʊ", "ɡroʊ", "расти; выращивать", "We grow tomatoes in the garden.", "Мы выращиваем помидоры в саду."],
  ["add", "æd", "", "добавлять", "Add some sugar.", "Добавь немного сахара."],
  ["include", "ɪnˈkluːd", "", "включать (в состав)", "Is breakfast included?", "Завтрак включён?"],
  ["create", "kriˈeɪt", "", "создавать", "She created her own website.", "Она создала собственный сайт."],
  ["avoid", "əˈvɔɪd", "", "избегать", "Avoid the city centre at rush hour.", "Избегайте центра в час пик."],
  ["appear", "əˈpɪə", "əˈpɪr", "появляться", "A message appeared on the screen.", "На экране появилось сообщение."],
  ["disappear", "ˌdɪsəˈpɪə", "ˌdɪsəˈpɪr", "исчезать", "My keys disappeared!", "Мои ключи исчезли!"],
  ["save", "seɪv", "", "сохранять; копить; спасать", "I'm saving money for a trip.", "Я коплю деньги на поездку."]
]},
{ id: 23, title: "Работа и учёба", w: [
  ["task", "tɑːsk", "tæsk", "задача, задание", "I have a difficult task.", "У меня трудная задача."],
  ["project", "ˈprɒdʒekt", "ˈprɑːdʒekt", "проект", "We are working on a new project.", "Мы работаем над новым проектом."],
  ["deadline", "ˈdedlaɪn", "", "крайний срок, дедлайн", "The deadline is Friday.", "Дедлайн — пятница."],
  ["meeting", "ˈmiːtɪŋ", "", "встреча, собрание", "I have a meeting at ten.", "У меня встреча в десять."],
  ["interview", "ˈɪntəvjuː", "ˈɪntərvjuː", "собеседование; интервью", "I have a job interview tomorrow.", "Завтра у меня собеседование."],
  ["career", "kəˈrɪə", "kəˈrɪr", "карьера", "She wants a career in medicine.", "Она хочет сделать карьеру в медицине."],
  ["company", "ˈkʌmpəni", "", "компания", "He works for a big company.", "Он работает в большой компании."],
  ["business", "ˈbɪznəs", "", "бизнес, дело", "My parents have a small business.", "У моих родителей небольшой бизнес."],
  ["manager", "ˈmænɪdʒə", "ˈmænɪdʒər", "менеджер, руководитель", "I want to speak to the manager.", "Я хочу поговорить с менеджером."],
  ["employee", "ɪmˈplɔɪiː", "", "сотрудник", "The company has fifty employees.", "В компании пятьдесят сотрудников."],
  ["salary", "ˈsæləri", "", "зарплата", "The salary is paid every month.", "Зарплату платят каждый месяц."],
  ["skill", "skɪl", "", "навык", "Speaking is an important skill.", "Говорение — важный навык."],
  ["goal", "ɡəʊl", "ɡoʊl", "цель; гол", "My goal is to speak English.", "Моя цель — говорить по-английски."],
  ["report", "rɪˈpɔːt", "rɪˈpɔːrt", "отчёт, доклад", "I need to write a report.", "Мне нужно написать отчёт."],
  ["education", "ˌedʒuˈkeɪʃn", "", "образование", "Education is very important.", "Образование очень важно."],
  ["knowledge", "ˈnɒlɪdʒ", "ˈnɑːlɪdʒ", "знания", "Test your knowledge.", "Проверь свои знания."],
  ["research", "rɪˈsɜːtʃ", "ˈriːsɜːrtʃ", "исследование", "She does research on the heart.", "Она исследует сердце."],
  ["subject", "ˈsʌbdʒɪkt", "", "предмет; тема", "My favourite subject is biology.", "Мой любимый предмет — биология."],
  ["homework", "ˈhəʊmwɜːk", "ˈhoʊmwɜːrk", "домашнее задание", "I always do my homework.", "Я всегда делаю домашнее задание."],
  ["course", "kɔːs", "kɔːrs", "курс", "I'm taking an English course.", "Я прохожу курс английского."],
  ["class", "klɑːs", "klæs", "занятие; класс", "The class starts at nine.", "Занятие начинается в девять."],
  ["degree", "dɪˈɡriː", "", "степень (диплом); градус", "She has a degree in medicine.", "У неё медицинское образование."],
  ["test", "test", "", "тест, контрольная", "We have a test on Monday.", "В понедельник у нас контрольная."],
  ["mark", "mɑːk", "mɑːrk", "оценка (US grade)", "I got a good mark.", "Я получил хорошую оценку."],
  ["notebook", "ˈnəʊtbʊk", "ˈnoʊtbʊk", "тетрадь, блокнот", "Write the new words in your notebook.", "Запиши новые слова в тетрадь."]
]},
{ id: 24, title: "Природа и погода", w: [
  ["nature", "ˈneɪtʃə", "ˈneɪtʃər", "природа", "I love being in nature.", "Я люблю бывать на природе."],
  ["air", "eə", "er", "воздух", "The air is fresh in the mountains.", "В горах свежий воздух."],
  ["sky", "skaɪ", "", "небо", "Look at the sky!", "Посмотри на небо!"],
  ["sun", "sʌn", "", "солнце", "The sun is shining.", "Светит солнце."],
  ["moon", "muːn", "", "луна", "The moon is full tonight.", "Сегодня полнолуние."],
  ["star", "stɑː", "stɑːr", "звезда", "You can see many stars here.", "Здесь видно много звёзд."],
  ["lake", "leɪk", "", "озеро", "We swam in the lake.", "Мы плавали в озере."],
  ["forest", "ˈfɒrɪst", "ˈfɔːrɪst", "лес", "We walked in the forest.", "Мы гуляли в лесу."],
  ["tree", "triː", "", "дерево", "There's an old tree in our garden.", "В нашем саду растёт старое дерево."],
  ["flower", "ˈflaʊə", "ˈflaʊər", "цветок", "He gave her flowers.", "Он подарил ей цветы."],
  ["grass", "ɡrɑːs", "ɡræs", "трава", "Don't walk on the grass.", "Не ходите по траве."],
  ["hill", "hɪl", "", "холм", "The house is on a hill.", "Дом на холме."],
  ["field", "fiːld", "", "поле", "Horses are in the field.", "Лошади в поле."],
  ["desert", "ˈdezət", "ˈdezərt", "пустыня", "It's very hot in the desert.", "В пустыне очень жарко."],
  ["animal", "ˈænɪml", "", "животное", "What's your favourite animal?", "Какое твоё любимое животное?"],
  ["bird", "bɜːd", "bɜːrd", "птица", "A bird is singing.", "Поёт птица."],
  ["dog", "dɒɡ", "dɔːɡ", "собака", "I walk my dog every morning.", "Я гуляю с собакой каждое утро."],
  ["cat", "kæt", "", "кошка, кот", "My cat sleeps all day.", "Мой кот спит весь день."],
  ["horse", "hɔːs", "hɔːrs", "лошадь", "Can you ride a horse?", "Ты умеешь ездить на лошади?"],
  ["cow", "kaʊ", "", "корова", "My grandma has two cows.", "У бабушки две коровы."],
  ["cloud", "klaʊd", "", "облако, туча", "There isn't a cloud in the sky.", "На небе ни облачка."],
  ["storm", "stɔːm", "stɔːrm", "буря, гроза", "There was a storm last night.", "Вчера ночью была гроза."],
  ["ice", "aɪs", "", "лёд", "Be careful, there's ice on the road.", "Осторожно, на дороге лёд."],
  ["temperature", "ˈtemprətʃə", "ˈtemprətʃər", "температура", "What's the temperature today?", "Какая сегодня температура?"],
  ["climate", "ˈklaɪmət", "", "климат", "The climate here is dry.", "Здесь сухой климат."]
]},
{ id: 25, title: "Мир идей: причина, факт, правило", w: [
  ["information", "ˌɪnfəˈmeɪʃn", "ˌɪnfərˈmeɪʃn", "информация", "I need more information.", "Мне нужно больше информации."],
  ["idea", "aɪˈdɪə", "aɪˈdiːə", "идея, мысль", "I have an idea!", "У меня есть идея!"],
  ["reason", "ˈriːzn", "", "причина", "What's the reason?", "В чём причина?"],
  ["result", "rɪˈzʌlt", "", "результат", "I'm happy with the result.", "Я доволен результатом."],
  ["problem", "ˈprɒbləm", "ˈprɑːbləm", "проблема", "No problem!", "Без проблем!"],
  ["fact", "fækt", "", "факт", "It's a fact.", "Это факт."],
  ["truth", "truːθ", "", "правда, истина", "Tell me the truth.", "Скажи мне правду."],
  ["chance", "tʃɑːns", "tʃæns", "шанс, возможность", "Give me one more chance.", "Дай мне ещё один шанс."],
  ["example", "ɪɡˈzɑːmpl", "ɪɡˈzæmpl", "пример", "Can you give me an example?", "Можешь привести пример?"],
  ["question", "ˈkwestʃən", "", "вопрос", "Can I ask a question?", "Можно задать вопрос?"],
  ["way", "weɪ", "", "путь, дорога; способ", "Is this the way to the station?", "Это дорога к вокзалу?"],
  ["part", "pɑːt", "pɑːrt", "часть", "The first part was easy.", "Первая часть была лёгкой."],
  ["piece", "piːs", "", "кусок, штука", "A piece of cake, please.", "Кусочек торта, пожалуйста."],
  ["side", "saɪd", "", "сторона", "Drive on the left side.", "Езжайте по левой стороне."],
  ["point", "pɔɪnt", "", "смысл; точка; пункт", "What's the point?", "Какой в этом смысл?"],
  ["type", "taɪp", "", "тип, вид", "What type of music do you like?", "Какую музыку ты любишь?"],
  ["list", "lɪst", "", "список", "Make a shopping list.", "Составь список покупок."],
  ["level", "ˈlevl", "", "уровень", "What's your level of English?", "Какой у тебя уровень английского?"],
  ["system", "ˈsɪstəm", "", "система", "The system is not working.", "Система не работает."],
  ["news", "njuːz", "nuːz", "новости", "I have good news!", "У меня хорошие новости!"],
  ["rule", "ruːl", "", "правило", "Learn this rule.", "Выучи это правило."],
  ["war", "wɔː", "wɔːr", "война", "My grandfather told me about the war.", "Дедушка рассказывал мне о войне."],
  ["peace", "piːs", "", "мир (без войны), покой", "Everyone wants peace.", "Все хотят мира."],
  ["government", "ˈɡʌvənmənt", "ˈɡʌvərnmənt", "правительство", "The government built a new hospital.", "Правительство построило новую больницу."],
  ["life", "laɪf", "", "жизнь", "Life is beautiful.", "Жизнь прекрасна."]
]},
{ id: 26, title: "Досуг, медиа и интернет", w: [
  ["game", "ɡeɪm", "", "игра", "Let's play a game.", "Давай сыграем в игру."],
  ["sport", "spɔːt", "spɔːrt", "спорт, вид спорта", "What sport do you do?", "Каким спортом ты занимаешься?"],
  ["match", "mætʃ", "", "матч", "Did you watch the match?", "Ты смотрел матч?"],
  ["song", "sɒŋ", "sɔːŋ", "песня", "This is my favourite song.", "Это моя любимая песня."],
  ["band", "bænd", "", "музыкальная группа", "My brother plays in a band.", "Мой брат играет в группе."],
  ["singer", "ˈsɪŋə", "ˈsɪŋər", "певец, певица", "She is a famous singer.", "Она известная певица."],
  ["actor", "ˈæktə", "ˈæktər", "актёр", "Who is your favourite actor?", "Кто твой любимый актёр?"],
  ["artist", "ˈɑːtɪst", "ˈɑːrtɪst", "художник; артист", "The artist painted the city.", "Художник нарисовал город."],
  ["art", "ɑːt", "ɑːrt", "искусство", "I'm interested in modern art.", "Меня интересует современное искусство."],
  ["photo", "ˈfəʊtəʊ", "ˈfoʊtoʊ", "фотография", "Can you take a photo of us?", "Можете нас сфотографировать?"],
  ["camera", "ˈkæmərə", "", "фотоаппарат, камера", "My phone has a good camera.", "В моём телефоне хорошая камера."],
  ["video", "ˈvɪdiəʊ", "ˈvɪdioʊ", "видео", "Watch this video!", "Посмотри это видео!"],
  ["app", "æp", "", "приложение", "Download the app.", "Скачай приложение."],
  ["website", "ˈwebsaɪt", "", "сайт", "Visit our website.", "Заходите на наш сайт."],
  ["internet", "ˈɪntənet", "ˈɪntərnet", "интернет", "Is there internet in the room?", "В номере есть интернет?"],
  ["online", "ˌɒnˈlaɪn", "ˌɑːnˈlaɪn", "онлайн, в интернете", "I study English online.", "Я учу английский онлайн."],
  ["post", "pəʊst", "poʊst", "пост, публикация; публиковать", "I liked your post.", "Мне понравился твой пост."],
  ["comment", "ˈkɒment", "ˈkɑːment", "комментарий", "Leave a comment below.", "Оставьте комментарий ниже."],
  ["podcast", "ˈpɒdkɑːst", "ˈpɑːdkæst", "подкаст", "I listen to podcasts on the bus.", "Я слушаю подкасты в автобусе."],
  ["festival", "ˈfestɪvl", "", "фестиваль, праздник", "There's a music festival in July.", "В июле музыкальный фестиваль."],
  ["guitar", "ɡɪˈtɑː", "ɡɪˈtɑːr", "гитара", "I'm learning to play the guitar.", "Я учусь играть на гитаре."],
  ["piano", "piˈænəʊ", "piˈænoʊ", "пианино", "She plays the piano well.", "Она хорошо играет на пианино."],
  ["painting", "ˈpeɪntɪŋ", "", "картина; живопись", "This painting is very old.", "Эта картина очень старая."],
  ["novel", "ˈnɒvl", "ˈnɑːvl", "роман (книга)", "I'm reading a great novel.", "Я читаю отличный роман."],
  ["magazine", "ˌmæɡəˈziːn", "ˈmæɡəziːn", "журнал", "She reads a fashion magazine.", "Она читает модный журнал."]
]}
);
// когда открывается набор: после прохождения уровня N основного курса (при входном тесте и в режиме проверки — сразу)
EN.packs.forEach(function (p, i) { p.after = Math.min(30, 2 + Math.round(i * 28 / 25)); });
