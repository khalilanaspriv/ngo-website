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

  const currentTheme = htmlEl.getAttribute('data-theme');
  navThemeToggleIconEl.className = currentTheme === 'light' ? 'ri-moon-line' : 'ri-sun-line';

  const toggleMenu = () => {
    navMenuEl.classList.toggle('active');
    overlayEl.classList.toggle('active');
    
    const isOpen = navMenuEl.classList.contains('active');
    navMenuToggleEl.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  const toggleTheme = () => {
    const theme = htmlEl.getAttribute('data-theme');
    
    if (theme === 'dark') {
      htmlEl.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      navThemeToggleIconEl.className = 'ri-moon-line';
    } else {
      htmlEl.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      navThemeToggleIconEl.className = 'ri-sun-line';
    }
  };

  navMenuToggleEl.addEventListener('click', toggleMenu);
  overlayEl.addEventListener('click', toggleMenu);
  navThemeToggleEl.addEventListener('click', toggleTheme);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenuEl.classList.contains('active')) {
      toggleMenu();
    }
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      htmlEl.setAttribute('data-theme', newTheme);
      navThemeToggleIconEl.className = newTheme === 'light' ? 'ri-moon-line' : 'ri-sun-line';
    }
  });
});