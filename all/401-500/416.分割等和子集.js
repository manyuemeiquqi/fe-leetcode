/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b)
  if (sum % 2 !== 0)
    return false
  sum = sum / 2
  const dp = new Array(sum + 1).fill(false)
  dp[0] = true
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum; j >= 0; j--)
      dp[j] = dp[j - nums[i]] || dp[j]
  }
  return dp[sum]
}
// 分割子集问题 416 847
// @lc code=end
