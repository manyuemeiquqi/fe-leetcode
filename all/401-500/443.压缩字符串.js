/*
 * @lc app=leetcode.cn id=443 lang=javascript
 *
 * [443] 压缩字符串
 */

// @lc code=start
/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  let l = 0
  let r = 0
  while (r < chars.length) {
    while (chars[l] === chars[r])
      r++
    if (r === l + 1) {
      l++
      r = l
    }
    else {
      const count = `${r - l}`
      const len = count.length
      chars.splice(l + 1, r - l - 1, ...count.split(''))
      l += len + 1
      r = l
    }
  }
}
// @lc code=end
