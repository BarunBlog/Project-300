// Remainder
alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2

// Exponentiation **
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)

//Task1
let a = 1, b =1;
let c = ++a; //a=2, b=1, c=2
let d = b++; // a=2, b=1, c=2, d=1
console.log(a+" "+b+" "+c+" "+d); // a=2, b=2, c=2, d=1


//Task2
let a1 = 2;
let x = 1 + (a1 *= 2); // a1 = a1*2 = 2 * 2 = 4.
// x = 1+4 = 5
console.log(a1+" "+x); // 4 5
