// the reusable code written here will be used in the es6_module.js
// include export to be used in other files

 export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}

export function getArea(radius) {
    return PI * radius * radius;
}

export function getVolumne(radius) {
    return 4 * PI * radius * radius;
}