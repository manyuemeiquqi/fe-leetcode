/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  const dp = [1]
  let i = 0
  while (dp[i] <= n) {
    if (dp[i] === n)
      return true
    dp[++i] = 2 * dp[i - 1]
  }
  return false
}
// 位运算思路
// @lc code=end
