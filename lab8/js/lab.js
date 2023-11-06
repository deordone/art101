// index.js - Anon Functions and Callbacks
// Author: David Ordonez
// Date: 6 November 2023


function isEven(x) {
    var result = (x % 2 == 0)
    return result;
}

console.log("Is 1 even? ", isEven(1));
console.log("Is 1 even? ", isEven(1));

var array = [100, 35, 65, 54, 14, 98, 7]
console.log("My array", array);

var checkArray = array.map(isEven);
console.log("Test of evenness of array:", checkArray);

var checkArray = array.map(function(x){
    return x ** 0.5;
})

console.log("Squareroot of array:", checkArray)