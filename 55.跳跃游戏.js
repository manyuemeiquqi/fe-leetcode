/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let range = 0;
  const n = nums.length - 1;
  for (let i = 0; i <= n; i++) {
    range = Math.max(range, i + nums[i]);
    if (range >= n) {
      return true;
    }
    if(range<i+1) break
  }
  return false;
};
canJump([3,2,1,0,4])
// @lc code=end

