const cards = document.querySelectorAll('.card');
const btn = document.getElementById('verMaisBtn');
let currentVisible = 0;
const batchSize = 5;

function showNextCards() {
  for (let i = currentVisible; i < currentVisible + batchSize && i < cards.length; i++) {
    cards[i].style.display = 'flex';
  }
  currentVisible += batchSize;

  if (currentVisible >= cards.length) {
    btn.style.display = 'none';
  }
}

showNextCards();

btn.addEventListener('click', showNextCards);