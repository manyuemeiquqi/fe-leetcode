/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1 比特与 2 比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function (bits) {
  bits.splice(bits.length - 1, 1)
  const len = bits.length
  let i = 0
  for (;i < len;) {
    if (bits[i] === 0)
      i++
    else i += 2
  }
  return i === len
}
// 直接模拟就pass了，开始竟然想dfs
// @lc code=end
