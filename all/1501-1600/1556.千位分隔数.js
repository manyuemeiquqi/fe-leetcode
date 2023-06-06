/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const thousandSeparator = function (n) {
  const ans = (`${n}`).split('')
  // ans.padStart(,)
  const len = ans.length
  for (let i = 1; i <= (len / 3) >> 0; i++) {
    if (len - i * 3)
      ans.splice(len - i * 3, 0, '.')
  }
  return ans.join('')
}
// 正则写法如何去写
// @lc code=end
