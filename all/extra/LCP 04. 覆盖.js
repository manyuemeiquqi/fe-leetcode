/**
 * @param {number} n
 * @param {number} m
 * @param {number[][]} broken
 * @return {number}
 */
function domino(n, m, broken) {
  // 将破损数组转化成 i&j 的形式，方便后面进行筛选
  const tranBroken = new Set()
  broken.forEach((item) => {
    tranBroken.add(`${item[0]}&${item[1]}`)
  })

  // 建立二分图
  const L = []
  const R = [] // 左边的顶点（i+j为偶数）和右边的顶点（i+j为奇数）
  const E = new Map() // 以左边的顶点作为索引建立邻接表
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (tranBroken.has(`${i}&${j}`))
        continue // 若当前格子是破损的，则跳过；
      if ((i + j) % 2 !== 0) {
        R.push(`${i}&${j}`)
        continue
      }
      L.push(`${i}&${j}`)
      E.set(`${i}&${j}`, [])
      // 判断当前格子的上下左右是否有未破损的格子，若有则连边
      if (!tranBroken.has(`${i - 1}&${j}`) && i > 0)
        E.get(`${i}&${j}`).push(`${i - 1}&${j}`)

      if (!tranBroken.has(`${i}&${j - 1}`) && j > 0)
        E.get(`${i}&${j}`).push(`${i}&${j - 1}`)

      if (!tranBroken.has(`${i + 1}&${j}`) && i + 1 < n)
        E.get(`${i}&${j}`).push(`${i + 1}&${j}`)

      if (!tranBroken.has(`${i}&${j + 1}`) && j + 1 < m)
        E.get(`${i}&${j}`).push(`${i}&${j + 1}`)
    }
  }
  // 匈牙利算法
  // matched记录匹配情况，以右结点为索引
  const matched = {}
  // color记录右节点的被搜索情况
  const color = {}
  R.forEach((item) => {
    matched[item] = null
    color[item] = false
  })
  // 寻找交替路径
  const DFS = (v) => {
    const edges = E.get(v)
    for (let i = 0; i < edges.length; i++) {
      if (color[edges[i]])
        continue
      color[edges[i]] = true
      if (matched[edges[i]] === null || DFS(matched[edges[i]])) {
        matched[edges[i]] = v
        return true
      }
    }
    return false
  }
  for (let i = 0; i < L.length; i++) {
    R.forEach((item) => {
      color[item] = false
    })
    DFS(L[i])
  }
  // 统计匹配数
  let count = 0
  for (const key in matched) {
    if (matched[key] !== null)
      count++
  }
  return count
}
