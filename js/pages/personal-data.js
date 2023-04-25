import { storageData } from '../components/form.js';
import { updateStep } from '../components/stepper.js';
import { inputMask } from '../validations/input-mask.js';
import { inputValidation } from '../validations/inputs.js';

const personalDataForm = document.querySelector('.personal-data');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const birthDateInput = document.getElementById('birth-date');
const CPFInput = document.getElementById('cpf');

const errorMessages = document.querySelectorAll('.input__error-message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const phoneError = document.getElementById('phone-error');
const birthDateError = document.getElementById('birth-error');
const CPFError = document.getElementById('cpf-error');

updateStep(1);

inputMask.addMask(nameInput, inputMask.onlyLetters);
inputMask.addMask(emailInput, inputMask.email);
inputMask.addMask(phoneInput, inputMask.phone);
inputMask.addMask(birthDateInput, inputMask.date);
inputMask.addMask(CPFInput, inputMask.CPF);

// input validations here

nameInput.addEventListener(
  'change', (event) => inputValidation.requiredFieldFilled(event, nameError)
);

emailInput.addEventListener(
  'change', (event) => inputValidation.email(event, emailError)
);

phoneInput.addEventListener('change', (event) => {
  inputValidation.phone(event, phoneError);
});

birthDateInput.addEventListener(
  'change', (event) => inputValidation.requiredField(event, birthDateError)
);

CPFInput.addEventListener(
  'change', (event) => inputValidation.requiredField(event, CPFError)
);

personalDataForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!inputValidation.allRequiredFieldsFilled(event, errorMessages)) {
    return;
  }

  storageData(event);
  
  console.log(localStorage);
  return;

  // redirect('./pages/address.html');
});