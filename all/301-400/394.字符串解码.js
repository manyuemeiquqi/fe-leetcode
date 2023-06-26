/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function (s) {
  const stk = []
  let i = 0
  let ans = ''
  while (i < s.length) {
    if (s[i] === ']') {
      const cur = stk.pop()
      const idx = cur.split('').findIndex(item => !Number.isNaN(Number(item)))
      const repeatCount = Number(cur.slice(idx, cur.length - 1))
      ans = cur.slice(0, idx) + ans.repeat(repeatCount)
    }
    else {
      ans += s[i]
      if (s[i] === '[') {
        stk.push(ans)
        ans = ''
      }
    }
    i++
  }
  return ans
}
// @lc code=end
