/*
 * @lc app=leetcode.cn id=992 lang=javascript
 *
 * [992] K 个不同整数的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const subarraysWithKDistinct = function (nums, k) {
  const map1 = {}
  const map2 = {}
  let cur1 = 0
  let cur2 = 0
  let ans = 0
  for (let l1 = 0, l2 = 0, r = 0; r < nums.length; r++) {
    if (!map1[nums[r]]) {
      map1[nums[r]] = 1
      cur1 += 1
    }
    else {
      map1[nums[r]]++
    }
    if (!map2[nums[r]]) {
      map2[nums[r]] = 1
      cur2 += 1
    }
    else {
      map2[nums[r]]++
    }
    while (cur1 > k) {
      const tmp = nums[l1++]
      if (--map1[tmp] === 0)
        cur1 -= 1
    }
    while (cur2 > k - 1) {
      const tmp = nums[l2++]
      if (--map2[tmp] === 0)
        cur2 -= 1
    }
    ans += (r - l1 + 1) - (r - l2 + 1)
  }
  return ans
}
// 优化
// 看了题解，自己开始想到了用滑动窗口，但想到在满足k个后需要暴力一遍窗口去判断觉得不现实，就放弃了
// 题解转换为窗口的数据不是满足k，而是k以及k一下都满足，这样可以通过一个多项式相减就拿到为k的
//  如何求得题目要求的连续
// @lc code=end
