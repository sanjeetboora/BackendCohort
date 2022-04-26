//https://www.spoj.com/problems/NOTATRI/
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
function triangle(arr, n){
    arr.sort((x, y) => x-y);
    console.log(arr);
    let ans = 0;
    for(let a=0; a<n; a++){
        for(let b=a+1; b<n; b++){
            let sumAB = arr[a] + arr[b];
            ans += n - upperBound(arr, sumAB);
        }
    }
    return ans;
}
let n=4;
let arr = [4, 2, 9, 6];
let result = triangle(arr, n);
console.log(result);