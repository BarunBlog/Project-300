let userName = 'John'

function showMessage(){
  userName = 'Bob';
  let message = "Hello, " + userName;
  console.log(message);
}
console.log(userName);//John
showMessage();
//console.log(message);//// <-- Error! The variable is local to the function
console.log(userName);//Bob
console.log();


//Parameters
function showMessageWithParams(from, text="No text given"){
  console.log(from + ': ' + text);
}
showMessageWithParams('Ann', 'Hello!');
showMessageWithParams('Ann', "What's up?");
showMessageWithParams('Ann');
console.log();


// Returning a value
function sum(a,b){
  return a+b;
}
console.log("sum is "+sum(5,6));

//A function with an empty return or without it returns undefined

function doNothing() { /* empty */ }

alert( doNothing() === undefined ); // true


//Task2
// Using ? mark operator
function checkAge(age){
  return (age > 18) ? true : confirm('Did parents allow you?');
}
// Using ||
function checkAge1(age){
  return (age > 18) || confirm('Did parents allow you?')
}
checkAge(17)

//Task3
function min(a,b){
  if(a<b){
    return a;
  }
  else {
    return b;
  }
}
console.log(min(2,5)+" "+min(3,-1)+" "+min(1,1));

// Task4
function pow(x,n){
  let pow = x;
  for(let i = 1; i < n; i++){
     pow = pow * pow
  }
  return pow;
}
console.log(pow(3,2));
console.log(pow(3,3));
console.log(pow(2,4));
