function ways(i, j, m, n, visited){
    if(i < 0 || j < 0 ||i >= m || j >= n){ //boundries
        return 0;
    }
    if(visited[i][j] == true){
        return 0;
    }
    if(i == m-1 && j == n-1){
        return 1;
    }
    
    visited[i][j] = true;
    let totalWays = ways(i+1, j, m, n, visited) + ways(i, j+1, m, n, visited);
    visited[i][j] = false; //backtracking
    return totalWays;
}


let rows = 3;
let cols = 3;
let visited = [];
for(let i=0; i< rows; i++){
    visited.push(  Array(cols).fill(false)   );
}

// [
//     [false, false, false, false],
//     [false, false, false, false],
//     [false, false, false, false]
// ]
console.log(ways(0,0, rows, cols, visited));

