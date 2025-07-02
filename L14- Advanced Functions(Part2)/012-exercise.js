/* 12o. Update exercise 12n to only remove the first 2 eggs from the array. Again, use .filter() instead of a loop.
removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'egg', 'ham'] */

function removeEgg(foods) {
    let eggsRemoved = 0;

    return foods.filter((food) => {
        // If the food is 'egg', we should return false
        // but only if we haven't removed 2 eggs already.
        if(food === 'egg' && eggsRemoved < 2){
            eggsRemoved++;
            return false;
        }
        return true;
    });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));