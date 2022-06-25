function maxArea(heights){
    let maxArea = 0;
    let left =0, right = heights.length-1;
    while(left < right){
        let currArea = (right-left) * Math.min(heights[left], heights[right]);

        maxArea = Math.max(maxArea, currArea);
        if(heights[left] < heights[right]){
            left++;
        }else{
            right--;
        }
    }
    return maxArea;
}


let arr = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(arr));