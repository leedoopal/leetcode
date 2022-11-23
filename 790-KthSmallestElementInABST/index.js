class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

function kthSmallest(root, k) {
  const arr = [];

  while (true) {
    while (root !== null) {
      arr.push(root);
      root = root.left;
    }
    root = arr.pop();
    if (--k === 0) return root.val;
    root = root.right;
  }
}

// Driver Code
/* Constructed binary tree is
     1
   /   \
  2	   3
 / \  /
4	 5 6
*/

root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log(kthSmallest(root, 2));
