// function fun(x){
//     let result = x*x;
//     return result;
// }
// console.log(fun(5));

// //inversion of control
// function paymentApi(userData, cb){
//     cb();
//     cb();
// }

// function pay(){
//     //make payment of 100000;
// }

// paymentApi(userData, pay);




function funPromise(){
    return new Promise((resolve, reject) =>{
        //api call
        let success = true;
        let data = "";
        data = "successfully called";
        if(success){
            resolve(data);
            resolve(data);//won't run
        }else{
            reject(data);
        }
    })
}

console.log(funPromise());
console.log("just to make a delay");

funPromise()
.then(function(data){
    console.log(data);
    console.log("my promise is fulfilled");
    return "Hi this data is for 2nd then";
})
.then(function(data){
    console.log(data);
    console.log("2nd then");
})
.catch( function(data){
    console.error("my promise is rejected");
    console.log(data);
})
.finally(() => console.log("i am done"));








