/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function (s) {
  let ans = ''
  let i = 0
  let sign = 1
  // 1 为没有符号 2为正 3为负
  while (i < s.length) {
    // 数字
    if (s[i].charCodeAt() >= '0'.charCodeAt() && s[i].charCodeAt() <= '9'.charCodeAt()) {
      ans += s[i]
      // 非数字
    }
    else {
      // 是否是符号 ans是否有val
      if (['+', '-'].includes(s[i])) {
        if (ans.length === 0) {
          if ([2, 3].includes(sign))
            return 0
          if (s[i] === '+')
            sign = 2
          else if (s[i] === '-')
            sign = 3
        }
        else { break }
      }
      else {
        if (ans.length)
          break
        else if (s[i] !== ' ' || [2, 3].includes(sign))
          return 0
      }
    }
    i++
  }

  ans = [1, 2].includes(sign) ? ans : -ans
  if (ans > 2 ** 31 - 1)
    return 2 ** 31 - 1
  if (ans < (-2) ** 31)
    return (-2) ** 31
  return ans
}
// 只能根据用力一步一步优化代码，不过看可以死记一条死路从是否是数字进行判断
// "words and 987"的测试用例解释
// https://leetcode.com/problems/string-to-integer-atoi/solutions/1913748/why-words-and-987-must-give-0-not-987/
// @lc code=end
