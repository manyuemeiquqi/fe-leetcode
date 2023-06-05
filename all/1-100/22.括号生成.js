/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  const stack = []
  const path = []
  const res = []
  function dfs() {
    if (path.length === n * 2) {
      if (!stack.length)
        res.push(path.join(''))
    }
    else {
      if (stack.length) {
        path.push(')')
        stack.pop()
        dfs()
        path.pop()
        stack.push(1)

        path.push('(')
        stack.push(1)
        dfs()
        path.pop()
        stack.pop()
      }
      else {
        stack.push(1)
        path.push('(')
        dfs()
        path.pop()
        stack.pop()
      }
    }
  }
  dfs()
  return res
}
// 虽然过了 可以把参数往函数里面怼
// @lc code=end
