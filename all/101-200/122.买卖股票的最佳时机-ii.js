/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const dp = Array.from(new Array(prices.length), () => [0, 0])
  dp[0] = [-prices[0], 0]
  // 0持有
  // 1不持有 卖出
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][0] + prices[i], dp[i - 1][1])
  }

  return dp[prices.length - 1][1]
}
// @lc code=end
