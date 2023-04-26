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

export const inputMask = {
  addMask,
  onlyNumbers,
  onlyLetters,
  email,
  phone,
  date,
  CPF,
  CNPJ,
  zipCode
}