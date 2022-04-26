//https://codeforces.com/contest/1324/problem/D
function upperBound(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        //key element is smaller than mid element -> left
        if (key < arr[mid]) {
            ans = mid;
            end = mid - 1;
        }
        //key element is grater than mid element -> right 
        else {
            start = mid + 1;
        }
    }  
    if(ans == -1){
        ans = arr.length;
    }

    return ans;
}
function getNumberOfPairs(n, a, b){
    let diff = new Array(n);

    for(let i=0; i<n; i++){
        diff[i] = a[i]-b[i];
    }

    diff.sort((a, b) => (a-b));
    console.log(diff);
    let totalPairs = 0;
    for(let i=0; i<n; i++){
        if(diff[i] > 0){//positive number
            totalPairs += n-1-i;
        }
        else{
            let pos = upperBound(diff, -diff[i]);
            totalPairs += n-pos;
        }  
    }
    return totalPairs;
}


// let n = 5;
// let a = [4, 8, 2, 6, 2];
// let b = [4, 5, 4, 1, 3];

let n = 4;
let a = [1, 3, 2, 4];
let b = [1, 3, 2, 4];

let result = getNumberOfPairs(n, a, b);
console.log(result);