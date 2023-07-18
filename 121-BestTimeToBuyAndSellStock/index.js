/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let buy = prices[0];
  let sell = 0;

  for (let i = 0; i < prices.length; i++) {
    buy = Math.min(prices[i], buy);

    if (buy < prices[i]) {
      sell = Math.max(prices[i] - buy, sell);
    }
  }

  return sell;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));
