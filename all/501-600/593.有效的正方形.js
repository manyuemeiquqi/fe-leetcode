/*
 * @lc app=leetcode.cn id=593 lang=javascript
 *
 * [593] 有效的正方形
 */

// @lc code=start
/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function (p1, p2, p3, p4) {
  // r1 r2 r3
  // 以p1 为中心点
  const getLen = (a, b) => {
    const [x1, y1] = a
    const [x2, y2] = b
    return Math.abs(x1 - x2) ** 2 + Math.abs(y1 - y2) ** 2
  }
  const getMid = (a, b) => {
    const [x1, y1] = a
    const [x2, y2] = b
    return [x1 + x2, y1 + y2].join('')
  }

  // const arr =[]
  const r2 = getLen(p1, p2)
  const r3 = getLen(p1, p3)
  const r4 = getLen(p1, p4)
  // 还要确定交叉点在一个位置上
  if (r2 === 0 || r3 === 0 || r4 === 0)
    return false

  if (r2 === r3)
    return r3 * 2 === r4 && getMid(p1, p4) === getMid(p2, p3)
  else if (r2 === r4)
    return r3 === r2 * 2 && getMid(p1, p3) === getMid(p2, p4)
  else
    return r3 === r4 && r3 * 2 === r2 && getMid(p1, p2) === getMid(p3, p4)
}

// @lc code=end
