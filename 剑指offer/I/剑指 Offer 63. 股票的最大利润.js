/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const len = prices.length
  const dp = []
  let min = Infinity
  let ans = 0
  for (let i = 0; i < len; i++) {
    min = Math.min(min, prices[i])
    dp[i] = prices[i] - min >= 0 ? prices[i] - min : 0
    ans = Math.max(ans, dp[i])
  }

  return ans
}
