/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
const diffWaysToCompute = function (s) {
  const n = s.length
  const expr = []
  for (let i = 0; i < n; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      let j = i
      let x = 0
      while (j < n && s[j] >= '0' && s[j] <= '9') x = x * 10 + +s[j++]
      expr.push(x)
      i = j - 1
    }
    else { expr.push(s[i]) }
  }
  return dfs(0, expr.length - 1)
  function dfs(l, r) {
    if (l === r)
      return [expr[l]]
    const ans = []
    for (let i = l + 1; i < r; i += 2) {
      const left = dfs(l, i - 1)
      const right = dfs(i + 1, r)
      for (const x of left) {
        for (const y of right) {
          let r
          if (expr[i] === '+')
            r = x + y
          else if (expr[i] === '-')
            r = x - y
          else r = x * y
          ans.push(r)
        }
      }
    }
    return ans
  }
}
// @lc code=end
