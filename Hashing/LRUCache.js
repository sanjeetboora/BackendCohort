class Node{
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }


    
    insertAtStart(data){
        let newNode = new Node(data);
        if(this.head == null || this.length == 0){
            this.tail = newNode;
        }
       else if(this.head != null){
            this.head.prev = newNode;
            newNode.next = this.head;
        }
        this.head = newNode;
        this.length++;
    }

    insertAtEnd(data){
        if(this.head == null || this.length == 0){
            this.insertAtStart(data);
            return;
        }
        let newNode = new Node(data);
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail =  newNode;
        this.length++;
    }

    getTail(){
        return this.tail;
    }
    getHead(){
        return this.head;
    }

    insertAtPosition(x, data){
        //for invalid position
        if(x < 0 || x > this.length){
            console.log("invalid position");
            return;
        }
        if(x == 0){
            this.insertAtStart(data);
            return;
        }
        else if(x == this.length){
            this.insertAtEnd(data);
        }
        else{
            let newNode = new Node(data);
            let curr = this.head;
            let previous = null;
            let currIndex = 0; //index start from 0
            while(currIndex < x){
                previous = curr;
                curr=curr.next;
                currIndex++;
            }
            previous.next = newNode;
            newNode.prev = previous;
            newNode.next =curr;
            curr.prev = newNode;
            this.length++;
        }
    }

    printDoublyLinkedList(){

        let temp = this.head;
        while(temp != null){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    deleteAtStart(){
        if(this.head == null){
            return;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        temp=null;
        this.length--;
    }

    deleteAtEnd(){
        if(this.tail == null){
            return;
        }
        let temp = this.tail;
        console.log("this.tail", this.tail);
        this.tail = this.tail.prev;
        this.tail.next = null;
        temp = null;
        this.length--;
    }

    deleteAtPosition(x){
        if(this.head == null || x >= this.length || x<0){
            console.log("invalid index");
            return;
        }
        if(x == 0){
            this.deleteAtStart();
            return;
        }
        else if(x == this.length-1){
            this.deleteAtEnd();
            return;
        }

        let currNode = this.head;
        let prevNode = null;
        let currIndex = 0; //index start from 0
        while(currIndex < x){
            prevNode = currNode;
            currNode=currNode.next;
            currIndex++;
        }

        prevNode.next = currNode.next;
        currNode.next.prev = prevNode;
        currNode = null;
        this.length--;
    }

    deleteGivenNode(node){
        //node is head
        if(node.prev == null){
            this.deleteAtStart();
        }

        //node is tail
        else if(node.next == null){
            this.deleteAtEnd();
        }

        //node is somewhere in between
        else{
            let prevNode = node.prev;
            prevNode.next = node.next;
            node.next.prev = prevNode;
        }

    }

    findValueAtPosition(x){
        if(x >= this.length || x<0){
            console.log("invalid index");
            return;
        }
        let currNode = this.head;
        let currIndex = 0; //index start from 0
        while(currIndex < x){
            currNode=currNode.next;
            currIndex++;
        }
        return currNode.data;
    }

    updateValueAtPosition(x, data){
        if(x >= this.length || x<0){
            console.log("invalid index");
            return;
        }
        let currNode = this.head;
        let currIndex = 0; //index start from 0
        while(currIndex < x){
            currNode=currNode.next;
            currIndex++;
        }
        currNode.data = data;
        return currNode.data;
    }
}


class LRUCache{

    constructor(sz = 10){
        this.dll = new DoublyLinkedList();
        this.mp = new Map();
        this.maxSize = sz;
    }

    insert(x){
        //when ele already exists
        if(this.mp.has(x)){
            //get address of x from the map
            let addX = this.mp.get(x);
            //remove x from dll
            this.dll.deleteGivenNode(addX);
        }
        else{ //when ele doesn't exist
            if(this.mp.size >= this.maxSize){
              //when ele doesn't exist and memory is full
                //remove least recently used (LRU) element from dll and map
                let lru = this.dll.getHead();
                this.mp.delete(lru.data);
                this.dll.deleteAtStart();
            }
        } 
        //add x at tail dll
        this.dll.insertAtEnd(x); 
        //update address of x in map
        this.mp.set(x, this.dll.getTail());
    }

    getLRU(){
        return this.dll.head?.data;
    }

    display(){
        // console.log(this.dll);
        this.dll.printDoublyLinkedList();
        console.log("--------------------");
    }
}


let lruObj = new LRUCache(5);

lruObj.insert(10);
lruObj.display();
lruObj.insert(20);
lruObj.display();
lruObj.insert(30);
lruObj.display();
lruObj.insert(40);
lruObj.display();
lruObj.insert(30);
lruObj.display();
lruObj.insert(60);
lruObj.display();
lruObj.insert(70);
lruObj.display();


