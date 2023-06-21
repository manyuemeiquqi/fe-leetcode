/*
 * @lc app=leetcode.cn id=1424 lang=javascript
 *
 * [1424] 对角线遍历 II
 */

// @lc code=start
/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const findDiagonalOrder = function (nums) {
  const m = nums.length
  const n = Math.max(...nums.map(item => item.length))
  const ans = []
  for (let i = 0; i < m; i++) {
    let j = 0
    const tmp = []
    let k = i
    while (k >= 0 && j < n) {
      if (nums[k][j] !== undefined)
        tmp.push(nums[k][j])
      k--
      j++
    }
    ans.push(...tmp)
  }
  for (let j = 1; j < n; j++) {
    let i = m - 1
    const tmp = []
    let k = j
    while (i >= 0 && k < n) {
      if (nums[i][k] !== undefined)
        tmp.push(nums[i][k])
      i--
      k++
    }
    ans.push(...tmp)
  }
  return ans
//   优化时间复杂度
}
// @lc code=end
