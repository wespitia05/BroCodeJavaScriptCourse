// classList = element property in javascript used to interact
//             with an element's list of classes (css classes)
//             allows you to make reusable classes for many elements
//             across your webpage

// add()
// remove()
// toggle(remove if present, add if not)
// replace(oldClass, newClass)
// contains()

const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");

myButton.addEventListener("mouseover", event => {
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout", event => {
    event.target.classList.remove("hover");
});