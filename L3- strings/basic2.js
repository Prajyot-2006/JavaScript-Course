// strings also follow order of operation like ()  *  /  +  -

'$' + 2095 + 799  // results in $2095799  which is wrong
// to avoid this , do this
'$' + (2095 + 799)/100  // strings also follow order of operation







/* there are total three ways to represnt string 
1. '...'
2. "..."
3. `...`  template strings  ${} = insert value directly into string   this only works with this type of representation only 
*/

/*two useful features of template strings 
interpolation : ${} = insert value directly into string
multi-line strings : 

// interpolation 
Items(${1+1}):` + `$${(2095+799)/100}`

/* multi-line strings
`some
text`    // gives output as some\ntext  NOTE : it cam only be used in this type only `...`

*/






// in short : use single cots string '' default , if we want to insert a value into the string then use template strings ``