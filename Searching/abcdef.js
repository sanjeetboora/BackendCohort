//https://www.spoj.com/problems/ABCDEF/
function upperBound(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        //key element is smaller than mid element -> left
        if (key < arr[mid]) {
            ans = mid;
            end = mid - 1;
        }
        //key element is grater than mid element -> right 
        else {
            start = mid + 1;
        }
    }  
    if(ans == -1){
        ans = arr.length;
    }

    return ans;
}
function lowerBound(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let ans = -1;

    while (start <= end) {
        let mid = Math.floor((start + end)/2);
        //key element is smaller than mid element -> left
        if (key <= arr[mid]) {
            ans = mid;
            end = mid - 1;
        }
        //key element is grater than mid element -> right 
        else {
            start = mid + 1;
        }
    }  
    if(ans == -1){
        ans = NaN;
    }

    return ans;
}

function abcdef(arr, n){
    let abc = [];
    let def = [];
    for(let a =0; a<n; a++){
        for(let b =0; b<n; b++){
            for(let c =0; c<n; c++){
                //console.log(arr[a], arr[b], arr[c]);
                abc.push(arr[a]*arr[b]+arr[c]);

            }
        }
    }

    for(let d= 0; d<n; d++){
        if(arr[d] == 0) continue;
        for(let e =0; e<n; e++){
            for(let f =0; f<n; f++){
                //console.log(arr[d], arr[e], arr[f]);
                def.push((arr[f]+ arr[e])* arr[d]);
            }
        }
    }

    def.sort((x, y) => x-y);
    console.log(abc, def);
    let totalTuples =0;
    for(let x =0; x < abc.length; x++){
        let lb = lowerBound(def, abc[x]);
        let ub = upperBound(def, abc[x]);

        console.log(abc[x], lb, ub);
        totalTuples += (ub-lb);
    }
    return totalTuples;

}

let n = 2;
let arr = [-1, 1];
let result = abcdef(arr, n);
console.log(result);