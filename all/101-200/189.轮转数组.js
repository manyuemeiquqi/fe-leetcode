/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 轮转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  const len = nums.length
  nums.push(...nums)
  while (k >= len)
    k -= len
  nums.splice(0, len - k)
  nums.length = len
}
// @lc code=end
