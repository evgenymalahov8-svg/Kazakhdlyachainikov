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
