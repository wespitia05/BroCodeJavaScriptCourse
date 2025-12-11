// nested objects = objects inside of other Objects
//                  allows you to represent more complex data structures
//                  child objects is enclosed by a parents object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingVart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "spongebob squarepants",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "124 conch st.",
        city: "bikini bottom",
        country: "int. water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
// access a property in a nested object
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

// accessing using a for loop (same as above)
for (const property in person.address) {
    console.log(person.address[property]);
}