function findMid(){
    let fast =  this.head;
    let slow = this.head;

    while(fast!= null && fast.next!=null){
        slow=slow.next;
        fast = fast.next.next;
    }
    return slow.data;
}