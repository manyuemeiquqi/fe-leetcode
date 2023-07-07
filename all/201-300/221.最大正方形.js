/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
const maximalSquare = function (matrix) {
  const m = matrix.length
  const n = matrix[0].length
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0))
  let ans = 0
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        ans = Math.max(dp[i][j] * dp[i][j], ans)
      }
    }
  }
  return ans
}
//
// 看了题解，之前好像想到过类似的思路，但没想到用动态规划，以及要三个方向的边长去递推
// 还以为跟最大矩形面积类似，其
// @lc code=end
