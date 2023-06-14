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
 * @param {number} target
 * @return {number[][]}
 */
const pathSum = function (root, target) {
  let sum = 0
  const path = []
  const ans = []
  const dfs = (root) => {
    if (!root)
      return
    path.push(root.val)
    sum += root.val
    if (!root.left && !root.right) {
      if (sum === target)
        ans.push([...path])
    }
    dfs(root.left)

    dfs(root.right)
    const popVal = path.pop()
    sum -= popVal
  }
  dfs(root)
  return ans
}
