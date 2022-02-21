function lexicoPrint(level, n){
    //base case
    if(level > n) return;
    console.log(level);
    if(level == 0){
        for(let i =1; i<= 9; i++){
            lexicoPrint(10* level + i, n);
        }
    }
    else{
        for(let i =0; i<= 9; i++){
            lexicoPrint(10* level + i, n);
        }
    } 
}
lexicoPrint(0,1000);
