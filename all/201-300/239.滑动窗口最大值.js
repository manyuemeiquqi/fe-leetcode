/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function (nums, k) {
  const queue = []
  const ans = []
  for (let i = 0; i < k; i++) {
    while (queue.length && nums[queue.at(-1)] <= nums[i])
      queue.pop()
    queue.push(i)
  }

  ans[0] = nums[queue[0]]
  for (let i = 1; i <= nums.length - k; i++) {
    // 递增
    if (queue[0] === i - 1)
      queue.shift()
    const idx = i + k - 1
    while (queue.length && nums[queue.at(-1)] <= nums[idx])
      queue.pop()
    queue.push(idx)
    ans[i] = nums[queue[0]]
  }
  return ans
}
// 没想出来，看了题解，要维护一个单调队列，
// @lc code=end
