/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长递增子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  const len = nums.length;
  const res = [];
  for (let i = 0; i < len; i++) {
    if (!res.length || res[res.length - 1] < nums[i]) {
      res.push(nums[i]);
    } else {
      // 二分查找到合适的位置,然后插入
      let l = 0; let r = res.length - 1;
      while (r > l) {
        const mid = l + ((r - l) >> 1);
        // console.log('mid: ', mid);
        if (res[mid] > nums[i]) {
          r = mid - 1;
        } else {



          
          l = mid + 1;
        }
      }
      res[l] = nums[i];
    }
  }
  return res.length;
};
lengthOfLIS([3, 5, 6, 2, 5, 4, 19, 5, 6, 7, 12]);
// @lc code=end
