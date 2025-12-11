// nested objects = objects inside of other Objects
//                  allows you to represent more complex data structures
//                  child objects is enclosed by a parents object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingVart{Keyboard{}, Mouse{}, Monitor{}}

/*
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
*/

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street, city, country) {
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("spongebob", 30, "124 conch st.", "bikini bottom", "int. water");
const person2 = new Person("patrick", 37, "128 conch st.", "bikini bottom", "int. water");
const person3 = new Person("squidward", 45, "126 conch st.", "bikini bottom", "int. water");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.street);

console.log(person2.name);
console.log(person2.age);
console.log(person2.address);
console.log(person2.address.street);