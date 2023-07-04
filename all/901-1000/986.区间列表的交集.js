/*
 * @lc app=leetcode.cn id=986 lang=javascript
 *
 * [986] 区间列表的交集
 */

// @lc code=start
/**
 * @param {number[][]} firstList
 * @param {number[][]} secondList
 * @return {number[][]}
 */
const intervalIntersection = function (firstList, secondList) {
  let i = 0
  let j = 0
  // for
  const ans = []
  while (i < firstList.length && j < secondList.length) {
    const a = firstList[i]
    const b = secondList[j]
    if (b[0] > a[1]) {
      i++
      continue
    }
    if (a[0] > b[1]) {
      j++
      continue
    }
    if (a[0] <= b[1] && a[0] >= b[0]) {
      if (a[1] < b[1])
        i++
      else
        j++
      ans.push([a[0], Math.min(a[1], b[1])])
    }
    else if (b[0] <= a[1] && b[0] >= a[0]) {
      if (a[1] < b[1])
        i++

      else
        j++

      ans.push([b[0], Math.min(a[1], b[1])])
    }
  }

  // 之前枚举了太多交集的情况了，不好处理，简化思考从两个点转换为一个点 a的左端点在b的区间内部 b的端点在a的区间内部，这样就好处理了
  return ans
}
// @lc code=end
