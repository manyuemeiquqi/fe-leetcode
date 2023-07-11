/**
 * @param {number} n
 * @return {number}
 */
const countDigitOne = function (n) {
  n = `${n}`
  let i = 0
  let ans = 0
  while (i < n.length) {
    const front = +n.slice(0, i)
    const end = n.slice(i + 1)
    const len = end === '' ? 0 : end.length

    let count
    const cur = +n[i]
    if (cur > 1)
      count = (front + 1) * 10 ** len
    else if (cur === 1)
      count = front * 10 ** len + (+end) + 1
    else
      count = front * 10 ** len

    ans += count
    i++
  }
  return ans
}
