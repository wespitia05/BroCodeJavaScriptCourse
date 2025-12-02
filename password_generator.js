// ----- RANDOM PASSWORD GENERATOR ----- //

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_-+=";

    let allowedChars = ""; // allowed characters will be an empty string
    let password = ""; // password will be an empty string

    // concatenates allowed characters into the allowedChars string
    // if any of the characters are true, add it to the allowedChars otherwise add nothing
    allowedChars += lowercase ? lowercaseChars : "";
    allowedChars += uppercase ? uppercaseChars : "";
    allowedChars += numbers ? numberChars : "";
    allowedChars += symbols ? symbolChars : "";

    console.log(allowedChars); // checks to see if all our characters are included

    return '';
}

const passwordLength = 12; 
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, 
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers, 
                                  includeSymbols);

console.log(`generated password: ${password}`);