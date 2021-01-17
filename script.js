// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var special = "!@#$%^&".split("");
var numbers = "123456789".split("");
var selectedCharacters = [];
var passwordLength = "";
var password = "";

// Write password to the #password input

function passwordOptions() {

  var passwordLength;
  passwordLength = parseInt(window.prompt("How many characters? ... please chose a number between 8 and 128"));
    if (passwordLength < 8 || passwordLength >128 || isNaN(passwordLength)){
        alert("please choose a number between 8 and 128");
        return;
    }else{
      console.log(passwordLength);
    }

  var useLowerCase;
  useLowerCase = confirm("include lowercase letter? Click ok for yes and cancel for no.");
  if (useLowerCase){
    console.log("include lowercase");
    selectedCharacters =selectedCharacters.concat(lowerCase);
  }else{
    console.log("no lowercase")
  }

  var useUpperCase;
  useUpperCase = confirm("include upercase letters? Click ok for yes and cancel for no.");
  if (useUpperCase){
    console.log("include uppercase");
    selectedCharacters =selectedCharacters.concat(upperCase);
  }else{
    console.log("no uppercase")
  }
  
  var useNumbers;
  useNumbers = confirm("include numbers? Click ok for yes and cancel for no.");
  if (useNumbers){
    console.log("include numbers");
    selectedCharacters =selectedCharacters.concat(numbers);
  }else{
    console.log("no nuumbers")
  }

  var useSpecail;
  useSpecail = confirm("use specail charecters? Click ok for yes and cancel for no.");
  if (useSpecail){
    console.log("include specail characters");
    selectedCharacters =selectedCharacters.concat(special);
    console.log(selectedCharacters, "selected characters");
  }else{
    console.log("no special characters");
    console.log(selectedCharacters, "selected characters");
  }

  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecail){
    alert("please chose at least one kind of character");
  }
  generatePassword();
}

// Add event listener to generate button

generateBtn.addEventListener("click", passwordOptions,);

function writePassword() {
  console.log("password", password)
  }
  
  function generatePassword() {
    for (var i=0; i<passwordLength; i++){
      password = password + selectedCharacters[Math.floor(Math.random() *selectedCharacters.length)]
  }
  writePassword()
  }
