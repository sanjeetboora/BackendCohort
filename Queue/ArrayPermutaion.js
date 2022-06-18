function stackPermutation(input, output){
    let op = [];
    let n = input.length;
    let i=0;
    let stack = [];
    while(input.length > 0 && i < n){
        let inputFront = input[0];
        let outputFront = output[0];
        if(inputFront == outputFront){
            op[i] = inputFront;
            input.shift();
            output.shift();
            i++;
        }
        else if(stack.length > 0 && stack[stack.length-1] == outputFront){
            let top = stack[stack.length-1];
            op[i] = top;
            output.shift();
            stack.pop();
            i++;
        }
        else{
            stack.push(inputFront);
            input.shift();
        }
    }

    while(stack.length > 0 && stack[stack.length-1] == output[0]){
        let top = stack[stack.length-1];
        op[i] = top;
        output.shift();
        stack.pop();
        i++;
    }

    return (input.length == 0 && stack.length == 0);

}



let input = [1, 2,6, 3, 4, 5];
let output = [1, 3, 4, 2, 6, 5];

console.log(stackPermutation(input, output));