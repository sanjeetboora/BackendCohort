let arr = [1, 8, 7, 5, 3, 9, 7, 8, 5, 1, 9 ];

let occurredOnce = findSingleOccurrence(arr);
console.log(occurredOnce);

function findSingleOccurrence(arr){
    let result = 0;

    for(let i =0; i< arr.length; i++){
        result = result ^ arr[i];
    }
    return result;
}