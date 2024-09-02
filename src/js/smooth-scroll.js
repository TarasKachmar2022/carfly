const viewportWidth = window.innerWidth;

if (viewportWidth < 768) {
  window.addEventListener('load', function () {
    const offsetPosition = 0;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });

  document.querySelectorAll('a.nav__link').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);

      let topOffset = 0;
      topOffset = topOffsetSelector();

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({ top: offsetPosition, behavior: 'smooth' });
    });
  });

  function topOffsetSelector() {
    let headerTopOffset = 0;

    if (viewportWidth < 768) {
      const { height: pageHeaderHeight } = document
        .querySelector('[data-header]')
        .getBoundingClientRect();

      headerTopOffset = pageHeaderHeight;
    } else {
      headerTopOffset = 0;
    }
    return headerTopOffset;
  }
}
