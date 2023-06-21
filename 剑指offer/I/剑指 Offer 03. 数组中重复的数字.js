/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function (nums) {
  const set = new Set()
  for (const num of nums) {
    if (set.has(num))
      return num

    else
      set.add(num)
  }
}
// 需要掌握原地交换，
