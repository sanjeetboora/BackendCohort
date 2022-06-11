function longestConsecutiveSequence(arr){
    let mp = new Map();
    for(let i=0; i<arr.length; i++){
        mp.set(arr[i], 1);
    }

    let maxLength =0;
    for(let i=0; i<arr.length; i++){
        let currNo = arr[i];
        if(!mp.has(currNo-1)){
            let x = currNo+1;
            let currSequenceLength = 1;
            while(mp.has(x)){
                currSequenceLength++;
                x++;
            }
            maxLength = Math.max(maxLength, currSequenceLength);
        } 
    }
    return maxLength;
}


let arr = [50, 60, 4, 1, 7, 8, 59, 51, 58, 3, 57, 2, 61];
console.log(longestConsecutiveSequence(arr));