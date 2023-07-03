/*
 * @lc app=leetcode.cn id=210 lang=javascript
 *
 * [210] 课程表 II
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
  if (prerequisites.length === 0) {
    const ans = new Array(numCourses)
    for (let i = 0; i < ans.length; i++)
      ans[i] = i
    return ans
  }
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
  return ans.length === numCourses ? ans : []
  // 优化，看看能不能把为0的考虑进去，而不是单独处理
}
// @lc code=end
