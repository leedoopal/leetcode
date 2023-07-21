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
var rightSideView = function(root) {
  if (!root) return [];

  let result = [];
  dfs(root, 0);
  return result;

  function dfs(node, height) {
    if (!node) return;
    result[height] = node.val;
    dfs(node.left, height + 1);
    dfs(node.right, height + 1);
  }
};
