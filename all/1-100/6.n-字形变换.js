/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function (s, numRows) {
  const arr = Array.from(new Array(numRows), () => [])

  let i = 0
  let j = 0 // 列数
  if (numRows === 1)
    return s
  while (i < s.length) {
    // 固定列
    for (let l = 0; l < numRows - 1 && i < s.length; l++, i++)
      arr[l][j] = s[i]
    // 斜线
    for (let k = numRows - 1; k > 0 && i < s.length; k--, j++, i++)
      arr[k][j] = s[i]
  }

  let ans = ''
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== undefined)
        ans += arr[i][j]
    }
  }
  return ans
}
// 模拟就可以
// convert('ABCD', 3)
// @lc code=end
