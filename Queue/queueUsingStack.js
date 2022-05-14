class Stack{
    constructor(){
        this.data = [];
        this.top = -1;
        this.maxSize = 100;
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

class QueueUsingStack{
    constructor(){
        this.primaryStack = new Stack();
        this.secondaryStack = new Stack();
    }

    size(){
        return this.primaryStack.size();
    }

    isEmpty(){
        return this.primaryStack.isEmpty();
    }

    enqueue(element){
        this.primaryStack.push(element);
    }

    dequeue(){
        while(this.primaryStack.size() > 1){
            this.secondaryStack.push(this.primaryStack.peek());
            this.primaryStack.pop();
        }
        this.primaryStack.pop();
        while(this.secondaryStack.size() > 0){
            this.primaryStack.push(this.secondaryStack.peek());
            this.secondaryStack.pop();
        }

    }

}