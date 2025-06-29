export function renderImovel(imovel) {
  // Título e info topo
  document.querySelector('.Texto1 p').textContent = imovel.titulo;
  document.querySelector('.icone-area').textContent = `${imovel.area}m²`;
  document.querySelector('.icone-quartos').textContent = imovel.quartos;
  document.querySelector('.icone-garagem').textContent = imovel.vagasGaragem;

  // Preço
  document.querySelector('.preco p').textContent = 
    imovel.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  document.querySelector('.imovel-valor .esquerda-valor p').textContent = imovel.tipo;

  // Ficha do imóvel
  const esquerda = document.querySelector('.esquerda-p');
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

  // Características
  const lista = document.querySelector('.lista-caracteristicas');
  lista.innerHTML = imovel.caracteristicas.map(c => `
    <li><img src="assets/icons/Line 70.svg" alt="">${c}</li>`).join('');

  // Descrição
  document.querySelector('.desc-detalhe p').textContent = imovel.descricao;

  // Corretor
  document.querySelector('.h3-helen-pc').textContent = imovel.corretor;
  document.querySelector('.h3-helen-mobile').textContent = imovel.corretor;

  // Imagens
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = [imovel.imagemPrincipal, ...imovel.midias].map((src, i) => `
    <div class="swiper-slide">
      <img src="${src}" alt="Imagem ${i + 1} do imóvel" class="image-number${i + 1}">
    </div>
  `).join('');
}
