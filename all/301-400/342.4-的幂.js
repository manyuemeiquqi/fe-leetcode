/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfFour = function (n) {
  const dp = [1]
  let i = 0
  while (dp[i] <= n) {
    if (dp[i] === n)
      return true
    dp[++i] = 4 * dp[i - 1]
  }
  return false
}
// 同2的幂
// @lc code=end
