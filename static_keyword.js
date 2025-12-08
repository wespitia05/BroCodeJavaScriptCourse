// static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that class (class owns anything static, not objects)

/*
class MathUtil {
    static PI = 3.14159;

    static getDiameter(radius) {
        return radius * 2;
    }

    static getCircumference(radius) {
        return 2 * this.PI * radius;
    }

    static getArea(radius) {
        return this.PI * radius * radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
*/

class User {
    static userCount = 0;

    constructor(username) {
        this.username = username;
        User.userCount++;
    }

    sayHello() {
        console.log(`hello my username is ${this.username}`);
    }

    static getUserCount() {
        console.log(`there are ${User.userCount} users online`);
    }
}

const user1 = new User("spongebob");
const user2 = new User("patrick");
const user3 = new User("sandy");

console.log(user1.username);
user1.sayHello();
console.log(user2.username);
user2.sayHello();
console.log(user3.username);
user2.sayHello();

User.getUserCount();