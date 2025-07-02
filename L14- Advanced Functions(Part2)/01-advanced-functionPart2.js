// Arrow function mostly works the same way as a regular function

/* basic example
const arrowFunction = () =>{
    console.log(3)
}
*/
console.log(arrowFunction);  // it will print as it is function
arrowFunction();  // it will call the function


const regularFunction = function(param,param2) {
    param = console.log('hello');
    return 5;
}
regularFunction(1,3);

const arrowFunction = (param,param2) =>{
    param = console.log('hello');
    return 5;
}
arrowFunction(1,3);

/* arrow functions has shortcuts like this 
const arrowFunction = param =>{   // it also can be written like this , if it is only 1 parameter then we dont need to add() while writing
    param = console.log('hello');
    return 5;
}
arrowFunction(1,3);
*/

/*
const oneLine = () => return 1+2;  // if the function is of 1 line then we can also remove the curly brackets */