// switch = can be an efficient replacement to many else if statements

let day = "pizza";

// add break after each case, otherwise we will run all code after that line
switch(day) {
    case 1:
        console.log("it is monday");
        break;
    case 2:
        console.log("it is tuesday");
        break;
    case 3:
        console.log("it is wednesday");
        break;
    case 4:
        console.log("it is thursday");
        break;
    case 5:
        console.log("it is friday");
        break;
    case 6:
        console.log("it is saturday");
        break;
    case 7:
        console.log("it is sunday");
        break;
    default:
        console.log(`${day} is not a day`);
}