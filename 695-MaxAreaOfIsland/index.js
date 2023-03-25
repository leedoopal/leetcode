function recursive(grid, row, col) {
  if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length) return 0;
  if (!grid[row] || !grid[row][col]) return 0;

  grid[row][col] = null;

  return 1 + recursive(grid, row - 1, col) + recursive(grid, row + 1, col) + recursive(grid, row, col - 1) + recursive(grid, row, col + 1);
}

/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
  let answer = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        answer = Math.max(answer, recursive(grid, i, j))
      }
    }
  }

  return answer;
};

maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]])
