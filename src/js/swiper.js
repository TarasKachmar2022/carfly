import Swiper from 'swiper';
import 'swiper/swiper.scss';

const swiper = new Swiper('.swiper', {
  spaceBetween: 10,
  breakpoints: {
    0: {
      direction: 'vertical',
      slidesPerView: 2,
      allowTouchMove: false,
      loop: false,
    },
    768: {
      direction: 'horizontal',
      slidesPerView: 2,
      allowTouchMove: true,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    },
  },
});
