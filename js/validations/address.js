import { getData, redirect } from '../form.js';
import { updateStep } from '../stepper.js';

const addressForm = document.querySelector('.address');
const previousBtn = document.querySelector('#prev-btn');

updateStep(2);

// input validations here

addressForm.addEventListener(
  'submit', (event) => getData(event, './payment.html')
);

previousBtn.addEventListener(
  'click', () => redirect('../index.html')
);