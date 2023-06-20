/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const u = Array.from(new Array(m), () => new Array(n).fill(false))

  const dfs = (i, j) => {
    if (i < 0 || i >= m || j < 0 || j >= n)
      return
    if (grid[i][j] === '0' || u[i][j] === true)
      return
    u[i][j] = true
    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)
  }
  let ans = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!u[i][j] && grid[i][j] === '1') {
        dfs(i, j)
        ans++
      }
    }
  }
  return ans
}
// 岛屿数量跟最大岛屿面积都可以用
// @lc code=end
