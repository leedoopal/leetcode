class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

const result = [];
let root;

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const preorderTraversal = function (root) {
  if (!root) return [];

  const arr = [];
  arr.push(root);

  while (arr.length > 0) {
    const node = arr.pop();
    result.push(node.val);

    if (node.right !== null) arr.push(node.right)
    if (node.left !== null) arr.push(node.left)
  }

  return result;
};

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(preorderTraversal(root));
