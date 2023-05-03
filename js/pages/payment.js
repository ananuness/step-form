import { getData, redirect, storageData } from '../components/form.js';
import { updateStep } from '../components/stepper.js';
import { verifyCardType } from '../validations/card-flags.js';
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
const cardFlagName = document.querySelector('.card__flag');
const cardNumber = document.querySelector('.card__number');
const cardName = document.querySelector('.card__name');
const cardValidity = document.querySelector('.card__validity');
const cardCVC = document.querySelector('.card__cvc');

let cardType = {};

updateStep(3);

inputMask.addMask(cardHolderInput, inputMask.onlyLetters);
inputMask.addMask(CVCInput, inputMask.onlyNumbers);
inputMask.addMask(validityInput, inputMask.monthYearDate);

const fillCardInfo = (cardField, value) => {
  if (!value) {
    cardField.textContent = cardField.getAttribute('data-label');
    return;
  }

  cardField.textContent = value;
}

const setCardFeatures = (event) => {
  const inputValue = event.target.value;

  fillCardInfo(cardNumber, inputValue);

  if (inputValue.length < 7) {
    card.setAttribute('class', 'card-inner');
    cardFlagImg.src = '../assets/flags/default.svg';
    cardFlagName.textContent = cardFlagName.getAttribute('data-label');
  }

  cardType = verifyCardType(inputValue.slice(0, 8).replace(' ', ''));

  if (cardType) {
    card.setAttribute('class', 'card-inner');
    card.classList.add(cardType.name);
    cardFlagImg.src = `../assets/flags/${cardType.name}.svg`;
    cardFlagName.textContent = `${cardType.formalName} • Crédito`;
    cardNumberInput.maxLength = cardType.maxLengthWithSpaces;
    cardHolderInput.maxLength = cardType.nameMaxLength;
    CVCInput.maxLength = cardType.cvcLength;
  }
  else {
    cardNumberInput.maxLength = 23;
    cardHolderInput.maxLength = 22;
    CVCInput.maxLength = 4;
  }
}

cardNumberInput.addEventListener('input', event => {
  event.target.value = inputMask.cardNumber(
    event.target.value, 
    cardNumberInput.maxLength
  );

  setCardFeatures(event);
});

cardNumberInput.addEventListener('change', event => 
  inputValidation.cardNumber(cardType, event, cardNumberError)
);

cardHolderInput.addEventListener('input', event =>
  fillCardInfo(cardName, event.target.value.toUpperCase())
);

cardHolderInput.addEventListener('change', event => 
  inputValidation.name(event, cardHolderError)
);

validityInput.addEventListener('input', event =>
  fillCardInfo(cardValidity, event.target.value)
);

validityInput.addEventListener('change', event => 
  inputValidation.monthYearDate(event, validityError)
);

CVCInput.addEventListener('input', event =>
  fillCardInfo(cardCVC, event.target.value)
);

CVCInput.addEventListener('change', event => 
  inputValidation.CVC(event, CVCError)
);

CVCInput.addEventListener('focusin', () => 
  card.style.transform = 'rotateY(-180deg)'
);

CVCInput.addEventListener('focusout', () => 
  card.style.transform = 'none'
);

cardHolderCPFOrCNPJInput.addEventListener('input', event => 
  event.target.value = inputMask.CPFOrCNPJ(
    event.target.value, event.target.value.length
  )
);

cardHolderCPFOrCNPJInput.addEventListener('change', event => 
  inputValidation.CPFOrCNPJ(event, cardHolderCPFOrCNPJError)
);

previousBtn.addEventListener('click', event => {
  event.preventDefault();

  // mostrar modal ao inves de um alert

  redirect('./address.html');
});

paymentForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!inputValidation.allRequiredFieldsFilled(event, errorMessages)) {
    return;
  }

  storageData('paymentMethod', getData(event));
  storageData('cardType', cardType.formalName);
  redirect('./resume.html');
});