
class Human{
    name;
    #money;//private property declaration
    spouse;
    constructor(name){
      this.name = name;
      this.#money = 1000000000;
      this.spouse = '';
    }
    print(){
      console.log(this.name);
    }
    setMarriage(spouse){ //setter method
      if(spouse == ''){
        console.log("shut up");
      }
      else{
        this.spouse = spouse;
      }
    }
    getMarriage(){ //getter method
      console.log(this.spouse);
    }
  }
  Human.prototype.age = 10;
  
  let a1 = new Human("Ramesh");
  console.log(a1);
  // //console.log(a1.#money);
  // a1.age = 100;
  // console.log(a1.__proto__);
  a1.setMarriage('');
  a1.getMarriage();
  
  
  
  
  // class Kid{
  //   constructor(gadgets){
  //     this.gadgets = gadgets;
  //   }
  // }
  
  // let k1 = new Kid("iPad");
  // console.log(k1);
  
  class Kid extends Human{
    constructor(gadgets){
      super(name);//call parent class's constructor
      this.gadgets = gadgets;
    }
  }
  
  let k1 = new Kid("ajay","iPad");
  console.log(k1);
  class Animal{
    speak(){
      console.log("animal is speaking");
    }
  }
  
  //=================================================
  class Cat extends Animal{
    speak(){
      console.log("cat does meow");
    }
  }
  
  class Dog extends Animal{
    speak(){
      console.log("dog does bark");
    }
  }
  
  let a = new Animal();
  console.log(a);
  a.speak();
  let c = new Cat();
  console.log(c);
  c.speak();
  let d = new Dog();
  console.log(d);
  d.speak();
  
//================================================

// const person = {
//     name : "Amar",
//     age: 20,
//     siblings : ["neha", "kushal"],
//     marks:{
//         maths: 50,
//         science: 80
//     },
//     speak: function(){
//         console.log("bleh bleh bleh");
//     }
// }
// let pObj = Object.create(person);
// pObj.name = "Anjali";
// console.log(pObj.name);

// let p1Obj = Object.create(person);
// console.log(p1Obj.name);

// const p1 = pObj;
// console.log(p1);
// console.log(p1.age);
// let p2 = p1;
// p1= p1Obj;
// console.log(p1);


//===============================

let person = {
    noOfHands : 2,
    noOfLegs: 2
}
// Object.freeze(person);
// console.log(person);
// person.noOfHands = 4;
// delete person.noOfHands;
// console.log(person);
Object.seal(person);
Object.freeze(person);
console.log(person);
person.noOfHands = 4;
delete person.noOfHands;
person.eyes =2;
console.log(person);
console.log(Object.isSealed(person));