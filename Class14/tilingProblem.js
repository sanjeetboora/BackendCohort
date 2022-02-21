function ways(n){
    if(n == 1 || n == 2){ //base case
        return n;
    }
    let result = ways(n-1) + ways(n-2);
    return result;
}

console.log(ways(4));