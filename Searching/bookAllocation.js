function allocateBooks(students, n, books, mid){
    let totalPagesOfCurrentStudent = 0;
    students--;
    for(let i=0; i<n; i++){
        if(books[i] > mid){
            return false;
        }
        if(totalPagesOfCurrentStudent + books[i] > mid){
            students--;
            totalPagesOfCurrentStudent = books[i];
            if(students < 0){
                return false;
            }
        }
        else{
            totalPagesOfCurrentStudent += books[i];
        }
    }
    return true;
}

function maxPages(n, books, students){
    let minPages = books[n-1];
    let maxPages = Number.MAX_VALUE; //books.reduce((partialSum, a) => partialSum + a, 0); //

    let smallestValOfMaxPages = Number.MAX_VALUE;

    while(minPages <= maxPages){
        let mid = Math.floor((minPages+maxPages)/2);
        let isAbleToAllocateBooks = allocateBooks(students, n, books, mid);
        if(isAbleToAllocateBooks == true){
            smallestValOfMaxPages = Math.min(smallestValOfMaxPages, mid);
            maxPages = mid-1;//left
        }
        else{
             minPages = mid+1;//right
        }
    }
    return smallestValOfMaxPages;
}

let n=4;
let books = [12, 34, 67, 90];
let students =2;

let smallestValueOfMaximumPages = maxPages(n, books, students);
console.log(smallestValueOfMaximumPages);