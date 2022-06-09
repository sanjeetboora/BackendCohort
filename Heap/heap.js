class Heap{

    constructor(){ //max heap
        this.heap = [];
    }

    upheapify(idx){
        if(idx == 0) return;

        while(idx > 0){
            let parent = Math.floor((idx - 1)/2);
            if(this.heap[idx] > this.heap[parent]){ //swap
                let temp = this.heap[idx];
                this.heap[idx] = this.heap[parent];
                this.heap[parent] = temp;
                //[this.heap[idx], this.heap[parent]] = [this.heap[parent], this.heap[idx]];
            }
            else{
                break;
            }
            idx = parent;
        }
    }

    insert(element){
        this.heap.push(element);
        this.upheapify(this.heap.length-1);
    }

    display(){
        console.log(this.heap);
    }
    getMax(){
        return this.heap[0];
    }
    downheapify(idx){
        let largestIdx = idx;
        while(idx < this.heap.length){
            let leftChild = 2*idx + 1;
            let rightChild = 2*idx+2;

            if(leftChild < this.heap.length && this.heap[leftChild] > this.heap[largestIdx]){
                largestIdx = leftChild;
            }
            if(rightChild < this.heap.length && this.heap[rightChild] > this.heap[largestIdx]){
                largestIdx = rightChild;
            }

            if(largestIdx == idx) break;

            let temp = this.heap[idx];
            this.heap[idx] = this.heap[largestIdx];
            this.heap[largestIdx] = temp;
            idx = largestIdx;
        }
    }
    popMax(){ //pop root node
        let temp = this.heap[0];
        this.heap[0] = this.heap[this.heap.length-1];
        
        this.heap.pop();
        this.downheapify(0);
    }

}

let maxHeap = new Heap();
maxHeap.insert(100);
maxHeap.display();
maxHeap.insert(10);
maxHeap.display();
maxHeap.insert(30);
maxHeap.display();
maxHeap.insert(400);
maxHeap.display();
maxHeap.insert(50);
maxHeap.display();
console.log(maxHeap.getMax());
maxHeap.popMax();
maxHeap.display();
maxHeap.popMax();
maxHeap.display();