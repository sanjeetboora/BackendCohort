function swap(arr, aIdx, bIdx){
    let temp = arr[aIdx];
    arr[aIdx] = arr[bIdx];
    arr[bIdx] = temp;
}
function dnf(array){

    let i =0; //i => every no. on left of ith index is 0
    let j =0; //j => every no. on left of jth index is 0 or 1
    let k = arr.length - 1; //k => every no. on right of kth index is 2

    while(j <= k){
        if(arr[j] == 0){
            //[arr[i], arr[j]] = [arr[j], arr[i]]; //swap
            swap(array, i, j);
            i++;
            j++;
        }
        else if(arr[j] == 2){
            swap(array, j, k);
            k--;
        }
        else{ //when arr[j] ==1
            j++;
        }
    }
}

let arr = [1, 0, 2, 0, 2, 1,0];
console.log(arr);
dnf(arr);
console.log(arr);
