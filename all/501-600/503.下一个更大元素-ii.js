/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function (nums) {
  const stk = []
  const len = nums.length
  nums = nums.concat(nums)
  const ans = new Array(len).fill(-1)
  for (let i = 0; i < nums.length; i++) {
    if (stk.length === 0) {
      stk.push(i)
    }
    else {
      while (stk.length && nums[stk.at(-1)] < nums[i]) {
        const idx = stk.pop()
        ans[idx] = nums[i]
      }
      stk.push(i)
    }
  }
  ans.length = len
  return ans
}
// 优化时间空间 这里看了题解，要明白为什么要递减的栈
// @lc code=end
