function ways(i, j, m, n, path, maze){
    if(i >= m || j >= n || maze[i][j] == 1){
        return 0;
    }

    // if(maze[i][j] == 1){ // no path when rock hits
    //     return 0;
    // }

    if(i == m-1 && j == n-1){
        console.log(path);
        return 1;
    }
    let totalWays = ways(i+1, j, m, n, path + "D", maze) + ways(i, j+1, m, n, path + "R", maze);
    return totalWays;
}


let rows = 3;
let cols = 3;
let maze = [
    [0, 1, 0],
    [0, 1, 0],
    [1, 0, 0]
]
console.log(ways(0,0, rows, cols, "", maze));

