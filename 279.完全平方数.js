/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 1、第一样看上去可以用dfs
// class Solution {
//     public:
//         int res=1e5;
//         int numSquares(int n) {
//             dfs(0,n);
//             return res;
//         }
//         void dfs(int u,int sum)
//         {
//             if(u>=res)return ;
//             if(sum==0)
//             {
//                 res=min(u,res);
//             }
//             for(int i=sqrt(sum);i>=1;i--)
//             {
//                 dfs(u+1,sum-i*i);
//             }
//         }


var numSquares = function (n) {
    // const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER)
    const dp = new Array(n + 1).fill(Infinity)


    dp[0] = 0
    for (let i = 1; i * i <= n; i++) {
        for (let j = i * i; j <= n; j++) {
            dp[j] = Math.min(dp[j], dp[j - i * i] + 1)
        }
    }
    return dp[n]
};
// @lc code=end

