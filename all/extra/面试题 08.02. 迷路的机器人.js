/**
 * @param {number[][]} obstacleGrid
 * @return {number[][]}
 */
const pathWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0])
    return []
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const u = Array.from({ length: m },
    () => new Array(n).fill(false))

  let res = []

  const dfs = (i, j, path) => {
    if (i >= m || j >= n || u[i][j] || obstacleGrid[i][j])
      return
    if (i === m - 1 && j === n - 1)
      res = [...path]
    u[i][j] = true
    dfs(i + 1, j, [...path, [i + 1, j]])
    dfs(i, j + 1, [...path, [i, j + 1]])
  }
  dfs(0, 0, [[0, 0]])
  return res
}
