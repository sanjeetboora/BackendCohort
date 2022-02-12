//hoisting
//greet();
//helloWorld(); //error helloWorld not defined
function greet(){
    console.log("hellooooo");
}
//greet();

//console.log(greet);

// pass by value (primitives)
// function welcome(name){
//     name = "hellow " + name;
//     console.log(name);
// }

// let student = "anjali";
// console.log(student);
// welcome(student);
// console.log(student);

//pass by reference
// function printArr(arr) {
//     arr[0] = 60;
//     console.log(arr);
// }

// let myArray = [1, 2, 3];
// console.log(myArray);
// printArr(myArray);
// console.log(myArray);


//impure functions
let num = 10;
//console.log(num);

function changeValue(){
    num = num + 10;
}

changeValue();
//console.log(num);

// pure functions
// let a = 10;
// console.log(a);
// function sum(a, b){
//     console.log(a+b);
// }

// sum(a, 20);
// console.log(a);
