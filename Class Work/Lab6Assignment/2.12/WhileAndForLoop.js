// while
let i = 0;
while (i) { // shows 0, then 1, then 2
  console.log( i );
  i++;
}

// do while
i = 0;
do{
  console.log(i);
  i++;
}while (i<3);

// fol
for (i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}

// Labels for break/continue
outer:for(i = 0; i<3 ; i++){
  for(let j = 0; j<3 ; j++){

    let input = prompt(`Value at coords (${i},${j})`,'');
    // what if I want to exit from here to Done (below)?

     if (!input)
      break outer;
  }
}
alert('Done!');
