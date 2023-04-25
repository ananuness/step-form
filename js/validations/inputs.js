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
    addInputError(event.target, errorElement, 'Campo obrigatório');
    return false;
  }
  else {
    removeInputError(event.target, errorElement);
    return true;
  }
}

const allRequiredFieldsFilled = (event, errorMessages) => {
  for (const input of event.target) {
    if (!input.classList.contains('form__btn') && !input.value) {
      inputValidation.addInputError(
        input, 
        input.parentElement.lastElementChild, 
        'Campo obrigatório'
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

  if (hasError) {
    return false;
  }
  else {
    return true;
  }
}

const email = (event, errorElement) => {
  const email = event.target;

  if (!email.value) {
    addInputError(email, errorElement, 'Campo obrigatório');
    return;
  }

  const emailAt = email.value.split('@');

  if (emailAt.length !== 2) {
    addInputError(email, errorElement, 'E-mail deve conter um @');
    return;
  }

  const emailValidation = {
    withoutDot: !email.value.includes('.'),
    startsWithDot: email.value.startsWith('.'),
    endsWithDot: email.value.endsWith('.'),
    startsWithAt: !emailAt[0],
    endsWithAt: !emailAt[1],
    dotAtTogether: email.value.includes('.@') || email.value.includes('@.')
  }

  if (Object.values(emailValidation).includes(true)) {
    addInputError(email, errorElement, 'Formato inválido. Tente algo como exemplo@email.com')
    return;
  }

  removeInputError(email, errorElement);
}

const phone = (event, errorElement) => {
  if (!requiredFieldFilled(event, errorElement)) {
    return;
  }

  if (event.target.value.length !== 14) {
    addInputError(
      event.target, 
      errorElement, 
      'Formato de celular inválido'
    );
    return;
  }
}

export const inputValidation = {
  addInputError,
  removeInputError,
  requiredFieldFilled,
  allRequiredFieldsFilled,
  email,
  phone
}