// array = a variable like structure that can hold more than 1 value

// each item in the array known as an element
let fruits = ["apple", "orange", "banana"];

// fruits[0] = "coconut"; // changes value at index 0

// adding element at the end of the array
fruits.push("coconut");
// removing element at the end of the array
// fruits.pop();
// adding element at the beginning of the array
fruits.unshift("mango");
// removing element at the beginning of the array
// fruits.shift();

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);

// getting the length of the array
let numOfFruits = fruits.length;
console.log(numOfFruits);

// searching for an element in the array
let index = fruits.indexOf("apple");
console.log(index);

// loops through all elements in the array and print them
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// loops through all elements in the array and prints every other element
for(let i = 0; i < fruits.length; i+=2) {
    console.log(fruits[i]);
}

// loops through all elements in the array and prints it in reverse
for(let i = fruits.length - 1; i >= 0; i--) {
    console.log(fruits[i]);
}