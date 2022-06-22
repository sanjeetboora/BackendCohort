function maxHeight(arr){
    let n = arr.length;
    arr.sort((a, b) => a-b);

    let maxHeightOfPyramid = 1;
    let prevWidth = arr[0];
    let prevBlocksCount = 1;

    let currWidth =0;
    let currBlocksCount = 0;

    for(let i=1; i<n; i++){
        currWidth += arr[i];
        currBlocksCount++;

        if(currWidth > prevWidth && currBlocksCount > prevBlocksCount){ //curr level completed
            maxHeightOfPyramid++;
            //for next level
            prevBlocksCount = currBlocksCount;
            prevWidth = currWidth;

            currBlocksCount =0;
            currWidth =0;
        }
    }
    return maxHeightOfPyramid;
}


//let arr = [5, 6, 2, 1, 3,7];
let arr = [1,1];
console.log(maxHeight(arr));