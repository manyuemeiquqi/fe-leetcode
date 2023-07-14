/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const minInsertions = function (s) {
  const len = s.length
  const dp = Array.from({ length: len }, () => new Array(len).fill(0))
  for (let i = 2; i <= len; i++) {
    for (let j = 0, k = j + i - 1; k < len; k++, j++) {
      dp[j][k] = Math.min(dp[j + 1][k], dp[j][k - 1]) + 1
      if (s[j] === s[k])
        dp[j][k] = Math.min(dp[j][k], dp[j + 1][k - 1])
    }
  }
  return dp[0][len - 1]
//   dp[i][j]区间ij满足题意的次数
// 看了题解
}
// @lc code=end
