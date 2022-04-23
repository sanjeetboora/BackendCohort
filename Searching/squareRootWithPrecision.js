
function squareRoot(n, p){
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

    let add = 0.1;

    while (p>0){
        ans = ans + add;
        while(ans*ans <= n){
            ans = ans+add;
        }
        ans = ans-add;
        add = add/10;
        p--;
    }

    return ans;
}

let n = 18;
let ans = squareRoot(n, 4);
console.log(ans);
//4.24 => 4.239999999999998
//4.2426 => 4.242599999999998