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
// ans.push([...path]); path 每次用传入的 path 路径 target 差距 p 当前到数组的那个位置
var combinationSum = function(candidates, target) {
  const ans = [];
  dfs([], target, 0);
  return ans;
  function dfs(path, rest, p) {
    if (rest < 0) return;
    if (rest == 0) ans.push([...path]);
    else {
      for (let i = p; i < candidates.length; i++) {
        path.push(candidates[i]);
        dfs(path, rest - candidates[i], i);
        path.pop(
        );
      }
    }
  }
};
// @lc code=end

