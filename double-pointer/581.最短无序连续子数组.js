/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 左右两端的端点是边界
// 端点以外的数组部分满足升序
var findUnsortedSubarray = function (nums) {
    let max = nums[0]
    let min = nums[nums.length - 1]
    let n = nums.length
    let r = -1, l = 0
    for (let i = 0; i < n; i++) {
        if (nums[i] < max) {
            r = i
        } else {
            max = nums[i]
        }

        if (nums[n - i - 1] > min) {
            l = n - i - 1
        } else {
            min = nums[n - i - 1]
        }
    }

    return r - l + 1
};
// @lc code=end

