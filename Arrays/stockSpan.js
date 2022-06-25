function maxProfit(prices){
    let maxProfit = 0;
    let leftMin = prices[0];

    for(let i=1; i<prices.length; i++){
        if(prices[i] < leftMin){
            leftMin = prices[i];
        }
        maxProfit = Math.max(maxProfit, prices[i]-leftMin);
    }
    return maxProfit;
}

let prices = [7, 1, 5, 3, 6,4];
console.log(maxProfit(prices));