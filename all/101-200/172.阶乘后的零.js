/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
  let ans = 0
  let i = 5
  while (i <= n) {
    let tmp = i
    while (tmp % 5 === 0) {
      ans++
      tmp = tmp / 5
    }
    i += 5
  }
  return ans
}
// 优化时间复杂度  题目就是需要判断阶乘的每一项有几个5，因为偶数是一定可以满足跟5配对的
// @lc code=end
