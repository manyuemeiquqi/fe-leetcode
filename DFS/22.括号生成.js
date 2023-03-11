/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = function(n) {
  // 输入数字，括号进行组合

  // const dp = new Array(n).fill(1);
  // // dp[n]=dp[n-1]
  // for (let i = 1; i < n; i++) {
  //   dp[n] = dp[n - 1];
  // }
  const dfs = (l, r, target, cur, res) => {
    if (l == target && r == target) {
      res.push(cur);
      return;
    }
    else {
      if (l < n)
        dfs(l + 1, r, target, cur + '(', res);
      if (r < l)
        dfs(l, r + 1, target, cur + ')', res);
    }

  };
  let ans = [];
  dfs(0, 0, n, "", ans);
  return ans;
};
// @lc code=end

