function isSafe(row, col, n, grid){
    //check for the same column
    for(let i = row-1; i>= 0; i--){
        if(grid[i][col] == 'Q'){
            return false;
        }
    }

    //check for left diagonal
    for(let i = row-1, j = col-1; i>= 0 && j>= 0; i--, j--){
        if(grid[i][j] == 'Q'){
            return false;
        }
    }

    //check for right diagonal
    for(let i = row-1, j = col+1; i>= 0 && j < n; i--, j++){
        if(grid[i][j] == 'Q'){
            return false;
        }
    }

    return true;
}


function nQueen(row, n, grid){
    if(row == n){//base case
        return 1;
    }

    let result = 0;
    for(let col =0; col<n; col++){
        if(isSafe(row, col, n, grid)){ //self work
            grid[row][col] = 'Q'; //self work
            console.log(grid);
            console.log("=============================");
            result += nQueen(row+1, n, grid); //recursive work
            grid[row][col] = '_';
        }
    }
    return result;
}

let grid= [
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_'],
    ['_', '_', '_', '_']
]
let n =4;
console.log(nQueen(0, n, grid));