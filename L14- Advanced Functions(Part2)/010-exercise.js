/*
12m. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by num. Create this function using .map() instead of a loop.

addNum([1, 2, 3], 2) => [3, 4, 5]

addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
Bonus: try to use the one-line shortcut in your solution.
*/

function addNum(array, num) {
    // When there is only 1 parameter,
    // the brackets are optional. So we
    // can also write: value => value + num
    return array.map((value) => value + num);
}

console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));