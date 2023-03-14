// Assignment code here
//Catergorizes characters.
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var specialChars = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var numericChars = "0123456789";

function generatePassword() {
  
  let password = '';
//Asks user to input the desired length of password.
  const passwordLength = prompt("How long do you want your password to be? (8-128 characters)");
//Asks again to input a new desired length if user didn't put in a number between 8 and 128.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Oh no! Invalid password length! Please enter a number between 8 and 128.");
    return '';
  }
//Asks user a series of questions regarding what they wish to be added.
  const includeLowercase = confirm("Do you wish to include lowercase characters?");
  const includeUppercase = confirm("Do you wish to include uppercase characters?");
  const includeNumeric = confirm("Do you wish to include numeric characters?");
  const includeSpecial = confirm("Do you wish to include special characters?");

  let possibleChars = '';
  if (includeLowercase) {
    possibleChars += lowercaseChars;
  }
  if (includeUppercase) {
    possibleChars += uppercaseChars;
  }
  if (includeNumeric) {
    possibleChars += numericChars;
  }
  if (includeSpecial) {
    possibleChars += specialChars;
  }


  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * possibleChars.length);
    password += possibleChars[randomIndex];
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
