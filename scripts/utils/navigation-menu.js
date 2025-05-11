export function checkScreenSize() {
    const navList = document.querySelector('.nav-list');
    const menuCheckbox = document.getElementById('menuBtn'); // você esqueceu de declarar isso aqui!
    

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