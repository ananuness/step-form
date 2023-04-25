import { getData, redirect } from '../form.js';
import { updateStep } from '../stepper.js';

const addressForm = document.querySelector('.address');
const zipCodeInput = document.getElementById('zip-code');
const cityUFInput = document.getElementById('city-uf');
const streetAddressInput = document.getElementById('street-address');
const houseNumberInput = document.getElementById('house-number');
const noHouseNumberCheckbox = document.getElementById('no-house-number');
const districtInput = document.getElementById('district');
const complementInput = document.getElementById('complement');
const referencePointInput = document.getElementById('reference-point');
const previousBtn = document.getElementById('prev-btn');

updateStep(2);

// input validations here

// para enderecos sem numero recomenda-se a sigla S/N

addressForm.addEventListener('submit', (event) => {
  // event.preventDefault();

  // chamar funcao que chama todas as validacoes

  getData(event, './payment.html'); // storageData
  
  // redirect
});

previousBtn.addEventListener('click', (event) => {
  event.preventDefault();
  redirect('../index.html');
});