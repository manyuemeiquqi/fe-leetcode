/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const len = nums.length
  if (len === 1)
    return nums[0]
  if (len === 2)
    return Math.max(nums[0], nums[1])
  const dp = new Array(len).fill(0)
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])
  for (let i = 2; i < len - 1; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

  const max1 = Math.max(dp[len - 2], dp[len - 3])
  dp[1] = nums[1]
  dp[2] = Math.max(nums[1], nums[2])
  for (let i = 3; i < len; i++)
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])

  return Math.max(max1, dp[len - 1], dp[len - 2])
}
// @lc code=end
