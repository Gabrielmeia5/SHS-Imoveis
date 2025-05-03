const cards = document.querySelectorAll('.card');
const btn = document.getElementById('verMaisBtn');
let currentVisible = 0;
const batchSize = 5;

function showNextCards() {
  for (let i = currentVisible; i < currentVisible + batchSize && i < cards.length; i++) {
    cards[i].style.display = 'flex';
  }
  currentVisible += batchSize;

  // Esconde o botão se não houver mais cards
  if (currentVisible >= cards.length) {
    btn.style.display = 'none';
  }
}

// Mostrar os primeiros 5 ao carregar
showNextCards();

// Evento do botão
btn.addEventListener('click', showNextCards);