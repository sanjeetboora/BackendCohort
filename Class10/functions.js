//composability
// x + y * z

let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

let [x, y, z] = [1, 10, 2];
//x + (y*z)
// let multiplyResult = multiply(y, z);
// let result = add(x, multiplyResult);
let result = add(x, multiply(y,z));
// console.log(result);

//IIFE - immediately invoked function expressions
((name, text) => {
    console.log("I am a function with name ", name, text);
})("IIFE", "example");


