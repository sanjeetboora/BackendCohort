function ways(i, j, m, n, visited, maze){
    if(i < 0 || j < 0 ||i >= m || j >= n){ //boundries
        return 0;
    }
    if(maze[i][j] == 1){//when there is a rock
        return 0;
    }
    if(visited[i][j] == true){
        return 0;
    }
    if(i == m-1 && j == n-1){
        return 1;
    }
    
    visited[i][j] = true;
    let totalWays = ways(i+1, j, m, n, visited, maze) + ways(i, j+1, m, n, visited, maze);
    visited[i][j] = false; //backtracking
    return totalWays;
}


let rows = 3;
let cols = 3;
let visited = [];
for(let i=0; i< rows; i++){
    visited.push(  Array(cols).fill(false)   );
}
let maze = [
    [0, 1, 0],
    [0, 0, 0],
    [1, 0, 0]
]
console.log(ways(0,0, rows, cols, visited, maze));

