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
}

let myStack = new Stack();
myStack.push(10);
//console.log(myStack.peek());
myStack.push(20);
//console.log(myStack.peek());
myStack.push(30);
//console.log(myStack.peek());

console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());
myStack.push(100);
console.log(myStack.peek());
myStack.pop();
console.log("size", myStack.size());
console.log(myStack.peek());
myStack.pop();
console.log("size", myStack.size());
if(!myStack.isEmpty()){
    myStack.pop();
    console.log(myStack.peek());
}

myStack.push(200);
myStack.push(201);
myStack.push(202);
myStack.push(203);
myStack.push(204);

myStack.push(205);
