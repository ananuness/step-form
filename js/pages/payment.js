import { getData, redirect, storageObject } from '../components/form.js';
import { updateStep } from '../components/stepper.js';
import { inputMask } from '../validations/input-mask.js';
import { inputValidation } from '../validations/inputs.js';

const paymentForm = document.querySelector('.payment');
const previousBtn = document.getElementById('prev-btn');

const cardNumberInput = document.getElementById('card-number');
const cardHolderInput = document.getElementById('card-holder');
const validityInput = document.getElementById('validity');
const CVCInput = document.getElementById('cvc');
const cardHolderCPFOrCNPJInput = document
  .getElementById('card-holder-cpf-cnpj');

const errorMessages = document.querySelectorAll('.input__error-message');
const cardNumberError = document.getElementById('card-number-error');
const cardHolderError = document.getElementById('card-holder-error');
const validityError = document.getElementById('validity-error');
const CVCError = document.getElementById('cvc-error');
const cardHolderCPFOrCNPJError = document
  .getElementById('card-holder-cpf-cnpj-error');

const card = document.querySelector('.card-inner');
const cardFlagImg = document.querySelector('.card__flag-img');
const cardFlag = document.querySelector('.card__flag');
const cardNumber = document.querySelector('.card__number');
const cardName = document.querySelector('.card__name');
const cardValidity = document.querySelector('.card__validity');
const cardCVC = document.querySelector('.card__cvc');

updateStep(3);

const fillCardInfo = (cardField, value) => {
  if (!value) {
    cardField.textContent = cardField.getAttribute('data-label');
    return;
  }

  cardField.textContent = value;
}

cardNumberInput.addEventListener('input', event => {
  // alterar flag e flag img aqui
  fillCardInfo(cardNumber, event.target.value);
  inputValidation.requiredFieldFilled(event, cardNumberError);
});

cardHolderInput.addEventListener('input', event => {
  fillCardInfo(cardName, event.target.value);
  inputValidation.requiredFieldFilled(event, cardHolderError);
});

validityInput.addEventListener('input', event => {
  fillCardInfo(cardValidity, event.target.value);
  inputValidation.requiredFieldFilled(event, validityError);
});

CVCInput.addEventListener('input', event => {
  fillCardInfo(cardCVC, event.target.value);
  inputValidation.requiredFieldFilled(event, CVCError);
});

CVCInput.addEventListener('focusin', () => {
  card.style.transform = 'rotateY(-180deg)';
});

CVCInput.addEventListener('focusout', () => {
  card.style.transform = 'none';
});

cardHolderCPFOrCNPJInput.addEventListener('change', event => {
  inputValidation.requiredFieldFilled(event, cardHolderCPFOrCNPJError);
});

previousBtn.addEventListener('click', event => {
  event.preventDefault();

  alert('Os dados serão perdidos, tem certeza que quer voltar?');

  redirect('./address.html');
});

paymentForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!inputValidation.allRequiredFieldsFilled(event, errorMessages)) {
    return;
  }

  return;
  // getData(event, './resume.html') // storageData

  // redirect
});