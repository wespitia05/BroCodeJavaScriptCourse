// .reduce() = reduce elements of an array to a single value

/*
const prices = [5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

// 5 + 30 = 35
// 35 + 10 = 45, etc etc
function sum(previous, next) {
    return previous + next;
}
*/

const grades = [75, 50, 90, 80, 65, 95];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(maximum);
console.log(minimum);

function getMax(previous, next) {
    return Math.max(previous, next);
}

function getMin(previous, next) {
    return Math.min(previous, next);
}