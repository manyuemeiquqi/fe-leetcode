/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const stk = []
  const len = path.length
  let i = 0
  while (i < len) {
    if (path[i] === '/') {
      i++
      continue
    }
    let j = i
    while (j < len && path[j] !== '/')
      j++
    const gap = path.slice(i, j)
    i = j
    if (gap === '.')
      continue
    else if (gap === '..')
      stk.pop()
    else stk.push(gap)
  }
  return `/${stk.join('/')}`
}
// @lc code=end
