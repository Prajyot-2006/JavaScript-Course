/* Lesson 15 Exercises - External Libraries, MVC
15a. Using DayJS, get the date 5 days after today and display it in the format: '<Month> <Day of Month>' */

import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();
const dateAfter5Days = today.add(5, 'day');
const formattedDate = dateAfter5Days.format('MMMM D');
console.log('5 days after today is : ',formattedDate);  // Example output: July 6



// 15b. Calculate 1 month after today and display in the same format as 15a.
const dateOneMonthLater = today.add(1, 'month');
const formattedMonth = dateOneMonthLater.format('MMMM D');
console.log('One month after today is : ',formattedMonth);   // Example output (if today is 1 July 2025): August 1


// 15c. DayJS has a .subtract(...) method which subtracts time from a date. Calculate 1 month before today and display in same format as 15a.
const oneMonthBefore = today.subtract(1, 'month');
const formattedBeforeMonth = oneMonthBefore.format('MMMM D');
console.log('One month before today : ',formattedBeforeMonth); // Example: June 1 (if today is July 1)


// 15d. Get a date from DayJS and display it in this format: '<Day of Week>' (The format should be 'Monday', 'Tuesday', etc.)
const dayOfWeek  = today.format('dddd');   // e.g. "Tuesday"
console.log('Today is : ',dayOfWeek);


//15e. Create a function isWeekend(date) that takes a DayJS object, and returns whether the date is 'Saturday' or 'Sunday' (hint: use solution from 15d). Test this function with a few different dates.


function isWeekend(date){
    const dayName = date.format('dddd');
    return dayName === 'Saturday' || dayName === 'Sunday'
}

console.log(isWeekend(dayjs()));