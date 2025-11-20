// while loop = repeat some code WHILE some condition is true

/*
let username = "";

while(username === "" || username ===null) {
    username = window.prompt(`enter your name:`);
}

console.log(`hello ${username}`);
*/

let loggedIn = false;
let username;
let password;

while(!loggedIn) {
    username = window.prompt(`enter your username:`);
    password = window.prompt(`enter your password:`);

    if(username === "myUsername" && password === "myPassword") {
        loggedIn = true;
        console.log("you are logged in");
    }
    else {
        console.log("invalid credentials, please try again");
    }
}