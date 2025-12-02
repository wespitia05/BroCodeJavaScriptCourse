// ----- RANDOM PASSWORD GENERATOR ----- //

function generatePassword(lenght, lowercase, uppercase, numbers, symbols) {
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