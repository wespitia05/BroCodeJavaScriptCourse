// synchronous = executes line by line consecutively in a sequential manner
//               code that waits for an operation to complete

// asynchronous = allows multiple operations to be performed concurrently without waiting
//                doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                handled with: callbacks, promises, async/await

// using callback will have the code wait for the first task to run and then let the other tasks run
function func1() {
    // asynchronous. runs while the other code is running
    setTimeout(() => {console.log("task 1");
                      cancelIdleCallback()}, 3000);
}

function func2() {
    // synchronous
    console.log("task 2");
    console.log("task 3");
    console.log("task 4");
}

func1(func2);