import initSidebar from './modules/sidebar.js';
import CardsGeneration from './modules/cardGeneration.js';
import Popup from './modules/popup.js';
import FormValidation from './modules/formValidation.js';

const init = () => {
  initSidebar();
  CardsGeneration();
  Popup.init();
  FormValidation();
};

init();
