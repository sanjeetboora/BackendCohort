//nCr

//n factorial => n!
let n = 5;
let r = 3;

let nFactorial = 1;
for(let i =1; i<= n; i++){
    nFactorial = nFactorial * i;
}
console.log(nFactorial);

let rFactorial = 1;
for(let i =1; i<= r; i++){
    rFactorial = rFactorial * i;
}
console.log(rFactorial);

//n-r factorial = (n-r)!
let nrFactorial = 1;
for(let i =1; i<= n-r; i++){
    nrFactorial = nrFactorial * i;
}
console.log(nrFactorial);

let ncr = nFactorial / (rFactorial * nrFactorial);
console.log(ncr);

