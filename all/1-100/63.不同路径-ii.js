/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const dp = Array.from(new Array(m), () => new Array(n).fill(0))

  if (obstacleGrid[0][0])
    return 0
  let flag = true
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i])
      flag = false
    if (flag)
      dp[0][i] = 1
  }
  flag = true
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0])
      flag = false
    if (flag)
      dp[i][0] = 1
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      if (obstacleGrid[i][j])
        dp[i][j] = 0
    }
  }
  return dp[m - 1][n - 1]
}
// @lc code=end
