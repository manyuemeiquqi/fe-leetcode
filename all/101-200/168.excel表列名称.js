/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const ans = []
  while (columnNumber !== 0) {
    tmp = columnNumber % 26 === 0 ? 26 : columnNumber % 26
    ans.unshift(String.fromCharCode(tmp + 64))
    columnNumber = tmp === 26 ? ((columnNumber / 26) >> 0) - 1 : (columnNumber / 26) >> 0
  }
  return ans.join('')
}
// 这道题做了半天，就是这里 等于26的时候，该如何去做
// @lc code=end
