/*
 * @lc app=leetcode.cn id=123 lang=javascript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const len = prices.length
  const dp = new Array(5).fill(0)
  dp[1] = -prices[0] // 第一次持有股票
  dp[3] = -prices[0] // 第二次持有股票 买一次卖一次，再买一此
  for (let i = 1; i < len; i++) {
    dp[1] = Math.max(dp[1], dp[0] - prices[i])
    dp[2] = Math.max(dp[2], dp[1] + prices[i])
    dp[3] = Math.max(dp[3], dp[2] - prices[i])
    dp[4] = Math.max(dp[4], dp[3] + prices[i])
  }
  return dp[4]
  // 看了题解，之前想的两个状态是持有跟不持有，两个状态并不能解决
}
// maxProfit([3, 3, 5, 0, 0, 3, 1, 4])
// @lc code=end
