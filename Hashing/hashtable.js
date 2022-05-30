class HashTable{
    constructor(size = 10){
        this.hashTable = new Array(size);
        this.currentSize = 0;
        this.MAX_LOAD_FACTOR = 0.8;
    }

    hash(key){ //"abcd" => 97+98+99+100
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

        let loadFactor = this.currentSize / this.hashTable.length;
        if(loadFactor > this.MAX_LOAD_FACTOR){
            this.rehash();
            console.log("rehashing done");
        }
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
                this.hashTable[index].splice(i,1); //splice(index, no. of items to be deleted)
                this.currentSize--;
            }
        }
    }

    print(){
        console.log(this.hashTable);
    }

    rehash(){
        let oldHashTable = this.hashTable;
        this.hashTable = new Array(2*oldHashTable.length);
        this.currentSize = 0;
        for(let idx=0; idx<oldHashTable.length; idx++){
            if(oldHashTable[idx]){
                for(let element = 0; element< oldHashTable[idx].length; element++){
                    this.set(oldHashTable[idx][element][0], oldHashTable[idx][element][1]);
                }
            }
        }
    }
}


const ht = new HashTable();
ht.set("one", 10);
ht.print();
console.log("----------------------");
ht.set("two", 15);
ht.print();
console.log("----------------------");
ht.set("three", 90);
ht.print();
console.log("----------------------");
ht.set("four", 87);
ht.print();
console.log("----------------------");
ht.set("five", 84);
ht.print();
console.log("----------------------");
ht.set("seven", 49);
ht.print();
console.log("----------------------");
ht.set("eight", 4);
ht.print();
console.log("----------------------");
ht.set("six", 89);
ht.print();
console.log("----------------------");
ht.set("nine", 91);
ht.print();
console.log("----------------------");
// console.log(ht.get("one"));
// console.log(ht.get("three"));
// console.log(ht.get("four"));
// ht.print();
// ht.remove("three");
// console.log("----------------------");
// ht.print();

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

// this.hashTable[index][i][1]
// this.hashTable[1][1][1]

// 1 [["one", 22], ["thirty", 50]]