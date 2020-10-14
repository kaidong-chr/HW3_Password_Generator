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

// function generatePassword() 



// Using charset to generate alphabet and special characters - http://www.asciitable.com/
//Generate random lower case alphabet
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

//Generate random upper case alphabet
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

//Generate random numbers 0 - 9
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

//Generate special characters
function randomChar() {
  const char = '!@#$%^&*(){}[]=<>/,.'
  return char[Math.floor(Math.random() * char.length)]
}


console.log(randomChar())


// Prompts for password criterias

// 1. Password length between 8 to 128 characters
// 2. Uppercase
// 3. Lowercase
// 4. Numbers
// 5. Characters

// Validated user input, on error prompt user suggestions


// Build the password user input: lowercase + uppercase + number + characters + length


// Returns the built password
