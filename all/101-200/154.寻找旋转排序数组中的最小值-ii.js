/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  if (nums[nums.length - 1] > nums[0])
    return nums[0]
  while (nums[nums.length - 1] === nums[nums.length - 2])
    nums.pop()
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = l + r >> 1
    if (nums[mid] >= nums[0])
      l = mid + 1
    else r = mid
  }
  return nums[l]
}
// @lc code=end
