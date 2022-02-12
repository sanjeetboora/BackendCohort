//function
// function printHello() {
//     console.log("hello");
//     console.log("world");
// }

// printHello(); //call

//function with parameters/arguments
// function greet(name){
//     console.log("hello ", name);
// }
// greet("arnab");

//function with multiple params
//function sum(a, ...restNumbers){
//     console.log(a);
//     console.log(restNumbers);
//     let totalSum = 0;
//     totalSum = totalSum+a;
//     for(let i=0; i < restNumbers.length; i++){
//         totalSum = totalSum + restNumbers[i];
//     }
//     console.log(totalSum);
// }
// sum(10, 11, 12, 7, 90);


//function with return 

function sum(a, b){
    console.log("before");
    return a+b;
    console.log("after"); //this won't get executed
}

let sumOfNumbers = sum(5, 10);
console.log(sumOfNumbers);
