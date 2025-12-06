// .reduce() = reduce elements of an array to a single value

const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

// 5 + 30 = 35
// 35 + 10 = 45, etc etc
function sum(previous, next) {
    return previous + next;
}