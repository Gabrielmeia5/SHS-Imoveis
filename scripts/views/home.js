import { createCardOutstanding, criarCard } from '../components/Card.js';
import { fetchImoveis } from '../services/api.js';
import { inicializarSwiper } from '../utils/destaque.js';

let imoveis = [];
let currentVisible = 0;
const batchSize = 5;

export default async function initHome() {
  imoveis = await fetchImoveis();

  renderizarLote();
  configurarEventos();
  inicializarSwiper();
}

function renderizarLote() {
  const catalogo = document.querySelector('.card_imoveis');
  const destaques = document.querySelector('.swiper-wrapper');

  const proximoLote = imoveis.slice(currentVisible, currentVisible + batchSize);

  proximoLote.forEach(imovel => {
    const card = criarCard(imovel);
    catalogo.appendChild(card);

    if (imovel.destaque && currentVisible === 0) {
      const slide = createCardOutstanding(imovel);
      destaques.appendChild(slide);
    }
  });

  currentVisible += batchSize;

  if (currentVisible >= imoveis.length) {
    document.getElementById('verMaisBtn').style.display = 'none';
  }
}

function configurarEventos() {
  document.getElementById('verMaisBtn').addEventListener('click', renderizarLote);
}
