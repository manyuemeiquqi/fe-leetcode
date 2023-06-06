/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const dp = new Array(numRows)
  dp[0] = [1]
  if (numRows === 1)
    return dp
  dp[1] = [1, 1]
  let i = 2
  while (i < numRows) {
    dp[i] = new Array(i + 1).fill(1)
    for (let j = 1; j < i; j++)
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1]
    i++
  }
  return dp
}
// @lc code=end
