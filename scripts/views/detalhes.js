import { fetchImoveis } from '../services/api.js';
import { delay, showError, toggleLoading } from '../utils/utilsDetalhes.js';
import { renderImovel } from '../components/render.js';
import { checkboxMenuMobile } from '../utils/checkboxHome.js';


const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.getElementById('close-popup');


document.addEventListener('DOMContentLoaded', init);

async function init() {
  checkboxMenuMobile();
  toggleLoading(true);
  const urlParams = new URLSearchParams(window.location.search);
  const idImovel = urlParams.get("id");

  if (!idImovel) {
    showError("ID do imóvel não especificado.");
    return;
  }

  try {
    const imoveis = await fetchImoveis();
    await delay(500); // Simulação de carregamento, opcional

    const imovel = imoveis.find(item => item.id === idImovel);

    if (!imovel) {
      showError("Imóvel não encontrado.");
      return;
    }

    renderImovel(imovel);
    
    swiperHeader.update(); // Atualiza o swiper após renderizar o imóvel
    openPopup()
  } catch (erro) {
    console.error("Erro ao carregar dados:", erro);
    showError("Erro ao carregar os dados do imóvel.");
  } finally {
    toggleLoading(false);
  }
}

const swiperHeader = new Swiper('.swiper-imgs-imovel', {
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

// Abrir popup ao clicar na imagem
function openPopup() {
  document.querySelectorAll('.swiper-imgs-imovel .swiper-slide img').forEach(img => {
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


}