
function squareRoot(n){
    let start =0;
    let end =  n;
    let ans = 0;
    while(start <=  end){
        let mid = start + Math.floor((end-start)/2);
        let square = mid*mid;

        if(square <= n){
            ans = mid;
        }
        if(square < n){ //towards right
            start = mid+1; 
        }
        else{ //towards left
            end = mid-1;
        }
    }

    return ans;
}

let n = 18;
let ans = squareRoot(n);
console.log(ans);