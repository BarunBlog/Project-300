/*
let testButton = document.getElementById("testButton");

console.log(testButton)

let count = 0;

let buttonClicked = function()
{
    ++count;
    console.log('Button Clicked: ' + count);
};

testButton.addEventListener('click', buttonClicked);

testButton.addEventListener('click', function () {
    console.log('Another Button Click Function');
});


testButton.addEventListener('mouseover', function () {
    console.log('Mouse Enter');
});

testButton.addEventListener('mouseleave', function () {
    console.log('Mouse Out');
});


testButton.addEventListener('mousedown', function () {
    console.log('Mouse Down Now');
});


testButton.addEventListener('mouseup', function () {
   console.log('Mouse Up Now');
});

*/

function formSubmitted(event) {
    event.preventDefault();

    //alert('test');

    //let string = prompt('Enter your Name');
    //console.log(string);

    //let form = document.getElementById('form');
    //let formData = new FormData(form);
    //console.log(formData.get('FirstName'));

}