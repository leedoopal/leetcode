/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
  const result = [];

  let row = 0;
  let col = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;

  while (row <= bottom && col <= right) {
    // 0번째 row
    for (let i = col; i <= right; i++) {
      result.push(matrix[row][i])
    }

    for (let i = row + 1; i <= bottom; i++) {
      result.push(matrix[i][right])
    }

    if (row < bottom && col < right) {
      for (let i = right - 1; i >= col; i--) {
        result.push(matrix[bottom][i])
      }

      for (let i = bottom - 1; i > row; i--) {
        result.push(matrix[i][col])
      }
    }

    row++, col++, right--, bottom--;
  }

  return result;
};

console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]));
