/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  let ans = 0;
  let stack = [];
  for (let i = 0, start = -1; i < s.length; i++) {
    if (s[i] == '(')stack.push(i);
    else {
      if (stack.length) {
        stack.pop();
        if (stack.length) {
          // 计算栈中还存在(
          ans = Math.max(ans, i - stack[stack.length - 1]);
        } else {
          // 计算消完的情况
          ans = Math.max(ans, i - start);
        }
      } else {
        start = i;
      }
    }
  }
  return ans;
};
// @lc code=end

