/*
 * @lc app=leetcode.cn id=224 lang=javascript
 *
 * [224] 基本计算器
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const calculate = function (s) {
  const signStk = [1]
  let curSign = 1
  let i = 0
  let ans = 0
  while (i < s.length) {
    if (s[i] === ' ') {
      i++
      continue
    }
    if (s[i] === '(') {
      signStk.push(curSign)
    }
    else if (s[i] === ')') {
      signStk.pop()
    }
    else if (['+', '-'].includes(s[i])) {
      curSign = signStk.at(-1)
      if (s[i] === '-')
        curSign = -curSign
    }
    else {
      let cur = ''
      while (i < s.length && !['+', '-', '(', ')', ' '].includes(s[i])) {
        cur += s[i]
        i++
      }
      ans += curSign === 1 ? +cur : -cur
      continue
    }
    i++
  }
  return ans
//   看了题解，没做出来，需要维护一个栈，只用来计算符号就行，栈里面记录的并不是单独一位的正负，而是扁平到最外层的符号，类似于前缀和的一种思想
}
// @lc code=end
