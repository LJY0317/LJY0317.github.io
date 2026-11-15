(() => {
  const all = [...document.querySelectorAll('[data-ko][data-en]')];
  const switcher = document.querySelector('[data-lang-toggle]');
  const setLanguage = (lang) => {
    const actual = lang === 'en' ? 'en' : 'ko';
    document.documentElement.lang = actual;
    all.forEach(el => { el.textContent = el.dataset[actual]; });
    if (switcher) switcher.textContent = actual === 'ko' ? 'EN' : '한국어';
    try { localStorage.setItem('portfolio-language', actual); } catch {}
  };
  let stored = 'ko';
  try { stored = localStorage.getItem('portfolio-language') || 'ko'; } catch {}
  setLanguage(stored);
  switcher?.addEventListener('click', () => setLanguage(document.documentElement.lang === 'ko' ? 'en' : 'ko'));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const videos = [...document.querySelectorAll('[data-loop-video]')];
  const update = video => {
    const button = video.closest('.video-shot')?.querySelector('[data-motion-toggle]');
    if (!button) return;
    const paused = video.paused;
    button.textContent = paused ? '▶' : 'Ⅱ';
    button.setAttribute('aria-label', paused ? '영상 재생' : '영상 일시 정지');
  };
  const play = video => {
    if (reduced.matches || video.dataset.manualPause === 'true') return;
    video.muted = true;
    video.play().catch(() => update(video));
  };
  videos.forEach(video => {
    video.muted = true;
    video.pause();
    const button = video.closest('.video-shot')?.querySelector('[data-motion-toggle]');
    button?.addEventListener('click', () => {
      if (video.paused) {
        video.dataset.manualPause = 'false';
        video.play().catch(() => update(video));
      } else {
        video.dataset.manualPause = 'true';
        video.pause();
      }
      update(video);
    });
    video.addEventListener('play', () => update(video));
    video.addEventListener('pause', () => update(video));
    update(video);
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) play(video);
        else video.pause();
      });
    }, {rootMargin:'180px 0px 180px 0px', threshold:0.1});
    videos.forEach(video => observer.observe(video));
  } else {
    videos.slice(0,1).forEach(play);
  }
  reduced.addEventListener('change', () => {
    if (reduced.matches) videos.forEach(v=>v.pause());
    else videos.forEach(v=>{if(v.getBoundingClientRect().top<innerHeight&&v.getBoundingClientRect().bottom>0)play(v);});
  });
})();
