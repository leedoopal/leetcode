// https://leetcode.com/problems/construct-quad-tree/

// Definition for a QuadTree node.
function Node(val, isLeaf, topLeft, topRight, bottomLeft, bottomRight) {
  this.val = val;
  this.isLeaf = isLeaf;
  this.topLeft = topLeft;
  this.topRight = topRight;
  this.bottomLeft = bottomLeft;
  this.bottomRight = bottomRight;
}

/**
 * @param {number[][]} grid
 * @return {Node}
 */
const construct = function (grid) {
  const createTree = (row = 0, col = 0, size = grid.length) => {
    if (size <= 0) return null;
    const start = grid[row][col];

    for (let i = row; i < row + size; i++) {
      for (let j = col; j < col + size; j++) {
        const current = grid[i][j];
        if (start === current) continue;
        const divide = size / 2;
        const topLeft = createTree(row, col, divide);
        const topRight = createTree(row, col + divide, divide);
        const bottomLeft = createTree(row + divide, col, divide);
        const bottomRight = createTree(row + divide, col + divide, divide);

        return new Node(true, false, topLeft, topRight, bottomLeft, bottomRight)
      }
    }

    return new Node(start === 1, true, null, null, null, null);
  }

  return createTree()
};

console.log(construct([[1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0], [1, 1, 1, 1, 0, 0, 0, 0]]));
