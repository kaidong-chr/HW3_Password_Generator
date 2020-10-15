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

//To Do: 
//store items in an array 
//user is promted through the options and picks what they want
//once user has chosen what they want to include in their pw...has to get pieced together and returned somewhere
//calling random on each of their selections
//display their decided



// function generatePassword()
// Prompts for password criterias

// 1. Password length between 8 to 128 characters
let pwlength = prompt ("Enter the length of the password, must be 8 to 128 characters?");

// 2. Uppercase
let upperCase = confirm ("Would you like to include uppercase?");

// 3. Lowercase
let lowerCase = confirm ("Would you like to include lowercase?");

// 4. Number
let number = confirm ("Would you like to include numbers?");

// 5. Character
let spChar = confirm ("Would you like to include special characters?")



// Array used to store password choices
let storedUserPassword=[];

// Use charset to generate alphabet and special characters - https://www.w3schools.com/html/html_charset.asp
let functions = {

// Generate random upper case alphabet
  randomUpper: function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  },

// Generate random lower case alphabet
randomLower: function () {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
},

// Generate random numbers 0 - 9
  randomNumber: function () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  },

// Generate special characters
  randomChar: function () {
    const char = '!@#$%^&*(){}[]=<>/,.'
    return char[Math.floor(Math.random() * char.length)]
  }
};

// // Logging to console to test functions
// console.log(functions.randomUpper())

// Depending on users choice, function runs. 
if (upperCase == true) {
  storedUserPassword = functions.randomUpper();
}

if (lowerCase == true) {
  storedUserPassword = functions.randomLower();
}

if (number == true) {
  storedUserPassword = functions.randomNumber();
}

if (spChar == true) {
  storedUserPassword = functions.randomChar();
}

console.log(storedUserPassword)

// // use a for loop and take the users chosen length and you iterate for that length
// for (let index = 0; index < array.length; index++) {
//   const element = array[index];


// Validated user input, on error prompt user suggestions


// Build the password user input: lowercase + uppercase + number + characters + length


// Returns the built password
