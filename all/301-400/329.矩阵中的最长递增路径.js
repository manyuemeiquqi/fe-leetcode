/*
 * @lc app=leetcode.cn id=329 lang=javascript
 *
 * [329] 矩阵中的最长递增路径
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  let ans = 0
  const memo = Array.from({ length: m }, () => new Array(n))
  const dfs = (i, j, prev) => {
    if (i < 0 || j < 0 || i > m - 1 || j > n - 1)
      return 0
    if (matrix[i][j] <= prev)
      return 0
    if (memo[i][j] !== undefined)
      return memo[i][j]

    const max = Math.max(
      dfs(i - 1, j, matrix[i][j]) + 1,
      dfs(i, j - 1, matrix[i][j]) + 1,
      dfs(i + 1, j, matrix[i][j]) + 1,
      dfs(i, j + 1, matrix[i][j]) + 1)
    memo[i][j] = max
    return max
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      ans = Math.max(ans, dfs(i, j, -Infinity))
  }
  return ans
}
// 需要缓存，不然超时
// @lc code=end
