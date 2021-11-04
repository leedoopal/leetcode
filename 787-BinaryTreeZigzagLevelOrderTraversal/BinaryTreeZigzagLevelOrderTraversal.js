class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

let root;

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
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  let result = [];

  function loopQueue(root, i) {
    if (!root) return [];

    if (result[i]) {
      if (i % 2 === 0) {
        if (root.val !== null) result[i].push(root.val)
      } else {
        if (root.val !== null) result[i].unshift(root.val);
      }
    } else {
      if (root.val !== null) result[i] = [root.val]
    }

    loopQueue(root.left, i + 1);
    loopQueue(root.right, i + 1);
  }

  loopQueue(root, 0);

  return result;
};

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(null);
root.right.left = new TreeNode(null);
root.right.right = new TreeNode(5);

console.log(zigzagLevelOrder(root));
