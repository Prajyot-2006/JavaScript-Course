/* 11a. Create an array of numbers: const nums = [10, 20, 30]; Modify the last value in this array and change it to 99.

const nums = [10, 20, 30];
nums[2] = 99
console.log(nums);
*/

/* 11b. Create a function getLastValue(array) that takes an array and returns the last value in the array. Hint: array indexes start at 0 so the last index is the number of values in the array minus 1
(lastIndex = array.length - 1).

getLastValue([1, 20, 22, 24, 5]) => 5

getLastValue(['hi', 'hello', 'good']) => 'good'

// last value = index[array length - 1]


const array = [1,2,3,4];
const a = getLastValue(array);


function getLastValue(array){
    let lastValue = array[array.length-1];
    return lastValue;
}
console.log(a);
*/


/*
11c. Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched).

arraySwap([1, 20, 22, 24, 5]) => [5, 20, 22, 24, 1]

arraySwap(['hi', 'hello', 'good']) => ['good', 'hello', 'hi']
*/

const array1 = [1,3,4,6];
console.log(array1);  // before swapping
const b = arraySwap(array1);
console.log(b);  // after swapping

const array2 = ['hi' , 'hello' , 'good'];
console.log(array2);
const c = arraySwap(array2);
console.log(c);

function arraySwap(array){
    let firstElement = array[0];
    let lastElement = array[array.length-1];

    array[0] = lastElement;
    array[array.length-1] = firstElement
    return array;
}








