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
const trap = function (height) {
  let ans = 0
  const len = height.length
  let stack = []
  const left = new Array(len).fill(0)
  const right = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    const stackTop = stack[stack.length - 1] || 0
    if (height[i] < stackTop) {
      stack.push(height[i])
      left[i] = stack[0]
    }
    else {
      while (stack.length && stack[stack.length - 1] <= height[i])
        stack.pop()

      left[i] = stack[0] || 0
      stack.push(height[i])
    }
  }
  stack = []
  for (let i = len - 1; i >= 0; i--) {
    const stackTop = stack[stack.length - 1] || 0
    if (height[i] < stackTop) {
      stack.push(height[i])
      right[i] = stack[0]
    }
    else {
      while (stack.length && stack[stack.length - 1] <= height[i])
        stack.pop()

      right[i] = stack[0] || 0
      stack.push(height[i])
    }
  }
  for (let i = 0; i < len; i++) {
    if (Math.min(left[i], right[i]))
      ans += Math.min(left[i], right[i]) - height[i]
  }
  return ans
}
// 我记得还有种做法是横向面积累加，这种单调栈，注意栈需要保持什么顺序，取栈顶么？
// @lc code=end
