import { getData } from '../form.js';
import { updateStep } from '../stepper.js';

const personalDataForm = document.querySelector('.personal-data');

updateStep(1);

// input validations here

personalDataForm.addEventListener(
  'submit', (event) => getData(event, './pages/address.html')
);