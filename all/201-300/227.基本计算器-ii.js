/*
 * @lc app=leetcode.cn id=227 lang=javascript
 *
 * [227] 基本计算器 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  const stk = []
  let ans = 0

  let i = 0
  let cur = ''

  while (i < s.length) {
    let op = ''
    if (['+', '-', '*', '/'].includes(s[i])) {
      op = s[i]
      if (cur !== '') {
        stk.push(+cur)
        cur = ''
      }
      i++
      while (i < s.length && !['+', '-', '*', '/'].includes(s[i])) {
        cur += s[i]
        i++
      }
      switch (op) {
        case '+':
          stk.push(+cur)
          break
        case '-':
          stk.push(-cur)
          break
        case '*':
        { const a = stk.pop()
          stk.push((+cur) * a)
          break }
        case '/':{
          const a = stk.pop()
          stk.push(Number.parseInt(a / (+cur)))
          break
        }
        default:
          break
      }
      cur = ''
      continue
    }
    else {
      cur += s[i]
    }

    i++
  }
  if (cur !== '')
    return +cur
  for (const n of stk)
    ans += n

  return ans
}
// 看了题解，开始的做法超时了，也是用了一个栈，但是优先计算/ * 考虑下为什么超时
// @lc code=end
