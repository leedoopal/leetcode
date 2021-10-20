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

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
const deserialize = function(data) {
  let queue = data.split(',');

  function createTree(queue) {
    if (!queue) return null;

    let node = queue.shift();
    if (node === '-') return null;

    let root = new TreeNode(node);
    root.left = createTree(queue);
    root.right = createTree(queue);

    return root;
  }

  return createTree(queue);
}

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.right = new TreeNode(6);
root.left.left = new TreeNode(7);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
console.log(deserialize(serialize(root)));
// [1,2,3,7,6,4,5]
