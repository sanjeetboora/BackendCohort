function detectcycle(){
    if(this.head == null){
        return false;
    }

    let slow = this.head;
    let fast = this.head;

    while(slow != fast){
        if(fast == null || fast.next == null){
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
}