/*
 * @lc app=leetcode.cn id=984 lang=javascript
 *
 * [984] 不含 AAA 或 BBB 的字符串
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const strWithout3a3b = function (a, b) {
  let res = ''
  const len = a + b
  if (a >= b) {
    while (a > 0 || b > 0) {
      if (a > b) {
        res += 'aab'
        a -= 2
        b--
      }
      else {
        res += 'ab'
        a--
        b--
      }
    }
  }
  else {
    while (a > 0 || b > 0) {
      if (a < b) {
        res += 'bba'
        a--
        b -= 2
      }
      else {
        res += 'ba'
        a--
        b--
      }
    }
  }
  res = res.split('')
  res.length = len
  return res.join('')
  // 看了题解，一直没想到贪心贪在哪里，原来是就先用谁,每次贪心的目的是让ab 数量逐渐接近
}
// @lc code=end
