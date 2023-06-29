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
// 归并排序
function mergeSort(arr, l, r) {
  if (l >= r)
    return
  const mid = l + r >> 1
  mergeSort(arr, l, mid)
  mergeSort(arr, mid + 1, r)
  let k = 0
  // 左右两个归并数组的指针起点 i j
  let i = l
  let j = mid + 1
  const tmp = []
  while (i <= mid && j <= r) {
    if (arr[i] <= arr[j])
    // 谁小谁填入tmp
      tmp[k++] = arr[i++]
    else tmp[k++] = arr[j++]
  }
  while (i <= mid)
    tmp[k++] = arr[i++]

  while (j <= r)
    tmp[k++] = arr[j++]

  for (let i = l, j = 0; i <= r; i++, j++)
    arr[i] = tmp[j]
}
// @lc code=end
