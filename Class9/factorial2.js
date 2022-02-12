let n =5;
let r= 3;

function factorial(num){
    let numFactorial = 1;
    for(let i =1; i<= num; i++){
        numFactorial = numFactorial * i;
    }
    return numFactorial;
}

let ncr = factorial(n) / (factorial(r) * factorial(n-r));
console.log(ncr);

