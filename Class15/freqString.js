//frequency array approach

function freqString(str1, str2){

    //let freqArr = [];
    let freqArr =  new Array(26);
    for(let i =0; i<26; i++){
        freqArr[i] = 0;
    }

    for(let i = 0; i< str1.length; i++){
        // console.log('code for', str1[i], "is ", str1.charCodeAt(i));
        // console.log('code for a is ', 'a'.charCodeAt(0));
        let idxForCharOfStr1 =  str1.charCodeAt(i) - 'a'.charCodeAt(0);
        //console.log(idxForCharOfStr1);
        freqArr[idxForCharOfStr1]++;
    }

    let resultString = "";
    for(let i = 0; i< str1.length; i++){
        let idxForCharOfStr1 =  str1.charCodeAt(i) - 'a'.charCodeAt(0);
        resultString = resultString + str1[i] + freqArr[idxForCharOfStr1];
    }

    return resultString;
}


let str1 = "aabccshfkd";
let result = freqString(str1);
console.log(result);
