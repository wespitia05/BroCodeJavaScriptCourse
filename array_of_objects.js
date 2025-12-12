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

// ---------- filter() ---------- //
// filters and creates an array of just yellow color
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
console.log(yellowFruits);

// filters and creates an array of fruits with less than 100 calories
const lowCalorieFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowCalorieFruits);

// filters and creates an array of fruits with more than 100 calories
const highCalorieFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(highCalorieFruits);

// ---------- reduce() ---------- //
// returns the fruit with the most amount of calories
const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);

// returns the fruit with the least amount of calories
const minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit);