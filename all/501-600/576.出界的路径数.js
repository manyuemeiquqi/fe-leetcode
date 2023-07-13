/*
 * @lc app=leetcode.cn id=576 lang=javascript
 *
 * [576] 出界的路径数
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */

const findPaths = function (m, n, maxMove, startRow, startColumn) {
  const cache = Array.from({ length: m }, () => Array.from({ length: n },
    () => new Array(maxMove).fill(-1)))

  const dfs = (i, j, count) => {
    if (i < 0 || j < 0 || i >= m || j >= n)

      return 1

    if (count === 0)
      return 0

    if (cache[i][j][count] !== -1 && cache[i][j][count] !== undefined)
      return cache[i][j][count]

    let ans = 0
    ans = dfs(i + 1, j, count - 1) + dfs(i - 1, j, count - 1)
    + dfs(i, j + 1, count - 1) + dfs(i, j - 1, count - 1)
    ans = ans % (1e9 + 7)
    cache[i][j][count] = ans

    return ans
  }

  return dfs(startRow, startColumn, maxMove)
}
// 看了题解，记忆化搜索
// @lc code=end
