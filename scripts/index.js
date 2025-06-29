import { checkboxFilterItems, checkboxMenuMobile } from "./utils/checkboxHome.js";
import initHome from "./views/home.js";

document.addEventListener('DOMContentLoaded', () => {
  initHome();
  checkboxMenuMobile();
  checkboxFilterItems()
});

