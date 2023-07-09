/*
 * @lc app=leetcode.cn id=673 lang=javascript
 *
 * [673] 最长递增子序列的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
  const dp1 = new Array(nums.length).fill(1)
  const dp2 = new Array(nums.length).fill(1)
  // 一个记录已i结尾长度，一个记录个数
  let maxNum = -Infinity
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        if (dp1[j] === dp1[i] + 1) {
          dp2[j] += dp2[i]
        }
        else if (dp1[i] + 1 > dp1[j]) {
          dp1[j] = dp1[i] + 1
          dp2[j] = dp2[i]
        }
      }
    }

    maxNum = Math.max(dp1[i], maxNum)
  }

  let res = 0
  for (let i = 0; i < dp1.length; i++) {
    if (maxNum === dp1[i])
      res += dp2[i]
  }
  // 这里理解错了，最长子序列不一定出现在某一位置上，可以出现任意位置上，所以要先求得每个位置上最长的长度跟个数，然后遍历累加
  //   另外一点是 长度如果拿到最新的，计数要进行重置掉
  //   dp1[j] = dp1[i] + 1
  //   dp2[j] = dp2[i]
  return res

//   LIS问题 300题的进阶
// 图解可看下方
// https://leetcode.cn/problems/number-of-longest-increasing-subsequence/solutions/433669/dong-tai-gui-hua-dong-tu-fu-zhu-li-jie-ru-you-bang/
}
// @lc code=end
