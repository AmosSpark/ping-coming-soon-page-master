// Select variables

const valForm = document.querySelector(".header__form"),
  valInput = document.querySelector(".header__form-input"),
  valBtn = document.querySelector(".btn");

// Add Event Listerners

const loadEvents = () => {
  valForm.addEventListener("submit", formVal);
  valInput.addEventListener("keyup", inputVal);
  valBtn.addEventListener("click", btnVal);
};

// Event Listeners

// form
const formVal = e => {
  inputVal();
  e.preventDefault();
};

// input form
const inputVal = () => {};

// btn form
const btnVal = e => {
  e.preventDefault();
};

// Invole loadEvents

loadEvents();

// Algo
//  validate
/*
1 - check if input form is either empty or not
2 - if empty throw err on btn press
3 - if not;
// get input val
// validate
/*
1 - use regex to validate
 */
