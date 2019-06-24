function sayHi() {
  var phrase = "Hello"; // local variable, "var" instead of "let"

  alert(phrase); // Hello
}

sayHi();

alert(phrase); // Error, phrase is not defined


if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); // true, the variable lives after if


for (var i = 0; i < 10; i++) {
  // ...
}

alert(i); // 10, "i" is visible after loop, it's a global variable


//var declarations are processed when the function starts
function sayHi() {
  phrase = "Hello";

  alert(phrase);

  var phrase;
}
sayHi();



function sayHi() {
  phrase = "Hello"; // (*)

  if (false) {
    var phrase=true;
  }

  alert(phrase); // Will show Hello
}
sayHi();
