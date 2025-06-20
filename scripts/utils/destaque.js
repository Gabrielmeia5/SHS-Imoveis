export function inicializarSwiper() {
  new Swiper(".mySwiper", {
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 30,
      }
    },
    loop: true,
    navigation: {
      nextEl: ".setad",
      prevEl: ".setae",
    },
  });
}