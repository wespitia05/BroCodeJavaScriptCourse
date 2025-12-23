// error = an object that is created to represent a problem that occurs
//         occurs often with user input or establishing a connection

// try { } = encloses code that might potentially cause an error
// catch { } = catch and handle any thrown errors from try { }
// finally { } = (optional) always executes. used mostly for clean up
//               ex. close files, close connections, release resources

try {
    console.log(x);
    // NETWORK ERRORS
    // PROMISE REJECTION
    // SECURITY ERRORS
}
catch (error) {
    console.error(error);
}
finally {
    // CLOSE FILES
    // CLOSE CONNECTIONS
    // RELEASE RESOURCES
    console.log("this always executes");
}

console.log("you reached the end");