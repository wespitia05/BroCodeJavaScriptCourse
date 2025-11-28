// spread operator = ... allows an iterable such as an array or string
//                   to be exapnded in separate elements (unpack elements)

/*
let numbers = [1, 2, 3, 4, 5];
// use spread operator to get maximum/minimum
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);
*/

let username = "william espitia";
let letters = [...username].join('-');

console.log(letters);

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];

let newFruits = [...fruits]; // two different arrays with the same content
// combine two separate arrays and add some elements at the end
let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);