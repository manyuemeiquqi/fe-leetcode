/*
 * @lc app=leetcode.cn id=47 lang=javascript
 *
 * [47] 全排列 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  const ans = []
  const dfs = (path, u) => {
    if (path.length === nums.length) {
      ans.push([...path].join(','))
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (u[i])
        continue
      u[i] = true
      dfs([...path, nums[i]], u)
      u[i] = false
    }
  }
  dfs([], [])

  return Array.from(new Set(ans)).map(item => item.split(','))
}
// 修改去重方式 然后优化剪枝
// @lc code=end
