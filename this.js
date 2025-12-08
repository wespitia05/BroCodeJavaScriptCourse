// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

const person1 = {
    name: "spongebob",
    favFood: "krabby patty",
    sayHello: function() {console.log(`hello i am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating a ${this.favFood}`)}
}

const person2 = {
    name: "patrick",
    favFood: "pizza",
    sayHello: function() {console.log(`hello i am ${this.name}`)},
    eat: function() {console.log(`${this.name} is eating a ${this.favFood}`)}
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();