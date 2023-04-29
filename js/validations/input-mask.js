const addMask = (targetInput, mask) => {
  targetInput.addEventListener('input', event => {
    event.target.value = mask(event.target.value);
  })
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
  .replace(/[\\><!|#¨}'{"/?$%^&*)(+=,;:]+/g, "");
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
const date = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
}

// 000.000.000-00
const CPF = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
}

// 00.000.000/0000-00
const CNPJ = value => {
  return value
  .replace(/\D/g, "")
  .replace(/(\d{2})(\d)/, "$1.$2")
  .replace(/(\d{3})(\d)/, "$1.$2")
  .replace(/(\d{3})(\d)/, "$1/$2")
  .replace(/(\d{4})(\d{1,2})/, "$1-$2")
  .replace(/-(\d{2})\d+?$/, "$1");
}

// 00000-000
const zipCode = value => {
  return value
  .replace(/\D/g, "")
  .replace(/(\d{5})(\d)/, "$1-$2")
  .replace(/-(\d{3})\d+?$/, '$1');
}

// 0000 000000 0000
const card14Digit = value => {
  return value
  .replace(/\D/g, "")
  .replace(/^(\d{4})/, "$1 ")
  .replace(/(\d{6})/, "$1 ")
  .replace(/(\d{4})\d+?$/, "$1");
}

// 0000 000000 00000
const card15Digit = value => {
  return value
  .replace(/\D/g, "")
  .replace(/(\d{4})/, "$1 ")
  .replace(/(\d{6})/, "$1 ")
  .replace(/(\d{5})\d+?$/, "$1");
}

// 0000 0000 0000 0000
const card16Digit = value => {
  return value
  .replace(/\D/g, "")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})\d+?$/, "$1");
}

// 0000 0000 0000 0000 000
const card19Digit = value => {
  return value
  .replace(/\D/g, "")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})(\d)/, "$1 $2")
  .replace(/(\d{4})(\d)/, "$1 $2");
}

export const inputMask = {
  addMask,
  onlyNumbers,
  onlyLetters,
  email,
  phone,
  date,
  CPF,
  CNPJ,
  zipCode,
  card14Digit,
  card15Digit,
  card16Digit,
  card19Digit
}