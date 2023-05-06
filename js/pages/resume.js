import { getStoragedData, redirect } from '../components/form.js';
import { formatter } from '../utils/formatter.js';

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const CPF = document.getElementById('cpf');

const zipCode = document.getElementById('zip-code');
const streetAndNumber = document.getElementById('street-and-number');
const district = document.getElementById('district');
const cityUF = document.getElementById('city-uf');
const complement = document.getElementById('complement');
const referencePoint = document.getElementById('reference-point');

const cardFlag = document.getElementById('card-flag');
const cardNumber = document.getElementById('card-number');
const cardHolder = document.getElementById('card-holder');

const startBtn = document.querySelector('.resume__btn');

const personalData = getStoragedData('personalData');
const address = getStoragedData('address');
const paymentData = getStoragedData('paymentMethod');
const cardFlagName = getStoragedData('cardType');

name.textContent = personalData.name;
email.textContent = personalData.email;
phone.textContent = personalData.phone;
CPF.textContent = formatter.CPF(personalData.cpf);

zipCode.textContent = address.zipCode;
streetAndNumber.textContent = `${address.streetAddress}, ${address.houseNumber}`;
district.textContent = address.district;
cityUF.textContent = address.cityUF;
complement.textContent = address.complement;
referencePoint.textContent = address.referencePoint;

cardFlag.textContent = `${cardFlagName} • Crédito`;
cardNumber.textContent = formatter.cardNumber(paymentData.cardNumber);
cardHolder.textContent = paymentData.cardHolder.trim().toUpperCase();

startBtn.addEventListener('click', () => {
  localStorage.clear();
  redirect('../index.html');
});

// a resolver: 
// responsividade
// fechar calendario com clique fora em qualquer canto
// modal de aviso de perca de dados nos botoes de voltar
// melhorar layout do resume