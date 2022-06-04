function lps(str){
    let lps = [];
    lps[0] = 0;
    let len = 0;
    for(let i=1; i<str.length;){
        if(str[len] == str[i]){
            len++;
            lps[i] = len;
            i++;
        }
        else{
            if(len==0){
                lps[i] =0;
                i++;
            }else{
                len = lps[len-1];
            }
        }
    }
    return lps;
}

function kmp(str, pattern){
    let n = str.length;
    let p = pattern.length;
    let i = 0, j=0;
    let lpsArray = lps(pattern);

    while(i<n && j<p){
        if(str[i] == pattern[j]){
            i++;
            j++;
        }
        else{
            if(j==0) i++;
            else j = lpsArray[j-1];
        }
    }
    if( j == p) return true;
    else return false;
}



let str = "acabacace";
let pattern = "acbca";
console.log(kmp(str, pattern));