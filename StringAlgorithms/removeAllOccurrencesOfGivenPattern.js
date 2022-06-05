function removePattern(str, pattern){
    let tempStr = "";
    for(let i=0; i<str.length; i++){
        tempStr += str[i];
        if(tempStr.length >= pattern.length){
            if(tempStr.substring(tempStr.length-pattern.length) == pattern){
                tempStr = tempStr.replace(pattern, '');
            }
        }
    }
    return tempStr;
}


let str = "daabcbaabcbc";
let pattern = "abc";

let result = removePattern(str, pattern);
console.log(result);