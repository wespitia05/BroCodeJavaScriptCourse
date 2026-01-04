// nodelist = static collection of html elements by (id, class, element)
//            can be created by using querySelectorAll()
//            similar to an array, but no (map, filter, reduce)
//            nodelist wont update to automatically reflact changes

let buttons = document.querySelectorAll(".myButtons");

// add hml/css properties
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += " 😄";
})