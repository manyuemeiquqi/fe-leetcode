/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
  const res = []
  candidates.sort((a, b) => a - b)
  const dfs = (idx, path, sum) => {
    if (sum === target) {
      res.push([...path])
      return
    }
    if (sum > target)
      return
    for (let i = idx; i < candidates.length;) {
      dfs(i + 1, path.concat([candidates[i]]), sum + candidates[i])
      do
        i++
      while (i < candidates.length && candidates[i - 1] === candidates[i])
    }
  }
  dfs(0, [], 0)
  return res
}
// 39 40 77
// @lc code=end
