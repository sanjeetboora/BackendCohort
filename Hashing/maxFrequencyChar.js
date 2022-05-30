
function maxFrequencyChar(str){

    let mp = new Map();
    let maxFreq = 0;
    let maxFreqChar = "";
    for(let i=0; i< str.length; i++){
        //mp.set(str[i], (mp.get(str[i])||0)+1);
        if(mp.has(str[i])){
            let currentFreq = mp.get(str[i]);
            mp.set(str[i], currentFreq+1);
        }else{
            mp.set(str[i], 1);
        }
        if(mp.get(str[i]) > maxFreq){
            maxFreq = mp.get(str[i]);
            maxFreqChar = str[i];
        }
    }
    return maxFreqChar;
}


let str = "abcdbcdaa";
console.log(maxFrequencyChar(str));