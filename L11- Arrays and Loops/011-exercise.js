/*
11j. Create a function addArrays(array1, array2) that takes 2 arrays of numbers and adds each number in the arrays together.

addArrays([1, 1, 2], [1, 1, 3]) => [2, 2, 5]

addArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
*/



function addArrays(array1, array2) {
    const result = [];
    for(let i = 0; i < array1.length; i++){
        result.push(array1[i] + array2[i]);
    }
    return result;
}
console.log(addArrays([1, 1, 2], [1, 1, 3]));
console.log(addArrays([1, 2, 3], [4, 5, 6]));
