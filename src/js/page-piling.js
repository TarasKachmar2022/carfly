const viewportWidth = window.innerWidth;

$(document).ready(function () {
  if (viewportWidth >= 768) {
    $('#pagepiling').pagepiling({
      menu: '#myMenu',
      anchors: ['hero', 'products', 'sellers', 'info', 'contacts'],
      navigation: false,
    });
  }
});
