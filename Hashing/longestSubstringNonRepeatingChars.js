

function longestNonRepeatingCharsSubstr(str){
    let i= 0, j =0, maxLength = 0;
    let freqMap = new Map();
    while(j<str.length){
        let ch = str[j];
        if(freqMap.has(ch) && freqMap.get(ch)>= i && freqMap.get(ch) < j){
            i = freqMap.get(ch)+1;
        }
        freqMap.set(ch, j);
        maxLength = Math.max(maxLength, j-i+1);
        j++;
    }
    return maxLength;
}


let str = "abcdbac";
console.log(longestNonRepeatingCharsSubstr(str));