var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

var upperCase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
var lowerCase = ("abcdefghijklmnopqrstuvwxyz").split("");
var special = ("!@#$%^&").split("");
var numbers = ("123456789").split("");
var selectedCharacters = [];
var password = "";

function passwordOptions() {

    password = "";
    selectedCharacters = [];

    var passwordLength;
    passwordLength = parseInt(window.prompt("How many characters? ... please chose a number between 8 and 128"));
    if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
        alert("Please choose a number between 8 and 128");
        return;
    } else { 
        console.log(passwordLength);
    }
  
    var useLowerCase;
    useLowerCase = confirm("Include lowercase letter? Click ok for yes and cancel for no.");
    if (useLowerCase){
      console.log("Include lowercase");
      selectedCharacters =selectedCharacters.concat(lowerCase);
    }else{
      console.log("No lowercase");
    }
  
    var useUpperCase;
    useUpperCase = confirm("Include uppercase letters? Click ok for yes and cancel for no.");
    if (useUpperCase){
      console.log("Include uppercase");
      selectedCharacters =selectedCharacters.concat(upperCase);
    }else{
      console.log("No uppercase");
    }
    
    var useNumbers;
    useNumbers = confirm("Include numbers? Click ok for yes and cancel for no.");
    if (useNumbers){
      console.log("Include numbers");
      selectedCharacters =selectedCharacters.concat(numbers);
    }else{
      console.log("No numbers")
    }
  
    var useSpecial;
    useSpecial = confirm("Include special characters? Click ok for yes and cancel for no.");
    if (useSpecial){
      console.log("Include special characters");
      selectedCharacters =selectedCharacters.concat(special);
      console.log(selectedCharacters, "Selected characters");
    }else{
      console.log("no special characters");
      console.log(selectedCharacters, "Selected characters");
    }
  
    if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecail){
      alert("please chose at least one kind of character");
    }
  
    generatePassword();

    function generatePassword() {
        for (var i=0; i<passwordLength; i++){
            password = password + selectedCharacters[Math.floor(Math.random() *selectedCharacters.length)]
        }
    writePassword()
    }

    function writePassword() {
        console.log("your new password is ", password)
        passwordText.textContent = password
        }
  
  }

  generateBtn.addEventListener("click", passwordOptions,);
  
