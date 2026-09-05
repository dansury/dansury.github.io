/* phi.js — the golden section, drawn rather than illustrated.
 *
 * One unit is a golden rectangle φ x 1. Cutting off its unit square leaves
 * another golden rectangle, rotated 90° and scaled by 1/φ:
 *
 *     step  =  translate(φ,0) · rotate(90°) · scale(1/φ)
 *
 * Applying that step forever converges on the "eye" of the spiral — the one
 * point the transform leaves in place. We anchor the eye to the golden point
 * of the viewport, then let scrolling drive two things:
 *
 *   zoom   — a continuous fall into the eye. One page of scroll ≈ LOOPS
 *            whole φ-steps; the level window shifts by one every step, so the
 *            figure is self-similar and never runs out. Each step also carries
 *            the quarter-turn of the transform, at an even rate, so the figure
 *            turns for as long as the page is moving.
 *   detail — how many levels are drawn, whether the square subdivisions and
 *            the Fibonacci numbers appear. The deeper you scroll, the more
 *            worked-out the construction becomes.
 */

(function () {
  'use strict';

  var PHI = 1.6180339887498949;
  var HALF_PI = Math.PI / 2;

  /* fixed point of the step transform — the eye of the spiral */
  var EYE_X = PHI / (1 + 1 / (PHI * PHI));
  var EYE_Y = EYE_X / PHI;

  var FIB = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181];
  var LOOPS = 10.5;              /* φ-steps travelled over a full page scroll */
  var LABEL0 = 17;               /* Fibonacci index of the square the fall starts on */

  var canvas = document.getElementById('phi-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d', { alpha: true });
  if (!ctx) return;

  var W = 0, H = 0, dpr = 1;
  var zoom = new Motion.Spring(0, { stiffness: 72, damping: 16 });
  var detail = new Motion.Spring(0, { stiffness: 42, damping: 16 });
  var px = new Motion.Spring(0, { stiffness: 46, damping: 14 });
  var py = new Motion.Spring(0, { stiffness: 46, damping: 14 });
  var dirty = true;
  var labels = [];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    dirty = true;
  }

  var ARC = 'rgba(227,219,201,1)';
  var DOT = 'rgba(226,220,205,1)';
  var TAU = Math.PI * 2;
  var ARC_W = 1.7;      /* the shell is the thickest line on screen */
  var DOT_R = 0.72;     /* dots stay thinner than the shell */
  var DOT_STEP = 12;    /* screen px between dots */
  var DOT_MAX = 96;

  /* one edge, drawn as dots that fade out toward its corners.
     s = screen pixels per local unit, so dots keep their size at any depth */
  function dottedEdge(x0, y0, x1, y1, a, s) {
    var lenPx = Math.hypot(x1 - x0, y1 - y0) * s;
    if (lenPx < 7) return;
    var n = Math.min(DOT_MAX, Math.max(3, Math.round(lenPx / DOT_STEP)));
    var r = DOT_R / s;
    for (var i = 0; i <= n; i++) {
      var t = i / n;
      var f = Math.pow(Math.sin(Math.PI * t), 0.9);   /* the gradient to the corners */
      if (f < 0.05) continue;
      ctx.globalAlpha = a * f;
      ctx.beginPath();
      ctx.arc(x0 + (x1 - x0) * t, y0 + (y1 - y0) * t, r * (0.5 + 0.5 * f), 0, TAU);
      ctx.fill();
    }
  }

  /* one golden rectangle: dotted outline, the cut, the quarter-turn of the spiral */
  function drawUnit(a, showCut, s) {
    if (a <= 0.004) return;

    ctx.fillStyle = DOT;
    var e = a * 0.68;
    dottedEdge(0, 0, PHI, 0, e, s);
    dottedEdge(PHI, 0, PHI, 1, e, s);
    dottedEdge(PHI, 1, 0, 1, e, s);
    dottedEdge(0, 1, 0, 0, e, s);
    if (showCut) dottedEdge(1, 0, 1, 1, e * 0.8, s);   /* the cut that leaves the next rectangle */

    ctx.globalAlpha = a;
    ctx.strokeStyle = ARC;
    ctx.lineWidth = ARC_W / s;
    ctx.beginPath();
    ctx.arc(1, 1, 1, Math.PI, Math.PI * 1.5);
    ctx.stroke();
  }


  /* the step from one golden rectangle to the next, and its inverse */
  function stepIn() {
    ctx.translate(PHI, 0);
    ctx.rotate(HALF_PI);
    ctx.scale(1 / PHI, 1 / PHI);
  }
  function stepOut() {
    ctx.scale(PHI, PHI);
    ctx.rotate(-HALF_PI);
    ctx.translate(-PHI, 0);
  }

  /* clamped, not wrapped: the sequence must never jump from 1 back to 4181 */
  function fibAt(i) {
    return FIB[Math.max(0, Math.min(FIB.length - 1, i))];
  }

  /* how visible a level is, judged by its size on screen, not by its index —
     that is what makes the level window shift seamlessly */
  function levelAlpha(sizePx, base) {
    var a;
    if (sizePx < 3) return 0;
    if (sizePx < 34) a = (sizePx - 3) / 31;           /* being born at the eye */
    else if (sizePx > H * 2.6) a = Math.max(0, 1 - (sizePx - H * 2.6) / (H * 3));
    else a = 1;
    return a * base;
  }

  function render() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    var d = Motion.clamp(detail.current, 0, 1);
    var z = zoom.current;
    var whole = Math.floor(z);
    var frac = z - whole;

    /* level counts grow with scroll depth */
    var inward = Math.round(7 + d * 11);
    var outward = Math.round(2 + d * 3);
    var showCut = true;                  /* the construction, not just the curve */
    var showNums = d > 0.14;
    var baseAlpha = 0.30 + d * 0.26;

    /* the eye sits on the golden point of the viewport, plus a little
       pointer parallax */
    var ax = W * 0.618 + px.current;
    var ay = H * 0.382 + py.current;

    var unit = (Math.max(W, H) * 1.45) / PHI;
    var scale = unit * Math.pow(PHI, frac);
    var rot = -HALF_PI * frac;           /* the step's quarter-turn, at an even rate */

    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    labels.length = 0;

    ctx.save();
    ctx.translate(ax, ay);
    ctx.rotate(rot);
    ctx.scale(scale, scale);
    ctx.translate(-EYE_X, -EYE_Y);

    /* climb outward first — the eye is invariant, so nothing drifts */
    for (var i = 0; i < outward; i++) stepOut();

    var total = outward + inward;
    for (var k = 0; k < total; k++) {
      var sizePx = scale * Math.pow(PHI, outward - k);
      var a = levelAlpha(sizePx, baseAlpha);
      drawUnit(a, showCut, sizePx);

      if (showNums && sizePx > 52 && sizePx < Math.max(W, H) * 1.6 && a > 0.08) {
        try {
          var m = ctx.getTransform();
          labels.push({
            x: (m.a * 0.5 + m.c * 0.5 + m.e) / dpr,
            y: (m.b * 0.5 + m.d * 0.5 + m.f) / dpr,
            n: fibAt(LABEL0 - (whole + k - outward)),   /* rides with its square */
            a: a * Motion.clamp((d - 0.14) / 0.36, 0, 1),
            s: Motion.clamp(sizePx / 24, 9.5, 17)
          });
        } catch (e) { /* getTransform unsupported — skip the numbers */ }
      }

      stepIn();
    }
    ctx.restore();

    /* numbers are drawn upright, outside the spiral's transform */
    if (labels.length) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (var j = 0; j < labels.length; j++) {
        var L = labels[j];
        if (L.x < -60 || L.x > W + 60 || L.y < -40 || L.y > H + 40) continue;
        ctx.globalAlpha = Motion.clamp(L.a, 0, 1) * 0.95;
        ctx.fillStyle = 'rgba(227,219,201,1)';
        ctx.font = L.s.toFixed(1) + 'px "Electrolize", monospace';
        ctx.fillText(String(L.n), L.x, L.y);
      }
      ctx.globalAlpha = 1;
    }
  }

  /* ---- drive ---- */

  function onScroll() {
    var p = Motion.scroll.progress;
    zoom.set(p * LOOPS);
    detail.set(Motion.clamp(p * 1.45, 0, 1));
    dirty = true;
  }

  var pointerOn = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  if (pointerOn) {
    window.addEventListener('pointermove', function (e) {
      px.set((e.clientX / window.innerWidth - 0.5) * -34);
      py.set((e.clientY / window.innerHeight - 0.5) * -21);
      dirty = true;
    }, { passive: true });
  }

  var hidden = false;
  document.addEventListener('visibilitychange', function () {
    hidden = document.hidden;
    if (!hidden) dirty = true;
  });

  window.addEventListener('resize', function () { resize(); }, { passive: true });

  resize();
  onScroll();
  zoom.jump(zoom.target);
  detail.jump(detail.target);

  Motion.tick(function (dt) {
    if (hidden) return;
    var moving = false;
    moving = zoom.step(dt) || moving;
    moving = detail.step(dt) || moving;
    moving = px.step(dt) || moving;
    moving = py.step(dt) || moving;
    if (moving || dirty) { render(); dirty = moving; }
  });

  window.addEventListener('scroll', onScroll, { passive: true });

  render();
  requestAnimationFrame(function () { canvas.classList.add('is-ready'); });

  /* exposed so the scroll rail can show the current construction depth */
  window.PhiField = {
    depth: function () { return Math.round(6 + Motion.clamp(detail.current, 0, 1) * 10); }
  };
})();
