// eventListener = listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback)

const myBox = document.getElementById("myBox");

function changeColor(event) {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕";
}

myBox.addEventListener("click", changeColor);