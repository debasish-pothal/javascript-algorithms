const maxStockProfit = (pricesArr) => {
  let maxProfit = Number.MIN_SAFE_INTEGER;
  let buyPrice = Number.MAX_SAFE_INTEGER;

  for (const price of pricesArr) {
    buyPrice = Math.min(buyPrice, price);
    maxProfit = Math.max(maxProfit, price - buyPrice);
  }

  return maxProfit;
};

const result = maxStockProfit([32, 46, 26, 38, 40, 48, 42]);
console.log(result);
