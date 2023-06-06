/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
  nums.sort((a, b) => a - b)
  const len = nums.length
  return Math.max(nums[0] * nums[1] * nums[len - 1], nums[len - 1] * nums[len - 2] * nums[len - 3])
  // 优化时间复杂度
}
// @lc code=end
