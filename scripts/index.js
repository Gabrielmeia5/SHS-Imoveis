import { criarCard } from './components/Card.js';
import { fetchImoveis } from './services/api.js';

let imoveis = [];
let currentVisible = 0;
const batchSize = 5;



async function init() {
  imoveis = await fetchImoveis();
  showNextCards();
}

function showNextCards() {
  const catalogoInterno = document.querySelector('.card_imoveis');
  const destaquesInterno = document.querySelector('.swiper-wrapper');

  for (let i = currentVisible; i < currentVisible + batchSize && i < imoveis.length; i++) {
    const imovel = imoveis[i];
    const card = criarCard(imovel);

    if (imovel.destaque) {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.appendChild(card.cloneNode(true));
      destaquesInterno.appendChild(slide);
    }

    catalogoInterno.appendChild(card);

    console.log(card)
  }

  currentVisible += batchSize;

  if (currentVisible >= imoveis.length) {
    document.getElementById('verMaisBtn').style.display = 'none';
  }
}

document.getElementById('verMaisBtn').addEventListener('click', showNextCards);

init();
