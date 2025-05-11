function mostrarVideo() {
  const container = document.getElementById('videoContainer');
  container.style.display = container.style.display === 'none' || container.style.display === '' ? 'block' : 'none';
}