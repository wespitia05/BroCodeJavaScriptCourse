// function = a section of reusable code
//            declares code once, use it whenever you want
//            calls the function to execute the code

// example one
function happyBirthday(username, age) {
    console.log("happy birthday to you!");
    console.log("happy birthday to you!");
    console.log(`happy birthday dear ${username}!`);
    console.log("happy birthday to you!");
    console.log(`you are ${age} years old`);
}

happyBirthday("william", 25);
happyBirthday("spongebob", 32);
happyBirthday("patrick", 37);