class TrieNode{
    constructor(value){
        this.data = value;
        this.leftChild = null;
        this.rightChild = null;
    }
}

function insert(root, x){

    let temp = root;
    for(let i=31; i>=0; i--){
        let bit = (x >> i)&1; //masking

        if(bit == 0){
            if(temp.leftChild == null){
                temp.leftChild = new TrieNode(0);
            }
            temp = temp.leftChild;
        }else{
            if(temp.rightChild == null){
                temp.rightChild = new TrieNode(1);
            }
            temp = temp.rightChild;
        }
    }
}


function maxXorHelper(root, x){
    let temp = root;
    let currXor = 0;

    for(let i=31; i>=0; i--){
        let bit = (x >> i)&1; //masking
        if(bit == 0){ //go towards right
            if(temp.rightChild){ //xor bit = 1
                currXor += (1<<i);
                temp = temp.rightChild;
            }
            else{//xor bit = 0
                temp = temp.leftChild
            }
        }else{ //go towards left
            if(temp.leftChild){ //xor bit = 1
                currXor += (1<<i);
                temp = temp.leftChild;
            }
            else{//xor bit = 0
                temp = temp.rightChild
            }
        }
    }
    return currXor;
}


function maxXorPair(arr){
    let maxXorVal = 0;
    let trieObj = new TrieNode();
    insert(trieObj, arr[0]);

    for(let i =1; i<arr.length; i++){
        maxXorVal = Math.max(maxXorVal, maxXorHelper(trieObj, arr[i]));
        insert(trieObj, arr[i]);
    }
    return maxXorVal;
}

let arr = [3, 10, 5, 25, 2, 8];
console.log(maxXorPair(arr));
