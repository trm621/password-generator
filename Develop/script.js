// Character arrays

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "-", "+", ":", ";",
"<", ">", "?", "@", "[", "]", "/", "^", "_", "{", "}", "|", "~", "`", "=", ".", ","];

var selections;

// Random number select
var randomNum = Math.floor(Math.random() * 9);
  console.log(randomNum);

// Select the length of the password and what kind of characters to use

var generatePassword = function() {
  var charNum = window.prompt("How many characters would you like your password to be?")  
    if (charNum < 8 || charNum > 128) {
      window.alert("Your password must be at least 8 characters and no more than 128 characters. Please pick a valid option!")
    return generatePassword();
    }
    else { (console.log(charNum));
      
  // Select whether to use special characters or not
  confirmSpecial = window.confirm("Would you like to include special characters in your password?")
  // Select whether to use lowercase letters or not
  confirmLowerCase = window.confirm("Would you like to include lowercase characters in your password?")
  // Select whether to use uppercase characters or not
  confirmUpperCase = window.confirm("Would you like to include uppercase characters in your password?")
  // Select whether to use numeric characters or not
  confirmNumeric = window.confirm("Would you like to include numeric characters in your password?")
  };
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordText = document.getElementById("#password");

// Write password to the #password input
function writePassword() {
  password = generatePassword();

  // if no option is chosen, alert the user they must pick a valid option and start the choice selection over
  if (!confirmSpecial && !confirmUpperCase && !confirmLowerCase && !confirmNumeric) {
    window.alert("You must select at least one option!")
    return generatePassword();
  }

  // if all character types are selected
  else if (confirmSpecial && confirmUpperCase && confirmLowerCase && confirmNumeric) {
    passwordText = specialChars.concat(upperCaseChars, lowerCaseChars, randomNum)
  }

  // if special, uppercase, and lowercase characters are selected
  else if (confirmSpecial && confirmUpperCase && confirmLowerCase) {

  }

  // if special, uppercase, and numeric characters are selected
  else if (confirmSpecial && confirmUpperCase && confirmNumeric) {

  }

  // if special, lowercase, and numeric characters are selected
  else if (confirmSpecial && confirmLowerCase && confirmNumeric) {

  }

  // if lowercase, uppercase, and numeric characters are selected
  else if (confirmLowerCase && confirmUpperCase && confirmNumeric) {

  }

  // if only numeric and lowercase characters are selected
  else if (confirmNumeric && confirmLowerCase) {

  }
  
  // if only numeric and uppercase characters are selected
  else if (confirmNumeric && confirmUpperCase) {

  }

  // if only numeric and special characters are selected
  else if (confirmNumeric && confirmSpecial) {

  }
  
  // if only special and uppercase characters are selected
  else if (confirmSpecial && confirmUpperCase) {

  }

  // if only special and lowercase letters are selected
  else if (confirmSpecial && confirmLowerCase) {

  }
 
  // if only special characters are selected
  else if (confirmSpecial) {

  }

  // if only uppercase characterse are selected
  else if (confirmUpperCase) {

  }

  // if only lowercase characters are selected
  else if (confirmLowerCase) {

  }

  // if only numeric characters are selected
  else if (confirmNumeric) {

  }
  
passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
