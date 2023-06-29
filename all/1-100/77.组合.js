/*
 * @lc app=leetcode.cn id=77 lang=javascript
 *
 * [77] 组合
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const res = []
  const dfs = (n, idx, path) => {
    if (path.length === k)
      res.push([...path])
    for (let i = idx; i < n; i++)
      dfs(n, i + 1, path.concat([i + 1]))
  }
  dfs(n, 0, [])
  return res
}
// 需要优化，看了题解，遇到这种需要循环的dfs，不会写了，需要注意
// @lc code=end
