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

let myDeque = new Deque();

myDeque.enqueueAtFront(10);
console.log("size: ", myDeque.size());
console.log("front: ", myDeque.getFront());
console.log("rear: ", myDeque.getRear());
console.log("-----------------------------------");
myDeque.enqueueAtFront(20);
console.log("size: ", myDeque.size());
console.log("front: ", myDeque.getFront());
console.log("rear: ", myDeque.getRear());
console.log("-----------------------------------");
myDeque.enqueueAtRear(40);
console.log("size: ", myDeque.size());
console.log("front: ", myDeque.getFront());
console.log("rear: ", myDeque.getRear());
console.log("-----------------------------------");
myDeque.enqueueAtRear(50);
console.log("size: ", myDeque.size());
console.log("front: ", myDeque.getFront());
console.log("rear: ", myDeque.getRear());
console.log("-----------------------------------");
myDeque.enqueueAtRear(100);
console.log("size: ", myDeque.size());
console.log("front: ", myDeque.getFront());
console.log("rear: ", myDeque.getRear());
console.log("-----------------------------------");
myDeque.dequeueFromFront();
console.log("size: ", myDeque.size());
console.log("front: ", myDeque.getFront());
console.log("rear: ", myDeque.getRear());
console.log("-----------------------------------");
myDeque.dequeueFromRear();
console.log("size: ", myDeque.size());
console.log("front: ", myDeque.getFront());
console.log("rear: ", myDeque.getRear());
console.log("-----------------------------------");
