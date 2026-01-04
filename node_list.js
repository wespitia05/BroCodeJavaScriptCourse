// nodelist = static collection of html elements by (id, class, element)
//            can be created by using querySelectorAll()
//            similar to an array, but no (map, filter, reduce)
//            nodelist wont update to automatically reflact changes

let buttons = document.querySelectorAll(".myButtons");

// add hml/css properties
/*
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += " 😄";
})
*/

// CLICK event listener
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "red";
    })
});
*/

// MOUSEOVER + MOUSEOUT event listener
buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(240, 100%, 40%)";
    })
})

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(240, 100%, 60%)";
    })
})