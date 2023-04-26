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
    addInputError(event.target, errorElement, 'Campo obrigatório.');
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

const email = (event, errorElement) => { 
  const emailInput = event.target;

  if (!emailInput.value) {
    addInputError(emailInput, errorElement, 'Campo obrigatório.');
    return;
  }

  const emailAt = emailInput.value.split('@');

  if (emailAt.length !== 2) {
    addInputError(emailInput, errorElement, 'E-mail deve conter um @');
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

const date = (event, errorElement) => {
  const dateInput = event.target;

  if (!requiredFieldFilled(event, errorElement)) { 
    return;
  }

  if (dateInput.value.length !== 10) { 
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Tente o formato dd/mm/aaaa'
    );
    return;
  }

  const dateValues = dateInput.value.split('/');  
  const validDay = dateValues[0].match(/0[1-9]|[12][0-9]|3[01]/);
  const validMonth = dateValues[1].match(/0[1-9]|1[012]/);
  const validYear = dateValues[2].match(/19\d\d|20\d\d/);

  if (!validDay || !validMonth || !validYear) {
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Tente uma data existente.'
    );
    return;
  }

  const isLeapYear = (
    validYear[0] % 100 !== 0 
    && validYear[0] % 4 === 0 
    || validYear[0] % 400 === 0
  );

  if (validDay[0] >= '29' && validMonth[0] === '02' && !isLeapYear) {
    addInputError(
      dateInput, 
      errorElement, 
      'Data inválida. Este dia não existe no ano informado.'
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

export const inputValidation = {
  addInputError,
  removeInputError,
  requiredFieldFilled,
  allRequiredFieldsFilled,
  email,
  phone,
  date,
  CPF,
  zipCode
}