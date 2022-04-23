function lowerBound(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        //key element is smaller than mid element -> left
        if (key <= arr[mid]) {
            ans = mid;
            end = mid - 1;
        }
        //key element is grater than mid element -> right 
        else {
            start = mid + 1;
        }
    }  
    if(ans == -1){
        ans = NaN;
    }

    return ans;
}


let arr = [2, 10, 14, 17, 22, 25, 29, 34, 39, 41];
let key = 100;
let position = lowerBound(arr, key);
console.log("element: ", arr[position], " position: ",position);