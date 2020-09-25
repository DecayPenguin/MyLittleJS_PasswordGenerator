//These are the variables which are set as arrays which contain different characters which are to be chosen randomly depending on the user's input.
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "/", "|"];


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





// Write password to the #password input
function generatePassword() {

    //These are the questions that ask the user how many characters they want their password to have, if they want to include uppercase characters, lowercase characters, numbers, and/or special characters.
    var passwordLength = prompt("How many characters do you want your password?");
    var uppercase = confirm("Do you want to include uppercase characters in your password?");
    var lowercase = confirm("Do you want to include lowercase characters in your password?");
    var numbersP = confirm("Do you want to include number characters in your password?");
    var specialCharactersP = confirm("Do you want to include special characters in your password?");

    //If all of the questions above, excluding passwordLength, have been denied then this will alert will appear because at least 1 of them must be accepted.
    if (!uppercase && !lowercase && !numbersP && !specialCharactersP) {
        alert("You must select at least one!");
//If passwordLength receives an input from the user that is a number less than 8 or greater than 5, this alert will appear.
    } else if ((passwordLength < 8) || (passwordLength > 128)) {
        alert("Cannot be less than 8 or greater than 128!");
    }



//This code understands the input from the user and reads what is received. The received input then goes through the filters.
    else {
        var randomPassword = "";
        for (var index = 0; index < passwordLength; index++) {
            //If numbers are accepted, there will be numbers included, if it is not then there will not be any.
            if (index === 0) {
                var randomNumber = Math.random() * numbers.length;
                var wholerandomnumber = Math.floor(randomNumber);
                randomPassword += numbers[wholerandomnumber];
            }
            //If special characters are accepted, there will be special characters included, if it is denied then there will not be any.
            else if (index === 5) {
                var randomSpecial = Math.random() * specialCharacters.length;
                var wholerandomnumber = Math.floor(randomSpecial);
                randomPassword += specialCharacters[wholerandomnumber];
             //   If lowercase characters are accepted, there will be lowercase characters included, if it is denied then there will not be any.
            } else if (index === 3) {
                var randomLower = Math.random() * lower.length;
                var wholerandomnumber = Math.floor(randomLower);
                randomPassword += lower[wholerandomnumber];
                //   If uppercase are accepted, there will be uppercase characters included, if it is denied then there will not be any.
            } else {
                var randomUpper = Math.random() * lower.length
                var wholerandomnumber = Math.floor(randomUpper);
                randomPassword += upper[wholerandomnumber];
            }
            //This stores the randomly generated password for the return command to show it.
            console.log(randomPassword);
        }

    }
    //This is the return command. It shows the randomly generated password to the user.
    return randomPassword;
}