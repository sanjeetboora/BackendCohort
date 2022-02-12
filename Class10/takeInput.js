// for browser
// const name = window.prompt("enter your name");
// console.log(name);

// for node
// console.log(process);

const readLine = require('readline');

const take = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
});

take.question("what is your name", function(answer){
    console.log("my name is", answer);
    console.log(answer.split(','));
    take.close();
});