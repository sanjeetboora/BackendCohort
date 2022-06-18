function getMinimumNumber(str, k){
    let n = str.length;
    let stack = [];
    for(let ch of str){
        while(stack.length > 0 && k > 0 && stack[stack.length-1].charCodeAt(0) > ch.charCodeAt(0)){
            stack.pop();
            k--;
        }
        stack.push(ch);
    }

    while(stack.length > 0 && k >0){
        stack.pop();
        k--;
    }

    if(stack.length == 0){
        return 0;
    }
    
    let result = "";
    while(stack.length > 0){
        result = stack[stack.length-1] + result;
        stack.pop();
    }

    return result;
    
}

let str = "14301260";
let k = 4;
console.log(getMinimumNumber(str, k));