/*
 * @lc app=leetcode.cn id=767 lang=javascript
 *
 * [767] 重构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
const reorganizeString = function (s) {
  const map = {}
  const len = s.length
  for (const l of s)
    map[l] = map[l] ? map[l] + 1 : 1

  let arr = Object.entries(map).sort((a, b) => b[1] - a[1])
  if (arr[0][1] > Math.ceil(len / 2))
    return ''

  const ans = [arr[0][0]]
  arr[0][1]--
  for (let i = 1; i < len; i++) {
    let j = 0
    while (j < arr.length && (arr[j][1] === 0 || ans[i - 1] === arr[j][0]))
      j++
    ans[i] = arr[j][0]
    arr[j][1]--
    arr = arr.sort((a, b) => b[1] - a[1])
  }
  return ans.join('')
}
// 看了题解，贪心去做，每次填入频次最高的，可以去优化空间
// @lc code=end
