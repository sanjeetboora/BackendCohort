function getTriplet(arr, targetSum){
    arr.sort((a, b) => a-b);

   for (let i=0; i< arr.length-3; i++){
       let firstEle = arr[i];
       let start  = i+1;
       let end = arr.length -1;
       while(start < end){
           let currSum = firstEle + arr[start] + arr[end];
           console.log(firstEle, " + " , arr[start], " + ", arr[end], " = ", currSum);
           if(currSum < targetSum ){
               start++;
           }
           else if(currSum > targetSum){
               end--;
           }
           else{
               console.log("triplet found ", firstEle, arr[start], arr[end]);
               return;
           }
       }
   }
}

let arr = [2, 5, 10, 6, 4, 1];
let sum = 10;
getTriplet(arr, sum);