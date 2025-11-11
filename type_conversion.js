// type conversion = change the datatype of a value to another
//                   (strings, numbers, boolean)

/*
let age = window.prompt("how old are you?");

// converts input to a number datatype
age = Number(age);
age += 1;

console.log(age);
*/

let x = "pizza";
let y = "pizza";
let z = "pizza";
let a = "0";
let b = "0";
let c = "0";

x = Number(x); // not a number
y = String(y); // string, will work
z = Boolean(z); // boolean, anything inputted will be true
a = Number(a); // converts to a number
b = String(b); // 0 but treated as a string
c = Boolean(c); // boolean, anything inputted will be true

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);