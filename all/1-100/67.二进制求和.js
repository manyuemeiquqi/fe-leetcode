/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let extraPlus = 0

  const len = Math.max(a.length, b.length)
  const ans = new Array(len).fill(0)
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')
  let i = len - 1
  while (i >= 0) {
    let cur = Number(a[i]) + Number(b[i]) + extraPlus
    //  0 1 2 3
    if (cur === 2) {
      extraPlus = 1
      cur = 0
    }
    else if (cur === 3) {
      extraPlus = 1
      cur = 1
    }
    else {
      extraPlus = 0
    }
    ans[i] = cur
    i--
  }
  if (extraPlus)
    ans.unshift(1)
  return ans.join('')
// 为什么下面这种方法不行
  // return (Number(`0b${a}`) + Number(`0b${b}`)).toString(2)
}
// @lc code=end
