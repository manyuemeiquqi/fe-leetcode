/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
  let ans = 0

  const u = new Array(s.length).fill(false)
  const getLongest = (i) => {
    const stk = []
    let len = 0
    let cur = 0
    while (i < s.length) {
      if (stk.length === 0)
      // 如果当前栈空，证明 i 为起点的不用在计算了，因为前面有一部分字符串已经连续了
        u[i] = true
      if (s[i] === '(') {
        stk.push('(')
      }
      else {
        if (stk.length) {
          stk.pop()
          cur += 2
          if (stk.length === 0) {
            len = len + cur
            cur = 0
          }
        }
        else {
          return len
        }
      }
      i++
    }
    return len
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' && !u[i])
      ans = Math.max(getLongest(i), ans)
  }

  return ans
}
// 用栈做的，时间复杂度跟空间复杂度都需要优化
// @lc code=end
