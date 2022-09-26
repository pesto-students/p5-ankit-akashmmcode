function maxProfit(prices) {
    let profit = 0;
    
    // console.log(prices.length);

    for (let i = 0; i <= prices.length; i++) {



        for (let j = i + 1; j <= prices.length; j++) {

            const currentProfit = prices[j] - prices[i];

            if (currentProfit > profit) {
                profit = currentProfit;
            }
        }
    }

    return profit;
}


console.log(maxProfit([7,1,5,3,6,4]));