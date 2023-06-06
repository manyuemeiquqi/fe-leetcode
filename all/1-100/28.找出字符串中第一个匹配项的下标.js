/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
  const len = needle.length
  for (let i = 0; i < haystack.length - len + 1; i++) {
    if (haystack[i] === needle[0]) {
      if (haystack.slice(i, i + len) === needle)
        return i
    }
  }
  return -1
}
// @lc code=end
