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

function depthOfTree(root){
    if(root == null){
        return 0;
    }

    let leftSubtreeHeight = depthOfTree(root.left);
    let rightSubtreeHeight = depthOfTree(root.right);

    let currHeight = Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
    return currHeight; 
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



function isSymmetric(root){
    return symmetricHelper(root.left, root.right);
}

function symmetricHelper(x, y){
    if(x == null && y== null) return true; //both are null
    if(x == null || y== null) return false; //any one of them is null
    return symmetricHelper(x.left, y.left) && symmetricHelper(x.right, y.right);//both are not null
}


function isMirror(root){
    return isMirrorHelper(root.left, root.right);
}

function isMirrorHelper(x, y){
    if(x == null && y== null) return true; //both are null
    if(x == null || y== null) return false; //any one of them is null
    return (x.data == y.data) && isMirrorHelper(x.left, y.right) && isMirrorHelper(x.right, y.left);//both are not null
}



function printAllNodesAtDistanceK(root, k, x){

    if(root == null){
        return -1;
    }

    if(root.data == x){
         printAllDescendentNodesAtDistanceK(root,k);
         return 0;
    }

    let distanceLeft =  printAllNodesAtDistanceK(root.left, k, x);

    if(distanceLeft != -1){ //node x exists on left
        if(distanceLeft + 1 == k){ //root's distance from x
            console.log(root.data);
        }
        else{
            printAllDescendentNodesAtDistanceK(root.right, k-distanceLeft-2);
        }
    }

    let distanceRight =  printAllNodesAtDistanceK(root.right, k, x);
    if(distanceRight != -1){ //node x exists on right
        if(distanceRight + 1 == k){//root's distance from x
            console.log(root.data);
        }
        else{
            printAllDescendentNodesAtDistanceK(root.left, k-distanceRight-2);
        }
    }

}


function printAllDescendentNodesAtDistanceK(root, k){
    if(root == null || k<0){
        return;
    }
    if(k == 0){
        console.log(root.data);
    }

    printAllDescendentNodesAtDistanceK(root.left, k-1);
    printAllDescendentNodesAtDistanceK(root.right, k-1);

}


function lowestCommonAncestor(root, node1, node2){ //LCA
    if(root == null){ //base case - 1
        return null;
    }

    if(root.data== node1.data || root.data == node2.data){//base case - 2
        return root;
    }

    //self work

    let leftLCA = lowestCommonAncestor(root.left, node1, node2);
    let rightLCA = lowestCommonAncestor(root.right, node1, node2);

    //current node is LCA
    if(leftLCA != null && rightLCA != null){
        return root;
    }

    return (leftLCA!=null)? leftLCA : rightLCA;
}



// let root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(4);
// root.left.right = new Node(6);
// root.right.right = new Node(19);
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
//console.log(isValidBST(root));

// console.log(isSymmetric(root));

// let root = new Node(10);
// root.left = new Node(15);
// root.right = new Node(15);
// root.left.left = new Node(19);
// root.right.right = new Node(19);
//         10
//        /  \
//      15     15
//     /        \
//    19        19

// console.log(isMirror(root));



// let root = new Node(10);
// root.left = new Node(5);
// root.right = new Node(15);
// root.left.left = new Node(4);
// root.left.left.left = new Node(14);
// root.left.left.right = new Node(16);
// root.left.right = new Node(6);
// root.right.right = new Node(19);
// preorderTraversal(root);
// console.log("----------------");
// postorderTraversal(root);
// console.log("----------------");
// inorderTraversal(root);


//         10
//        /  \
//      5     15
//     / \     \
//    4   6     19
//   /    \
//  14    16

//printAllNodesAtDistanceK(root, 2, 5);





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




let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(4);
root.left.left.left = new Node(14);
root.left.right = new Node(6);
root.left.right.right = new Node(16);
root.right.right = new Node(19);

let lca = lowestCommonAncestor(root, root.left.left.left, root.left );
console.log(lca.data);


//         10
//        /  \
//      5     15
//     / \     \
//    4   6     19
//   /    \
//  14    16


