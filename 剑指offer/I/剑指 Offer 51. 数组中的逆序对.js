/**
 * @param {number[]} nums
 * @return {number}
 */
const reversePairs = function (nums) {
  let ans = 0
  const mergeSort = (nums, l, r) => {
    if (l >= r)
      return
    const mid = l + r >> 1
    mergeSort(nums, l, mid)
    mergeSort(nums, mid + 1, r)
    const tmp = []
    let i = l
    let j = mid + 1
    let k = 0
    while (i <= mid && j <= r) {
      if (nums[i] <= nums[j]) {
        tmp[k] = nums[i]
        i++
      }
      else {
        tmp[k] = nums[j]
        j++
        ans += mid - i + 1
      }
      k++
    }
    while (i <= mid)
      tmp[k++] = nums[i++]

    while (j <= r)
      tmp[k++] = nums[j++]

    let o = 0
    while (o < tmp.length)
      nums[l++] = tmp[o++]
  }
  mergeSort(nums, 0, nums.length - 1)
  return ans
}

// 看了 题解  需要掌握归并，另外一个是注意   if (nums[i] <= nums[j]) { 这个条件要<= 相等时先方法前面的，避免逆序对计算不正确
