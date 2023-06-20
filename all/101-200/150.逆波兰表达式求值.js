/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const op = ['+', '-', '*', '/']
  const stk = []
  const len = tokens.length
  for (let i = 0; i < len; i++) {
    if (op.includes(tokens[i])) {
      const a = Number(stk.pop())
      const b = Number(stk.pop())
      const tmp = tokens[i] === '+'
        ? b + a
        : tokens[i] === '-'
          ? b - a
          : tokens[i] === '*'
            ? b * a
            : b / a >> 0
      stk.push(tmp)
    }
    else {
      stk.push(tokens[i])
    }
  }
  return stk[0]
}
// 构建栈
// @lc code=end
