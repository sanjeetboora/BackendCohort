let count =0;
function printParenthesis(n, open, close, output){
    //base case
    if(open == n && close ==n){
        console.log(output);
        count = count+1;
        return;
    }

    //self work and recursive call
    if(open < n){ //add '('
        printParenthesis(n, open+1, close, output + '(');
    }
    if(close < open){ //add ')'
        printParenthesis(n, open, close+1, output + ')');
    }
}

printParenthesis(3, 0, 0, "");
console.log(count);