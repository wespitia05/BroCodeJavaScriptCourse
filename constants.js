// const = a variable that can't be changed

const PI = 3.14159; // const wont let you change this value
let radius;
let circumference;

radius = window.prompt('enter the radius of a circle');
// convert input to Number type
radius = Number(radius);

circumference = 2 * PI * radius;

console.log(circumference);