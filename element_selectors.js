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
// const fruits = document.getElementsByClassName("fruits");

// highlights selected fruit
// fruits[0].style.backgroundColor = "yellow";

// enhanced for loop to highlight all fruits
/* for(let fruit of fruits) {
    fruit.style.backgroundColor = "yellow";
} */

// another method to highlight all fruits
/* Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
}); */

// console.log(fruits); // displays html collection of fruits along with its properties

// selecting tag name h4 by its tag name
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// highlights specified h4 element yellow
// h4Elements[0].style.backgroundColor = "yellow";

// highlights all h4 elements yellow using enhanced for loop
for(let h4Element of h4Elements) {
    h4Element.style.backgroundColor = "yellow";
}

// highlights all li elements light green using enhanced for loops
for(let liElement of liElements) {
    liElement.style.backgroundColor = "lightgreen";
}

// typecasting h4 elements as an array to highlight yellow
Array.from(h4Elements).forEach(h4Element => {
    h4Element.style.backgroundColor = "yellow";
})

// typecasting li elements as an array to highlight lightgreen
Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "lightgreen";
})

console.log(h4Elements); // displays html collection and its properties