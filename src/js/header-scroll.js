window.addEventListener('scroll', changeHeaderBackground);

function changeHeaderBackground() {
  const header = document.querySelector('[data-header]');
  const headerOffsetTrigger = header.offsetHeight - 100;
  const pageOffset = window.pageYOffset;
  const viewportWidth = window.innerWidth;

  if (viewportWidth >= 768) {
    console.log('no');
    return;
  } else {
    if (pageOffset > headerOffsetTrigger) {
      header.classList.add('header--no-transparency');
    } else {
      header.classList.remove('header--no-transparency');
    }
  }
}

changeHeaderBackground();
