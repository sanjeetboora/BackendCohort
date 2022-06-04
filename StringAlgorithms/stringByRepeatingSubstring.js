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
function createStringByRepeatingSubstring(str){
    let lpsArr = lps(str);
    let x = str.length - lpsArr[str.length-1];

    if(x <= lpsArr[str.length-1]){
        if(lpsArr[str.length-1] % x ==0){
            return true;
        }else{
            return false;
        }
    }
    else{
        return false;
    }
}

let str = "abcabeabc";
console.log(createStringByRepeatingSubstring(str));