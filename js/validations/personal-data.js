import { getData } from '../form.js';
import { inputMask } from '../input-mask.js';
import { updateStep } from '../stepper.js';

const personalDataForm = document.querySelector('.personal-data');
const inputContainer = document.querySelector('.input-container');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('email-error');
const phoneInput = document.getElementById('phone');
const birthDateInput = document.getElementById('birth-date');
const cpfInput = document.getElementById('cpf');

updateStep(1);

const isEmailValid = (event) => {
  const email = event.target;
  const emailAt = email.value.split('@');
  
  if (emailAt.length !== 2) {
    emailError.textContent = 'E-mail deve conter um @';
    email.parentElement.classList.add('invalid');
    return false;
  }

  if (
    !emailAt[0] || !emailAt[1] ||
    !email.value.includes('.') || 
    email.value.startsWith('.') || email.value.endsWith('.')
  ) {
    emailError.textContent = 'Formato de e-mail inválido';
    email.parentElement.classList.add('invalid');
    return false;
  }

  emailError.textContent = '';
  email.parentElement.classList.remove('invalid');

  return true;
}

// input validations here
// the onInput and onChange are similar, but the key difference is 
// that the onInput occurs immediately after the input value changes,
// while the onChange occurs when the input loses focus.
// The other difference is that the onchange event also works on 
// <select> elements.
nameInput.addEventListener('input', (event) => {
  event.target.value = inputMask.onlyLetters(event.target.value);
});

emailInput.addEventListener('change', (event) => isEmailValid(event));

phoneInput.addEventListener('input', (event) => {
  event.target.value = inputMask.phone(event.target.value);
});

birthDateInput.addEventListener('input', (event) => {
  event.target.value = inputMask.date(event.target.value);
});

cpfInput.addEventListener('input', (event) => {
  event.target.value = inputMask.CPF(event.target.value);
})

personalDataForm.addEventListener('submit', (event) => {
  // event.preventDefault();

  // call allInputsValidation function 
  // (calls all validation functions)

  getData(event, './pages/address.html'); // storageData

  // redirect
});