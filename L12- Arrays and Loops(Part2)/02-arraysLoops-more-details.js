// arrays are also reference like objects

const array1 = [1,2,3];   // this value doesnt actually stored in array1 variable it stored something inside computer's memory , which the array1 variable is referring it 
const array2 = array1;   // this variable is the copy of that reference
array2.push(4);
console.log(array1);
console.log(array2);

// to avoid this behavoiur 


for(let i=0;i<=10;i++){
    console.log(i);
    if(i==3){
        continue;  // skip 1 iteration
    }

    if(i==8){
        break;  // breaks the iteration
    }
}