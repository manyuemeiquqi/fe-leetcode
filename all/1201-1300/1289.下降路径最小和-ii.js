/*
 * @lc app=leetcode.cn id=1289 lang=javascript
 *
 * [1289] 下降路径最小和  II
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const minFallingPathSum = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const dp = Array.from({ length: grid.length }, () => new Array(n).fill(0))
  dp[0] = [...grid[0]]
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++)
      dp[i][j] = Math.min(...(dp[i - 1].slice(0, j)), ...(dp[i - 1].slice(j + 1))) + grid[i][j]
  }
  return Math.min(...dp[m - 1])
}
// 可以通过提取idx 排序一次记录，减少不必要的排序，只用一层数组就行，记录以往的没有意义
// @lc code=end
