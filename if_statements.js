// if statements = if a condition is true, execute some code
//                 if not, do something else

/* 
let age = 13;

if(age >= 18) {
    console.log("you are old enough to enter this site");
}
else {
    console.log("you must be 18+ to enter this site");
}
*/

/*
let time = 14;

if(time < 12) {
    console.log("good morning");
}
else {
    console.log("good afternoon")
}
*/

/*
let isStudent = true;

if(isStudent) {
    console.log("you are a student");
}

else {
    console.log("you are not a student");
}
*/

// NESTED IF STATEMENTS //
/*
let age = 18;
let hasLicense = true;

if(age >= 16) {
    console.log("you are old enough to drive");

    if(hasLicense) {
        console.log("you have your license")
    }
    else {
        console.log("you do not have your license yet")
    }
}
else {
    console.log("you must be 16+ to have a license");
}
*/

// ELSE IF STATEMENTS //
let age = 18;

if(age >= 100) {
    console.log("you are too old to enter this site")
}
else if(age == 0) {
    console.log("you can't enter, you were just born")
}
else if(age >= 18) {
    console.log("you are old enough to enter this site");
}
else if(age < 0) {
    console.log("your age can't be below 0");
}
else {
    console.log("you must be 18+ to enter this site");
}