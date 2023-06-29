/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const res = []
  const dfs = (idx, path, sum) => {
    if (sum === target) {
      res.push([...path])
      return
    }
    if (sum > target)
      return
    for (let i = idx; i < candidates.length; i++)
      dfs(i, path.concat([candidates[i]]), sum + candidates[i])
  }
  dfs(0, [], 0)
  return res
}
// 优化时间跟空间 ，做了77题，这道就比较有思路了
// @lc code=end
