export function inicializarSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".setad",
      prevEl: ".setae",
    },
  });
}
