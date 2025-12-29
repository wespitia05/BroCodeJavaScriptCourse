// DOM navigation = the process of navigating through the structure
//                  of an html document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

// ---------- .firstElementChild ---------- //
/*
// highlights the first element of the fruits unordered list
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow";

// highlights the first element of all unordered lists
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})
*/

// ---------- .lastElementChild ---------- //
/*
// highlights the last element of the fruits unordered list
const element = document.getElementById("fruits");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "yellow";

// highlights the last element of all unordered lists
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "yellow";
})
*/

// ---------- .nextElementSibling ---------- //
/*
// highlights the next element sibling yellow
// apple -> orange ; orange -> banana
const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

// highlights the next element sibling of the unordered list fruits
// fruits -> vegetables ; vegetables -> desserts
const element2 = document.getElementById("fruits");
const nextSibling2 = element2.nextElementSibling;
nextSibling2.style.backgroundColor = "yellow";
*/

// ---------- .previousElementSibling ---------- //
/*
// highlights the previous element sibling yellow
// pie -> cake ; ice cream -> pie
const element = document.getElementById("pie");
const nextSibling = element.previousElementSibling;
nextSibling.style.backgroundColor = "yellow";

// highlights the previous element sibling of the unordered list vegetables
// vegetables -> fruits ; desserts -> vegetables
const element2 = document.getElementById("vegetables");
const nextSibling2 = element2.previousElementSibling;
nextSibling2.style.backgroundColor = "yellow";
*/

// ---------- .parentElement ---------- //
/*
// highlights the parent of the selected element
// apple, orange, banana -> parent: fruits
// carrots, onions, potatoes -> parent: vegetables
// cake, pie, ice cream -> parent: desserts
const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";
*/

// ---------- .children ---------- //
// highlights the parent of the selected element
const element = document.getElementById("fruits");
const children = element.children;
children.style.backgroundColor = "yellow";