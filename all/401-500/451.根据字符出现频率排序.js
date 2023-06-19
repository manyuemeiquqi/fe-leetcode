/*
 * @lc app=leetcode.cn id=451 lang=javascript
 *
 * [451] 根据字符出现频率排序
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  const map = {}
  const len = s.length
  for (let i = 0; i < len; i++)
    map[s[i]] = map[s[i]] ? map[s[i]] + 1 : 1
  return Object.entries(map).sort((a, b) => b[1] - a[1]).map(item => item[0].padStart(item[1], item[0])).join('')
}
// @lc code=end
