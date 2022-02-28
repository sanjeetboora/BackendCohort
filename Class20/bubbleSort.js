function bubleSort(arr){

    for(let i = 0; i< arr.length - 1 ; i++){ //unsorted part is from 0 to n-2th element, as last element is always sorted
        let isSorted = true;
        for(j = 0; j< arr.length-1-i; j++){
            if( arr[j] > arr[j+1]){ //swap
                let temp  =arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSorted = false;
            }
        }
        if(isSorted == true){
            return;
        }
    }
}

let arr = [5, 3, 1, 2, 4];
console.log(arr);
bubleSort(arr);
console.log(arr);
