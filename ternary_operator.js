// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

/*
let age = 17;
let message = age >= 18 ? "youre an adult" : "youre not an adult"
console.log(message);
*/

/*
let time = 11;
let greeting = time < 12 ? "good morning!" : "good afternoon!";
console.log(greeting);
*/

/*
let isStudent = true;
let message = isStudent ? "you are a student" : "you are not a student";
console.log(message);
*/

let purchaseAmt = 95;
let discount = purchaseAmt >= 100 ? 10 : 0;
console.log(`your total is $${purchaseAmt - purchaseAmt * (discount/100)}`);