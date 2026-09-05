/* app.js — content rendering, language, reveals, scroll chrome. */

(function () {
  'use strict';

  var S = window.SITE;
  var M = window.Motion;
  var lang = 'ru';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };

  function t(key) { return (S.i18n[lang] && S.i18n[lang][key]) || S.i18n.ru[key] || key; }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  var ICON = {
    github: '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="currentColor"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.55v-2.1c-3.2.7-3.88-1.37-3.88-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .3.2.66.8.55A11.5 11.5 0 0 0 12 .5z"/></svg>',
    lock: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2"/></svg>',
    out: '<svg viewBox="0 0 16 16" width="13" height="13" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"><path d="M6.5 3H3.5v9.5H13V9.5"/><path d="M9 3h4v4"/><path d="M13 3 7.5 8.5"/></svg>'
  };

  /* ---------------- projects ---------------- */

  function renderProjects() {
    var list = $('#projects');
    if (!list) return;
    list.innerHTML = '';

    S.projects.forEach(function (p, i) {
      var c = p[lang] || p.ru;
      var no = String(i + 1).padStart(2, '0');
      var pid = 'panel-' + p.id;

      var li = el('li', 'project reveal');
      li.dataset.cat = p.cat.join(' ');

      var h3 = el('h3', 'project__h');
      var btn = el('button', 'project__head');
      btn.type = 'button';
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-controls', pid);

      btn.appendChild(el('span', 'project__no', no));

      var main = el('span', 'project__main');
      main.appendChild(el('span', 'project__name', c.name));
      main.appendChild(el('span', 'project__tag', c.tag));
      btn.appendChild(main);

      var meta = el('span', 'project__meta');
      var stKey = p.status === 'prod' ? 'st.prod' : p.status === 'beta' ? 'st.beta' : p.status === 'closedBeta' ? 'st.closedBeta' : 'st.pub';
      var badge = el('span', 'badge ' + (p.status === 'prod' ? 'badge--live' : ''), t(stKey));
      meta.appendChild(badge);
      meta.appendChild(el('span', 'project__year', p.year));
      btn.appendChild(meta);
      btn.appendChild(el('span', 'project__toggle'));

      h3.appendChild(btn);
      li.appendChild(h3);

      var panel = el('div', 'project__panel');
      panel.id = pid;
      panel.setAttribute('role', 'region');
      panel.inert = true;

      var inner = el('div', 'project__inner');

      /* aside: tech / links */
      var aside = el('div', 'project__aside');

      var tk = el('div', 'kv');
      tk.appendChild(el('span', 'kv__k', t('p.stack')));
      var tags = el('div', 'tags');
      p.tech.forEach(function (x) { tags.appendChild(el('span', null, x)); });
      tk.appendChild(tags);
      aside.appendChild(tk);

      var links = el('div', 'project__links');
      var repo = document.createElement('a');
      repo.className = 'linkbtn';
      repo.href = p.repo;
      repo.target = '_blank';
      repo.rel = 'noopener';
      repo.innerHTML = (p.priv ? ICON.lock : ICON.github) + '<span>' + (p.priv ? t('p.repoPrivate') : t('p.repo')) + '</span>';
      links.appendChild(repo);

      if (p.live) {
        var live = document.createElement('a');
        live.className = 'linkbtn linkbtn--live';
        live.href = p.live;
        live.target = '_blank';
        live.rel = 'noopener';
        live.innerHTML = ICON.out + '<span>' + p.liveLabel + '</span>';
        links.appendChild(live);
      }
      aside.appendChild(links);
      inner.appendChild(aside);

      /* what the project was and how it works — on the dark plate */
      var an = el('div', 'analysis');
      [['p.problem', c.problem], ['p.solution', c.solution]].forEach(function (row) {
        an.appendChild(anRow(row[0], row[1]));
      });
      inner.appendChild(an);

      /* what it is worth — inverted and full width, because this part sells */
      var val = el('div', 'analysis analysis--light');
      [['p.audience', c.audience], ['p.value', c.value]].forEach(function (row) {
        val.appendChild(anRow(row[0], row[1]));
      });
      inner.appendChild(val);

      panel.appendChild(inner);
      li.appendChild(panel);
      list.appendChild(li);

      btn.addEventListener('click', function () {
        var open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!open));
        panel.inert = open;
        M.collapse(panel, !open);
      });
    });
  }

  function anRow(key, text) {
    var r = el('div', 'an');
    r.appendChild(el('span', 'an__k', t(key)));
    r.appendChild(el('p', 'an__v', text));
    return r;
  }

  /* ---------------- facts ---------------- */

  function renderFacts() {
    var box = $('#facts');
    if (!box) return;
    box.innerHTML = '';
    (S.facts[lang] || S.facts.ru).forEach(function (f) {
      var d = el('div', 'fact');
      var dd = el('dd');
      var v = el('span', 'num', f.v);
      if (/^\d+$/.test(f.v)) v.dataset.count = f.v;
      dd.appendChild(v);
      d.appendChild(dd);
      d.appendChild(el('dt', null, t(f.k)));
      box.appendChild(d);
    });
  }

  /* ---------------- stack ---------------- */

  function renderStack() {
    var grid = $('#stack-grid');
    if (!grid) return;
    grid.innerHTML = '';
    (S.stack[lang] || S.stack.ru).forEach(function (col) {
      var c = el('div', 'stack__col reveal');
      c.appendChild(el('h3', null, col.h));
      var ul = el('ul');
      col.items.forEach(function (x) { ul.appendChild(el('li', null, x)); });
      c.appendChild(ul);
      grid.appendChild(c);
    });
  }

  /* ---------------- language ---------------- */

  function applyStatic() {
    $$('[data-i18n]').forEach(function (n) {
      var k = n.getAttribute('data-i18n');
      var v = S.i18n[lang][k];
      if (v != null) n.textContent = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.dataset.lang = lang;
    var toggle = $('#lang-toggle');
    if (toggle) {
      var opts = $$('.lang__opt', toggle);
      opts[0].classList.toggle('is-on', lang === 'ru');
      opts[1].classList.toggle('is-on', lang === 'en');
      toggle.setAttribute('aria-label', lang === 'ru' ? 'Switch language to English' : 'Переключить язык на русский');
    }
    var chips = $$('.chip');
    chips.forEach(function (ch) {
      var k = ch.getAttribute('data-i18n');
      if (k && S.i18n[lang][k]) ch.textContent = S.i18n[lang][k];
    });
  }

  function setLang(next) {
    lang = next;
    applyStatic();
    splitTitle();
    renderFacts();
    renderProjects();
    renderStack();
    applyFilter(currentFilter, true);
    initReveals();
    counters();
    try { localStorage.setItem('lang', lang); } catch (e) {}
  }

  /* ---------------- hero title ---------------- */

  function splitTitle() {
    var title = $('.hero__title');
    if (!title) return;
    $$('.line', title).forEach(function (line, i) {
      var text = line.textContent;
      line.innerHTML = '';
      var inner = el('span', null, text);
      inner.style.setProperty('--d', (120 + i * 110) + 'ms');
      line.appendChild(inner);
    });
    requestAnimationFrame(function () { title.classList.add('is-in'); });
  }

  /* ---------------- filters ---------------- */

  var currentFilter = 'all';

  function applyFilter(f, silent) {
    currentFilter = f;
    $$('.chip').forEach(function (c) { c.classList.toggle('is-on', c.dataset.filter === f); });
    $$('.project').forEach(function (p) {
      var on = f === 'all' || (' ' + p.dataset.cat + ' ').indexOf(' ' + f + ' ') > -1;
      p.hidden = !on;
    });
    if (!silent) {
      var head = $('#work');
      if (head && head.getBoundingClientRect().top < -80) head.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* ---------------- counters ---------------- */

  function counters() {
    var nodes = $$('.num[data-count]');
    if (!nodes.length || !('IntersectionObserver' in window)) return;
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        var target = parseInt(e.target.dataset.count, 10);
        if (M.reduced.matches) { e.target.textContent = fmt(target); return; }
        var start = performance.now(), dur = 1300;
        var run = M.tick(function (dt, now) {
          var k = M.clamp((now - start) / dur, 0, 1);
          var eased = 1 - Math.pow(1 - k, 3);
          e.target.textContent = fmt(Math.round(target * eased));
          if (k >= 1) run();
        });
      });
    }, { threshold: 0.5 });
    nodes.forEach(function (n) { io.observe(n); });
  }

  function fmt(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }

  /* ---------------- scroll chrome ---------------- */

  function chrome() {
    var nav = $('#nav');
    var fill = $('#rail-fill');
    var depth = $('#rail-depth');
    var band = $('[data-parallax]');
    var sections = $$('main section[id]');
    var links = $$('.nav__links a');

    M.tick(function () {
      var p = M.scroll.progress;
      if (nav) nav.classList.toggle('is-stuck', M.scroll.y > 40);
      if (fill) fill.style.height = (p * 100).toFixed(2) + '%';
      if (depth && window.PhiField) {
        var d = 'depth ' + String(window.PhiField.depth()).padStart(2, '0');
        if (depth.textContent !== d) depth.textContent = d;
      }
      if (band && !M.reduced.matches) {
        var r = band.parentElement.parentElement.getBoundingClientRect();
        if (r.bottom > -200 && r.top < window.innerHeight + 200) {
          var rel = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
          band.style.transform = 'translate3d(0,' + (rel * -34).toFixed(2) + 'px,0) scale(1.12)';
        }
      }
    });

    if ('IntersectionObserver' in window && sections.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          links.forEach(function (a) {
            a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id);
          });
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      sections.forEach(function (s) { io.observe(s); });
    }
  }

  var revealObserver = null;
  function initReveals() {
    if (revealObserver) revealObserver.disconnect();
    revealObserver = M.reveal('.reveal:not(.is-in)', { stagger: 55 });
  }

  /* ---------------- boot ---------------- */

  function boot() {
    try {
      var saved = localStorage.getItem('lang');
      if (saved === 'en' || saved === 'ru') lang = saved;
      else if ((navigator.language || '').slice(0, 2).toLowerCase() !== 'ru') lang = 'en';
    } catch (e) {}

    applyStatic();
    renderFacts();
    renderProjects();
    renderStack();
    splitTitle();
    initReveals();
    counters();
    chrome();

    var y = $('#year');
    if (y) y.textContent = String(new Date().getFullYear());

    var toggle = $('#lang-toggle');
    if (toggle) toggle.addEventListener('click', function () { setLang(lang === 'ru' ? 'en' : 'ru'); });

    $$('.chip').forEach(function (c) {
      c.addEventListener('click', function () { applyFilter(c.dataset.filter); });
    });

    /* deep link to a project: #p-<id> opens it */
    if (location.hash.indexOf('#p-') === 0) {
      var id = location.hash.slice(3);
      var target = $$('.project').filter(function (n) {
        return $('.project__head', n).getAttribute('aria-controls') === 'panel-' + id;
      })[0];
      if (target) {
        $('.project__head', target).click();
        target.scrollIntoView({ block: 'center' });
      }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
