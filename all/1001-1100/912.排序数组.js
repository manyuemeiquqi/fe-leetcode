/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1)
  return nums
}

// 快速排序注意点，1、递归边界取值取右边界 2、因为mid 也会进行交换，所以要缓存 arr[i+j>>1] 而不是i+j>>1
function quickSort(arr, l, r) {
  if (l >= r)
    return
  let i = l - 1
  let j = r + 1

  const mid = arr[i + j >> 1]
  // const mid = i + j >> 1
  while (i < j) {
    do
      i++
    while (mid > arr[i])
    do
      j--
    while (mid < arr[j])
    if (i < j)
      [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  quickSort(arr, l, j)
  quickSort(arr, j + 1, r)
}
// @lc code=end
