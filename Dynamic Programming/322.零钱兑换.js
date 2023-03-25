/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */

// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount + 1).fill(Infinity)
    dp[0] = 0
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i - coin >= 0)
                dp[i] = Math.min(dp[i], dp[i - coin] + 1)
        }
    }
    console.log(dp);
    return dp[amount] == Infinity ? -1 : dp[amount]
};
coinChange([1, 2, 5],
    11
)
// @lc code=end

