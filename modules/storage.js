

const Storage = {
  DOMelements: {
    email: document.getElementById('email'),
    firstname: document.getElementById('firstName'),
    lastname: document.getElementById('lastName'),
    fullname: document.getElementById('fullname'),
    message: document.getElementById('textArea'),
  },
  data: {
    firstname: '',
    lastname: '',
    fullname: '',
    email: '',
    message: ''
  },
  save: (item, value) => {
    Storage.data[item] = value;
    window.localStorage.setItem('data', JSON.stringify(Storage.data));
  },
  init: () => {
    if (window.localStorage.getItem('data')) {
      const formInputs  = JSON.parse(window.localStorage.getItem('data'));
      Storage.data = formInputs;
    }
    for (const key in Storage.DOMelements) {
      console.log( Storage.DOMelements[key].value);
      Storage.DOMelements[key].value = Storage.data[key];
    }
  }
};

export default Storage;