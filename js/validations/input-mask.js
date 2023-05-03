const addMask = (targetInput, mask) => {
  targetInput.addEventListener('input', event => 
    event.target.value = mask(event.target.value)
  );
}

const onlyLetters = value => {
  return value
    .replace(/[0-9\\><!|@#¨}'{"/?$%^&*)(+=,:;._-]+/g, "");
}

const onlyNumbers = value => {
  return value.replace(/\D/g, "");
}

const email = value => {
  return value
    .replace(/[\s\\><!|#¨}'{"/?$%^&*)(+=,;:]+/g, "");
}

// (00) 00000-0000
const phone = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/-(\d{4})(\d)/, "$1");
}

// 00/00/0000
const fullDate = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
}

// 00/00
const monthYearDate = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1");
}

// 000.000.000-00
const CPF = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1-$2")
    .replace(/(-\d{2})(\d)/, "$1");
}

// 00.000.000/0000-00
const CNPJ = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d{1,2})/, "$1-$2")
    .replace(/-(\d{2})(\d)/, "$1");
}

// 00000-000
const zipCode = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/-(\d{3})\d+?$/, '$1');
}

const cardNumber = (value, lengthWithSpaces) => {
  if (lengthWithSpaces === 16) { // 0000 000000 0000
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{6})(\d{4})$/, "$1 $2");
  }
  else if (lengthWithSpaces === 17) { // 0000 000000 00000
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{6})(\d{5})$/, "$1 $2");
  }
  else if (lengthWithSpaces === 19) { // 0000 0000 0000 0000
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})\d+?$/, "$1");
  }
  else { // 0000 0000 0000 0000 000
    return value
      .replace(/\D/g, "")
      .replace(/^(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2")
      .replace(/(\d{4})(\d)/, "$1 $2");
  }
}

const CPFOrCNPJ = (value, length) => {
  if (length > 14) {
    return CNPJ(value);
  }
  else {
    return CPF(value);
  }
}

export const inputMask = {
  addMask,
  onlyNumbers,
  onlyLetters,
  email,
  phone,
  fullDate,
  monthYearDate,
  CPF,
  CNPJ,
  zipCode,
  cardNumber,
  CPFOrCNPJ
}