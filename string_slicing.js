// string slicing = creating a substring from a portion of another string
// string.slice(start, end);

const fullName = "william espitia";
/*
let firstName = fullName.slice(0, 7); // ending index exclusive
let lastName = fullName.slice(8, 15); // ending index exclusive
*/

// another method for slicing
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);