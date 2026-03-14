(function () {
  const savedMode = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedMode || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', () => {
  const navMenuEl = document.querySelector('#navbar');
  const navMenuToggleEl = document.querySelector('#hamburger-toggle');
  const navThemeToggleEl = document.querySelector('#theme-toggle');
  const navThemeToggleIconEl = document.querySelector('#theme-toggle-icon');
  const overlayEl = document.querySelector('#navbar-overlay');
  const htmlEl = document.documentElement;
  const navLinks = document.querySelectorAll('.navbar-link');
  const sections = document.querySelectorAll('header[id], section[id], .hero-section');
  const langSelect = document.querySelector('#lang-select');

  const currentTheme = htmlEl.getAttribute('data-theme');
  if (navThemeToggleIconEl) {
    navThemeToggleIconEl.className = currentTheme === 'light' ? 'ri-moon-line' : 'ri-sun-line';
  }

  async function updateLanguage(lang) {
    try {
      const response = await fetch('./translations.json');
      const translations = await response.json();
      const data = translations[lang];

      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = data[key];

        if (translation) {
          if (el.tagName === 'IMG') {
            el.alt = translation;
          } else if (el.hasAttribute('aria-label')) {
            el.setAttribute('aria-label', translation);
            if (el.hasAttribute('title')) el.setAttribute('title', translation);
          } else {
            el.textContent = translation;
          }
        }
      });

      htmlEl.dir = data.dir || 'ltr';
      htmlEl.lang = lang;
      localStorage.setItem('preferred-lang', lang);
    } catch (error) {
      console.error("Translation Error:", error);
    }
  }

  const toggleMenu = () => {
    navMenuEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    const isOpen = navMenuEl.classList.contains('active');
    navMenuToggleEl.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const toggleTheme = () => {
    const theme = htmlEl.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    navThemeToggleIconEl.className = newTheme === 'light' ? 'ri-moon-line' : 'ri-sun-line';
  };

  const spyOptions = {
    root: null,
    threshold: 0,
    rootMargin: "-20% 0px -79% 0px"
  };

  const spyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let id = entry.target.getAttribute('id');
        if (entry.target.classList.contains('hero-section')) id = 'home';

        navLinks.forEach(link => {
          link.classList.remove('current');
          const href = link.getAttribute('href');
          if (href === `#${id}` || (href === '#' && id === 'home')) {
            link.classList.add('current');
          }
        });
      }
    });
  }, spyOptions);

  sections.forEach(section => spyObserver.observe(section));

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal, .reveal-hero').forEach(el => revealObserver.observe(el));

  navMenuToggleEl.addEventListener('click', toggleMenu);
  overlayEl.addEventListener('click', toggleMenu);
  navThemeToggleEl.addEventListener('click', toggleTheme);
  langSelect.addEventListener('change', (e) => updateLanguage(e.target.value));

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenuEl.classList.contains('active')) toggleMenu();
    });
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenuEl.classList.contains('active')) toggleMenu();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      htmlEl.setAttribute('data-theme', newTheme);
      navThemeToggleIconEl.className = newTheme === 'light' ? 'ri-moon-line' : 'ri-sun-line';
    }
  });

  const savedLang = localStorage.getItem('preferred-lang') || 'fr';
  langSelect.value = savedLang;
  updateLanguage(savedLang);
});