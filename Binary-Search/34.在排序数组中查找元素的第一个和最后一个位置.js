/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  const ans = [];
if(nums.length==0) return [-1,-1]
  let l = 0, r = nums.length - 1;
  while (r > l) {
    let mid = (l + r) >> 1;
    if (nums[mid] >= target) r = mid;
    else l = mid + 1;

  }
  if(nums[l]!==target) return [-1,-1]
  // let
  ans.push(l);
  while ((l < nums.length - 1)&&nums[l]==nums[l+1]) {
    l++;
  }
  ans.push(l);
  return ans;
};
// @lc code=end

