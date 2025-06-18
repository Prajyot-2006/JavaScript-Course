/*
11u. In exercise 11t, one problem with .reverse() is that it doesn’t create a copy of the array it is reversing. It modifies the original array. Update the code so the function does not modify the original array. (Hint: use the .slice() method to create a copy of an array’s values).
  • const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
  • console.log(removeEgg(foods)) => ['egg', 'apple', 'ham']
  • console.log(foods) => ['egg', 'apple', 'egg', 'egg', 'ham']
*/

/*
const array1 = [1,2,3,4];
const array2 = array1;
array2.reverse();
console.log(array1);  // og array is modifying
console.log(array2);  
*/


/* first of all undertand the concept of .slice() : 
// 🔍 Example 1: Copying the whole array
const original = ['egg', 'apple', 'ham'];
const copy = original.slice();

console.log(copy);     // ['egg', 'apple', 'ham']
console.log(original); // ['egg', 'apple', 'ham']

// 🔍 Example 2: Slicing part of an array
const foods = ['egg', 'apple', 'ham', 'banana'];
const part = foods.slice(1, 3);  // from index 1 to 2

console.log(part);  // ['apple', 'ham']

*/

function removeEgg(foods){
    const copyFoods = foods.slice();  // made an copy
    copyFoods.reverse();
    let eggCount = 0;
    for(let i = 0; i < copyFoods.length; i++){
        if(copyFoods[i] === 'egg'){
            eggCount++
            if(eggCount<=2){
                copyFoods.splice(i, 1); // Remove 1 element at index i
                i--; // Decrease i to stay at same index after removal                
            }
        }
    }
    copyFoods.reverse();
    console.log('The original array :',foods);
    return copyFoods;
}

console.log('The updated or Copied array : ',removeEgg(['egg', 'apple', 'egg', 'egg', 'ham'])); // apple egg ham


