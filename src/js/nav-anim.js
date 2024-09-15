const animNavItems = document.querySelectorAll('._yakir');
const viewportWidth = window.innerWidth;

console.log(animNavItems);
if (animNavItems.length > 0) {
  window.addEventListener('scroll', animNavOnScroll);
}

function animNavOnScroll() {
  if (viewportWidth < 768) {
    let topOffset;

    topOffset = topOffsetSelector();

    function selectLastItem() {
      let lastItem = [];
      for (let index = 0; index < animNavItems.length; index++) {
        lastItem.push(animNavItems[index]);
      }
      return lastItem.pop();
    }

    function animMoboleNavOnScroll() {
      for (let index = 0; index < animNavItems.length; index++) {
        const animNavItem = animNavItems[index];
        const animNavItemHeight = animNavItem.offsetHeight;
        const animNavItemOffset = offset(animNavItem).top;
        const pageHeight = document.body.scrollHeight;
        const vh = window.innerHeight;
        if (
          (window.scrollY + topOffset > animNavItemOffset &&
            window.scrollY + topOffset <
              animNavItemOffset + animNavItemHeight) ||
          (animNavItem === selectLastItem() &&
            window.scrollY + vh >= pageHeight)
        ) {
          changeSection(animNavItem);
        }
      }
    }

    function topOffsetSelector() {
      topOffset = 150;
      return topOffset;
    }

    animMoboleNavOnScroll();
  }

  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop };
  }

  function changeSection(navItem) {
    const navElements = document.querySelectorAll('.nav__item');
    const elementID = navItem.getAttribute('id');
    for (let index = 0; index < navElements.length; index++) {
      const navElement = navElements[index];
      const navID = navElement.getAttribute('data-menuanchor');
      if (elementID === navID) {
        addClass(navElement);
        deleteClass(elementID);
      }
    }
  }

  function addClass(navElement) {
    navElement.classList.add('active');
  }

  function deleteClass(newElementID) {
    const elementsForDelete = document.querySelectorAll('.active');
    if (elementsForDelete.length <= 1) return;
    for (let index = 0; index < elementsForDelete.length; index++) {
      const elementForDelete = elementsForDelete[index];
      if (newElementID !== elementForDelete.getAttribute('data-menuanchor')) {
        elementForDelete.classList.remove('active');
      }
    }
  }
}
