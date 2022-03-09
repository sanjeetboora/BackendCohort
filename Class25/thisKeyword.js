function person(name){
    this.name = name;
}
let x1 = new person("Ramesh");
console.log(x1.name);

class Person{
    aastha(name){
        this.name = name;
    }
}
let p1 = new Person("Aastha");
console.log(p1);
console.log(p1.name);

//=========================================
class Human{
  eyes = 2;
   print(){
    console.log(this.eyes);
  }
}

let h1 = new Human();
console.log(h1);

class Animal{
  legs;
  
  constructor(legs){
    this.legs = legs;
  }
  print(){
    console.log(this.legs);
  }
}

let a1 = new Animal(4);
console.log(a1);