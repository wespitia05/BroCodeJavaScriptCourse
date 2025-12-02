// callback = a function that is passed as an arrgument
//            to another function

//            used to handle asynchronous operations:
//            1. reading a file
//            2. network requests
//            3. interacting with databases

//            "hey, when you're done, call this next"

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