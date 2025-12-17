// closure = a function defined inside of another function
//           the inner function has access to the variables
//           and scope of the outer function.
//           allow for private variables and state maintenance
//           used frequently in js frameworks: react, vue, angular

function outer() {
    // inner function has access to everything within outer function
    let message = "hello"; // any variable considered private
    function inner() {
        console.log(message);
    }
    inner();
}

outer();