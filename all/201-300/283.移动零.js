/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      nums[j] = nums[i]
      j++
    }
  }
  j = nums.length - j
  while (j) {
    nums[nums.length - j] = 0
    j--
  }
}
// 交换的方法如何写
// @lc code=end
