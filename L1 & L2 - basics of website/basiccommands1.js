// these three basic commands which we can use in console after inspecting a website (inspect in a blank side)

alert('hello');  // pops up a message hello
document.body.innerHTML = 'hello';  // prints hello message in the whole body page
20 + 9 + 8 // does maths calculation

Math.round(2.2) // gives nearest integer , gives 2 as nearest integer
Math.round(2.9)  // gives 3 

/* in JS and many more lang there is a problem with floating numbers it cant print float numbers calculation accurately 
// for eg
(2095 + 799)/100 = 28.94
28.94 * 0.1 = 2.894
((2095 + 799)/100) * 0.1 = 2.8930000000000002  // inaccurate

*/

/* eg which supersimpledev explained 
basket ball price is $20.95 and tshirt price $7.99 tax is 10%
to add this float first write it as yenn form (not in decimal,float)
(2095 + 799)/100 = 28.94  // divide by 100 to convert again in dollar coz 1 dollar = 100 yenn
this 28.94 is total amount of both products 
now for tax which is 10% : answer should be 2.89
if we do like this  ((2095 + 799)/100)*0.1 = 2.00000000005 it is not showing accurate ans 
coz we have to do like this , why coz we have written it as yenn so perform all operation like addistion , tax Multiplication in yenn first then for converting it into dolar just divide by 100 coz we know 1 dollar = 100yenn
((2095 + 799)*0.1)/100 = 2.89  // just do yenn operation first atlast divide by 100 for converting into dollar 
*/
Math.round(((2095 + 799)*0.1)/100)