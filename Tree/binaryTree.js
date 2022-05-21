const {Queue} = require('../Queue/queue');

class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}



function preorderTraversal(root){
    if(root == null) return; //base case
    //root, left , right
    console.log(root.data);
    preorderTraversal(root.left);
    preorderTraversal(root.right);
}
function postorderTraversal(root){
    if(root == null) return; //base case
    //left , right, root
    postorderTraversal(root.left);
    postorderTraversal(root.right);
    console.log(root.data);
}

function inorderTraversal(root){
    if(root == null) return; //base case
    // left ,root, right
    inorderTraversal(root.left);
    console.log(root.data);
    inorderTraversal(root.right);
}

function heightOfTree(root){
    if(root == null){
        return -1;
    }

    let leftSubtreeHeight = heightOfTree(root.left); //-1 //0
    let rightSubtreeHeight = heightOfTree(root.right);//-1 //0

    let currHeight = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    return currHeight; //0
}

function printLevelK(root, currLevel, levelToPrint){
    if(root == null) return; //base case
    //root, left , right
    if(currLevel == levelToPrint){
        console.log(root.data);
        return;
    }
    printLevelK(root.left, currLevel+1, levelToPrint);
    printLevelK(root.right, currLevel+1, levelToPrint);
}

function printAllLevels(root){ //n + (n*height)=> O(n*height)
    let lastLevel = heightOfTree(root);  //O(n)
    for(let x = 0; x <= lastLevel; x++){ //O(n*height)
        console.log("-------level : ",x," ------");
        printLevelK(root, 0, x); //O(n)
        console.log("-------------");
    }
}

function levelOrderOptimized(root){
    if(!root){
        return;
    }
    let queue = new Queue();
    queue.enqueue(root);
    queue.enqueue(null);
    while(!queue.isEmpty()){
        let n = queue.getFront();
        queue.dequeue();
        if(n == null){
            console.log("--------------------");
            if(!queue.isEmpty()){
                queue.enqueue(null);
            }
            continue;
        }
        console.log(n.data);
        if(n.left != null){
            queue.enqueue(n.left);
        }
        if(n.right != null){
            queue.enqueue(n.right);
        }
    }
}

let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(90);
// preorderTraversal(root);
// console.log("----------------");
// postorderTraversal(root);
// console.log("----------------");
// inorderTraversal(root);


//         10
//        /  \
//      20    30
//     /  \     \
//    40  50     60
//console.log(root);
//printLevelK(root, 0, 2);
//let height = heightOfTree(root);
//console.log(height);
//printAllLevels(root);
levelOrderOptimized(root);


function buildTree(input, n){
    let arr = [];
    let parentIndex=0;
    arr[parentIndex] = input[0];
    for(let i=1; i<n; i=i+2){
        let left= 2*parentIndex +1;
        let right= 2*parentIndex +2;
        arr[left] = input[i];
        arr[right] = input[i+1];
        parentIndex++;
    }
    return arr;
}

let input = [10, 20, 30, 40, 50, null, 60, null, null, null, null, null, null, null, null];

//console.log(buildTree(input, 15));
//         10
//        /  \
//      20    30
//     /  \     \
//    40  50     60

