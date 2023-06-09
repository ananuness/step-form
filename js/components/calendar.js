import { createElementFromString } from '../utils/create-element.js';
import { inputValidation } from '../validations/inputs.js';

const birthDateInput = document.getElementById('birth-date');
const birthDateError = document.getElementById('birth-error');
const calendarBtn = document.querySelector('.calendar-icon');
const calendarWrapper = document.querySelector('.calendar__wrapper');
const currentDate = document.querySelector('.current-date');
const prevNextIcon = document.querySelectorAll('.arrow-icon');
const daysTag = document.querySelector('.days');
let isToday = '';

// getting new date, current year and month
let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
  'Janeiro', 
  'Fevereiro', 
  'Março',
  'Abril', 
  'Maio', 
  'Junho', 
  'Julho',
  'Agosto', 
  'Setembro', 
  'Outubro', 
  'Novembro', 
  'Dezembro'
];

const hideCalendar = () => calendarWrapper.classList.add('inactive');

const selectedDate = (event, liArray) => {
	const currLiActive = liArray.filter(li => li.classList.contains('active'));
	if (currLiActive.length) {
		if (currLiActive[0].classList.contains('default')) {
			currLiActive[0].classList.remove('active');
		}
		else if (currLiActive[0].classList.contains('inactive')) {
			currLiActive[0].classList.remove('active');
		}
		else {
			currLiActive[0].setAttribute('class', 'default');
		}
	}

	event.target.classList.toggle('active');
	hideCalendar();
	birthDateInput.value = event.target.getAttribute('data-date');
	birthDateInput.focus();

	if (birthDateError.textContent) {
		inputValidation.removeInputError(birthDateInput, birthDateError);
	}
}

const renderCalendar = () => {
  let firstWeekDayofMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastWeekDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay();
  let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
	let liTags = [];

	//clearing saved li's for the prev and next month appear correctly
	daysTag.innerHTML = '';

	// creating li of previous month last days
  for (let i = firstWeekDayofMonth; i > 0; i--) {
		liTags.push(createElementFromString(
			'li', 
			{ 
				class: 'inactive', 
				'data-date': `${String(lastDateofLastMonth - i + 1).padStart(2, '0')}/${String(currMonth).padStart(2, '0')}/${currYear}`
			}, 
			`${lastDateofLastMonth - i + 1}`
		));
  }

	// creating li of all days of current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    isToday = (
      i === date.getDate() 
			&& currMonth === new Date().getMonth() 
			&& currYear === new Date().getFullYear() 
			? 'active' : 'default'
		);

		liTags.push(createElementFromString(
			'li', 
			{ 
				class: `${isToday}`,
				'data-date': `${String(i).padStart(2, '0')}/${String(currMonth + 1).padStart(2, '0')}/${currYear}`
			}, 
			`${i}`
		));
  }

	// creating li of next month first days
  for (let i = lastWeekDayofMonth; i < 6; i++) {
		liTags.push(createElementFromString(
			'li', 
			{ 
				class: 'inactive',
				'data-date': `${String(i - lastWeekDayofMonth + 1).padStart(2, '0')}/${String(currMonth + 2).padStart(2, '0')}/${currYear}`
			}, 
			`${i - lastWeekDayofMonth + 1}`
		));
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;

	liTags.forEach(li =>
		li.addEventListener('click', (event) => selectedDate(event, liTags))
	);

  daysTag.append(...liTags);
}

const changeMonth = (icon) => {
	currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

	if(currMonth < 0 || currMonth > 11) {
		// creating a new date of current year & month and pass it as date value
		date = new Date(currYear, currMonth, new Date().getDate());
		currYear = date.getFullYear();
		currMonth = date.getMonth(); 
	} 
	else {
		date = new Date();
	}

	renderCalendar();
}

renderCalendar();

prevNextIcon.forEach(icon =>
  icon.addEventListener('click', () => changeMonth(icon))
);

calendarBtn.addEventListener('click', () => {
	calendarWrapper.classList.toggle('inactive');
});

calendarWrapper.addEventListener('mouseleave', hideCalendar)