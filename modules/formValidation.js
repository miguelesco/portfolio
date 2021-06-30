function FormValidation() {
  const form = document.getElementById('contactMe');
  const email = document.getElementById('email');
  const emailError = document.querySelector('#email + span.error');
  const textArea = document.getElementById('textArea');

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

  email.addEventListener('input', () => validateEmail());
  form.addEventListener('submit', (event) => onSubmit(event));
}

export default FormValidation;