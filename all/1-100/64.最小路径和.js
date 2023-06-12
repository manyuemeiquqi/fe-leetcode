/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array.from(new Array(m), () => new Array(n).fill(0))
  dp[0][0] = grid[0][0]
  for (let i = 1; i < m; i++)
    dp[i][0] = dp[i - 1][0] + grid[i][0]

  for (let j = 1; j < n; j++)
    dp[0][j] = dp[0][j - 1] + grid[0][j]
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++)
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
  }

  return dp[m - 1][n - 1]
}
// @lc code=end
