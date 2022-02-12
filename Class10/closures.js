//closures => closure is a function having access to it's parent scope,
//even after the parent function has closed;

var add = function(){
    let a = 10;
    // let sum = a + 20;
    // return sum;
    return function sum(){
        console.log(a + 10);
    }
    //return sum;
}
// console.log(add());
add()();
let callAdd = add(); //return sum()
callAdd();
