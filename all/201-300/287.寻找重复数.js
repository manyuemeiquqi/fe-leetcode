/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1
    while (l < nums.length) {
      if (nums[l] === nums[i])
        return nums[i]
      l++
    }
  }
}
// @lc code=end
