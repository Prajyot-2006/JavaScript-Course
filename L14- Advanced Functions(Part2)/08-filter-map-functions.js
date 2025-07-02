/*
filter() — Used to remove items from an array
It keeps only those items that match a condition.
*/

const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers); // 👉 [2, 4]


// supersimpledev's eg
[1,2,-3].filter((value , index) => {
    return value>=0
});



/*
 map() — Used to change items in an array
It modifies every item in the array and returns a new one.
*/

const nums = [1, 2, 3, 4, 5];

const doubled = nums.map(function(num) {
  return num * 2;
});

console.log(doubled); // 👉 [2, 4, 6, 8, 10]


// supersimpledev's eg:
console.log( [1,2,3].map( (value,index) => {  
    return 10+1;  // it will take each value in the og array and add 10 and put it in the new array
}) );

console.log( [1,2,3].map( (value,index) => {  
    return value*2;  // it will take each value in the og array and mul by 2 and put it in the new array
}) );

console.log( [1,2,3].map(value => value * 2) ); // this code does the same thing as the code above
/* what .map() does : 
1. it creates a new array[]
2. whatever we return => added to new array
*/