import { checkboxFilterItems, checkboxMenuMobile } from "./utils/checkboxHome.js";
import initHome from "./views/home.js";

document.addEventListener('DOMContentLoaded', () => {
  initHome();
  checkboxMenuMobile();
  checkboxFilterItems()
});

document.getElementById('btn-anuncia').addEventListener('click', () => {
  const url = 'https://wa.me/5599999999999';
  window.open(url, '_blank');
})