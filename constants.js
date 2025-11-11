// const = a variable that can't be changed

const PI = 3.14159; // const wont let you change this value
let radius;
let circumference;

// radius = window.prompt('enter the radius of a circle');
// convert input to Number type
// radius = Number(radius);

// circumference = 2 * PI * radius;

// when the submit button is pressed, do the following function
document.getElementById("mySubmit").onclick = function() {
    // get value inputted as our radius
    radius = document.getElementById("myText").value;
    // cast type our input into a number
    radius = Number(radius);
    circumference = 2 * PI * radius;
    // set our h3 element to display circumference value
    document.getElementById("myH3").textContent = circumference + "cm";
}