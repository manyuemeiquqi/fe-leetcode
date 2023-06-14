/**
 * @param {number} n
 * @return {number}
 */
const numWays = function (n) {
  const dp = new Array(n).fill(0)
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++)
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007

  return dp[n]
}
