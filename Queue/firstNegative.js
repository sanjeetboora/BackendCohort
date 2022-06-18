
function printFirstNegativeForWindowSizeK(arr, k){
    let queue = []; //enqueue => arr.push //dequeue => arr.shift
    for(let i=0; i<arr.length; i++){
        if(arr[i] < 0) queue.push(i);
    }

    for(let i=0, j= k-1; j<arr.length && i<arr.length-k; i++, j++){
        while(queue[0] < i){
            queue.shift();
        }

        if(queue[0] >= i && queue[0] <= j){
            console.log(i, j, " => ",arr[queue[0]]);
        }
        else{
            console.log(i, j, " => ",0);
        }
    }
}

let arr = [-2,0,-3,10, 9, 8,-4, 5, 6];
let k =3;
printFirstNegativeForWindowSizeK(arr, k);