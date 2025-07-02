/* setTimeout() : allows us to run a function in the future
it takes 2 parameter : 
1st parameter is a function which we want to run in future 
2nd how long to wait before running this function  (this is a number in miliseconds :1000 ms = 1sec)




*/

setTimeout(function(){
    console.log('timeout');
} , 3000)  // 3000ms = 3sec , so settimeout will wait for 3 sec and then call this function
// u can check in terminal

console.log('next line');  // this will display 1st and then the above func bcoz of the setTimeOut 

/* small dry run :
1st the JS will see the setTimeout function and then it doesnt immediately runs it it checks the time(in 2nd parameter) , sets it and then JS move towards next code which is clog(next line), so it immediately prints it , atlast timeOut completes then it prints the function value
inshort it just sets up the timer in the background and then goes to the next code
*/


// the another built-in function just like settimeout is setintervale which is same as settimeout but it runs the code in every interval(secs which is given in 2nd parameter)
setInterval(function(){
    console.log('heloo');
} , 3000);  // function is running in every 3 secs

//