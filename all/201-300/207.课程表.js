/*
 * @lc app=leetcode.cn id=207 lang=javascript
 *
 * [207] 课程表
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  if (prerequisites.length === 0)
    return true
  const graph = {}
  const edgeCount = new Array(numCourses).fill(0) // 入度记录数组
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, preCourse] = prerequisites[i]
    if (graph[preCourse])
      graph[preCourse].push(course)
    else
      graph[preCourse] = [course]
    edgeCount[course]++
  }

  const queue = []

  for (let i = 0; i < edgeCount.length; i++) {
    if (edgeCount[i] === 0)
      queue.push(i)
  }
  const ans = [...queue]
  while (queue.length) {
    const item = queue.shift()
    if (graph[item]) {
      for (const i of graph[item]) {
        edgeCount[i]--
        if (edgeCount[i] === 0) {
          queue.push(i)
          ans.push(i)
        }
      }
    }
  }
  return ans.length === numCourses
  // 这里倒也不用dfs了，直接遍历就是可以了

  // 参考yxc代码 该题分类叫做图的拓扑排序，需要的数据结构为图跟一个度计数
}
// @lc code=end
