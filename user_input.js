// how to accept user input

// 1. easy way = window prompt
// 2. professional way = html textbox

// EASY WAY //
/*
let username;

username = window.prompt("what's your username?");

console.log(username);
*/

// PROFESSIONAL WAY //
let username;

// get the submit button element, when clicked it will do the following function
document.getElementById("mySubmit").onclick = function() {
    // sets username to equal the value of what we typed
    username = document.getElementById("myText").value;
    // displays welcome "user input" h1 element after pressing the submit button
    document.getElementById("myH1").textContent = `Welcome ${username}`;
    // print it in the console
    console.log(username);
}