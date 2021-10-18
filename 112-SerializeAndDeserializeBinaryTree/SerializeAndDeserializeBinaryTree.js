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
  if (!root) return [];

  const result = [root.val];
  let queue = root;

  while (queue) {
    let node = queue.left;
    console.log('node: ', node);

    if (queue.left == null) {
      result.push(queue.val);
      queue = queue.right;
    } else {
      // result.push(node.val);
      // result.push(null);
      console.log('right: ', queue.right);
      queue = queue.right;
    }
  }

  return result;
};

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log(serialize(root));
