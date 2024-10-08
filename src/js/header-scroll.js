window.addEventListener('scroll', changeHeaderBackground);

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetHeight - 100;
  const pageOffset = window.scrollY;
  const viewportWidth = window.innerWidth;

  if (viewportWidth < 768) {
    if (pageOffset > headerOffsetTrigger) {
      header.classList.add('header--no-transparency');
    } else {
      header.classList.remove('header--no-transparency');
    }
  }
}

changeHeaderBackground();
