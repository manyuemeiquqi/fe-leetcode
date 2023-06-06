/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
  let ans = 0
  // 26进制
  const len = columnTitle.length
  for (let i = 0; i < len; i++)
    ans += (columnTitle[i].charCodeAt() - 64) * 26 ** (len - i - 1)
  return ans
}
// 26进制运算
// @lc code=end
