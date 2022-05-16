function median(A, B){
    let n = A.length;
    let m = B.length;

    if(n > m){return median(B, A)};

    let start =0;
    let end = n;
    let mergedArrayMid = Math.floor((n+m+1)/2); //total no. of elements on left

    while(start <= end){
        let mid = Math.floor((start + end)/2);
        let leftASize = mid;
        let leftBSize = mergedArrayMid - leftASize;

        let leftA = leftASize > 0 ? A[leftASize-1] : Number.MIN_VALUE;
        let leftB = leftBSize > 0 ? B[leftBSize-1] : Number.MIN_VALUE;
        let rightA = leftASize < n ? A[leftASize] : Number.MAX_VALUE;
        let rightB = leftBSize < m ? B[leftBSize]: Number.MAX_VALUE;

        if(leftA <= rightB && leftB <= rightA){ //median found
            if((m+n)%2 == 0){//even
                return Math.floor((Math.max(leftA, leftB) + Math.min(rightA, rightB))/2);
            }else{//odd
                return Math.max(leftA, leftB);
            }
        }

        else if(leftA > rightB){
            end = mid-1; //move towards left
        }
        else{
            start = mid+1; //move towards right
        }
    }
    return NaN;
}


let A = [7, 12, 14, 15];
let B = [1, 2, 3, 4, 11];

console.log(median(A, B));

    // //even
    // n= 4
    // m = 6

    // n+m+1 => 11
    // (n+m+1) /2 => 5//5 elements on left and 5 on right

    // //odd
    // n= 4
    // m = 5

    // n+m+1 => 10
    // (n+m+1) /2 => 5 //5 elements on left and 4 on right