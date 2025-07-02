// 12a. Create a variable called ‘add’ and save a function inside. This function will console.log(2 + 3); Run the function twice.

const add = function(){
    console.log(2+3);
}
add();
add();

/* 12b. Continuing from exercise 12a, create a function runTwice(fun) that takes a function (as a parameter) and runs it twice.
• runTwice(function() { console.log('12b'); }); => console.log('12b') twice
• runTwice(add); => console.log(5) twice */

function runTwice(fun){
    fun();
}

runTwice(function() { console.log('12b'); });
runTwice(function() { console.log('12b'); });
runTwice(add);
runTwice(add);