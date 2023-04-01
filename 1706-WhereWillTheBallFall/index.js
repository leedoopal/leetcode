/**
 * @param {number[][]} grid
 * @return {number[]}
 */
const findBall = function (grid) {
  const arr = [];

  function recursive(row, col) {
    if (row === grid.length) return col;
    let cur = grid[row][col];
    if (cur === 1 && grid[row][col + 1] === 1) return recursive(row + 1, col + 1);
    if (cur === -1 && grid[row][col - 1] === -1) return recursive(row + 1, col - 1);
    return -1;
  }

  for (let i = 0; i < grid[0].length; i++) arr.push(recursive(0, i));
  return arr;
};

console.log(findBall([[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]));
