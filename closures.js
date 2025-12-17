// closure = a function defined inside of another function
//           the inner function has access to the variables
//           and scope of the outer function.
//           allow for private variables and state maintenance
//           used frequently in js frameworks: react, vue, angular

/*
function outer() {
    // inner function has access to everything within outer function
    let message = "hello"; // any variable considered private
    function inner() {
        console.log(message);
    }
    inner();
}

outer();
*/

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log(`count incresed to ${count}`);
    }

    function getCount() {
        return count;
    }
    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(`the current count is ${counter.getCount()}`);