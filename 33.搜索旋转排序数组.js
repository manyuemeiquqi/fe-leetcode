/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 题意需要让在原数组上进行查找, 但是该数组为旋转数组， 即为部分有序， 可以通过比较每次的端点
var search = function(nums, target) {
  let l= 0,r = nums.length-1
  while (l<r) {
    mid= l+r>>1
    if(nums[mid]>=nums[0]) l=mid+1
    else r = mid
  }
  r= r==nums.length-1?r+1:r
  if(nums[0]>target) r=nums.length-1 
  else {
    l=0,
    r=r-1
  }
  while (l<r) {
    mid = l+r>>1
    if(nums[mid] == target) return mid
    if(nums[mid]<target){
      l=mid+1
    }else{
      r=mid-1
    }
  }

  console.log('r: ', l);
  return nums[l]==target?l:-1
};

search([1,3],0)
// search([4])
// @lc code=end

