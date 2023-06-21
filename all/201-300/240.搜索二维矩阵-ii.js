/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  // 看了题解 ， 右上角数值对比搜索
  const m = matrix.length
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
// @lc code=end
