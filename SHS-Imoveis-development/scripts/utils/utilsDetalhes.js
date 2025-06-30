export function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function toggleLoading(show) {
  const overlay = document.getElementById("loading-overlay");
  if (!overlay) return;

  overlay.style.display = show ? "flex" : "none";
}

export function showError(msg) {
  alert(msg);
  const main = document.getElementById("main-content");
  if (main) {
    main.innerHTML = `<p class="erro">${msg}</p>`;
  }
  toggleLoading(false);
}
