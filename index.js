// Select variables

const valForm = document.querySelector(".header__form"),
  valInput = document.querySelector(".header__form-input"),
  valBtn = document.querySelector(".btn");

// Create Element

const d = document.createElement("div"); // create div element
d.className = "validation";

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
  btnVal();
  e.preventDefault();
};

const inputVal = () => {
  const re = /^ab$/;
  if (!re.test) {
    d.innerText = "Please provide a valid email address";
  }
};

// btn form
const btnVal = e => {
  if (valInput.value === "") {
    console.log("error");
    valForm.insertBefore(d, valBtn);
    d.innerText = "Please provide a valid email address";
  } else {
    valForm.insertBefore(d, valBtn);
  }
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
