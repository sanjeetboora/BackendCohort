function mergeSortedArrays(A, B){
    let m = A.length;
    let n = B.length;
    let result = new Array(m +n);
    let aIdx = 0;
    let bIdx = 0;
    let rIdx = 0;

    while(aIdx < m && bIdx < n){
        if(A[aIdx] <= B[bIdx]){
            result[rIdx] = A[aIdx];
            rIdx++;
            aIdx++;
        }
        else{
            result[rIdx] = B[bIdx];
            rIdx++;
            bIdx++; 
        }
    }

    while(aIdx < m){
        result[rIdx] = A[aIdx];
        rIdx++;
        aIdx++;
    }

    while(bIdx < n){
        result[rIdx] = B[bIdx];
        rIdx++;
        bIdx++; 
    }
    return result;
}

let A = [12, 17, 19, 25];
let B = [2, 4, 21, 28, 30, 55];
console.log(mergeSortedArrays(A, B));