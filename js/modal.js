// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstname = document.getElementById("first");
const closeModalBtn = document.querySelector(".close");
const lastname = document.getElementById("last");
const email = document.getElementById("email");
const form = document.querySelector("form");
const submit = document.querySelector(".btn-submit");
const quantity = document.getElementById("quantity");
const birthdate = document.getElementById("birthdate");
const locations = document.querySelectorAll('.checkbox-input[name="location"]');
const agreementBox = document.querySelector("#checkbox1");

//listeners
agreementBox.addEventListener("click", validateAgreement);

locations.forEach((location) =>
  location.addEventListener("click", validateLocation),
);

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeModalBtn.addEventListener("click", closeModal);

firstname.addEventListener("input", validateFirstname);

lastname.addEventListener("input", validateLastname);

email.addEventListener("input", validateEmail);

quantity.addEventListener("input", validateQuantity);

birthdate.addEventListener("keydown", validateBirthdate);

form.addEventListener("submit", validate);

// funtions

function closeModal() {
  modalbg.style.display = "none";
}

function disableButton() {
  submit.setAttribute("disabled", "");
  submit.style.opacity = 0.3;
}

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function enableButton() {
  submit.removeAttribute("disabled", "");
  submit.style.opacity = 1;
}

function hideError(element) {
  const parent = element.closest(".formData");
  parent.setAttribute("data-error-visible", "false");
}

function isAgreementBoxChecked() {
  if (agreementBox.checked) {
    return true;
  } else {
    return false;
  }
}

function isBirthdateValid() {
  if (birthdate.value.length === 10) {
    return true;
  } 
    return false;
  
}

function isFirstnameValid() {
  if (firstname.value.length < 2) {
    return false;
  }
  return true;
}
function isLastnameValid() {
  if (lastname.value.length < 2) {
    return false;
  }
  return true;
}

/**use a regex that verifie if the email format enter by the user is correct */

function isEmailValid() {
  let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if (pattern.test(email.value)) {
    return true;
  }
    return false;
}


// verify if a location is selected

function isLocationValid() {
  let isValid = false;
  locations.forEach((location) => {
    if (location.checked) {
      isValid = true;
    }
  });
  return isValid;
}

function isQuantityValid() {

  let qty = quantity.value;
  if (qty.length > 0 && 0 <= qty && qty <= 99) {
    return true;
  } else {
    return false;
  }
}

/**open the modal and disable the submit button, also shows checkboxes errors */

function launchModal() {
  modalbg.style.display = "block";
  showError(locations[0]);
  showError(agreementBox);
  disableButton();
}

function showError(element) {
  const parent = element.closest(".formData");
  parent.setAttribute("data-error-visible", "true");
}

function validate(event) {
  event.preventDefault();
  form.innerHTML = "Merci ! Votre réservation a été reçue.";
}

// hide error when checkbox agreement is selected

function validateAgreement() {
  if (isAgreementBoxChecked) {
    hideError(agreementBox);
    validateForm();
  }
}

function validateBirthdate() {
  if (isBirthdateValid()) {
    hideError(birthdate);
  } else {
    showError(birthdate);
  }
  validateForm();
}

function validateEmail() {
  if (!isEmailValid()) {
    showError(email);
  } else {
    hideError(email);
  }
  validateForm();
}

function validateFirstname() {
  if (!isFirstnameValid()) {
    showError(firstname);
  } else {
    hideError(firstname);
  }
  validateForm();
}

function validateForm() {
  if (
    isFirstnameValid() &&
    isLastnameValid() &&
    isEmailValid() &&
    isQuantityValid() &&
    isBirthdateValid() &&
    isLocationValid() &&
    isAgreementBoxChecked()
  ) {
    enableButton();
  } else {
    disableButton();
  }
}

function validateLastname() {
  if (!isLastnameValid()) {
    showError(lastname);
  } else {
    hideError(lastname);
  }
}

function validateLocation() {
  if (isLocationValid()) {
    hideError(locations[0]);
    validateForm();
  }
}

function validateQuantity() {
  if (isQuantityValid()) {
    hideError(quantity);
  } else {
    showError(quantity);
  }
  validateForm();
}
