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
}