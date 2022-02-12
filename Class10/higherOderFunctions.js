let arr = [3, 1, 2, 8, 4];

let filtered = arr.filter(function(item){
    return item > 3;
});
console.log(filtered);

console.log(arr);
// arr.sort();
arr.sort( function(a, b){
    console.log("comparing ",a, b, " => ", a-b);
    return a-b;
})
// b-a -> positive => b > a
// b-a -> negative => b < a
console.log(arr);
console.log("cab" - "abc");