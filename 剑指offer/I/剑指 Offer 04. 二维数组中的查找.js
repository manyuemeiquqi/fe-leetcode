/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const findNumberIn2DArray = function (matrix, target) {
  const m = matrix.length
  if (m === 0)
    return false
  const n = matrix[0].length
  let i = 0
  let j = n - 1
  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true
    }
    else if (matrix[i][j] > target) {
      // 行查找
      let l = 0
      let r = j
      while (l < r) {
        const mid = l + r >> 1
        if (matrix[i][mid] < target)
          l = mid + 1
        else r = mid
      }
      if (matrix[i][l] === target)
        return true
    }
    else {
      let l = i
      let r = m - 1
      while (l < r) {
        const mid = l + r >> 1
        if (matrix[mid][j] < target)
          l = mid + 1
        else r = mid
      }
      if (matrix[l][j] === target)
        return true
    }
    i++
    j--
  }
  return false
}
