import { fetchImoveis } from "./services/api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const idImovel = urlParams.get("id");

  if (!idImovel) {
    alert("ID do imóvel não especificado.");
    return;
  }

  try {
    const imoveis = await fetchImoveis();
  
    const imovel = imoveis.find(item => item.id === idImovel);

    if (!imovel) {
      alert("Imóvel não encontrado.");
      return;
    }

    console.log(imovel)

    // Preencher imagens do topo
    const imgContainer = document.querySelector(".img-topo");
    imgContainer.innerHTML = `
      <img src="${imovel.imagemPrincipal}" alt="Imagem Principal do Imóvel">
      ${imovel.midias.map(img => `<img src="${img}" alt="Imagem do imóvel">`).join("")}
    `;

    // Título e atributos
    document.querySelector(".Texto1 p").textContent = imovel.titulo;
    document.querySelector(".imovel-valor .esquerda-valor p").textContent = imovel.tipo;
    document.querySelector(".imovel-valor .direita-valor p").textContent = `Valor do Imóvel: R$ ${imovel.preco.toLocaleString('pt-BR')}`;

    // Características principais (esquerda)
    const esquerda = document.querySelector(".esquerda-p");
    esquerda.innerHTML = `
      <h4>Código do imóvel</h4>
      <p>${imovel.id}</p>
      <hr style="width: 35em; margin: auto;" color="F1DCC5">
      <h4>Bairro</h4>
      <p>${imovel.endereco.bairro}</p>
      <hr style="width: 35em; margin: auto;" color="F1DCC5">
      <h4>Tipo</h4>
      <p>${imovel.finalidade}</p>
      <hr style="width: 35em; margin: auto;" color="F1DCC5">
      <h4>Cidade</h4>
      <p>${imovel.endereco.cidade}</p>
    `;

    // Características (direita)
    const lista = document.getElementById("lista-caracteristicas");
    lista.innerHTML = imovel.caracteristicas.map(c => `<li>${c}</li>`).join("");

    // Descrição
    document.querySelector(".desc-detalhe p").textContent = imovel.descricao;


    // Corretores (já está fixo para Hellen, mas poderia ser dinâmico se quiser depois)
    // Você pode ocultar a seção se o imovel.corretor !== "Hellen" futuramente

  } catch (erro) {
    console.error("Erro ao carregar os dados:", erro);
    alert("Falha ao carregar os dados do imóvel.");
  }
});


