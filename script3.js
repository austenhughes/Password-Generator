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
  for (var i=0; i<passwordLength; i++){
    console.log("password");
    var characterChoice = Math.floor(Math.random() * selectedCharacters.Length);
    password.push(selectedCharacters[characterChoice]);
  }

writePassword();

function writePassword() {
  console.log(password)
}

}
