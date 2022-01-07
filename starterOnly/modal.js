function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//modal closure

const closeModalBtn = document.querySelector(".close");
closeModalBtn.addEventListener("click", closeModal);
function closeModal() {
  modalbg.style.display = "none";
}

//validation of firstname
let inputFirstName = document.getElementById("first");
inputFirstName.addEventListener("input", isFirstNameValid);

function isFirstNameValid() {
  const parent = inputFirstName.closest(".formData");
  if (inputFirstName.value.length < 2) {
    parent.setAttribute("data-error-visible", "true");
  } else {
    parent.setAttribute("data-error-visible", "false");
  }
}

//validation of lastname
let inputLastName = document.getElementById("last");
inputLastName.addEventListener("input", isLastNameValid);

function isLastNameValid() {
  const parent = inputLastName.closest(".formData");
  if (inputLastName.value.length < 2) {
    parent.setAttribute("data-error-visible", "true");
  } else {
    parent.setAttribute("data-error-visible", "false");
  }
}

// validation email

let email = document.getElementById("email");

email.addEventListener("input", emailIsValid);

function emailIsValid() {
  const parent = email.closest(".formData");
  if (email.validity.typeMismatch) {
    parent.setAttribute("data-error-visible", "true");
  } else {
    parent.setAttribute("data-error-visible", "false");
  }
}



//validation of number of tournament

let numberOfTournament = document.getElementById("quantity");
numberOfTournament.addEventListener('input', isANumber);

function isANumber (){
  const parent = numberOfTournament.closest('.formData');
  Number(numberOfTournament.value);
  if(isNaN(numberOfTournament.value)){
    parent.setAttribute("data-error-visible", "true");
  }else{
    parent.setAttribute("data-error-visible", "false");
  }
}


//validation of town

let locationInput = document.reserve.location;
console.log(locationInput);
for(let i = 0; i < locationInput.length; i++){
  if(locationInput[i].checked){
    console.log('checked');
    break
  }else{
  console.log('unchecked')
  }
  
}


