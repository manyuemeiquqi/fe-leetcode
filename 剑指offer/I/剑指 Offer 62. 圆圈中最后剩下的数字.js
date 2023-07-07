/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const lastRemaining = function (n, m) {
  if (n === 1)
    return 0
  return (lastRemaining(n - 1, m) + m) % n
}

// 模拟会超时，只能有公式
// 需要掌握公式 看了题解
// https://www.acwing.com/video/205/
