function printDecreasing(n){
    if(n < 1){ //base case
        return;
    }
    console.log(n); //self work
    printDecreasing(n-1); //recursion
}

printDecreasing(5);
