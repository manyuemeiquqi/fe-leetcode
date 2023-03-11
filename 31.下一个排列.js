/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//注意题目 要求原题翻转
var nextPermutation = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1])

            for (let j = nums.length - 1; j > i; j--) {
                if (nums[j] > nums[i]) {
                    [nums[i], nums[j]] = [nums[j], nums[i]];

                    let r = nums.length - 1
                    l = i + 1
                    while (l < r) {
                        [nums[l], nums[r]] = [nums[r], nums[l]]
                        l++
                        r--
                    }
                    return
                }
            }

    }
    return nums.reverse();
};