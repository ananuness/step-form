import { getData, redirect } from '../components/form.js';
import { updateStep } from '../components/stepper.js';

const paymentForm = document.querySelector('.payment');
const previousBtn = document.getElementById('prev-btn');

const cardNumberInput = document.getElementById('card-number');
const cardHolderInput = document.getElementById('card-holder');
const validityInput = document.getElementById('validity');
const CVCInput = document.getElementById('cvc');
const cardHolderCPFOrCNPJ = document.getElementById('card-holder-cpf-cnpj');

updateStep(3);


paymentForm.addEventListener('submit', event => {
  event.preventDefault();

  getData(event, './resume.html') // storageData

  // redirect
});

previousBtn.addEventListener('click', event => {
  event.preventDefault();
  redirect('./address.html');
});