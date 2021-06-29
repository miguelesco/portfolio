import {initSidebar} from './modules/sidebar.js';
import {CardsGeneration} from './modules/cardGeneration.js';
import {Popup} from './modules/popup.js';


const init = () => {
  initSidebar();
  CardsGeneration();
  Popup.init();
};

init();

