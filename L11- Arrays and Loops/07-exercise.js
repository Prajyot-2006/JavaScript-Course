/*
11d. Create a for loop that counts up from 0 to 10, but counts up by 2
(0, 2, 4, ..., 8, 10).
*/

for(let i=0;i<=10;i=i+2){
    console.log(i);
}
console.log('\n');

// 11e. Create a for loop that counts down from 5 to 0.
for(let i=5;i>=0;i--){
    console.log(i);
}

console.log('\n');
// 11f. Do exercises 11d and 11e, but using while loops.

let i = 0;
while(i<=10){
    console.log(i);
    i = i + 2;
}

let k = 5;
while(k>=0){
    console.log(k);
    k--;
}

