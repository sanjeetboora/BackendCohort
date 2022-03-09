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

function quickSort(arr, start, end){
    if(start >= end){
        return;
    }

    let pivotIdx = placePivot(arr, start, end);
    
    quickSort(arr, start, pivotIdx -1); //left arr
    quickSort(arr, pivotIdx+1, end);//right arr
}

let arr = [4, 22, 7,12 ,5, 20, 6];
console.log(arr);
quickSort(arr, 0, 6);
console.log(arr);
