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
