// An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user = new Object();
let user1 = {};

let user3 = {
  name: "John",
  age: 30,
  "likes birds" : true
};
// “key: value” pair, where key is a string (also called a “property name”), and value can be anything.

console.log(user3.name);
console.log(user3.age);

// setting value
user3.isAdmin = true;
user3["location"] = "Sylhet";

// delete operator
delete user.age;
