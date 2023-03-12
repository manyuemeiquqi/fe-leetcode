/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 一般需要快排序
// 另一种 常数空间的 看y总代码
var sortColors = function (nums) {
    let count0 = 0, count1 = 0, count2 = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            count0++
        }
        else if (nums[i] == 1) {
            count1++
        } else count2++
    }
    for (let i = 0; i < nums.length; i++) {
        if (count0) {
            nums[i] = 0
            count0--
            continue
        }
        if (count1) {
            nums[i] = 1
            count1--
            continue
        }
        nums[i] = 2
        count2--
    }
};
sortColors([2, 0, 2, 1, 1, 0])
// @lc code=end

