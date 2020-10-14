// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Variables for alphabet and special characters


// Prompts for password criterias
// 1. Password length
// 2. Uppercase
// 3. Lowercase
// 4. Numbers
// 5. Characters


// Length of the password between 8 to 128 characters


// Password includes lowercase, uppercase, numeric and/or special characters


// Validated user input, on error prompt user suggestions


// Build the password user input: lowercase + uppercase + number + characters + length


// Returns the built password
