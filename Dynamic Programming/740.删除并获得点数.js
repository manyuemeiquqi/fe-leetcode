/*
 * @lc app=leetcode.cn id=740 lang=javascript
 *
 * [740] 删除并获得点数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    const numberCount = []
    for (let i of nums) {
        numberCount[i] = (numberCount[i] || 0) + i
    }
    console.log('numberCount: ', numberCount);
    let dp = []
    dp[0] = 0
    dp[1] = numberCount[1] || 0
    for (let i = 2; i < numberCount.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + (numberCount[i] || 0))
    }
    return dp[dp.length - 1]
};
// @lc code=end

