/*
11i. Create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by ‘num’.

addNum([1, 2, 3], 2) => [3, 4, 5]

addNum([1, 2, 3], 3) => [4, 5, 6]

addNum([-2, -1, 0, 99], 2) => [0, 1, 2, 101]
*/



addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);

function addNum(array , num){
    for(let i=0;i<array.length;i++){
        array[i] = array[i] + num;
    }
    console.log(array);
}