/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  let i = 0
  let j = 0
  for (;i < s.length; i++, j++) {
    while (t[j] !== s[i]) {
      if (j === t.length)
        return false
      j++
    }
  }
  return true
}
// @lc code=end
