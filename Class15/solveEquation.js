//a^2 + b^2 = sum, find a, b

function solve(sum){
    let b = 0;
    let a = 0;
    //a*a <= sum or a = Math.sqrt(sum);
    for(a = 0; a*a <= sum; a++){
        let result = Math.sqrt(sum - (a*a));
        //if(result%1 == 0){
        if(Number.isInteger(result)){
            b = result;
            console.log(a, b);
            break;
        }
    }
}
solve(13);

