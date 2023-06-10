/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] !== nums[i + 1])
      return nums[i]
  }
}
// 写一个线性复杂度的 算法
// @lc code=end
