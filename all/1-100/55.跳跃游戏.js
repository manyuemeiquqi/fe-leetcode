/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  const len = nums.length
  if (len === 1)
    return true
  let l = 0
  while (l < len - 1) {
    let r = l + nums[l]
    if (r >= len - 1)
      return true
    let nextOne
    for (let i = l + 1; i <= l + nums[l]; i++) {
      if (i + nums[i] > r) {
        nextOne = i
        r = i + nums[i]
      }
    }
    l = nextOne
  }
  return false
}
// @lc code=end
