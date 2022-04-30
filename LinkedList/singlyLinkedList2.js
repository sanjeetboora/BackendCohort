//Let's meet at 9:53;
//Node Class
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

//Linked List Class

class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length =0;
    }

    insertAtStart(data){
        let newNode = new Node(data); //create a new node with data
        if(head == null || this.length == 0){
            this.tail = newNode;
        }
        newNode.next = this.head; //attach new node at the start or current head
        this.head = newNode; //Update the head pointer to new node
        this.length++;
    }

    insertAtPosition(x, data){
        if(x == 0){
            this.insertAtStart(data);
            return;
        }
        if(x > this.length){
            this.insertAtLast(data);
            return;
        }
        let pos = 1;
        let prev = null;
        let curr = this.head;

        while(pos < x){
            prev = curr;
            curr = curr.next;
            pos++;
        }

        let newNode = new Node(data);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
    }

    insertAtLast(data){
        if(this.head == null){
            this.insertAtStart(data);
            return;
        }
        let newNode = new Node(data);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    updateDataAtPosition(x, data){
        if(this.head == null || this.length == 0 || x > this.length){
            console.log("invalid position");
            return;
        }

        let curr = this.head;
        let pos =1;
        while(pos<x){
            curr = curr.next;
        }
        curr.data = data;
    }

    printLinkedList(){
        let currNode = this.head;
        
        while(currNode != null){
            console.log(currNode.data);
            currNode = currNode.next;
        }
    }
}

let myLinkedList = new SinglyLinkedList();
console.log(myLinkedList.head);
console.log(myLinkedList.length);

// myLinkedList.insertAtStart(10);
// // console.log(myLinkedList.head);
// // console.log(myLinkedList.length);

// myLinkedList.insertAtStart(20);
// // console.log(myLinkedList.head);
// // console.log(myLinkedList.length);

// myLinkedList.insertAtStart(30);
// console.log(myLinkedList.head);
// console.log(myLinkedList.length);

console.log("------------------------");

myLinkedList.printLinkedList();
console.log("------------------------");
// myLinkedList.insertAtPosition(2, 25);
// myLinkedList.printLinkedList();

// console.log("------------------------");
// myLinkedList.insertAtPosition(0, 5);
// myLinkedList.printLinkedList();

// console.log("------------------------");
// myLinkedList.insertAtPosition(10, 100);
// myLinkedList.printLinkedList();




console.log("------------------------");
myLinkedList.insertAtLast(100);
myLinkedList.printLinkedList();
console.log("------------------------");
console.log("------------------------");
myLinkedList.insertAtLast(200);
myLinkedList.printLinkedList();
console.log("------------------------");