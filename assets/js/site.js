(() => {
  const videos = [...document.querySelectorAll('[data-loop-video]')];
  const toggle = document.querySelector('[data-lang-toggle]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const visible = new Set();
  const update = v => {
    const b = v.closest('figure')?.querySelector('[data-motion-toggle]');
    if (!b) return;
    const en = document.documentElement.lang === 'en';
    const label = v.paused ? (en ? 'Play' : '\uC7AC\uC0DD') : (en ? 'Pause' : '\uC77C\uC2DC\uC815\uC9C0');
    b.textContent = label; b.setAttribute('aria-label', label);
  };
  const language = lang => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'ko';
    if (toggle) toggle.textContent = lang === 'en' ? '\uD55C\uAD6D\uC5B4' : 'English';
    videos.forEach(update);
    try { localStorage.setItem('portfolio-language', document.documentElement.lang); } catch {}
  };
  let initial = 'ko';
  try { initial = localStorage.getItem('portfolio-language') || 'ko'; } catch {}
  language(initial);
  toggle?.addEventListener('click', () => language(document.documentElement.lang === 'ko' ? 'en' : 'ko'));
  const play = v => {
    if (!document.hidden && !reduced.matches && v.dataset.manualPause !== 'true') v.play().catch(() => update(v));
  };
  videos.forEach(v => {
    v.muted = true;
    const b = v.closest('figure')?.querySelector('[data-motion-toggle]');
    b?.addEventListener('click', () => {
      if (v.paused) { v.dataset.manualPause = 'false'; v.play().catch(() => update(v)); }
      else { v.dataset.manualPause = 'true'; v.pause(); }
    });
    v.addEventListener('play', () => update(v)); v.addEventListener('pause', () => update(v)); update(v);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(({target,isIntersecting}) => {
      if (isIntersecting) { visible.add(target); play(target); }
      else { visible.delete(target); target.pause(); }
    }), {threshold:0.1});
    videos.forEach(v => observer.observe(v));
  }
  document.addEventListener('visibilitychange', () => videos.forEach(v => document.hidden ? v.pause() : visible.has(v) && play(v)));
  reduced.addEventListener('change', () => videos.forEach(v => reduced.matches ? v.pause() : visible.has(v) && play(v)));
})();
