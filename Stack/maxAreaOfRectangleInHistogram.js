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

//return an array of indexes of previous min for every element
function previousMinimumElement(arr, n){
    let st = new Stack();
    let prevMin = new Array(n);

    for(let i=0; i<n; i++){
        while(!st.isEmpty() && arr[st.peek()] > arr[i]){
            st.pop();
        }

        if(st.isEmpty()){
            prevMin[i] = -1;
        }
        else{
            prevMin[i] = st.peek();
        }
        st.push(i);
    }
    return prevMin;
}

//return an array of indexes of next min for every element
function nextMinimumElement(arr, n){
    let st = new Stack();
    let nextMin = new Array(n);

    for(let i=n-1; i>=0; i--){
        while(!st.isEmpty() && arr[st.peek()] > arr[i]){
            st.pop();
        }

        if(st.isEmpty()){
            nextMin[i] = n;
        }
        else{
            nextMin[i] = st.peek();
        }
        st.push(i);
    }
    return nextMin;
}

function maxAreaHistogram(arr, n){
    let prevMin = previousMinimumElement(arr, n);
    let nextMin = nextMinimumElement(arr, n);
    let maxArea = 0;
    for(let i=0; i<n; i++){
        let range = nextMin[i] - prevMin[i] -1;
        // console.log(i, "=> nextMin ", nextMin[i], "=> prevMin ", prevMin[i], " => range ", range);
        let currArea = arr[i] * range;
        if(currArea > maxArea){
            maxArea = currArea;
        }
    }
    return maxArea;
}

let arr = [60, 2, 5, 4, 5, 1,76];
let n = 7;
console.log(maxAreaHistogram(arr, n));