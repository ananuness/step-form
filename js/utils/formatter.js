const CPF = value => {
  const cpfArr = value.split('.');

  return cpfArr.map((item, index) =>
    index !== cpfArr.length - 1 
      ? item.replace(/\d/g, '*') 
      : item
  ).join('.');
}

const cardNumber = value => {
  const numberArr = value.split(' ');

  return numberArr.map((item, index) =>
    index !== numberArr.length - 1 
      ? item.replace(/\d/g, '*') 
      : item
  ).join(' ');
}

export const formatter = {
  CPF,
  cardNumber
}