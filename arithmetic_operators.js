// arithmetic operators = operands (values, variables, etc)
//                        operators (+ - * /)
//                        ex 11 = x + 5;

let students = 30; // class size

// students = students + 1; equals 31
// students = students - 1; equals 29
// students = students * 2; equals 60
// students = students / 2; equals 15
// students = students ** 2; equals 900 
// students = students % 2; equals 0

// AUGMENTED ASSIGNMENT OPERATORS //
// students += 1; equals 31
// students -= 1; equals 29
// students *= 2; equals 60
// students /= 2; equals 15
// students **= 2; equals 900
// students %= 2; equals 0

// increases variable by 1; increment operator
// students++;
// decreases variable by 1; decrement operator
// student--;

console.log(students);

/*
    operator precedence:
        1. parenthesis ()
        2. exponents
        3. multiplication, division, modulo
        4. addition, subtraction
*/

// 4^2 = 16  =>  2 * 3 = 6  => 1 + 6 + 16 = 23
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result)

// 12 % 5 = 2  =>  8 / 2 = 4  =>  2 + 4 = 6
let result_1 = 12 % 5 + 8 / 2;
console.log(result_1)

// 2 + 5 = 7  =>  2^7 = 128  => 6 / 128 = .046875
let result_2 = 6 / 2 ** (2 + 5);
console.log(result_2);