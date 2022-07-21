// Write a function that takes an array of integers representing the price of a stock on different days. 
// Return the maximum profit that can be made from buying and selling a single stock

var maxProfit = function(prices) {
    let smallest = Infinity;
    let maxDifference = 0;

    for (let i = 0; i < prices.length; i++) {
        let price = prices[i];
        smallest = Math.min(smallest, price);
        maxDifference = Math.max(maxDifference, price - smallest);
    }

    return maxDifference;
};
