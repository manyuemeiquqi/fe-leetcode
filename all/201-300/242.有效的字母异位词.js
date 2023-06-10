/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  const map = {

  }
  const len = s.length
  if (len !== t.length)
    return false
  for (let i = 0; i < len; i++) {
    map[s[i]] = map[s[i]] === undefined ? 1 : map[s[i]] + 1
    map[t[i]] = map[t[i]] === undefined ? -1 : map[t[i]] - 1
  }
  return !Object.values(map).some(item => item !== 0)
}
// @lc code=end
