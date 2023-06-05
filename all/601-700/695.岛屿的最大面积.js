/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const u = Array.from(new Array(m), () => new Array(n).fill(false))
  let ans = 0
  const dfs = (i, j, area) => {
    if (!u[i][j]) {
      u[i][j] = true
      if (grid[i][j]) {
        area.length++
        if (i - 1 >= 0)
          dfs(i - 1, j, area)
        if (i + 1 < m)
          dfs(i + 1, j, area)
        if (j + 1 < n)
          dfs(i, j + 1, area)
        if (j - 1 >= 0)
          dfs(i, j - 1, area)
      }
    }
    return area
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j])
        ans = Math.max(ans, dfs(i, j, { length: 0 }).length)
    }
  }
  return ans
}
// 这也能过，真是surprise
// @lc code=end
