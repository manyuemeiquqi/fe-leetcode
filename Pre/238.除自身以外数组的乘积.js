/*
 * @lc app=leetcode.cn id=238 lang=javascript
 *
 * [238] 除自身以外数组的乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 不用除法意思是只能通过乘法
// 利用前缀积解决
var productExceptSelf = function (nums) {
    const n = nums.length

    const ans = Array.from({ length: n }, () => 1)
    console.log('ans: ', ans);

    for (let i = 1; i < n; i++) {
        ans[i] = ans[i - 1] * nums[i - 1]
    }
    for (let i = n - 1, s = 1; i >= 0; i--) {
        ans[i] *= s
        s *= nums[i]
    }


    return ans
};
// @lc code=end

