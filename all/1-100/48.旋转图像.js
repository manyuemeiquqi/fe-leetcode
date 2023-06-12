/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
  const len = matrix[0].length
  const loop = len >> 1
  for (let i = 0; i <= loop; i++) {
    for (let j = i; j <= len - 2 - i; j++) {
      [matrix[i][j], matrix[j][len - 1 - i], matrix[len - 1 - i][len - 1 - j], matrix[len - 1 - j][i]]
      = [matrix[len - 1 - j][i], matrix[i][j], matrix[j][len - 1 - i], matrix[len - 1 - i][len - 1 - j]]
    }
  }
}
// 这里的 i j的边界需要考虑下
// @lc code=end
