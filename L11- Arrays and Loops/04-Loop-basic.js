let array = ['make dinner', 'watch movie' , 'wash dishes'];

for(let i=0;i<=(array.length)-1;i++){
    console.log(array[i]);
}

/* shortcut for above code 
let array = ['make dinner', 'watch movie' , 'wash dishes'];
for(let i=0;i<array.length;i++){    use this i<array.length instead
    console.log(array[i]);
}
*/


//  Accumulator pattern(how to get the addition of the array or sum of the array)
const myarray = [1 , 1 , 3];
let total = 0;
for(let i=0;i<myarray.length;i++){
    const num = myarray[i];
    total = total + num;
}
console.log(total);



// if we want to double the array the do like this
const doubledArray = [];
for(let i=0;i<myarray.length;i++){
    const num = myarray[i];
    doubledArray.push(num*2);
}
console.log(doubledArray);