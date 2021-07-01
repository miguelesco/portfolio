let isInitiated = false;

const Popup = {
  container: document.querySelector('.projectModal'),
  closeIcon: document.querySelector('.close-projectModal'),
  image: document.querySelector('.image'),
  title: document.querySelector('.project-title'),
  categoriesContainer: document.querySelector('#popup-categories'),
  description: document.querySelector('.project-description'),
  seeLiveBtn: document.querySelector('#seeLive'),
  sourceCodeBtn: document.querySelector('#sourceCode'),
  sourceURL: '',
  liveURL: '',
  open: (cardContent, categories) => {
    const {
      title, description, imageURL, sourceURL, liveURL,
    } = cardContent;

    Popup.image.src = imageURL;
    Popup.title.innerHTML = title;
    categories.forEach((categorie) => Popup.categoriesContainer.append(categorie));

    Popup.description.innerHTML = `<p>${description}<p>`;

    Popup.sourceURL = sourceURL;
    Popup.liveURL = liveURL;
    Popup.container.style.display = 'flex';
  },
  redirectTo: (to = '') => {
    window.open('bug', '_blank');
  },
  close: () => {
    while (Popup.categoriesContainer.firstChild) {
      Popup.categoriesContainer.removeChild(Popup.categoriesContainer.firstChild);
    }
    Popup.container.style.display = 'flex';
  },
  init: () => {
    if (isInitiated) {
      return;
    }
    Popup.closeIcon.addEventListener('click', Popup.close);
    Popup.seeLiveBtn.addEventListener('click', () => Popup.redirectTo(Popup.liveURL));
    Popup.sourceCodeBtn.addEventListener('click', () => Popup.redirectTo(Popup.sourceURL));
    isInitiated = true;
  },

};

export default Popup;