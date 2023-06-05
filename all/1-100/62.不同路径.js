/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
//  0 0 -> m-1 n-1 路径 回溯
  const dp = Array.from({ length: m }, () => new Array(n).fill(0))
  for (let i = 0; i < m; i++)
    dp[i][0] = 1

  for (let j = 1; j < n; j++)
    dp[0][j] = 1

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++)
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
  }
  return dp[m - 1][n - 1]
}
// 开始竟然想到用dfs做，要考虑是否用dfs，还是dp ，
// @lc code=end
