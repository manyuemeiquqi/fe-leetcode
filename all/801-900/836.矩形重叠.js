/*
 * @lc app=leetcode.cn id=836 lang=javascript
 *
 * [836] 矩形重叠
 */

// @lc code=start
/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function (rec1, rec2) {
  const [x1, y1, x2, y2] = rec1
  const [x3, y3, x4, y4] = rec2
  //
  return !(y4 <= y1 || y3 >= y2 || x4 <= x1 || x3 >= x2)
  // 重叠条件不容易穷举，可以反向穷举出不重叠
}
// @lc code=end
