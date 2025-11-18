// method chaining = calling one method after another 
//                   in one continuous line of code

// ----- NO METHOD CHAINING -----  //
let username = window.prompt("enter your username:");

// main idea is to make first letter uppercase,
// and make every letter after the first letter lowercase
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extraChars = username.slice(1);
extraChars = extraChars.toLowerCase();
username = letter + extraChars;

console.log(username);

// ----- METHOD CHAINING ----- //