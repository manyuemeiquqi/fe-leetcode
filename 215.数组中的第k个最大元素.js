/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  const quickSort = (arr, l, r) => {
    if (l >= r)
      return
    let i = l - 1
    let j = r + 1
    const baseVal = arr[i + j >> 1]
    while (i < j) {
      do
        i++
      while (arr[i] < baseVal)
      do
        j--
      while (arr[j] > baseVal)
      if (i < j)
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    quickSort(arr, l, j)
    quickSort(arr, j + 1, r)
  }
  quickSort(nums, 0, nums.length - 1)
  return nums[nums.length - k]
}
// 这个快速排序还是不懂为什么取j，先记住模版把
// @lc code=end
