/* motion.js — a tiny spring/scroll layer.
   Framer-Motion-style primitives (spring value, scroll progress, stagger
   reveal) in ~120 lines of vanilla JS, so the page stays a static file. */

(function (global) {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* --- spring value: critically-ish damped, integrated per frame --- */
  function Spring(value, opts) {
    opts = opts || {};
    this.current = value;
    this.target = value;
    this.velocity = 0;
    this.stiffness = opts.stiffness || 110;
    this.damping = opts.damping || 18;
    this.mass = opts.mass || 1;
    this.precision = opts.precision || 0.0004;
  }
  Spring.prototype.set = function (v) { this.target = v; };
  Spring.prototype.jump = function (v) { this.target = this.current = v; this.velocity = 0; };
  Spring.prototype.step = function (dt) {
    if (reduced.matches) { this.current = this.target; this.velocity = 0; return false; }
    dt = Math.min(dt, 1 / 30);                       // clamp: no jumps after a stall
    var d = this.target - this.current;
    var force = this.stiffness * d - this.damping * this.velocity;
    this.velocity += (force / this.mass) * dt;
    this.current += this.velocity * dt;
    if (Math.abs(d) < this.precision && Math.abs(this.velocity) < this.precision) {
      this.current = this.target; this.velocity = 0; return false;
    }
    return true;
  };

  /* --- single rAF ticker shared by everything on the page --- */
  var subs = [], running = false, last = 0;
  function loop(t) {
    var dt = last ? (t - last) / 1000 : 1 / 60;
    last = t;
    for (var i = 0; i < subs.length; i++) subs[i](dt, t);
    if (subs.length) requestAnimationFrame(loop); else running = false;
  }
  function tick(fn) {
    subs.push(fn);
    if (!running) { running = true; last = 0; requestAnimationFrame(loop); }
    return function () { var i = subs.indexOf(fn); if (i > -1) subs.splice(i, 1); };
  }

  /* --- scroll progress, read once per frame (never inside a listener) --- */
  var scroll = { y: 0, progress: 0, max: 1, velocity: 0 };
  function measure() {
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    var max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    scroll.velocity = y - scroll.y;
    scroll.y = y;
    scroll.max = max;
    scroll.progress = Math.min(1, Math.max(0, y / max));
  }
  measure();
  window.addEventListener('scroll', measure, { passive: true });
  window.addEventListener('resize', measure, { passive: true });

  /* --- reveal on enter, with stagger --- */
  function reveal(selector, opts) {
    opts = opts || {};
    var stagger = opts.stagger == null ? 45 : opts.stagger;
    var nodes = [].slice.call(document.querySelectorAll(selector));
    if (!('IntersectionObserver' in window)) {
      nodes.forEach(function (n) { n.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      var n = 0;
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.style.setProperty('--d', (n++ * stagger) + 'ms');
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: opts.rootMargin || '0px 0px -12% 0px', threshold: 0.08 });
    nodes.forEach(function (n) { io.observe(n); });
    return io;
  }

  /* --- height animation for disclosure panels (transform-free, but only
         runs on an element that is being opened/closed by the user) --- */
  function collapse(panel, open, done) {
    var h = panel.scrollHeight;
    if (reduced.matches) {
      panel.style.height = open ? 'auto' : '0px';
      if (done) done();
      return;
    }
    panel.style.transition = 'height 520ms cubic-bezier(.16,1,.3,1)';
    if (open) {
      panel.style.height = h + 'px';
      var end = function () {
        panel.style.height = 'auto';
        panel.removeEventListener('transitionend', end);
        if (done) done();
      };
      panel.addEventListener('transitionend', end);
    } else {
      panel.style.height = h + 'px';
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { panel.style.height = '0px'; });
      });
      if (done) done();
    }
  }

  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }

  global.Motion = {
    Spring: Spring, tick: tick, scroll: scroll, reveal: reveal,
    collapse: collapse, lerp: lerp, clamp: clamp, reduced: reduced
  };
})(window);
