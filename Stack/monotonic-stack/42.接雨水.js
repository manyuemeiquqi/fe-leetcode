/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */

// 找到一个柱子的左边柱子的最大值 右边柱子的最大值 比较用min取值

let trap = function (height) {
  let ans = 0;
  const stk = [0];
  for (let i = 1; i < height.length; i++) {
    if (height[i] <= height[stk[stk.length - 1]]) {
      stk.push(i);
    } else {
      while (stk.length && height[stk[stk.length - 1]] < height[i]) {
        cur = stk.pop();
        if (stk.length){
          ans += (i - stk[stk.length - 1] - 1) * (Math.min(height[i], height[stk[stk.length - 1]] ) - height[cur]);
        }
      }
      stk.push(i);
    }
  }
  return ans;
};
trap([4,2,0,3,2,5])
// @lc code=end

