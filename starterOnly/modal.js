//variables
let isFirstNameValid = '';

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


//validate form

form.addEventListener('submit', validate);





























function closeModal(){
  modalbg.style.display = "none";
}
function editNav(){
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function hideError(element){
const parent = element.closest('.formData');
parent.setAttribute('data-error-visible', 'false');
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
  let pattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  hideError(email);
  if(!pattern.test(email.value)){
   showError(email);
  }
}
// function isFirstNameValid(){
//   return true
// }
function validateFirstName(){

  if(inputFirstName.value.length < 2 ){
    showError(inputFirstName);
    isFirstNameValid = false;

  }else{
    hideError(inputFirstName);
   return true;
    
  }
 
}
function validateLastName(){
  
 if(inputLastName.value.length < 2 ){
   showError(inputLastName);
 }else{
  hideError(inputLastName);
 }
}
 function validate(){
if(validateFirstName){
  enableButton()
 }
 }
function disableButton(){
  submit.setAttribute('disabled', '');
  submit.style.cursor = 'not-allowed';
  submit.style.opacity = 0.3;
}
function enableButton(){
    submit.removeAttribute('disabled', '');
    submit.style.cursor = 'pointer';
    submit.style.opacity = 1;

}




