//frequency array approach

function areAnagrams(str1, str2){

    //let freqArr = [];
    let freqArr =  new Array(26);
    for(let i =0; i<26; i++){
        freqArr[i] = 0;
    }

    if(str1.length !== str2.length){
        return false;
    }

    for(let i = 0; i< str1.length; i++){
        // console.log('code for', str1[i], "is ", str1.charCodeAt(i));
        // console.log('code for a is ', 'a'.charCodeAt(0));
        let idxForCharOfStr1 =  str1.charCodeAt(i) - 'a'.charCodeAt(0);
        //console.log(idxForCharOfStr1);
        freqArr[idxForCharOfStr1]++;

        let idxForCharOfStr2 =  str2.charCodeAt(i) - 'a'.charCodeAt(0);
        //console.log(idxForCharOfStr2);
        freqArr[idxForCharOfStr2]--;
    }

    for(let i =0; i<26; i++){
        if(freqArr[i] != 0 ){
            return false;
        }
    }

    return true;
}

let str1 = "aabc";
let str2 = "baca";
let result = areAnagrams(str1, str2);
if(result){
    console.log(str1, str2, "are anagrams");
}
else{
    console.log(str1, str2, "are not anagrams");
}