
function subarraysWithSumK(arr, k){
    let count = 0;
    let mp = new Map();
    for(let i = 1; i<arr.length; i++){ //tranfering original array to contiguous sum array
        arr[i] = arr[i] + arr[i-1];
    }

    for(let i = 0; i<arr.length; i++){ 
        let y = arr[i];
        if(y == k){
            count++;
        }
        if(mp.has(y-k)){
            count = count + mp.get(y-k);
        }
        
        if(mp.has(y)){ //sum y already occurred
            mp.set(y, mp.get(y) + 1);
        }
        else{//sum y occurring for the first time
            mp.set(y,1);
        }
    }
    return count;
}

// let arr = [1, 2, 3, 2, 0, 1];
// let k = 3;

let arr = [6, -6, 1, 2, 3, 0, 1];
let k = 6;
let result = subarraysWithSumK(arr, k);
console.log(result);