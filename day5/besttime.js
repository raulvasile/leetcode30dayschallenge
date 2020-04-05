/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
  let minIndex, found = 0, max = 0;

  for (let index = 0; index < prices.length - 1; index++) {
    if (prices[index] < prices[index + 1] && found == 0) {
      found = 1;
      minIndex = index;
    }

    if (found == 1) {
      if (prices[index] > prices[index + 1]) {
        max += prices[index] - prices[minIndex];
        found = 0;
      }
    }
  }

  if (found == 1) {
    max += prices[prices.length - 1] - prices[minIndex];
  }

  return max;
};
