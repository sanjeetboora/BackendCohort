function waveSort(arr){
    for(let i=0; i<arr.length; i = i+2){
        //left element
        if(i > 0 && arr[i-1] > arr[i]){ //left element is greater
            let temp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = temp;
        }
        //right element
        if(i<= arr.length-2 && arr[i+1] > arr[i]){ //right element is greater
            let temp = arr[i+1];
            arr[i+1] = arr[i];
            arr[i] = temp;
        }
    }
}
let arr = [1, 3, 0, 2, -1, 8];
waveSort(arr);
console.log(arr);