// DOM navigation = the process of navigating through the structure
//                  of an html document using javascript

// .firstElementChild
// .lastElementChild
// .nextElementChild
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