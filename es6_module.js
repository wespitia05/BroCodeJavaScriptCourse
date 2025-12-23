// ES6 Module = an external file that contains reusable code
//              that can be imported into other javascript files.
//              write reusable code for many different apps.
//              can contain variables, classes, functions ... and more
//              introduced as part of ECMAScript 2015 update

// import the functions and variables from the mathutil file
import {PI, getCircumference, getArea, getVolume} from './es6_module_mathutil';

console.log(PI);

const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(10);
console.log(`${area.toFixed(2)}cm^2`);

const volume = getVolume(10);
console.log(`${volume.toFixed(2)}cm^3`);