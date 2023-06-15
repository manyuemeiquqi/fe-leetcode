/*
 * @lc app=leetcode.cn id=525 lang=javascript
 *
 * [525] 连续数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
  const len = nums.length
  let sum = 0
  const map = {
    0: -1,
  }
  let ans = 0
  for (let i = 0; i < len; i++) {
    sum += nums[i] === 1 ? 1 : -1
    if (map[sum] !== undefined)
      ans = Math.max(ans, i - map[sum])
    else
      map[sum] = i
  }
  return ans
}
// 直接填入 map sum就行不要想什么 -sum, 两个前缀和相等就代表之间的连续数组是满足要求的
// @lc code=end
