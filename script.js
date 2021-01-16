// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&".split("");
var numbers = "123456789".split("");
var passwordLength = ""
var useLowerCase = ""
var useUppserCase = ""
var useNumbers = ""
var useSpecail = ""
var selectedCharacters = []
var password = ""


// Write password to the #password input

function passwordOptions() {

  var passwordLength;
  passwordLength = parseInt(window.prompt("How many characters? ... please chose a number between 8 and 128"));
    if (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength)){
        alert("please choose a number between 8 and 128");
        return;
    }

  var useLowerCase;
  useLowerCase = confirm("include lowercase letter? Click ok for yes and cancel for no.");

  var useUpperCase;
  useUpperCase = confirm("include upercase letters? Click ok for yes and cancel for no.");
  
  var useNumbers;
  useNumbers = confirm("include numbers? Click ok for yes and cancel for no.");

  var useSpecail;
  useSpecail = confirm("use specail charecters? Click ok for yes and cancel for no.");

  var password = generatePassword();
  var passwordText = document.querySelector("#textArea");


  //need to call generate password at end of this 

  passwordText.value = password;

}

function writePassword() {
  console.log(password)
  passwordText.textContent = password 
  }

// Add event listener to generate button
generateBtn.addEventListener("click", passwordOptions,);

function generatePassword() {
  for (var i=0; i<passwordLength; i++){
      password = password + selectedCharacters[Math.floor(Math.random() *selectedCharacters.length)]
  }
writePassword()
}


