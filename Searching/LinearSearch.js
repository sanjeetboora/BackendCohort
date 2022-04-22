
//let's meet at 10PM

function linearSearch(arr, key) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            return i; //returning the position where we found key
        }
    }
    return NaN;
}
function globalLinearSearch(arr, key) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == key) {
            result.push(i);//stoing the position where we found key
        }
    }
    return result;
}
let arr = [5, 74, 4, 32, 5, 21, 4];
let key = 4;
let position = linearSearch(arr, key);
let allPositions = globalLinearSearch(arr, key);
console.log(position);
console.log(allPositions);