/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  if (nums[nums.length - 1] > nums[0])
    return nums[0]
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
// 看了题解，对 l r 理解的不够透彻
// @lc code=end
