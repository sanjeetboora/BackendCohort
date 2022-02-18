function printDecreasingIncreasing(n){
    if(n < 1){ //base case
        return;
    }
    console.log(n); //self work
    printDecreasingIncreasing(n-1); //recursion
    console.log(n); //self work
}

printDecreasingIncreasing(5);
