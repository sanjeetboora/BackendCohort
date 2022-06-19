function getPriority(op){
    if(op == '+' || op=='-'){
        return 1;
    }
    else if(op == '*' || op=='/'){
        return 2;
    }
    else if(op == '**'){
        return 3;
    }
    else{
        NaN;
    }
}
function infixToPostfix(input){
    let inputArr = input.split(" ");
    let stack = [];
    let postfix = "";
    for(let i=0; i < inputArr.length; i++){
        if(inputArr[i] == '('){
            stack.push('(');
        }
        else if(inputArr[i] == ')'){
            while(stack.length > 0 && stack[stack.length-1] != '('){
                postfix = postfix + stack[stack.length-1] + " ";
                stack.pop();
            }
            stack.pop();
        }
        else if(inputArr[i] == '+'||inputArr[i] == '-'||inputArr[i] == '*'||inputArr[i] == '/'||inputArr[i] == '**'){
            let priority = getPriority(inputArr[i]);
            if(priority){
                while(stack.length > 0 && getPriority(stack[stack.length-1]) > priority){
                    postfix = postfix + stack[stack.length-1] + " ";
                    stack.pop();
                }
                stack.push(inputArr[i]);
            }else{
                return "Invalid operators in the string";
            }
        }
        else{ //operand
            postfix = postfix + inputArr[i] + " ";
        }
    }

    while(stack.length > 0){
        postfix = postfix + stack[stack.length-1] + " ";
        stack.pop();
    }
    return postfix;
}

// let input = "10 + 20 * 30 - 40";
let input = "10 + ( 2 * 3 ** 2 ) - 30 / 10";
console.log(infixToPostfix(input));