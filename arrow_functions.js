// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code
/*
const hello = (name, age) => {console.log(`hello ${name}`);
                         console.log(`you are ${age} years old`)};

hello("william", 28);
*/

// after 3 seconds, activate callback
setTimeout( () => console.log("hello"), 3000);

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((previous, next) => previous + next);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(oddNums);
console.log(total);