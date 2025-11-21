// ----- NUMBER GUESSING GAME ----- //

const minNum = 1; // our minimum number
const maxNum = 100; // our maximum number
// generates a random number from 1-100
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;
let running = true;

// while this boolean is true
while(running) {
    guess = window.prompt(`guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    if(isNaN(guess)) {
        window.alert("please enter a valid number");
    }
    else if(guess < minNum || guess > maxNum) {
        window.alert("please enter a valid number");
    }
    else {
        attempts++;
        if(guess < answer) {
            window.alert("too low, try again!");
        }
        else if(guess > answer) {
            window.alert("too high, try again!");
        }
        else {
            window.alert(`correct! the answer was ${answer}. it took you ${attempts} attempts`);
            running = false;
        }
    }
}