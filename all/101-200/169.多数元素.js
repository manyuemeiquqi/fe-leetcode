/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  return nums.sort((a, b) => a - b)[nums.length >> 1]
}
// 找其他写法
// @lc code=end
