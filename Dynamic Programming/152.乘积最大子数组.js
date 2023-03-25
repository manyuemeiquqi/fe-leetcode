/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//滚动数组更新最大值

var maxProduct = function (nums) {
    let x = nums[0], y = nums[0], ans = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let tmp1 = y * nums[i]
        let tmp2 = x * nums[i]
        x = Math.max(tmp2, nums[i], tmp1)
        y = Math.min(tmp1, nums[i], tmp2)

        ans = Math.max(x, ans)

    }
    return ans
};
// @lc code=end

