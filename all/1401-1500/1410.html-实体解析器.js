/*
 * @lc app=leetcode.cn id=1410 lang=javascript
 *
 * [1410] HTML 实体解析器
 */

// @lc code=start
/**
 * @param {string} text
 * @return {string}
 */
const entityParser = function (text) {
  const map = {
    '&quot;': '"',
    '&apos;': '\'',
    '&amp;': '&',
    '&gt;': '>',
    '&lt;': '<',
    '&frasl;': '/',
  }
  let i = 0
  let ans = ''
  while (text[i] !== undefined) {
    if (text[i] === '&') {
      if (map[text.slice(i, i + 4)]) {
        ans += map[text.slice(i, i + 4)]
        i += 4
      }
      else if (map[text.slice(i, i + 5)]) {
        ans += map[text.slice(i, i + 5)]
        i += 5
      }
      else if (map[text.slice(i, i + 6)]) {
        ans += map[text.slice(i, i + 6)]
        i += 6
      }
      else if (map[text.slice(i, i + 7)]) {
        ans += map[text.slice(i, i + 7)]
        i += 7
      }
      else {
        ans += text[i]
        i++
      }
    }
    else {
      ans += text[i]
      i++
    }
  }
  return ans
}
// 优化
// @lc code=end
