//A -> O(n), Omega(n)
for(let i=0; i<n; i++){
    for(let j =0; j< 50; j++){
        //some simple statement
    }
}
//B O(n*m) , Omega(n*m)
for(let i=0; i<n; i++){
    for(let j =0; j< m; j++){
        //some simple statement
    }
}
//C O(n), Omega(n)
for(let i=0; i<n; i=i+2){
     //some simple statement
}
//D O(log2n), Omega(log2n) => 2 is the base for log
for(let i=1; i<n; i=i*2){
    //some simple statement
}
//E O(sqrt(n)), Omega(sqrt(n))
for(let i=0; i*i < n; i++){
    //some simple statement
}
//F O(nlog2m) Omega(nlog2m) => 2 is the base for log
for(let i=0; i<n; i++){
    for(let j =1; j< m; j*2){
        //some simple statement
    }
}
//G O(infinte), Omega(infinte)
for(let i=0; i<n; i=i*2){
    //some simple statement
}


// O(n*n) , Omega(n)
function f(){
    if(x > 10){
        for(i =0; i<n; i++){
            //some simple code
        }
    }
    else{
        for(let i=0; i<n; i++){
            for(let j =0; j< n; j++){
                //some simple statement
            }
        }
    }
}
