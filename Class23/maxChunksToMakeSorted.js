function maxChunks(arr){
    let n  = arr.length;
    let indexSum =0;
    let numSum =0;
    let chunks =0;
    for(let i=0; i<n; i++){
        indexSum = indexSum + i;
        numSum = numSum + arr[i];
        if(indexSum == numSum){
            chunks++;
        }
    }
    return chunks;
}
let arr = [1, 0, 2, 4, 3];
console.log(maxChunks(arr));