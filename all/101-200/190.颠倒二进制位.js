/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  // console.log('n: ', `0b${n.toString(2)}`)
  return Number.parseInt(n.toString(2).padStart(32, 0).split('').reverse().join(''), 2)
}
// 这题看了题解，二进制先不去想，先说字符串的解法，比较容易理解，但是要注意，怎么保留题目的前缀0 ，
// @lc code=end
