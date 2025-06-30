export function inicializarSwiper() {
  new Swiper(".mySwiper", {
    autoplay: {
      delay: 15000,
      disableOnInteraction: false,
    },
    slidesPerView: 5,
    breakpoints: {
      390: {
        slidesPerView: 1,
      },
      428: {
        slidesPerView: 1.2,
      },
      465: {
        slidesPerView: 1.3,
      },
      500: {
        slidesPerView: 1.4,
      },
      535: {
        slidesPerView: 1.5,
      },
      570: {
        slidesPerView: 1.6,
      },
      605: {
        slidesPerView: 1.7,
      },
      645: {
        slidesPerView: 1.8,
      },
      680: {
        slidesPerView: 1.9,
      },
      750: {
        slidesPerView: 2.1,
      },
      820: {
        slidesPerView: 2.3,
      },
      890: {
        slidesPerView: 2.5,
      },
      965: {
        slidesPerView: 2.7,
      },
      1040: {
        slidesPerView: 2.9,
      },
      1110: {
        slidesPerView: 3.1,
      },
      1190: {
        slidesPerView: 3.3,
      },
      1255: {
        slidesPerView: 3.5,
      },
      1325: {
        slidesPerView: 3.7,
      },
      1550: {
        slidesPerView: 4.7,
      },
      1700: {
        slidesPerView: 5,
      },
    },
    loop: true,
    navigation: {
      nextEl: ".setad",
      prevEl: ".setae",
    },
  });

  new Swiper('.home-bg-swiper', {
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
}