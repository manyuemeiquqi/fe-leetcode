/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root)
    return []
    // 层序遍历 reverse
  const queue = [root]
  const ans = [[root.val]]
  let flag = true
  while (queue.length) {
    let len = queue.length
    const tmp = []
    while (len--) {
      const cur = queue.shift()
      if (cur.left)
        tmp.push(cur.left)

      if (cur.right)
        tmp.push(cur.right)
    }

    if (tmp.length) {
      queue.push(...tmp)
      flag ? ans.push(tmp.map(node => node.val).reverse()) : ans.push(tmp.map(node => node.val))
      flag = !flag
    }
  }
  return ans
}
