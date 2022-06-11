class Heap{

    constructor(){ //min heap
        this.heap = [];
    }

    size(){
        return this.heap.length;
    }
    upheapify(idx){
        if(idx == 0) return;

        while(idx > 0){
            let parent = Math.floor((idx - 1)/2);
            if(this.heap[idx] < this.heap[parent]){ //swap
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
    getMin(){
        return this.heap[0];
    }
    downheapify(idx){
        let largestIdx = idx;
        while(idx < this.heap.length){
            let leftChild = 2*idx + 1;
            let rightChild = 2*idx+2;

            if(leftChild < this.heap.length && this.heap[leftChild] < this.heap[largestIdx]){
                largestIdx = leftChild;
            }
            if(rightChild < this.heap.length && this.heap[rightChild] < this.heap[largestIdx]){
                largestIdx = rightChild;
            }

            if(largestIdx == idx) break;

            let temp = this.heap[idx];
            this.heap[idx] = this.heap[largestIdx];
            this.heap[largestIdx] = temp;
            idx = largestIdx;
        }
    }
    popMin(){ //pop root node
        this.heap[0] = this.heap[this.heap.length-1];
        
        this.heap.pop();
        this.downheapify(0);
    }

}


function minCostToJoinRopes(ropes){
    let minHeap = new Heap();
    for(let i=0; i<ropes.length; i++){
        minHeap.insert(ropes[i]);
    }
    let totalcost = 0;
    while(minHeap.size() > 0){
        let x = minHeap.getMin();
        minHeap.popMin();
        let y = minHeap.getMin();
        minHeap.popMin();
        totalcost += (x+y);

        if(minHeap.size() > 0)minHeap.insert(x+y);
        else return totalcost;
    }
}


let ropes = [10, 5, 6, 9];
console.log(minCostToJoinRopes(ropes));


