import { DateValidation } from './date.js';

const addInputError = (input, errorElement, message) => {
  errorElement.textContent = message;
  input.parentElement.classList.add('invalid');
}

const removeInputError = (input, errorElement) => {
  errorElement.textContent = '';
  input.parentElement.classList.remove('invalid');
}

const requiredFieldFilled = (event, errorElement) => {
  if (!event.target.value) {
    addInputError(
      event.target, 
      errorElement, 
      'Campo obrigatório.'
    );
    return false;
  }
  else {
    removeInputError(event.target, errorElement);
    return true;
  }
}

const allRequiredFieldsFilled = (event, errorMessages) => {
  for (const input of event.target) {
    if (
      input.classList.contains('input') 
      && input.required && !input.value
    ) {
      inputValidation.addInputError(
        input, 
        input.parentElement.lastElementChild, 
        'Campo obrigatório.'
      );
    }
  }

  let hasError = false;

  for (const element of errorMessages) {
    if (element.textContent) {
      hasError = true;
      break;
    }
  }

  if (hasError) return false;
  else return true;
}

const name = (event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (event.target.value.trim().length < 3) {
    addInputError(
      event.target, 
      errorElement, 
      `Nome inválido. Informe pelo menos 3 caracteres.`
    );
    return;
  }

  removeInputError(event.target, errorElement);
}

const email = (event, errorElement) => { 
  const emailInput = event.target;

  if (!emailInput.value) {
    addInputError(
      emailInput, 
      errorElement, 
      'Campo obrigatório.'
    );
    return;
  }

  const emailAt = emailInput.value.split('@');

  if (emailAt.length !== 2) {
    addInputError(
      emailInput, 
      errorElement, 
      'E-mail deve conter um @'
    );
    return;
  }

  const emailValidation = {
    withoutDot: !emailInput.value.includes('.'),
    startsWithDot: emailInput.value.startsWith('.'),
    endsWithDot: emailInput.value.endsWith('.'),
    withDotsTogether: emailInput.value.split('.').includes(''),
    startsWithAt: !emailAt[0],
    endsWithAt: !emailAt[1],
    dotAtTogether: emailInput.value.includes('.@') || emailInput.value.includes('@.')
  }

  if (Object.values(emailValidation).includes(true)) {
    addInputError(
      emailInput, 
      errorElement, 
      'E-mail inválido. Tente o formato exemplo@email.com'
    );
    return;
  }

  removeInputError(emailInput, errorElement);
}

const phone = (event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) return;

  if (event.target.value.length !== 15) {
    addInputError(
      event.target, 
      errorElement, 
      'Número inválido. Tente o formato (00)90000-0000'
    );
    return;
  }

  removeInputError(event.target, errorElement);
}

const fullDate = (event, errorElement) => {
  const dateInput = event.target;

  if (!requiredFieldFilled(event, errorElement)) { 
    return;
  }

  if (dateInput.value.length !== 10) { 
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Tente o formato DD/MM/AAAA'
    );
    return;
  }

  const dateValues = dateInput.value.split('/');  
  const validDay = DateValidation.isValidDay(dateValues[0]);
  const validMonth = DateValidation.isValidMonth(dateValues[1]);
  const validYear = DateValidation.isValidFullYear(dateValues[2]);

  if (!validDay || !validMonth || !validYear) {
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Tente uma data existente.'
    );
    return;
  }

  if (
    validDay[0] >= '29' && validMonth[0] === '02' && 
    !DateValidation.isLeapYear(validYear[0])
  ) {
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Este dia não existe no ano informado.'
    );
    return;
  }
  
  removeInputError(dateInput, errorElement);
}

const monthYearDate = (event, errorElement) => {
  const dateInput = event.target;
  const currMonth = new Date().getMonth() + 1;
  const currYear = String(new Date().getFullYear()).slice(2);

  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (dateInput.value.length !== 5) { 
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Tente o formato MM/AA'
    );
    return;
  }

  const dateValues = dateInput.value.split('/');  
  const validMonth = DateValidation.isValidMonth(dateValues[0]);
  const validYear = DateValidation.isValidYear(dateValues[1]);

  if (!validMonth || !validYear) {
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Tente uma data existente.'
    );
    return;
  }

  if (
    Number(validYear[0]) < Number(currYear) || 
    Number(validYear[0]) === Number(currYear) &&
    Number(validMonth[0]) < currMonth
  ) {
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Tente novamente.'
    );
    return;
  }
  
  removeInputError(dateInput, errorElement);
}

const CPF = (event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (event.target.value.length !== 14) {
    addInputError(
      event.target, 
      errorElement, 
      'CPF inválido. Tente o formato 000.000.000-00'
    );
    return;
  }

  removeInputError(event.target, errorElement);
}

const zipCode = (event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (event.target.value.length !== 9) {
    addInputError(
      event.target, 
      errorElement, 
      'CEP inválido. Tente o formato 00000-000'
    );
    return;
  }

  removeInputError(event.target, errorElement);
}

const cardNumber = (cardType, event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (!cardType && event.target.value.length < 14) {
    addInputError(
      event.target, 
      errorElement, 
      `Número de cartão inválido. Informe no mínimo 14 dígitos.`
    );
    return;
  }

  if (
    cardType && cardType.minLengthWithSpaces && 
    event.target.value.length < cardType.minLengthWithSpaces
  ) {
    addInputError(
      event.target, 
      errorElement, 
      `Número de cartão inválido. 
      Informe no mínimo ${cardType.minLength} dígitos.`
    );
    return;
  }
  else if (
    cardType && !cardType.minLengthWithSpaces &&
    event.target.value.length < cardType.maxLengthWithSpaces
  ) {
    addInputError(
      event.target, 
      errorElement, 
      `Número de cartão inválido. 
      Informe no mínimo ${cardType.maxLength} dígitos.`
    );
    return;
  }

  removeInputError(event.target, errorElement);
}

const CVC = (event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (event.target.value.length < 3) {
    addInputError(
      event.target, 
      errorElement, 
      `CVC inválido. Informe no mínimo 3 dígitos.`
    );
    return;
  }

  removeInputError(event.target, errorElement);
}

const CPFOrCNPJ = (event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (
    event.target.value.length !== 14 &&
    event.target.value.length !== 18
  ) {
    addInputError(
      event.target, 
      errorElement, 
      `CPF/CNPJ inválido. Informe entre 11 a 14 dígitos.`
    );
    return;
  }

  removeInputError(event.target, errorElement);
}

export const inputValidation = {
  addInputError,
  removeInputError,
  requiredFieldFilled,
  allRequiredFieldsFilled,
  name,
  email,
  phone,
  fullDate,
  monthYearDate,
  CPF,
  zipCode,
  cardNumber,
  CVC,
  CPFOrCNPJ
}