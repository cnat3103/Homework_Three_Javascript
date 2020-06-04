//Assignment Code
let generateBtn = document.querySelector("#generate");

// Password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// The Password generator will provide a password with 8-120 characters based on user specifications.

// Step One - Arrays entered to declare character inputs
let number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "<", ">", "?"];
let alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Step Two - Establish password length: Prompt user to confirm number of characters
function generatePassword() {
  let confirmLength = (prompt("How many characters would you like your password to contain?"));

  // Step Three -  Ensure user input is within desired range - Loop if answer is outside specified range 
  while(confirmLength <= 7 || confirmLength >= 121) {
      alert("Password length must be between 8-120 characters Try again");
      let confirmLength = (prompt("How many characters would you like your password to contain?"));
      } 


    // Step Four - User to confirm the characters required for password
    let confirmSpecialCharacters = confirm("Please confirm if you would like to include special characters");
    let confirmNumericCharacters = confirm("Please confirm if you would like to include numeric characters");    
    let confirmLowerCase = confirm("Please confirm if you would like to include lowercase characters");
    let confirmUpperCase = confirm("Please confirm if you would like to include uppercase characters");
      
    // Loop to prompt user to enter at least one character type if none selected 
      while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
        alert("You must choose at least one character type");
        let confirmSpecialCharacters = confirm("Please confirm if you would like to include special characters");
        let confirmNumericCharacters = confirm("Please to confirm if you would like to include numeric characters");    
        let confirmLowerCase = confirm("Please confirm if you would like to include lowercase characters");
        let confirmUpperCase = confirm("Please confirm if you would like to include uppercase characters");   
    } 
    
    // Step Five - Build a new master array according to User specifications using conditional state statements and the concat method 
    let totalPasswordCharacters = []
      
    if (confirmSpecialCharacters) {
      totalPasswordCharacters = totalPasswordCharacters.concat(specialCharacters)
    }

    if (confirmNumericCharacters) {
      totalPasswordCharacters = totalPasswordCharacters.concat(number)
    }
      
    if (confirmLowerCase) {
      totalPasswordCharacters = totalPasswordCharacters.concat(alphaLower)
    }

    if (confirmUpperCase) {
      totalPasswordCharacters = totalPasswordCharacters.concat(alphaUpper)
    }

      // Step Six - Declare userGenPassword as empty string to avoid undefined error - NOTE - understand this is not best practice
      let userGenPassword = ""
      
      // Create a for loop that will exit once reaches User defined password length
      for (let i = 0; i < confirmLength; i++) 
      
      // execute code block: "" + randomly generated character from within master array --> 
      {
        userGenPassword = userGenPassword + totalPasswordCharacters[Math.floor(Math.random() * totalPasswordCharacters.length)];
      }
      
      // Step Seven - return random password
      return userGenPassword;

}
