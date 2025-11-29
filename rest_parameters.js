// rest parameters = (...rest) allows a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

function openFridge(...foods) {
    console.log(foods); // displays as an array
    console.log(...foods); // spread operator separates them
}

function getFood(...foods) {
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hot dog";
const food4 = "sushi";
const food5 = "ramen";

// openFridge(food1, food2, food3, food4, food5)

const foods = getFood(food1, food2, food3, food4, food5);
console.groupCollapsed(foods);