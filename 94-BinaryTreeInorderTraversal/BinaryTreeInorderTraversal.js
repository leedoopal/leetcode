class TreeNode {
  constructor(item) {
    this.val = item;
    this.left = this.right = null;
  }
}

let root;

function inorderTraversal(root) {
  if (!root) return [];

  const result = [];
  let node = root;

  while (node != null) {
    // 왼쪽 자식으로 초기화
    let arr = node.left;

    if (node.left == null) {
      // 왼쪽 자식이 없다면 push
      result.push(node.val);
      // 이전 루프에서 오른쪽 자식의 값을 반환
      node = node.right;
    } else {
      // 조건 중 루프 자체에 도달하면 중지
      // 왼쪽 하위트리가 이미 탐색되었음을 나타냄
      while (arr.right && arr.right !== node) {
        arr = arr.right;
      }

      if (!arr.right) {
        // 왼쪽 하위 트리의 가장 오른쪽 자식에 루트를 초기화
        arr.right = node;
        node = node.left;
      } else {
        arr.right = null;
        result.push(node);
        node = node.right;
      }

    }

  }

  return result;
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

console.log(inorderTraversal(root));
