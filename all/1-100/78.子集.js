/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const ans = []
  const len = nums.length
  const dfs = (i, path) => {
    if (i === len) {
      ans.push([...path])
      return
    }
    // 选 或者不选
    dfs(i + 1, [...path, nums[i]])
    dfs(i + 1, [...path])
  }
  dfs(0, [])
  return ans
}
// 时间复杂度太大，需要优化  学习下利用二进制的思路
// @lc code=end
