var password = document.getElementById("password")
  , confirmPassword = document.getElementById("confirm-password");

function validatePassword(){
  if(password.value != confirmPassword.value) {
    document.getElementById('error-msg').style.display = 'block';
    document.getElementById('saveButton').disabled = true;
  } else {
    document.getElementById('error-msg').style.display = 'none';
    document.getElementById('saveButton').disabled = false;
  }
}

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;
