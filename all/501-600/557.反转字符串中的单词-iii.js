/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.split(' ').map(item => item.split('').reverse().join('')).join(' ')
}
// @lc code=end
