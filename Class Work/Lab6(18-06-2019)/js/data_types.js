let x = [1,2,3,4];

//console.log(x);

let y = x.map(function (item) {
    return item * 2;
}).filter(function (item) {
    return item !== 6;
});

//console.log(y);

let z = x.filter(function (item) {
    return item !== 3;
});

//console.log(z);

let mapTest = (arr) => {
    let x = [];
    for(let i=0; i< arr.length;i++)
    {
        x.push(arr[i] * 4);
    }
    return x;
}

let t = mapTest(x).map(item => item *
    2);

console.log(t);


let testP = document.getElementById('testParag');
testP.innerText = 'Hello Test Paragraph';