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
        this.length =0;
    }

    insertAtStart(data){
        let newNode = new Node(data); //create a new node with data
        newNode.next = this.head; //attach new node at the start or current head
        this.head = newNode; //Update the head pointer to new node
        this.length++;
    }

    insertAtPosition(x){

    }

    insertAtLast(){
        
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

myLinkedList.insertAtStart(10);
console.log(myLinkedList.head);
console.log(myLinkedList.length);

myLinkedList.insertAtStart(20);
console.log(myLinkedList.head);
console.log(myLinkedList.length);

myLinkedList.insertAtStart(30);
console.log(myLinkedList.head);
console.log(myLinkedList.length);

console.log("------------------------");

myLinkedList.printLinkedList();
