// for loop = repeat some code a limited amount of times

// parameters (starting point, until when, increment/decrement)

// prints 0-9
/*
for(let i = 0; i < 10; i++) {
    console.log(i);
}
*/

// prints 1-10
/*
for(let i = 1; i <= 10; i++) {
    console.log(i);
}
*/

// prints 1, 3, 7, 9
/*
for(let i = 1; i < 10; i+=2) {
    console.log(i);
}
*/

// prints 2, 4, 6, 8, 10
/*
for(let i = 2; i <= 10; i+=2) {
    console.log(i);
}
*/

// prints 10-1
/*
for(let i = 10; i > 0; i--) {
    console.log(i);
}
console.log("HAPPY NEW YEAR");
*/

for(let i = 1; i <= 20; i++) {
    if(i == 13) {
        continue; // doesn't include this value, continues
        // break; // ends loop entirely at this value
    }
    else {
        console.log(i);
    }
}