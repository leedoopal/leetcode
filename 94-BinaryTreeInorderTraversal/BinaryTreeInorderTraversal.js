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
const inorderTraversal = function(root) {
  if (!root) return;

  const result = [];
  let node = root;

  while(node) {
    let arr = node.left;
    console.log('left: ', arr)

    if (!node.left) {
      result.push(node.val);
      node = node.right;
    } else {
      while (arr.right && arr.right !== node) {
        arr = arr.right;
      }

      if (!arr.right) {
        arr.right = node;
        node = node.left;
      } else {
        arr.right = null;
        result.push(node.val);
        node = node.right;
      }
    }
  }

  return result;
};
