// function can be assigned to a variable
var sum = function(a, b){
    return a+b;
}

// function can be passed as an argument
let greet = function( myName ){
    console.log("hello", myName());
}

let name = function(){
    return "Vijay";
}
//greet(name);

let student = function(){
    return "students";
}
//greet(student);

// function can be returned from a function
let welcome = function(){
    return function(){
        console.log("hello folks");
    }
}

// welcome();
// console.log(welcome);
// console.log( welcome() );
// let resultFunc = welcome();
// console.log(resultFunc);
// resultFunc();

// welcome()();


// =====================

let printName = function(){
    return function(){
        return function(){
            return function(){
                console.log("soubhik");
            }
        }
    }
}
printName();
printName()();
printName()()()();