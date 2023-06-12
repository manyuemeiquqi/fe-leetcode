/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function (root) {
// 层序遍历，返回每层的右边value
  if (!root)
    return []
  const ans = [root.val]
  const queue = [root]
  while (queue.length) {
    let len = queue.length
    const tmp = []
    while (len) {
      const cur = queue.shift()
      cur.left && tmp.push(cur.left)
      cur.right && tmp.push(cur.right)
      len--
    }
    queue.push(...tmp)
    if (tmp.length)
      ans.push(tmp.pop()?.val)
  }
  return ans
  // 思考下深度优先遍历如何去解决
}
// @lc code=end
