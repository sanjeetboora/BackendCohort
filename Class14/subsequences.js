function subsequences(output, input){
    if(input == ""){ //base case
        console.log(output);
        return;
    }

    //self work
    let firstChar = input.charAt(0);
    let ros = input.substring(1) ;//rest of input string

    //recursive call
    subsequences(output + firstChar, ros); //include
    subsequences(output, ros); //exclude
}

subsequences("", "abc");