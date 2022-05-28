class HashTable{
    constructor(size = 10){
        this.hashTable = new Array(size);
        this.currentSize = 0;
    }

    hash(key){
        let sum =0;
        for(let i=0; i<key.length; i++){
            sum += key.charCodeAt(i);
        }
        return sum % this.hashTable.length;
    }

    set(key, value){
        const index = this.hash(key);
        if(this.hashTable[index] == undefined){
            this.hashTable[index] = new Array();
        }
        this.hashTable[index].push([key, value]);
        this.currentSize++;
    }

    get(key){
        const index = this.hash(key);
        for(let i=0; i<this.hashTable[index].length; i++){
            if(this.hashTable[index][i][0] == key){
                return this.hashTable[index][i][1];
            }
        }
    }

    remove(key){
        const index = this.hash(key);
        for(let i=0; i<this.hashTable[index].length; i++){
            if(this.hashTable[index][i][0] == key){
                this.hashTable[index].splice(i,1);
                this.currentSize--;
            }
        }
    }

    print(){
        console.log(this.hashTable);
    }
}


const ht = new HashTable();
ht.set("one", 10);
ht.set("two", 15);
ht.set("three", 90);
ht.set("four", 87);
ht.set("five", 84);

console.log(ht.get("one"));
console.log(ht.get("three"));
console.log(ht.get("four"));
ht.print();
ht.remove("three");
console.log("----------------------");
ht.print();

//index => list of key value pairs
// 0 ["seventy", 108]
// 1 ["one", 22], ["thirty", 50]
// 2
// 3 ["fifty", 78]
// 4

// hashtable[index] => hashTable[1] => ["one", 22], ["thirty", 50]
// hashTable[index][i] => hashTable[1][1]=> ["thirty", 50]
// hashTable[index][i][j] => hashTable[1][1][0] => "thirty"

//index => list of key value pairs
// 0 ["seventy", 108]
// 1 ["one", 22]
// 2
// 3 ["fifty", 78]
// 4