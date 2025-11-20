// while loop = repeat some code WHILE some condition is true

let username = "";

while(username === "" || username ===null) {
    username = window.prompt(`enter your name:`);
}

console.log(`hello ${username}`);