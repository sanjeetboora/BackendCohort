let arr = ["data", "on", "my", "no", "tada"];

let occ = {};

for(ele of arr){
    let sortedEle = ele.split('').sort((a, b) => a.localeCompare(b)).join('');
    if(occ[sortedEle]){
        occ[sortedEle].push(ele);
    }
    else{
        occ[sortedEle] = [ele];
    }
}
let idx =0;
//console.log(Object.keys(occ));
for(key of Object.keys(occ)){
    for(x of occ[key]){
        arr[idx] = x;
        idx++;
    }
}
console.log(arr);