const languageStylesheet = document.createElement('link');
languageStylesheet.rel = 'stylesheet';
languageStylesheet.href = '/assets/css/language.css';
document.head.append(languageStylesheet);

const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const updateHeader = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 8);
};

updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('is-open');
  });
});

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const LANGUAGE_STORAGE_KEY = 'portfolio-language';
const normaliseTranslationKey = (value) => value.replace(/\s+/g, ' ').trim();

const getPageTranslationName = () => {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  if (path === '/' || path === '/index.html') return 'home';

  const segments = path.split('/').filter(Boolean);
  const lastSegment = segments.at(-1);
  if (lastSegment === 'index.html') return segments.at(-2) || 'home';

  return lastSegment || 'home';
};

const loadTranslations = async () => {
  const pageName = getPageTranslationName();
  const translationPaths = [
    '/assets/i18n/common.json',
    `/assets/i18n/${pageName}.json`,
  ];

  const responses = await Promise.all(
    translationPaths.map(async (path) => {
      const response = await fetch(path);
      if (!response.ok) throw new Error(`Could not load translations: ${path}`);
      return response.json();
    }),
  );

  return Object.assign({}, ...responses);
};

const getSavedLanguage = () => {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return savedLanguage === 'ko' || savedLanguage === 'en' ? savedLanguage : null;
  } catch {
    return null;
  }
};

const saveLanguage = (language) => {
  try {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Language switching still works when storage is unavailable.
  }
};

const initialiseLanguageSwitcher = async () => {
  if (!nav) return;

  let koreanTranslations = {};
  try {
    koreanTranslations = await loadTranslations();
  } catch (error) {
    console.warn(error);
    return;
  }

  const translatedTextNodes = [];
  const translatedAttributes = [];
  const walker = document.createTreeWalker(
    document.documentElement,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parentName = node.parentElement?.tagName;
        if (!parentName || ['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parentName)) {
          return NodeFilter.FILTER_REJECT;
        }

        const key = normaliseTranslationKey(node.nodeValue ?? '');
        return key && koreanTranslations[key]
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      },
    },
  );

  let node = walker.nextNode();
  while (node) {
    const english = node.nodeValue ?? '';
    const key = normaliseTranslationKey(english);
    const leadingWhitespace = english.match(/^\s*/)?.[0] ?? '';
    const trailingWhitespace = english.match(/\s*$/)?.[0] ?? '';

    translatedTextNodes.push({
      node,
      en: english,
      ko: `${leadingWhitespace}${koreanTranslations[key]}${trailingWhitespace}`,
    });

    node = walker.nextNode();
  }

  const attributeNames = ['alt', 'aria-label', 'content', 'placeholder', 'title'];
  document.querySelectorAll('*').forEach((element) => {
    attributeNames.forEach((attributeName) => {
      if (!element.hasAttribute(attributeName)) return;

      const english = element.getAttribute(attributeName) ?? '';
      const key = normaliseTranslationKey(english);
      const korean = koreanTranslations[key];

      if (korean) {
        translatedAttributes.push({
          element,
          attributeName,
          en: english,
          ko: korean,
        });
      }
    });
  });

  const languageSwitcher = document.createElement('div');
  languageSwitcher.className = 'language-switcher';
  languageSwitcher.setAttribute('role', 'group');

  const languageButtons = [
    { language: 'en', label: 'EN' },
    { language: 'ko', label: '한국어' },
  ].map((option) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = option.label;
    button.dataset.languageOption = option.language;
    languageSwitcher.append(button);
    return button;
  });

  nav.append(languageSwitcher);

  const closeNavigation = () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  const applyLanguage = (language, { persist = true } = {}) => {
    const resolvedLanguage = language === 'ko' ? 'ko' : 'en';

    translatedTextNodes.forEach((entry) => {
      entry.node.nodeValue = entry[resolvedLanguage];
    });

    translatedAttributes.forEach((entry) => {
      entry.element.setAttribute(entry.attributeName, entry[resolvedLanguage]);
    });

    document.documentElement.lang = resolvedLanguage;
    document.documentElement.dataset.language = resolvedLanguage;
    languageSwitcher.setAttribute(
      'aria-label',
      resolvedLanguage === 'ko' ? '언어 선택' : 'Language selection',
    );

    languageButtons.forEach((button) => {
      const isActive = button.dataset.languageOption === resolvedLanguage;
      button.setAttribute('aria-pressed', String(isActive));
      button.setAttribute(
        'aria-label',
        button.dataset.languageOption === 'ko'
          ? (resolvedLanguage === 'ko' ? '한국어 사용 중' : 'Switch to Korean')
          : (resolvedLanguage === 'en' ? 'English selected' : '영어로 전환'),
      );
    });

    if (persist) saveLanguage(resolvedLanguage);
    window.dispatchEvent(
      new CustomEvent('portfolio:languagechange', {
        detail: { language: resolvedLanguage },
      }),
    );
  };

  languageButtons.forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.languageOption);
      closeNavigation();
    });
  });

  const initialLanguage =
    getSavedLanguage() ??
    (navigator.languages?.some((language) => language.toLowerCase().startsWith('ko'))
      ? 'ko'
      : 'en');

  applyLanguage(initialLanguage, { persist: false });
};

initialiseLanguageSwitcher();

document.querySelectorAll('[data-media]').forEach((media) => {
  const frame = media.closest('.media-frame');
  const markMissing = () => frame?.classList.add('is-missing');

  if (media instanceof HTMLImageElement) {
    if (media.complete && media.naturalWidth === 0) markMissing();
    media.addEventListener('error', markMissing, { once: true });
  }

  if (media instanceof HTMLVideoElement) {
    media.addEventListener('error', markMissing, { once: true });
  }
});
