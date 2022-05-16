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


let root = new Node(10);
root.left = new Node(20);
root.right = new Node(30);
root.left.left = new Node(40);
root.left.right = new Node(50);
root.right.right = new Node(60);
preorderTraversal(root);
console.log("----------------");
postorderTraversal(root);
console.log("----------------");
inorderTraversal(root);


//         10
//        /  \
//      20    30
//     /  \     \
//    40  50     60
console.log(root);