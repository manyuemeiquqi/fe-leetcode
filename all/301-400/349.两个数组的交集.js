/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function (nums1, nums2) {
  const ans = new Set()
  const set = new Set(nums1)
  for (const num of nums2) {
    if (set.has(num))
      ans.add(num)
  }
  return [...ans]
}
// @lc code=end
