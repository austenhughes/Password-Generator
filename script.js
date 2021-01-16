// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&".split("");
var numbers = "123456789".split("");
var passwordLength = ""
var selectedCharacters = []
var password = ""


// Write password to the #password input

function writePassword() {

  var passwordLength;
  passwordLength = window.prompt("How many characters? ... please chose a number between 8 and 128");


  var password = generatePassword();
  var passwordText = document.querySelector("#textArea");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);


