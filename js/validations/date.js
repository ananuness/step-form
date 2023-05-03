const isValidDay = day => day.match(/0[1-9]|[12][0-9]|3[01]/);

const isValidMonth = month => month.match(/0[1-9]|1[012]/);

const isValidFullYear = year => year.match(/19\d\d|20\d\d/);

const isValidYear = year => year.match(/[0-9][0-9]/);
  
const isLeapYear = year => (
  year % 100 !== 0 && year % 4 === 0 || year % 400 === 0
);

const formatToDateSQL = date => date.split('/').reverse().join('-');

export const DateValidation = {
  isValidDay,
  isValidMonth,
  isValidFullYear,
  isValidYear,
  isLeapYear,
  formatToDateSQL
}