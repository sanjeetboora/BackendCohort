function isPalindrome(str, start, end){
    let palindrome = true;
    while(start <=  end){
        if(str[start] != str[end]){
            palindrome = false;
            return false;
        }
        start++;
        end--;
    }

    return true;
}

function longestPalindromicSubstring(str){

    let mp = new Map();

    for(let i=0; i<str.length; i++){
        mp.set(str[i], i);
    }
    let maxLength = 1;
    let ans = "";
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        let lastOccIdx = mp.get(currChar);
        let isSubstrPalindrome = isPalindrome(str, i, lastOccIdx);
        if(isSubstrPalindrome){
            //expand the palindrome
            let currLength = lastOccIdx-i+1;
            let localAns = str.substr(i, currLength);
            let start = i-1;
            let end = lastOccIdx+1;
            while(i>=0 && end<str.length){
                if(str[start] == str[end]){
                    currLength += 2;
                    localAns = str.substr(start, end-start+1);
                    start--;
                    end++;
                }else{
                    break;
                }
            }
            if(maxLength < currLength){
                  maxLength = currLength;
                  ans = localAns;
            }
        }
    }
    console.log(ans);
    return maxLength;

}

let str = "abacabadac";
let result = longestPalindromicSubstring(str);
console.log(result);