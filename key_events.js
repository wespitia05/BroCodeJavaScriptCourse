// eventListener = listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback)

const myBox = document.getElementById("myBox");

document.addEventListener("keydown", event => {
    myBox.textContent = "😵";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "😄";
    myBox.style.backgroundColor = "lightblue";
})