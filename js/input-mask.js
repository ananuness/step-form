const onlyLetters = value => {
  return value.replace(/[0-9\\><!|@#¨}{$%^&*)(+=,._-]+/g, "");
}

const onlyNumbers = value => {
  return value.replace(/\D/g, "")
}

// (00) 00000-0000
const phone = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/-(\d{4})(\d)/, "$1")
}

// 00/00/0000
const date = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1")
}

// 000.000.000-00
const CPF = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1")
}

// 00.000.000/0000-00
const CNPJ = value => {
  return value
  .replace(/\D/g, "")
  .replace(/(\d{2})(\d)/, "$1.$2")
  .replace(/(\d{3})(\d)/, "$1.$2")
  .replace(/(\d{3})(\d)/, "$1/$2")
  .replace(/(\d{4})(\d{1,2})/, "$1-$2")
  .replace(/(-\d{2})\d+?$/, "$1")
  // .replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1 $2 $3/$4-$5")
}

// 00000-000
const zipCode = value => {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2")
}

export const inputMask = {
  onlyNumbers,
  onlyLetters,
  phone,
  date,
  CPF,
  CNPJ,
  zipCode
}