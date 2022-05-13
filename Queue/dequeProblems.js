class Deque{ //circular queue
    constructor(length = 5){
        this.data = [];
        this.front = -1;
        this.rear = -1;
        this.maxLength = length;
        this.currLength = 0;
    }

    size(){
        return this.currLength;
    }

    isEmpty(){
        return this.currLength == 0;
        //return this.front == -1;
    }

    isFull(){
        return this.currLength == this.maxLength;
    }

    enqueueAtFront(value){
        //if queue is full
        //1st way using current length
        if(this.isFull()){
            throw new Error("queue overflow");
        }

        //2nd way using front and rear => updated value of front ==  rear
        if((this.front -1 +this.maxLength)%this.maxLength == this.rear){
            throw new Error("queue overflow");
        }

        //if adding the first element
        if(this.isEmpty()){
            this.front = 0;
            this.rear = 0;
        }
        else{
            this.front = (this.front -1 +this.maxLength)%this.maxLength;
        } 
        this.data[this.front] = value;
        this.currLength++;
    }

    enqueueAtRear(value){
         //1st way using current length
         if(this.isFull()){
            throw new Error("queue overflow");
        }
        //2nd way using front and rear
        if((this.rear + 1)%this.maxLength == this.front){
            throw new Error("queue overflow");
        }
        //update front on adding first element in queue
        if(this.isEmpty()){
            this.front = 0;
            this.rear = 0;
        }
        else{
            this.rear = (this.rear + 1)%this.maxLength;
        }
        this.data[this.rear] = value;
        this.currLength++;
    }

    dequeueFromFront(){
        if(this.isEmpty()){
            throw new Error('queue underflow');
        }
       
        //update front and rear on deleting the last element
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.front + 1)%this.maxLength;
        }
        this.currLength--;
    }

    dequeueFromRear(){
        if(this.isEmpty()){
            throw new Error('queue underflow');
        }
        //update front and rear on deleting the last element
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
           this.rear = (this.rear-1 +this.maxLength)%this.maxLength;
        }
        this.currLength--;
    }

    getFront(){
        if(this.isEmpty()){
            console.log("queue is empty");
            return;
        }
        return this.data[this.front];
    }

    getRear(){
        if(this.isEmpty()){
            console.log("queue is empty");
            return;
        }
        return this.data[this.rear];
    }
}




function printSlindingWindowMaximum(arr, n, k){
    // n -> size of arr
    // k -> size of window

    let window = new Deque(k); //add index instead of elements in deque

    //only for first window
    for(let i=0; i<k; i++){
        while(!window.isEmpty() && arr[window.getRear()] <= arr[i]){
            window.dequeueFromRear();
        }
        window.enqueueAtRear(i);
    }
    console.log(arr[window.getFront()]);


    for(let i=k; i<n; i++){
        //pop out all elements of previous window
        while(!window.isEmpty() && window.getFront() <= i-k){
            window.dequeueFromFront();
        }

        //pop out all elements of current window which are smaller than current element
        while(!window.isEmpty() && arr[window.getRear()] <= arr[i]){
            window.dequeueFromRear();
        }
        window.enqueueAtRear(i);
        console.log(arr[window.getFront()]);
    }
}

let arr = [10, 2, 3, 1, -9, -19, 4];
printSlindingWindowMaximum(arr, 7, 3);