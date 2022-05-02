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
        if(this.head != null){
            this.head.prev = newNode;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertAtEnd(data){
        let newNode = new Node(data);
        if(this.head == null || this.length == 0){
            this.insertAtStart(data);
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail =  newNode;
        this.length++;
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

let dll = new DoublyLinkedList();
dll.insertAtStart(10);
dll.printDoublyLinkedList();
console.log("----------------------");
dll.insertAtEnd(20);
dll.printDoublyLinkedList();
console.log("----------------------");
dll.insertAtEnd(25);
dll.printDoublyLinkedList();
console.log("----------------------");
// dll.insertAtStart(5);
// dll.printDoublyLinkedList();
// console.log("----------------------");
// dll.insertAtPosition(2,15);
// dll.printDoublyLinkedList();
// console.log("----------------------");
// dll.deleteAtStart();
// dll.printDoublyLinkedList();
// console.log("----------------------");
// dll.deleteAtEnd();
// dll.printDoublyLinkedList();
// console.log("----------------------");
// dll.deleteAtPosition(1);
// dll.printDoublyLinkedList();
console.log(dll.findValueAtPosition(1));
console.log("----------------------");
dll.updateValueAtPosition(1, 90);
dll.printDoublyLinkedList();

