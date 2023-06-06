/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const fib = function (n) {
  if (n <= 1)
    return n
  return fib(n - 1) + fib(n - 2)
  // 剑指offer 那题 需要缓存优化， 另一种是考虑迭代写法
}
// @lc code=end
