/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
  const tmp = s + s
  return tmp.slice(1, tmp.length - 1).includes(s)
}
// 这种需要背一下，还用kmp算法

// @lc code=end
