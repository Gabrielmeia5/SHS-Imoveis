import { createCardOutstanding, criarCard } from "../components/Card.js";
import { fetchImoveis } from "../services/api.js";
import { inicializarSwiper } from "../utils/destaque.js";

let imoveis = [];
let currentVisible = 0;
let batchSize = 5;

export default async function initHome() {
  imoveis = await fetchImoveis();

  updateBatchSize();
  renderizarLote();
  configurarEventos();
  inicializarSwiper();

  window.addEventListener("resize", handleResize);
}

function updateBatchSize() {
  const width = window.innerWidth;

  if (width <= 600) {
    batchSize = 3;
  } else if (width <= 1024) {
    batchSize = 4;
  } else if (width <= 1440) {
    batchSize = 6;
  } else if (width <= 1756) {
    batchSize = 8;
  } else {
    batchSize = 10;
  }
}

function handleResize() {
  // Opcional: Atualizar o batchSize sempre que o usuário redimensionar a tela
  updateBatchSize();
}

function renderizarLote() {
  const catalogo = document.querySelector(".card_imoveis");
  const destaques = document.querySelector("#destaque .swiper-wrapper");

  updateBatchSize(); // Atualiza o batchSize antes de cada renderização (caso a tela tenha sido redimensionada)

  const proximoLote = imoveis.slice(currentVisible, currentVisible + batchSize);

  proximoLote.forEach((imovel) => {
    const card = criarCard(imovel);
    catalogo.appendChild(card);

    if (imovel.destaque && currentVisible === 0) {
      const slide = createCardOutstanding(imovel);
      destaques.appendChild(slide);
    }
  });
  lucide.createIcons();

  currentVisible += batchSize;

  if (currentVisible >= imoveis.length) {
    document.getElementById("verMaisBtn").style.display = "none";
  }
}

function configurarEventos() {
  document.getElementById("verMaisBtn").addEventListener("click", renderizarLote);
}
