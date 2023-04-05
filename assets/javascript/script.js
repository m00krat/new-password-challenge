// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Assignment code here
var passwordLength;
var passwordUpper;
var passwordLower;
var passwordSpecial;
var passwordNumber;
var userChoices;

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];
var blankUpper = [];

// The map() method creates a new array populated with the results 
// of calling a provided function on every element in the calling array.

function toUpper(x){                    // toUpper = function(x)
  return x.toUpperCase();               // { return x.toUpperCase(); };
} uppercase = lowercase.map(toUpper);   // array2 = array2.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function generatePassword

function generatePassword()
{
  passwordLength = prompt("How many characters would you like your password to be? You can choose between 8 and 128.");

// if user cancelled password length
  if (!passwordLength){
    alert("REQUIRED TO GENERATE");
  }
// else when password length requirement is met
  else {
    passwordLower = confirm("Will your password contain lowercase letters?");
    passwordUpper = confirm("Will your password contain uppercase letters?");
    passwordNumber = confirm("Will your password contain numbers?");
    passwordSpecial = confirm("Will your password contain special characters?");
  };
  // the .concat() function adds arrays together

  // user chooses all 4 options:
  if (passwordLower && passwordUpper && passwordNumber && passwordSpecial) {
    userChoices = lowercase.concat(uppercase, numbers, specialChar);
    }
  // if user chooses only 3 options
  else if (passwordUpper && passwordNumber && passwordSpecial) {
    userChoices = uppercase.concat(numbers, specialChar);
    }
  else if (passwordUpper && passwordNumber && passwordLower) {
    userChoices = uppercase.concat(lowercase, numbers);
    }
  else if (passwordUpper && passwordLower && passwordSpecial) {
    userChoices = uppercase.concat(lowercase, specialChar);
    }
  else if (passwordLower && passwordNumber && passwordSpecial) {
    userChoices = lowercase.concat(numbers, specialChar);
    }
  
  // if user chooses only 2 options
  else if (passwordUpper && passwordNumber) {
    userChoices = uppercase.concat(numbers);
    }
  else if (passwordUpper && passwordSpecial) {
    userChoices = uppercase.concat(specialChar);
    }
  else if (passwordNumber && passwordSpecial) {
    userChoices = numbers.concat(specialChar);
    }
  else if (passwordLower && passwordUpper) {
      userChoices = lowercase.concat(uppercase);
      }
  else if (passwordLower && passwordNumber) {
      userChoices = lowercase.concat(numbers);
      }
  else if (passwordLower && passwordSpecial) {
      userChoices = lowercase.concat(specialChar);
     }
  // if user chooses only 1 option
  else if (passwordLower) {
    userChoices = lowercase;
    }
  else if (passwordLower) {
    userChoices = blankUpper.concat(uppercase);
    }
  else if (passwordNumber) {
    userChoices = numbers;
    }
  else if (passwordSpecial) {
    userChoices = specialChar;
    };

  // Empty array for the generated password
  var passwordEmpty = [];
  
  // for loop for randomness
  for (var i = 0; i < passwordLength; i++) {
    //random choices
    var choices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordEmpty.push(choices);
  }

  // makes the empty array passwordEmpty contain the info it needs from password
  var password = passwordEmpty.join("");
  return password;
}

