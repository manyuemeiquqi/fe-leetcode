/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
  nums = Array.from(new Set(nums))
  nums.sort((a, b) => b - a)

  return nums[2] !== undefined ? nums[2] : nums[0]
}
// 考虑除了调用 api 的其他方法，同时要注意对于数字表达式，不要单纯的if了，直接判断是不是undefined
// @lc code=end
