const form = document.getElementById("form");
const password = document.getElementById("password");
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




// Event listeners
form.addEventListener("submit", function(e) {
  
  e.preventDefault();
  checkRequired([login, password]);
  checkLength(password, 8, 20) ;
  checkLength(login, 1, 30);
 
 
  if(
  checkRequired([login, password])&&
  checkLength(password, 8, 20) &&
  checkLength(login, 1, 30))
   
   {
  form.reset();
  document.location.href = "../pages/home.html";}
});
