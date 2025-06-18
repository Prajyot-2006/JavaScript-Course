/*
11r. Create a function removeEgg(foods) that takes an array of strings and returns an array where the string 'egg' is removed. (Hint: loop through the array and check if each string is 'egg'. If it is 'egg', use ‘continue;’ to skip it. If it’s not 'egg', add it to the result).
  • removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']


function removeEgg(foods){
    for(let i = 0; i < foods.length; i++){
        if(foods[i] === 'egg'){
            foods.splice(i, 1); // Remove 1 element at index i
            i--; // Decrease i to stay at same index after removal
        }
    }
    return foods;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); 
*/

/*
11s. Update exercise 11r to only remove the first 2 eggs from the array.
  • removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham']
*/


function removeEgg(foods){
    let eggCount = 0;
    for(let i = 0; i < foods.length; i++){
        if(foods[i] === 'egg'){
            eggCount++
            if(eggCount<=2){
                foods.splice(i, 1); // Remove 1 element at index i
                i--; // Decrease i to stay at same index after removal                
            }
        }
    }
    return foods;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); 