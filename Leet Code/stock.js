const stockPrice = (prices) => {
  let buytime = 0;
  let maxProfit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[buytime] < prices[i]) {
      let diff = prices[i] - prices[buytime];
      maxProfit = Math.max(maxProfit, diff);
    } else {
      buytime = i;
    }
  }
  return maxProfit > 0 ? maxProfit : 0;
};
let arr = [7, 1, 5, 3, 6, 4];
var mysolution = stockPrice(arr);
console.log("mysolution", mysolution);
