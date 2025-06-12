import initHome from "./views/home.js";

document.addEventListener('DOMContentLoaded', () => {
  initHome();
});

  const swiper = new Swiper('.home-bg-swiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination-home',
      clickable: true,
    },
  });