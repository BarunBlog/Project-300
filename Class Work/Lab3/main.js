let x = 10;
console.log(x);

var y = "Hello World";
alert(y);

let arr = [1,2,3,4,5];

for(let i=0;i<5;i++){
    console.log("Item at position "+i+" "+arr[i]);
}

console.log(typeof (arr));

let obj = {
    firstName : 'John',
    lastName : 'Doe',
    age : 21
}
console.log(typeof (obj));

/*
let s = sum(1,2);
console.log(sum);
// it will work
//function is first class citizen in js
 */

function sum(x,y){
    return x+y;
};
let s = sum(1,2);
console.log(sum);


//anonymous function
var sum = function(x,y){
    return x+y;
};

let s1 = sum(1,2);
console.log(s1);

function sumOfThree(x,y,z){
    return x+y+z;
};
let sot = sumOfThree;
console.log(sot(1,2,3));