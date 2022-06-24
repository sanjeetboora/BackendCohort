function findMinIdx(arr){//find starting point
    let start = 0;
    let end = arr.length - 1;

    if(arr.length == 1){
        return 0;
    }

    if(arr[start] < arr[end]){
        return 0;
    }

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if(arr[mid-1] > arr[mid]){ // mid is starting point
                return mid;
        }
        if(arr[mid] > arr[mid+1]){ //mid+1 is starting point
            return mid+1;
        }

       
        if (arr[end] < arr[mid]) { //move towards right
            start = mid+1;
        }
        else{//move towards left
            end = mid-1;
        }   
    }
}

function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        if (arr[mid] == key) { //found the key element
            return mid;
        }
        //key element is smaller than mid element -> left
        else if (key < arr[mid]) {
            end = mid - 1;
        }
        //key element is grater than mid element -> right 
        else {
            start = mid + 1;
        }
    }

    return NaN;
}



function searchElement(arr, x){
    let startPoint = findMinIdx(arr);
    if(arr[startPoint] <= x && arr[arr.length-1] >= x){ // in this window x exists - right side window
        return binarySearch(arr, startPoint, arr.length-1, x);
    }else{// in this window x exists - left side window
        return binarySearch(arr, 0, startPoint-1, x);
    }
}


let arr = [5, 6, 7, 1, 2, 3,4];
let x = 30;
console.log("index of x is ", searchElement(arr, x));