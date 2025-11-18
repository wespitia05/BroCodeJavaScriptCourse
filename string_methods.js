// string methods = allow you to manpulate and work with text (strings)

let username = " william ";
let phoneNumber = "123-456-7890";

// removing all dashes in phone number
// choose character to remove, then character to replace it with
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

// checking if string starts with a specified character
let result = username.startsWith(" ");
console.log(result); // returns boolean

// checking if string ends with a specified character
let endResult = username.startsWith(" ");
console.log(endResult); // returns boolean

// includes method, does the string contain the specified character
console.log(username.includes(" "));
console.log(username.includes("w"));
console.log(username.includes("W"));

// getting character at certain index
console.log(username.charAt(0));
console.log(username.charAt(1));
console.log(username.charAt(2));
console.log(username.charAt(3));

// returns index of first occurence of a specified character
console.log(username.indexOf("w"));
console.log(username.indexOf("i"));
console.log(username.indexOf("l"));
console.log(username.lastIndexOf("l"));

// getting length of a string
console.log(username.length);

// making all characters lowercase
console.log(username.toLowerCase());

// making all characters uppercase
console.log(username.toUpperCase());

// using the trim method (removes whitespace)
username = username.trim();
console.log(username);