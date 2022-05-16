function placeCows(cows, stalls, noOfStalls, mid){
    let indexOfStallOfLastCowPlaced = 0; 
    cows--; //as first cow is placed

    for(let stallIdx = 1; stallIdx < noOfStalls; stallIdx++){
        if(stalls[stallIdx] - stalls[indexOfStallOfLastCowPlaced] >= mid){
            cows--;
            indexOfStallOfLastCowPlaced = stallIdx;
            if(cows == 0) return true;
        }
    }
    return false;
}

function minDistanceBetweenCows(noOfStalls, stalls, cows){
    let minDistance =0;
    let maxDistance = stalls[noOfStalls-1];

    let largestMinDistance = -1;

    while(minDistance <= maxDistance){ //binary search
        let mid = Math.floor((minDistance + maxDistance)/2);
        let ableToPlaceCows = placeCows(cows, stalls, noOfStalls, mid);
        if(ableToPlaceCows == true){
            if(mid > largestMinDistance){
                largestMinDistance = mid;
            }
            minDistance = mid+1; //search on right
        }
        else{
            maxDistance = mid-1; //search on left
        }
    }
    return largestMinDistance;
}



let noOfStalls = 5;
let cows = 3;
let stalls = [1, 2, 4, 8, 9];

let largestMinimumDistance = minDistanceBetweenCows(noOfStalls, stalls, cows);
console.log(largestMinimumDistance);