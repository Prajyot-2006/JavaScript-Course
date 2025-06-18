/* 11h. Create a function addOne(array) that takes an array of numbers and returns an array where each number is increased by 1.
• addOne([1, 2, 3]) => [2, 3, 4]
• addOne([-2, -1, 0, 99]) => [-1, 0, 1, 100]
*/


const array1 = [1 , 2 , 3];
const a = addOne(array1);
console.log(a);

const array2 = [-2 , -1 , 0 , 99];
const b = addOne(array2);
console.log(b);

function addOne(array){
    for(let i=0;i<array.length;i++){
        array[i] = array[i] + 1;
    }

    return array;
}