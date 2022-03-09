function placePivot(arr, start, end){
    let pivot = arr[end];
    let smaller = start-1;
    for(let i=start; i< end; i++){
        if(arr[i] <= pivot){
            smaller++;
            let temp = arr[smaller];
            arr[smaller] = arr[i];
            arr[i] = temp;
        }
    }
    //place pivot at right position
    let temp = arr[smaller + 1]; //swap pivot with just next element of smaller elements
    arr[smaller+1] = arr[end];
    arr[end] = temp;
    return smaller + 1;
}

function quickSort(arr, start, end, k){
    if(start >= end){
        return;
    }

    let pivotIdx = placePivot(arr, start, end);
    if(pivotIdx == k){
        quickSort(arr, start, pivotIdx -1, k); //left arr
        return;
    }
    else if(pivotIdx < k){
        quickSort(arr, pivotIdx+1, end, k);//right arr
    }
    else{ //pivotIdx > k
        quickSort(arr, start, pivotIdx -1, k); //left arr
    }
   
} 

let arr = [4, 22, 88, 7,12 ,5, 20, 6, 12, 34, 56, 98 ];
console.log(arr);
console.log(quickSort(arr, 0, 11, 4));
console.log(arr);