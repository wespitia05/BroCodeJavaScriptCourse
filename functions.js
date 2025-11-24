// function = a section of reusable code
//            declares code once, use it whenever you want
//            calls the function to execute the code

// example one
/*
function happyBirthday(username, age) {
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log(`happy birthday dear ${username}!`);
    console.log("happy birthday to you!");
    console.log(`you are ${age} years old`);
}

happyBirthday("william", 25);
happyBirthday("spongebob", 32);
happyBirthday("patrick", 37);
*/

// example two
/*
function add(x, y) {
    let result = x + y;
    return result;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

let answer = add(2, 3);
console.log(answer);
let answer1 = subtract(2, 3);
console.log(answer1);
let answer2 = multiply(2, 3);
console.log(answer2);
let answer3 = divide(2, 3);
console.log(answer3);
*/

// example three
function isEven(number) {
    if(number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }

    // or you can use this method:
    // return number % 2 == 0 ? true : false;
}

console.log(isEven(10));
console.log(isEven(11));
console.log(isEven(12));