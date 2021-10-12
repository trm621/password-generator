// Assignment code here

// Random number select
var randomNum = Math.floor(Math.random() * 9);
  console.log(randomNum);

// Select the length of the password

var promptLength = function() {
  var charNum = window.prompt("How many characters would you like your password to be?")  
    if (charNum < 8 || charNum > 128) {
      window.alert("Your password must be at least 8 characters and no more than 128 characters. Please pick a valid option!")
    return promptLength();
    }
    else { (console.log(charNum));
    }
};

// Select whether to use special characters or not

var selectCharacterTypes = function() {
  confirmSpecial = window.confirm("Would you like to include special characters in your password?")
    if (confirmSpecial === true) {
      console.log(true);
      }
    else {
      console.log(false);
    }
  };

// Select whether to use lowercase characters or not

var selectLowerCase = function() {
  confirmLowerCase = window.confirm("Would you like to include lowercase characters in your password?")
    if (confirmLowerCase === true) {
      console.log(true);
      }
      else {
      console.log(false);
    }
  };

// Select whether to use uppercase characters or not

  var selectUpperCase = function() {
  confirmUpperCase = window.confirm("Would you like to include uppercase characters in your password?")
    if (confirmUpperCase === true) {
      console.log(true);
      } 
      else {
      console.log(false);
    }
  };

// Select whether to use numeric characters or not

var selectNumeric = function() {
  confirmNumericChars = window.confirm("Would you like to include numeric characters in your password?")
    if (confirmNumericChars === true) {
      console.log(true);
      }
      else {
      console.log(false);
    }
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");
  promptLength();
  
  selectCharacterTypes();

  selectLowerCase();

  selectUpperCase();

  selectNumeric();

  //passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
