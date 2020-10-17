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
      prompt("Please enter the length of the password, must be 8 to 128 characters.")
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

  // Arrays for building the password
  let upperAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  let lowerAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let spChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Depending on user choice, store in this array
  let storedUserPassword = [];
  
  // Depending on user selection, update storedUserPassword array
  if (upperCase == true) {
    storedUserPassword.push(...upperAlpha);
  }
  if (lowerCase == true) {
    storedUserPassword.push(...lowerAlpha);
  }
  if (number == true) {
    storedUserPassword.push(...num);
  }
  if (spChar == true) {
    storedUserPassword.push(...spChars);
  }

  console.log(storedUserPassword);

  // Use a for loop and take the users chosen length and build the password
  for (let i = 0; i < pwLength; i++) {
    finalPassword +=
      storedUserPassword[Math.floor(Math.random() * storedUserPassword.length)];
  }
  console.log(finalPassword);

  // Returns the built password
  return finalPassword;
}