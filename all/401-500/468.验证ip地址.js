/*
 * @lc app=leetcode.cn id=468 lang=javascript
 *
 * [468] 验证IP地址
 */

// @lc code=start
/**
 * @param {string} queryIP
 * @return {string}
 */
const validIPAddress = function (queryIP) {
  const ans = ['IPv4', 'IPv6', 'Neither']
  const arr1 = queryIP.split('.')
  const arr2 = queryIP.split(':')
  if (arr1.length === 4) {
    // 前导0跟数据范围
    for (let i = 0; i < 4; i++) {
      if (arr1[i] === '' || +arr1[i] < 0 || +arr1[i] > 255 || (`${+arr1[i]}`).length !== arr1[i].length)
        return ans[2]
    }
    return ans[0]
  }
  if (arr2.length === 8) {
    for (let i = 0; i < 8; i++) {
      const x = arr2[i]
      if (x.length === 0 || x.length > 4)
        return ans[2]
      // for (let j = 0; j < x.length; j++) {
      //   if (x[j].toLocaleLowerCase().charCodeAt() > 'f'.charCodeAt())
      //
      // }
      if (!/^[\da-fA-F]{1,4}$/g.test(x))
        return ans[2]
    }
    return ans[1]
  }

  return ans[2]
  // 更像是工具函数题
}
