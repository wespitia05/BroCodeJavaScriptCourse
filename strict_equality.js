//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatypes are equal)
//  != inequality operator
// !== strict inequality operator

const PI = 3.14;

/* compares only if value are equal (true)
if(PI == "3.14") {
    console.log("that is pi");
}
else {
    console.log("that is not pi");
}
*/

/* compares value AND datatype (false)
if(PI === "3.14") {
    console.log("that is pi");
}
else {
    console.log("that is not pi");
}
*/

/* checks if values match or not (true)
if(PI != "3.14") {
    console.log("that is not pi");
}
else {
    console.log("that is pi");
}
*/

if(PI !== "3.14") {
    console.log("that not pi");
}
else {
    console.log("that is pi");
}