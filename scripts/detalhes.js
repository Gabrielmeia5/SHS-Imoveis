// Pega o ID da URL
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

fetch('imoveis.json')
  .then(res => res.json())
  .then(imoveis => {
    const imovel = imoveis.find(item => item.id === id);

    if (!imovel) {
      console.error('Imóvel não encontrado!');
      return;
    }

    // Pega os elementos do HTML prontos
    const imagemImovel = document.getElementById('imagem-imovel');
    const resumoImovel = document.getElementById('resumo-imovel');
    const listaCaracteristicas = document.getElementById('lista-caracteristicas');
    const descricao = document.getElementById('descricao');

    // LIMPA TUDO ANTES (por segurança)
    imagemImovel.textContent = '';
    resumoImovel.textContent = '';
    listaCaracteristicas.textContent = '';
    descricao.textContent = '';

    // --- IMAGEM PRINCIPAL ---
    imagemImovel.style.backgroundImage = `url('${imovel.imagemPrincipal}')`;

    // --- RESUMO ---
    const titulo = document.createElement('h1');
    titulo.textContent = imovel.titulo;
    resumoImovel.appendChild(titulo);

    const preco = document.createElement('p');
    const strongPreco = document.createElement('strong');
    strongPreco.textContent = 'Preço: ';
    preco.appendChild(strongPreco);
    preco.append(`R$ ${Number(imovel.preco).toLocaleString('pt-BR')}`);
    resumoImovel.appendChild(preco);

    const endereco = document.createElement('p');
    const strongEndereco = document.createElement('strong');
    strongEndereco.textContent = 'Endereço: ';
    endereco.appendChild(strongEndereco);
    endereco.append(`${imovel.endereco.bairro} - ${imovel.endereco.cidade}/${imovel.endereco.estado}`);
    resumoImovel.appendChild(endereco);

    // --- DESCRIÇÃO ---
    const descricaoTexto = document.createElement('p');
    descricaoTexto.textContent = imovel.descricao || 'Descrição não disponível.';
    descricao.appendChild(descricaoTexto);

    // --- CARACTERÍSTICAS ---
    const caracteristicas = [
      { label: 'Área', valor: `${imovel.area} m²` },
      { label: 'Área Construída', valor: `${imovel.areaConstruida} m²` },
      { label: 'Quartos', valor: imovel.quartos },
      { label: 'Suítes', valor: imovel.suites },
      { label: 'Banheiros', valor: imovel.banheiros },
      { label: 'Vagas de Garagem', valor: imovel.vagasGaragem },
      { label: 'Andar', valor: imovel.andar || 'Não informado' },
      { label: 'Ano de Construção', valor: imovel.anoConstrucao || 'Não informado' }
    ];

    caracteristicas.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.label}: ${item.valor}`;
      listaCaracteristicas.appendChild(li);
    });

    // --- LISTAR OUTRAS CARACTERÍSTICAS (opcional) ---
    if (imovel.caracteristicas && imovel.caracteristicas.length > 0) {
      const tituloExtras = document.createElement('h3');
      tituloExtras.textContent = 'Outras características:';
      listaCaracteristicas.appendChild(tituloExtras);

      imovel.caracteristicas.forEach(caract => {
        const li = document.createElement('li');
        li.textContent = caract;
        listaCaracteristicas.appendChild(li);
      });
    }

    // --- FOTOS EXTRAS ---
    const fotosContainer = document.getElementById('fotos-adicionais');
    if (fotosContainer && imovel.midias && imovel.midias.length > 0) {
      fotosContainer.textContent = '';
      imovel.midias.forEach(foto => {
        const img = document.createElement('img');
        img.src = foto;
        img.alt = 'Foto adicional';
        img.style.width = '100%';
        img.style.maxWidth = '400px';
        fotosContainer.appendChild(img);
      });
    }

    // --- VÍDEOS (COM BOTÃO DE PLAY) ---
    const videosContainer = document.getElementById('videos');
    if (videosContainer && imovel.videos && imovel.videos.length > 0) {
      videosContainer.textContent = '';
      imovel.videos.forEach(video => {
        const botao = document.createElement('button');
        botao.textContent = '▶ Assistir Vídeo';
        botao.style.padding = '10px 20px';
        botao.style.margin = '10px';
        botao.style.backgroundColor = '#e3b899';
        botao.style.color = 'white';
        botao.style.border = 'none';
        botao.style.borderRadius = '5px';
        botao.style.cursor = 'pointer';
        botao.style.fontSize = '16px';

        botao.addEventListener('click', () => {
          const videoUrl = video.replace('watch?v=', 'embed/');
          const fullscreenWindow = window.open('', '_blank', 'width=800,height=600');
          fullscreenWindow.document.write(`
            <html>
              <head><title>Vídeo</title></head>
              <body style="margin:0; background:black; display:flex; align-items:center; justify-content:center; height:100vh;">
                <iframe width="100%" height="100%" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
              </body>
            </html>
          `);
        });

        videosContainer.appendChild(botao);
      });
    }

  })
  .catch(error => {
    console.error('Erro ao buscar o imóvel:', error);
  });