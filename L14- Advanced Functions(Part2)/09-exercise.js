/*
12j. Create an arrow function called ‘multiply’ that takes 2 numbers, multiplies them together, and returns the result.

multiply(2, 3) => 6
multiply(7, 10) => 70 

const multiply = (num1,num2) => {
    return num1*num2;
}
console.log( multiply(2,3) );
console.log( multiply(7, 10)) ;
*/

// 12k. Continuing from exercise 12j, write the arrow function on one line (if you already did this, skip this exercise).
/*
const multiply = (num1,num2) => return num1*num2;  ✅ Rule: If you use { } after =>, you must use return. If you don’t use { }, the expression is returned automatically.

console.log( multiply(2,3) );
console.log( multiply(7, 10));
*/
// correct soln :
const multiply = (num1,num2) => num1*num2;   

console.log( multiply(2,3) );
console.log( multiply(7, 10));
