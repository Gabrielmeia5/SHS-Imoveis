export function inicializarSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    /* autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    }, */
    loop: true,
    navigation: {
      nextEl: ".setad",
      prevEl: ".setae",
    },
  });
}
