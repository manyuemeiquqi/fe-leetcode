/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let i = 0
  while (i * i < x)
    i++
  return i * i === x ? i : i - 1
}
// 看评论有二分跟牛顿，需要看下
// @lc code=end
