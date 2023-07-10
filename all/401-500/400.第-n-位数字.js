/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
  let i = 1

  while (n > i * (10 ** i - 10 ** (i - 1))) {
    n -= i * (10 ** i - 10 ** (i - 1))
    i++
  }

  const target = 10 ** (i - 1) + Math.floor(n / i)
  const extra = n % i
  // target =
  if (extra === 0)
    return +((`${target - 1}`).split('').at(-1))
  else
    return +(`${target}`)[extra - 1]
}
// @lc code=end
