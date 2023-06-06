/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
  if (num === 1)
    return false
  let count = 1

  for (let i = 2; i <= Math.sqrt(num) >> 0; i++) {
    if (num % i === 0) {
      count += i
      count += num / i
    }
  }
  return count === num
}
// 考虑其他思路
// @lc code=end
