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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
let preorderIndex = 0;
const buildTree = function (preorder, inorder) {
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i)
  }

  return arrayToTree(preorder, inorderMap, 0, inorder.length - 1)
};

const arrayToTree = (preorder, inorderMap, left, right) => {
  if (left > right) return null;

  const rootValue = preorder[preorderIndex++];
  const inorderRootValue = inorderMap.get(rootValue);

  const root = new TreeNode(rootValue);
  root.left = arrayToTree(preorder, inorderMap, left, inorderRootValue - 1)
  root.right = arrayToTree(preorder, inorderMap, inorderRootValue + 1, right)

  return root;
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]));
