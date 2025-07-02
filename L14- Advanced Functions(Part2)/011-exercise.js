/*
12n. Create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed. Create this function using .filter() instead of a loop.

removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']
*/

function removeEgg(foods) {
    // If food is 'egg', the inner function returns false
    //   and the food is not included in the result.
    // Otherwise, the inner function returns true
    //   and the food is included in the result. 
    return foods.filter((food) => food !== 'egg');
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));