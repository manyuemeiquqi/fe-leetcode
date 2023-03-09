/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const ans = [];
  nums.sort((a, b) => a - b);
  const length = nums.length;
  for (let i = 0; i < length - 2; i++) {
    if(i&&nums[i]==nums[i-1])continue
    let l = i+1, r = length - 1;

    while (r > l) {
      // if (ans[i] + nums[l] + nums[r]) {
      // }
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        ans.push([nums[i], nums[l], nums[r]]);
        while (r>l&& nums[r]==nums[--r]) {}
      }
    }
  }
  console.log('ans: ', ans);

  return ans;
};
threeSum([0,0,0,0,])
// @lc code=end

