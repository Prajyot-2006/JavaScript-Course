/*
11v. We’ll do the famous FizzBuzz problem. Create a loop that displays 1 to 20 in the console. If the number is divisible by 3, display 'Fizz' instead of the number. If it’s divisible by 5, display 'Buzz' instead. If it’s divisible by 3 and 5, display 'FizzBuzz' instead. (Reminder: divisible by 3 means num % 3 === 0).
  • 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, ..., 13, 14, FizzBuzz, 16, 17, ...
*/

for(let i=1;i<=20;i++){

    if(i%3==0 && i%5==0){
        console.log('FizzBuzz');
    }
    else if(i%3==0){
        console.log('Fizz');
    }
    else if(i%5==0){
        console.log('Buzz');
    }
    else{
        console.log(i);
    }

}

/*
🔹 Only one block runs — the first one that matches the condition.
Once a condition is true, the rest of the else if or else parts are skipped.
*/