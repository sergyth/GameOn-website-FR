
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
function validateEmail(){ 
  if(!isEmailValid()){
   showError(email);
  }else{
    hideError(email);
  }
  validateForm()
}
// function isFirstNameValid(){
//   return true
// }
function validateFirstName(){
 if(!isElementValid(inputFirstName.value)){
  showError(inputFirstName);
 }else{
  hideError(inputFirstName);
 }
  validateForm();
}
function validateForm(){
  disableButton()
  if(isElementValid(inputFirstName.value) && isElementValid(inputLastName.value) && isEmailValid() && isQuantityNumber()){
  enableButton();
  }
}
function validateLastName(){ 
  if(!isElementValid(inputLastName.value)){
    showError(inputLastName);
  }else{
    hideError(inputLastName);
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




