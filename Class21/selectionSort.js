function findIdxOfMinEle(arr, start){
    let minIdx = start;
    for(let j = start; j<arr.length; j++){
        if(arr[minIdx] > arr[j]){
            minIdx = j;
        }
    }
    return minIdx;
}
function selectionSort(arr){

    for(let i =0; i<arr.length; i++){
        let minEleIdx = findIdxOfMinEle(arr, i);
        if(i != minEleIdx){
            let temp = arr[i];
            arr[i] = arr[minEleIdx];
            arr[minEleIdx] = temp; 
        }
    }
}

let arr = [73, 3, 44, 675, 29, 82, 9];
console.log(arr);
selectionSort(arr);
console.log(arr);