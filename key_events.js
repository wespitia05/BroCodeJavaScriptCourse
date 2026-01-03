// eventListener = listen for specific events to create interactive web pages
//                 events: keydown, keyup
//                 document.addEventListener(event, callback)

const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0; // horizontal movement
let y = 0; // vertical movement

document.addEventListener("keydown", event => {
    myBox.textContent = "😵";
    myBox.style.backgroundColor = "tomato";
})

document.addEventListener("keyup", event => {
    myBox.textContent = "😄";
    myBox.style.backgroundColor = "lightblue";
})

document.addEventListener("keydown", event => {
    console.log(event.key);
    event.preventDefault();
    // if the key starts with "Arrow", move forward
    if (event.key.startsWith("Arrow")) {
        switch(event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case  "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }
        myBox.style.top = `${y}px`;
        myBox.style.left = `${x}px`;
    }
})