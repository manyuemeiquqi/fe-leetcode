/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
  const ans = Array.from(new Array(n), () => new Array(n).fill(1))
  const loop = n >> 1
  let num = 1
  for (let i = 0; i < loop; i++) {
    for (let j = i, k = i; k < n - 1 - i; k++) {
      ans[j][k] = num
      num++
    }
    for (let j = i, k = n - 1 - i; j < n - 1 - i; j++) {
      ans[j][k] = num
      num++
    }
    for (let j = n - 1 - i, k = n - 1 - i; k > i; k--) {
      ans[j][k] = num
      num++
    }
    for (let j = n - 1 - i, k = i; j > i; j--) {
      ans[j][k] = num
      num++
    }
  }

  if (num === n * n)
    ans[loop][loop] = n * n
  return ans
}
// @lc code=end
