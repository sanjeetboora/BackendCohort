function stringMatching(str, pattern){
    let n = pattern.length;
    let m = str.length;

    let count  = 0;
    for(let i=0; i<=m-n; i++){
        let flag = true;
        for(let j = 0; j<n; j++){
            if(str[i+j] != pattern[j]){
                flag = false;
                break;
            }
        }
        if(flag == true){
            count++;
            console.log(i);
        }
    }
    return count;
}

let str = "aabbabcbbaabcaba";
let pattern = "abc";

console.log("count: ",stringMatching(str, pattern));
