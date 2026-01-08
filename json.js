// JSON = (javascript object notation) data-interchange format
//        used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string
//        JSON.parse() = converts a JSON string to a JS object

const names = ["Spongebob", "Patrick", "squidward", "Sandy"];
const person = {
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
};
const people =
[{
    "name": "Spongebob",
    "age": 30,
    "isEmployed": true
},
{
    "name": "Patrick",
    "age": 34,
    "isEmployed": false
},
{
    "name": "Squidward",
    "age": 50,
    "isEmployed": true
},
{
    "name": "Sandy",
    "age": 27,
    "isEmployed": false
}]

// converts json objects into a string
const jsonNames = JSON.stringify(names);
const jsonPerson = JSON.stringify(person);
const jsonPeople = JSON.stringify(people);

console.log(names);
console.log(jsonNames);
console.log(person);
console.log(jsonPerson);
console.log(people);
console.log(jsonPeople);