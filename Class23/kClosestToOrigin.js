function placePivot(arr, start, end){
    let pivot = arr[end][2];
    let smaller = start-1;
    for(let i=start; i< end; i++){
        if(arr[i][2] <= pivot){
            smaller++;
            let temp = arr[smaller];
            arr[smaller] = arr[i];
            arr[i] = temp;
        }
    }
    //place pivot at right position
    let temp = arr[smaller + 1]; //swap pivot with just next element of smaller elements
    arr[smaller+1] = arr[end];
    arr[end] = temp;
    return smaller + 1;
}

function quickSelect(arr, start, end, k){
    if(start >= end){
        return;
    }

    let pivotIdx = placePivot(arr, start, end);
    if(pivotIdx == k){
        quickSelect(arr, start, pivotIdx -1, k); //left arr
        return;
    }
    else if(pivotIdx < k){
        quickSelect(arr, pivotIdx+1, end, k);//right arr
    }
    else{ //pivotIdx > k
        quickSelect(arr, start, pivotIdx -1, k); //left arr
    }
   
} 

function kClosest(xCoord, yCoord, k){
    let n = xCoord.length; //no. of points
    let dist = new Array(n);
    for(let i =0; i<n; i++){
        //dist[i] = [xcoord, ycoord, distance];
        dist[i] = [xCoord[i], yCoord[i], Math.sqrt((xCoord[i] * xCoord[i]) + (yCoord[i]*yCoord[i]))];
    }
    quickSelect(dist, 0, n-1, k);
    //dist.sort((a, b) => a[2]-b[2]);

    console.log(dist);
    for(let i =0; i<k; i++){
        console.log(dist[i][0], dist[i][1]); //(x, y)
    }
}

let xCoord = [1, 2, 3, 4];
let yCoord = [3, 4, 1, 0];
let k = 2;
kClosest(xCoord, yCoord, k);