/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let l = 0
  let r = nums.length - 1
  while (l < r) {
    const mid = (r - l >> 1) + l
    if (nums[mid] === target)
      return mid
    // else if (nums[mid] > target)
    //   r = mid

    if (nums[mid] > target)
      r = mid
    else
      l = mid + 1
  }
  return -1
}
// while (l < r) { if ok(m) r = m; else l = m + 1 } return l;
// 二分唯一指定写法：看各语言的标准库。 while (l < r) { if ok(m) r = m; else l = m + 1 } return l; 其他任何写法都是垃圾。
// https://www.zhihu.com/question/36132386/answer/530313852
search([-1, 0, 3, 5, 9, 12], 9)
// @lc code=end
