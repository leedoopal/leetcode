// https://leetcode.com/explore/interview/card/top-interview-questions-medium/112/design/812/

class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

let root;

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
const serialize = function(root) {
  if (!root) return '-';

  return `${root.val},${serialize(root.left)},${serialize(root.right)}`
};

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(6);
root.left.left = new TreeNode(7);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log(serialize(root));
// [1,2,3,7,6,4,5]
