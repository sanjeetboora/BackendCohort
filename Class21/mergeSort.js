function merge(arr, start, mid, end){
    let leftStart = start;
    let leftEnd = mid;
    let rightStart = mid+1;
    let rightEnd = end;
    let leftArr = new Array(leftEnd - leftStart +1);
    let rightArr = new Array(rightEnd - rightStart +1);

    for(let i = 0; i<leftArr.length; i++){
        leftArr[i] = arr[leftStart + i];
    }
    for(let i = 0; i<rightArr.length; i++){
        rightArr[i] = arr[rightStart + i];
    }

    let aIdx = 0;
    let bIdx = 0;
    let rIdx = leftStart;

    while(aIdx < leftArr.length && bIdx < rightArr.length){
        if(leftArr[aIdx] <= rightArr[bIdx]){
            arr[rIdx] = leftArr[aIdx];
            rIdx++;
            aIdx++;
        }
        else{
            arr[rIdx] = rightArr[bIdx];
            rIdx++;
            bIdx++; 
        }
    }

    while(aIdx < leftArr.length){
        arr[rIdx] = leftArr[aIdx];
        rIdx++;
        aIdx++;
    }

    while(bIdx < rightArr.length){
        arr[rIdx] = rightArr[bIdx];
        rIdx++;
        bIdx++;  
    }
}

function mergeSort(arr, start, end){
    //base case
    if(start >= end){ //empty arr or size arr
        return;
    }
    let mid = Math.floor((start+end)/2);
    mergeSort(arr, start, mid); //sort left part
    mergeSort(arr, mid+1, end); //sort right part
    //self work
    merge(arr, start, mid, end);
}

let arr = [5, 4, 1, 3, 89, 23];
console.log(arr);
mergeSort(arr, 0, 5);
console.log(arr);
