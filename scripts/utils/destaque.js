export function inicializarSwiper() {
  new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".setad",
      prevEl: ".setae",
    },
  });
}
