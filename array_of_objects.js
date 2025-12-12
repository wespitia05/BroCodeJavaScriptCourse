// arrays of objects

const fruits = [{name: "apple", color: "red", calories: 95}, 
                {name: "orange", color: "orange", calories: 45}, 
                {name: "banana", color: "yellow", calories: 105}, 
                {name: "coconut", color: "white", calories: 159}, 
                {name: "pineapple", color: "yellow", calories: 37}];

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