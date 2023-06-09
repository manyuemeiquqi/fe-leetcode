/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 从左往右 > = x 的第一个数字
// 题目翻译为数组中找到大于等于target的第一个元素 从左往右 即 mid r = mid l = mid+1
const searchInsert = function (nums, target) {
  nums.push(Infinity)
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = (l + r) >> 1
    if (nums[mid] >= target)
      r = mid
    else
      l = mid + 1
  }
  return l
}
// @lc code=end
