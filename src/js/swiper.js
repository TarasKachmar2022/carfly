import Swiper, { Navigation, Autoplay } from 'swiper';
import 'swiper/swiper.scss';

const swiper = new Swiper('.swiper-sellers', {
  modules: [Navigation, Autoplay],
  slidesPerView: 'auto',
  autoplay: {
    delay: 3000,
    // reverseDirection: true,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 4,
      // allowTouchMove: false,
      // loop: false,
    },
    768: {
      direction: 'horizontal',
      speed: 2000,
      slidesPerView: 2,
      allowTouchMove: true,
      loop: true,
      spaceBetween: 20,
    },
  },
});
