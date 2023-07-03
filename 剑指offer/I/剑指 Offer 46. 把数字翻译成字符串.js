/**
 * @param {number} num
 * @return {number}
 */
const translateNum = function (num) {
  // 0-25都可以翻译
  let ans = 0
  num = `${num}`

  const dfs = (i) => {
    if (i === num.length) {
      ans++
      return
    }
    dfs(i + 1)
    const larger = Number(num.slice(i, i + 2))
    if (larger >= 10 && larger <= 25)
      dfs(i + 2)
  }
  dfs(0)
  return ans
}
