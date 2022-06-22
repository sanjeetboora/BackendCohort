function sortedArray(arr, n, A, B, C){

    let maxNo = -1000000007;
    let maxIdx = -1; 
    let minNo = 1000000007;
    let minIdx = -1; 
    for(let i=0; i<n; i++){
        arr[i] = A*arr[i]**arr[i] + B*arr[i] + C;
        if(arr[i] > maxNo){
            maxNo = arr[i];
            maxIdx = i;
        }
        if(arr[i] < minNo){
            minNo = arr[i];
            minIdx = i;
        }
    }
    console.log(arr);
    let output = new Array(n);
    let k =0;
    if(A > 0){ //consider minimum occ. in between 
        let x = minIdx;
        let y = minIdx+1;

        while(x >=0 && y <n){
            if(arr[x] < arr[y]){
                output[k] = arr[x];
                x--;
            }else{
                output[k] = arr[y];
                y++;
            }
            k++;
        }

        while(x >= 0){
            output[k] = arr[x];
            x--;
            k++;
        }

        while(y<n){
            output[k] = arr[y];
            y++;
            k++;
        }
   }

    else{ //A < 0 consider maximum occ. in between 
        let x = 0;
        let y = n-1;

        while(x <= maxIdx && y > maxIdx){
            if(arr[x] < arr[y]){
                output[k] = arr[x];
                x++;
            }else{
                output[k] = arr[y];
                y--;
            }
            k++;
        }

        while(x <= maxIdx){
            output[k] = arr[x];
            x++;
            k++;
        }

        while(y>maxIdx){
            output[k] = arr[y];
            y--;
            k++;
        }

    }
    return output;
}

let arr = [-10, -20, 10, 20, 30];
let n = 5;
let A = -1, B =-2, C =3;
console.log(sortedArray(arr, n, A, B, C));