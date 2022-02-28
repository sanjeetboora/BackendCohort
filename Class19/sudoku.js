let grid = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0], 
    [5, 2, 0, 0, 0, 0, 0, 0, 0], 
    [0, 8, 7, 0, 0, 0, 0, 3, 1], 
    [0, 0, 3, 0, 1, 0, 0, 8, 0], 
    [9, 0, 0, 8, 6, 3, 0, 0, 5], 
    [0, 5, 0, 0, 9, 0, 6, 0, 0], 
    [1, 3, 0, 0, 0, 0, 2, 5, 0], 
    [0, 0, 0, 0, 0, 0, 0, 7, 4], 
    [0, 0, 5, 2, 0, 6, 3, 0, 0] 
];


function print(grid){
    let result = "";
    for(let i=0; i<= 8; i++){
        for(let j=0; j<=8; j++){
            result = result+grid[i][j] + " | ";
        }
        result += '\n';
    }
    console.log(result);
}


function isSafe(i, j, num){
    //for same column
    for(let r = 0; r <= 8; r++){
        if(grid[r][j] == num){
            return false;
        }
    }
    //for same row
    for(let c = 0; c <= 8; c++){
        if(grid[i][c] == num){
            return false;
        }
    }
    //for same smaller box // 5/3 = 1.66   Math.floor(5/3) = 1
    let startRow = (Math.floor(i/3))*3;
    let startCol = (Math.floor(j/3))*3;
    for(let r = 0; r<=2; r++){
        for(let c = 0; c<=2; c++){
            if(grid[startRow+r][startCol+c] == num){
                return false;
            }
        }
    }

    return true;
}


function solve(i, j){
    //base case
    if(i == 8 && j==8){
        if(grid[i][j] !=0 ){
            print(grid);
            return;
        }
        else{
            for(let num = 1; num <= 9; num++){
                if(isSafe(i, j, num)){
                    grid[i][j]=num;
                    print(grid);
                    return;
                }
            }
        }
    }

    if(j > 8){
        solve(i+1, 0);
        return;
    }

    if(i > 8){
        return;
    }

    //self work
    if(grid[i][j] == 0){
        for(let num = 1; num <= 9; num++){
            if(isSafe(i, j, num)){
                grid[i][j]=num;
                solve(i, j+1);
                grid[i][j] = 0; //backtracking
            }
        }
    }
    else{
        solve(i, j+1);
    }

}

solve(0, 0);



// 3 | 1 | 6 | 5 | 7 | 8 | 4 | 9 | 2 |
// 5 | 2 | 9 | 1 | 3 | 4 | 7 | 6 | 8 |
// 4 | 8 | 7 | 6 | 2 | 9 | 5 | 3 | 1 |
// 2 | 6 | 3 | 4 | 1 | 5 | 9 | 8 | 7 |
// 9 | 7 | 4 | 8 | 6 | 3 | 1 | 2 | 5 |
// 8 | 5 | 1 | 7 | 9 | 2 | 6 | 4 | 3 |
// 1 | 3 | 8 | 9 | 4 | 7 | 2 | 5 | 6 |
// 6 | 9 | 2 | 3 | 5 | 1 | 8 | 7 | 4 |
// 7 | 4 | 5 | 2 | 8 | 6 | 3 | 1 | 9 |