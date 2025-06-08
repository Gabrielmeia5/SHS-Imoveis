import { fetchImoveis } from "./services/api.js";

document.addEventListener("DOMContentLoaded", () => {
  init();
});

async function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const idImovel = urlParams.get("id");

  if (!idImovel) {
    showError("ID do imóvel não especificado.");
    return;
  }

  try {
    const [imoveis] = await Promise.all([
      fetchImoveis(),
      delay(1000)
    ]);

    const imovel = imoveis.find(item => item.id === idImovel);

    if (!imovel) {
      showError("Imóvel não encontrado.");
      return;
    }

    renderImovel(imovel);
  } catch (erro) {
    console.error("Erro ao carregar os dados:", erro);
    showError("Falha ao carregar os dados do imóvel.");
  } finally {
    toggleLoading(false);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function toggleLoading(show) {
  const overlay = document.getElementById("loading-overlay");
  if (!overlay) return;

  if (!show) {
    overlay.classList.add("fade-out");
    setTimeout(() => overlay.remove(), 500); // remove após transição
  }
}

function showError(msg) {
  alert(msg);
  toggleLoading(false);
  document.getElementById("main-content").innerHTML = `<p class="erro">${msg}</p>`;
}

function renderImovel(imovel) {
  // Imagens
  const imgContainer = document.querySelector(".img-topo");
  imgContainer.innerHTML = `
    <img src="${imovel.imagemPrincipal}" alt="Imagem Principal do Imóvel">
    ${imovel.midias.map(img => `<img src="${img}" alt="Imagem do imóvel">`).join("")}
  `;

  // Título e atributos
  document.querySelector(".Texto1 p").textContent = imovel.titulo;
  document.querySelector(".imovel-valor .esquerda-valor p").textContent = imovel.tipo;
  document.querySelector(".imovel-valor .direita-valor p").textContent =
    `Valor do Imóvel: R$ ${Number(imovel.preco).toLocaleString('pt-BR')}`;

  // Características (esquerda)
  const esquerda = document.querySelector(".esquerda-p");
  esquerda.innerHTML = `
    <h4>Código do imóvel</h4>
    <p>${imovel.id}</p>
    <h4>Bairro</h4>
    <p>${imovel.endereco.bairro}</p>
    <h4>Tipo</h4>
    <p>${imovel.finalidade}</p>
    <h4>Cidade</h4>
    <p>${imovel.endereco.cidade}</p>
  `;

  // Características (direita)
  const lista = document.getElementById("lista-caracteristicas");
  lista.innerHTML = imovel.caracteristicas.map(c => `<li>${c}</li>`).join("");

  // Descrição
  document.querySelector(".desc-detalhe p").textContent = imovel.descricao;
}
