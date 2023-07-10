/*
 * @lc app=leetcode.cn id=670 lang=javascript
 *
 * [670] 最大交换
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function (num) {
  const a = (`${num}`).split('').map(item => +item)
  const b = [...a].sort((a, b) => b - a)
  let i = 0
  while (i < a.length && a[i] === b[i])
    i++
  if (i < a.length && a[i] !== b[i]) {
    let j = a.length - 1
    while (a[j] !== b[i])
      j--
    [a[i], a[j]] = [a[j], a[i]]
  }
  return +a.join('')
}
// 纯暴力也能过，题意是最大的就应该放在第一个，第二大的放在第二个，以此类推，

// @lc code=end
