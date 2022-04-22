function binarySearch(arr, key) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end), 2);
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


let arr = [2, 10, 14, 17, 22, 25, 29, 34, 39, 41];
let key = 11;
let position = binarySearch(arr, key);

console.log(position);