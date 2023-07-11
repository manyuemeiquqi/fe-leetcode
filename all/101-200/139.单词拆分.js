/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const dp = new Array(s.length + 1).fill(false)// s i为结尾是否能被worddick匹配
  dp[0] = true
  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      // j为 0 到 i的分割点，判断 0-i是否匹配 i-j是否匹配 j=i为空字符，没有意义不考虑

      if (dp[j] && wordDict.includes(s.slice(j, i))) {
        dp[i] = true
        break
      }
    }
  }

  return dp.at(-1)
}
// 看了题解，重新看的话，匹配还是需要动态规划，分段匹配
// @lc code=end
