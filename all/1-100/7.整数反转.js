/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  let ans
  if (x >= 0)
    ans = +((`${x}`).split('').reverse().join(''))

  else
    ans = -((`${x}`).slice(1).split('').reverse().join(''))
  return ans <= 2 ** 31 - 1 && ans >= -(2 ** 31) ? ans : 0
}
// @lc code=end
