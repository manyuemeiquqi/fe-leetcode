/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root)
    return []
  const ans = [[root.val]]
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    const tmp = []
    while (len) {
      const cur = queue.shift()
      for (const child of cur.children)
        tmp.push(child)

      len--
    }
    queue.push(...tmp)
    if (tmp.length)
      ans.push(tmp.map(item => item.val))
  }
  return ans
}
// @lc code=end
