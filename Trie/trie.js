class TrieNode{
    constructor(value){
        this.data = value;
        this.children = new Map();
        this.isEndOfWord = false;
    }
}

function insert(root, str){
    if(str.length <= 0){
        return;
    }
    let temp = root;
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        if(!temp.children.has(currChar)){
            let newNode = new TrieNode(currChar);
            temp.children.set(currChar, newNode);  
        } 
        temp = temp.children.get(currChar);
    }
    temp.isEndOfWord = true;
}

function search(root, str){
    let temp = root;
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        if(!temp.children.has(currChar)){
            return false;
        } 
        temp = temp.children.get(currChar);
    }
    return temp.isEndOfWord;
}


let root = new TrieNode(null);
insert(root, "ape");
console.log(root);
insert(root, "apple");
console.log(root);
insert(root, "bat");
console.log(root);
insert(root, "batman");
console.log(root);

console.log(search(root, "apple"));
console.log(search(root, "app"));
insert(root, "");
console.log(search(root, ""));
console.log(root);