document.addEventListener('DOMContentLoaded', () => {
    const helenContainer = document.getElementById('helen-info');
  
    // Imagem da Helen
    const img = document.createElement('img');
    img.src = '../assets/images/HELEN.svg'; // Atualize se precisar
    img.alt = 'Corretora Helen';
    helenContainer.appendChild(img);
  
    // Div para o texto
    const texto = document.createElement('div');
    texto.className = 'helen-texto';
  
    // Nome
    const nome = document.createElement('h3');
    nome.textContent = 'Helen Oliveira';
    texto.appendChild(nome);
  
    // Descrição
    const descricao = document.createElement('p');
    descricao.textContent = 'Especialista em imóveis de alto padrão, com anos de experiência ajudando clientes a realizarem o sonho do imóvel perfeito.';
    texto.appendChild(descricao);
  
    // Botão de contato
    const linkContato = document.createElement('a');
    linkContato.href = 'https://wa.me/SEUNUMERO'; // Atualize o número do WhatsApp
    linkContato.target = '_blank';
    linkContato.className = 'btn-contato';
    linkContato.textContent = 'Falar com Helen';
    texto.appendChild(linkContato);
  
    // Adiciona tudo no container
    helenContainer.appendChild(texto);
  });