import { getData, redirect } from '../form.js';
import { updateStep } from '../stepper.js';

const paymentForm = document.querySelector('.payment');
const previousBtn = document.querySelector('#prev-btn');

updateStep(3);

// input validations here

paymentForm.addEventListener(
  'submit', (event) => getData(event, './resume.html')
);

previousBtn.addEventListener(
  'click', () => redirect('./address.html')
);