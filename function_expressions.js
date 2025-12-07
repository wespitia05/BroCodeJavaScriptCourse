// function declaration = define a reusable block of code
//                        that performs a specific task
/*
function hello() {
    console.log("hello");
}
*/
// function expressions = a way to define functions as 
//                        values or variables
/*
const hello = function() {
    console.log("hello");
}

hello();
*/

// function declaration
/*
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(square);

console.log(squares);

function square(element) {
    return Math.pow(element, 2);
}
*/

// function expression
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element) {
    return Math.pow(element, 2);
})
const cubes = numbers.map(function(element) {
    return Math.pow(element, 3);
})

console.log(squares);
console.log(cubes);