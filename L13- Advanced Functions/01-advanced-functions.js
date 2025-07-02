// A function is just another type of value 


function greeting(){
    console.log('Hello');
}

greeting();

const a = function greeting(){
    console.log('hello');
}
console.log(a);
console.log(typeof a);

// we can also run the function inside variable 'a' just like this 
a();  // we can acess the function using this variable name , so there is no need to write greeting inFact we can actually delete it
/*
const a = function(){   // This is called as Anonymous Function(a function without a name)
    console.log('hello');
}
*/


// we can use function inside an object also 
const obj1 = {
    num: 2,
    fun: function bankai(){   // Remember this is called a method (function saved inside a object)
        console.log('BANKAI');
    }
}
obj1.fun();