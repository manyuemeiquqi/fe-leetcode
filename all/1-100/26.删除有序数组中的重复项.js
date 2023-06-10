/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  let l = 1
  let r = 1
  let prev = nums[0]
  let ans = 1
  const len = nums.length
  while (l < len && r < len) {
    if (nums[l] > prev) {
      ans = l + 1
    }
    else {
      while (r < len) {
        if (nums[r] > nums[l] && nums[r] !== nums[r + 1]) {
          [nums[l], nums[r]] = [nums[r], nums[l]]
          ans = l + 1
          r++
          break
        }
        r++
      }
    }
    prev = nums[l]
    l++
  }
  return ans
  // 写的有点乱
}
// @lc code=end
