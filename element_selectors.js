// element selectors = methods used to target and manipulate html elements
//                     they allow you to select one or multiple html elements
//                     from the DOM (document object model)

// 1. document.getElementById()       // element or null
// 2. document.getElementsClassName() // html collection
// 3. document.getElementsByTagName() // html collection
// 4. document.querySelector()        // element or null
// 5. document.querySelectorAll()     // nodelist

/*
//selecting h1 element by its ID
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading); // displays html element + style
*/

// selecting class fruits by its class name
const fruits = document.getElementsByClassName("fruits");

// highlights selected fruit
// fruits[0].style.backgroundColor = "yellow";

// enhanced for loop to highlight all fruits
/* for(let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
} */

// another method to highlight all fruits
Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
});

console.log(fruits); // displays html collection of fruits along with its properties