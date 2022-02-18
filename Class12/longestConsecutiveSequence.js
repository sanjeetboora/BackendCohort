function longestConsecutiveSequence(arr){
    let mySet = new Set();

    let lcsLength = 0;//longestConsecutiveSequenceLength

    for(let i=0; i<arr.length; i++){
        mySet.add(arr[i]);
    }

    for(let i=0; i<arr.length; i++){
        let currNo = arr[i];
        let smallerThanCurrentNoExists = mySet.has(currNo-1);
        //smallerThanCurrentNoExists = false
        // !smallerThanCurrentNoExists => true
        if(!smallerThanCurrentNoExists){
            let j = currNo;
            while(mySet.has(j)){
                j++;
            }
            let lengthOfThisSequence = j - currNo;
            lcsLength = lengthOfThisSequence > lcsLength ? lengthOfThisSequence: lcsLength;
        }
    }
    return lcsLength;
}

let arr = [10, 8, 5, 3, 1, 2, 11];
console.log("longestConsecutiveSequence length is ", longestConsecutiveSequence(arr));