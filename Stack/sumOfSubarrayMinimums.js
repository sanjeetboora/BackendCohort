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

function sumSubarrayMinimums(arr, n){
    let prevMin = previousMinimumElement(arr, n);
    let nextMin = nextMinimumElement(arr, n);

    let totalSum = 0;

    for(let i=0; i<n; i++){
        let leftDistance = i - prevMin[i];
        let rightDistance = nextMin[i] - i;

        let occurrenceOfCurrElementAsMin = leftDistance*rightDistance;
        totalSum += arr[i] * occurrenceOfCurrElementAsMin;
    }
    return totalSum;
}

let arr = [3, 1, 2, 4];
console.log(sumSubarrayMinimums(arr, 4));