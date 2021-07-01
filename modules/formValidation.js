import Storage from './storage.js';

const form = document.getElementById('contactMe');
const email = document.getElementById('email');
const firstname = document.getElementById('firstName');
const lastname = document.getElementById('lastName');
const fullname = document.getElementById('fullname');
const textArea = document.getElementById('textArea');
const emailError = document.querySelector('#email + span.error');

function showError() {
  email.style.marginBottom = '0px';
  textArea.style.marginTop = '25px';
  if (email.validity.valueMissing) {
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  } else if (email.value !== email.value.toLowerCase()) {
    emailError.textContent = 'The email has to be all in lower case';
  }

  emailError.className = 'error active';
}

const validateEmail = () => {
  Storage.save('email', email.value);
  if (email.validity.valid && email.value === email.value.toLowerCase()) {
    // display error
    emailError.textContent = '';
    emailError.className = 'error';
  } else {
    showError();
  }
};

const onSubmit = (event) => {
  if (!email.validity.valid || email.value !== email.value.toLowerCase()) {
    showError();
    event.preventDefault();
  }
};

function InitFormValidation() {
  firstname.addEventListener('input', () => Storage.save('firstname', firstname.value));
  lastname.addEventListener('input', () => Storage.save('lastname', lastname.value));
  fullname.addEventListener('input', () => Storage.save('fullname', fullname.value));
  textArea.addEventListener('input', () => Storage.save('message', textArea.value));
  email.addEventListener('input', () => validateEmail());
  form.addEventListener('submit', (event) => onSubmit(event));
}

export default InitFormValidation;