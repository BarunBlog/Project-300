/*

function test()
{
    //console.log('Test function');
}

test();

function Person(name,age)
{
    function getName()
    {
        return name;
    }

    function getAge() {
        return age;
    }

    return {
        getName: getName,
        getAge: getAge
    }

}

function Person2(name, age)
{
    this.getName = function () {
        return name;
    };

    this.getAge = function () {
        return age;
    };

    return this;

}

Person2.prototype.getAddress = function()
{
    return "test address";
};

//let john = new Person('John', 30);
let person = new Person2('TestPerson', 18);
console.log(person.getAddress());
//console.log(john);
//console.log(john.getName());
//console.log(john.getAge());

function getName()
{
    return "john";
}

let obj = {
    firstName: getName,
    lastName: 'Doe',
    age: 30
};


console.log(obj.firstName());
console.log(obj.lastName);


function testJsObject(obj)
{
    obj.Name = 'Montu';
}

let testObject = {};
testObject['Name'] = 'John';
testObject.age = 30;

console.log(testObject);

testJsObject(testObject);

console.log(testObject);

function testTypedVar(age)
{
    age = 30;
}

var age = 20;

console.log(age);

testTypedVar(age);

console.log(age);


function print(o) {
    console.log(o)
}

function sum(a, b)
{
    console.log(a+b);
}

function testParamFunc(param, sumParam) {
    //console.log(typeof  param);
    param('Hello Insider!!');
    sumParam(5,6);
}

testParamFunc(print, sum);


var sum = function (a,b) {
    console.log(a+b)
};

 */

let sum = (a,b) => {
  return a + b + 5;
};

let test = a => a + 5

console.log(sum(5,6));
console.log(test(5));


/*function testA() {
    return function (a) {
        console.log(a)
    }
}*/

let testA = () => a => console.log(a)

testA()(6);