
function minimumDeletions(str){
    let stack = [];
    let count = 0;
    for(let i = 0; i<str.length; i++){
        if(stack.length > 0 && stack[stack.length-1] == 'b' && str[i] == 'a'){ //unbalanced
            count++;
            stack.pop();
        }
        else{
            stack.push(str[i]);
        }
    }
    return count;
}

let str = "aababbabb";
console.log(minimumDeletions(str));
