/*
 * @lc app=leetcode.cn id=862 lang=javascript
 *
 * [862] 和至少为 K 的最短子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const shortestSubarray = function (nums, k) {
  const arr = [0]
  const len = nums.length
  for (let i = 0; i < len; i++)
    arr[i + 1] = arr[i] + nums[i]

  let ans = Infinity
  // 单调递增队列 存储左端点
  const queue = []
  // 固定有端点，找出满足条件的左端点
  let l = 0
  for (let r = 0; r <= len; r++) {
    // 这里意思是维持队列单调性，队列中栈顶大于当前的，栈顶一直pop
    // 为什么栈顶的元素可以抛弃，因为当前有更小的，如果栈顶之前满足，那么当前的更小，距离更短
    while (queue.length && arr[queue[queue.length - 1]] >= arr[r])
      queue.pop()

    // 抛弃队列头部元素，单调递增的特性，
    while (l < queue.length && arr[r] - arr[queue[l]] >= k) {
      ans = Math.min(ans, r - queue[l])
      // queue.shift() 不用shift可以优化时间复杂度
      l++
    }

    queue.push(r)
  }
  return ans === Infinity ? -1 : ans
  // 优化时间复杂度
}
shortestSubarray([1, 2, 3, 4, 5], 2)
// @lc code=end
