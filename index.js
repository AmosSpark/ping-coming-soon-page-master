// Select variables

const valForm = document.querySelector(".header__form"),
  valInput = document.querySelector(".header__form-input"),
  val = document.querySelector(".validate"),
  valBtn = document.querySelector(".btn");

// Add Event Listerners

const loadEvents = () => {
  valForm.addEventListener("submit", formVal);
  valInput.addEventListener("keyup", inputVal);
};

// Event Listeners

// Validate form on submition form

const formVal = e => {
  inputVal();
  e.preventDefault();
};

const inputVal = () => {
  // regex pattern
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (valInput.value === "") {
    val.classList.add("error");
    val.textContent = "Email cannot be empty";
    valInput.style.border = "0.1rem solid #ff7a88";
  } else if (!re.test(valInput.value)) {
    val.classList.add("error");
    val.textContent = "Please provide a valid email address";
    valInput.style.border = "0.1rem solid #ff7a88";
  } else {
    val.classList.remove("error");
    valInput.style.border = "0.1rem solid #bdbdbd";
  }
};

// Invole loadEvents

loadEvents();
