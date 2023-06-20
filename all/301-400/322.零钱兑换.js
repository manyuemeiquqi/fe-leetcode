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

// class Solution {
//   public:
//       int coinChange(vector<int>& coins, int m) {
//           vector<int> f(m + 1, 1e8);
//           f[0] = 0;
//           for (auto v: coins)
//               for (int j = v; j <= m; j ++ )
//                   f[j] = min(f[j], f[j - v] + 1);
//           if (f[m] == 1e8) return -1;
//           return f[m];
//       }

const coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++)
      dp[i] = Math.min(dp[i], dp[i - coin] + 1)
  }
  return dp[amount] === Infinity ? -1 : dp[amount]
}
// dfs好像也能做，用dp做的时候  要记住怎么循环，从第低到高 循环
// @lc code=end
