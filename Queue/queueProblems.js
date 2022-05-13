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


function firstUniqueChar(str){
    
    let freqArr = new Array(26);
    freqArr.fill(0);
    let uniqueElementsQueue = new Queue();

    for(let i=0; i<str.length; i++){
        let ch = str[i];
        let indexOfCh = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        freqArr[indexOfCh]++; //increase the frequency of current char ch

        if(freqArr[indexOfCh]==1){ //ch is unique
            uniqueElementsQueue.enqueue(ch);
        }else{//ch is not unique
            while(!uniqueElementsQueue.isEmpty() && 
            freqArr[uniqueElementsQueue.getFront().charCodeAt(0) - 'a'.charCodeAt(0)] >1){
                uniqueElementsQueue.dequeue();
            }
        }

        if(uniqueElementsQueue.isEmpty()){
            console.log("till ", ch," first unique is ", -1);
        }
        else{
            console.log("till ", ch," first unique is ", uniqueElementsQueue.getFront());
        }
    }
}

// firstUniqueChar("abcbcdae");
//firstUniqueChar("abcbcdade");

