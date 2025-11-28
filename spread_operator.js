// spread operator = ... allows an iterable such as an array or string
//                   to be exapnded in separate elements (unpack elements)

let numbers = [1, 2, 3, 4, 5];
// use spread operator to get maximum/minimum
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);