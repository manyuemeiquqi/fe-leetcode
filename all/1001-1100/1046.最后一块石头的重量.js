/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  stones.sort((a, b) => a - b)
  while (stones.length > 1) {
    const val = stones[stones.length - 1] - stones[stones.length - 2]
    stones.length = stones.length - 2

    if (val !== 0) {
      stones.push(val)
      stones.sort((a, b) => a - b)
    }
    // if (stones.length === 1) {
    //   stones.splice(stones[0] >= val ? 0 : 1, 0, val)
    // }
    // else {
    //   let l = 0
    //   let r = stones.length - 1
    //   while (l <= r) {
    //     const mid = (l + r) >> 1 + l
    //     if (stones[mid] >= val)
    //       r = mid
    //     else
    //       l = mid + 1
    //   }
    //   stones.splice(l, 0, val)
    // }
  }
  return stones[0] !== undefined ? stones[0] : 0
}
// 掌握想要什么就写出什么的二分，为了满足长度为1的情况，要 l<=r 然后就是该题需要找出 大于=target的第一个元素的索引值，然后插入到他后面
// @lc code=end
