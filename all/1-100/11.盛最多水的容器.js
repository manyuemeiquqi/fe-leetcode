/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function (height) {
  let l = 0
  let r = height.length - 1
  let ans = -Infinity
  while (l < r) {
    ans = Math.max(ans, Math.min(height[l], height[r]) * (r - l))
    if (height[l] <= height[r])
      l++

    else
      r--
  }
  return ans
}
// 看了题解， 开始没想到怎么做，
// 既然长度板子高度都会变，那就先固定一个维度的趋势，长度在缩小，那么容量就取决于短板的高度
// @lc code=end
