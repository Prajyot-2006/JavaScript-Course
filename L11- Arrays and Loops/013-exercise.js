/*
Challenge Exercises
11l. Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop instead of using something like Math.min).

minMax([1, -3, 5]) => { min: -3, max: 5 }

minMax([-2, 3, -5, 7, 10]) => { min: -5, max: 10 }
*/




function minMax(nums){

// We'll set the starting values of min and max
// as the first value in the array. (This is
// just one way to set the starting values. You
// can use another way if you like.)
    const result = {
        min: nums[0],
        max: nums[0]
    };

    for (let i = 0; i < nums.length; i++) {
        const value = nums[i];
        // If the value is less than the min,
        // update the min.
        if(value<result.min){
            result.min = value;
        }

        // If the value is greater than the max,
        // update the max.
        if (value > result.max) {
            result.max = value;
        }
    }

        return result;
}

      console.log(minMax([1, -3, 5]));
      console.log(minMax([-2, 3, -5, 7, 10]));





