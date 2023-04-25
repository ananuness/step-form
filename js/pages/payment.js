import { getData, redirect } from '../form.js';
import { updateStep } from '../stepper.js';

const paymentForm = document.querySelector('.payment');
const cardNumberInput = document.getElementById('card-number');
const cardHolderInput = document.getElementById('card-holder');
const validityInput = document.getElementById('validity');
const CVCInput = document.getElementById('cvc');
const cardHolderCPFOrCNPJ = document.getElementById('card-holder-cpf-cnpj');
const previousBtn = document.getElementById('prev-btn');

updateStep(3);

// input validations here

paymentForm.addEventListener('submit', (event) => {
  // event.preventDefault();

  // chamar funcao que chama todas as validacoes

  getData(event, './resume.html') // storageData

  // redirect
});

previousBtn.addEventListener('click', (event) => {
  event.preventDefault();
  redirect('./address.html');
});