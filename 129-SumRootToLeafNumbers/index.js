// https://leetcode.com/problems/sum-root-to-leaf-numbers/
class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

let root;

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumNumbers = function (root) {
  const recursive = (node, sum) => {
    if (!node) return 0;
    sum += String(node.val);

    if (!node.left && !node.right) return sum;
    return Number(recursive(node.left, sum)) + Number(recursive(node.right, sum));
  }

  return recursive(root, '')
};

root = new TreeNode(4);
root.left = new TreeNode(9);
root.right = new TreeNode(0);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(1);

console.log(sumNumbers(root));
