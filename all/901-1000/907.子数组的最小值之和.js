/*
 * @lc app=leetcode.cn id=907 lang=javascript
 *
 * [907] 子数组的最小值之和
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
const sumSubarrayMins = function (arr) {
  const stk = []
  let count = 0
  const mod = 1e9 + 7
  const len = arr.length
  const r = new Array(len).fill(len)
  const l = new Array(len).fill(-1)
  for (let i = 0; i < len; i++) {
    while (stk.length && arr[stk.at(-1)] > arr[i]) {
      const idx = stk.pop()
      r[idx] = i
    }
    stk.push(i)
  }
  stk.length = 0
  for (let i = len - 1; i >= 0; i--) {
    while (stk.length && arr[stk.at(-1)] >= arr[i]) {
      const idx = stk.pop()
      l[idx] = i
    }
    stk.push(i)
  }

  for (let i = 0; i < len; i++) {
    count += (i - l[i]) * (r[i] - i) * arr[i]
    count %= mod
  }

  return count
  // 看了题解
  // 贡献度计算，已i为例，左右找到第一个比arr[i]小的位置，就能够组成( i-左边界) * (右边界-i) 个不同的连续子数组，这些子数组的min 都是 arr[i]
// 还有一个注意点是对于重复元素的处理，l, 必须有一侧要到重复元素截止，防止贡献重复计算
}

// @lc code=end
