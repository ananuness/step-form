import { getData, redirect, storageData } from '../components/form.js';
import { updateStep } from '../components/stepper.js';
import { inputMask } from '../validations/input-mask.js';
import { inputValidation } from '../validations/inputs.js';

const addressForm = document.querySelector('.address');
const previousBtn = document.getElementById('prev-btn');

const zipCodeInput = document.getElementById('zip-code');
const cityUFInput = document.getElementById('city-uf');
const districtInput = document.getElementById('district');
const streetAddressInput = document.getElementById('street-address');
const houseNumberInput = document.getElementById('house-number');
const noHouseNumberCheckbox = document.getElementById('no-house-number');

const errorMessages = document.querySelectorAll('.input__error-message');
const zipCodeError = document.getElementById('zip-code-error');
const cityUFError = document.getElementById('city-uf-error');
const districtError = document.getElementById('district-error');
const streetAddressError = document.getElementById('street-address-error');
const houseNumberError = document.getElementById('house-number-error');

updateStep(2);

inputMask.addMask(zipCodeInput, inputMask.zipCode);

const findZipCode = async (event) => {
  inputValidation.removeInputError(zipCodeInput, zipCodeError);

  if (event.target.value.length != 9) return;

  const zipcodeValue = event.target.value.replace('-', '');

  const request = await fetch(`http://viacep.com.br/ws/${zipcodeValue}/json`);

  const response = await request.json();

  if (response.erro) {
    inputValidation.addInputError(
      zipCodeInput, 
      zipCodeError, 
      'Este CEP não existe. Tente novamente.'
    );
    return;
  }

  cityUFInput.value = `${response.localidade}/${response.uf}`;
  districtInput.value = response.bairro;
  streetAddressInput.value = response.logradouro;

  if (
    cityUFError.textContent 
    && districtError.textContent 
    && streetAddressError.textContent
  ) {
    inputValidation.removeInputError(cityUFInput, cityUFError);
    inputValidation.removeInputError(districtInput, districtError );
    inputValidation.removeInputError(
      streetAddressInput, streetAddressError
    );
  }
}

const toggleReadOnly = () => {
  if (!noHouseNumberCheckbox.checked) {
    houseNumberInput.value = 'S/N';
    houseNumberInput.ariaReadOnly = 'true';
    houseNumberInput.setAttribute('readonly', true);
    inputValidation.removeInputError(houseNumberInput, houseNumberError);
  }
  else {
    houseNumberInput.value = '';
    houseNumberInput.ariaReadOnly = 'false';
    houseNumberInput.removeAttribute('readonly');
  }
}

zipCodeInput.addEventListener('input', event => findZipCode(event));

zipCodeInput.addEventListener('change', event => 
  inputValidation.zipCode(event, zipCodeError)
);

cityUFInput.addEventListener('input', event => 
  inputValidation.requiredFieldFilled(event, cityUFError)
);

districtInput.addEventListener('input', event => 
  inputValidation.requiredFieldFilled(event, districtError)
);

streetAddressInput.addEventListener('input', event => 
  inputValidation.requiredFieldFilled(event, streetAddressError)
);

houseNumberInput.addEventListener('change', event => 
  inputValidation.requiredFieldFilled(event, houseNumberError)
);

noHouseNumberCheckbox.addEventListener('focus', toggleReadOnly);

previousBtn.addEventListener('click', event => {
  event.preventDefault();

  alert('Os dados serão perdidos, tem certeza que quer voltar?');

  redirect('../index.html');
});

addressForm.addEventListener('submit', event => {
  event.preventDefault();

  if (!inputValidation.allRequiredFieldsFilled(event, errorMessages)) {
    return;
  }

  storageData('address', getData(event));
  redirect('./payment.html');
});