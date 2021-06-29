const sidebar = document.getElementById('sideBar');
const hamburguerIcon = document.getElementById('hamburguerIcon');
const closeBtn = document.getElementsByClassName('close-sidebar')[0];
const navigationTag = document.getElementsByClassName('sidebarNavigation');
const projectSection = document.getElementById('works');


const cardChild = [];
const content = [
  {
    title: 'Multi-Post Stories Gain+Glory1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageURL: '',
    sourceURL: '',
    liveURL: '',
    categories: ['Ruby on rails', 'css', 'Javascript', 'HTML'],
    action: ''
  },{
    title: 'Multi-Post Stories Gain+Glory2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageURL: '',
    sourceURL: '',
    liveURL: '',
    categories: ['Ruby on rails', 'css', 'Javascript', 'HTML'],
    action: ''
  },{
    title: 'Multi-Post Stories Gain+Glory3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageURL: '',
    sourceURL: '',
    liveURL: '',
    categories: ['Ruby on rails', 'css', 'Javascript', 'HTML'],
    action: ''
  },
];

const createElement = (elementType = '' , elementContent , elementClass = '',  elementId = '') => {
  const newElement = document.createElement(elementType);
  newElement.innerHTML = elementContent;
  if(elementClass) newElement.className = elementClass;
  if(elementId) newElement.id = elementId;
  return newElement;
}

const renderCardContent = () => {
  content.forEach((cardContent, i) => {
    const {title, description, imageURL, sourceURL, liveURL, categories, action} = cardContent;


    cardChild.push({
      cardImage: createElement('div', `<img src=${imageURL} alt=${title}>`, 'projectImage', '' ),
      cardTitle: createElement('article', `<h3>${title}</h3>`, 'cardTitle', ''),
      categories: createElement('ul', '', 'projectCategories', ''),
      buttonContainer: createElement('div', '', 'seeProjectContainer', '')
    });
    categories.forEach(categorie => cardChild[i].categories.append(createElement('li', categorie, '', '')));
    const button = createElement('button', 'See Project', 'seeProjectBtn', '');
    button.addEventListener('click', () => {console.log('click button')});
    cardChild[i].buttonContainer.append(button);
  });

  cardChild.forEach((child, i) => {
    const {cardImage, cardTitle, categories, buttonContainer} = child;
    card.push(createElement('li', '', 'project-card', ''));
    card[i].append(cardImage, cardTitle, categories, buttonContainer);
    cardContainer.append(card[i]);
  });
  

  
}

const displaySidebar = () => {
  sidebar.style.display = 'block';
};

const closeSideBar = () => {
  sidebar.style.display = 'none';
};

const seeProject = () => {
  //open popup
};



const sectionTitle = createElement('h2', 'My Recent Works ', 'blueTitleText', '');
const divider = createElement('div', '', 'divider', '');
const card = [];
const cardContainer = createElement('ul', '', 'grid-card-container', '' );

renderCardContent();

hamburguerIcon.addEventListener('click', displaySidebar);
closeBtn.addEventListener('click', closeSideBar);
Array.from(navigationTag).forEach((value) => {
  value.addEventListener('click', closeSideBar);
});

window.onclick = function window(event) {
  if (event.target === sidebar) {
    sidebar.style.display = 'none';
  }
};

projectSection.append(
  sectionTitle, 
  divider,
  cardContainer
);