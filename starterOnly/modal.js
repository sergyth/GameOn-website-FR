
// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const inputFirstName = document.getElementById('first');
const closeModalBtn =document.querySelector('.close');
const inputLastName = document.getElementById('last');
const email = document.getElementById('email');
const form = document.querySelector('form');
const submit = document.querySelector('.btn-submit');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const locations = document.querySelectorAll('[name="location"]');
locations.forEach(location =>location.addEventListener('click', isLocationValid)); 


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal 

closeModalBtn.addEventListener('click', closeModal);


//validate firstname

inputFirstName.addEventListener('input', validateFirstName);

//validate lastname

inputLastName.addEventListener('input', validateLastName);



//validate email

email.addEventListener('input', validateEmail);


//validate quantity

quantity.addEventListener('input', validateQuantity);


// validate birthdate

birthdate.addEventListener('input', validateBirthdate);

// validate tournament




//validate form

//form.addEventListener('onSubmit', validate)


function closeModal(){
  modalbg.style.display = "none";
}
function disableButton(){
  submit.setAttribute("disabled", ""); 
  submit.style.opacity = 0.3;
}
function editNav(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function enableButton(){
  submit.removeAttribute("disabled", "");
  submit.style.opacity = 1;
}

function hideError(element){
const parent = element.closest('.formData');
parent.setAttribute('data-error-visible', 'false');
}
function isBirthdateValid(){
  const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]|(?:Jan|Mar|May|Jul|Aug|Oct|Dec)))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2]|(?:Jan|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec))\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)(?:0?2|(?:Feb))\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9]|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep))|(?:1[0-2]|(?:Oct|Nov|Dec)))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  if(dateRegex.test(birthdate.value)){
   return true
  }else{
    return false
  }
}

function isElementValid (element) {
  if(element.length < 2){
 return false
  }else{
   return true
  }
 }
function isEmailValid(){
  let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if(pattern.test(email.value)){
    return true
  }
  return false
}
function isLocationValid(){
  return true
}
function isQuantityNumber(){
  if(isNaN(quantity.value)){
  return false
  }else{
    return true
  }
}
function launchModal(){
  modalbg.style.display = "block";
  disableButton();
}
function showError(element){
  const parent = element.closest('.formData');
  parent.setAttribute('data-error-visible', 'true');
}
function validateBirthdate(){
  if(isBirthdateValid()){
    hideError(birthdate);
  }else{
    showError(birthdate);
  }
  validateForm();
}

function validateEmail(){ 
  if(!isEmailValid()){
   showError(email);
  }else{
    hideError(email);
  }
  validateForm()
}

function validateFirstName(){
 if(!isElementValid(inputFirstName.value)){
  showError(inputFirstName);
 }else{
  hideError(inputFirstName);
 }
  validateForm();
}
function validateForm(){
  if(isElementValid(inputFirstName.value) && isElementValid(inputLastName.value) && isEmailValid() && isQuantityNumber() && isBirthdateValid() && isLocationValid()){
  enableButton();
  }else{
    disableButton()
  }
}
function validateLastName(){ 
  if(!isElementValid(inputLastName.value)){
    showError(inputLastName);
  }else{
    hideError(inputLastName);
  }
}
function validateLocation() {
  if(isLocationValid){
    validateForm()
  }
  }
function validateQuantity(){
  
  if(isQuantityNumber()){
    hideError(quantity);
  }else{
    showError(quantity);
  }
  validateForm();
}




