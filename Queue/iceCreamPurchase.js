function providingChangePossible(arr){
    let n = arr.length;
    let countOf5RupeeNotes = 0;
    let countOf10RupeeNotes = 0;
    let i=0;
    while(i<n){
        if(arr[i] == 5){
            countOf5RupeeNotes++;
        }
        else if(arr[i] == 10){
            if(countOf5RupeeNotes > 0){
                countOf10RupeeNotes++;
                countOf5RupeeNotes--;
            }else{
                return false;
            }
        }
        else{//arr[i] == 20
            if(countOf10RupeeNotes > 0 && countOf5RupeeNotes > 0){
                countOf10RupeeNotes--
                countOf5RupeeNotes--
            }
            else if(countOf5RupeeNotes >= 3){
                countOf5RupeeNotes -= 3;
            }else{
                return false;
            }
        }
        i++;
    }
    return true;

}



let arr = [5, 5, 20, 10, 20, 5, 10];
console.log(providingChangePossible(arr));