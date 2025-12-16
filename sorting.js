// sort() = method used to sort elements of an array in place
//          sorts elements as string in lexicographic order, not alphabetical
//          lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

fruits.sort();

console.log(fruits);

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

numbers.sort((a, b) => a - b);
// reverse sort
// numbers.sort((a, b) => b - a);

console.log(numbers);