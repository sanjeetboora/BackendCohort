function permutation(input, output){
    if(input == ""){
        console.log(output);
        return;
    }
    
    for(let i =0; i< input.length; i++){
        let currChar = input[i]; //self work
        let ros = input.substring(0, i) + input.substring(i+1);
        permutation(ros, currChar + output); //recursive call
    }
}
let str = "abc";
permutation(str, "");