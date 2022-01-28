
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
const locations = document.querySelectorAll('.checkbox-input[name="location"]');
const agreementBox = document.querySelector('#checkbox1');
const agreementLabel = document.querySelector('#checkbox-agree');
console.log(agreementBox)
 

//listeners
agreementBox.addEventListener('click', validateAgreement)

locations.forEach((location) =>location.addEventListener('click', validateLocation)); 

modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

closeModalBtn.addEventListener('click', closeModal);

inputFirstName.addEventListener('input', validateFirstName);

inputLastName.addEventListener('input', validateLastName);

email.addEventListener('input', validateEmail);

quantity.addEventListener('input', validateQuantity);

birthdate.addEventListener('keydown', validateBirthdate);

form.addEventListener('submit', validate)



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

function isAgreementBoxChecked(){
  if(agreementBox.checked){
    return true; 
  }
  return false;
}

function isBirthdateValid(){
  if(birthdate.value.length === 10){
    return true
  }
  return false
}

function isElementValid (element) {
  if(element.length < 2){
    return false
  }
    return true
  
 }

function isEmailValid(){
  let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  if(pattern.test(email.value)){
    return true
  }
    return false
}

function isLocationValid(){
  let isValid = false;
  locations.forEach(location => {
    if(location.checked){
      isValid = true;
    }
  })
    return isValid;
}

function isQuantityValid(){
  let quantityV = quantity.value;
  if(quantityV.length > 0 && quantityV >= 0 && quantityV < 99){
    return true
  }
    return false  
}

function launchModal(){
  modalbg.style.display = "block";
  disableButton();
}

/**Permet de montrer l'erreur au cas ou la donnee saisie n'est pas correcte */

function showError(element){
  const parent = element.closest('.formData');
  parent.setAttribute('data-error-visible', 'true');
}

function validate (event){
event.preventDefault();
form.innerHTML = "Merci ! Votre réservation a été reçue."
}

function validateAgreement (){
  
  if(isAgreementBoxChecked){
    hideError(agreementLabel);
    validateForm();
  }else{
    showError(agreementLabel);
  }
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
  if(isElementValid(inputFirstName.value)
   && isElementValid(inputLastName.value)
   && isEmailValid() 
   && isQuantityValid() 
   && isBirthdateValid() 
   && isLocationValid()
   && isAgreementBoxChecked()){
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
  if(isLocationValid()){
    validateForm()
  }
  }

function validateQuantity(){
  
  if(isQuantityValid()){
    hideError(quantity);
  }else{
    showError(quantity);
  }
  validateForm();
}




