/* data.js — site content. Two languages, one shape. */

window.SITE = (function () {
  'use strict';

  var i18n = {
    ru: {
      'nav.name': 'Яна Павленко',
      'nav.method': 'Метод', 'nav.work': 'Проекты', 'nav.stack': 'Стек', 'nav.contact': 'Контакт',
      'hero.eyebrow': 'Продуктовая разработка · ИИ-сервисы · 2024—2026',
      'hero.t1': 'Проектирую', 'hero.t2': 'и собираю', 'hero.t3': 'продукты целиком',
      'hero.lede': 'От разговора с заказчиком до работающего сервиса в его контуре. Требования, спецификация, код, деплой, сопровождение. Одиннадцать продуктов: ИИ-боты, веб-сервисы, модуль для 1С-Битрикс, инфраструктура автодеплоя.',
      'hero.cta1': 'Смотреть проекты', 'hero.cta2': 'LinkedIn',
      'facts.k1': 'продуктов в портфолио',
      'facts.k2': 'операционная рутина: максимальное сокращение',
      'facts.k3': 'от идеи до деплоя — доработка без релиза',
      'facts.k4': 'проверок в аудите рекламного кабинета',
      'portrait.cap': 'Яна Павленко — инженер продукта. Удалённо, часовой пояс UTC+3.',
      'method.title': 'Метод',
      'method.lede': 'Я не «пишу код по задачам». Я довожу требование заказчика до работающей функции — и до того состояния, когда её можно поддерживать без меня.',
      'm1.t': 'Сначала спецификация, потом код',
      'm1.b': 'Каждая функция проходит цикл: спека → план → задачи → реализация. Спека описывает поведение, а не пожелания, — поэтому в проект можно вернуться через год, не перечитывая код.',
      'm2.t': 'Продукт, а не набор функций',
      'm2.b': 'Сначала сегмент и его задача, ценность, юнит-экономика, самое рискованное допущение. Функция, которая не двигает метрику, в план не попадает.',
      'm3.t': 'Архитектура под задачу и нагрузку',
      'm3.b': 'Стек подбирается под контур заказчика и под нагрузку, которую продукту предстоит выдержать. Доработка при этом не ждёт релиза: вы пишете пожелание прямо в админке своего продукта, через пять минут обновляете модуль и пользуетесь тем, что сами только что придумали.',
      'work.title': 'Проекты',
      'work.lede': 'У каждого проекта — продуктовый разбор и отдельная строка о том, что из него переносится в другой продукт. Часть репозиториев закрыта по условиям заказчика; доступ открываю по запросу.',
      'f.all': 'Все', 'f.ai': 'ИИ-продукты', 'f.web': 'Веб-сервисы', 'f.b2b': 'Внутренние системы', 'f.infra': 'Инфраструктура',
      'stack.title': 'Стек',
      'stack.lede': 'Инструмент выбирается под контур заказчика и срок поддержки, а не по моде.',
      'contact.title': 'Обсудим ваш продукт',
      'contact.lede': 'Возьмусь за продукт целиком: разберу задачу как продуктовую, напишу спецификацию, соберу, разверну и передам с документацией. Или подключусь к существующей системе — там, где нужно навести порядок.',
      'contact.write': 'Напишите — отвечу сегодня.',
      'p.problem': 'Проблема', 'p.solution': 'Решение', 'p.audience': 'Для кого',
      'p.value': 'Что даёт бизнесу', 'p.reuse': 'Переносится дальше',
      'p.role': 'Роль', 'p.stack': 'Технологии',
      'p.repo': 'Репозиторий', 'p.repoPrivate': 'Репозиторий (закрыт)',
      'st.prod': 'в продакшене', 'st.beta': 'открытая бета', 'st.pub': 'опубликовано'
    },
    en: {
      'nav.name': 'Yana Paulenka',
      'nav.method': 'Method', 'nav.work': 'Work', 'nav.stack': 'Stack', 'nav.contact': 'Contact',
      'hero.eyebrow': 'Product engineering · AI services · 2024—2026',
      'hero.t1': 'I design', 'hero.t2': 'and build', 'hero.t3': 'whole products',
      'hero.lede': 'From the first conversation with a client to a service running inside their own setup. Requirements, specification, code, deployment, support. Eleven products: AI bots, web services, a 1C-Bitrix module, deployment infrastructure.',
      'hero.cta1': 'See the work', 'hero.cta2': 'LinkedIn',
      'facts.k1': 'products shipped',
      'facts.k2': 'operational routine: largest cut achieved',
      'facts.k3': 'from idea to deploy — a change without a release',
      'facts.k4': 'checks in the ad-account audit',
      'portrait.cap': 'Yana Paulenka — product engineer. Remote, UTC+3.',
      'method.title': 'Method',
      'method.lede': 'I do not "write code against tickets". I take a client requirement to a working feature — and to the state where it can be maintained without me.',
      'm1.t': 'Specification first, code second',
      'm1.b': 'Every feature runs the loop: spec → plan → tasks → implementation. The spec describes behaviour, not wishes — so anyone can come back a year later without re-reading the code.',
      'm2.t': 'A product, not a pile of features',
      'm2.b': 'First the segment and its job, the value, the unit economics, the riskiest assumption. A feature that moves no metric does not enter the plan.',
      'm3.t': 'Architecture sized to the job and the load',
      'm3.b': 'The stack is chosen for the client’s own setup and for the load the product will actually carry. And a change does not wait for a release: you type the request straight into your product’s admin panel, five minutes later you update the module and use what you just thought of.',
      'work.title': 'Work',
      'work.lede': 'Each project comes with a product read and a separate line on what carries over into another product. Some repositories are private on the client’s terms; access on request.',
      'f.all': 'All', 'f.ai': 'AI products', 'f.web': 'Web services', 'f.b2b': 'Internal systems', 'f.infra': 'Infrastructure',
      'stack.title': 'Stack',
      'stack.lede': 'The tool is chosen for the client’s setup and support horizon, not by fashion.',
      'contact.title': 'Let’s talk about your product',
      'contact.lede': 'I can take a product end to end: frame the task as a product problem, write the specification, build it, deploy it and hand it over documented. Or join an existing system where things need to be put in order.',
      'contact.write': 'Write to me — you will get an answer today.',
      'p.problem': 'Problem', 'p.solution': 'Solution', 'p.audience': 'Who it is for',
      'p.value': 'Business outcome', 'p.reuse': 'Carries over',
      'p.role': 'Role', 'p.stack': 'Tech',
      'p.repo': 'Repository', 'p.repoPrivate': 'Repository (private)',
      'st.prod': 'in production', 'st.beta': 'open beta', 'st.pub': 'published'
    }
  };

  var facts = {
    ru: [{ v: '11', k: 'facts.k1' }, { v: '6 ч → 1 мин', k: 'facts.k2' },
         { v: '5 мин', k: 'facts.k3' }, { v: '65', k: 'facts.k4' }],
    en: [{ v: '11', k: 'facts.k1' }, { v: '6 h → 1 min', k: 'facts.k2' },
         { v: '5 min', k: 'facts.k3' }, { v: '65', k: 'facts.k4' }]
  };

  var stack = {
    ru: [
      { h: 'Языки и рантайм', items: ['PHP 7.4 — 8.5 (без Composer)', 'Python 3.11+ / asyncio', 'Vanilla JS, Canvas, SVG', 'SQL'] },
      { h: 'Данные', items: ['SQLite (PDO / SQLAlchemy)', 'MySQL / InnoDB', 'Alembic-миграции', 'Excel: чтение .xls / .xlsx без библиотек'] },
      { h: 'ИИ', items: ['OpenRouter + Yandex Foundation Models', 'Цепочка фолбэков между провайдерами', 'Vision / OCR, распознавание речи', 'Версионирование промптов'] },
      { h: 'Платформы', items: ['Telegram Bot API / aiogram', '1С-Битрикс (модули, компоненты)', 'PWA, Service Worker, web push', 'Leaflet, Яндекс.Геокодер'] },
      { h: 'Интеграции', items: ['Яндекс.Директ API v5, Метрика', 'МойСклад', 'IMAP / SMTP', 'GitHub API, вебхуки'] },
      { h: 'Процесс', items: ['Spec-driven (GitHub Spec Kit)', 'BMAD, Jobs To Be Done', 'Автодеплой без доступа к серверу', 'CI на GitHub Actions'] }
    ],
    en: [
      { h: 'Languages & runtime', items: ['PHP 7.4 — 8.5 (no Composer)', 'Python 3.11+ / asyncio', 'Vanilla JS, Canvas, SVG', 'SQL'] },
      { h: 'Data', items: ['SQLite (PDO / SQLAlchemy)', 'MySQL / InnoDB', 'Alembic migrations', 'Excel: .xls / .xlsx parsed without libraries'] },
      { h: 'AI', items: ['OpenRouter + Yandex Foundation Models', 'Provider fallback chains', 'Vision / OCR, speech recognition', 'Versioned prompts'] },
      { h: 'Platforms', items: ['Telegram Bot API / aiogram', '1C-Bitrix (modules, components)', 'PWA, service worker, web push', 'Leaflet, Yandex Geocoder'] },
      { h: 'Integrations', items: ['Yandex.Direct API v5, Metrica', 'MoySklad', 'IMAP / SMTP', 'GitHub API, webhooks'] },
      { h: 'Process', items: ['Spec-driven (GitHub Spec Kit)', 'BMAD, Jobs To Be Done', 'Deployment without server access', 'CI on GitHub Actions'] }
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
        tag: 'Воронка консалтинга: резюме → бесплатный индекс → платный отчёт → консультация',
        role: 'Продукт, архитектура, разработка, деплой',
        problem: 'Автор методологии продавал разборы вручную: час личного времени на каждого лида ещё до того, как ясно, готов ли тот платить.',
        solution: 'Сайт плюс PHP-сервис разбора: посетитель загружает резюме и бесплатно получает «Индекс карьерной автономии», дальше — платный отчёт и запись на личный разбор. Вокруг: письма, рефералы, кабинет оператора, SEO.',
        audience: 'Эксперт с личным брендом, который продаёт консалтинг.',
        value: 'Первый шаг воронки бесплатный и автоматический — время автора уходит только на тех, кто уже заплатил. Цена меняется из кабинета, без релиза.',
        reuse: 'Скоринг документа моделью по методологии заказчика и бесплатная выдача как вход в платную воронку — переносится на любой экспертный продукт, где первый разбор можно автоматизировать.'
      },
      en: {
        name: 'CareerHack · Executive Matrix',
        tag: 'A consulting funnel: CV → free index → paid report → session',
        role: 'Product, architecture, development, deployment',
        problem: 'The author of the methodology sold career reviews by hand: an hour of personal time per lead, before anyone knew whether they would pay.',
        solution: 'A site plus a PHP analysis service: the visitor uploads a CV, gets the free "Career Autonomy Index", then the paid report and a personal session. Around it: email flows, referrals, an operator console, SEO.',
        audience: 'An expert with a personal brand selling consulting.',
        value: 'The first step is free and automatic — the author’s time now goes only to people who already paid. The price changes from the console, with no release.',
        reuse: 'Model-scored documents against the client’s own methodology, with a free result as the entry to a paid funnel — fits any expert product whose first review can be automated.'
      }
    },
    {
      id: 'expertunpack', cat: ['ai'], year: '2024 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/expertunpack_bot', priv: true,
      live: 'https://t.me/expertunpack_bot', liveLabel: '@expertunpack_bot',
      tech: ['Python', 'aiogram', 'SQLite', 'LLM', 'ASR', 'Telegram Payments'],
      ru: {
        name: 'ExpertUnpack',
        tag: 'Бот распаковывает эксперта вместо методолога',
        role: 'Продукт, архитектура, разработка',
        problem: 'Распаковка эксперта — часы интервью с методологом: дорого и упирается в календарь одного человека.',
        solution: 'Бот ведёт по методологии: задаёт вопросы, принимает ответ текстом, голосом или файлом, накапливает профиль и собирает из него оффер, кейсы и тексты для продаж. Две ценовые ступени, оплата внутри диалога.',
        audience: 'Эксперты, консультанты и наставники.',
        value: 'Методология работает без методолога и круглосуточно, а пользователь платит там же, где получил ценность, — воронка не разрывается переходом на сайт.',
        reuse: 'Диалоговый сбор данных с распознаванием голоса и длинных файлов, плюс все тексты продукта в одном редактируемом файле — годится любому боту-интервьюеру.'
      },
      en: {
        name: 'ExpertUnpack',
        tag: 'A bot that unpacks an expert instead of a methodologist',
        role: 'Product, architecture, development',
        problem: 'Unpacking an expert takes hours of interviews: expensive, and bottlenecked on one person’s calendar.',
        solution: 'The bot walks the methodology: asks the questions, accepts text, voice or files, accumulates a profile and assembles the offer, the cases and the sales copy from it. Two price tiers, paid inside the chat.',
        audience: 'Experts, consultants and mentors.',
        value: 'The methodology works without the methodologist, around the clock, and the user pays where the value landed — the funnel is never broken by a jump to a website.',
        reuse: 'Conversational data capture with speech recognition and long-file handling, plus all product copy in one editable file — fits any interviewing bot.'
      }
    },
    {
      id: 'growth', cat: ['ai'], year: '2026', status: 'beta',
      repo: 'https://github.com/dansury/Growth_Producer', priv: false,
      live: 'https://t.me/GrowthProducer_bot', liveLabel: '@GrowthProducer_bot',
      tech: ['Python', 'LLM', 'ASR / OCR', 'граф заметок', '9 площадок'],
      ru: {
        name: 'Growth Producer',
        tag: 'Продюсер канала: от базы знаний до постов в девяти площадках',
        role: 'Продукт, архитектура, разработка',
        problem: 'Знания есть, регулярности нет: три поста в первую неделю, тишина в третью. SMM дорог и стирает голос автора.',
        solution: 'Всё присланное — текст, голосовые, файлы, видео — ложится в связанный граф заметок. Из него собирается контент-план, бот сам спрашивает о пробелах, а один смысл раскладывается в посты под девять площадок. Публикация — после кнопки «Подтвердить».',
        audience: 'Эксперты и малый бизнес, которые ведут канал сами.',
        value: 'Канал перестаёт зависеть от вдохновения, тексты остаются авторскими, а контроль над публикацией остаётся у человека — это снимает главное возражение против ИИ-контента.',
        reuse: 'Граф знаний из разнородных вложений и мультиформатный экспорт одного смысла — ядро для любого контент-продукта.'
      },
      en: {
        name: 'Growth Producer',
        tag: 'A channel producer: from knowledge base to posts on nine platforms',
        role: 'Product, architecture, development',
        problem: 'The knowledge is there, the cadence is not: three posts in week one, silence by week three. An SMM hire is expensive and erases the author’s voice.',
        solution: 'Everything sent in — text, voice notes, files, video — lands in a linked graph of notes. A content plan is assembled from it, the bot asks about the gaps itself, and one idea is rewritten for nine platforms. Nothing goes out until Confirm is pressed.',
        audience: 'Experts and small businesses running their own channel.',
        value: 'The channel stops depending on inspiration, the writing still sounds like its author, and control over publishing stays with the human — which removes the main objection to AI content.',
        reuse: 'A knowledge graph built from mixed attachments and multi-format export of a single idea — the core of any content product.'
      }
    },
    {
      id: 'cgm', cat: ['ai'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/CGM-diet', priv: false,
      live: 'https://t.me/CGMdiet_bot', liveLabel: '@CGMdiet_bot',
      tech: ['Python', 'aiogram', 'SQLAlchemy / Alembic', 'vision-модели', 'health-sync'],
      ru: {
        name: 'CGM-diet',
        tag: 'Дневник, который отвечает, от чего лично у вас скачет сахар',
        role: 'Продукт, архитектура, разработка',
        problem: 'Универсальной «полезной еды» нет: одна и та же овсянка даёт одному +1.2 ммоль/л, другому +4.0. Носитель монитора видит график, но не знает причину.',
        solution: 'Пользователь присылает то, что и так под рукой: фото тарелки, скриншот сенсора, голосовую отметку. Через две-три недели бот отвечает числами: «после блюд с добавленным сахаром подъём +3.2 против +1.4, 11 наблюдений, достоверность высокая».',
        audience: 'Люди на непрерывном мониторинге глюкозы — от диабета до биохакинга — и их врачи.',
        value: 'Ценность растёт с каждой неделей ведения: чем длиннее дневник, тем точнее выводы. Удержание встроено в механику, а не в напоминания.',
        reuse: 'Сведение разнородных событий на общую шкалу времени и честная статистика с оценкой достоверности — основа любой аналитики «действие → результат».'
      },
      en: {
        name: 'CGM-diet',
        tag: 'A diary that answers what actually spikes your glucose',
        role: 'Product, architecture, development',
        problem: 'Universally "healthy food" does not exist: the same porridge gives one person +1.2 mmol/L and another +4.0. The monitor shows the curve but never the cause.',
        solution: 'The user sends what is already in hand: a photo of the plate, a screenshot of the sensor, a voice note. Two or three weeks in, the bot answers with numbers: "meals with added sugar raise you +3.2 against +1.4, 11 observations, high confidence."',
        audience: 'People on continuous glucose monitoring — from diabetes to biohacking — and their doctors.',
        value: 'The product gets more valuable every week it is used: the longer the diary, the sharper the findings. Retention sits in the mechanic, not in reminders.',
        reuse: 'Aligning mixed events on one timeline and honest statistics with a confidence estimate — the base of any "action → result" analytics.'
      }
    },
    {
      id: 'neuropro', cat: ['ai', 'web'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/NeuroPro', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP 8.4 без Composer', 'SQLite', 'Yandex Vision OCR', 'OpenRouter / Yandex LLM', 'SVG', 'SMTP'],
      ru: {
        name: 'NeuroPro',
        tag: 'Отчёт по психофизиологическому тесту: математику считает код, нейросеть только пишет',
        role: 'Продукт, архитектура, разработка, конституция проекта',
        problem: 'Интерпретация теста — час ручной работы специалиста, и качество плавает. Отдать задачу целиком нейросети нельзя: она пересчитывает показатели и начинает спорить с методикой.',
        solution: 'На входе выгрузка Excel и скриншот. Код считает все показатели и строит диаграмму-паутинку и матрицу; модель получает готовые числа и пишет текст в два слоя — сначала содержание, потом язык. На выходе брендированный PDF или письмо.',
        audience: 'Психологи и HR-специалисты, работающие на оборудовании «Эгоскоп».',
        value: 'Час работы специалиста превращается в минуты, качество перестаёт плавать, а отчёт защитим перед профессионалом: каждое число посчитал код, а не модель.',
        reuse: 'Разделение расчёта и формулировки — детерминированное ядро плюс модель в роли редактора. Обязательный шаблон везде, где ИИ-текст будут проверять эксперты.'
      },
      en: {
        name: 'NeuroPro',
        tag: 'A psychophysiological report: code does the maths, the model only writes',
        role: 'Product, architecture, development, project constitution',
        problem: 'Interpreting a test is an hour of expert work, and the quality drifts. Handing the task to a model wholesale fails: it recomputes the metrics and argues with the methodology.',
        solution: 'Input is an Excel export and a screenshot. Code computes every metric and renders the radar chart and the matrix; the model receives finished numbers and writes in two layers — content first, then language. Output is a branded PDF or an email.',
        audience: 'Psychologists and HR specialists working with Egoscope hardware.',
        value: 'An hour of expert work becomes minutes, quality stops drifting, and the report survives professional scrutiny: every number came from code, not a model.',
        reuse: 'Separating calculation from phrasing — a deterministic core plus the model as an editor. The required pattern anywhere experts will review AI-written text.'
      }
    },
    {
      id: 'kp', cat: ['ai', 'b2b'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/kp-atlant', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 8.1', 'SQLite', 'OpenRouter + Yandex', 'IMAP / SMTP', 'PWA', 'web push'],
      ru: {
        name: 'КП из входящей почты',
        tag: 'Письмо-запрос → готовое коммерческое предложение, без выдуманных цен',
        role: 'Продукт, архитектура, разработка',
        problem: 'Поток писем-запросов: менеджер читает каждое, ищет цены и остатки, собирает КП руками. Ответ уходит через часы, иногда с ошибкой в цене — а это уже обязательство перед клиентом.',
        solution: 'Письмо проходит триаж: бесплатный префильтр отсекает служебное, один вызов модели разбирает и классифицирует, маршрутизатор выбирает сценарий ответа. Цены и остатки берутся из каталога, описания — из корпоративной вики. КП собирается с карточками, фото и допродажей; PWA с push кладёт запрос менеджеру сразу.',
        audience: 'Производственная компания с потоком B2B-запросов и небольшим отделом продаж.',
        value: 'Ответ клиенту за минуты вместо часов. Модель физически не может придумать цену или остаток — они приходят из каталога; менеджер проверяет и отправляет.',
        reuse: 'Триаж входящего потока одним вызовом модели и подмешивание фактов из корпоративной базы — готовый каркас для поддержки, заявок и любой почтовой автоматизации.'
      },
      en: {
        name: 'Quotes from the inbox',
        tag: 'An enquiry email → a finished commercial proposal, with no invented prices',
        role: 'Product, architecture, development',
        problem: 'A stream of enquiry emails: the manager reads each one, looks up prices and stock, assembles the quote by hand. Replies take hours and sometimes carry a wrong price — already a commitment to the customer.',
        solution: 'Each letter goes through triage: a free prefilter drops service mail, one model call parses and classifies, a router picks the reply scenario. Prices and stock come from the catalogue, descriptions from the company wiki. The quote is assembled with cards, photos and upsell; a PWA with push puts it in front of the manager at once.',
        audience: 'A manufacturer with a steady flow of B2B enquiries and a small sales team.',
        value: 'Replies in minutes instead of hours. The model physically cannot invent a price or a stock level — those come from the catalogue; the manager checks and sends.',
        reuse: 'Triaging an inbound stream in a single model call and injecting facts from a company knowledge base — a ready frame for support, intake and any mail automation.'
      }
    },
    {
      id: 'serials', cat: ['b2b'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/atlant.serials', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 7.4+', '1С-Битрикс', 'MySQL / InnoDB', 'PDF / Code 128 / QR / ZIP — своя реализация', 'МойСклад'],
      ru: {
        name: 'Автовёрстка типографской продукции',
        tag: 'Печатный лист этикеток со штрихкодами: 5 часов ручной вёрстки → 1 минута',
        role: 'Архитектура, разработка, установка на прод',
        problem: 'Вёрстка партии этикеток со штрихкодами занимала до пяти часов в редакторе — и в неё регулярно вкрадывались ошибки. Серийные номера при этом жили в таблицах, а покупатель не мог проверить подлинность изделия.',
        solution: 'Модуль сам верстает печатный лист: Code 128, QR, разметка под резку, готовый PDF — минута вместо пяти часов. Рядом — реестр номеров со статусами, обмен со складом и страница проверки подлинности для покупателя. PDF, штрихкод, QR и ZIP написаны внутри модуля: на хостинге заказчика нет Composer.',
        audience: 'Производитель с серийным учётом продукции, его дилеры и конечные покупатели.',
        value: 'Пять часов вёрстки превратились в минуту, а ошибки в этикетках исчезли вместе с ручным этапом. Подлинность проверяет сам покупатель — меньше нагрузки на поддержку и защита бренда от подделок.',
        reuse: 'Генератор печатных PDF без единой внешней библиотеки — штрихкод, QR, раскладка листа под резку. Ставится на любой хостинг, где нельзя ничего установить.'
      },
      en: {
        name: 'Automatic print layout',
        tag: 'A sheet of barcode labels: 5 hours of manual layout → 1 minute',
        role: 'Architecture, development, production install',
        problem: 'Laying out a batch of barcode labels took up to five hours in an editor — and errors kept slipping in. Meanwhile the serial numbers lived in spreadsheets and buyers could not verify a product.',
        solution: 'The module composes the print sheet itself: Code 128, QR, cut marks, a finished PDF — one minute instead of five hours. Alongside it: a registry of numbers with statuses, warehouse exchange and an authenticity-check page for buyers. PDF, barcode, QR and ZIP are implemented inside the module — the client’s hosting has no Composer.',
        audience: 'A manufacturer with serial-numbered products, its dealers and end customers.',
        value: 'Five hours of layout became one minute, and label errors disappeared with the manual step. Buyers verify authenticity themselves — less load on support and brand protection against counterfeits.',
        reuse: 'A print-PDF generator with no external library at all — barcode, QR, sheet layout with cut marks. Installs on any hosting where nothing can be installed.'
      }
    },
    {
      id: 'kraski', cat: ['b2b', 'web'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/kraskiweb', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 8.2+', 'SQLite', 'Leaflet', 'PWA / web push', 'ASR / OCR', 'Яндекс.Геокодер'],
      ru: {
        name: 'Полевая ERP с автомаршрутизацией',
        tag: 'Маршруты, склад и внутренний «телеграм» в одном веб-приложении',
        role: 'Продукт, архитектура, разработка, спецификации',
        problem: 'Маршруты представителей планировались в голове и в Excel: руководитель не знал, кто где был и сколько материалов выдано. Переписка по объектам жила в личных мессенджерах и уходила вместе с сотрудником.',
        solution: 'Карта клиентов с автосборкой маршрута, расчёт выдачи материалов, статусы и журнал аудита. На карточке каждого клиента — общая лента, как в телеграме: текст, фото, видео, голосовые с расшифровкой и push, так что представители и руководитель обсуждают объект внутри самой системы. Вход по вечной персональной ссылке: у полевых сотрудников нет и не будет корпоративной почты.',
        audience: 'Оптовый поставщик с выездными торговыми представителями.',
        value: 'Маршрут собирается за минуты и виден руководителю в реальном времени. Переписка по клиенту лежит в его карточке, а не в чужом мессенджере: история остаётся компании, а не сотруднику.',
        reuse: 'Встроенный мессенджер с медиа, расшифровкой голоса и push прямо в веб-приложении — снимает зависимость от внешних чатов. Плюс вход без пароля по персональной ссылке для полевых сотрудников.'
      },
      en: {
        name: 'Field ERP with auto-routing',
        tag: 'Routes, stock and an in-house "Telegram" inside one web app',
        role: 'Product, architecture, development, specifications',
        problem: 'Rep routes were planned in someone’s head and in Excel: the manager did not know who had been where or how much material was issued. Site conversations lived in personal messengers and left with the employee.',
        solution: 'A client map with auto-assembled routes, material-issue calculation, statuses and an audit log. Every client card carries a shared thread that behaves like Telegram: text, photos, video, voice notes with transcription and push — so reps and managers discuss the site inside the system itself. Sign-in is a permanent personal link: field staff have no corporate email and never will.',
        audience: 'A wholesaler with field sales representatives.',
        value: 'A route is assembled in minutes and visible to the manager in real time. The conversation about a client sits on that client’s card, not in someone’s messenger — the history belongs to the company, not the employee.',
        reuse: 'A built-in messenger with media, voice transcription and push inside the web app — it removes the dependency on external chats. Plus passwordless sign-in by personal link for field staff.'
      }
    },
    {
      id: 'direct', cat: ['ai', 'infra'], year: '2026', status: 'pub',
      repo: 'https://github.com/dansury/yandex-direct-ads', priv: false,
      live: null, liveLabel: null,
      tech: ['Python stdlib', 'Яндекс.Директ API v5', 'Яндекс.Метрика', 'Claude Skill'],
      ru: {
        name: 'Директолог как ИИ-агент',
        tag: 'Аудит по 65 проверкам, юнит-экономика, автопилот рекламного кабинета',
        role: 'Архитектура, разработка, справочники и бенчмарки',
        problem: 'Кабинеты сливают бюджет на настройках, включённых по умолчанию. Аудит у подрядчика делается раз в квартал, а деньги уходят каждый день.',
        solution: 'Аудит по 65 проверкам с весовым скорингом, грейдом и планом исправлений; предельная ставка считается из чека, маржи и конверсии, а не с потолка; кампания собирается из одного JSON идемпотентно; дальше правила оптимизации, A/B с проверкой значимости, офлайн-продажи из CRM в аналитику и недельный автопилот. Sandbox, cost guard и dry-run включены по умолчанию.',
        audience: 'Владельцы бизнеса со своим кабинетом и агентства на много аккаунтов.',
        value: 'Аудит занимает минуты вместо дней, а оптимизация идёт по выручке, а не по числу заявок. Ни одно изменение не уходит в кабинет без подтверждения — это и делает автоматизацию рекламы приемлемой для владельца бюджета.',
        reuse: 'Идемпотентная сборка из одного JSON и dry-run с откатом — так безопасно автоматизируется любая система, где ошибка стоит денег.'
      },
      en: {
        name: 'An ads specialist as an AI agent',
        tag: 'A 65-point audit, unit economics, autopilot for the ad account',
        role: 'Architecture, development, reference data and benchmarks',
        problem: 'Ad accounts burn budget on settings that are on by default. An agency audit happens quarterly — the money leaks daily.',
        solution: '65 checks with weighted scoring, a grade and a fix plan; the maximum bid derived from order value, margin and conversion rather than guessed; a whole campaign built from one JSON, idempotently; then optimisation rules, A/B tests with a significance check, offline CRM sales pushed into analytics and a weekly autopilot. Sandbox, cost guard and dry-run are on by default.',
        audience: 'Business owners running their own account, and agencies handling many.',
        value: 'An audit takes minutes instead of days, and optimisation targets revenue rather than lead count. Nothing reaches the live account without confirmation — which is what makes ad automation acceptable to the person whose budget it is.',
        reuse: 'Idempotent assembly from one JSON and dry-run with rollback — the safe way to automate any system where a mistake costs money.'
      }
    },
    {
      id: 'toolkit', cat: ['infra'], year: '2025 — 2026', status: 'pub',
      repo: 'https://github.com/dansury/site_yacloud_openrouter', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP без Composer', 'cURL', 'SQLite', 'OpenRouter', 'Yandex Foundation Models / Vision'],
      ru: {
        name: 'LLM-тулкит для PHP-хостинга',
        tag: 'Два провайдера моделей, парсинг документов, почта и настройки — одним набором',
        role: 'Архитектура, разработка, спецификации',
        problem: 'Каждый новый ИИ-проект начинал с одного и того же: подключение к моделям, разбор PDF и DOCX, почта, настройки. Копии расходились между проектами, и починка бага в одном месте не чинила остальные.',
        solution: 'Два провайдера — Yandex Cloud и OpenRouter — за одним интерфейсом, с выбором модели на сессию и настраиваемой цепочкой фолбэков. Разбор DOCX и PDF с деградацией в vision-модели и OCR, SMTP, настройки из админки. Чистый PHP: нужны только cURL, SQLite и ZIP.',
        audience: 'Владельцы сервисов на обычном PHP-хостинге, которым нужен ИИ без переезда в облако.',
        value: 'Новый ИИ-сервис стартует не с нуля, а с рабочей инфраструктуры. Смена модели или провайдера становится настройкой, а не релизом: подорожавшую модель можно заменить в тот же день.',
        reuse: 'Это и есть переносимая часть: тулкит стоит в основе NeuroPro и «КП из входящей почты» — новый ИИ-продукт начинается с него.'
      },
      en: {
        name: 'LLM toolkit for PHP hosting',
        tag: 'Two model providers, document parsing, mail and settings in one kit',
        role: 'Architecture, development, specifications',
        problem: 'Every new AI project began with the same plumbing: talking to models, reading PDF and DOCX, sending mail, storing settings. The copies drifted, and fixing a bug in one place fixed nothing elsewhere.',
        solution: 'Two providers — Yandex Cloud and OpenRouter — behind one interface, with per-session model choice and a configurable fallback chain. DOCX and PDF parsing degrading into vision models and OCR, SMTP, settings from an admin page. Plain PHP: only cURL, SQLite and ZIP.',
        audience: 'Service owners on ordinary PHP hosting who need AI without moving to a cloud platform.',
        value: 'A new AI service starts from working infrastructure rather than zero. Switching model or provider is a setting, not a release — a model that got expensive can be replaced the same day.',
        reuse: 'This is the portable part: the toolkit sits under NeuroPro and Quotes-from-the-inbox — a new AI product starts here.'
      }
    },
    {
      id: 'pull', cat: ['infra'], year: '2025 — 2026', status: 'pub',
      repo: 'https://github.com/dansury/pull', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP', 'GitHub ZIP API', 'без git и SSH'],
      ru: {
        name: 'pull.php',
        tag: 'Автодеплой с GitHub на любой хостинг — одним PHP-файлом',
        role: 'Идея, разработка, документация',
        problem: 'Код в GitHub, сайт на хостинге, где из инструментов только FTP. Ручной перенос ломается предсказуемо: залили не все файлы, залили поверх старую версию, никто не знает, что сейчас на проде.',
        solution: 'Один PHP-файл скачивает ZIP выбранной ветки, распаковывает и раскладывает нужную папку в каталог, где лежит сам. Ни git, ни SSH, ни shell-доступа: достаточно PHP и исходящего HTTPS.',
        audience: 'Владельцы сайтов на shared-хостинге и разработчики, которые их ведут.',
        value: 'Заказчик обновляет прод кнопкой и в любой момент знает, какая ветка на сервере. Разработчик не держит у себя FTP-доступы, а откат — это выбор другой ветки, а не восстановление из бэкапа.',
        reuse: 'Штатный механизм обновления во всех моих PHP-проектах: деплой без доступа к серверу и без прав, которых на дешёвом хостинге не бывает.'
      },
      en: {
        name: 'pull.php',
        tag: 'GitHub-to-any-hosting deployment in a single PHP file',
        role: 'Idea, development, documentation',
        problem: 'Code on GitHub, the site on hosting where the only tool is FTP. The manual copy breaks predictably: not all files uploaded, an old version pasted over a new one, nobody sure what is live.',
        solution: 'One PHP file downloads the ZIP of a chosen branch, unpacks it and lays the right folder into the directory it sits in. No git, no SSH, no shell — just PHP and outbound HTTPS.',
        audience: 'Owners of sites on shared hosting and the developers maintaining them.',
        value: 'The client updates production with a button and always knows which branch is live. The developer stops holding FTP credentials, and a rollback is picking another branch rather than restoring a backup.',
        reuse: 'The standard update mechanism across all my PHP projects: deployment without server access and without rights cheap hosting never grants.'
      }
    }
  ];

  return { i18n: i18n, facts: facts, stack: stack, projects: projects };
})();
