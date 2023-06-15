/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const len = nums.length
  const dp = new Array(len).fill(0)
  if (len === 1)
    return nums[0]
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

  return Math.max(dp[len - 1], dp[len - 2])
}
// 优化
// @lc code=end
