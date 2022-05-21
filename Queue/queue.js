class Queue{ //circular queue
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
        //return front == -1;
    }

    enqueue(value){
        //1st way using current length
        if(this.currLength == this.maxLength){
            throw new Error("queue overflow");
        }
        //2nd way using front and rear
        if((this.rear + 1)%this.maxLength == this.front){
            throw new Error("queue overflow");
        }
        //update front on adding first element in queue
        if(this.front == -1){
            this.front = (this.front +1)%this.maxLength;
        }

        this.rear = (this.rear + 1)%this.maxLength;
        this.data[this.rear] = value;
        this.currLength++;
    }

    dequeue(){
        //1st way using current length
        if(this.currLength == 0){
            throw new Error('queue underflow');
        }
        //2nd way using front
        if(this.front == -1){
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

    getFront(){
        if(this.front == -1 || this.currLength == 0){
            console.log("Queue is Empty");
            return;
        }
        return this.data[this.front];
    }

}

// let myQueue = new Queue();
// myQueue.enqueue(20);
// myQueue.enqueue(30);
// myQueue.enqueue(40);
// myQueue.enqueue(50);
// myQueue.enqueue(60);
// console.log(myQueue.getFront());
// myQueue.dequeue();
// console.log(myQueue.getFront());
// myQueue.dequeue();
// console.log(myQueue.getFront());
// myQueue.dequeue();
// console.log(myQueue.getFront());
// myQueue.dequeue();
// console.log(myQueue.getFront());
// myQueue.dequeue();
// console.log(myQueue.getFront());
//myQueue.enqueue(70);


exports.Queue = Queue;