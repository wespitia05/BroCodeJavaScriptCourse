// callback = a function that is passed as an arrgument
//            to another function

//            used to handle asynchronous operations:
//            1. reading a file
//            2. network requests
//            3. interacting with databases

//            "hey, when you're done, call this next"

/*
hello(goodbye);
hello(leave);
hello(wait);

function hello(callback) {
    console.log("hello!");
    callback();
}

function leave() {
    console.log("leave!");
}

function wait() {
    console.log("wait!");
}

function goodbye() {
    console.log("goodbye!");
}
*/

sum(displayConsole, 1, 2);
sum(displayPage, 1, 2);

function sum(callback, x, y) {
    let result = x + y;
    callback(result);
}

function displayConsole(result) {
    console.log(result);
}

function displayPage(result) {
    document.getElementById("myH1").textContent = result;
}