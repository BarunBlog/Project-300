let message = "hello";
message = 123456;

// Numbers
let n = 123;
n = 12.345;

n = Infinity;
console.log(n-1);// Infinity

n = -Infinity;
console.log(n); //-Infinity

// NaN represents a computational error. It is a result of an incorrect
// or an undefined mathematical operation
n = -Infinity+Infinity;
console.log(n); //NaN


// Strings
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed ${str}`;//can embed Hello
/*
3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`. They allow us to embed variables and expressions into a string by wrapping them in ${…}
*/

let name = "John";

// embed a variable
alert( `Hello, ${name}!` ); // Hello, John!



// A boolean
let nameFieldChecked = true; // yes, name field is checked
let ageFieldChecked = false; // no, age field is not checked

// null
let myAge = null;

// undefined
let x;
console.log(x);


//Task1
let myName = "Ilya";
alert(`hello ${1}`); // hello 1

alert(`hello ${"myName"}`); // hello myName

alert(`hello ${myName}`);//hello Ilya
