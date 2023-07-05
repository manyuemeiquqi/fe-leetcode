/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  num1 = num1.split('').reverse().map(item => +item)
  num2 = num2.split('').reverse().map(item => +item)
  const m = num1.length
  const n = num2.length
  const res = new Array(m + n - 1).fill(0)
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++)
      res[i + j] += num1[i] * num2[j]
  }
  for (let i = 0; i < res.length - 1; i++) {
    res[i + 1] += Math.floor(res[i] / 10)
    res[i] = res[i] % 10
  }
  while (res.length && res.at(-1) === 0)
    res.pop()
  return res.reverse().join('') || '0'
}
// 看了题解，其实好做的，主要是自己想到如果要进位肯能有些麻烦就没往下了
// @lc code=end
