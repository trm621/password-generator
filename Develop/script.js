// Character arrays

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "-", "+", ":", ";",
"<", ">", "?", "@", "[", "]", "/", "^", "_", "{", "}", "|", "~", "`", "=", ".", ","];

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

// Select what kinds of characters the password will contain

var selectChars = function() {
  // Select whether to use special characters or not
  confirmSpecial = window.confirm("Would you like to include special characters in your password?")
  // Select whether to use lowercase letters or not
  confirmLowerCase = window.confirm("Would you like to include lowercase characters in your password?")
  // Select whether to use uppercase characters or not
  confirmUpperCase = window.confirm("Would you like to include uppercase characters in your password?")
  // Select whether to use numeric characters or not
  confirmNumeric = window.confirm("Would you like to include numeric characters in your password?")
  };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("#password");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  
  promptLength();
  selectChars();
  // if no option is chosen, alert the user they must pick a valid option and start the choice selection over
  if (!confirmSpecial && !confirmUpperCase && !confirmLowerCase && !confirmNumeric) {
    window.alert("You must select at least one option!")
    return selectChars();
  }
  else if (confirmSpecial && confirmUpperCase && confirmLowerCase) {
    return passwordText = specialChars + upperCaseChars + lowerCaseChars
  }
  else if (confirmSpecial && confirmUpperCase && confirmNumeric) {

  }
  else if (confirmSpecial && confirmLowerCase && confirmNumeric) {

  }

  else if (confirmLowerCase && confirmUpperCase && confirmNumeric) {

  }

  else if (confirmNumeric && confirmLowerCase) {

  }
  
  else if (confirmNumeric && confirmUpperCase) {

  }

  else if (confirmNumeric && confirmSpecial) {

  }

  else if (confirmSpecial && confirmUpperCase) {

  }

  else if (confirmSpecial && confirmLowerCase) {

  }
 
  else if (confirmSpecial) {

  }

  else if (confirmUpperCase) {

  }

  else if (confirmLowerCase) {

  }

  else if (confirmNumeric) {

  }
  
  //passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
