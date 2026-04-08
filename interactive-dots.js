// Interactive Dots Background — Vanilla JS (converted from React)
// Colors are read from CSS variables to match theme automatically.

(function () {
  const GRID_SPACING = 30;
  const ANIMATION_SPEED = 0.005;
  const REMOVE_WAVE_LINE = false; // set true to hide ripple rings

  // ── create canvas ──────────────────────────────────────────────
  const wrapper = document.getElementById('dots-bg');
  if (!wrapper) return;

  const canvas = document.createElement('canvas');
  canvas.id = 'dots-canvas';
  canvas.style.display = 'block';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  wrapper.appendChild(canvas);

  const ctx = canvas.getContext('2d');

  // ── state ──────────────────────────────────────────────────────
  let time = 0;
  let animationFrameId = null;
  let dots = [];
  let dpr = 1;
  const mouse = { x: -9999, y: -9999, isDown: false };
  const ripples = [];

  // ── helpers ────────────────────────────────────────────────────
  function getThemeColors() {
    const isDark = document.body.classList.contains('dark');
    return {
      // Background — matches the site's --bg-base
      bg: isDark ? '#1a101b' : '#FDF2F8',
      // Dot colour — a subtle muted pink that fits both themes
      dotR: isDark ? 200 : 180,
      dotG: isDark ? 130 : 120,
      dotB: isDark ? 170 : 160,
      // Ripple ring colour
      rippleR: isDark ? 244 : 200,
      rippleG: isDark ? 114 : 100,
      rippleB: isDark ? 182 : 150,
    };
  }

  function getMouseInfluence(x, y) {
    const dx = x - mouse.x;
    const dy = y - mouse.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 150;
    return Math.max(0, 1 - distance / maxDist);
  }

  function getRippleInfluence(x, y, now) {
    let total = 0;
    for (let i = 0; i < ripples.length; i++) {
      const r = ripples[i];
      const age = now - r.time;
      const maxAge = 3000;
      if (age < maxAge) {
        const dx = x - r.x;
        const dy = y - r.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const rippleRadius = (age / maxAge) * 300;
        const rippleWidth = 60;
        if (Math.abs(distance - rippleRadius) < rippleWidth) {
          const strength = (1 - age / maxAge) * r.intensity;
          const proximity = 1 - Math.abs(distance - rippleRadius) / rippleWidth;
          total += strength * proximity;
        }
      }
    }
    return Math.min(total, 2);
  }

  // ── initialise dot grid ────────────────────────────────────────
  function initDots() {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    dots = [];
    for (let x = GRID_SPACING / 2; x < w; x += GRID_SPACING) {
      for (let y = GRID_SPACING / 2; y < h; y += GRID_SPACING) {
        dots.push({
          x, y,
          originalX: x,
          originalY: y,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }
  }

  function resizeCanvas() {
    dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);
    initDots();
  }

  // ── draw loop ──────────────────────────────────────────────────
  function animate() {
    time += ANIMATION_SPEED;
    const now = Date.now();
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    const c = getThemeColors();

    // clear
    ctx.fillStyle = c.bg;
    ctx.fillRect(0, 0, w, h);

    // dots
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      const mi = getMouseInfluence(d.originalX, d.originalY);
      const ri = getRippleInfluence(d.originalX, d.originalY, now);
      const inf = mi + ri;

      const baseDotSize = 2;
      const dotSize = baseDotSize + inf * 6 + Math.sin(time + d.phase) * 0.5;
      const opacity = Math.max(
        0.3,
        0.6 + inf * 0.4 + Math.abs(Math.sin(time * 0.5 + d.phase)) * 0.1
      );

      ctx.beginPath();
      ctx.arc(d.originalX, d.originalY, dotSize, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${c.dotR}, ${c.dotG}, ${c.dotB}, ${opacity})`;
      ctx.fill();
    }

    // ripple rings
    if (!REMOVE_WAVE_LINE) {
      for (let i = 0; i < ripples.length; i++) {
        const r = ripples[i];
        const age = now - r.time;
        const maxAge = 3000;
        if (age < maxAge) {
          const progress = age / maxAge;
          const radius = progress * 300;
          const alpha = (1 - progress) * 0.3 * r.intensity;

          ctx.beginPath();
          ctx.strokeStyle = `rgba(${c.rippleR}, ${c.rippleG}, ${c.rippleB}, ${alpha})`;
          ctx.lineWidth = 2;
          ctx.arc(r.x, r.y, radius, 0, 2 * Math.PI);
          ctx.stroke();

          const innerRadius = progress * 150;
          const innerAlpha = (1 - progress) * 0.2 * r.intensity;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${c.rippleR}, ${c.rippleG}, ${c.rippleB}, ${innerAlpha})`;
          ctx.lineWidth = 1;
          ctx.arc(r.x, r.y, innerRadius, 0, 2 * Math.PI);
          ctx.stroke();
        }
      }
    }

    // purge old ripples
    while (ripples.length > 0 && now - ripples[0].time > 3000) {
      ripples.shift();
    }

    animationFrameId = requestAnimationFrame(animate);
  }

  // ── events ─────────────────────────────────────────────────────
  function onMouseMove(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }

  function onMouseDown(e) {
    mouse.isDown = true;
    const rect = canvas.getBoundingClientRect();
    ripples.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      time: Date.now(),
      intensity: 2,
    });
  }

  function onMouseUp() {
    mouse.isDown = false;
  }

  // ── boot ───────────────────────────────────────────────────────
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  animate();
})();
