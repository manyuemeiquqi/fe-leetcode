/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function (strs) {
  let ans = strs[0]
  for (let i = 1; i < strs.length; i++) {
    let j = 0
    for (; j < Math.min(strs[i].length, ans.length); j++) {
      if (ans[j] !== strs[i][j])
        break
    }
    ans = ans.slice(0, j)
    if (!ans.length)
      break
  }
  return ans
}
// @lc code=end
