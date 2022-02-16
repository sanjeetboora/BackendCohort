function getPair(arr, targetSum){
    arr.sort((a, b) => a-b);

    let start  =0;
    let end = arr.length -1;
    while(start < end){
        let currSum = arr[start] + arr[end];
        console.log(arr[start], " + ", arr[end], " = ", currSum);
        if(currSum < targetSum ){
            start++;
        }
        else if(currSum > targetSum){
            end--;
        }
        else{
            console.log("pair found ", arr[start], arr[end]);
            break;
        }
    }
}

let arr = [2, 5, 10, 6, 4, 1];
let sum = 10;
getPair(arr, sum);