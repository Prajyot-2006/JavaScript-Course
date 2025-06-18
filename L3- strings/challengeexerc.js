/* print as it is as result :
1. Items(4):57.88'   // 2 basketball each : $20.95  2 tshirt each : $7.99
2. 'Shipping & handling:$9.98'  // shipping each $4.99
*/
`Items(${1+1+1+1}):` + `${ ( 2*2095 + 2*799 )/100 }`
`Shipping & handling:` + `$${ (2*499)/100 }`