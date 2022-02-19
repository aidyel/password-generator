// Assignment code here
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "?", "@", "^", "~"];
var passwordArray = [];
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  console.log("Hey! you clicked the button")

   // Prompt the user for the password criteria
   var passwordSizeLenght = window.prompt ("Enter size of password (size should be between 8 and 128 characters)")
   if (passwordSizeLenght < 8 || passwordSizeLenght > 128){
     window.alert("password size should be between 8 and 128 characters");
     generatePassword();
   }

   var isLowerCase = window.confirm ("Does this password includes lower case?")
   if (isLowerCase){
     passwordArray = passwordArray.concat(lowerCase)
   console.log(isLowerCase)
   }
    
 var isUpperCase = window.confirm ("Does this password include upper case?")
 if (isUpperCase){
  passwordArray = passwordArray.concat(upperCase)
 console.log(isUpperCase)
 }
  
 var isSpecialCharacters = window.confirm ("Does this password includes special characters?")
 if (isSpecialCharacters){
  passwordArray = passwordArray.concat(specialChars)
 console.log(isSpecialCharacters)
 }

 var isNumbers = window.confirm ("Does this password includes numbers?")
 if (isNumbers){
  passwordArray = passwordArray.concat(numbers)
 console.log(isNumbers)
 }
 //password characters
 

     var password = " ";
    for (var i = 0; i <= passwordSizeLenght; i++) {
    password = password + passwordArray[Math.floor(Math.random()* passwordArray.length)];
  
   }
 
 return password

}

// Write password to the #password input
function writePassword() {
  var finalPasswrd = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPasswrd;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
