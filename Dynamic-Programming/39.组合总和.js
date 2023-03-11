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
var combinationSum = function(candidates, target) {
  let ans = [];
  const path = [];
  const dfs = (candidates, used, target) => {
    if (target == 0) {
      ans.push(path);
      return;
    }
    if (used == candidates.length) return;
    for (let i = 0; candidates[used] * i <= target; i++) {
      dfs(candidates, used + 1, target - candidates[used] * i);
      path.push(candidates[used]);
    }
    for (let i = 0; candidates[used] * i <= target; i++) {
      path.pop();
    }
  };
  dfs(candidates, 0, target);
  return ans;
};
// @lc code=end

