// //import file system module -> core module
// const fs = require('fs');
// const pathOfDir = "C:\\Users\\Administrator\\Desktop\\BE\\Class24";
// console.log("before");
// fs.readdir(pathOfDir, (err, files)=>{
//     console.log(err);
//     console.log(files);
//     files.forEach(f =>{
//         console.log(f);
//     })
// });
// console.log("after");


//import user defined module
const myMod = require('./file2');
console.log(myMod);
// console.log(myMod.car);
// console.log(myMod.name);
// console.log(myMod.color);

