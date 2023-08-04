var maxProfit = function(prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    // 현재 날짜와 다음 날짜의 주식 가격 차이를 계산
    const profit = prices[i + 1] - prices[i];
    // 차이가 양수인 경우에만 이익으로 간주하여 누적
    if (profit > 0) {
      maxProfit += profit;
    }
  }
  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
