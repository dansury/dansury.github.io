/* data.js — site content. Two languages, one shape. */

window.SITE = (function () {
  'use strict';

  var i18n = {
    ru: {
      'nav.name': 'Яна Павленко',
      'nav.method': 'Метод', 'nav.work': 'Проекты', 'nav.stack': 'Стек', 'nav.contact': 'Контакт',
      'hero.eyebrow': 'Продуктовая разработка · ИИ-сервисы · 2024—2026',
      'hero.t1': 'Проектирую', 'hero.t2': 'и собираю', 'hero.t3': 'продукты целиком',
      'hero.lede': 'От разговора с заказчиком до работающего сервиса на его хостинге. Требования → спецификация → код → деплой → сопровождение. Одиннадцать продуктов: ИИ-боты, веб-сервисы, модуль для 1С-Битрикс, инфраструктура автодеплоя.',
      'hero.cta1': 'Смотреть проекты', 'hero.cta2': 'LinkedIn',
      'hero.scroll': 'прокрутите — спираль углубится',
      'facts.k1': 'продуктов в портфолио',
      'facts.k2': 'серийных номеров в реестре',
      'facts.k3': 'проверок в аудите Директа',
      'facts.k4': 'площадок публикации',
      'portrait.cap': 'Яна Павленко — инженер продукта. Удалённо, часовой пояс UTC+3.',
      'method.title': 'Метод',
      'method.lede': 'Я не «пишу код по задачам». Я довожу требование заказчика до работающей функции так, чтобы через полгода можно было доказать, откуда взялась каждая строка.',
      'm1.t': 'Сначала спецификация, потом код',
      'm1.b': 'Каждая новая функция проходит цикл spec-driven: спека → план → задачи → реализация. Спека описывает фактическое поведение, а не пожелания. Это то, что позволяет вернуться к проекту через год и не перечитывать код целиком.',
      'm2.t': 'Трассируемость ТЗ → спека → код',
      'm2.b': 'Каждое требование заказчика проходимо в обе стороны: пункт ТЗ ссылается на раздел спеки, функция в коде — на тот же раздел. Аудит «а это откуда взялось?» занимает минуту, а не день. Работа вне ТЗ сначала становится сформулированным требованием, и только потом кодом.',
      'm3.t': 'Продукт, а не набор функций',
      'm3.b': 'Перед разработкой — сегмент и его работа (Jobs To Be Done), ценность, юнит-экономика, самое рискованное допущение. Функция, которая не двигает метрику, не попадает в план. Убить гипотезу до сборки дешевле, чем после.',
      'm4.t': 'Поставка в реальность заказчика',
      'm4.b': 'Продукты живут на обычном shared-хостинге, где нет терминала и демонов: чистый PHP или Python без тяжёлых зависимостей, SQLite, автодеплой одним файлом. Заказчик обновляет прод кнопкой, а не звонком разработчику.',
      'm5.t': 'Математика отдельно от нейросети',
      'm5.b': 'Там, где есть расчёт — считает код, а модель только формулирует. Показатели, пороги, классификация и итоги детерминированы и воспроизводимы; ИИ получает готовые числа и не имеет права их пересчитывать. Такой отчёт можно защищать перед специалистом.',
      'm6.t': 'Один источник истины',
      'm6.b': 'Цены, тексты, промпты и настройки живут ровно в одном месте и редактируются оператором, а не разработчиком. Ни одной цифры, продублированной в коде: копия — это будущий баг.',
      'work.title': 'Проекты',
      'work.lede': 'Каждый проект — с продуктовым разбором: какую проблему он закрывает, для кого и что даёт бизнесу. Часть репозиториев закрыта по условиям заказчика — ссылка ведёт на приватный репозиторий, доступ открываю по запросу.',
      'f.all': 'Все', 'f.ai': 'ИИ-продукты', 'f.web': 'Веб-сервисы', 'f.b2b': 'Внутренние системы', 'f.infra': 'Инфраструктура',
      'stack.title': 'Стек',
      'stack.lede': 'Выбор инструмента определяется хостингом заказчика и сроком поддержки, а не модой.',
      'contact.title': 'Обсудим ваш продукт',
      'contact.lede': 'Возьмусь за продукт целиком: разберу задачу как продуктовую, напишу спецификацию, соберу, разверну и передам с документацией. Или подключусь к существующей системе — там, где нужно навести порядок.',
      'p.problem': 'Проблема', 'p.solution': 'Решение', 'p.audience': 'Для кого', 'p.value': 'Что даёт бизнесу',
      'p.role': 'Роль', 'p.stack': 'Технологии', 'p.status': 'Статус', 'p.year': 'Период',
      'p.repo': 'Репозиторий', 'p.repoPrivate': 'Репозиторий (закрыт)', 'p.live': 'Открыть',
      'p.open': 'Развернуть разбор', 'p.close': 'Свернуть',
      'st.prod': 'в продакшене', 'st.beta': 'открытая бета', 'st.pub': 'опубликовано'
    },
    en: {
      'nav.name': 'Yana Paulenka',
      'nav.method': 'Method', 'nav.work': 'Work', 'nav.stack': 'Stack', 'nav.contact': 'Contact',
      'hero.eyebrow': 'Product engineering · AI services · 2024—2026',
      'hero.t1': 'I design', 'hero.t2': 'and build', 'hero.t3': 'whole products',
      'hero.lede': 'From the first conversation with a client to a service running on their own hosting. Requirements → specification → code → deploy → support. Eleven products: AI bots, web services, a 1C-Bitrix module, deployment infrastructure.',
      'hero.cta1': 'See the work', 'hero.cta2': 'LinkedIn',
      'hero.scroll': 'scroll — the spiral goes deeper',
      'facts.k1': 'products shipped',
      'facts.k2': 'serial numbers in one registry',
      'facts.k3': 'checks in the ads audit',
      'facts.k4': 'publishing platforms',
      'portrait.cap': 'Yana Paulenka — product engineer. Remote, UTC+3.',
      'method.title': 'Method',
      'method.lede': 'I do not "write code against tickets". I take a client requirement all the way to a working feature — in a way that still lets you prove, six months later, where every line came from.',
      'm1.t': 'Specification first, code second',
      'm1.b': 'Every new feature goes through a spec-driven loop: spec → plan → tasks → implementation. The spec describes actual behaviour, never wishes. That is what lets anyone return to the project a year later without re-reading the whole codebase.',
      'm2.t': 'Traceability: requirement → spec → code',
      'm2.b': 'Every client requirement is walkable in both directions: a requirement cites a spec section, a function cites the same one. Answering "where did this come from?" takes a minute, not a day. Work outside the brief becomes a written requirement first, code second.',
      'm3.t': 'A product, not a pile of features',
      'm3.b': 'Before development: the segment and its job to be done, the value, the unit economics, the riskiest assumption. A feature that moves no metric does not enter the plan. Killing a hypothesis before the build is cheaper than after.',
      'm4.t': 'Delivered into the client’s reality',
      'm4.b': 'These products live on ordinary shared hosting with no terminal and no daemons: plain PHP or Python with no heavy dependencies, SQLite, one-file auto-deploy. The client updates production with a button, not a phone call.',
      'm5.t': 'Maths stays out of the model',
      'm5.b': 'Wherever there is a calculation, code calculates and the model only phrases. Metrics, thresholds, classification and totals are deterministic and reproducible; the AI receives finished numbers and is not allowed to recompute them. A report like that survives review by a domain expert.',
      'm6.t': 'One source of truth',
      'm6.b': 'Prices, copy, prompts and settings live in exactly one place and are edited by the operator, not the developer. Not a single number duplicated in code: a copy is a future bug.',
      'work.title': 'Work',
      'work.lede': 'Each project comes with a product read: the problem it closes, who it is for, what it gives the business. Some repositories are private on the client’s terms — the link points at the private repo, access on request.',
      'f.all': 'All', 'f.ai': 'AI products', 'f.web': 'Web services', 'f.b2b': 'Internal systems', 'f.infra': 'Infrastructure',
      'stack.title': 'Stack',
      'stack.lede': 'The tool is chosen by the client’s hosting and support horizon, not by fashion.',
      'contact.title': 'Let’s talk about your product',
      'contact.lede': 'I can take a product end to end: frame the task as a product problem, write the specification, build it, deploy it and hand it over documented. Or join an existing system where things need to be put in order.',
      'p.problem': 'Problem', 'p.solution': 'Solution', 'p.audience': 'Who it is for', 'p.value': 'Business outcome',
      'p.role': 'Role', 'p.stack': 'Tech', 'p.status': 'Status', 'p.year': 'Period',
      'p.repo': 'Repository', 'p.repoPrivate': 'Repository (private)', 'p.live': 'Open',
      'p.open': 'Open the breakdown', 'p.close': 'Collapse',
      'st.prod': 'in production', 'st.beta': 'open beta', 'st.pub': 'published'
    }
  };

  var stack = {
    ru: [
      { h: 'Языки и рантайм', items: ['PHP 7.4 — 8.5 (без Composer)', 'Python 3.11+ / asyncio', 'Vanilla JS, Canvas, SVG', 'SQL'] },
      { h: 'Данные', items: ['SQLite (PDO / SQLAlchemy)', 'MySQL / InnoDB', 'Alembic-миграции', 'Excel: чтение .xls / .xlsx без библиотек'] },
      { h: 'ИИ', items: ['OpenRouter + Yandex Foundation Models', 'Цепочка фолбэков между провайдерами', 'Vision / OCR, распознавание речи', 'Версионирование промптов'] },
      { h: 'Платформы', items: ['Telegram Bot API / aiogram', '1С-Битрикс (модули, компоненты)', 'PWA, Service Worker, web push', 'Leaflet, Яндекс.Геокодер'] },
      { h: 'Интеграции', items: ['Яндекс.Директ API v5, Метрика', 'МойСклад', 'IMAP / SMTP', 'GitHub API, вебхуки'] },
      { h: 'Процесс', items: ['Spec-driven (GitHub Spec Kit)', 'BMAD, Jobs To Be Done', 'Трассируемость ТЗ → спека → код', 'CI на GitHub Actions'] }
    ],
    en: [
      { h: 'Languages & runtime', items: ['PHP 7.4 — 8.5 (no Composer)', 'Python 3.11+ / asyncio', 'Vanilla JS, Canvas, SVG', 'SQL'] },
      { h: 'Data', items: ['SQLite (PDO / SQLAlchemy)', 'MySQL / InnoDB', 'Alembic migrations', 'Excel: .xls / .xlsx parsed without libraries'] },
      { h: 'AI', items: ['OpenRouter + Yandex Foundation Models', 'Provider fallback chains', 'Vision / OCR, speech recognition', 'Versioned prompts'] },
      { h: 'Platforms', items: ['Telegram Bot API / aiogram', '1C-Bitrix (modules, components)', 'PWA, service worker, web push', 'Leaflet, Yandex Geocoder'] },
      { h: 'Integrations', items: ['Yandex.Direct API v5, Metrica', 'MoySklad', 'IMAP / SMTP', 'GitHub API, webhooks'] },
      { h: 'Process', items: ['Spec-driven (GitHub Spec Kit)', 'BMAD, Jobs To Be Done', 'Requirement → spec → code traceability', 'CI on GitHub Actions'] }
    ]
  };

  var projects = [
    {
      id: 'careerhack', cat: ['ai', 'web'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/careerhack', priv: true,
      live: 'https://careerhack.ru', liveLabel: 'careerhack.ru',
      tech: ['PHP 8', 'SQLite', 'LLM-скоринг', 'SMTP', 'JSON-LD / SEO', 'PWA'],
      ru: {
        name: 'CareerHack · Executive Matrix',
        tag: 'Воронка карьерного консалтинга: резюме → бесплатный индекс → платный отчёт → консультация',
        role: 'Продукт, архитектура, разработка, деплой',
        problem: 'Автор методологии продавал разборы карьеры вручную. Каждый лид съедал час личного времени ещё до того, как становилось понятно, готов ли человек платить. Сайт-визитка не отвечал на главный вопрос посетителя — «что конкретно я получу и почему это про меня».',
        solution: 'Публичный сайт плюс PHP-сервис разбора. Посетитель загружает резюме и бесплатно получает «Индекс карьерной автономии»: скоринг по авторской методологии, который показывает, какую часть его ценности рынок найма сейчас не покупает. Дальше — платная развёрнутая «КАРТА» и запись на личный разбор. Вокруг воронки: письма, реферальная механика, QR-карточки в PDF, кабинет оператора, SEO-контракт (мета, JSON-LD, sitemap, редиректы) и связка с Telegram-ботом по вебхукам.',
        audience: 'Эксперт с личным брендом, который продаёт консалтинг; его аудитория — руководители и специалисты в поиске следующего шага.',
        value: 'Первый шаг воронки стал бесплатным и автоматическим: время автора тратится только на тех, кто уже заплатил. Цена отчёта редактируется в кабинете оператора, а не в коде, поэтому эксперименты с ценой не требуют релиза.'
      },
      en: {
        name: 'CareerHack · Executive Matrix',
        tag: 'A career-consulting funnel: CV → free index → paid report → session',
        role: 'Product, architecture, development, deployment',
        problem: 'The author of the methodology sold career reviews by hand. Every lead cost an hour of personal time before anyone knew whether they would pay at all. The brochure site never answered the visitor’s real question — what exactly do I get, and why is it about me.',
        solution: 'A public site plus a PHP analysis service. A visitor uploads a CV and gets the free "Career Autonomy Index": a score built on the author’s methodology that shows which part of their value the hiring market is not currently buying. Then the paid full report, then a personal session. Around the funnel: email flows, referrals, QR cards inside the PDF, an operator console, an SEO contract (meta, JSON-LD, sitemap, redirects) and a webhook link to the Telegram bot.',
        audience: 'An expert with a personal brand selling consulting; the audience is managers and specialists looking for their next move.',
        value: 'The first step of the funnel became free and automatic — the author’s time now goes only to people who already paid. The report price is edited in the operator console, not in code, so price experiments need no release.'
      }
    },
    {
      id: 'expertunpack', cat: ['ai'], year: '2024 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/expertunpack_bot', priv: true,
      live: 'https://t.me/expertunpack_bot', liveLabel: '@expertunpack_bot',
      tech: ['Python', 'aiogram', 'SQLite', 'LLM', 'ASR', 'Telegram Payments'],
      ru: {
        name: 'ExpertUnpack',
        tag: 'Telegram-бот, который распаковывает эксперта вместо методолога',
        role: 'Продукт, архитектура, разработка',
        problem: '«Распаковка» эксперта — несколько часов интервью с методологом. Дорого, не масштабируется и упирается в календарь одного человека. При этом сам эксперт не может сформулировать, что он продаёт: слова про «опыт» и «подход» не превращаются в оффер.',
        solution: 'Бот ведёт человека по методологии шаг за шагом: задаёт вопросы, принимает ответ текстом, голосом или файлом (длинные голосовые режутся на куски и распознаются), накапливает профиль и собирает из него артефакты — позиционирование, продукт, кейсы, тексты для продаж. Удержание держится на streak-механике, монетизация — на двух ступенях: недорогой «глубокий разворот» и личный разбор. Все тексты бота лежат в одной карте пути (CJM), цены — в одном источнике: правка занимает минуту и не требует программиста.',
        audience: 'Эксперты, консультанты и наставники, которым нужно превратить свой опыт в продаваемый оффер.',
        value: 'Методология работает без методолога и в любое время суток. Пользователь платит внутри того же диалога, где получил ценность, — воронка не разрывается переходом на сайт.'
      },
      en: {
        name: 'ExpertUnpack',
        tag: 'A Telegram bot that unpacks an expert instead of a methodologist',
        role: 'Product, architecture, development',
        problem: 'Unpacking an expert takes hours of interviews with a methodologist. Expensive, unscalable, and bottlenecked on one person’s calendar. Meanwhile the expert cannot state what they sell: words about "experience" and "approach" never turn into an offer.',
        solution: 'The bot walks the person through the methodology step by step: asks questions, accepts answers as text, voice or file (long voice notes are chunked and transcribed), accumulates a profile and assembles artefacts from it — positioning, product, cases, sales copy. Retention runs on a streak mechanic; monetisation has two tiers: an affordable deep dive and a personal review. All bot copy lives in a single customer-journey map, all prices in a single source — an edit takes a minute and no developer.',
        audience: 'Experts, consultants and mentors who need to turn experience into a sellable offer.',
        value: 'The methodology works without the methodologist, around the clock. The user pays inside the same conversation where the value landed — the funnel is never broken by a jump to a website.'
      }
    },
    {
      id: 'growth', cat: ['ai'], year: '2026', status: 'beta',
      repo: 'https://github.com/dansury/Growth_Producer', priv: false,
      live: 'https://t.me/GrowthProducer_bot', liveLabel: '@GrowthProducer_bot',
      tech: ['Python', 'LLM', 'ASR / OCR', 'граф заметок', '9 площадок'],
      ru: {
        name: 'Growth Producer',
        tag: 'Личный продюсер Telegram-канала: от базы знаний до поста в девяти площадках',
        role: 'Продукт, архитектура, разработка',
        problem: 'У эксперта есть знания, но нет регулярности: три поста в первую неделю, тишина в третью. Нанять SMM дорого, и теряется собственный голос. ChatGPT вручную начинает каждый раз с чистого листа — без памяти о канале и без методологии.',
        solution: 'Бот работает как продюсер, а не как генератор текста. Всё присланное — текст, голосовые, файлы, видео, собственные посты — превращается в связанный граф заметок. На его основе собирается контент-план, а продюсер сам видит пробелы в базе и раз в день задаёт «вопрос дня»; ответ превращается в черновик. Один смысл раскладывается в посты под девять площадок сразу. Публикация — только после кнопки «Подтвердить»: автопостинг выключен, пока автор сам его не включит. Точка входа без регистрации — бесплатный разбор любого публичного канала.',
        audience: 'Эксперты и small-business, которые ведут канал сами и теряют регулярность.',
        value: 'Канал перестаёт зависеть от вдохновения, а тексты остаются узнаваемо авторскими. Контроль над публикацией остаётся у человека — это снимает главное возражение против ИИ-контента.'
      },
      en: {
        name: 'Growth Producer',
        tag: 'A personal producer for a Telegram channel — from knowledge base to posts on nine platforms',
        role: 'Product, architecture, development',
        problem: 'The expert has the knowledge but not the cadence: three posts in week one, silence by week three. Hiring an SMM manager is expensive and costs you your voice. Using ChatGPT by hand starts from a blank page every time — no memory of the channel, no methodology.',
        solution: 'The bot behaves like a producer, not a text generator. Everything sent in — text, voice notes, files, video, the author’s own posts — becomes a linked graph of notes. A content plan is assembled from it, and the producer spots the gaps itself, asking one "question of the day"; the answer becomes a draft. A single idea is rewritten for nine platforms at once. Nothing is published until the author presses Confirm — autoposting stays off until they turn it on. The entry point needs no signup: a free read of any public channel.',
        audience: 'Experts and small businesses running their own channel and losing cadence.',
        value: 'The channel stops depending on inspiration while the writing still sounds like its author. Control over publishing stays with the human — which removes the main objection to AI-written content.'
      }
    },
    {
      id: 'cgm', cat: ['ai'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/CGM-diet', priv: false,
      live: 'https://t.me/CGMdiet_bot', liveLabel: '@CGMdiet_bot',
      tech: ['Python', 'aiogram', 'SQLAlchemy / Alembic', 'vision-модели', 'health-sync'],
      ru: {
        name: 'CGM-diet',
        tag: 'Дневник, который отвечает на вопрос «от чего лично у меня скачет сахар»',
        role: 'Продукт, архитектура, разработка',
        problem: 'Универсальных «полезных продуктов» не существует: одна и та же овсянка у одного даёт +1.2 ммоль/л, у другого +4.0. Носитель монитора глюкозы видит график, но не знает, что именно в его рационе виновато. Обычный дневник питания требует месяцев дисциплины и не даёт выводов.',
        solution: 'Пользователь присылает то, что и так под рукой: фото тарелки, скриншот сенсора, голосовую отметку о самочувствии. Бот распознаёт, раскладывает по временным окнам и через две-три недели начинает отвечать числами: «после блюд с добавленным сахаром средний подъём +3.2 против +1.4 без него, 11 наблюдений, достоверность высокая». Конституция проекта запрещает выдавать ассоциацию за причинность и ставить диагнозы; данные принадлежат пользователю — экспорт и удаление в один шаг.',
        audience: 'Люди с непрерывным мониторингом глюкозы — от диабета до биохакинга — и их врачи.',
        value: 'Ценность продукта растёт с каждой неделей ведения: чем дольше дневник, тем точнее персональные выводы. Это удержание, встроенное в саму механику, а не в напоминания.'
      },
      en: {
        name: 'CGM-diet',
        tag: 'A food diary that answers "what actually spikes my glucose"',
        role: 'Product, architecture, development',
        problem: 'Universally "healthy food" does not exist: the same porridge gives one person +1.2 mmol/L and another +4.0. Anyone wearing a glucose monitor sees the curve but cannot say which part of their own diet is responsible. A normal food diary demands months of discipline and returns no conclusions.',
        solution: 'The user sends what is already in their hand: a photo of the plate, a screenshot of the sensor, a voice note about how they feel. The bot recognises all three, aligns them on time windows, and after two or three weeks starts answering with numbers: "meals with added sugar raise you by +3.2 on average against +1.4 without it, 11 observations, high confidence." The project constitution forbids presenting association as causation or issuing diagnoses; the data belongs to the user — one-step export and deletion.',
        audience: 'People on continuous glucose monitoring — from diabetes to biohacking — and their doctors.',
        value: 'The product gets more valuable every week it is used: the longer the diary, the sharper the personal findings. Retention is built into the mechanic itself rather than into reminders.'
      }
    },
    {
      id: 'neuropro', cat: ['ai', 'web'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/NeuroPro', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP 8.4 без Composer', 'SQLite', 'Yandex Vision OCR', 'OpenRouter / Yandex LLM', 'SVG', 'SMTP'],
      ru: {
        name: 'NeuroPro',
        tag: 'Интерпретация психофизиологических тестов: математику считает код, нейросеть только пишет',
        role: 'Продукт, архитектура, разработка, конституция проекта',
        problem: 'Интерпретация теста на аппаратуре «Эгоскоп» — ручная работа специалиста: около часа на отчёт, качество зависит от того, кто и в каком настроении его писал. Отдать всю задачу нейросети нельзя: она начинает пересчитывать показатели и противоречить самой методике.',
        solution: 'Оператор загружает выгрузку Excel и скриншот таблицы значимости. Сервис сам считает всю математику — уровни, положение относительно медианы, достоверность, разделы отчёта, итоги методики, координаты матрицы — и строит диаграмму-паутинку и матрицу «когниция × эмоция». Нейросеть получает готовые числа и работает в два слоя: первый пишет содержание, второй правит язык, не трогая факты. Отдельно считается «цифровой аватар клиента» — как подавать отчёт именно этому человеку. На выходе брендированный PDF или письмо; промпты версионируются, история интерпретаций не теряется.',
        audience: 'Психологи и HR-специалисты, работающие на оборудовании «Эгоскоп»; их клиенты получают готовый отчёт.',
        value: 'Час работы специалиста превращается в минуты, а качество перестаёт плавать. Главное — отчёт защитим перед профессионалом: каждое число воспроизводимо, потому что его посчитал код, а не модель.'
      },
      en: {
        name: 'NeuroPro',
        tag: 'Psychophysiological test interpretation: code does the maths, the model only writes',
        role: 'Product, architecture, development, project constitution',
        problem: 'Interpreting an "Egoscope" test is manual expert work: around an hour per report, with quality depending on who wrote it and when. Handing the whole task to a language model is not an option — it starts recomputing the metrics and contradicting the methodology itself.',
        solution: 'The operator uploads an Excel export and a screenshot of the significance table. The service computes all the maths itself — levels, position against the median, confidence, report sections, methodology totals, matrix coordinates — and renders a radar chart plus a cognition × emotion matrix. The model receives finished numbers and works in two layers: the first writes the content, the second edits the language without touching facts. A separate "client avatar" decides how the report should be delivered to this particular person. Output is a branded PDF or an email; prompts are versioned and interpretation history is never lost.',
        audience: 'Psychologists and HR specialists working with Egoscope hardware; their clients receive the finished report.',
        value: 'An hour of expert work becomes minutes, and quality stops drifting. Above all the report survives professional scrutiny: every number is reproducible because code produced it, not a model.'
      }
    },
    {
      id: 'kp', cat: ['ai', 'b2b'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/kp-atlant', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 8.1', 'SQLite', 'OpenRouter + Yandex', 'IMAP / SMTP', 'PWA', 'web push'],
      ru: {
        name: 'КП Atlant',
        tag: 'Коммерческие предложения из входящей почты — без выдуманных цен',
        role: 'Продукт, архитектура, разработка',
        problem: 'Производитель средств защиты получает поток писем-запросов. Менеджер вручную читает каждое, ищет цены и остатки, собирает КП в редакторе. Ответ уходит через часы, а иногда с ошибкой в цене — и это уже обязательство перед клиентом.',
        solution: 'Каждое входящее письмо идёт через триаж: бесплатный префильтр отсекает служебную почту, затем один вызов модели одновременно разбирает и классифицирует письмо, а маршрутизатор выбирает сценарий ответа и источники фактов. Цены, остатки и статусы заказов приходят из каталога, а описания и характеристики — из корпоративной вики, которая подмешивается в промпт только релевантными разделами. КП собирается с карточками товаров, фотографиями и допродажей. Админ-панель: логи, настройки, почта, промпты. PWA с web push, чтобы менеджер видел запрос сразу.',
        audience: 'Производственная компания с потоком B2B-запросов и небольшим отделом продаж.',
        value: 'Ответ клиенту за минуты вместо часов. Модель физически не может придумать цену или остаток — они приходят из каталога; менеджер проверяет и отправляет, а не составляет с нуля.'
      },
      en: {
        name: 'Atlant Quotes',
        tag: 'Commercial proposals straight from the inbox — with no invented prices',
        role: 'Product, architecture, development',
        problem: 'A protective-equipment manufacturer receives a stream of enquiry emails. A manager reads each one, looks up prices and stock, and assembles the quote by hand. Replies take hours and sometimes carry a wrong price — which is already a commitment to the customer.',
        solution: 'Every inbound letter goes through triage: a free prefilter drops service mail, then a single model call both parses and classifies the letter, and a router picks the reply scenario and its fact sources. Prices, stock and order status come from the catalogue; descriptions and specifications come from the company wiki, injected into the prompt only as the sections that match the text at hand. The quote is assembled with product cards, photos and upsell. An admin console covers logs, settings, mail and prompts. A PWA with web push puts the enquiry in front of the manager immediately.',
        audience: 'A manufacturer with a steady flow of B2B enquiries and a small sales team.',
        value: 'Replies in minutes instead of hours. The model physically cannot invent a price or a stock level — those come from the catalogue; the manager checks and sends rather than composing from scratch.'
      }
    },
    {
      id: 'serials', cat: ['b2b'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/atlant.serials', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 7.4+', '1С-Битрикс', 'MySQL / InnoDB', 'Code 128 / QR / PDF / ZIP — своя реализация', 'МойСклад'],
      ru: {
        name: 'Реестр серийных номеров',
        tag: 'Модуль 1С-Битрикс: 83 880 номеров, этикетки со штрихкодом и проверка подлинности покупателем',
        role: 'Архитектура, разработка, установка на прод',
        problem: 'Производитель бронеплит и шлемов вёл серийные номера в таблицах. Покупатель не мог проверить подлинность изделия, склад и сайт расходились, а этикетки печатались вручную. Для продукции, от которой зависит жизнь, это не мелочь.',
        solution: 'Полноценный модуль для 1С-Битрикс: реестр из 83 880 номеров за 2022—2026, партии и статусы (бронь → заказ → отгрузка), печать этикеток со штрихкодом Code 128 и QR, обмен с МоимСкладом, страница проверки номера в личном кабинете покупателя и письмо-алерт при подозрительно частых проверках. PDF, Code 128, QR и ZIP написаны внутри модуля — на хостинге заказчика нет Composer и внешних зависимостей быть не может. Установка — загрузка папки и одна кнопка в админке.',
        audience: 'Производитель средств индивидуальной защиты; его дилеры и конечные покупатели.',
        value: 'Подлинность изделия проверяет сам покупатель — это снимает нагрузку с поддержки и работает как защита бренда от подделок. Склад и сайт видят один и тот же реестр, а таблицы больше не нужны.'
      },
      en: {
        name: 'Serial Number Registry',
        tag: 'A 1C-Bitrix module: 83,880 numbers, barcode labels and buyer-side authenticity checks',
        role: 'Architecture, development, production install',
        problem: 'A manufacturer of armour plates and helmets kept serial numbers in spreadsheets. Buyers could not verify a product, warehouse and website drifted apart, and labels were printed by hand. For products lives depend on, that is not a detail.',
        solution: 'A full 1C-Bitrix module: a registry of 83,880 numbers covering 2022—2026, batches and statuses (reserved → ordered → shipped), label printing with Code 128 barcodes and QR, exchange with the MoySklad inventory system, a number-check page in the customer’s account and an alert email on suspiciously frequent checks. PDF, Code 128, QR and ZIP are implemented inside the module — the client’s hosting has no Composer, so external dependencies were not an option. Installation is uploading a folder and pressing one button.',
        audience: 'A personal-protective-equipment manufacturer, its dealers and end customers.',
        value: 'The buyer verifies authenticity themselves, which takes load off support and works as brand protection against counterfeits. Warehouse and website read the same registry, and the spreadsheets are gone.'
      }
    },
    {
      id: 'kraski', cat: ['b2b', 'web'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/kraskiweb', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 8.2+', 'SQLite', 'Leaflet', 'PWA / Service Worker', 'Яндекс.Геокодер', 'Excel'],
      ru: {
        name: 'Kalinskie Kraski',
        tag: 'Карта клиентов и маршрутные листы торговых представителей',
        role: 'Продукт, архитектура, разработка, спецификации',
        problem: 'Маршруты торговых представителей планировались в голове и в Excel. Руководитель не знал, кто где был, сколько материалов выдано и в каком статусе клиент. Возврат к вопросу «почему этот объект пропустили» упирался в память сотрудника.',
        solution: 'Веб-консоль: карта компаний на Leaflet с фильтрами и статусами CRM, маршрутные листы с добавлением точек прямо с карты, расчёт выдачи материалов по пакетам, выгрузка в Excel и журнал аудита. Админ входит по паролю, представитель — по личной вечной ссылке без пароля: у людей в полях нет корпоративной почты и не будет. Компании приезжают из Excel через геокодирование на этапе сборки. Всё работает на shared-хостинге без терминала, данные — в SQLite, интерфейс — PWA.',
        audience: 'Оптовый поставщик лакокрасочных материалов с выездными торговыми представителями.',
        value: 'Маршрут собирается за минуты и виден руководителю в реальном времени. Выдача материалов считается, а не вспоминается, и каждое действие остаётся в журнале — спор «я выдавал» закрывается за секунду.'
      },
      en: {
        name: 'Kalinskie Kraski',
        tag: 'A client map and route sheets for field sales reps',
        role: 'Product, architecture, development, specifications',
        problem: 'Sales-rep routes were planned in someone’s head and in Excel. The manager did not know who had been where, how much material had been issued, or what state a client was in. "Why was this site skipped?" depended on an employee’s memory.',
        solution: 'A web console: a Leaflet map of companies with filters and CRM statuses, route sheets built by picking points straight off the map, material-issue calculation by package, Excel export and an audit log. Admins sign in with a password; reps use a permanent personal link with no password at all — field staff have no corporate email and never will. Companies arrive from Excel through build-time geocoding. Everything runs on shared hosting with no terminal, data in SQLite, interface as a PWA.',
        audience: 'A paint and coatings wholesaler with field sales representatives.',
        value: 'A route is assembled in minutes and visible to the manager in real time. Material issue is calculated rather than recalled, and every action stays in the log — the "but I did hand it over" argument ends in a second.'
      }
    },
    {
      id: 'direct', cat: ['ai', 'infra'], year: '2026', status: 'pub',
      repo: 'https://github.com/dansury/yandex-direct-ads', priv: false,
      live: null, liveLabel: null,
      tech: ['Python stdlib', 'Яндекс.Директ API v5', 'Яндекс.Метрика', 'Claude Skill'],
      ru: {
        name: 'Yandex.Direct Skill',
        tag: 'ИИ-агент-директолог: аудит по 65 проверкам, юнит-экономика, автопилот',
        role: 'Архитектура, разработка, справочники и бенчмарки',
        problem: 'Рекламные кабинеты сливают бюджет на настройках, включённых по умолчанию: стратегия по кликам, автотаргетинг, РСЯ внутри поиска, цель «Визит». Аудит у подрядчика стоит денег и делается раз в квартал, а деньги уходят каждый день.',
        solution: 'Skill, который превращает ИИ-агента в директолога полного цикла. Сначала аудит: 65 проверок с весовым скорингом, грейдом и приоритизированным планом исправлений, отдельный чек-лист «7 скрытых настроек». Предельная ставка считается из чека, маржи и конверсии сайта, а не с потолка. Кампания собирается из одного JSON идемпотентно — повторный запуск не плодит дубли. Дальше rules-engine оптимизации, A/B-тесты с проверкой значимости, заливка офлайн-продаж из CRM в Метрику и недельный автопилот. Только стандартная библиотека Python, sandbox и cost guard включены по умолчанию, все изменения — с dry-run и откатом.',
        audience: 'Владельцы бизнеса с собственным кабинетом Директа и агентства, ведущие много аккаунтов.',
        value: 'Аудит кабинета занимает минуты вместо дней, а оптимизация идёт по выручке, а не по числу заявок. Ни одно изменение не уходит в кабинет без явного подтверждения — это то, что делает автоматизацию рекламы приемлемой для владельца бюджета.'
      },
      en: {
        name: 'Yandex.Direct Skill',
        tag: 'An AI ads specialist: a 65-point audit, unit economics, autopilot',
        role: 'Architecture, development, reference data and benchmarks',
        problem: 'Ad accounts burn budget on settings that are on by default: click-based bidding, autotargeting, display network inside search, a "visit" conversion goal. An agency audit costs money and happens quarterly — the money leaks daily.',
        solution: 'A skill that turns an AI agent into a full-cycle ads specialist. Audit first: 65 checks with weighted scoring, a grade and a prioritised fix plan, plus a dedicated "7 hidden settings" checklist. The maximum bid is derived from order value, margin and site conversion rather than guessed. A whole campaign is built from one JSON, idempotently — a rerun creates no duplicates. Then a rules engine for optimisation, A/B tests with a significance check, offline CRM sales pushed back into analytics, and a weekly autopilot. Python standard library only; sandbox and cost guard on by default; every change dry-run first with a rollback path.',
        audience: 'Business owners running their own ad account, and agencies handling many of them.',
        value: 'An account audit takes minutes instead of days, and optimisation targets revenue rather than lead count. Nothing reaches the live account without explicit confirmation — which is what makes ad automation acceptable to the person whose budget it is.'
      }
    },
    {
      id: 'toolkit', cat: ['infra'], year: '2025 — 2026', status: 'pub',
      repo: 'https://github.com/dansury/site_yacloud_openrouter', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP без Composer', 'cURL', 'SQLite', 'OpenRouter', 'Yandex Foundation Models / Vision'],
      ru: {
        name: 'LLM-тулкит для PHP-хостинга',
        tag: 'Два провайдера моделей, парсинг документов, почта и настройки — в одном переиспользуемом наборе',
        role: 'Архитектура, разработка, спецификации',
        problem: 'Каждый следующий ИИ-проект начинал с одного и того же: подключение к моделям, распознавание PDF и DOCX, отправка почты, хранение настроек. Копии расходились между проектами, и починка бага в одном месте не чинила остальные.',
        solution: 'Канонический набор инфраструктурных блоков, из которого проекты берут код, а не вендорят свои копии. Два провайдера — Yandex Cloud и OpenRouter — за одним интерфейсом, с выбором модели на сессию и настраиваемой цепочкой фолбэков. Разбор DOCX через ZipArchive, PDF через pdftotext с деградацией в vision-модели и Yandex Vision OCR в порядке, который задаёт оператор. SMTP и key/value-настройки, редактируемые из админки. Чистый PHP: нужны только cURL, SQLite и ZIP.',
        audience: 'Разработчики и владельцы сервисов на обычном PHP-хостинге, которым нужен ИИ без переезда на облако.',
        value: 'Новый ИИ-сервис стартует не с нуля, а с рабочей инфраструктуры. Смена модели или провайдера становится настройкой, а не релизом — а значит, подорожавшую модель можно заменить в тот же день.'
      },
      en: {
        name: 'LLM toolkit for PHP hosting',
        tag: 'Two model providers, document parsing, mail and settings in one reusable kit',
        role: 'Architecture, development, specifications',
        problem: 'Every new AI project began with the same plumbing: talking to models, reading PDF and DOCX, sending mail, storing settings. The copies drifted apart, and fixing a bug in one place fixed nothing anywhere else.',
        solution: 'A canonical set of infrastructure blocks that consuming projects take code from instead of vendoring their own. Two providers — Yandex Cloud and OpenRouter — behind one interface, with per-session model choice and a configurable fallback chain. DOCX parsed through ZipArchive, PDF through pdftotext degrading to vision models and Yandex Vision OCR, in whatever order the operator sets. SMTP and key/value settings editable from an admin page. Plain PHP: only cURL, SQLite and ZIP required.',
        audience: 'Developers and service owners on ordinary PHP hosting who need AI without migrating to a cloud platform.',
        value: 'A new AI service starts from working infrastructure rather than from zero. Switching model or provider becomes a setting rather than a release — so a model that got expensive can be replaced the same day.'
      }
    },
    {
      id: 'pull', cat: ['infra'], year: '2025 — 2026', status: 'pub',
      repo: 'https://github.com/dansury/pull', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP', 'GitHub ZIP API', 'без git и SSH'],
      ru: {
        name: 'pull.php',
        tag: 'Автодеплой с GitHub на дешёвый хостинг — одним PHP-файлом',
        role: 'Идея, разработка, документация',
        problem: 'Код живёт в GitHub, а сайт — на shared-хостинге, где из инструментов только FTP и панель управления. Между ними ручной перенос, и он ломается предсказуемо: залили не все файлы, залили поверх старую версию, никто не знает, что именно сейчас на проде.',
        solution: 'Один PHP-файл, который скачивает ZIP выбранной ветки репозитория, распаковывает его и раскладывает содержимое нужной папки в тот каталог, где лежит сам. Ни git, ни SSH, ни shell-доступа не требуется — достаточно PHP и исходящего HTTPS. Используется как штатный механизм обновления во всех моих проектах на PHP.',
        audience: 'Владельцы сайтов на shared-хостинге и разработчики, которые их ведут.',
        value: 'Заказчик обновляет прод кнопкой и в любой момент знает, какая ветка на сервере. Разработчик не держит у себя FTP-доступы, а откат — это выбор другой ветки, а не восстановление из бэкапа.'
      },
      en: {
        name: 'pull.php',
        tag: 'GitHub-to-cheap-hosting deployment in a single PHP file',
        role: 'Idea, development, documentation',
        problem: 'The code lives on GitHub and the site sits on shared hosting where the only tools are FTP and a control panel. Between them is a manual copy that breaks predictably: not all files uploaded, an older version pasted over a newer one, nobody sure what is actually live.',
        solution: 'One PHP file that downloads the ZIP of a chosen branch, unpacks it and lays the right folder into the directory it sits in. No git, no SSH, no shell — just PHP and outbound HTTPS. It is the standard update mechanism across all my PHP projects.',
        audience: 'Owners of sites on shared hosting, and the developers maintaining them.',
        value: 'The client updates production with a button and always knows which branch is on the server. The developer stops holding FTP credentials, and a rollback is picking another branch rather than restoring a backup.'
      }
    }
  ];

  return { i18n: i18n, stack: stack, projects: projects };
})();
