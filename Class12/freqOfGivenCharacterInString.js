function findFreq(str, givenChar){
    let freq = 0;
    for(idx in str){
        let currChar = str.charAt(idx);
        if(currChar === givenChar){
            console.log(currChar , "is equals to ", givenChar);
            freq++;
        }
    }
    return freq;
}

let str = "Relevel";
let frequency = findFreq(str, 'l');
console.log(frequency);
