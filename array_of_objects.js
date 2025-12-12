// arrays of objects

const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

/*
console.log(fruits[0].name);
console.log(fruits[1].color);
console.log(fruits[2].calories);

// adds an element
fruits.push({name: "grapes", color: "purple", calories: 62});
// removes an element
// fruits.pop();
// removes element at certain indeces
// fruits.splice(1, 2);
console.log(fruits);
*/

// ---------- forEach() ---------- //
// displays calories only
fruits.forEach(fruit => console.log(fruit.calories));
// displays names only
fruits.forEach(fruit => console.log(fruit.name));
// displays color only
fruits.forEach(fruit => console.log(fruit.color));

// ---------- map() ---------- //
// creates an array with just fruit names
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

// creates an array with just fruit colors
const fruitColors = fruits.map(fruit => fruit.color);
console.log(fruitColors);

// creates an array with just fruit calories
const fruitCalories = fruits.map(fruit => fruit.calories);
console.log(fruitCalories);