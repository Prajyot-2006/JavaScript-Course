/*
11n. Create a function countWords(words) that takes an array of strings and returns an object with how many times each string appeared.

countWords(['apple', 'grape', 'apple', 'apple']) => { apple: 3, grape: 1 }
(Hint: you can access a property using a variable: object[variable];
This uses the value inside the variable as the property name.)
*/






function countWords(words){

    const result = {};
    for (let i = 0; i < words.length; i++){
        const word = words[i];


        // result[word] adds/accesses a property using whatever is
        // saved inside the 'word' variable.
        // If word = 'apple', result[word] will do result['apple']
        // If word = 'grape', result[word] will do result['grape']
        if (!result[word]){
            result[word] = 1;
        } 
        else{
            result[word]++;
        }
    }
    
    return result;
}

console.log(countWords(['apple', 'grape', 'apple', 'apple']));