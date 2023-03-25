/*
 * @lc app=leetcode.cn id=647 lang=javascript
 *
 * [647] 回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let count = 0;
  const n = s.length;
  s = " " + s + " ";
  const dp = Array.from(new Array(n + 2), () => new Array(n + 2).fill(true));
  for (let len = 1; len <= n; len++) {
    for (let l = 1, r = l + len - 1; r <= n; l++, r++) {
      dp[l][r] = s.charAt(l) == s.charAt(r) && dp[l + 1][r - 1];
      if (dp[l][r]) count++;
    }
  }
  console.log('count: ', count);

  return count;
};

countSubstrings("aaa")
// @lc code=end

