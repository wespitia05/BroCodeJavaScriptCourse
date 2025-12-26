// DOM = DOCUMENT OBJECT MODEL
//       Object() that represents the page you see in the web browser
//       and provides you with an API to interact with it.
//       web browser constructs the DOM when it loads and HTML document,
//       and structures all the elements in a tree-like representation
//       javascript can access the DOM to dynamically
//       change the content, structure and style of a web page

const username = "william";
const welcomeMsg = document.getElementById("welcome-msg");

welcomeMsg.textContent += username === "" ? `guest` : username;

// dynamically change the title of the html document
document.title = "my website";
// dynamically change the background color of the html document
document.body.style.backgroundColor = "gray";

// displays the html document
console.log(document);

// displays all the properties of this document
console.dir(document);