function fib(n){
    if(n <= 1){
        console.log(n);
        return n;
    }
    let result = fib(n-1) + fib(n-2);
    console.log(result);
    return result;
}
fib(5);
