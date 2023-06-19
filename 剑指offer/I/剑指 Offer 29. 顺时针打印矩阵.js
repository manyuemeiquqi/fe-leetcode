/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const m = matrix.length
  if (m === 0)
    return []
  const n = matrix[0].length
  const res = []
  if (m === 1 || n === 1)
    return matrix.flat(1)

  const loopNumber = Math.min(m, n) / 2
  for (let x = 0; x < loopNumber; x++) {
    // 起点
    for (let i = x, j = x; j < n - x; j++)
      res.push(matrix[i][j])

    for (let i = x + 1, j = n - x - 1; i < m - x; i++)
      res.push(matrix[i][j])

    if (x !== m - x - 1 && n - x - 1 !== x) {
      for (let i = m - x - 1, j = n - x - 1 - 1; j >= x; j--)
        res.push(matrix[i][j])

      for (let i = m - x - 1 - 1, j = x; i >= x + 1; i--)
        res.push(matrix[i][j])
    }
  }

  return res
}
