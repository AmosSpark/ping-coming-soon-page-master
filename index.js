// Select variables

const valForm = document.querySelector(".header__form"),
  valInput = document.querySelector(".header__form-input"),
  valBtn = document.querySelector(".btn");

// Add Event Listerners

const loadEvents = () => {
  valForm.addEventListener("submit", formVal);
  valInput.addEventListener("keyup", inputVal);
  //   valBtn.addEventListener("click", btnVal);
};

// Event Listeners

// Validate form on submition form

const formVal = e => {
  inputVal();
  e.preventDefault();
};

const inputVal = () => {
  // Create Element
  const d = document.createElement("div"); // create div element
  d.className = "validation";

  // regex pattern
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (valInput.value === "") {
    valForm.insertBefore(d, valBtn);
    val = document.querySelector(".validation");
    val.classList.add("error");
    val.textContent = "Email cannot be empty";
  } else if (!re.test(valInput.value)) {
    valForm.insertBefore(d, valBtn);
    val = document.querySelector(".validation");
    val.classList.add("error");
    val.textContent = "Please provide a valid email addres";
  } else {
    val.classList.remove("error");
    val.style.display = "none";
  }
};

// btn form
// const btnVal = e => {
//   if (valInput.value === "") {
//     console.log("error");
//     valForm.insertBefore(d, valBtn);
//     d.innerText = "Please provide a valid email address";
//   } else {
//     valForm.insertBefore(d, valBtn);
//   }
//   e.preventDefault();
// };

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
