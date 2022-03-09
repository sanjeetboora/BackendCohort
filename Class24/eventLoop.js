function cooker(){
    console.log("vegetable cooked");
}

function cooking(){
    console.log("chopped vegetables");
    //cooker();
    setTimeout(cooker, 2000);
    setTimeout(()=>{
        console.log("watching tv");
    }, 1000);
    setTimeout(()=>{
        console.log("break");
    }, 0);
    console.log("dough ready");
}
cooking();