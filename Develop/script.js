// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Hey! you clicked the button")

   // Prompt the user for the password criteria
   var passwordSizeLenght = window.prompt ("Enter size of password")
   console.log(passwordSizeLenght)

   var IsLowerCase = window.confirm ("Does this password includes lower case?")
   console.log(IsLowerCase)

    
 var isUpperCase = window.confirm ("Does this password include upper case?")
 console.log(isUpperCase)

  
 var specialCharacters = window.confirm ("Does this password includes special characters?")
 console.log(specialCharacters)

 //password characters
 
   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIHJKLMNOPQRSTUVWXYZ";
    passwordSizeLenght = 12;
   var password = "";
    for (var i = 0; i <= passwordSizeLenght; ++i) {
     var randomNumber = Math.floor(Math.random() * chars.length);
     password += chars.substring(randomNumber, randomNumber+1);
      
   }
 
 return password

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
