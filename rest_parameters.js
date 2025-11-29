// rest parameters = (...rest) allows a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into separate elements
//                   rest = bundles separate elements into an array

/*
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
*/

function sum(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result;
}

function getAverage(...numbers) {
    let result = 0;
    for(let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

const total = sum(1, 2, 3, 4, 5);
const average = getAverage(75, 100, 85, 90, 50);

console.log(`your total is $${total}`);
console.log(`your average is ${average}`);