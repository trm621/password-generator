// Character arrays

var upperCaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var lowerCaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
"l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "-", "+", ":", ";",
"<", ">", "?", "@", "[", "]", "/", "^", "_", "{", "}", "|", "~", "`", "=", ".", ","];

var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

var generatePassword = function() {

  // empty array to store selected character type from respective arrays
  var passwordChars = [];
  
  // Select the length of the password and what kind of characters to use
  var charNum = window.prompt("How many characters would you like your password to be?")  
    if (charNum < 8 || charNum > 128) {
      window.alert("Your password must be at least 8 characters and no more than 128 characters. Please pick a valid option!")
      generatePassword();
    }

  // Select whether to use special characters or not
  confirmSpecial = window.confirm("Would you like to include special characters in your password?")
  // Select whether to use lowercase letters or not
  confirmLowerCase = window.confirm("Would you like to include lowercase characters in your password?")
  // Select whether to use uppercase characters or not
  confirmUpperCase = window.confirm("Would you like to include uppercase characters in your password?")
  // Select whether to use numeric characters or not
  confirmNumeric = window.confirm("Would you like to include numeric characters in your password?")

  // if no option is chosen, alert the user they must pick a valid option and start the choice selection over
  if (!confirmSpecial && !confirmUpperCase && !confirmLowerCase && !confirmNumeric) {
      window.alert("You must select at least one option!")
      generatePassword();
    }
  
    // use special characters if they are selected
    if (confirmSpecial) {
      passwordChars = passwordChars.concat(specialChars)
    }
  
    // use uppercase letters if they are selected
    if (confirmUpperCase) {
      passwordChars = passwordChars.concat(upperCaseChars)
    }
  
    // use numeric characters if they are selected
    if (confirmNumeric) {
      passwordChars = passwordChars.concat(numericChars)
    }
  
    // use lowercase letters if they are selected
    if (confirmLowerCase) {
      passwordChars = passwordChars.concat(lowerCaseChars)
    }

    // empty string for concatenation
    var generatedPassword = "";

    //randomize array and make it the selected length
    for (var i = 0; i < charNum; i++) {
      generatedPassword = generatedPassword + passwordChars[Math.floor(Math.random() * passwordChars.length)]
      console.log(generatedPassword)
    }
    return generatedPassword;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.getElementById("#password");
  passwordText.value = password;
};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);