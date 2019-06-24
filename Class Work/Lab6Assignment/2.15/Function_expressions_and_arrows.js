let sayHi = function(){
  let message = 'Hello'
  console.log(message);
};

console.log(sayHi);
sayHi();

// Copy function to a variable
function copyFunction(){
  console.log('Hi');
}
let func = copyFunction;
let func1 = sayHi;
func();


// Callback functions
// passing functions as values and using function expressions.
/*function ask(question, yes, no){
  if(confirm(question))
    yes();
  else
    no();
}
function showOk(){
  alert('You agreed.');
}
function showCancel(){
  alert('You canceled the execution.');
}
ask("Do you agree?", showOk, showCancel);*/
//The arguments of ask are called callback functions or just callbacks.
//The idea is that we pass a function and expect it to be “called back” later if necessary
function ask(question, yes, no){
  if(confirm(question))
    yes();
  else
    no();
}
ask("Do you agree?",

    function(){
      alert('You agreed');
    },

    function(){
      alert('You canceled the execution');
    }
)
