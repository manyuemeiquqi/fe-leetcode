/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
const findDiagonalOrder = function (mat) {
  const m = mat.length
  const n = mat[0].length
  const ans = []
  let flag = true
  for (let i = 0; i < m; i++) {
    let j = 0
    const tmp = []
    let k = i
    while (k >= 0 && j < n) {
      tmp.push(mat[k][j])
      k--
      j++
    }
    flag ? ans.push(...tmp) : ans.push(...tmp.reverse())
    flag = !flag
  }
  for (let j = 1; j < n; j++) {
    let i = m - 1
    const tmp = []
    let k = j
    while (i >= 0 && k < n) {
      tmp.push(mat[i][k])
      i--
      k++
    }
    flag ? ans.push(...tmp) : ans.push(...tmp.reverse())
    flag = !flag
  }
  return ans
}
// @lc code=end
