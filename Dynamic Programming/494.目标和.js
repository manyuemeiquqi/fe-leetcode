/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//这里是二位dp降为一维， 二维好理解些
var findTargetSumWays = function (nums, target) {
    const sum = nums.reduce((a, b) => a + b);
    if (Math.abs(target) > sum) return 0
    if ((sum + target) % 2) return 0
    let len = sum + target >> 1
    const dp = new Array(len + 1).fill(0)
    dp[0] = 1
    for (let i = 0; i < nums.length; i++) {
        for (let j = len; j >= nums[i]; j--) {
            dp[j] += dp[j - nums[i]]
        }
        console.log('dp: ', dp);

    }
    return dp[len]
};
// @lc code=end

