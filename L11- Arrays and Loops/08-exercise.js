/* 11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.
• [1, 2, 3] => [2, 3, 4]
*/

const arr = [1, 2, 3];
const result = [];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
    result.push(arr[i] + 1);
}
console.log(result);

