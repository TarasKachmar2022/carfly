window.onload = () => {
  const button = Object.values(document.querySelectorAll('.accordion__btn'));

  button.forEach(e => {
    e.onclick = () => {
      const p = e.nextElementSibling;
      const div = e.parentElement;

      if (p.style.maxHeight) {
        e.classList.remove('.accordion__btn--active');
        p.classList.remove('accordion__descr--active');
        div.classList.remove('accordion__item--active');

        p.style.maxHeight = null;
      } else {
        button.forEach(e => {
          e.classList.remove('.accordion__btn--active');

          e.nextElementSibling.classList.remove('accordion__descr--active');
          e.nextElementSibling.style.maxHeight = null;

          e.parentElement.classList.remove('accordion__item--active');
        });

        e.classList.add('.accordion__btn--active');
        p.classList.add('accordion__descr--active');
        div.classList.add('accordion__item--active');

        p.style.maxHeight = p.scrollHeight + 'px';
      }
    };
  });
};
