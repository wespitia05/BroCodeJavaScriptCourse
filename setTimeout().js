// setTimeout() = function in javascript that allows you to schedule
//                the execution of a function after an amount of time (ms)
//                Times are approximate (varies based on the workload of the javascript runtime env.)

//                setTimeout(callback, delay);
// clearTimeout(timeoutId) = can cancel a timeout before it triggers

function sayHello() {
    window.alert("hello");
}

const timeout = setTimeout(sayHello, 3000);
clearTimeout(timeout); // cancels the timeout

// can also do this
// setTimeout(() => window.alert("hello"), 3000);