function maxSumSubarray(arr){
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currSum = 0;
    //actual Kadane's algo
    // for(let i=0; i<arr.length; i++){
    //     currSum += arr[i];
    //     if(currSum < 0){
    //         currSum = 0;
    //     }
    //     maxSum = Math.max(currSum, maxSum);
    // }


    //1. modification in Kadane's algo for all -ve cases
    // let maxNumber = -Infinity;
    // for(let i=0; i<arr.length; i++){
    //     maxNumber = Math.max(maxNumber, arr[i]);
    //     currSum += arr[i];
    //     if(currSum < 0){
    //         currSum = 0;
    //     }
    //     maxSum = Math.max(currSum, maxSum);
    // }
    // if(maxSum == 0){
    //     maxSum = maxNumber;
    // }



    //2. modification in Kadane's algo for handling all -ve cases
    for(let i=0; i<arr.length; i++){
        currSum += arr[i];
        maxSum = Math.max(currSum, maxSum);
        if(currSum < 0){
            currSum = 0;
        }
    }

    return maxSum;
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];
//let arr = [-1, -2, -3];
console.log(maxSumSubarray(arr));