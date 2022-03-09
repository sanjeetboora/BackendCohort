const car = { 
    name: "myCar",
    color: "black"
}
const bike = { 
    name: "myBike",
    color: "white"
}

function printName(){
    console.log("javascipt");
}
 
// module.exports = car;
// module.exports = bike;
//module.exports = [car, bike];
// module.exports = {
//     car: car,
//     bike: bike
// }

 exports.bike1 = bike;
 exports.car1 = car;
 exports.printName = printName;


