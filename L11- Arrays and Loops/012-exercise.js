/*
11k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greater than 0.

countPositive([1, -3, 5]) => 2

countPositive([-2, 3, -5, 7, 10]) => 3
*/



function countPositive(nums){
    let positive = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            positive++;
        }
    }
    return positive;
}
console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
