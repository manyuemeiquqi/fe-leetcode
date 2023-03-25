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


//一个指针将字符串划分为两个部分，dp[]+ 判断剩余子串是否在字典中
var wordBreak = function (s, wordDict) {
    const dp = new Array(s.length + 1).fill(false)
    const len = s.length
    dp[0] = true
    let set = new Set(wordDict)
    for (let i = 1; i <= len; i++) {
        for (let j = i - 1; j >= 0; j--) {
            let restStr = s.substring(j, i)
            if (set.has(restStr) && dp[j]) {
                dp[i] = true
                break
            }
        }

    }
    return dp[len]
};

// @lc code=end

