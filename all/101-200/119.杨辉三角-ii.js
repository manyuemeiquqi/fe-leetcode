/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const dp = new Array(rowIndex + 1)
  dp[0] = [1]
  dp[1] = [1, 1]
  let i = 2
  while (i <= rowIndex) {
    dp[i] = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++)
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
    i++
  }
  return dp[rowIndex]
}
// @lc code=end
