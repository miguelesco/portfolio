

function Popup (){
  const popup = {
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
    open: (cardContent, categories ) => {

      const {title, description, imageURL, sourceURL, liveURL, action} = cardContent;

      popup.image.src = imageURL;
      popup.title.innerHTML = title;
      categories.forEach(categorie => popup.categoriesContainer.append(categorie));
      
      popup.description.innerHTML = `<p>${description}</p>`;

      popup.sourceURL = sourceURL;
      popup.liveURL = liveURL;
      popup.container.style.display = 'flex';
    },
    redirectTo: (to = '') => {
      console.log(to)
      window.open(to , '_blank');
    },
    close: () => {
      while (popup.categoriesContainer.firstChild) {
        popup.categoriesContainer.removeChild(popup.categoriesContainer.firstChild);
      }
      popup.container.style.display = 'none';
    }
  
  };

  popup.closeIcon.addEventListener('click', popup.close);

  popup.seeLiveBtn.addEventListener('click', popup.redirectTo(popup.liveURL));
  popup.sourceCodeBtn.addEventListener('click', popup.redirectTo(popup.sourceURL));

  return popup;
}


export {Popup};