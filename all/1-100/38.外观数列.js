/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
  const getStr = (s) => {
    let ans = ''
    for (let i = 0, count = 0, cur = s[0]; i < s.length; i++) {
      if (cur === s[i]) {
        count++
      }
      else {
        ans += `${count}${cur}`
        cur = s[i]
        count = 1
      }
      if (i === s.length - 1)
        ans += `${count}${cur}`
    }
    return ans
  }
  const dp = ['1']
  for (let i = 1; i < n; i++) dp[i] = getStr(dp[i - 1])
  return dp[n - 1]
}
// @lc code=end
