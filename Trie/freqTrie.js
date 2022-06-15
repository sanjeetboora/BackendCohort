class TrieNode{
    constructor(value){
        this.data = value;
        this.children = new Array(26);
        this.isEndOfWord = false;
        this.SuffixStrings = 0;
    }
}

function insert(root, str){
    if(str.length <= 0){
        return;
    }
    let temp = root;
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        let idx = currChar.charCodeAt(0)- 'a'.charCodeAt(0);
        if(!temp.children[idx]){
            let newNode = new TrieNode(currChar);
            temp.children[idx] =  newNode;  
        } 
        temp.SuffixStrings++;
        temp = temp.children[idx];
    }
    temp.isEndOfWord = true;
}

function search(root, str){
    let temp = root;
    for(let i=0; i<str.length; i++){
        let currChar = str[i];
        let idx = currChar.charCodeAt(0)- 'a'.charCodeAt(0);
        if(!temp.children[idx]){
            return false;
        } 
        temp = temp.children[idx];
    }
    return temp.isEndOfWord;
}




function printTrie(root, output) {
    if(!root) return;
    if(root.isEndOfWord) {
        console.log(output);
    }
    for(let i=0; i<root.children.length; i++){
        if(root.children[i]){
            let ch = 'a'.charCodeAt(0)+i;
            printTrie(root.children[i], output+String.fromCharCode(ch));
        }
    }
}

function lexicographicallySmallerHelper( root, query){
    let temp=root;
    let count =0;
    for(let q=0; q<query.length;q++){
        let idx = query.charCodeAt(q) - 'a'.charCodeAt(0);
        let contri = 0;
        if(temp.SuffixStrings > 0){
            for(let i = 0; i<idx; i++){
                if(temp.children[i]) {
                    contri+= temp.children[i].isEndOfWord?1: temp.children[i].SuffixStrings;
                }
            }
        }
        count += contri;
        if(!temp.children[idx]){
            return count;
        }
        temp=temp.children[idx];
    }
    return count;
}


function lexicographicallySmaller(strList, queryList){
    let trieObj = new TrieNode(null);
    for(let i=0; i<strList.length; i++){
        insert(trieObj, strList[i]);
    }
    printTrie(trieObj, "");   
    for(let i=0; i<queryList.length; i++){
        console.log(lexicographicallySmallerHelper(trieObj, queryList[i]));
    }

}

 let list = ["abc", "abd", "cab", "dfg"];
let queryList = ["abc", "xyz"];
lexicographicallySmaller(list, queryList);
