/*
 * @lc app=leetcode.cn id=309 lang=javascript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

//dp代表的含义，第i天结束的时候,i+1天的处于的状态 
var maxProfit = function (prices) {
    let len = prices.length
    let dp = Array.from({ length: len }, () => new Array(3).fill(0))
    dp[0][0] = -prices[0]
    for (let i = 1; i < len; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i])
        dp[i][1] = Math.max(dp[i - 1][0] + prices[i])
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2],)
    }
    return Math.max(dp[len - 1][1], dp[len - 1][2],)
};
// @lc code=end

