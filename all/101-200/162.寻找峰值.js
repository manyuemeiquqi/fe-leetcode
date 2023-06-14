/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
  nums.unshift(-Infinity)
  nums.push(-Infinity)
  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])
      return i - 1
  }
}
// 考虑二分法
// @lc code=end
