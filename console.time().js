// console.time() = tool that allows you to measure the time it takes
//                  for a section of code or process to execute
//                  great for identifying performance "bottlenecks"

// console.time("label");
// console.timeEnd("label");

console.time("test");

for(let i = 0; i < 1000000; i++) {
    // do some code here
}

console.timeEnd("test");