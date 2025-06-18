/*
11t. Arrays have a method called .reverse(), which reverses the order of the values in the array. Using .reverse(), update exercise 11s to only remove the last 2 eggs from the array.
  • removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['egg', 'apple', 'ham']
*/

// new concept :
const array = [1,2,3,4];
array.reverse();
console.log(array);  // [4,3,2,1]


function removeEgg(foods){
    foods.reverse();
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
    foods.reverse();
    return foods;
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); // apple egg ham


