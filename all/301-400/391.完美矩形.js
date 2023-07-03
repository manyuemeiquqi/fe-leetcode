/*
 * @lc app=leetcode.cn id=391 lang=javascript
 *
 * [391] 完美矩形
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
const isRectangleCover = function (rectangles) {
  const map = {}
  let area = 0
  let flag = false
  const getArea = (x1, y1, x2, y2) => {
    return Math.abs(x2 - x1) * Math.abs(y2 - y1)
  }
  for (let i = 0; i < rectangles.length; i++) {
    const [x1, y1, x2, y2] = rectangles[i]
    // 左下 x1 y1 右上 x2 y2
    const addCount = (x, y) => {
      if (map[`${x}|${y}`] === 4)
        flag = true // 次数达到4次，在网上就说明一定有重叠的矩形
      if (map[`${x}|${y}`])
        map[`${x}|${y}`]++
      else map[`${x}|${y}`] = 1
    }
    area += getArea(x1, y1, x2, y2)
    addCount(x1, y1)
    addCount(x1, y2)
    addCount(x2, y1)
    addCount(x2, y2)
  }
  if (flag)
    return false
  const countArr = Array.from({ length: 5 }, () => [])
  for (const [key, count] of Object.entries(map))
    countArr[count].push((key.split('|').map(item => Number(item))))
  for (let i = 3; i < countArr.length; i += 2) {
    if (countArr[i].length)
      return false
  }
  if (countArr[1].length === 4) {
    const [x1, y1] = countArr[1][0]
    const item = countArr[1].find(item => item[0] !== x1 && item[1] !== y1)
    if (item === undefined)
      return false
    const [x2, y2] = item
    const maxArea = getArea(x1, y1, x2, y2)
    if (area !== 0 && area === maxArea)
      return true
  }
  return false
}
// 看了题解 属于需要记忆的题，完美矩阵的充分必要条件是 四个出现一次的点组成的面积满足所有点位面积和，另一个是不会出现除了1外的奇数点
// @lc code=end
