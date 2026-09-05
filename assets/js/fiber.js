/* fiber.js — the filament band.
 *
 * A few hundred threads wound around an invisible cupped ring, drawn as thin
 * white polylines on graphite. Nothing is modelled explicitly: the volume
 * appears only where many faint strands overlap, the way a wire sculpture
 * reads as a solid. Geometry is generated once; every frame just rotates and
 * projects it, so the band costs ~7k point transforms and nothing else.
 */

(function () {
  'use strict';

  var canvas = document.getElementById('fiber-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  if (!ctx) return;

  var STRANDS = 210;
  var SEG = 72;
  var TAU = Math.PI * 2;

  /* deterministic pseudo-random: the band looks the same on every reload */
  var seed = 20260905;
  function rnd() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  }
  /* smooth 1D value noise — strands have to wander, not jitter */
  function hash(i) {
    var n = Math.sin(i * 127.1 + 311.7) * 43758.5453;
    return (n - Math.floor(n)) * 2 - 1;
  }
  function vnoise(x) {
    var i = Math.floor(x), f = x - i;
    var u = f * f * (3 - 2 * f);
    return hash(i) * (1 - u) + hash(i + 1) * u;
  }
  /* two octaves is enough for a fibre: a long bend plus a slight kink */
  function fbm(x) { return vnoise(x) * 0.68 + vnoise(x * 2.37 + 19.3) * 0.32; }

  var R = 1.0;         /* ring radius */
  var TUBE = 0.46;     /* thread bundle radius */
  var ARC = Math.PI * 1.42;   /* not a closed ring — an open cup */

  var strands = [];
  function build() {
    strands.length = 0;
    for (var s = 0; s < STRANDS; s++) {
      var phase = rnd() * TAU;
      var winds = 1.1 + rnd() * 2.6;
      var u0 = -ARC / 2 - rnd() * 0.35;
      var uLen = ARC * (0.55 + rnd() * 0.45);
      var thin = 0.42 + rnd() * 0.62;
      var fray = 0.035 + rnd() * 0.075;
      var seedA = rnd() * 400;
      var pts = [];
      for (var j = 0; j <= SEG; j++) {
        var t = j / SEG;
        var u = u0 + t * uLen;
        var w = phase + t * winds * TAU;
        /* the bundle is thicker in the middle of the arc, like a held volume */
        var swell = 0.34 + 0.66 * Math.pow(Math.sin(Math.PI * ((u - u0) / uLen)), 0.72);
        var rr = TUBE * swell * thin;
        /* a shared low-frequency flow bundles neighbours, then each strand
           gets its own wander on top — that is what reads as a fibre mass */
        var flow = fbm(t * 1.7 + phase * 0.6) * 0.11;
        var nx = fbm(seedA + t * 3.1) * fray + flow;
        var ny = fbm(seedA + 40 + t * 2.6) * fray + flow * 0.5;
        var nz = fbm(seedA + 80 + t * 3.4) * fray - flow * 0.7;
        var ring = R + rr * Math.cos(w) + nx;
        pts.push([
          ring * Math.cos(u),
          rr * Math.sin(w) + 0.42 * Math.cos(u * 0.85) - 0.20 + ny,
          ring * Math.sin(u) + nz
        ]);
      }
      strands.push({
        pts: pts,
        a: 0.11 + rnd() * 0.24,
        w: 0.42 + rnd() * 0.58
      });
    }
    /* rotate about the mass, not about the ring's origin — an open cup is
       lopsided, and without this it would swing out of the band */
    var cx = 0, cy = 0, cz = 0, n = 0;
    for (var a = 0; a < strands.length; a++) {
      var pp = strands[a].pts;
      for (var b = 0; b < pp.length; b++) { cx += pp[b][0]; cy += pp[b][1]; cz += pp[b][2]; n++; }
    }
    cx /= n; cy /= n; cz /= n;
    for (var a2 = 0; a2 < strands.length; a2++) {
      var p2 = strands[a2].pts;
      for (var b2 = 0; b2 < p2.length; b2++) { p2[b2][0] -= cx; p2[b2][1] -= cy; p2[b2][2] -= cz; }
    }
  }
  build();

  var W = 0, H = 0, dpr = 1;
  function resize() {
    var r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = Math.max(1, Math.round(r.width));
    H = Math.max(1, Math.round(r.height));
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
  }

  var spin = 0;
  var lean = new Motion.Spring(0, { stiffness: 34, damping: 14 });

  function render() {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);

    var cos = Math.cos(spin), sin = Math.sin(spin);
    var tilt = 0.34 + lean.current;
    var ct = Math.cos(tilt), st = Math.sin(tilt);
    var k = Math.min(W / 2.7, H / 1.95);   /* the whole cup has to fit the band */
    var cx = W / 2, cy = H * 0.52;

    ctx.lineCap = 'round';
    for (var i = 0; i < strands.length; i++) {
      var S = strands[i], p = S.pts;
      ctx.beginPath();
      var depth = 0;
      for (var j = 0; j < p.length; j++) {
        var x = p[j][0], y = p[j][1], z = p[j][2];
        var rx = x * cos - z * sin;          /* spin around Y */
        var rz = x * sin + z * cos;
        var ry = y * ct - rz * st;           /* lean the ring towards us */
        var dz = y * st + rz * ct;
        var persp = 3.1 / (3.1 - dz);
        depth += dz;
        var sx = cx + rx * k * persp;
        var sy = cy + ry * k * persp;
        if (j === 0) ctx.moveTo(sx, sy); else ctx.lineTo(sx, sy);
      }
      depth /= p.length;
      var fade = 0.45 + 0.55 * (depth + 1) / 2;   /* far side recedes */
      ctx.strokeStyle = 'rgba(233,235,236,' + (S.a * fade).toFixed(3) + ')';
      ctx.lineWidth = S.w * (0.7 + 0.5 * fade);
      ctx.stroke();
    }
  }

  var visible = false;
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (e) {
      visible = e[0].isIntersecting;
    }, { rootMargin: '120px 0px' }).observe(canvas);
  } else visible = true;

  window.addEventListener('resize', function () { resize(); render(); }, { passive: true });

  resize();
  render();
  requestAnimationFrame(function () { canvas.classList.add('is-ready'); });

  if (!Motion.reduced.matches) {
    Motion.tick(function (dt) {
      if (!visible || document.hidden) return;
      /* scrolling past the band tips it; otherwise it just breathes */
      var r = canvas.getBoundingClientRect();
      var rel = (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      lean.set(Motion.clamp(rel, -1, 1) * 0.28);
      lean.step(dt);
      spin += dt * 0.055;
      render();
    });
  }
})();
