// String Comparison
//alert( 'Z' > 'A' ); // true
//alert( 'Zoo' > 'Ant' ); // true
//alert( 'Zoo' > 'Zow' ); // true

// Comparison of different datatypes
console.log('2' > 1); // true
console.log('01' == 1); // true

console.log(true == 1); // true
console.log(false == 0);// true


//A funny consequence
let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true
//equality check converts values using the numeric conversion

console.log(a === b); // false
//A strict equality operator === checks the equality without type conversion.

//Task1
/*
5 > 4  // true
"apple" > "pineapple" // false
"2" > "12" // true
undefined == null // true
undefined === null // false
null == "\n0\n"  // false
null === +"\n0\n" // false
*/
