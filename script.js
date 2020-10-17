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

function generatePassword() {
  // Prompts for password criterias

  // 1. Password length between 8 to 128 characters
  let pwLength = parseInt(
    prompt("Enter the length of the password, must be 8 to 128 characters.")
  );
  // 1.5 If the user chooses length out side of range, promp the user to try again.
  while (pwLength < 9 || pwLength > 129) {
    alert("password must be between 8 to 128 characters");
    pwLength = parseInt(
      prompt(
        "Please enter the length of the password, must be 8 to 128 characters."
      )
    );
  }

  // 2. Uppercase Prompt
  let upperCase = confirm("Would you like to include uppercase?");

  // 3. Lowercase Prompt
  let lowerCase = confirm("Would you like to include lowercase?");

  // 4. Number Prompt
  let number = confirm("Would you like to include numbers?");

  // 5. Character Prompt
  let spChar = confirm("Would you like to include special characters?");

  // Used to store final built password
  let finalPassword = "";

  // Depending on user choice, store in this array
  let storedUserPassword = [];

  // Used charset as the source for alphabet, numbers and special characters - https://www.w3schools.com/html/html_charset.asp
  let functions = {
    // Generate random upper case alphabet
    randomUpper: function () {
      return String.fromCharCode(...Array(91).keys()).slice(65);
    },

    // Generate random lower case alphabet
    randomLower: function () {
      return String.fromCharCode(...Array(123).keys()).slice(97);
    },

    // Generate random numbers 0 - 9
    randomNumber: function () {
      return String.fromCharCode(...Array(58).keys()).slice(48);
    },

    // Generate special characters
    randomChar: function () {
      return String.fromCharCode(...Array(48).keys()).slice(33);
    },
  };

  // Depending on users choice, function runs, then we populate the storeUserPassword array.
  if (upperCase == true) {
    storedUserPassword.push(...functions.randomUpper());
  }
  if (lowerCase == true) {
    storedUserPassword.push(...functions.randomLower());
  }
  if (number == true) {
    storedUserPassword.push(...functions.randomNumber());
  }
  if (spChar == true) {
    storedUserPassword.push(...functions.randomChar());
  }

  // // Logging to console to test functions
  // console.log(functions.randomUpper())

  console.log(storedUserPassword);

  // Use a for loop and take the users chosen length and you iterate for that length
  for (let i = 0; i < pwLength; i++) {
    finalPassword +=
      storedUserPassword[Math.floor(Math.random() * storedUserPassword.length)];
  }
  console.log(finalPassword);

  // Returns the built password
  return finalPassword;
}