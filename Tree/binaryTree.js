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


function rightViewOfBinaryTree(root){
    if(!root){
        return;
    }
    let result=[];
    let queue = new Queue();
    queue.enqueue(root);
    queue.enqueue(null);
    while(!queue.isEmpty()){
        let n = queue.getFront();
        queue.dequeue();
        if(!queue.isEmpty() && queue.getFront() == null){
            result.push(n.data);
        }
        if(n == null){
            if(!queue.isEmpty()){
                queue.enqueue(null);
            }
            continue;
        }
        if(n.left != null){
            queue.enqueue(n.left);
        }
        if(n.right != null){
            queue.enqueue(n.right);
        }
    }
    return result;
}

function leftViewOfBinaryTree(root){
    if(!root){
        return;
    }
    let result=[];
    let queue = new Queue();
    queue.enqueue(root);
    queue.enqueue(null);
    result.push(root.data);
    while(!queue.isEmpty()){
        let n = queue.getFront();
        queue.dequeue();
       
        if(n == null){
            if(!queue.isEmpty()){
                queue.enqueue(null);
                result.push(queue.getFront().data);
            }
            continue;
        }
        if(n.left != null){
            queue.enqueue(n.left);
        }
        if(n.right != null){
            queue.enqueue(n.right);
        }
    }
    return result;
}


function isValidBST(root){
    return isBST(root, Number.MIN_VALUE, Number.MAX_VALUE);
}

//minimum = maximum of left subtree, maximum => minimum of right subtree
function isBST(node, minimum, maximum){
    if(node == null){ //base case
        return true;
    }

    if(minimum > node.data || node.data > maximum){
        return false;
    }

    let leftSubtreeIsBST = isBST(node.left, minimum, node.data);
    let rightSubtreeIsBST = isBST(node.right, node.data, maximum);

    return leftSubtreeIsBST && rightSubtreeIsBST;
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(4);
root.left.right = new Node(6);
root.right.right = new Node(19);
// preorderTraversal(root);
// console.log("----------------");
// postorderTraversal(root);
// console.log("----------------");
// inorderTraversal(root);


//         10
//        /  \
//      20    30
//     /  \     \
//    40  50     90
//console.log(root);
//printLevelK(root, 0, 2);
//let height = heightOfTree(root);
//console.log(height);
//printAllLevels(root);
//levelOrderOptimized(root);

// let rightView = rightViewOfBinaryTree(root);
// console.log(rightView);

// let leftView = leftViewOfBinaryTree(root);
// console.log(leftView);

//         10
//        /  \
//      5     15
//     /  \     \
//    4  6      19
console.log(isValidBST(root));

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

