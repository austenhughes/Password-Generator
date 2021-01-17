var generateBtn = document.querySelector("#generate");

var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
var special = ("!@#$%^&").split("");
var numbers = ("123456789").split("");
var selectedCharacters = lowerCase.concat(numbers)
var passwordLength = 8
var password = ""

function writePassword() {
console.log(password)
}

generateBtn.addEventListener("click", generatePassword,);

function generatePassword() {
    for (var i=0; i<passwordLength; i++){
        password = password + selectedCharacters[Math.floor(Math.random() *selectedCharacters.length)]
    }
writePassword()
}


