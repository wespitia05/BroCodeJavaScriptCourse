// logical operators = used to combine or manipulate boolean values
//                     (true or false)

//                     AND = &&
//                     OR  = ||
//                     NOT = !

const temp = 200;
const isSunny = false;

// using &&
/*
if(temp > 0 && temp <= 30) {
    console.log("the weather is GOOD")
}
*/

// using ||
/*
if(temp <= 0 || temp > 30) {
    console.log("the weather is BAD");
}
else {
    console.log("the weather is GOOD");
*/

if(!isSunny) {
    console.log("it is CLOUDY");
}
else {
    console.log("it is SUNNY")
}