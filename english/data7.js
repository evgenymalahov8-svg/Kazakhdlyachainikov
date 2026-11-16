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
