/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = l + r >> 1
    if (target <= nums[mid])
      r = mid
    else l = mid + 1
  }
  if (nums[l] !== target) {
    return [-1, -1]
  }
  else {
    let r = l
    while (nums[r] === nums[l])
      r++
    return [l, r - 1]
  }
}
// @lc code=end
