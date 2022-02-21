function ways(i, j, m, n, path){
    if(i >= m || j >= n){
        return 0;
    }
    if(i == m-1 && j == n-1){
        console.log(path);
        return 1;
    }
    let totalWays = ways(i+1, j, m, n, path + "D") + ways(i, j+1, m, n, path + "R");
    return totalWays;
}


let rows = 3;
let cols = 4;
console.log(ways(0,0, rows, cols, ""));

