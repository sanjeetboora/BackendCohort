class Stack{
    constructor(){
        this.data = [];
        this.top = -1;
        this.maxSize = 5;
    }

    size(){
        return this.top+1;
    }

    isEmpty(){
        return this.top <= -1;
    }

    push(element){ //insert
        if(this.top + 1 >= this.maxSize){
            throw new Error("Stack Overflow");
        }
        this.top++;
        this.data[this.top] = element;
    }

    pop(){//remove
        if(this.isEmpty()){
            throw new Error("Stack Underflow");
        }
        this.top--;
    }

    peek(){//top element
        if(this.isEmpty()){
            throw new Error("Stack Empty");
        }
        return this.data[this.top];
    }

    insertElementAtBottom(value){
        if(this.isEmpty()){//base case
            this.push(value);
            return;
        }

        let x = this.peek();
        this.pop();
        this.insertElementAtBottom(value);
        this.push(x);
    }

    reverse(){
        if(this.isEmpty()){
            return;
        }
        let temp = this.peek();
        this.pop();
        this.reverse();
        this.insertElementAtBottom(temp);
    }
}

let myStack = new Stack();
myStack.push(10);
//console.log(myStack.peek());
myStack.push(20);
//console.log(myStack.peek());
myStack.push(30);
//console.log(myStack.peek());

// console.log(myStack.peek());
myStack.pop();
// console.log(myStack.peek());
myStack.pop();
// console.log(myStack.peek());
myStack.push(100);
// console.log(myStack.peek());
myStack.pop();
// console.log("size", myStack.size());
// console.log(myStack.peek());
myStack.pop();
//console.log("size", myStack.size());
if(!myStack.isEmpty()){
    myStack.pop();
    console.log(myStack.peek());
}

myStack.push(200);
myStack.push(201);
myStack.push(202);
myStack.push(203);
//myStack.push(204);

// myStack.push(205);

//console.log(myStack.peek());
//console.log("size",myStack.size());
myStack.insertElementAtBottom(500);

myStack.reverse();
console.log(myStack.peek());
//console.log("size",myStack.size());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
//console.log(myStack.peek());



function checkParentheses(str){
    const st = new Stack();

    for(const ch of str){
        if(ch == '(' || ch == '{' || ch == '['){
            st.push(ch);
        }else if(ch == ')'){
            if(st.peek() == '('){
                st.pop();
            }
            else{
                return false;
            }
        }
        else if(ch == ']'){
            if(st.peek() == '['){
                st.pop();
            }
            else{
                return false;
            }
            
        }
        else if(ch == '}'){
            if(st.peek() == '{'){
                st.pop();
            }
            else{
                return false;
            }
        }
    }

    return st.isEmpty();
}

console.log(checkParentheses("[{()}{}]"));
console.log(checkParentheses("[{(}}{}]"));