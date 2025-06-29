const swiper = new Swiper('.swiper-imgs-imovel', {
  slidesPerView: 4,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-img',
    prevEl: '.swiper-button-prev-img',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    769: {
      slidesPerView: 4,
    }
  }
});


const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-popup');

// Abrir popup ao clicar na imagem
document.querySelectorAll('.swiper-imgs-imovel img').forEach(img => {
  img.addEventListener('click', () => {
    popupImg.src = img.src;
    popup.classList.remove('hidden');
  });
});

// Fechar ao clicar no botão
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden');
  popupImg.src = '';
});

// Fechar ao clicar fora da imagem
popup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup-content')) {
    popup.classList.add('hidden');
    popupImg.src = '';
  }
});
