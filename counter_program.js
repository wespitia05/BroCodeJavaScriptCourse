// counter program

// assign constant to our buttons
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");

// initialize our count number to be 0
let count = 0;

// function for our increase button
increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

// function for our decrease button
decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

// function for our reset button
resetBtn.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}