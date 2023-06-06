/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      map[s[i]].count++
    }
    else {
      map[s[i]] = {
        count: 1,
        index: i,
      }
    }
  }
  // console.log('Object.values(map): ',)
  const ans = Object.values(map).filter(item => item.count === 1).sort((a, b) => a.index - b.index)[0]?.index
  return ans === undefined ? -1 : ans
}
// @lc code=end
