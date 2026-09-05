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
      'm3.t': 'Внедрение фич одной кнопкой (Experimental)',
      'm3.b': 'Пожелание пишется прямо в админке продукта, задача уходит в GitHub, изменение прогоняется в песочнице этого же продукта и через пять минут ставится кнопкой. Не подошло — откат одним нажатием: на сервере всегда лежит конкретная ветка.',
      'work.title': 'Проекты',
      'work.lede': 'Часть репозиториев закрыта по условиям заказчика; доступ открываю по запросу.',
      'f.all': 'Все', 'f.ai': 'ИИ-продукты', 'f.web': 'Веб-сервисы', 'f.b2b': 'Внутренние системы', 'f.infra': 'Инфраструктура',
      'stack.title': 'Стек',
      'stack.lede': 'Инструмент выбирается под контур заказчика и срок поддержки, а не по моде.',
      'contact.title': 'Обсудим ваш продукт',
      'contact.lede': 'Возьмусь за продукт целиком: разберу задачу как продуктовую, напишу спецификацию, соберу, разверну и передам с документацией. Или подключусь к существующей системе — там, где нужно навести порядок.',
      'contact.write': 'Напишите — отвечу сегодня.',
      'p.problem': 'Проблема', 'p.solution': 'Решение', 'p.audience': 'Для кого', 'p.value': 'Что даёт бизнесу',
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
      'm3.t': 'Features shipped by one button (Experimental)',
      'm3.b': 'The request is typed straight into the product’s admin panel, the task goes to GitHub, the change is tried in that product’s own sandbox and installs five minutes later with a button. Not right? One click rolls it back — the server always holds a specific branch.',
      'work.title': 'Work',
      'work.lede': 'Some repositories are private on the client’s terms; access on request.',
      'f.all': 'All', 'f.ai': 'AI products', 'f.web': 'Web services', 'f.b2b': 'Internal systems', 'f.infra': 'Infrastructure',
      'stack.title': 'Stack',
      'stack.lede': 'The tool is chosen for the client’s setup and support horizon, not by fashion.',
      'contact.title': 'Let’s talk about your product',
      'contact.lede': 'I can take a product end to end: frame the task as a product problem, write the specification, build it, deploy it and hand it over documented. Or join an existing system where things need to be put in order.',
      'contact.write': 'Write to me — you will get an answer today.',
      'p.problem': 'Problem', 'p.solution': 'Solution', 'p.audience': 'Who it is for', 'p.value': 'Business outcome',
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
      id: 'kp', cat: ['ai', 'b2b'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/kp-atlant', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 8.1', 'SQLite', 'OpenRouter + Yandex', 'IMAP / SMTP', 'PWA', 'web push'],
      ru: {
        name: 'Автосборка КП по входящему email одной кнопкой',
        tag: 'Письмо-запрос → готовое коммерческое предложение',
        role: 'Продукт, архитектура, разработка',
        problem: 'Менеджер собирал каждое КП руками — часы на ответ и ошибки в ценах.',
        solution: 'Письмо разбирается и классифицируется одним вызовом модели; цены и остатки берутся из каталога, описания — из корпоративной вики. КП с карточками, фото и допродажей собирается кнопкой, push кладёт запрос менеджеру сразу.',
        audience: 'Производство с потоком B2B-запросов и небольшим отделом продаж.',
        value: 'Ответ за минуты вместо часов, а цену модель придумать не может — она приходит из каталога.'
      },
      en: {
        name: 'Quotes assembled from an inbound email in one click',
        tag: 'An enquiry email → a finished commercial proposal',
        role: 'Product, architecture, development',
        problem: 'Every quote was assembled by hand — hours to reply and wrong prices.',
        solution: 'One model call parses and classifies the letter; prices and stock come from the catalogue, descriptions from the company wiki. The quote with cards, photos and upsell is built by a button, and push puts it in front of the manager at once.',
        audience: 'A manufacturer with a flow of B2B enquiries and a small sales team.',
        value: 'Replies in minutes instead of hours, and the model cannot invent a price — it comes from the catalogue.'
      }
    },
    {
      id: 'serials', cat: ['b2b'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/atlant.serials', priv: true,
      live: null, liveLabel: null,
      tech: ['PHP 7.4+', '1С-Битрикс', 'MySQL / InnoDB', 'PDF / Code 128 / QR / ZIP — своя реализация', 'МойСклад'],
      ru: {
        name: 'Автовёрстка типографской продукции',
        tag: 'Печатный лист этикеток со штрихкодами: 5 часов → 1 минута',
        role: 'Архитектура, разработка, установка на прод',
        problem: 'Вёрстка партии этикеток занимала до пяти часов и всё равно шла с ошибками.',
        solution: 'Модуль сам собирает печатный лист: Code 128, QR, разметка под резку, готовый PDF. Рядом — реестр серийных номеров, обмен со складом и проверка подлинности покупателем. PDF, штрихкод, QR и ZIP написаны внутри: на хостинге заказчика нет Composer.',
        audience: 'Производитель с серийным учётом продукции и его покупатели.',
        value: 'Пять часов ручной работы превратились в минуту, ошибки ушли вместе с ручным этапом, а подлинность клиент проверяет сам.'
      },
      en: {
        name: 'Automatic print layout',
        tag: 'A sheet of barcode labels: 5 hours → 1 minute',
        role: 'Architecture, development, production install',
        problem: 'Laying out a batch of labels took up to five hours and still shipped with errors.',
        solution: 'The module composes the print sheet itself: Code 128, QR, cut marks, a finished PDF. Alongside it — a serial-number registry, warehouse exchange and buyer-side authenticity checks. PDF, barcode, QR and ZIP are written inside the module: the client’s hosting has no Composer.',
        audience: 'A manufacturer with serial-numbered products, and its buyers.',
        value: 'Five hours of manual work became one minute, the errors left with the manual step, and buyers verify authenticity themselves.'
      }
    },
    {
      id: 'cgm', cat: ['ai'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/CGM-diet', priv: false,
      live: 'https://t.me/CGMdiet_bot', liveLabel: '@CGMdiet_bot',
      tech: ['Python', 'aiogram', 'SQLAlchemy / Alembic', 'vision-модели', 'health-sync'],
      ru: {
        name: 'Бот-диетолог: анализ еды по датчику глюкозы',
        tag: 'Дневник, который отвечает, от чего лично у вас скачет сахар',
        role: 'Продукт, архитектура, разработка',
        problem: 'Носитель монитора глюкозы видит скачки, но не знает, какая еда их вызывает.',
        solution: 'Фото тарелки, скриншот сенсора и голосовая отметка сводятся на общую шкалу времени. Через две-три недели бот отвечает числами: «после яблок у вас подъём +3.2 против +1.4, 11 наблюдений, достоверность высокая».',
        audience: 'Люди на непрерывном мониторинге глюкозы и их врачи.',
        value: 'Чем длиннее дневник, тем точнее выводы — удержание встроено в саму механику, а не в напоминания.'
      },
      en: {
        name: 'A diet bot that reads food against your glucose sensor',
        tag: 'A diary that answers what personally spikes your glucose',
        role: 'Product, architecture, development',
        problem: 'People wearing a glucose monitor see the spikes but not which food caused them.',
        solution: 'A photo of the plate, a screenshot of the sensor and a voice note are aligned on one timeline. Two or three weeks in, the bot answers with numbers: "apples raise you +3.2 against +1.4, 11 observations, high confidence."',
        audience: 'People on continuous glucose monitoring and their doctors.',
        value: 'The longer the diary, the sharper the findings — retention sits in the mechanic, not in reminders.'
      }
    },
    {
      id: 'kraski', cat: ['b2b', 'web'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/kraskiweb', priv: true,
      live: 'https://paints.skywood.club/?demoaccess', liveLabel: 'Демодоступ',
      tech: ['PHP 8.2+', 'SQLite', 'Leaflet', 'PWA / web push', 'ASR / OCR', 'Яндекс.Геокодер'],
      ru: {
        name: 'Полевая ERP с автомаршрутизацией',
        tag: 'Маршруты, склад и внутренний «телеграм» в одном веб-приложении',
        role: 'Продукт, архитектура, разработка, спецификации',
        problem: 'Маршруты жили в Excel, а переписка по клиентам — в личных мессенджерах сотрудников.',
        solution: 'Карта клиентов с автосборкой маршрута, расчёт выдачи материалов, статусы и журнал аудита. На карточке клиента — общая лента как в телеграме: текст, фото, видео, голосовые с расшифровкой, push. Вход по вечной персональной ссылке: у полевых сотрудников нет корпоративной почты.',
        audience: 'Оптовый поставщик с выездными представителями.',
        value: 'Маршрут собирается за минуты и виден руководителю, а история по клиенту остаётся компании, а не уходит с сотрудником.'
      },
      en: {
        name: 'Field ERP with auto-routing',
        tag: 'Routes, stock and an in-house "Telegram" inside one web app',
        role: 'Product, architecture, development, specifications',
        problem: 'Routes lived in Excel and client conversations lived in employees’ personal messengers.',
        solution: 'A client map with auto-assembled routes, material-issue calculation, statuses and an audit log. Every client card carries a shared thread that behaves like Telegram: text, photos, video, voice notes with transcription, push. Sign-in is a permanent personal link — field staff have no corporate email.',
        audience: 'A wholesaler with field sales representatives.',
        value: 'A route is assembled in minutes and visible to the manager, and the client’s history stays with the company instead of leaving with the employee.'
      }
    },
    {
      id: 'neuropro', cat: ['ai', 'web'], year: '2026', status: 'prod',
      repo: 'https://github.com/dansury/NeuroPro', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP 8.4 без Composer', 'SQLite', 'Yandex Vision OCR', 'OpenRouter / Yandex LLM', 'SVG', 'SMTP'],
      ru: {
        name: 'NeuroPro',
        tag: 'Отчёт по психофизиологическому тесту: считает код, пишет нейросеть',
        role: 'Продукт, архитектура, разработка, конституция проекта',
        problem: 'Специалист тратил час на отчёт, а качество зависело от того, кто его писал.',
        solution: 'Код считает все показатели и строит диаграмму-паутинку и матрицу; модель получает готовые числа и пишет текст в два слоя — сначала содержание, потом язык. На выходе брендированный PDF или письмо.',
        audience: 'Психологи и HR-специалисты на оборудовании «Эгоскоп».',
        value: 'Час работы превращается в минуты, и отчёт защитим перед профессионалом: каждое число посчитал код, а не модель.'
      },
      en: {
        name: 'NeuroPro',
        tag: 'A psychophysiological report: code computes, the model writes',
        role: 'Product, architecture, development, project constitution',
        problem: 'An expert spent an hour per report, and the quality depended on who wrote it.',
        solution: 'Code computes every metric and renders the radar chart and the matrix; the model receives finished numbers and writes in two layers — content first, then language. Output is a branded PDF or an email.',
        audience: 'Psychologists and HR specialists working with Egoscope hardware.',
        value: 'An hour of work becomes minutes, and the report survives professional scrutiny: every number came from code, not a model.'
      }
    },
    {
      id: 'careerhack', cat: ['ai', 'web'], year: '2025 — 2026', status: 'prod',
      repo: 'https://github.com/dansury/careerhack', priv: true,
      live: 'https://careerhack.ru', liveLabel: 'careerhack.ru',
      tech: ['PHP 8', 'SQLite', 'LLM-скоринг', 'SMTP', 'JSON-LD / SEO', 'PWA'],
      ru: {
        name: 'CareerHack · Executive Matrix',
        tag: 'Воронка консалтинга: резюме → бесплатный индекс → платный отчёт',
        role: 'Продукт, архитектура, разработка, деплой',
        problem: 'Эксперт тратил час на каждого лида ещё до того, как понимал, готов ли тот платить.',
        solution: 'Посетитель загружает резюме и бесплатно получает «Индекс карьерной автономии», дальше — платный отчёт и запись на личный разбор. Вокруг: письма, рефералы, кабинет оператора, SEO.',
        audience: 'Эксперт с личным брендом, который продаёт консалтинг.',
        value: 'Первый шаг воронки бесплатный и автоматический — время автора уходит только на оплативших, а цена меняется из кабинета, без релиза.'
      },
      en: {
        name: 'CareerHack · Executive Matrix',
        tag: 'A consulting funnel: CV → free index → paid report',
        role: 'Product, architecture, development, deployment',
        problem: 'The expert spent an hour on every lead before knowing whether they would pay.',
        solution: 'The visitor uploads a CV and gets the free "Career Autonomy Index", then the paid report and a personal session. Around it: email flows, referrals, an operator console, SEO.',
        audience: 'An expert with a personal brand selling consulting.',
        value: 'The first step is free and automatic — the author’s time goes only to people who paid, and the price changes from the console, with no release.'
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
        problem: 'Распаковка эксперта — часы интервью и календарь одного методолога.',
        solution: 'Бот ведёт по методологии, принимает ответ текстом, голосом или файлом и собирает из профиля оффер, кейсы и тексты для продаж. Две ценовые ступени, оплата внутри диалога.',
        audience: 'Эксперты, консультанты и наставники.',
        value: 'Методология работает круглосуточно и без методолога, а платят там же, где получили ценность.'
      },
      en: {
        name: 'ExpertUnpack',
        tag: 'A bot that unpacks an expert instead of a methodologist',
        role: 'Product, architecture, development',
        problem: 'Unpacking an expert means hours of interviews and one methodologist’s calendar.',
        solution: 'The bot walks the methodology, accepts text, voice or files, and assembles the offer, the cases and the sales copy from the profile. Two price tiers, paid inside the chat.',
        audience: 'Experts, consultants and mentors.',
        value: 'The methodology runs around the clock without the methodologist, and people pay where the value landed.'
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
        problem: 'У эксперта есть знания, но нет регулярности: три поста в первую неделю, тишина в третью.',
        solution: 'Присланное — текст, голос, файлы, видео — ложится в связанный граф заметок; из него собирается контент-план, а один смысл раскладывается в посты под девять площадок. Публикация — после кнопки «Подтвердить».',
        audience: 'Эксперты и малый бизнес, которые ведут канал сами.',
        value: 'Канал перестаёт зависеть от вдохновения, тексты остаются авторскими, а публикацию по-прежнему решает человек.'
      },
      en: {
        name: 'Growth Producer',
        tag: 'A channel producer: from knowledge base to posts on nine platforms',
        role: 'Product, architecture, development',
        problem: 'The expert has the knowledge but no cadence: three posts in week one, silence by week three.',
        solution: 'Everything sent in — text, voice, files, video — lands in a linked graph of notes; a content plan is built from it and one idea is rewritten for nine platforms. Nothing goes out until Confirm is pressed.',
        audience: 'Experts and small businesses running their own channel.',
        value: 'The channel stops depending on inspiration, the writing still sounds like its author, and a human still decides what goes out.'
      }
    },
    {
      id: 'direct', cat: ['ai', 'infra'], year: '2026', status: 'pub',
      repo: 'https://github.com/dansury/yandex-direct-ads', priv: false,
      live: null, liveLabel: null,
      tech: ['Python stdlib', 'Яндекс.Директ API v5', 'Яндекс.Метрика', 'Claude Skill'],
      ru: {
        name: 'Директолог как ИИ-агент',
        tag: 'Аудит по 65 проверкам, юнит-экономика, автопилот кабинета',
        role: 'Архитектура, разработка, справочники и бенчмарки',
        problem: 'Кабинет сливает бюджет на настройках по умолчанию, а аудит делают раз в квартал.',
        solution: '65 проверок с грейдом и планом исправлений, предельная ставка из юнит-экономики, кампания из одного JSON идемпотентно, правила оптимизации и офлайн-продажи из CRM в аналитику. Sandbox и dry-run включены по умолчанию.',
        audience: 'Владельцы рекламных кабинетов и агентства.',
        value: 'Аудит занимает минуты вместо дней, оптимизация идёт по выручке, и ничего не уходит в кабинет без подтверждения.'
      },
      en: {
        name: 'An ads specialist as an AI agent',
        tag: 'A 65-point audit, unit economics, autopilot for the account',
        role: 'Architecture, development, reference data and benchmarks',
        problem: 'The account burns budget on default settings, and the audit happens quarterly.',
        solution: '65 checks with a grade and a fix plan, the maximum bid derived from unit economics, a campaign built from one JSON idempotently, optimisation rules and offline CRM sales pushed into analytics. Sandbox and dry-run are on by default.',
        audience: 'Ad-account owners and agencies.',
        value: 'An audit takes minutes instead of days, optimisation targets revenue, and nothing reaches the live account without confirmation.'
      }
    },
    {
      id: 'toolkit', cat: ['infra'], year: '2025 — 2026', status: 'pub',
      repo: 'https://github.com/dansury/site_yacloud_openrouter', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP без Composer', 'cURL', 'SQLite', 'OpenRouter', 'Yandex Foundation Models / Vision'],
      ru: {
        name: 'LLM-тулкит для PHP-хостинга',
        tag: 'Нейросети, OCR и разбор документов на обычном shared-хостинге',
        role: 'Архитектура, разработка, спецификации',
        problem: 'Надо внедрить нейросети на дешёвом shared-хостинге.',
        solution: 'Два провайдера — Yandex Cloud и OpenRouter — за одним интерфейсом с цепочкой фолбэков, разбор PDF и DOCX с деградацией в vision-модели и OCR, SMTP и настройки из админки. Нужны только cURL, SQLite и ZIP.',
        audience: 'Владельцы сервисов на обычном PHP-хостинге.',
        value: 'Новый ИИ-сервис стартует с рабочей инфраструктуры, а смена модели или провайдера — настройка, а не релиз.'
      },
      en: {
        name: 'LLM toolkit for PHP hosting',
        tag: 'AI, OCR and document parsing on ordinary shared hosting',
        role: 'Architecture, development, specifications',
        problem: 'AI has to run on cheap shared hosting.',
        solution: 'Two providers — Yandex Cloud and OpenRouter — behind one interface with a fallback chain, PDF and DOCX parsing degrading into vision models and OCR, SMTP and settings from an admin page. Only cURL, SQLite and ZIP required.',
        audience: 'Owners of services on ordinary PHP hosting.',
        value: 'A new AI service starts from working infrastructure, and switching model or provider is a setting rather than a release.'
      }
    },
    {
      id: 'pull', cat: ['infra'], year: '2025 — 2026', status: 'pub',
      repo: 'https://github.com/dansury/pull', priv: false,
      live: null, liveLabel: null,
      tech: ['PHP', 'GitHub ZIP API', 'без git и SSH'],
      ru: {
        name: 'Автодеплой с GitHub',
        tag: 'Обновление прода одним PHP-файлом — без git, SSH и доступа к серверу',
        role: 'Идея, разработка, документация',
        problem: 'Код в GitHub, а на хостинге только FTP — перенос вручную ломается.',
        solution: 'Один PHP-файл скачивает ZIP выбранной ветки и раскладывает нужную папку рядом с собой. При каждом обновлении репозитория возможна автоподгрузка — прод обновляется сам, без участия человека.',
        audience: 'Владельцы сайтов на shared-хостинге и их разработчики.',
        value: 'Заказчик в любой момент знает, какая ветка на сервере, а откат — это выбор другой ветки, а не восстановление из бэкапа.'
      },
      en: {
        name: 'Auto-deploy from GitHub',
        tag: 'Production updated by one PHP file — no git, no SSH, no server access',
        role: 'Idea, development, documentation',
        problem: 'The code is on GitHub and the hosting has only FTP — copying by hand breaks.',
        solution: 'One PHP file downloads the ZIP of a chosen branch and lays the right folder next to itself. It can pull automatically on every push to the repository, so production updates itself.',
        audience: 'Owners of sites on shared hosting and their developers.',
        value: 'The client always knows which branch is live, and a rollback is picking another branch rather than restoring a backup.'
      }
    }
  ];

  return { i18n: i18n, facts: facts, stack: stack, projects: projects };
})();
