import initSidebar from './modules/sidebar.js';
import CardsGeneration from './modules/cardGeneration.js';
import Popup from './modules/popup.js';
import Storage from './modules/storage.js';
import InitFormValidation from './modules/formValidation.js';

const init = () => {
  initSidebar();
  CardsGeneration();
  Popup.init();
  InitFormValidation();
  Storage.init();
};

init();
