// ---------- EXAMPLE 1 <h1> ---------- //

// STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");

const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
// newH1.textContent = "i like pizza";
// newH1.id = "myH1";
// newH1.style.color = "red";
// newH1.style.textAlign = "center";

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// append adds to bottom, prepend adds to top
// document.body.append(newH1);
// adds h1 element to box 1 (bottom)
// document.getElementById("box1").append(newH1);
// adds h1 element to box 2 (top)
// document.getElementById("box2").prepend(newH1);

// adds to bottom of list
// document.getElementById("fruits").append(newListItem);
// adds to top of list
// document.getElementById("fruits").prepend(newListItem);
// adds between apple and orange
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// adding h1 element between boxes
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// REMOVE HTML ELEMENT
// removes element normally
// document.body.removeChild(newH1);

// removes element if within the box (box is parent of the element)
// document.getElementById("box1").removeChild(newH1);