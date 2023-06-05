/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  const s = `${x}`
  let l = 0
  let r = s.length - 1
  while (r > l) {
    if (s[r] !== s[l])
      return false

    r--
    l++
  }
  return true
}
// @lc code=end
