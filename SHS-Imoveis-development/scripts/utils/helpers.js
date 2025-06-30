export function formatarPreco(valor) {
  return `R$ ${valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
}

export function filtrarImoveis(imoveis, criterio) {
  return imoveis.filter(imovel => imovel.bairro === criterio);
}

export function checkScreenSize() {
    const navList = document.querySelector('.nav-list');
    const menuCheckbox = document.getElementById('menuBtn');
    
    if (window.innerWidth <= 768) {
      navList.classList.add('hidden');
      menuCheckbox.checked = false; 
    } else {
      navList.classList.remove('hidden');
      menuCheckbox.checked = true;
    }
}

export function navigationMenu() {
    const navList = document.querySelector(".nav-list");
    if (navList.classList.contains('hidden')) {
        navList.classList.remove("hidden");
    } else {
        navList.classList.add("hidden");
    }
}