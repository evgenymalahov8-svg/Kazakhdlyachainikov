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
