const mobileMenu = document.querySelector('[data-menu]');
const openMenuBtn = document.querySelector('[data-menu-btn]');
const closeMenuBtn = document.querySelector('[data-menu-close-btn]');
const html = document.querySelector('[data-html]');
const anchors = document.querySelectorAll('a.nav__link');
const viewportWidth = window.innerWidth;

if (viewportWidth < 768) {
  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    html.classList.toggle('no-scroll');
  };

  anchors.forEach(item => {
    if (!item) return;
    item.addEventListener('click', toggleMenu);
  });

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    html.classList.remove('no-scroll');
    openMenuBtn.setAttribute('aria-expanded', false);
  });
}
