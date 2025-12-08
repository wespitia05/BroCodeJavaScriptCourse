// class = (ES6 feature) provides a more structured and cleaner way to
//         work with objects compared to traditional constructor functions
//         ex. static keyword, encapsulation, inheritance

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    displayProduct() {
        console.log(`product: ${this.name}`);
        console.log(`price: ${this.price.toFixed(2)}`);
    }
}

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pants", 22.50);
const product3 = new Product("underwear", 100.00);

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();