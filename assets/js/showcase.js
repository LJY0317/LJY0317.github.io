// Quiet, viewport-limited ambient videos. No audio or scroll-driven animation.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const loopVideos = [...document.querySelectorAll('[data-loop-video]')];
const visible = new WeakSet();
const updateControls = video => {
  const toggle = video.parentElement.querySelector('[data-motion-toggle]');
  if (!toggle) return;
  const playing = !video.paused;
  toggle.textContent = playing ? 'Ⅱ' : '▶';
  toggle.setAttribute('aria-label', playing ? 'Pause animation' : 'Play animation');
  toggle.title = playing ? 'Pause animation' : 'Play animation';
};
const startVideo = video => {
  if (reducedMotion.matches || video.dataset.manualPause === 'true') return;
  video.muted = true;
  const p = video.play();
  if (p && typeof p.catch === 'function') p.catch(() => updateControls(video));
  updateControls(video);
};
loopVideos.forEach(video => {
  video.muted = true;
  video.parentElement.querySelector('[data-motion-toggle]')?.addEventListener('click', () => {
    if (video.paused) {
      video.dataset.manualPause = 'false';
      video.play().catch(() => {});
    } else {
      video.dataset.manualPause = 'true';
      video.pause();
    }
    updateControls(video);
  });
  video.addEventListener('pause', () => updateControls(video));
  video.addEventListener('play', () => updateControls(video));
  updateControls(video);
});
const observer = new IntersectionObserver(entries => {
  for (const entry of entries) {
    const v = entry.target;
    if (entry.isIntersecting && entry.intersectionRatio >= 0.3) startVideo(v);
    else { v.pause(); updateControls(v); }
  }
}, { threshold: [0, .3, .65] });
loopVideos.forEach(v => observer.observe(v));
reducedMotion.addEventListener('change', () => {
  loopVideos.forEach(v => { if (reducedMotion.matches) v.pause(); else if (v.getBoundingClientRect().top < innerHeight && v.getBoundingClientRect().bottom > 0) startVideo(v); });
});
