function rabinKarp(str, pattern){

    let P =  37; //prime no.
    let mod = 100000007; //modulo 10^9 + 7

    let power = [];
    power[0] =1;
    for(let i=1; i<str.length; i++){ //power[P^0, P^1, P^2, P^3,..... P^str.length-1]
        power[i] = (power[i-1]*P) % mod;
    }

    let hashPattern = 0; 
    for(let i=0; i<pattern.length; i++){
        //ABC
        //i =2
        //curr char = 'C'
        //curr_char_hash = hash contibution of 'c'
        let curr_char_hash =  (pattern.charCodeAt(i)*power[i])%mod;//pattern[i] * P^i //i = 3 => P^3 => P*P*P
        //hashPattern = hash of AB
        hashPattern = (hashPattern + curr_char_hash)%mod;
        //hashPattern = hash of AB + hash contibution of 'c'
    }

    let hashArr = [0]
    for(let i=0; i<str.length; i++){
        let curr_char_hash =  (str.charCodeAt(i)*power[i])%mod;//str[i] * P^i //i = 3 => P^3 => P*P*P
        hashArr[i+1] = (hashArr[i] + curr_char_hash)%mod; //hash[i-1] + str[i] * P^i
    }
    //console.log("hashPattern: ", hashPattern);
    let count =0;
    for(let i=0; i<=str.length-pattern.length; i++){
        let curr_substr_hash = (hashArr[i+pattern.length] - hashArr[i] + mod)%mod;
        //console.log("i: ", i, ", curr_substr_hash: ", curr_substr_hash, "hashPattern: ", (hashPattern*power[i])%mod);
        if(curr_substr_hash == (hashPattern*power[i])%mod){
            console.log(i);
            count++;
        } 
    }
    return count;
}


let str = "aabbabcbbaabcaba";
let pattern = "abc";
console.log("Count: ",rabinKarp(str, pattern));
