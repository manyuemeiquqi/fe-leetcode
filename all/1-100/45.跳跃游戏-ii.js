/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  const len = nums.length

  let l = 0
  let count = 0
  while (l < len - 1) {
    let r = l + nums[l]
    if (r >= len - 1)
      return ++count
    let nextOne
    for (let i = l + 1; i <= l + nums[l]; i++) {
      if (i + nums[i] > r) {
        nextOne = i
        r = i + nums[i]
      }
    }
    l = nextOne
    count++
  }
  return count
}
// 开始还没想到贪心
// 快速写这个循环，这次写的很慢，注意每次循环的变量以及 l 是怎么取值的
// @lc code=end
