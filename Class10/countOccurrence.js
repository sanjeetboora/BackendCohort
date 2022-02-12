let str = "LALIT";
let occurrences = {};

for(idx in str){
    let letter = str[idx];
    console.log(occurrences);
    if(occurrences[letter]){
        occurrences[letter]++;
    }
    else{
        occurrences[letter] = 1;
    }
}
console.log(occurrences);