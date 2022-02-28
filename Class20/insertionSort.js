function insertionSort(arr){
    for(let i= 1; i< arr.length; i++){
        let currEle = arr[i];

        let j = i-1; //start comparing from this index 
        while( j>= 0 && arr[j] > currEle){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currEle;
    }
}

let arr = [5, 3, 1, 4, 2];
console.log(arr);
insertionSort(arr);
console.log(arr);