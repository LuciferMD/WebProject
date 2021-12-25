const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const login = document.getElementById("login")


// Add success class to form-input and show success outline.
function showSuccess(input) {
  
  const formControl = input.parentElement;
  formControl.className = "form-input success";
}

// Add error class to form-input and show error message.
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-input error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Email validation
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, "Unreal Email");
    return false;
  }
}

// Get field name
function getFieldName(input) {
  return input.name;
}

// Check fields
function checkRequired(inputArr) { //space

  inputArr.forEach(function(input) {
    if (input.value.trim() ===""||input.value.includes(" ")) {
      
      showError(input, `The field is empty or contains spaces`);
      return false;
    }
      showSuccess(input);
      return true;
    
  });
  return true;
}

// Check length
function checkLength(input, min, max) {
  

  if (input.value.length < min) {
    showError(
      input,
      `Must consist of at least ${min} symbols`
    );
    return false; }
   
  else if (input.value.length > max) {
    showError(
      input,
      `Must consist of a maximum of ${max} symbols`
    );
    return false; }

    else if (input.value.trim() ===""||input.value.includes(" ")) {
      
      showError(input, `The field is empty or contains spaces`);
      return false;
    }
   else {
    showSuccess(input);
    return true;
  }
}

function checkSymbol(input){
  if(/[^a-zA-Z]/.test(input.value) && /[^а-яА-Я]/.test(input.value)){
    showError(
      input,
      `${getFieldName(input)} Only Russian or English letters`
      );
      return false;}
      else{
      
        return true;
      }
}


// Check password confirmation
function checkPasswords(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords don't match");
    return false;
  }
  return true;
}


// Event listeners
form.addEventListener("submit", function(e) {
  
  e.preventDefault();
  checkRequired([login, email, password, passwordConfirm]);
  checkPasswords(password, passwordConfirm);
  checkLength(password, 8, 20) ;
  checkLength(login, 1, 30);
 
 
  if(checkEmail(email) &&
  checkRequired([login, email, password, passwordConfirm])&&
   checkLength(password, 8, 20) &&
   checkLength(login, 1, 30)&&
   checkPasswords(password, passwordConfirm))
   
   {
  form.reset();
  document.location.href = "../pages/home.html";}
});
