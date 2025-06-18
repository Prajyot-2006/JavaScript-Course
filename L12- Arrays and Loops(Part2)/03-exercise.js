/*
11o. Create an array of strings, loop over the array, and check if the string 'search' is inside the array. If it is, console.log() the index of 'search' in the array. If not, console.log ‘-1’.
  • ['hello', 'world', 'search', 'good'] => console.log(2)
  • ['not', 'found'] => console.log(-1)

soln:

const array = ['prajyot' , 'pranav' , 'johCena' , 'Brock' , 'search'];
for(let i=0;i<array.length;i++){
    if(array[i] == 'search'){
        console.log(i);
    }
}
*/


/*
11p. Modify 11o so that if 'search' appears multiple times in the array, it will console.log() the index of the first appearance of 'search'. Use break;
  • ['hello', 'world', 'search', 'good', 'search'] => console.log(2)

soln:

const array1 = ['prajyot' , 'pranav' , 'search' , 'search' , 'johCena' , 'Brock' , 'search'];
for(let i=0;i<array1.length;i++){
    if(array1[i] == 'search'){
        console.log(i);
        break;
    }
}

*/


/*
11q. Create a function findIndex(array, word) that searches an array for a string (in the ‘word’ parameter) and returns the index of the first appearance of the string. If it doesn’t exist in the array, return -1.
  • findIndex(['green', 'red', 'blue', 'red'], 'red') => 1
  • findIndex(['green', 'red', 'blue', 'red'], 'yellow') => -1
*/

function findIndex(array, word){
    for(let i=0;i<array.length;i++){
        if(array[i] === word){
            console.log(i);
            break;
        }
    }
}


findIndex(['green', 'red', 'blue', 'red'], 'red')
findIndex(['green', 'red', 'blue', 'red'], 'yellow')