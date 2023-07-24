/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const col = grid.length;
  const row = grid[0].length;

  // 첫번째 열 내에서 이동한 거리를 계산
  for (let i = 1; i < col; i++) {
    grid[i][0] += grid[i - 1][0];
  }

  // 첫번째 행내에서 이동한 거리를 계산
  for (let j = 1; j < row; j++) {
    grid[0][j] += grid[0][j - 1]
  }

  for (let i = 1; i < col; i++) {
    for (let j = 1; j < row; j++) {
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }

  return grid[col - 1][row - 1];
};

console.log(minPathSum([[1, 3, 1], [1, 5, 1], [4, 2, 1]]));
