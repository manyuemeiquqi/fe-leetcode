/*
 * @lc app=leetcode.cn id=609 lang=javascript
 *
 * [609] 在系统中查找重复文件
 */

// @lc code=start
/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function (paths) {
  const map = {}
  for (const item of paths) {
    const [route, ...files] = item.split(' ')

    for (const file of files) {
      const [name, content] = file.split('(')
      const path = `${route}/${name}`
      if (map[content])
        map[content].push(path)
      else
        map[content] = [path]
    }
  }
  return Object.entries(map).filter(item => item[1].length !== 1).map(item => item[1])
}
// @lc code=end
