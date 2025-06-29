import { createCardOutstanding, criarCard } from "../components/Card.js";
import { fetchImoveis } from "../services/api.js";
import { inicializarSwiper } from "../utils/swipers.js";

let imoveis = [];
let listaFiltrada = [];
let currentVisible = 0;
let batchSize = 5;
let tipoFiltroAtivo = null;

const catalogo = document.querySelector(".card_imoveis");
const destaques = document.querySelector("#destaque .swiper-wrapper");
const verMaisBtn = document.getElementById("verMaisBtn");

export default async function initHome() {
  imoveis = await fetchImoveis();
  listaFiltrada = [...imoveis]; // inicia com todos
  updateBatchSize();
  renderizarDestaques();
  renderizarLote();
  configurarEventos();
  inicializarSwiper();
  window.addEventListener("resize", handleResize);
}

function updateBatchSize() {
  const width = window.innerWidth;
  if (width <= 600) batchSize = 3;
  else if (width <= 1024) batchSize = 4;
  else if (width <= 1440) batchSize = 6;
  else if (width <= 1756) batchSize = 8;
  else batchSize = 10;
}

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    updateBatchSize();
    // opcional: re-renderizar com base no novo batchSize
  }, 300);
}

function renderizarDestaques() {
  imoveis.filter(i => i.destaque).forEach(imovel => {
    const slide = createCardOutstanding(imovel);
    destaques.appendChild(slide);
  });
}

function renderizarLote() {
  const lista = tipoFiltroAtivo ? listaFiltrada : imoveis;
  const proximoLote = lista.slice(currentVisible, currentVisible + batchSize);

  proximoLote.forEach(imovel => {
    const card = criarCard(imovel);
    catalogo.appendChild(card);
  });

  lucide.createIcons();
  currentVisible += batchSize;

  if (currentVisible >= lista.length) {
    verMaisBtn.style.display = "none";
  } else {
    verMaisBtn.style.display = "block";
  }
}

function aplicarFiltro(tipo = null) {
  tipoFiltroAtivo = tipo;

  if (tipo) {
    listaFiltrada = imoveis.filter(imovel => imovel.tipo === tipo);
  } else {
    listaFiltrada = [...imoveis];
  }

  catalogo.innerHTML = "";
  currentVisible = 0;
  renderizarLote();
}

function configurarFiltroPorTipo() {
  const filtros = document.querySelectorAll('input[name="filter-radio"]');

  filtros.forEach(input => {
    input.addEventListener("click", (event) => {
      const tipo = input.value;
      const existe = imoveis.some(imovel => imovel.tipo === tipo);

      if (!existe) {
        event.preventDefault();
        animarInputInvalido(input);
        return;
      }

      if (tipoFiltroAtivo === tipo) {
        input.checked = false;
        aplicarFiltro(null);
        scrollParaCatalogo();
      } else {
        aplicarFiltro(tipo);
        scrollParaCatalogo();
      }
    });
  });
}

function animarInputInvalido(input) {
  const label = input.closest("label");
  if (!label) return;

  label.classList.add("input-invalido");

  setTimeout(() => {
    label.classList.remove("input-invalido");
  }, 1000); // remove após 1s
}

function configurarEventos() {
  verMaisBtn.addEventListener("click", renderizarLote);
  configurarFiltroPorTipo();
}


function scrollParaCatalogo() {
  const section = document.querySelector(".card_imoveis");
  if (!section) return;

  const offset = section.getBoundingClientRect().top + window.pageYOffset - 150;

  window.scrollTo({
    top: offset,
    behavior: "smooth"
  });
}
