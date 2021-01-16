// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&".split("");
var numbers = "123456789".split("");

// Write password to the #password input

function writePassword() {

  var passwordLength;
  passwordLength = window.prompt("how many characters?");


  var password = generatePassword();
  var passwordText = document.querySelector("#textArea");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);



// ```
  // GIVEN I need a new, secure password

    // WHEN I click the button to generate a password
    // THEN I am presented with a series of prompts for password criteria

    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password


// press button 

// change card header to : how many characters would you like? please choose between 8 and 128.
// change id generate text to : subbit
// change textArea to : answer here :) 

    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters

// if langthEL greater less than 8
// reset back to above questions 
// else lengthEL more than 128 
// reset back to above questions
// else next question

    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters

// change card header to : Would you like to include lowercase letters?
// change textArea to : yes or no? ... please answer here :)

// If lowerCaseEL not yes or no 
// reset to above question 
// else lowerCaseEl is yes or no
// next question 

// change card header to : Would you like to include Upercase letters?

// If uperCaseEL not yes or no 
// reset to above question 
// else uperCaseEl is yes or no
// next question 

// change card header to : Would you like to include specail charecters?

// If specailEL not yes or no 
// reset to above question 
// else specailEl is yes or no
// next question

// change card header to : Would you like to include numbers?

// If numbersEL not yes or no 
// reset to above question 
// else numbersEl is yes or not
// genraate pasword 

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected

    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria

// generate password useing math floor math random 
// verify password matches elements establisehd above 
// if does not try again 
// if does dispaly passwrod in card header
// if does dispaly password in text area 
// if does change id generate text to : try again?

    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page

// Start over 
// // ```
